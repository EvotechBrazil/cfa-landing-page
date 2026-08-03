"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { course, ctaInscricao } from "@/lib/data";
import { Button } from "@/components/ui/Button";

gsap.registerPlugin(ScrollTrigger);

export function FinalCTA() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".final-line",
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 75%",
          },
        },
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contato"
      ref={root}
      className="relative overflow-hidden border-t border-white/10 bg-black py-28 sm:py-36"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,77,0,0.18),transparent_55%)]" />

      <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
        <p className="final-line text-xs font-semibold uppercase tracking-[0.28em] text-accent">
          {course.brand} × {course.partner}
        </p>
        <h2 className="final-line mt-4 font-display text-[clamp(2.5rem,8vw,5.5rem)] leading-[0.9] tracking-tight text-white">
          Stronger
          <br />
          Together
        </h2>
        <p className="final-line mx-auto mt-6 max-w-xl text-base text-white/60">
          Construa equilíbrio, força e técnica com Paty Moura e Chan. Bar Muscle
          Up e Handstand Walk com progressão real.
        </p>
        <div className="final-line mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button {...ctaInscricao}>{course.cta}</Button>
          <Button href="#palestrantes" variant="ghost">
            Conhecer Paty e Chan
          </Button>
        </div>
      </div>
    </section>
  );
}
