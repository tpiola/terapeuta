import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Playfair_Display, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { CookieConsent } from "@/components/CookieConsent";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://terapeuta-next.vercel.app";
const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
const googleTagManagerId = process.env.NEXT_PUBLIC_GTM_ID;

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
  metadataBase: new URL(siteUrl),
  title: "Elis Regina Borges | Terapeuta em Franca SP - Radiestesia, Reiki, Barras de Access, Cone Hindu e MTVSS",
  description:
    "Terapeuta holística em Franca/SP especializada em Radiestesia, Reiki, Barras de Access, Cone Hindu e MTVSS. Atendimento presencial e online. Agende sua sessão de terapia integrativa pelo WhatsApp ou Google Agenda. Mais de 8 anos de experiência e 1500+ sessões realizadas.",
  keywords: [
    "terapeuta em franca sp",
    "terapeuta franca sp",
    "radiestesia franca",
    "reiki franca sp",
    "barras de access franca",
    "cone hindu franca",
    "mtvss terapia",
    "terapia integrativa franca sp",
    "elis regina borges terapeuta",
    "pics práticas integrativas complementares saúde",
    "abrath terapeuta certificada",
    "agenda terapeuta online",
    "consulta terapia holística",
    "terapia holística franca sp",
    "sessão de reiki franca",
    "radiestesia terapêutica",
    "acess bars brasil",
    "mtvss método",
    "cone hindu terapia",
    "terapeuta near me",
    "melhor terapeuta franca",
    "terapia alternativa sp",
    "cura energética",
    "equilíbrio emocional terapia",
  ],
  authors: [{ name: "Elis Regina Borges" }],
  creator: "Elis Regina Borges",
  publisher: "Elis Regina Borges - Terapia Integrativa Franca SP",
  robots: { 
    index: true, 
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    }
  },
  alternates: { 
    canonical: "/",
    languages: { "pt-BR": "/" }
  },
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
    title: "Elis Regina Borges | Terapeuta Integrativa em Franca/SP - Radiestesia, Reiki, Barras de Access",
    description: "Especialista em Radiestesia, Reiki, Barras de Access, Cone Hindu e MTVSS. +8 anos de experiência, +1500 sessões realizadas. Atendimento presencial em Franca/SP e online para todo Brasil.",
    url: siteUrl,
    type: "website",
    locale: "pt_BR",
    siteName: "Elis Regina Borges - Terapia Integrativa Franca SP",
    images: [
      { 
        url: "/og-image.jpg", 
        width: 1200, 
        height: 630, 
        alt: "Elis Regina Borges | Terapeuta Integrativa em Franca/SP - Especialista em Radiestesia, Reiki, Barras de Access, Cone Hindu e MTVSS",
        type: "image/jpeg"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elis Regina Borges | Terapeuta Integrativa - Franca/SP",
    description: "Radiestesia, Reiki, Barras de Access, Cone Hindu e MTVSS. Agende sua consulta em Franca/SP ou online!",
    images: ["/og-image.jpg"],
    creator: "@elisreginaoliveira.terapeuta",
  },
  verification: googleSiteVerification ? { google: googleSiteVerification } : undefined,
};

export const viewport: Viewport = {
  themeColor: "#8b5e3c",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // Schema.org JSON-LD para Google Meu Negócio e Search
  const schemaOrgData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${siteUrl}/#business`,
        "name": "Elis Regina Borges - Terapia Integrativa",
        "alternateName": "Elis Terapeuta",
        "url": siteUrl,
        "description": "Terapeuta especializada em Radiestesia, Reiki, Barras de Access, Cone Hindu e MTVSS. Atendimento humanizado com mais de 8 anos de experiência e mais de 1500 sessões realizadas.",
        "telephone": "+5516991115518",
        "email": "elisreginaoliveira.terapeuta@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Jardim Lima",
          "addressLocality": "Franca",
          "addressRegion": "SP",
          "postalCode": "14400-000",
          "addressCountry": "BR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -20.5369792,
          "longitude": -47.411132
        },
        "sameAs": [
          "https://www.instagram.com/elisreginaoliveira.terapeuta/",
          "https://www.facebook.com/elisreginaoliveira.terapeuta"
        ],
        "priceRange": "$$",
        "paymentAccepted": "Pix, Dinheiro, Cartão de Crédito, Cartão de Débito",
        "currenciesAccepted": "BRL",
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "18:00"
        },
        "areaServed": {
          "@type": "City",
          "name": "Franca",
          "containedInPlace": {
            "@type": "AdministrativeArea",
            "name": "São Paulo"
          }
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Serviços de Terapia Integrativa",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Radiestesia",
                "description": "Equilíbrio energético e análise de campos vibracionais",
                "provider": { "@type": "Person", "name": "Elis Regina Borges" },
                "offers": {
                  "@type": "Offer",
                  "priceCurrency": "BRL",
                  "availability": "https://schema.org/InStock"
                }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Reiki",
                "description": "Canalização de energia vital universal para relaxamento profundo",
                "provider": { "@type": "Person", "name": "Elis Regina Borges" },
                "offers": {
                  "@type": "Offer",
                  "priceCurrency": "BRL",
                  "availability": "https://schema.org/InStock"
                }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Barras de Access",
                "description": "Liberação de crenças limitantes através de toques sutis",
                "provider": { "@type": "Person", "name": "Elis Regina Borges" },
                "offers": {
                  "@type": "Offer",
                  "priceCurrency": "BRL",
                  "availability": "https://schema.org/InStock"
                }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Cone Hindu",
                "description": "Limpeza energética e desintoxicação tradicional",
                "provider": { "@type": "Person", "name": "Elis Regina Borges" },
                "offers": {
                  "@type": "Offer",
                  "priceCurrency": "BRL",
                  "availability": "https://schema.org/InStock"
                }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "MTVSS",
                "description": "Ativação do sistema imunológico e cura natural",
                "provider": { "@type": "Person", "name": "Elis Regina Borges" },
                "offers": {
                  "@type": "Offer",
                  "priceCurrency": "BRL",
                  "availability": "https://schema.org/InStock"
                }
              }
            }
          ]
        }
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        "name": "Elis Regina Borges",
        "jobTitle": "Terapeuta Integrativa",
        "url": siteUrl,
        "sameAs": [
          "https://www.instagram.com/elisreginaoliveira.terapeuta/",
          "https://www.facebook.com/elisreginaoliveira.terapeuta"
        ],
        "knowsAbout": [
          "Radiestesia",
          "Reiki",
          "Barras de Access",
          "Cone Hindu",
          "MTVSS",
          "Práticas Integrativas e Complementares de Saúde",
          "Terapia Holística"
        ],
        "hasOccupation": {
          "@type": "Occupation",
          "name": "Terapeuta Integrativa",
          "occupationLocation": {
            "@type": "City",
            "name": "Franca"
          }
        },
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "ABRATH - Associação Brasileira de Terapeutas Holísticos"
        },
        "yearsOfExperience": "P8Y", // 8 anos
        "award": "Certificação ABRATH em Práticas Integrativas"
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        "name": "Elis Regina Borges | Terapia Integrativa",
        "url": siteUrl,
        "description": "Portfólio e agendamento de terapias integrativas em Franca/SP",
        "inLanguage": "pt-BR",
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${siteUrl}#tratamentos`,
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/#faq`,
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
              "text": "Você pode agendar diretamente pelo WhatsApp (16) 99111-5518 ou através do link de agendamento no site. Atendimento presencial em Franca/SP ou online para todo Brasil."
            }
          },
          {
            "@type": "Question",
            "name": "Quanto tempo dura uma sessão de terapia?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Cada sessão tem duração média de 50 a 60 minutos, dependendo da abordagem escolhida e das necessidades individuais."
            }
          },
          {
            "@type": "Question",
            "name": "A Elis atende online?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sim! Oferecemos atendimento online para todas as regiões do Brasil, mantendo a mesma qualidade e acolhimento do atendimento presencial."
            }
          },
          {
            "@type": "Question",
            "name": "Quais formas de pagamento são aceitas?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Aceitamos Pix, dinheiro, cartão de crédito e débito. Consulte condições especiais para pacotes de sessões."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}/#breadcrumb`,
        "itemListElement": [
          { 
            "@type": "ListItem", 
            "position": 1, 
            "name": "Home", 
            "item": siteUrl 
          },
          { 
            "@type": "ListItem", 
            "position": 2, 
            "name": "Tratamentos", 
            "item": `${siteUrl}#tratamentos` 
          },
          { 
            "@type": "ListItem", 
            "position": 3, 
            "name": "Sobre", 
            "item": `${siteUrl}#sobre` 
          },
          { 
            "@type": "ListItem", 
            "position": 4, 
            "name": "Contato", 
            "item": `${siteUrl}#contato` 
          }
        ]
      },
      {
        "@type": "Action",
        "@id": `${siteUrl}/#action`,
        "name": "Agendar Consulta",
        "description": "Agende sua sessão de terapia integrativa",
        "potentialAction": {
          "@type": "ReserveAction",
          "name": "Reservar Sessão",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://wa.me/5516991115518?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta",
            "inLanguage": "pt-BR",
            "actionPlatform": [
              "http://schema.org/DesktopWebPlatform",
              "http://schema.org/MobileWebPlatform"
            ]
          },
          "expectsAcceptanceOf": {
            "@type": "Offer",
            "priceCurrency": "BRL",
            "availability": "https://schema.org/InStock"
          }
        }
      }
    ]
  };

  return (
    <html lang="pt-BR" className={`${playfairDisplay.variable} ${inter.variable} ${cormorantGaramond.variable}`}>
      <head>
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgData) }} 
        />
        {googleTagManagerId && (
          <Script id="google-tag-manager" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${googleTagManagerId}');`}
          </Script>
        )}
      </head>
      <body className="bg-brand-bg text-brand-text antialiased">
        {googleTagManagerId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${googleTagManagerId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
              title="Google Tag Manager"
            />
          </noscript>
        )}
        
        {children}
        <Analytics />
        <SpeedInsights />
        <CookieConsent />
      </body>
    </html>
  );
}
