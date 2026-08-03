import type { Metadata } from "next";
import { SmoothScroll } from "@/components/providers/SmoothScroll";

export const metadata: Metadata = {
  // Singular, para bater com o título do hero — é este texto que aparece na
  // prévia do link no WhatsApp e na aba do navegador.
  title:
    "Clínica Bar Muscle Up & Handstand Walk | Paty Moura & Chan · i.R.C × CFA",
  description:
    "Clínicas técnicas de Bar Muscle Up e Handstand Walk com Paty Moura e Chan (i.R.C Stronger Together). Mobilidade, core, força, equilíbrio e finalização do movimento. 05/09/2026, presencial na CrossFit Arapongas.",
  openGraph: {
    title: "Clínica Bar Muscle Up & Handstand Walk | Paty Moura & Chan",
    description:
      "Domine a barra e a parada de mão com técnica, força e segurança. Duas clínicas intensivas com Paty Moura e Chan (i.R.C).",
    images: ["/images/speakers.png"],
  },
};

export default function ClinicaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="clinica-theme">
      <SmoothScroll>{children}</SmoothScroll>
    </div>
  );
}
