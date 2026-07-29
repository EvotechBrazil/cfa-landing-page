"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { stats } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export function Stats() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".stat-item",
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        },
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative border-y border-white/10 bg-surface"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-white/10 md:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.label}
            className="stat-item bg-surface px-5 py-10 sm:px-8 sm:py-12"
          >
            <p className="font-display text-4xl tracking-tight text-white sm:text-5xl">
              {item.value}
            </p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
