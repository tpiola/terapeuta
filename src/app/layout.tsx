import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { CookieConsent } from "@/components/CookieConsent";

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
  robots: { index: true, follow: true },
  alternates: { canonical: "https://terapeuta-next.vercel.app" },
  manifest: "/manifest.json",
    icons: {
          icon: [
            { url: "/images/elis-profile.jpg", type: "image/jpeg", sizes: "any" },
                ],
          shortcut: "/images/elis-profile.jpg",
          apple: [
            { url: "/images/elis-profile.jpg", sizes: "180x180", type: "image/jpeg" },
                ],
    },
  openGraph: {
    title: "Elis Regina Borges | Terapia Integrativa em Franca/SP",
    description: "Transforme sua relação com o que sente. Terapia integrativa com abordagem humanizada em Franca/SP.",
    url: "https://terapeuta-next.vercel.app",
    type: "website",
    locale: "pt_BR",
    siteName: "Elis Regina Borges",
    images: [{ url: "https://terapeuta-next.vercel.app/og-image.jpg", width: 1200, height: 630, alt: "Elis Regina Borges | Terapia Integrativa" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elis Regina Borges | Terapia Integrativa em Franca/SP",
    description: "Transforme sua relação com o que sente. Terapia integrativa com abordagem humanizada em Franca/SP.",
    images: ["https://terapeuta-next.vercel.app/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#8b5e3c",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${playfairDisplay.variable} ${inter.variable} ${cormorantGaramond.variable}`}>
      <body className="bg-brand-bg text-brand-text antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "name": "Elis Regina Borges - Terapia Integrativa",
              "url": "https://terapeuta-next.vercel.app",
              "description": "Terapia integrativa com abordagem humanizada em Franca/SP. Atendimento presencial e online.",
              "telephone": "+5516991115518",
              "email": "elisreginaoliveira.terapeuta@gmail.com",
              "address": { "@type": "PostalAddress", "addressLocality": "Franca", "addressRegion": "SP", "addressCountry": "BR" },
              "sameAs": ["https://www.instagram.com/elisreginaoliveira.terapeuta/"]
            },
            {
              "@type": "WebSite",
              "name": "Elis Regina Borges | Terapia Integrativa",
              "url": "https://terapeuta-next.vercel.app",
              "description": "Transforme sua relação com o que sente. Terapia integrativa com abordagem humanizada.",
              "inLanguage": "pt-BR"
            },
            {
              "@type": "HealthAndBeautyBusiness",
              "name": "Elis Regina Borges - Terapia Integrativa",
              "telephone": "+5516991115518",
              "email": "elisreginaoliveira.terapeuta@gmail.com",
              "address": { "@type": "PostalAddress", "addressLocality": "Franca", "addressRegion": "SP", "addressCountry": "BR" },
              "geo": { "@type": "GeoCoordinates", "latitude": -20.5369792, "longitude": -47.411132 },
              "url": "https://terapeuta-next.vercel.app",
              "sameAs": ["https://www.instagram.com/elisreginaoliveira.terapeuta/"],
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "18:00"
              }
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Quais terapias a Elis oferece?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oferecemos Radiestesia, Reiki, Barras de Access, Cone Hindu e MTVSS — cinco abordagens integrativas personalizadas para o seu momento."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Como agendar uma consulta?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Você pode agendar sua consulta diretamente pelo WhatsApp (16) 99111-5518. Atendimento presencial em Franca/SP ou online."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Quanto tempo dura uma sessão de terapia?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Cada sessão tem duração média de 50 a 60 minutos, dependendo da abordagem escolhida e das necessidades individuais do paciente."
                  }
                }
              ]
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://terapeuta-next.vercel.app" },
                { "@type": "ListItem", "position": 2, "name": "Tratamentos", "item": "https://terapeuta-next.vercel.app#tratamentos" },
                { "@type": "ListItem", "position": 3, "name": "Contato", "item": "https://terapeuta-next.vercel.app#contato" }
              ]
            },
            {
              "@type": "Review",
              "itemReviewed": {
                "@type": "HealthAndBeautyBusiness",
                "name": "Elis Regina Borges - Terapia Integrativa"
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "author": {
                "@type": "Person",
                "name": "Paciente"
              },
              "reviewBody": "Atendimento humanizado e transformador. A Elis tem uma sensibilidade única e mais de 8 anos de experiência com mais de 1500 sessões realizadas."
            }
          ]
        })}} />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
