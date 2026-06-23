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
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://terapeuta-next.vercel.app",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Elis Regina Borges | Terapia Integrativa em Franca/SP",
    description:
      "Transforme sua relação com o que sente. Terapia integrativa com abordagem humanizada em Franca/SP.",
    url: "https://terapeuta-next.vercel.app",
    type: "website",
    locale: "pt_BR",
    siteName: "Elis Regina Borges",
    images: [
      {
        url: "https://terapeuta-next.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Elis Regina Borges | Terapia Integrativa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elis Regina Borges | Terapia Integrativa em Franca/SP",
    description:
      "Transforme sua relação com o que sente. Terapia integrativa com abordagem humanizada em Franca/SP.",
    images: ["https://terapeuta-next.vercel.app/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#8b5e3c",
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
      <body className="bg-brand-bg text-brand-text antialiased">
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HealthAndBeautyBusiness",
              "name": "Elis Regina Borges - Terapia Integrativa",
              "telephone": "+5516991115518",
              "email": "elisreginaoliveira.terapeuta@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Franca",
                "addressRegion": "SP",
                "addressCountry": "BR",
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -20.5369792,
                "longitude": -47.411132,
              },
              "url": "https://terapeuta-next.vercel.app",
              "sameAs": [
                "https://www.instagram.com/elisreginaoliveira.terapeuta/",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
