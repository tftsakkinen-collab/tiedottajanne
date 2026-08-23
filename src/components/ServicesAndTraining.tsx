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
    <section id="palvelut" className="py-16 bg-[#000a18] border-b border-[#0C66B4]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00AEEF]/20 border border-[#00AEEF]/40 text-[#00AEEF] text-xs font-bold tracking-wider uppercase">
            <GraduationCap className="w-4 h-4 text-[#00AEEF]" />
            <span>Koulutus- &amp; Valmennuspaketit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-white tracking-normal leading-[1.2]">
            Valmiit tuotteistetut <span className="text-[#00AEEF]">Videopaketit</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Valitse organisaatiollesi sopivin koulutuskokonaisuus. Tiedottajanne Oy tarjoaa selkeästi tuotteistetut valmennukset yrityksille ja ammatinharjoittajille.
          </p>
        </div>

        {/* Packages Grid (2 pakettia) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#000d21] border border-[#0C66B4]/50 space-y-6 shadow-panel hover:border-[#00AEEF] transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#014489]/40 border border-[#0C66B4] text-[#00AEEF] text-xs font-semibold uppercase tracking-wider">
                    {pkg.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#00AEEF] transition-colors leading-snug">
                  {pkg.title}
                </h3>
                <div className="text-lg font-black text-[#00AEEF] bg-[#000a18] py-2 px-3 rounded-xl border border-[#0C66B4]/40 inline-block">
                  {pkg.price}
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">{pkg.desc}</p>

                <div className="pt-2 space-y-2 border-t border-[#0C66B4]/30">
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">Sisältö:</span>
                  <ul className="space-y-2">
                    {pkg.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-gray-200">
                        <CheckCircle2 className="w-4 h-4 text-[#00AEEF] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link
                href={pkg.link}
                className="w-full py-3.5 px-4 rounded-xl bg-[#000814] border border-[#0C66B4] text-[#00AEEF] font-bold text-xs hover:bg-[#00AEEF] hover:text-black transition-all flex items-center justify-center gap-2 group/btn text-center mt-4"
              >
                <span>{pkg.ctaText}</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* Story Case Study Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#000d21] via-[#014489]/30 to-[#000d21] border border-[#00AEEF]/50 shadow-glow grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Aito Kasvutarina — Proof of Work</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-display text-white">
              Tapaustutkimus: Nollasta <span className="text-[#00AEEF]">1 150 000+ orgaaniseen katseluun</span>
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Janne Säkkinen rakensi orgaanisen videokanavansa nollasta yli 1.1 miljoonaan katselukertaan täysin ilman maksettua mainontaa. Avain menestykseen oli tutkittuun kliiniseen tietoon perustuvat napakat opetusvideot ja AEO-hakukonenäkyvyys. Samat menetelmät tuodaan nyt Tiedottajanne Oy:n koulutusasiakkaiden käyttöön.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
            <Link
              href="/yhteystiedot"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#00AEEF] text-black font-bold text-sm hover:bg-[#33C2F5] transition-all shadow-[0_0_25px_rgba(0,174,239,0.5)] flex items-center justify-center gap-2 text-center"
            >
              <Send className="w-4 h-4" />
              <span>Varaa koulutus organisaatiollesi</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
