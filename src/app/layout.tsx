import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans, Inter, Oswald } from "next/font/google";
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

const boxSans = Inter({
  subsets: ["latin"],
  variable: "--font-box-sans",
  display: "swap",
});

const boxDisplay = Oswald({
  subsets: ["latin"],
  variable: "--font-box-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.crossfitarapongas.com.br"),
  title: {
    default: "CrossFit Arapongas | Treine 3 Dias Grátis",
    template: "%s | CrossFit Arapongas",
  },
  description:
    "A CrossFit Arapongas une pessoas de todas as idades e níveis em volta do melhor programa de condicionamento físico do mundo. Venha treinar 3 dias grátis.",
  openGraph: {
    title: "CrossFit Arapongas",
    description:
      "Treino funcional, comunidade e transformação. Experimente 3 dias grátis.",
    images: ["/box/logo-cfa.png"],
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
      className={`${display.variable} ${body.variable} ${boxSans.variable} ${boxDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
