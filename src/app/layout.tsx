import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_CONFIG } from "@/data/config";

export const metadata: Metadata = {
  title: "Tiedottajanne Oy | SOTE-alan Videotuotanto & Tekoälyviestintä",
  description: "Opastusta lääkäreille, fysioterapeuteille ja terveydenhuollon ammattilaisille tulokselliseen videotuotantoon, Valvira-yhteensopivaan viestintään ja AI-SEO-optimointiin.",
  metadataBase: new URL("https://www.tiedottajanne.fi"),
  alternates: {
    canonical: "https://www.tiedottajanne.fi",
  },
  openGraph: {
    title: "Tiedottajanne Oy | SOTE-alan Videotuotanto & AI-Viestintä",
    description: "Miten lääkärit ja terveydenhuollon ammattilaiset rakentavat asiantuntija-auktoriteettia YouTubessa, Instagramissa ja TikTokissa.",
    url: "https://www.tiedottajanne.fi",
    siteName: "Tiedottajanne Oy",
    locale: "fi_FI",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": SITE_CONFIG.companyName,
    "legalName": "Tiedottajanne Oy",
    "vatID": "FI33058137",
    "url": "https://www.tiedottajanne.fi",
    "email": SITE_CONFIG.contactEmail,
    "telephone": SITE_CONFIG.contactPhone,
    "founder": {
      "@type": "Person",
      "name": SITE_CONFIG.authorName,
      "jobTitle": "OMT-Fysioterapeutti & Perustaja",
      "alumniOf": "Oulun yliopisto",
    },
    "sameAs": [
      SITE_CONFIG.youtubeTiedottajanne,
      SITE_CONFIG.youtubeFtSakkinen,
      SITE_CONFIG.youtubePtSakkinen,
      SITE_CONFIG.instagramUrl,
      SITE_CONFIG.tiktokUrl,
    ],
  };

  return (
    <html lang="fi" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#000a18] text-gray-100 flex flex-col justify-between">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
