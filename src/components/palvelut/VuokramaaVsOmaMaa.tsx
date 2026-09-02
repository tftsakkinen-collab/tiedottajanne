"use client";

import { CheckCircle2, Globe2, ExternalLink, Sparkles, ShieldCheck, MapPin } from "lucide-react";

export default function VuokramaaVsOmaMaa() {
  return (
    <section id="oma-maa-vs-vuokramaa" className="py-12 md:py-20 bg-[var(--bg)] border-y border-[var(--border)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="pill uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[var(--accent)]" />
            <span>Oma Maa -taktiikka &amp; Digitaalinen Koti</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--text)] font-display leading-tight">
            Rakenna menestyksesi kestävälle pohjalle – <span className="text-gradient-cyan">omalle maallesi.</span>
          </h2>
          <p className="text-[var(--muted)] text-sm sm:text-base leading-relaxed">
            Ammattilaisen tärkein voimavara on oma verkkokoti. Kotisivusi kokoavat osaamisesi yhteen paikkaan, rakentavat nimeäsi nettiin ja tekoälyyn — ja ohjaavat asiakkaat sujuvasti juuri niihin toimipisteisiin ja vastaanotoille, joissa kulloinkin työskentelet.
          </p>
        </div>

        {/* 3 Core Pillars of "Oma maa" */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Pillar 1: Oma alusta & tunnettuus */}
          <div className="glass rounded-3xl p-8 space-y-6 border border-[var(--border)] hover:border-[var(--accent)]/40 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)]">
                <Globe2 className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs text-[var(--accent)] font-mono font-bold uppercase tracking-wider">1. Oma Alusta</span>
                <h3 className="text-xl font-bold text-[var(--text)] font-display">Näy omalla nimelläsi ja ehdoillasi</h3>
              </div>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                Oma verkkosivusto antaa kliiniselle osaamisellesi, potilasohjeillesi ja erityisaloillesi arvokkaan ja selkeän kodin. Sinä olet asiantuntijana keskiössä.
              </p>
            </div>
            <ul className="space-y-2.5 text-xs text-[var(--text)] pt-4 border-t border-[var(--border)]">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[var(--success)] shrink-0 mt-0.5" />
                <span>100 % oma profiili ja digitaalinen identiteetti</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[var(--success)] shrink-0 mt-0.5" />
                <span>Pysyvä auktoriteetti urasi kaikissa vaiheissa</span>
              </li>
            </ul>
          </div>

          {/* Pillar 2: Ohjaa paikkoihin missä työskentelet */}
          <div className="glass rounded-3xl p-8 space-y-6 border border-[var(--border)] hover:border-[var(--accent)]/40 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)]">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs text-[var(--accent)] font-mono font-bold uppercase tracking-wider">2. Asiakasohjaus</span>
                <h3 className="text-xl font-bold text-[var(--text)] font-display">Ohjaa sinne, missä työskentelet</h3>
              </div>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                Vastaanotatpa lääkärikeskuksessa, useilla eri klinikoilla tai omalla vastaanotollasi, kotisivusi ohjaavat potilaat suoraan oikeisiin toimipisteisiin ja aikoihin.
              </p>
            </div>
            <ul className="space-y-2.5 text-xs text-[var(--text)] pt-4 border-t border-[var(--border)]">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[var(--success)] shrink-0 mt-0.5" />
                <span>Suorat linkit eri toimipisteiden vastaanottoihin</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[var(--success)] shrink-0 mt-0.5" />
                <span>Asiakkaat seuraavat sinua, vaikka toimipaikkasi vaihtuisivat</span>
              </li>
            </ul>
          </div>

          {/* Pillar 3: Näkyvyys nettiin & tekoälyyn */}
          <div className="glass rounded-3xl p-8 space-y-6 border border-[var(--border)] hover:border-[var(--accent)]/40 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[var(--success)]/10 border border-[var(--success)]/20 flex items-center justify-center text-[var(--success)]">
                <Sparkles className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs text-[var(--success)] font-mono font-bold uppercase tracking-wider">3. Tekoäly &amp; AEO</span>
                <h3 className="text-xl font-bold text-[var(--text)] font-display">Rakenna pysyvää näkyvyyttä nettiin</h3>
              </div>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                Tekoälyhakukoneet (ChatGPT, Gemini, Perplexity ja Google) suosittelevat sinua nimelläsi erikoisalasi asiantuntijana, kun tietosi on jäsennelty omaan verkkokotiisi.
              </p>
            </div>
            <ul className="space-y-2.5 text-xs text-[var(--text)] pt-4 border-t border-[var(--border)]">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[var(--success)] shrink-0 mt-0.5" />
                <span>Löydettävyys tekoälyhaustä ja Googlen kärkisijoilta</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[var(--success)] shrink-0 mt-0.5" />
                <span>Kumuloituva digitaalinen pääoma ilman jatkuvia mainoskuluja</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Live Reference Cases Showcase */}
        <div className="space-y-6 pt-4">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase text-[var(--accent)]">
              <Sparkles className="w-4 h-4" />
              <span>Aitoja Esimerkkejä Omista Digitaalisista Kodeista</span>
            </div>
            <h3 className="text-2xl font-bold font-display text-[var(--text)]">
              Miltä asiantuntijan oma verkkokoti näyttää käytännössä?
            </h3>
            <p className="text-xs sm:text-sm text-[var(--muted)]">
              Tutustu toteuttamiimme asiantuntijaprofiileihin, jotka rakentavat auktoriteettia ja ohjaavat potilaat suoraan ammattilaisen toimipisteisiin:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            
            {/* Reference 1: ftsakkinen.com */}
            <a
              href="https://ftsakkinen.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl p-6 border border-[var(--border)] hover:border-[var(--accent)] transition-all group block space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="font-display font-bold text-lg text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                  ftsakkinen.com
                </span>
                <ExternalLink className="w-4 h-4 text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors" />
              </div>
              <p className="text-xs text-[var(--muted)] leading-relaxed">
                OMT-Fysioterapeutti Janne Säkkisen oma asiantuntijasivusto. Sivusto rakentaa vahvaa tekoälynäkyvyyttä (AEO/GEO) ja ohjaa potilaat suoraan vastaanottopaikkoihin (Terveystalo ja Norre Työterveys).
              </p>
              <div className="pt-2 border-t border-[var(--border)] flex flex-wrap gap-2 text-[11px] font-mono text-[var(--accent)] font-semibold">
                <span>1,1M+ orgaanista näyttöä</span>
                <span>•</span>
                <span>5 380+ tilaajaa</span>
                <span>•</span>
                <span>0 € mainosbudjetti</span>
              </div>
            </a>

            {/* Reference 2: ptsakkinen.com */}
            <a
              href="https://ptsakkinen.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl p-6 border border-[var(--border)] hover:border-[var(--accent)] transition-all group block space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="font-display font-bold text-lg text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                  ptsakkinen.com
                </span>
                <ExternalLink className="w-4 h-4 text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors" />
              </div>
              <p className="text-xs text-[var(--muted)] leading-relaxed">
                Kansainvälinen fysioterapian ja valmennuksen oma verkkokoti. Rakentaa omaa globaalia asiantuntijuutta ja ohjaa asiakkaat oikeisiin valmennus- ja konsultaatiokanaviin.
              </p>
              <div className="pt-2 border-t border-[var(--border)] flex flex-wrap gap-2 text-[11px] font-mono text-[var(--success)] font-semibold">
                <span>200+ valmennus- &amp; potilasasiakasta</span>
                <span>•</span>
                <span>100 % orgaaninen GEO-vuo</span>
              </div>
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}
