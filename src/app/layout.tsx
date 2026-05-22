import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import SmoothScroll from "@/components/SmoothScroll";
import SmokeEffect from "@/components/SmokeEffect";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://loofidev.com'),
  title: {
    default: "Desarrollo Web y Páginas Web en el Perú | Loofi Dev",
    template: "%s | Loofi Dev"
  },
  description: "Desarrollador web experto en la creación de páginas web, sistemas ERP y CRM en Lima y todo el Perú. Soluciones de software de alto impacto.",
  keywords: ["desarrollo web peru", "desarrollador web peru", "paginas web peru", "creacion de paginas web peru", "diseño web lima", "agencia de software peru", "Loofi Dev", "desarrollo web lima"],
  authors: [{ name: "Loofi Dev", url: "https://loofidev.com" }],
  creator: "Loofi Dev",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://loofidev.com",
    title: "Loofi Dev | Agencia de Desarrollo Web y Software",
    description: "Transformamos ideas complejas en soluciones tecnológicas escalables, eficientes y a medida. Da el salto digital con nosotros.",
    siteName: "Loofi Dev",
    images: [
      {
        url: "/logo_oficial.jpeg",
        width: 800,
        height: 600,
        alt: "Loofi Dev Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Loofi Dev | Agencia de Desarrollo Web",
    description: "Transformamos ideas complejas en soluciones tecnológicas escalables, eficientes y a medida.",
    images: ["/logo_oficial.jpeg"],
  },
  alternates: {
    canonical: "https://loofidev.com",
  },
  icons: {
    icon: "/logo_oficial.jpeg",
    apple: "/logo_oficial.jpeg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "tu_codigo_de_verificacion_aqui", // Opcional: Para facilitar la validación en GSC
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Loofi Dev",
  "url": "https://loofidev.com",
  "logo": "https://loofidev.com/logo_oficial.jpeg",
  "sameAs": [
    "https://www.linkedin.com/company/loofidev",
    "https://www.instagram.com/loofidev"
  ],
  "description": "Agencia de desarrollo de software y diseño web en Lima, Perú. Especialistas en ERP, CRM y páginas web de alto impacto.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lima",
    "addressRegion": "Lima",
    "addressCountry": "PE"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "sales",
    "availableLanguage": ["Spanish", "English"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <SmokeEffect />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
