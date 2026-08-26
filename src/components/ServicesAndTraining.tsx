"use client";

import Link from "next/link";
import { Sparkles, GraduationCap, CheckCircle2, ArrowRight, Send } from "lucide-react";

export default function ServicesAndTraining() {
  const packages = [
    {
      badge: "Ammatinharjoittajille & Yksinyrittäjille",
      title: "1. Somestartti — Puhelinkuvaus & Rutiini",
      price: "800 € (+ alv) / päivä",
      desc: "Avaimet käteen -koulutus ammatinharjoittajille ja kliinikoille. Opitte tuottamaan luotettavaa ja optimoitua videosisältöä heti omilla välineillänne.",
      features: [
        "Kamerakammion voittaminen & Esiintymisvalmennus",
        "Puhelinkuvaus, mikrofonit & valaistus-setup",
        "Aihesuunnitelma & 4 valmista kuvausskriptiä",
        "Esiintymisvarmuuden nopeuttaminen",
      ],
      ctaText: "Pyydä Somestartti tarjous",
      link: "/yhteystiedot",
    },
    {
      badge: "Yrityksille & Asiantuntijoille",
      title: "2. Videostrategia & Henkilöbrändi",
      price: "1 990 € (+ alv) / päivä",
      desc: "Yksilöllinen sparraus ja strategiapaketti asiantuntijoille ja yrityksille, jotka haluavat rakentaa 1.1M+ katselukerran orgaanisen auktoriteetin.",
      features: [
        "Nollasta 1.1M+ katseluun orgaaninen strategia",
        "Holy Trifecta -käsikirjoitukset & Show not tell visualisoinnit",
        "Kuvaustekniikka, mikrofonit & valaistus",
        "Yksilöllinen 1-on-1 videonäytteiden auditointi",
      ],
      ctaText: "Varaa videostrategia",
      link: "/yhteystiedot",
    },
  ];

  return (
    <section id="palvelut" className="py-20 md:py-28 bg-[#0c0c0c] border-b border-white/10 relative overflow-hidden">
      {/* Subtle Ambient Light */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[450px] bg-gradient-to-l from-[#00d2ff]/10 to-transparent blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00d2ff]/30 bg-[#00d2ff]/10 text-[#00d2ff] text-xs font-semibold tracking-wider uppercase">
            <GraduationCap className="w-4 h-4 text-[#00d2ff]" />
            <span>Koulutus- &amp; Valmennuspaketit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Valmiit tuotteistetut <span className="bg-gradient-to-r from-white via-[#A4F4FD] to-[#00d2ff] bg-clip-text text-transparent">Videopaketit</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base leading-relaxed">
            Valitse organisaatiollesi sopivin koulutuskokonaisuus. Tiedottajanne Oy tarjoaa selkeästi tuotteistetut valmennukset yrityksille ja ammatinharjoittajille.
          </p>
        </div>

        {/* Packages Grid (2 pakettia) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className="liquid-glass rounded-3xl p-8 sm:p-10 space-y-8 flex flex-col justify-between group"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="inline-block px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/15 text-[#00d2ff] text-xs font-semibold tracking-wider">
                    {pkg.badge}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-[#00d2ff] transition-colors leading-snug">
                  {pkg.title}
                </h3>
                <div className="text-xl font-bold text-[#00d2ff] bg-white/[0.03] py-2.5 px-4 rounded-2xl border border-white/10 inline-block font-mono">
                  {pkg.price}
                </div>
                <p className="text-sm text-white/60 leading-relaxed">{pkg.desc}</p>

                <div className="pt-4 space-y-3 border-t border-white/10">
                  <span className="text-xs font-semibold text-white/80 uppercase tracking-wider block">Sisältö:</span>
                  <ul className="space-y-2.5">
                    {pkg.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80">
                        <CheckCircle2 className="w-4 h-4 text-[#00d2ff] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link
                href={pkg.link}
                className="w-full py-4 px-6 rounded-2xl bg-white/[0.03] border border-white/15 text-white font-semibold text-xs sm:text-sm hover:bg-white hover:text-black hover:border-white transition-all flex items-center justify-center gap-2 group/btn text-center mt-6 shadow-sm"
              >
                <span>{pkg.ctaText}</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* Story Case Study Box */}
        <div className="liquid-glass rounded-3xl p-8 sm:p-12 border border-[#00d2ff]/20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Aito Kasvutarina — Proof of Work</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Tapaustutkimus: Nollasta <span className="bg-gradient-to-r from-white via-[#A4F4FD] to-[#00d2ff] bg-clip-text text-transparent">1 150 000+ orgaaniseen katseluun</span>
            </h3>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              Janne Säkkinen rakensi orgaanisen videokanavansa nollasta yli 1.1 miljoonaan katselukertaan täysin ilman maksettua mainontaa. Avain menestykseen oli tutkittuun kliiniseen tietoon perustuvat napakat opetusvideot ja AEO-hakukonenäkyvyys. Samat menetelmät tuodaan nyt Tiedottajanne Oy:n koulutusasiakkaiden käyttöön.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
            <Link
              href="/yhteystiedot"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-semibold text-sm hover:bg-white/90 transition-all shadow-[0_0_25px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2 text-center hover:scale-[1.02] active:scale-[0.98]"
            >
              <Send className="w-4 h-4 text-black" />
              <span>Varaa koulutus organisaatiollesi</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
