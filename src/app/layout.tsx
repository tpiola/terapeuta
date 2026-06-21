import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-accent",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["italic"],
});

export const metadata: Metadata = {
  title: "Elis Regina Borges | Terapia Integrativa em Franca/SP",
  description:
    "Transforme sua relação com o que sente. Terapia integrativa com abordagem humanizada em Franca/SP. Atendimento presencial e online com técnicas de PICS, formação ABRATH e mais de 8 anos de experiência.",
  keywords: [
    "terapia integrativa",
    "Franca SP",
    "Elis Regina Borges",
    "PICS",
    "ABRATH",
    "terapia humanizada",
    "bem-estar emocional",
  ],
  openGraph: {
    title: "Elis Regina Borges | Terapia Integrativa em Franca/SP",
    description:
      "Transforme sua relação com o que sente. Terapia integrativa com abordagem humanizada em Franca/SP.",
    type: "website",
    locale: "pt_BR",
    siteName: "Elis Regina Borges",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${playfairDisplay.variable} ${inter.variable} ${cormorantGaramond.variable}`}
    >
      <body className="bg-brand-bg text-brand-text antialiased">{children}</body>
    </html>
  );
}
