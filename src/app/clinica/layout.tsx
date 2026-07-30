import type { Metadata } from "next";
import { SmoothScroll } from "@/components/providers/SmoothScroll";

export const metadata: Metadata = {
  // Singular, para bater com o título do hero — é este texto que aparece na
  // prévia do link no WhatsApp e na aba do navegador.
  title: "Clínica Toes to Bar & Bar Muscle Up | Paty Moura & Chan · i.R.C × CFA",
  description:
    "Clínicas técnicas de Toes to Bar e Bar Muscle Up com Paty Moura e Chan (i.R.C Stronger Together). Mobilidade, core, força, grip e finalização do movimento. Presencial na CrossFit Arapongas.",
  openGraph: {
    title: "Clínica Toes to Bar & Bar Muscle Up | Paty Moura & Chan",
    description:
      "Domine a barra com técnica, força e segurança. Duas clínicas intensivas com Paty Moura e Chan (i.R.C).",
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
