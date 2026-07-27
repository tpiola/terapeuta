import type { Metadata, Viewport } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://terapeuta-ten.vercel.app"),
  title: "Elis Regina Borges | Terapia Holística em Franca/SP",
  description:
    "Radiestesia, Reiki, Barras de Access, Cone Hindu e MTVSS em Franca/SP, com atendimento presencial e online. Converse com Elis pelo WhatsApp.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Elis Regina Borges | Terapia Holística",
    description:
      "Um cuidado integrativo, humano e individual para o seu momento.",
    url: "/",
    siteName: "Elis Regina Borges",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/images/elis-profile.jpg", width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f4edf7",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Elis Regina Borges — Terapia Holística",
  url: "https://terapeuta-ten.vercel.app",
  telephone: "+5516991115518",
  email: "elisreginaoliveira.terapeuta@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jardim Lima",
    addressLocality: "Franca",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -20.5369792,
    longitude: -47.411132,
  },
  sameAs: ["https://www.instagram.com/elisreginaoliveira.terapeuta/"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} ${playfair.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
