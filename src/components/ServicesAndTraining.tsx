import Link from "next/link";
import { GraduationCap, ArrowRight, Video, FileText, CheckCircle2, ShieldCheck } from "lucide-react";

export default function ServicesAndTraining() {
  const packages = [
    {
      title: "1. SOTE-Viestinnän Strategia & Koulutus",
      subtitle: "Kliinisen asiantuntemuksen tuotteistaminen vaikuttavaksi videoksi",
      description: "Interaktiivinen puolipäivä- tai kokopäivävalmennus sote-yrityksille ja terveydenhuollon tiimeille. Opitaan tekemään eettisesti kestävää, Valvira-yhteensopivaa ja tekoälyindeksoituvaa videosisältöä.",
      features: [
        "Valvira- & Kela-yhteensopivuus videoviestinnässä",
        "AEO (Answer Engine Optimization) & AI-indeksointi",
        "Älypuhelinvideon tekninen laatu & kamerakammo-valmennus",
        "Käsikirjoitusmallit & valmiit AI-promptit",
      ],
      icon: GraduationCap,
      badge: "Suosituin Valmennus",
      target: "SOTE-yritykset, Klinikat & Järjestöt",
    },
    {
      title: "2. Avaimet Käteen -Videotuotanto",
      subtitle: "Asiantuntijavideot & käsikirjoitetut sarjat ammattilaiskalustolla",
      description: "Full-service videotuotanto paikan päällä klinikallanne tai studiossamme. Suunnittelemme, käsikirjoitamme, kuvaamme ja editoimme videonne hakukone- ja somevalmiiksi kokonaisuuksiksi.",
      features: [
        "4K-videokuvaus & studioääni paikan päällä",
        "OMT-fysioterapeutin laatima kliininen käsikirjoitus",
        "Shorts-, Reel- & YouTube-formaatit samalla kuvauksella",
        "Monikielinen AI-tekstitys & tiivistelmät",
      ],
      icon: Video,
      badge: "Kokonaispalvelu",
      target: "Lääkäriasemat, Fysioterapian ketjut & Valmistajat",
    },
    {
      title: "3. SOTE AI-Käsikirja & Sanasto",
      subtitle: "Tekoälytyökalut & termistö terveydenhuollon viestintään",
      description: "Digitaalinen materiaalipaketti ja työkaluosio, joka sisältää valmiit tekoäly-promptit videotuotantoon, potilasohjeistuksiin ja terveydenhuollon hakukonenäkyvyyden optimointiin.",
      features: [
        "Tarkastetut SOTE-promptit ChatGPT- & Claude-malleille",
        "Terveydenhuollon AEO-sanasto (AI SEO)",
        "Potilasviestinnän saavutettavuus-ohjeistus",
        "Jatkuvasti päivittyvä digitaalinen käsikirja",
      ],
      icon: FileText,
      badge: "Digitaalinen Työkalu",
      target: "SOTE-ammattilaiset & Viestintävastaavat",
    },
  ];

  return (
    <section id="palvelut" className="py-12 md:py-16 bg-[var(--bg)] border-b border-[var(--border)] relative overflow-hidden">
      {/* Ambient Light */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[450px] bg-[var(--accent)]/10 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-semibold tracking-wider uppercase">
            <GraduationCap className="w-4 h-4 text-[var(--accent)]" />
            <span>Koulutus- &amp; Valmennuspaketit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--text)] leading-tight font-display">
            Valmiit tuotteistetut <span className="text-gradient-cyan">Videopaketit</span>
          </h2>
          <p className="text-[var(--muted)] text-sm sm:text-base leading-relaxed">
            Räätälöityjä ratkaisuja terveydenhuollon ja SOTE-alan organisaatioille, jotka haluavat modernisoida viestintänsä eettisesti ja tekoälyindeksoidusti.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => {
            const Icon = pkg.icon;
            return (
              <div
                key={idx}
                className="glass rounded-3xl p-8 space-y-6 flex flex-col justify-between group hover:border-[var(--accent)]/40 transition-all shadow-sm"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--accent)] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30 text-[var(--accent)] text-xs font-mono font-semibold">
                      {pkg.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[var(--text)] tracking-tight font-display mb-2">{pkg.title}</h3>
                    <p className="text-xs text-[var(--accent)] font-semibold">{pkg.subtitle}</p>
                  </div>

                  <p className="text-sm text-[var(--muted)] leading-relaxed">
                    {pkg.description}
                  </p>

                  <div className="space-y-2.5 pt-2">
                    <span className="text-xs font-bold text-[var(--text)] uppercase tracking-wider block">Sisältää:</span>
                    <ul className="space-y-2 text-xs text-[var(--muted)]">
                      {pkg.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-[var(--border)] space-y-4">
                  <div className="flex items-center gap-1.5 text-xs text-[var(--muted)] font-mono">
                    <ShieldCheck className="w-4 h-4 text-[var(--accent)] shrink-0" />
                    <span>{pkg.target}</span>
                  </div>

                  <Link
                    href="/yhteystiedot"
                    className="w-full py-3.5 px-4 rounded-2xl bg-[var(--text)] text-[var(--bg)] font-semibold text-xs sm:text-sm hover:opacity-90 transition-all flex items-center justify-center gap-2 group-hover:shadow-md min-h-[44px]"
                  >
                    <span>Pyydä Tarjous &amp; Lisätiedot</span>
                    <ArrowRight className="w-4 h-4 text-[var(--bg)]" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
