"use client";

import { useEffect, useState } from "react";
import { enrollment, event } from "@/lib/data";
import { Button } from "@/components/ui/Button";

const ABERTURA = new Date(enrollment.opensAt).getTime();

type Restante = {
  aberto: boolean;
  dias: number;
  horas: number;
  minutos: number;
  segundos: number;
};

function calcular(agora: number): Restante {
  const ms = Math.max(0, ABERTURA - agora);
  return {
    aberto: ms === 0,
    dias: Math.floor(ms / 86_400_000),
    horas: Math.floor(ms / 3_600_000) % 24,
    minutos: Math.floor(ms / 60_000) % 60,
    segundos: Math.floor(ms / 1_000) % 60,
  };
}

const dd = (n: number) => String(n).padStart(2, "0");

function Numero({
  valor,
  legenda,
  compacto,
}: {
  valor: string;
  legenda: string;
  compacto?: boolean;
}) {
  return (
    <div className="flex flex-col items-center">
      <span
        className={
          compacto
            ? "font-display text-[clamp(1.6rem,5vw,2.4rem)] leading-none text-white tabular-nums"
            : "font-display text-[clamp(2.2rem,7vw,3.6rem)] leading-none text-white tabular-nums"
        }
      >
        {valor}
      </span>
      <span className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
        {legenda}
      </span>
    </div>
  );
}

function Unidade({ children }: { children: React.ReactNode }) {
  return (
    <span className="ml-0.5 mr-2 font-sans text-[0.6em] font-medium lowercase text-white/45">
      {children}
    </span>
  );
}

function Separador() {
  return (
    <span
      aria-hidden
      className="font-display text-[clamp(1.4rem,4vw,2.2rem)] leading-none text-accent/50"
    >
      :
    </span>
  );
}

export function Countdown({
  variant = "band",
}: {
  /** `hero` é a versão enxuta que vai dentro do hero; `band` é a faixa. */
  variant?: "hero" | "band";
}) {
  // Só conta depois de montar: o servidor renderiza num instante diferente do
  // navegador e a hidratação acusaria diferença nos segundos.
  const [restante, setRestante] = useState<Restante | null>(null);

  useEffect(() => {
    setRestante(calcular(Date.now()));
    const id = setInterval(() => setRestante(calcular(Date.now())), 1000);
    return () => clearInterval(id);
  }, []);

  const compacto = variant === "hero";
  const aberto = restante?.aberto ?? false;
  const temGrupo = Boolean(enrollment.whatsappGroupUrl);

  const chamada = aberto
    ? "Inscrições abertas"
    : "As inscrições abrem em";

  const numeros = restante ?? {
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
    aberto: false,
  };

  const relogio = (
    <div
      className="flex items-start justify-center gap-3 sm:gap-5"
      // Leitor de tela não precisa ouvir o segundo mudando 60x por minuto.
      aria-live="off"
      role="timer"
      aria-label={`Faltam ${numeros.dias} dias, ${numeros.horas} horas e ${numeros.minutos} minutos para as inscrições`}
    >
      <Numero valor={dd(numeros.dias)} legenda="dias" compacto={compacto} />
      <Separador />
      <Numero valor={dd(numeros.horas)} legenda="horas" compacto={compacto} />
      <Separador />
      <Numero valor={dd(numeros.minutos)} legenda="min" compacto={compacto} />
      <Separador />
      <Numero valor={dd(numeros.segundos)} legenda="seg" compacto={compacto} />
    </div>
  );

  const botao = temGrupo ? (
    <Button href={enrollment.whatsappGroupUrl} external>
      Entrar no grupo do WhatsApp
    </Button>
  ) : null;

  /**
   * No hero é uma tarja de uma linha, no topo. Foi medindo que se decidiu
   * assim: em bloco, abaixo dos botões, a contagem terminava em 1226px e
   * ficava fora da primeira tela de qualquer notebook — a foto grande come o
   * espaço. Na tarja ela aparece sem rolar, e o botão cheio com o texto longo
   * fica para a faixa lá embaixo, sem repetição.
   */
  if (compacto) {
    return (
      <div className="flex w-full justify-center">
        <div className="inline-flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 rounded-full bg-white/[0.06] px-5 py-2 ring-1 ring-white/10 backdrop-blur-sm">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
            {chamada}
          </span>

          {aberto ? null : (
            <span
              className="font-display text-lg leading-none text-white tabular-nums"
              role="timer"
              aria-label={`Faltam ${numeros.dias} dias e ${numeros.horas} horas para as inscrições`}
            >
              {/* a unidade sai da fonte display (que é caixa alta e estreita):
                  em minúscula e menor, ela não gruda no número */}
              {dd(numeros.dias)}
              <Unidade>d</Unidade>
              {dd(numeros.horas)}
              <Unidade>h</Unidade>
              {dd(numeros.minutos)}
              <Unidade>m</Unidade>
              {dd(numeros.segundos)}
              <Unidade>s</Unidade>
            </span>
          )}

          {temGrupo ? (
            <a
              href={enrollment.whatsappGroupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/70 underline decoration-accent/60 underline-offset-4 transition-colors hover:text-white"
            >
              Entrar no grupo
            </a>
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <section
      id="inscricoes-abrem"
      className="relative overflow-hidden border-y border-white/10 bg-surface/40 py-12 sm:py-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,77,0,0.14),transparent_65%)]" />

      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
          {chamada}
        </p>

        {aberto ? null : (
          <>
            <div className="mt-6">{relogio}</div>
            <p className="mt-6 text-sm text-white/60 sm:text-base">
              Abertura em <strong className="text-white">{enrollment.opensAtLabel}</strong>
              {" "}(horário de Brasília).
            </p>
          </>
        )}

        {/* Fora do bloco acima de propósito: aquele some quando as inscrições
            abrem, e a data da clínica tem de continuar na tela. Duas datas
            convivem na seção — a de cima é a da abertura, esta é a do evento. */}
        <p className="mt-2 text-sm text-white/60 sm:text-base">
          A clínica acontece em{" "}
          <strong className="text-white">
            {event.dateLabel} ({event.weekday})
          </strong>
          , na {event.place}.
        </p>

        <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-white/60 sm:text-base">
          A inscrição acontece pelo <strong className="text-white">grupo do WhatsApp</strong>.
          {/* Sem link, o texto não pode mandar ninguém "entrar agora" — não há
              para onde ir. */}
          {!temGrupo
            ? " O link do grupo será divulgado aqui em instantes."
            : aberto
              ? " Entre no grupo para garantir a sua vaga."
              : " Entre agora e receba o aviso no momento da abertura."}
        </p>

        {botao ? <div className="mt-8">{botao}</div> : null}
      </div>
    </section>
  );
}
