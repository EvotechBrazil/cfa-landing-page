"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { speakers, course } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={className}
      width="14"
      height="14"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

export function Speakers() {
  const root = useRef<HTMLElement>(null);
  const img = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".speaker-copy > *",
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 70%",
          },
        },
      );

      if (img.current) {
        gsap.fromTo(
          img.current,
          { autoAlpha: 0, scale: 1.08, y: 40 },
          {
            autoAlpha: 1,
            scale: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 70%",
            },
          },
        );

        gsap.to(img.current, {
          yPercent: -10,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="palestrantes"
      ref={root}
      className="relative overflow-hidden bg-background py-24 sm:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div className="speaker-copy order-2 lg:order-1">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
            Palestrantes
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-tight text-white sm:text-5xl md:text-6xl">
            {speakers.title}
          </h2>
          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            {speakers.brand}
          </p>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/65 sm:text-lg">
            {speakers.bio}
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {speakers.people.map((person) => (
              <div
                key={person.name}
                className="rounded-2xl border border-white/10 bg-surface p-5"
              >
                <p className="font-display text-2xl tracking-wide text-white sm:text-3xl">
                  {person.name}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.16em] text-white/45">
                  {person.role}
                </p>
                <a
                  href={person.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent transition hover:text-accent-hot"
                >
                  <InstagramIcon />
                  {person.instagramHandle}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-white/10 bg-surface-elevated/60 p-4">
              <p className="font-display text-2xl text-white">BMU</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white/45">
                Bar Muscle Up
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-surface-elevated/60 p-4">
              <p className="font-display text-2xl text-white">HSW</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white/45">
                Handstand Walk
              </p>
            </div>
          </div>

          <p className="mt-8 text-xs uppercase tracking-[0.22em] text-white/40">
            Em parceria com {course.partner}
          </p>
        </div>

        <div className="order-1 lg:order-2">
          <div ref={img} className="grid grid-cols-2 gap-3 sm:gap-4">
            {speakers.people.map((person) => (
              <div
                key={person.name}
                className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-2xl shadow-accent/10 sm:rounded-3xl"
              >
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  sizes="(max-width: 1024px) 45vw, 22vw"
                  className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5">
                  <p className="font-display text-lg text-white sm:text-2xl">
                    {person.name}
                  </p>
                  <a
                    href={person.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1.5 inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/75 transition hover:text-accent sm:text-xs"
                  >
                    <InstagramIcon className="opacity-90" />
                    {person.instagramHandle}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
