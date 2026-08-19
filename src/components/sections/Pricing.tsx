"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { checkoutHref, course, pricing } from "@/lib/data";
import { cn } from "@/lib/cn";

export function Pricing() {
  return (
    <section
      id="inscricao"
      className="relative overflow-hidden bg-surface py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
            Inscrição
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-tight text-white sm:text-5xl md:text-6xl">
            Garanta sua vaga na clínica
          </h2>
          <p className="mt-4 text-base text-white/60">
            Pacote das duas clínicas — Bar Muscle Up e Handstand Walk.{" "}
            {pricing.lot1Rule} Formato presencial na {course.partner}.
          </p>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-5xl gap-4 lg:grid-cols-3 lg:items-stretch">
          {pricing.lots.map((lot, i) => {
            const href = checkoutHref(lot);
            return (
              <Reveal key={lot.n} delay={i * 0.08} className="h-full">
                <article
                  className={cn(
                    "relative flex h-full flex-col overflow-hidden rounded-[2rem] border p-7 sm:p-8",
                    lot.current
                      ? "border-accent bg-black shadow-[0_0_40px_rgb(255_77_0_/_0.18)]"
                      : "border-white/10 bg-black/55",
                  )}
                >
                  {lot.current ? (
                    <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-accent/15" />
                  ) : null}

                  <div className="relative flex h-full flex-col">
                    <p
                      className={cn(
                        "text-xs font-semibold uppercase tracking-[0.24em]",
                        lot.current ? "text-accent" : "text-white/40",
                      )}
                    >
                      {lot.eyebrow}
                    </p>
                    <h3 className="mt-3 font-display text-2xl tracking-tight text-white sm:text-3xl">
                      {lot.label}
                    </h3>

                    <div className="mt-6 flex items-end gap-1">
                      <span className="font-display text-5xl leading-none text-white sm:text-6xl">
                        {lot.priceLabel}
                      </span>
                    </div>
                    <p className="mt-3 text-xs uppercase tracking-[0.16em] text-white/40">
                      {lot.current ? lot.note : "Valor do pacote BMU + HSW"}
                    </p>

                    <div className="mt-auto pt-8">
                      {href ? (
                        <Button href={href} external className="w-full">
                          {course.cta}
                        </Button>
                      ) : (
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/30">
                          {lot.note}
                        </p>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.18} className="mx-auto mt-10 max-w-xl">
          <ul className="space-y-3 rounded-[2rem] border border-white/10 bg-black/40 p-7 sm:p-8">
            {pricing.includes.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-white/75"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex justify-center">
            <Button href="#clinicas" variant="ghost">
              Revisar programa
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
