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
    default: "Loofi Dev | Agencia de Desarrollo Web y Software",
    template: "%s | Loofi Dev"
  },
  description: "En Loofi Dev transformamos ideas complejas en soluciones tecnológicas escalables, eficientes y a medida. Diseño web, desarrollo de software y aplicaciones.",
  keywords: ["Desarrollo web", "Agencia de software", "Creación de páginas web", "Desarrollo a medida", "Loofi Dev", "Loofidev", "Aplicaciones web", "Diseño UI/UX"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans antialiased">
        <SmokeEffect />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
