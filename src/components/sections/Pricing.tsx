"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { course, ctaInscricao } from "@/lib/data";

const includes = [
  "Clínica Bar Muscle Up completa",
  "Clínica Handstand Walk completa",
  "Progressões solo → suspenso → invertido",
  "Trabalho de mobilidade, core e grip",
  "Orientações técnicas com Paty Moura e Chan (i.R.C)",
];

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
            Vagas limitadas para garantir atenção técnica e qualidade no
            treino. Formato presencial na {course.partner}.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-12 max-w-xl">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-black p-8 sm:p-10">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-accent/10" />

            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                Pacote clínicas
              </p>
              <h3 className="mt-3 font-display text-3xl text-white sm:text-4xl">
                BMU + HSW
              </h3>
              <p className="mt-2 text-sm text-white/50">
                Acesso às duas abordagens com o método i.R.C
              </p>

              <div className="mt-8 flex items-end gap-2">
                <span className="font-display text-5xl text-white sm:text-6xl">
                  Sob consulta
                </span>
              </div>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/40">
                Valores e turmas pela {course.partner}
              </p>

              <ul className="mt-8 space-y-3 border-t border-white/10 pt-8">
                {includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-white/75"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button {...ctaInscricao} className="w-full sm:flex-1">
                  {course.cta}
                </Button>
                <Button
                  href="#clinicas"
                  variant="ghost"
                  className="w-full sm:flex-1"
                >
                  Revisar programa
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
