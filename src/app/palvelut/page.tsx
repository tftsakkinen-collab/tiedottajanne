import type { Metadata } from "next";
import Link from "next/link";
import ServicesAndTraining from "@/components/ServicesAndTraining";
import { GraduationCap, ArrowRight, HelpCircle, Send, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Palvelut & Google Meet -Tuntiohjaus | Tiedottajanne Oy",
  description: "Somenkonsultointi ja Google Meet -tuntiohjaus (200 € / h) sekä räätälöidyt SOTE-alan videokoulutukset ja luennot yrityksille.",
  alternates: {
    canonical: "https://www.tiedottajanne.fi/palvelut",
  },
  openGraph: {
    title: "Palvelut & Google Meet -Tuntiohjaus | Tiedottajanne Oy",
    description: "Somenkonsultointi ja Google Meet -tuntiohjaus (200 € / h) sekä räätälöidyt SOTE-alan videokoulutukset ja luennot yrityksille.",
    url: "https://www.tiedottajanne.fi/palvelut",
  },
};

export default function PalvelutPage() {
  const faqs = [
    {
      q: "Miten Google Meet -tuntikonsultointi (200 € / h) toimii?",
      a: "Tilaat konsultaation yhteydenottolomakkeella. Vahvistamme tilauksen sähköpostitse ja sovimme sinulle parhaiten sopivan ajankohdan kalenteriin. Saat suoran Google Meet -linkin, ja tunnin aikana käymme kädestä pitäen läpi haluamasi aiheet: kuvaustekniikka, mikrofonit, aihesuunnittelu, koukut tai kanavasi auditointi.",
    },
    {
      q: "Miten yrityskohtaiset koulutukset ja luennot tilataan?",
      a: "Kaikki työyhteisöjen, lääkäriasemien ja organisaatioiden luennot ja laajemmat koulutukset räätälöidään tarpeen mukaan. Jätä tarjouspyyntö lomakkeella, niin suunnittelemme tiimillenne sopivan kokonaisuuden.",
    },
    {
      q: "Miksi terveydenhuollon videotuotanto vaatii asiantuntijan sparrausta?",
      a: "SOTE-viestinnässä on huomioitava Valviran ja Terhikin linjaukset, lääkinnällinen etiikka, potilasturvallisuus ja luottamuksen rakentaminen. Emme tee perinteistä mainontaa, vaan tutkittuun tietoon nojaavaa potilas- ja asiantuntijaopetusta.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Tiedottajanne Oy — Somenkonsultointi & Koulutukset",
    "url": "https://www.tiedottajanne.fi/palvelut",
    "telephone": "041 327 4967",
    "priceRange": "200€",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Oulu",
      "addressCountry": "FI",
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Konsultointi- ja Koulutuspalvelut",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Somenkonsultointi & Google Meet -tuntiohjaus",
          "price": "200.00",
          "priceCurrency": "EUR",
          "description": "Henkilökohtainen 1-on-1 tai tiimin somesparraus Google Meetissä.",
        },
        {
          "@type": "Offer",
          "name": "Räätälöidyt yrityskoulutukset & luennot",
          "description": "Räätälöity tarjouspyynnön kautta työyhteisöille ja organisaatioille.",
        },
      ],
    },
  };

  return (
    <div className="py-12 md:py-20 min-h-screen text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Title & AEO Answer Paragraph */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00d2ff]/30 bg-[#00d2ff]/10 text-[#00d2ff] text-xs font-semibold uppercase tracking-wider">
            <GraduationCap className="w-4 h-4" />
            <span>Valmennus- ja Konsultointipalvelut</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            SOTE-Alan Videokoulutukset &amp; <span className="bg-gradient-to-r from-white via-[#A4F4FD] to-[#00d2ff] bg-clip-text text-transparent">Somenkonsultointi</span>
          </h1>
          {/* AEO Lead Paragraph: direct clear answer for AI models & users */}
          <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Tiedottajanne Oy tarjoaa SOTE-alan ammattilaisille ja terveydenhuollon yrityksille tuotteistettua videokoulutusta, henkilökohtaista Google Meet -tuntiohjausta (200 € / h) sekä orgaanisen kasvun videostrategiapalveluita Valvira- ja Terhikki-yhteensopivasti.
          </p>
        </div>

        {/* Full Services Section */}
        <ServicesAndTraining />

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto space-y-8 pt-8 border-t border-white/10">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs text-[#00d2ff] font-semibold uppercase tracking-wider">
              <HelpCircle className="w-4 h-4" />
              <span>Usein Kysytyt Kysymykset</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Kysymyksiä koulutuksista ja hinnoittelusta</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="liquid-glass rounded-2xl p-6 sm:p-8 space-y-2 border border-white/10">
                <h3 className="text-base sm:text-lg font-bold text-white flex items-start gap-2">
                  <span className="text-[#00d2ff] font-mono">0{i + 1}.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-sm text-white/70 leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA to Quote Request */}
        <div className="liquid-glass rounded-3xl p-8 sm:p-12 border border-[#00d2ff]/30 text-center space-y-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Valvira-laillistettu asiantuntemus</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Valmiina viemään oman tai tiimisi somen uudelle tasolle?
          </h2>
          <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto leading-relaxed">
            Jätä yhteydenotto tai tilaa Google Meet -tuntisparraus suoraan. Vastaamme nopeasti ja sovimme aikataulut kanssasi.
          </p>
          <div className="pt-2">
            <Link
              href="/yhteystiedot"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold text-sm hover:bg-white/90 transition-all shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:scale-[1.02] active:scale-[0.98] min-h-[48px]"
            >
              <Send className="w-4 h-4 text-black" />
              <span>Siirry tilaus- ja tarjouslomakkeeseen</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
