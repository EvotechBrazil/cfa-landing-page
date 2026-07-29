"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { course } from "@/lib/data";
import { Button } from "@/components/ui/Button";

gsap.registerPlugin(ScrollTrigger);

/**
 * Bordas desvanecidas: as fotos fundem no fundo em vez de virar retângulo.
 * Duas máscaras lineares cruzadas (intersect) — miolo 100% sólido, só as
 * bordas somem. Um radial único não funciona aqui: o raio necessário para
 * cobrir o box joga o fade todo para fora da área visível.
 */
const maskEdges = (x: [number, number], y: [number, number]) =>
  `linear-gradient(to right, transparent 0%, black ${x[0]}%, black ${x[1]}%, transparent 100%), ` +
  `linear-gradient(to bottom, transparent 0%, black ${y[0]}%, black ${y[1]}%, transparent 100%)`;

/** Centro: fade curto — a foto continua inteira e nítida. */
const CENTER_MASK = maskEdges([13, 87], [9, 84]);
/** Laterais: fade longo — vira marca d'água derretendo no fundo. */
const WATERMARK_MASK = maskEdges([26, 74], [18, 82]);

const maskStyle = (mask: string) => ({
  maskImage: mask,
  WebkitMaskImage: mask,
  maskComposite: "intersect" as const,
  WebkitMaskComposite: "source-in",
});

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-watermark",
        { autoAlpha: 0, x: (i) => (i === 0 ? -24 : 24) },
        { autoAlpha: 1, x: 0, duration: 1.1, stagger: 0.08 },
      )
        .fromTo(
          ".hero-main",
          { autoAlpha: 0, y: 28 },
          { autoAlpha: 1, y: 0, duration: 1.05 },
          "-=0.85",
        )
        .fromTo(
          ".hero-eyebrow",
          { autoAlpha: 0, y: 16 },
          { autoAlpha: 1, y: 0, duration: 0.55 },
          "-=0.35",
        )
        .fromTo(
          ".hero-line",
          { autoAlpha: 0, y: 36 },
          { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.07 },
          "-=0.3",
        )
        .fromTo(
          ".hero-copy",
          { autoAlpha: 0, y: 20 },
          { autoAlpha: 1, y: 0, duration: 0.65 },
          "-=0.4",
        )
        .fromTo(
          ".hero-cta",
          { autoAlpha: 0, y: 16 },
          { autoAlpha: 1, y: 0, duration: 0.6 },
          "-=0.35",
        );

      gsap.to(".hero-photos", {
        y: -18,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={root}
      className="relative min-h-[100svh] overflow-hidden bg-background"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/45 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_32%,rgb(44_48_54_/_0.5)_78%,rgb(44_48_54_/_0.97)_100%)]" />
        <div className="absolute left-1/4 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/8 blur-[100px]" />
        <div className="absolute right-1/4 top-1/3 h-64 w-64 translate-x-1/2 rounded-full bg-accent/8 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col items-center px-4 pb-16 pt-28 text-center sm:px-6 sm:pb-20 sm:pt-32">
        {/*
          Laterais coladas no centro (margem negativa = sem vão).
          Centro maior e em cor; laterais menores, P&B, 2º plano.
        */}
        <div className="hero-photos flex w-full max-w-6xl items-center justify-center">
          {/* Laterais: marca d'água, encostando por baixo do centro (sem vão) */}
          <div
            className="hero-watermark relative z-0 -mr-8 h-[270px] w-[98px] shrink-0 sm:-mr-12 sm:h-[380px] sm:w-[170px] md:-mr-16 md:h-[470px] md:w-[250px]"
            style={maskStyle(WATERMARK_MASK)}
          >
            {/* opacidade na imagem, não no wrapper: o GSAP anima o wrapper e
                sobrescreveria a classe com opacity:1 inline */}
            <Image
              src="/images/paty.jpg"
              alt=""
              fill
              priority
              sizes="250px"
              className="object-cover object-[center_15%] opacity-45 grayscale"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/40 to-transparent" />
          </div>

          {/* Centro maior — foco principal, acima das laterais */}
          <div className="hero-main relative z-10 w-[min(70%,520px)] shrink-0 sm:w-[min(64%,580px)] md:w-[640px]">
            {/* Glow atrás do centro: puxa o olho e clareia o miolo do fundo */}
            <div className="pointer-events-none absolute inset-0 -z-10 scale-110">
              <div className="absolute inset-x-[10%] inset-y-[8%] rounded-[50%] bg-accent/20 blur-[90px]" />
              <div className="absolute inset-x-[20%] inset-y-[16%] rounded-[50%] bg-white/15 blur-[70px]" />
            </div>
            <div
              className="relative aspect-[4/5] w-full sm:aspect-[5/4]"
              style={maskStyle(CENTER_MASK)}
            >
              <Image
                src="/images/speakers.png"
                alt="Paty Moura e Chan — i.R.C Stronger Together"
                fill
                priority
                sizes="(max-width: 768px) 70vw, 640px"
                className="object-cover object-[center_18%] [filter:saturate(1.28)_contrast(1.06)_brightness(1.3)]"
              />
            </div>
          </div>

          <div
            className="hero-watermark relative z-0 -ml-8 h-[270px] w-[98px] shrink-0 sm:-ml-12 sm:h-[380px] sm:w-[170px] md:-ml-16 md:h-[470px] md:w-[250px]"
            style={maskStyle(WATERMARK_MASK)}
          >
            <Image
              src="/images/chan.jpg"
              alt=""
              fill
              priority
              sizes="250px"
              className="object-cover object-[center_12%] opacity-45 grayscale"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-background/40 to-transparent" />
          </div>
        </div>

        <div className="relative z-10 mt-6 w-full max-w-3xl sm:mt-8">
          <p className="hero-eyebrow mb-4 inline-flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-accent">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_12px_#FF4D00]" />
            {course.partner} apresenta · {course.brand}
          </p>

          <h1 className="font-display text-[clamp(2.35rem,7vw,5rem)] leading-[0.9] tracking-tight text-white">
            <span className="hero-line block">{course.title}</span>
            <span className="hero-line mt-1 block text-white/90">
              {course.subtitle}
            </span>
          </h1>

          <p className="hero-copy mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:mt-6 sm:text-lg">
            {course.description}
          </p>

          <div className="hero-cta mt-8 flex flex-col items-center justify-center gap-3 sm:mt-9 sm:flex-row">
            <Button href="#inscricao">{course.cta}</Button>
            <Button href="#clinicas" variant="ghost">
              {course.ctaSecondary}
            </Button>
          </div>

          <div className="hero-copy mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
            <span>{course.format}</span>
            <span className="hidden h-1 w-1 rounded-full bg-white/25 sm:inline-block" />
            <span>Toes to Bar</span>
            <span className="hidden h-1 w-1 rounded-full bg-white/25 sm:inline-block" />
            <span>Bar Muscle Up</span>
            <span className="hidden h-1 w-1 rounded-full bg-white/25 sm:inline-block" />
            <span>Paty Moura & Chan</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex">
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/35">
          Scroll
        </span>
        <span className="scroll-line h-10 w-px bg-gradient-to-b from-accent to-transparent" />
      </div>
    </section>
  );
}
