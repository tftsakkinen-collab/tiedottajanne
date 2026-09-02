import type { Metadata } from "next";
import Link from "next/link";
import SoteRoiCalculator from "@/components/SoteRoiCalculator";
import AiPromptLibrary from "@/components/AiPromptLibrary";
import SoteGlossary from "@/components/SoteGlossary";
import { Wrench, Sparkles, BookOpen, ArrowRight, ShieldCheck, CheckCircle2, Camera, Mic, Video } from "lucide-react";

export const metadata: Metadata = {
  title: "SOTE-ViestinnÃ¤n TyÃ¶kalut & Resurssit | Tiedottajanne Oy",
  description: "Ilmaiset SOTE-somen tyÃ¶kalut: ROI-laskuri, nykytilan testi, AI-promptikirjasto ChatGPT:lle sekÃ¤ kliinisen viestinnÃ¤n sanasto ja kÃ¤sikirja.",
  alternates: {
    canonical: "https://www.tiedottajanne.com/tyokalut",
  },
  openGraph: {
    title: "SOTE-ViestinnÃ¤n TyÃ¶kalut & Resurssit | Tiedottajanne Oy",
    description: "Ilmaiset SOTE-somen tyÃ¶kalut: ROI-laskuri, nykytilan testi, AI-promptikirjasto ChatGPT:lle sekÃ¤ kliinisen viestinnÃ¤n sanasto ja kÃ¤sikirja.",
    url: "https://www.tiedottajanne.com/tyokalut",
  },
};

export default function TyokalutPage() {
  const guideSections = [
    {
      title: "1. Laitteisto & Minimikalusto (Kamerat, Mikit & Valot)",
      icon: Camera,
      points: [
        "Puhelin (iPhone / Samsung 4K 60fps) riittÃ¤Ã¤ tÃ¤ysin aloitukseen. TÃ¤rkeintÃ¤ on hyvÃ¤ Ã¤Ã¤ni ja valo.",
        "Mikrofoni: RÃ¸de Wireless GO II / DJI Mic tai langallinen nappimikrofoni (Lavalier).",
        "Valaistus: 1 pehmeÃ¤ rengasvalo (Ring light) tai LED-paneeli viistosti kasvojen edessÃ¤.",
        "Jalusta: Tukeva pÃ¶ytÃ¤- tai lattiajalusta silmien korkeudella (eye level creates authority).",
      ],
    },
    {
      title: "2. Valvira-Etiikka & Potilassuoja",
      icon: ShieldCheck,
      points: [
        "VÃ¤ltÃ¤ kattavia parantumislupauksia. KÃ¤ytÃ¤ ilmaisua 'moni saa apua' tai 'harjoitteet voivat helpottaa oireita'.",
        "LisÃ¤Ã¤ aina vastuuvapauslauseke: 'TÃ¤mÃ¤ video on yleistÃ¤ potilasopetusta eikÃ¤ korvaa yksilÃ¶llistÃ¤ tutkimusta'.",
        "Potilastarinat ja ennen/jÃ¤lkeen -kuvat vaativat aina kirjallisen suostumuksen.",
        "Ammatillinen titteli (esim. OMT-Fysioterapeutti, ErikoislÃ¤Ã¤kÃ¤ri) tuo vÃ¤littÃ¶mÃ¤n auktoriteetin.",
      ],
    },
    {
      title: "3. Videon Rakenne (AIDA-Malli SOTE-Alalla)",
      icon: Video,
      points: [
        "0â€“3 s (Koukku): Sanoita potilaan oire suoraan ('Tuntuuko leukanivelessÃ¤ naksumista aamuisin?').",
        "3â€“15 s (Ongelman syy): SelitÃ¤ biomekaaninen tai kliininen syy ymmÃ¤rrettÃ¤vÃ¤sti.",
        "15â€“45 s (Ratkaisu): NÃ¤ytÃ¤ 1 konkreettinen harjoite tai kliininen vinkki ruudulla.",
        "45â€“60 s (Call to Action): Ohjaa varaamaan aika tai tutustumaan lisÃ¤oppaisiin.",
      ],
    },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Etusivu",
        "item": "https://www.tiedottajanne.com",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "TyÃ¶kalut & Resurssit",
        "item": "https://www.tiedottajanne.com/tyokalut",
      },
    ],
  };

  return (
    <div className="py-12 md:py-20 min-h-screen text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Title & AEO Lead Paragraph */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00d2ff]/30 bg-[#00d2ff]/10 text-[#00d2ff] text-xs font-semibold uppercase tracking-wider">
            <Wrench className="w-4 h-4" />
            <span>Maksuttomat TyÃ¶kalut &amp; Oppaat</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            SOTE-ViestinnÃ¤n TyÃ¶kalut &amp; <span className="bg-gradient-to-r from-white via-[#A4F4FD] to-[#00d2ff] bg-clip-text text-transparent">AI-Resurssit</span>
          </h1>
          {/* AEO Lead Paragraph */}
          <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Tiedottajanne Oy tarjoaa maksuttomia digitaalisia tyÃ¶kaluja ja resursseja terveydenhuollon asiantuntijoille: SOTE-somen ROI- ja mainossÃ¤Ã¤stÃ¶laskurin, 4 kysymyksen nykytilatestin, eettisen AI-promptikirjaston sekÃ¤ kliinisen viestintÃ¤sanaston ja kÃ¤sikirjan.
          </p>
        </div>

        {/* 1. SOTE ROI & Quiz Calculator */}
        <div id="roi-laskuri">
          <SoteRoiCalculator />
        </div>

        {/* 2. AI Prompts Library */}
        <div id="promptit">
          <AiPromptLibrary />
        </div>

        {/* 3. SOTE-Some KÃ¤sikirja */}
        <div id="kasikirja" className="space-y-8 max-w-5xl mx-auto">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#00d2ff]/30 bg-[#00d2ff]/10 text-[#00d2ff] text-xs font-semibold uppercase tracking-wider">
              <BookOpen className="w-4 h-4" />
              <span>SOTE-Some KÃ¤sikirja</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Videotuotannon &amp; Valvira-etiikan tiivistelmÃ¤
            </h2>
            <p className="text-sm text-white/60 max-w-2xl mx-auto">
              Keskeiset ohjeistukset ammattilaiselle: laitevalinnat, eettiset linjaukset ja tehokas videorakenne.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {guideSections.map((sec, idx) => {
              const Icon = sec.icon;
              return (
                <div key={idx} className="liquid-glass rounded-3xl p-7 space-y-4 flex flex-col justify-between border border-white/10">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00d2ff]/20 to-[#014489]/30 border border-[#00d2ff]/30 text-[#00d2ff] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-tight leading-snug">{sec.title}</h3>
                    <ul className="space-y-2 pt-2 text-xs text-white/70">
                      {sec.points.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00d2ff] shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. SOTE Glossary */}
        <div id="sanasto">
          <SoteGlossary />
        </div>

        {/* Bottom CTA */}
        <div className="liquid-glass rounded-3xl p-8 sm:p-12 border border-[#00d2ff]/30 text-center space-y-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>HenkilÃ¶kohtainen ohjaus</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Kaipaatko rÃ¤Ã¤tÃ¤lÃ¶ityÃ¤ sparrausta tyÃ¶kalujen kÃ¤yttÃ¶Ã¶nottoon?
          </h2>
          <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto leading-relaxed">
            Varaa henkilÃ¶kohtainen Google Meet -tuntisparraus (200 â‚¬ / h) tai pyydÃ¤ tarjous tiimikoulutuksesta.
          </p>
          <div className="pt-2">
            <Link
              href="/yhteystiedot"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold text-sm hover:bg-white/90 transition-all shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:scale-[1.02] active:scale-[0.98] min-h-[48px]"
            >
              <span>Varaa Konsultointi / PyydÃ¤ Tarjous</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

