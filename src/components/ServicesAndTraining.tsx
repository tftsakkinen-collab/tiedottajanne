"use client";

import Link from "next/link";
import { Sparkles, Video, CheckCircle2, ArrowRight, Send, Building2 } from "lucide-react";

export default function ServicesAndTraining() {
  return (
    <section id="palvelut" className="py-16 md:py-24 border-b border-white/10 relative overflow-hidden">
      {/* Subtle Ambient Light */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[450px] bg-gradient-to-l from-[#00d2ff]/10 to-transparent blur-[140px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00d2ff]/30 bg-[#00d2ff]/10 text-[#00d2ff] text-xs font-semibold tracking-wider uppercase">
            <Video className="w-4 h-4 text-[#00d2ff]" />
            <span>Palvelut &amp; Konsultointi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            Valitse <span className="bg-gradient-to-r from-white via-[#A4F4FD] to-[#00d2ff] bg-clip-text text-transparent">tuntiohjaus tai räätälöity koulutus</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base leading-relaxed">
            Sivuston kautta voit tilata suoraan henkilökohtaisen Google Meet -tuntiohjauksen. Kaikki yrityskohtaiset luennot ja laajemmat koulutukset räätälöidään yhteydenoton kautta.
          </p>
        </div>

        {/* 2 Cards Grid: 1 Core Product (200€/h) + 1 Tailored Inquiries for Companies */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Card 1: The Only Directly Packaged Product (200 € / h) */}
          <div className="lg:col-span-7 liquid-glass rounded-3xl p-8 sm:p-10 space-y-8 flex flex-col justify-between border-[#00d2ff]/50 shadow-[0_0_35px_rgba(0,210,255,0.12)] relative">
            <div className="space-y-6">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-block px-3.5 py-1 rounded-full bg-[#00d2ff]/15 border border-[#00d2ff]/30 text-[#00d2ff] text-xs font-semibold tracking-wider">
                  Yksinyrittäjille &amp; Asiantuntijoille
                </span>
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#00d2ff]/20 to-[#014489]/40 border border-[#00d2ff]/40 text-[#A4F4FD] text-[10px] font-bold uppercase tracking-wider">
                  Päätuote
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug font-display">
                  Somenkonsultointi &amp; Google Meet -tuntiohjaus
                </h3>
                <div className="mt-3 text-2xl sm:text-3xl font-bold font-display text-[#00d2ff] bg-white/[0.03] py-2.5 px-4 rounded-2xl border border-white/10 inline-block">
                  200 € <span className="text-sm font-sans font-normal text-white/70">(+ alv) / tunti</span>
                </div>
              </div>

              <p className="text-sm text-white/70 leading-relaxed">
                Henkilökohtaista, kädestä pitäen -opastusta ja sparrausta suoraan niihin asioihin ja pulmiin, jotka askarruttavat omassa somessasi.
              </p>

              <div className="pt-4 space-y-3 border-t border-white/10">
                <span className="text-xs font-semibold text-white/90 uppercase tracking-wider block">Mitä saat tunnissa:</span>
                <ul className="space-y-2.5">
                  {[
                    "1-on-1 tai pienen tiimin tuntisparraus Google Meetissä",
                    "Käsikirjoitukset, koukut & aihevalinta (Holy Trifecta)",
                    "Puhelinkuvaus, mikrofonit & valaistus-setup",
                    "SOTE- ja asiantuntijaetiikka & Valvira-linjaukset",
                    "Orgaaninen AEO-kasvu & kanavasi auditointi",
                    "Aikataulut sovitaan suoraan sähköpostitse tilauksen jälkeen",
                  ].map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80">
                      <CheckCircle2 className="w-4 h-4 text-[#00d2ff] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Link
              href="/yhteystiedot"
              className="w-full py-4 px-6 rounded-2xl bg-white text-black font-semibold text-sm hover:bg-[#00d2ff] hover:text-black transition-all flex items-center justify-center gap-2 group/btn text-center mt-6 shadow-[0_0_25px_rgba(255,255,255,0.2)] min-h-[48px]"
            >
              <Send className="w-4 h-4 text-black" />
              <span>Tilaa Google Meet -ohjaus (200 € / h)</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Card 2: Tailored Enterprise / Clinic Offerings via Form */}
          <div className="lg:col-span-5 liquid-glass rounded-3xl p-8 sm:p-10 space-y-8 flex flex-col justify-between border border-white/10">
            <div className="space-y-6">
              <span className="inline-block px-3 py-1 rounded-full bg-white/[0.04] border border-white/15 text-white/70 text-xs font-semibold tracking-wider">
                Yrityksille &amp; Organisaatioille
              </span>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                  Räätälöidyt Koulutukset &amp; Luennot
                </h3>
                <div className="mt-3 text-sm font-medium text-white/50">
                  Tarjouspyynnön kautta
                </div>
              </div>

              <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                Kaipaako työyhteisösi, lääkäriasemasi tai yrityksesi räätälöityä koulutuspäivää, henkilöstön puhelinkuvauskoulutusta tai laajempaa videostrategiaa?
              </p>

              <div className="pt-4 space-y-3 border-t border-white/10">
                <span className="text-xs font-semibold text-white/80 uppercase tracking-wider block">Räätälöitävissä mm:</span>
                <ul className="space-y-2.5 text-xs text-white/70">
                  {[
                    "Koko työyhteisön videokoulutukset & työpajat",
                    "Asiantuntijoiden esiintymisvalmennus & rutiini",
                    "Organisaation monikanavainen videostrategia",
                    "Lääkinnällinen etiikka & potilasohjeistus somessa",
                  ].map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Building2 className="w-4 h-4 text-[#00d2ff] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Link
              href="/yhteystiedot"
              className="w-full py-3.5 px-6 rounded-2xl bg-white/[0.03] border border-white/15 text-white font-semibold text-xs sm:text-sm hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 group/btn text-center mt-6 min-h-[48px]"
            >
              <span>Pyydä räätälöity tarjous</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
