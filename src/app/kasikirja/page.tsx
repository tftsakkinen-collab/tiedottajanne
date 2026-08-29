import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, ShieldCheck, Camera, Video, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

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
    <div className="py-12 md:py-16 bg-[var(--bg)] min-h-screen text-[var(--text)] relative overflow-hidden">
      {/* Ambient Light */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-[var(--accent)]/10 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Page Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-semibold uppercase tracking-wider">
            <BookOpen className="w-4 h-4 text-[var(--accent)]" />
            <span>KATTAVA OPAS AMMATTILAISILLE</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text)] leading-tight font-display">
            SOTE-ALAN SOMEMENESTYKSEN <span className="text-gradient-cyan">KÄSIKIRJA</span>
          </h1>
          <p className="text-[var(--muted)] text-base max-w-2xl mx-auto leading-relaxed">
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
                className="glass rounded-3xl p-8 sm:p-10 space-y-5"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-[var(--surface-elevated)] border border-[var(--accent)]/30 text-[var(--accent)] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[var(--text)] tracking-tight font-display">
                    {sec.title}
                  </h2>
                </div>

                <div className="space-y-3 pt-2">
                  {sec.content.map((point, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="glass rounded-3xl p-8 sm:p-12 border border-[var(--accent)]/20 text-center space-y-5">
          <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text)] tracking-tight font-display">Tarvitsetko valmiita AI-prompteja skriptaukseen?</h3>
          <p className="text-sm text-[var(--muted)] max-w-xl mx-auto leading-relaxed">
            Tutustu ilmaiseen AI-promptikirjastoomme ja kopioi valmiit rungot ChatGPT:hen.
          </p>
          <div className="pt-2">
            <Link
              href="/promptit"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--text)] text-[var(--bg)] font-semibold text-sm hover:opacity-90 transition-all shadow-md min-h-[44px]"
            >
              <span>Avaa Promptikirjasto</span>
              <ArrowRight className="w-4 h-4 text-[var(--bg)]" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
