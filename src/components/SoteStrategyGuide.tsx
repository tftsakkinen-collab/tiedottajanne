import { ShieldCheck, Video, FileCode2, Target, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function SoteStrategyGuide() {
  const pillars = [
    {
      step: "01",
      title: "Valvira- & Etiikkavarhaisuus",
      description: "Terveydenhuollon lainsäädännön, Terhikki-rekisteröinnin ja potilassuojan edellyttämä eettinen viestintä ilman katteettomia terveysväittämiä.",
      icon: ShieldCheck,
      bullets: [
        "Ei katteettomia parantumislupauksia",
        "Vastuuvapauslausekkeet (Disclaimer) kunnossa",
        "Potilastyön anonymisointi & suostumukset"
      ]
    },
    {
      step: "02",
      title: "Kliininen & Tieteellinen Tarkkuus",
      description: "Ammatillinen auktoriteetti yhdistettynä selkeään, ihmisläheiseen ja kansanomaiseen opetustapaan.",
      icon: Video,
      bullets: [
        "Potilaan oirekokemuksen sanoittaminen",
        "Itsehoitoliikkeiden & kliinisten testien demot",
        "Yliopistotason tiedon muuntaminen arjeksi"
      ]
    },
    {
      step: "03",
      title: "Hakukone- & Tekoälyindeksointi (AI-SEO)",
      description: "Videoiden ja artikkeleiden indeksointi siten, että tekoälyhakukoneet (ChatGPT, Perplexity, Gemini) ja Google löytävät sisällön.",
      icon: FileCode2,
      bullets: [
        "llms.txt & llms-full.txt -tiedostoarkkitehtuuri",
        "Schema.org JSON-LD (VideoObject, Course, Organization)",
        "Oirekohtaiset avainsanat & aikaleimat"
      ]
    },
    {
      step: "04",
      title: "Vastaanotto- & Koulutuskonversio",
      description: "Videokatselijoiden ohjaaminen orgaanisesti vastaanottoasiakkaiksi, luentotilauksiksi ja digitaalisten oppaiden lataajiksi.",
      icon: Target,
      bullets: [
        "Selkeät toimintakehotteet (Call to Action)",
        "Ilmaiset PDF-oppaat & sähköpostilista",
        "Vello- ja kalenterivarausintegraatiot"
      ]
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-[var(--bg)] border-b border-[var(--border)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--accent)]/20 border border-[var(--accent)]/40 text-[var(--accent)] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>SOTE-SOMEN 4 PILARIA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[var(--text)] tracking-wide">
            RESEPTI <span className="text-gradient-cyan">MENESTYKSEKKÄÄSEEN</span> SOTE-VIDEOTUOTANTOON
          </h2>
          <p className="text-[var(--muted)] text-sm sm:text-base leading-relaxed">
            Terveydenhuollon videotuotanto eroaa tavallisesta viihdesomesta. Se vaatii kliinistä tarkkuutta, eettisyyttä ja tekoälyajan hakukoneoptimointia.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl glass flex flex-col justify-between space-y-6 hover:border-[var(--accent)]/60 transition-all shadow-sm"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[var(--surface-elevated)] border border-[var(--accent)]/40 text-[var(--accent)] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-2xl font-mono font-bold text-[var(--accent)]/40">
                      {p.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[var(--text)] font-display tracking-wide leading-snug">
                    {p.title}
                  </h3>

                  <p className="text-xs text-[var(--muted)] leading-relaxed">
                    {p.description}
                  </p>

                  <div className="pt-2 space-y-2 border-t border-[var(--border)]">
                    {p.bullets.map((b, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[var(--muted)]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="p-8 rounded-3xl glass border border-[var(--accent)]/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-[var(--text)] font-display">
              Haluatko lukea täydellisen SOTE-some käsikirjan?
            </h3>
            <p className="text-xs sm:text-sm text-[var(--muted)]">
              Opas sisältää laitteisto-ohjeet (kamerat, valot, mikit), eettiset suuntaviivat ja SEO-käsikirjoitusmalleja.
            </p>
          </div>
          <Link
            href="/kasikirja"
            className="px-6 py-3.5 rounded-xl bg-[var(--text)] text-[var(--bg)] font-bold text-sm hover:opacity-90 transition-all shadow-md flex items-center gap-2 whitespace-nowrap shrink-0 min-h-[44px]"
          >
            <span>Avaa Käsikirja</span>
            <ArrowRight className="w-4 h-4 text-[var(--bg)]" />
          </Link>
        </div>

      </div>
    </section>
  );
}
