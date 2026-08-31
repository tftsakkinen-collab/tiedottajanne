import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Sparkles, ArrowRight, ShieldCheck, Video, Send, CheckCircle2, Building2 } from "lucide-react";
import { SITE_CONFIG } from "@/data/config";

export const metadata: Metadata = {
  title: "Tiedottajanne Oy — Somenkonsultointi & SOTE-Videotuotanto",
  description: "Henkilökohtainen somenkonsultointi ja Google Meet -tuntiohjaus (200 € / h) Janne Säkkiseltä sekä räätälöidyt SOTE-videokoulutukset yrityksille.",
  alternates: {
    canonical: "https://www.tiedottajanne.fi",
  },
};

export default function Home() {
  return (
    <div className="text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[75vh] flex flex-col justify-center items-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-12 pb-20 selection:bg-[#00d2ff]/20">
        {/* Subtle Ambient Light */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#00d2ff]/15 via-[#014489]/10 to-transparent blur-[140px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center space-y-8">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md text-xs sm:text-sm text-slate-200 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#00d2ff]" />
            <span>Tiedottajanne Oy — SOTE-alan videotuotanto &amp; konsultointi</span>
          </div>

          {/* Hero H1 */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-center leading-[1.1] max-w-4xl font-display">
            Somenkonsultointi &amp; SOTE-videotuotanto <span className="bg-gradient-to-r from-white via-[#A4F4FD] to-[#00d2ff] bg-clip-text text-transparent">asiantuntijoille.</span>
          </h1>

          {/* Hero Lede */}
          <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Saa henkilökohtaista kädestä pitäen -opastusta ja sparrausta omaan someesi Google Meetissä (200 € / h) tai pyydä räätälöity koulutustarjous yrityksellesi.
          </p>

          {/* Primary CTA + Secondary Link */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto pt-2">
            <Link
              href="/yhteystiedot"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white text-black font-semibold text-sm sm:text-base px-8 py-4 transition-all hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-white/10 min-h-[48px]"
            >
              <Send className="w-4 h-4 text-black" />
              <span>Varaa Google Meet -tuntiohjaus (200 € / h)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/yhteystiedot"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-medium text-sm sm:text-base px-8 py-4 transition-all hover:bg-white/10 hover:border-white/40 active:scale-[0.98] min-h-[48px]"
            >
              <span>Pyydä yritystarjous</span>
            </Link>
          </div>

        </div>
      </section>

      {/* 2. THE CORE 200€/H PRODUCT & TAILORED CORPORATE OFFERS */}
      <section className="py-16 md:py-24 border-t border-b border-white/10 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white font-display">
              Palvelumme
            </h2>
            <p className="text-sm text-slate-300">
              Yksinkertainen ja läpinäkyvä hinnoittelu ilman sitoumuksia.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Card 1: Core 200€/h Product */}
            <div className="lg:col-span-7 liquid-glass rounded-3xl p-8 sm:p-10 space-y-8 flex flex-col justify-between border-[#00d2ff]/50 shadow-[0_0_35px_rgba(0,210,255,0.12)]">
              <div className="space-y-6">
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-block px-3.5 py-1 rounded-full bg-[#00d2ff]/15 border border-[#00d2ff]/30 text-[#00d2ff] text-xs font-semibold tracking-wider">
                    Yksinyrittäjille &amp; ammatinharjoittajille
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
                    200 € <span className="text-sm font-sans font-normal text-slate-300">(+ alv) / tunti</span>
                  </div>
                </div>

                <p className="text-sm text-slate-200 leading-relaxed">
                  Kädestä pitäen -opastusta ja täsmäsparrausta suoraan niihin asioihin, jotka askarruttavat sinua oman sosiaalisen median tekemisessä.
                </p>

                <div className="pt-4 space-y-3 border-t border-white/10">
                  <span className="text-xs font-semibold text-slate-100 uppercase tracking-wider block">Mitä käymme läpi tunnissa:</span>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200">
                    {[
                      "Aihevalinta, koukut & käsikirjoitukset (Holy Trifecta)",
                      "Puhelinkuvaus, mikrofonit ja valaistus omilla välineilläsi",
                      "SOTE- ja asiantuntijaetiikka & Valvira-potilassuoja",
                      "Orgaaninen AEO-kasvu & kanavasi nykytilan auditointi",
                      "Aikataulut sovitaan joustavasti suoraan kalenteriisi",
                    ].map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5">
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

            {/* Card 2: Custom Enterprise Inquiries via Form */}
            <div className="lg:col-span-5 liquid-glass rounded-3xl p-8 sm:p-10 space-y-8 flex flex-col justify-between border border-white/10">
              <div className="space-y-6">
                <span className="inline-block px-3 py-1 rounded-full bg-white/[0.04] border border-white/15 text-slate-300 text-xs font-semibold tracking-wider">
                  Yrityksille &amp; klinikoille
                </span>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug font-display">
                    Räätälöidyt koulutukset &amp; luennot
                  </h3>
                  <div className="mt-3 text-sm font-semibold text-[#00d2ff]">
                    Tarjouspyynnön kautta
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  Kaikki työyhteisöjen, lääkäriasemien ja organisaatioiden luennot, työpajat ja laajemmat videostrategiat räätälöidään tarpeidenne mukaan.
                </p>

                <div className="pt-4 space-y-3 border-t border-white/10">
                  <span className="text-xs font-semibold text-slate-100 uppercase tracking-wider block">Räätälöitävissä mm:</span>
                  <ul className="space-y-2.5 text-xs text-slate-200">
                    {[
                      "Koko henkilöstön videokoulutus & työpajat",
                      "Esiintymisvalmennus & rutiini ammattilaisille",
                      "Organisaation monikanavainen videostrategia",
                      "Lääkinnällinen etiikka & potilasohjeistus",
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
                <span>Pyydä räätälöity tarjous yrityksellesi</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* 3. SHORT EXPERT PROFILE (JANNE SÄKKINEN) */}
      <section className="py-16 md:py-24 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="liquid-glass rounded-3xl p-8 sm:p-12 border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Photo */}
            <div className="lg:col-span-4 relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/15 bg-white/[0.02]">
              <Image
                src="/assets/DSC09967.jpg"
                alt="Janne Säkkinen — OMT-fysioterapeutti ja Tiedottajanne Oy:n perustaja"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover object-top"
              />
            </div>

            {/* Content (2-3 concise sentences) */}
            <div className="lg:col-span-8 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/15 text-[#00d2ff] text-xs font-semibold uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Kouluttaja &amp; Asiantuntija</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                  Janne Säkkinen
                </h2>
                <div className="text-xs text-white/70 font-medium">
                  OMT-Fysioterapeutti (SOMTY) • Terveystieteiden B.Sc. • Oulun yliopiston luennoitsija (2017–)
                </div>
              </div>

              <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                Janne Säkkinen on Valvira-rekisteröity OMT-fysioterapeutti ja Oulun yliopiston lääketieteellisen tiedekunnan pitkäaikainen luennoitsija. Hän on rakentanut nollasta yli 1,1 miljoonan orgaanisen katselukerran kanavakokonaisuuden täysin ilman maksettua mainontaa. Tiedottajanne Oy tuo nämä käytännön opit sote-alan ammattilaisten ja yritysten käyttöön.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/referenssit"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-black font-semibold text-xs sm:text-sm hover:bg-white/90 transition-all min-h-[48px]"
                >
                  <span>Katso referenssit &amp; 1,1M+ näytöt</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/yhteystiedot"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl border border-white/15 bg-white/[0.03] text-white font-semibold text-xs sm:text-sm hover:bg-white/10 transition-all min-h-[48px]"
                >
                  <span>Ota yhteyttä</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. UNIFIED FINAL CALL TO ACTION */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Varaa Google Meet -tuntiohjaus <span className="bg-gradient-to-r from-white via-[#A4F4FD] to-[#00d2ff] bg-clip-text text-transparent">(200 € / h)</span>
            </h2>
            <p className="text-sm sm:text-base text-white/70 max-w-xl mx-auto leading-relaxed">
              Jätä viesti lomakkeella, niin otamme yhteyttä ja laitamme aikataulut suoraan kalenteriisi.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/yhteystiedot"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white text-black font-semibold text-sm sm:text-base px-8 py-4 transition-all hover:bg-white/90 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-[1.02] active:scale-[0.98] min-h-[48px]"
            >
              <Send className="w-4 h-4 text-black" />
              <span>Siirry tilauslomakkeeseen</span>
            </Link>
            <Link
              href="/tyokalut"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 text-white font-medium text-sm sm:text-base px-8 py-4 transition-all hover:bg-white/10 min-h-[48px]"
            >
              <span>Ilmaiset työkalut &amp; ROI-laskuri</span>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
