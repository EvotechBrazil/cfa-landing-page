"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { course } from "@/lib/data";
import { Button } from "@/components/ui/Button";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-watermark",
        { autoAlpha: 0, scale: 1.08 },
        { autoAlpha: 1, scale: 1, duration: 1.4, stagger: 0.1 },
      )
        .fromTo(
          ".hero-main",
          { autoAlpha: 0, y: 32 },
          { autoAlpha: 1, y: 0, duration: 1.05 },
          "-=0.95",
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

      gsap.to(".hero-watermark-img", {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".hero-main", {
        y: -24,
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
      {/* Fundo cenário — Paty | Chan como marca d'água */}
      <div className="pointer-events-none absolute inset-0">
        <div className="hero-watermark absolute inset-y-0 left-0 w-1/2 overflow-hidden opacity-[0.16] sm:opacity-[0.2]">
          <div className="hero-watermark-img absolute inset-0 scale-110">
            <Image
              src="/images/paty.jpg"
              alt=""
              fill
              priority
              sizes="50vw"
              className="object-cover object-[center_20%] grayscale"
            />
          </div>
        </div>
        <div className="hero-watermark absolute inset-y-0 right-0 w-1/2 overflow-hidden opacity-[0.16] sm:opacity-[0.2]">
          <div className="hero-watermark-img absolute inset-0 scale-110">
            <Image
              src="/images/chan.jpg"
              alt=""
              fill
              priority
              sizes="50vw"
              className="object-cover object-[center_15%] grayscale"
            />
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,rgb(44_48_54_/_0.4)_60%,rgb(44_48_54_/_0.95)_100%)]" />
        <div className="absolute left-1/4 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/8 blur-[100px]" />
        <div className="absolute right-1/4 top-1/3 h-64 w-64 translate-x-1/2 rounded-full bg-accent/8 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-5xl flex-col items-center px-5 pb-16 pt-28 text-center sm:px-8 sm:pb-20 sm:pt-32">
        {/* Foto central speakers.png — integrada, sem moldura/marcações */}
        <div className="hero-main relative w-full max-w-lg sm:max-w-xl md:max-w-2xl">
          <div
            className="relative mx-auto aspect-[4/5] w-full overflow-hidden sm:aspect-[5/4]"
            style={{
              maskImage:
                "radial-gradient(ellipse 72% 78% at 50% 45%, black 42%, transparent 78%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 72% 78% at 50% 45%, black 42%, transparent 78%)",
            }}
          >
            <Image
              src="/images/speakers.png"
              alt="Paty Moura e Chan — i.R.C Stronger Together"
              fill
              priority
              sizes="(max-width: 768px) 90vw, 720px"
              className="object-cover object-[center_18%]"
            />
          </div>
        </div>

        {/* Texto centralizado abaixo */}
        <div className="relative z-10 -mt-6 w-full max-w-3xl sm:-mt-4 md:mt-2">
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
