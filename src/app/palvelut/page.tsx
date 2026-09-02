import type { Metadata } from "next";
import PalvelutHero from "@/components/palvelut/PalvelutHero";
import VuokramaaVsOmaMaa from "@/components/palvelut/VuokramaaVsOmaMaa";
import GodfatherOffer from "@/components/palvelut/GodfatherOffer";
import SomeKoulutusUpsell from "@/components/palvelut/SomeKoulutusUpsell";
import SoteFaqSection from "@/components/palvelut/SoteFaqSection";

export const metadata: Metadata = {
  title: "AI-Kotisivut SOTE-Yrittäjille — Oma Maa vs. Vuokramaa | Tiedottajanne Oy",
  description: "Älä vuokraa näkyvyyttäsi isojen lääkäritalojen varausjärjestelmissä. Hanki AI-optimoitu oma digitaalinen kiinteistö 499 € perustajahintaan (vain 10 ensimmäiselle).",
  metadataBase: new URL("https://www.tiedottajanne.fi"),
  alternates: {
    canonical: "https://www.tiedottajanne.fi/palvelut",
  },
  openGraph: {
    title: "AI-Kotisivut SOTE-Yrittäjille (499 € Perustajatarjous) — Tiedottajanne Oy",
    description: "Täysin oma tekoälylle optimoitu kotisivusto sote-alan ammatinharjoittajille. Omista asiakasvirrasi ja näy ChatGPT & Google AI -tuloksissa.",
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
    "name": "AI-Kotisivujen Rakennus SOTE-Yrittäjille (Perustajatarjous)",
    "description": "Avaimet käteen -AI-kotisivukokonaisuus sote-alan ammatinharjoittajille. Tekoälyoptimoitu (ChatGPT, Gemini, Perplexity, Google AI), Valvira- & Kela-yhteensopiva.",
    "brand": {
      "@type": "Brand",
      "name": "Tiedottajanne Oy",
    },
    "offers": {
      "@type": "Offer",
      "price": "499.00",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/LimitedAvailability",
      "validThrough": "2026-12-31",
      "url": "https://www.tiedottajanne.fi/palvelut",
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

      {/* Vuokramaa vs. Oma Maa Analysis */}
      <VuokramaaVsOmaMaa />

      {/* The Godfather Offer: 499 € + 29 €/mo */}
      <GodfatherOffer />

      {/* Somekoulutus & Sparraus Upsell: 200 € / h */}
      <SomeKoulutusUpsell />

      {/* FAQ & Objection Handling */}
      <SoteFaqSection />
    </div>
  );
}
