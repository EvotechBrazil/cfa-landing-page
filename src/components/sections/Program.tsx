"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { benefits, forWho } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

const steps = [
  {
    n: "01",
    title: "Preparar",
    desc: "Mobilidade e core para abrir amplitude e controle.",
  },
  {
    n: "02",
    title: "Fortalecer",
    desc: "Base de força no solo e suspensa + hand grip.",
  },
  {
    n: "03",
    title: "Programar",
    desc: "Trabalho neural e técnico com progressões inteligentes.",
  },
  {
    n: "04",
    title: "Executar",
    desc: "Suspenso, entrada e finalização limpa do movimento.",
  },
];

const PER_PAGE = 2;

function ArrowIcon({ dir }: { dir: "left" | "right" }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={dir === "left" ? "rotate-180" : undefined}
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StepCard({ step }: { step: (typeof steps)[number] }) {
  return (
    <article className="relative flex h-full min-h-[280px] flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-background p-7 sm:min-h-[320px] sm:p-9">
      <div className="pointer-events-none absolute -right-3 -top-6 font-display text-[7.5rem] leading-none text-white/[0.04] sm:text-[9rem]">
        {step.n}
      </div>

      <div className="relative z-10">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
          Fase {step.n}
        </p>
        <h3 className="mt-4 font-display text-3xl tracking-tight text-white sm:text-4xl lg:text-5xl">
          {step.title}
        </h3>
        <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60 sm:text-base">
          {step.desc}
        </p>
      </div>

      <div className="relative z-10 mt-8 h-1 w-14 rounded-full bg-accent" />
    </article>
  );
}

export function Program() {
  const pages = useMemo(() => {
    const chunks: (typeof steps)[] = [];
    for (let i = 0; i < steps.length; i += PER_PAGE) {
      chunks.push(steps.slice(i, i + PER_PAGE));
    }
    return chunks;
  }, []);

  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const totalPages = pages.length;

  const goTo = useCallback(
    (next: number, dir?: number) => {
      const clamped = ((next % totalPages) + totalPages) % totalPages;
      setDirection(dir ?? (clamped > page ? 1 : -1));
      setPage(clamped);
    },
    [page, totalPages],
  );

  const next = useCallback(() => goTo(page + 1, 1), [goTo, page]);
  const prev = useCallback(() => goTo(page - 1, -1), [goTo, page]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && ["INPUT", "TEXTAREA"].includes(target.tagName)) return;
      const el = document.getElementById("programa-carousel");
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const visible =
        rect.top < window.innerHeight * 0.85 &&
        rect.bottom > window.innerHeight * 0.15;
      if (!visible) return;
      if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const current = pages[page];
  const rangeLabel = `${current[0].n}–${current[current.length - 1].n}`;

  const variants = {
    enter: (d: number) => ({
      x: d > 0 ? 70 : -70,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({
      x: d > 0 ? -70 : 70,
      opacity: 0,
    }),
  };

  return (
    <section id="programa" className="relative bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Método"
          title="Do solo ao movimento completo, passo a passo"
          description="Uma sequência clara de construção: preparar o corpo, fortalecer a base, programar o padrão motor e executar com precisão."
        />

        <div
          id="programa-carousel"
          className="mt-12 sm:mt-14"
          role="region"
          aria-roledescription="carrossel"
          aria-label="Fases do método"
        >
          <div className="mb-5 flex items-center justify-between gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">
              Fases {rangeLabel}
              <span className="text-white/25">
                {" "}
                · {page + 1}/{totalPages}
              </span>
            </p>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prev}
                aria-label="Página anterior"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-background text-white transition hover:border-accent hover:bg-accent hover:text-black"
              >
                <ArrowIcon dir="left" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Próxima página"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-background text-white transition hover:border-accent hover:bg-accent hover:text-black"
              >
                <ArrowIcon dir="right" />
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.12}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -60) next();
                  else if (info.offset.x > 60) prev();
                }}
                className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5"
              >
                {current.map((step) => (
                  <StepCard key={step.n} step={step} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2" role="tablist">
              {pages.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === page}
                  aria-label={`Página ${i + 1}`}
                  onClick={() => goTo(i, i > page ? 1 : -1)}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    i === page
                      ? "w-8 bg-accent"
                      : "w-2 bg-white/25 hover:bg-white/45",
                  )}
                />
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {steps.map((s, i) => {
                const pageOf = Math.floor(i / PER_PAGE);
                const active = pageOf === page;
                return (
                  <button
                    key={s.n}
                    type="button"
                    onClick={() => goTo(pageOf, pageOf > page ? 1 : -1)}
                    className={cn(
                      "rounded-full border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] transition",
                      active
                        ? "border-accent bg-accent/15 text-accent"
                        : "border-white/10 text-white/45 hover:border-white/25 hover:text-white/70",
                    )}
                  >
                    {s.n} {s.title}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-24 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="Por que participar" title="O que você leva" />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {benefits.map((b, i) => (
                <Reveal key={b.title} delay={i * 0.05}>
                  <div className="h-full rounded-2xl border border-white/10 bg-background/70 p-5">
                    <div className="mb-3 h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_#FF4D00]" />
                    <h4 className="font-semibold text-white">{b.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-white/50">
                      {b.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <SectionHeading eyebrow="Público" title="Para quem é" />
            <ul className="mt-10 space-y-3">
              {forWho.map((item, i) => (
                <Reveal key={item} delay={i * 0.06}>
                  <li className="flex items-start gap-4 rounded-2xl border border-white/10 bg-background/70 p-5">
                    <span className="mt-1 font-display text-lg text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-base text-white/80">{item}</p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
