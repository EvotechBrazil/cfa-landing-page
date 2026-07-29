import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import "./globals.css";

const display = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.crossfitarapongas.com.br"),
  title: "Clínicas Toes to Bar & Bar Muscle Up | Paty Moura & Chan · i.R.C × CFA",
  description:
    "Clínicas técnicas de Toes to Bar e Bar Muscle Up com Paty Moura e Chan (i.R.C Stronger Together). Mobilidade, core, força, grip e finalização do movimento. Presencial na CrossFit Arapongas.",
  openGraph: {
    title: "Clínicas Toes to Bar & Bar Muscle Up | Paty Moura & Chan",
    description:
      "Domine a barra com técnica, força e segurança. Duas clínicas intensivas com Paty Moura e Chan (i.R.C).",
    images: ["/images/speakers.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
