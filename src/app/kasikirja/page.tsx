import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, ShieldCheck, Camera, Mic, Video, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "SOTE-Some Käsikirja | Tiedottajanne Oy",
  description: "Terveydenhuollon ammattilaisen opas videotuotantoon, Valvira-yhteensopivuuteen, laitevalintoihin ja SEO-käsikirjoitukseen.",
};

export default function KasikirjaPage() {
  const sections = [
    {
      title: "1. Laitteisto & Minimikalusto (Kamerat, Mikit & Valot)",
      icon: Camera,
      content: [
        "Puhelin (iPhone / Samsung 4K 60fps) riittää täysin aloitukseen. Tärkeintä on hyvä ääni ja valo.",
        "Mikrofoni: Røde Wireless GO II / DJI Mic tai langallinen nappimikrofon (Lavalier). Terveydenhuollossa huono ääni heikentää luottamusta heti.",
        "Valaistus: 1 pehmeä rengasvalo (Ring light) tai LED-paneeli viistosti kasvojen edessä.",
        "Jalusta: Tukeva pöytä- tai lattiajalusta silmien korkeudella (eye level creates authority)."
      ]
    },
    {
      title: "2. Valvira- Eettisyys & Potilassuoja",
      icon: ShieldCheck,
      content: [
        "Vältä kattavia parantumislupauksia. Käytä ilmaisua 'moni saa apua' tai 'harjoitteet voivat helpottaa oireita'.",
        "Lisää aina disclaimer: 'Tämä video on yleistä potilasopetusta eikä korvaa yksilöllistä lääkärin tai fysioterapeutin tutkimusta'.",
        "Potilastarinat ja ennen/jälkeen -kuvat vaativat AINA kirjallisen suostumuksen.",
        "Ammatillinen titteli (esim. OMT-Fysioterapeutti, Erikoislääkäri) tuo välittömän auktoriteetin."
      ]
    },
    {
      title: "3. Videon Rakenne (AIDA-Malli SOTE-Alalla)",
      icon: Video,
      content: [
        "0-3 sekuntia (Koukku): Sanoita potilaan oire tai kysymys suoraan ('Tuntuuko leukanivelessä naksumista aamuisin?').",
        "3-15 sekuntia (Ongelman syy): Selitä biomekaaninen tai lääketieteellinen syy selkeästi 2 lauseella.",
        "15-45 sekuntia (Ratkaisu): Näytä 1 konkreettinen harjoite tai kliininen vinkki ruudulla.",
        "45-60 sekuntia (Call to Action): Ohjaa lataamaan ilmainen PDF-opas tai varaamaan aika."
      ]
    },
    {
      title: "4. AI-SEO & Tekoälyindeksointi",
      icon: Sparkles,
      content: [
        "Luo videolle tarkat aikaleimat (Timestamps) kuvaukseen (esim. 0:00 Oireet, 1:15 Harjoite, 2:30 Milloin lääkäriin).",
        "Hyödynnä llms.txt -tiedostoa kotisivuillasi, jotta Perplexity ja ChatGPT suosittelevat asiantuntijuuttasi hakuvastauksissa.",
        "Merkitse videot Schema.org VideoObject JSON-LD -tunnisteilla."
      ]
    }
  ];

  return (
    <div className="py-16 bg-[#000a18] min-h-screen text-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00AEEF]/20 border border-[#00AEEF]/40 text-[#00AEEF] text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-4 h-4" />
            <span>KATTAVA OPAS AMMATTILAISILLE</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-display text-white tracking-wide">
            SOTE-ALAN SOMEMENESTYKSEN <span className="text-[#00AEEF]">KÄSIKIRJA</span>
          </h1>
          <p className="text-gray-300 text-base max-w-2xl mx-auto leading-relaxed">
            Näkökulmat ja käytännön ohjeet terveydenhuollon asiantuntijoille, jotka haluavat rakentaa orgaanista näkyvyyttä ja asiantuntija-auktoriteettia.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {sections.map((sec, idx) => {
            const Icon = sec.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-[#000d21] border border-[#0C66B4]/50 shadow-panel space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0C66B4]/30 border border-[#00AEEF]/40 text-[#00AEEF] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
                    {sec.title}
                  </h2>
                </div>

                <div className="space-y-3 pt-2">
                  {sec.content.map((point, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-[#00AEEF] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#0C66B4]/30 via-[#000d21] to-[#000a18] border border-[#00AEEF]/40 text-center space-y-4">
          <h3 className="text-2xl font-bold text-white">Tarvitsetko valmiita AI-prompteja skriptaukseen?</h3>
          <p className="text-sm text-gray-300 max-w-xl mx-auto">
            Tutustu ilmaiseen AI-promptikirjastoomme ja kopioi valmiit rungot ChatGPT:hen.
          </p>
          <Link
            href="/promptit"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#00AEEF] text-black font-bold text-base hover:bg-[#33C2F5] transition-all shadow-glow"
          >
            <span>Avaa Promptikirjasto</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </div>
  );
}
