import type { Metadata } from "next";
import PalvelutHero from "@/components/palvelut/PalvelutHero";
import VuokramaaVsOmaMaa from "@/components/palvelut/VuokramaaVsOmaMaa";
import GodfatherOffer from "@/components/palvelut/GodfatherOffer";
import SomeKoulutusUpsell from "@/components/palvelut/SomeKoulutusUpsell";
import SoteFaqSection from "@/components/palvelut/SoteFaqSection";

export const metadata: Metadata = {
  title: "AI-Kotisivut SOTE-Ammatinharjoittajille â€” Oma Maa vs. Vuokramaa | Tiedottajanne Oy",
  description: "Omista digitaalinen identiteettisi ja asiakasvirrasi. AI-optimoitu (GEO) oma profiili 499 â‚¬ perustajahintaan + 29 â‚¬/kk huoleton yllÃ¤pito. NÃ¤e ennen kuin maksat & 30 pv takuu.",
  metadataBase: new URL("https://www.tiedottajanne.com"),
  alternates: {
    canonical: "https://www.tiedottajanne.com/palvelut",
  },
  openGraph: {
    title: "AI-Kotisivut SOTE-Ammatinharjoittajille â€” Oma Maa vs. Vuokramaa | Tiedottajanne Oy",
    description: "TÃ¤ysin oma tekoÃ¤lylle (ChatGPT, Gemini) optimoitu kotisivusto sote-alan ammatinharjoittajille. Tilaa AI-optimoidut sivut (499 â‚¬ + alv 0%).",
    url: "https://www.tiedottajanne.com/palvelut",
    siteName: "Tiedottajanne Oy",
    locale: "fi_FI",
    type: "website",
  },
};

export default function PalvelutPage() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "AI-YstÃ¤vÃ¤lliset Sivut SOTE-Ammatinharjoittajille (TestiryhmÃ¤etu)",
    "description": "Avaimet kÃ¤teen -AI-kotisivukokonaisuus sote-alan ammatinharjoittajille. Generative Engine Optimization (ChatGPT, Gemini, Google AI), Valvira- & Kela-yhteensopiva.",
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

      {/* The Godfather Offer: 499 â‚¬ + 29 â‚¬/mo */}
      <GodfatherOffer />

      {/* Somekoutsaus Upsell: 200 â‚¬ / h */}
      <SomeKoulutusUpsell />

      {/* FAQ & Objection Handling */}
      <SoteFaqSection />
    </div>
  );
}

