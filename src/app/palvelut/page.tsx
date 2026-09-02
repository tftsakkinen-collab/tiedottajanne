import type { Metadata } from "next";
import PalvelutHero from "@/components/palvelut/PalvelutHero";
import VuokramaaVsOmaMaa from "@/components/palvelut/VuokramaaVsOmaMaa";
import GodfatherOffer from "@/components/palvelut/GodfatherOffer";
import SomeKoulutusUpsell from "@/components/palvelut/SomeKoulutusUpsell";
import SoteFaqSection from "@/components/palvelut/SoteFaqSection";

export const metadata: Metadata = {
  title: "AI-Kotisivut SOTE-Ammatinharjoittajille — Oma Maa vs. Vuokramaa | Tiedottajanne Oy",
  description: "Omista digitaalinen identiteettisi ja asiakasvirrasi. AI-optimoitu (GEO) oma profiili 499 € perustajahintaan + 39 €/kk huoleton ylläpito. Näe ennen kuin maksat & 30 pv takuu.",
  metadataBase: new URL("https://www.tiedottajanne.fi"),
  alternates: {
    canonical: "https://www.tiedottajanne.fi/palvelut",
  },
  openGraph: {
    title: "AI-Kotisivut SOTE-Ammatinharjoittajille — Oma Maa vs. Vuokramaa | Tiedottajanne Oy",
    description: "Täysin oma tekoälylle (ChatGPT, Gemini) optimoitu kotisivusto sote-alan ammatinharjoittajille. Tilaa AI-optimoidut sivut (499 € + alv 0%).",
    url: "https://www.tiedottajanne.fi/palvelut",
    siteName: "Tiedottajanne Oy",
    locale: "fi_FI",
    type: "website",
  },
};

export default function PalvelutPage() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "AI-Ystävälliset Sivut SOTE-Ammatinharjoittajille (Testiryhmäetu)",
    "description": "Avaimet käteen -AI-kotisivukokonaisuus sote-alan ammatinharjoittajille. Generative Engine Optimization (ChatGPT, Gemini, Google AI), Valvira- & Kela-yhteensopiva.",
    "brand": {
      "@type": "Brand",
      "name": "Tiedottajanne Oy",
    },
    "offers": {
      "@type": "Offer",
      "price": "499.00",
      "priceCurrency": "EUR",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/LimitedAvailability",
      "url": "https://buy.stripe.com/9B600j4Kg4fA8xQ8zX0Ny04",
    },
  };

  return (
    <div className="bg-[var(--bg)] text-[var(--text)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />
      
      {/* Hero Section */}
      <PalvelutHero />

      {/* Vuokramaa vs. Oma Maa Analysis & Reference Cards */}
      <VuokramaaVsOmaMaa />

      {/* The Godfather Offer: 499 € + 39 €/mo */}
      <GodfatherOffer />

      {/* Somekoutsaus Upsell: 200 € / h */}
      <SomeKoulutusUpsell />

      {/* FAQ & Objection Handling */}
      <SoteFaqSection />
    </div>
  );
}
