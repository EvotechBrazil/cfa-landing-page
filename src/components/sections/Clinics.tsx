"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { toesToBar, barMuscleUp } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

gsap.registerPlugin(ScrollTrigger);

type Clinic = typeof toesToBar;

function ClinicCard({ clinic, index }: { clinic: Clinic; index: number }) {
  return (
    <article
      className="clinic-card group relative overflow-hidden rounded-3xl border border-white/10 bg-surface p-6 sm:p-8 lg:p-10"
      style={
        {
          "--clinic-accent": clinic.accent,
        } as React.CSSProperties
      }
    >
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-20 blur-3xl transition group-hover:opacity-35"
        style={{ background: clinic.accent }}
      />

      <div className="relative">
        <div className="mb-8 flex items-start justify-between gap-4">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-[0.28em]"
              style={{ color: clinic.accent }}
            >
              Clínica {clinic.code}
            </p>
            <h3 className="mt-3 font-display text-3xl tracking-tight text-white sm:text-4xl lg:text-5xl">
              {clinic.name}
            </h3>
          </div>
          <span
            className="rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em]"
            style={{
              borderColor: `${clinic.accent}55`,
              color: clinic.accent,
            }}
          >
            {clinic.short}
          </span>
        </div>

        <p className="max-w-md text-sm leading-relaxed text-white/60 sm:text-base">
          {clinic.pitch}
        </p>

        <ol className="mt-8 space-y-3">
          {clinic.modules.map((mod, i) => (
            <li
              key={mod.title}
              className="module-row flex gap-4 rounded-2xl border border-white/5 bg-black/30 p-4 transition hover:border-white/15"
            >
              <span
                className="font-display text-lg leading-none"
                style={{ color: clinic.accent }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-white">
                  {mod.title}
                </p>
                <p className="mt-1 text-sm text-white/50">{mod.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 transition duration-500 group-hover:scale-x-100"
        style={{ background: clinic.accent }}
      />
    </article>
  );
}

export function Clinics() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".clinic-card",
        { autoAlpha: 0, y: 80 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          stagger: 0.18,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 75%",
          },
        },
      );

      gsap.utils.toArray<HTMLElement>(".module-row").forEach((row, i) => {
        gsap.fromTo(
          row,
          { autoAlpha: 0, x: -20 },
          {
            autoAlpha: 1,
            x: 0,
            duration: 0.55,
            delay: (i % 7) * 0.04,
            ease: "power2.out",
            scrollTrigger: {
              trigger: row,
              start: "top 92%",
            },
          },
        );
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="clinicas"
      ref={root}
      className="relative overflow-hidden bg-black py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[min(80%,48rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Duas abordagens"
          title="Clínicas técnicas de barra"
          description="Programa completo de Toes to Bar e Bar Muscle Up — mobilidade, força, neural e finalização do movimento."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <ClinicCard clinic={toesToBar} index={0} />
          <ClinicCard clinic={barMuscleUp} index={1} />
        </div>
      </div>
    </section>
  );
}
