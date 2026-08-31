import type { Metadata } from "next";
import ConsultingBookingSection from "@/components/ConsultingBookingSection";
import { Mail, Phone, MapPin, Building2, ShieldCheck } from "lucide-react";
import { SITE_CONFIG } from "@/data/config";

export const metadata: Metadata = {
  title: "Yhteystiedot & Tarjouspyyntö | Tiedottajanne Oy",
  description: "Ota yhteyttä Tiedottajanne Oy:hyn. Tilaa henkilökohtainen Google Meet -tuntisparraus (200 € / h) tai pyydä tarjous SOTE-videokoulutuksesta.",
  alternates: {
    canonical: "https://www.tiedottajanne.fi/yhteystiedot",
  },
  openGraph: {
    title: "Yhteystiedot & Tarjouspyyntö | Tiedottajanne Oy",
    description: "Ota yhteyttä Tiedottajanne Oy:hyn. Tilaa henkilökohtainen Google Meet -tuntisparraus (200 € / h) tai pyydä tarjous SOTE-videokoulutuksesta.",
    url: "https://www.tiedottajanne.fi/yhteystiedot",
  },
};

export default function YhteystiedotPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Tiedottajanne Oy",
    "legalName": "Tiedottajanne Oy",
    "taxID": "3305813-7",
    "url": "https://www.tiedottajanne.fi",
    "email": SITE_CONFIG.contactEmail,
    "telephone": SITE_CONFIG.contactPhone,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Oulu",
      "addressRegion": "Pohjois-Pohjanmaa",
      "addressCountry": "FI",
    },
    "founder": {
      "@type": "Person",
      "name": "Janne Säkkinen",
      "jobTitle": "OMT-Fysioterapeutti, Toimitusjohtaja",
    },
    "priceRange": "200€ - 1990€",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Etusivu",
        "item": "https://www.tiedottajanne.fi",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Yhteystiedot",
        "item": "https://www.tiedottajanne.fi/yhteystiedot",
      },
    ],
  };

  return (
    <div className="py-12 md:py-20 min-h-screen text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Title & AEO Lead Paragraph */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00d2ff]/30 bg-[#00d2ff]/10 text-[#00d2ff] text-xs font-semibold uppercase tracking-wider">
            <Mail className="w-4 h-4" />
            <span>Yhteystiedot &amp; Tilaus</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Ota Yhteyttä &amp; <span className="bg-gradient-to-r from-white via-[#A4F4FD] to-[#00d2ff] bg-clip-text text-transparent">Pyydä Koulutustarjous</span>
          </h1>
          {/* AEO Lead Paragraph */}
          <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Tiedottajanne Oy palvelee SOTE-alan ammattilaisia ja yrityksiä valtakunnallisesti. Voit tilata henkilökohtaisen Google Meet -tuntisparrauksen (200 € / h) tai jättää tarjouspyynnön alla olevalla lomakkeella tai suoraan sähköpostitse osoitteeseen {SITE_CONFIG.contactEmail}.
          </p>
        </div>

        {/* Consulting Booking & Contact Form Component */}
        <ConsultingBookingSection />

      </div>
    </div>
  );
}
