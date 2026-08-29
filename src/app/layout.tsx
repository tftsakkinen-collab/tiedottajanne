import type { Metadata } from "next";
import { Outfit, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_CONFIG } from "@/data/config";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tiedottajanne Oy — Digitaaliset ratkaisut & Teknologia-alustat",
  description: "Tiedottajanne Oy yhdistää syvän toimialatuntemuksen, modernin tekoälyn ja huippuluokan ohjelmistokehityksen tuotteiksi, jotka ratkaisevat todellisia arjen ongelmia.",
  metadataBase: new URL("https://www.tiedottajanne.fi"),
  alternates: {
    canonical: "https://www.tiedottajanne.fi",
  },
  openGraph: {
    title: "Tiedottajanne Oy — Digitaaliset ratkaisut & Teknologia-alustat",
    description: "Miten SOTE-alan ammattilaiset ja terveydenhuollon asiantuntijat rakentavat asiantuntija-auktoriteettia YouTubessa, Instagramissa ja TikTokissa.",
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
  const clarityId = process.env.VITE_CLARITY_PROJECT_ID || process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

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
    <html lang="fi" className={`dark ${outfit.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {clarityId && (
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
                (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${clarityId}");
              `,
            }}
          />
        )}
      </head>
      <body className="min-h-screen bg-[#000a18] text-gray-100 flex flex-col justify-between font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
