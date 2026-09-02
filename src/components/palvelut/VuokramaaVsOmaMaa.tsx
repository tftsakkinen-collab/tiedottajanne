"use client";

import { CheckCircle2, Building2, Globe2, ExternalLink, Sparkles, ShieldCheck } from "lucide-react";

export default function VuokramaaVsOmaMaa() {
  return (
    <section id="oma-maa-vs-vuokramaa" className="py-12 md:py-20 bg-[var(--bg)] border-y border-[var(--border)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="pill uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[var(--accent)]" />
            <span>Oma Asiantuntijabrändi &amp; Digitaalinen Koti</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--text)] font-display leading-tight">
            Rakenna menestyksesi kestävälle pohjalle – <span className="text-gradient-cyan">omalle maallesi.</span>
          </h2>
          <p className="text-[var(--muted)] text-sm sm:text-base leading-relaxed">
            Fysioterapeutit, osteopaatit, terapeutit ja lääkärit saavuttavat parhaat tulokset, kun vastaanoton ja varausjärjestelmien rinnalla rakennetaan omaa, pitkäjänteistä asiantuntijabrändiä ja digitaalista kotia.
          </p>
        </div>

        {/* Side-by-Side Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: External booking / channels */}
          <div className="glass rounded-3xl p-8 space-y-6 border border-[var(--border)] bg-[var(--surface)]/40">
            <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)]">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[var(--text)] font-display">VARAUSJÄRJESTELMÄT</h3>
                  <span className="text-xs text-[var(--muted)] font-mono font-semibold">Toimiva kanava ajanvarauksille</span>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-[var(--surface-elevated)] text-[var(--muted)] text-xs font-mono font-bold border border-[var(--border)]">
                PÄIVITTÄINEN TYÖ
              </span>
            </div>

            <p className="text-sm text-[var(--muted)] leading-relaxed">
              Varausjärjestelmät ja lääkärikeskukset ovat erinomainen työkalu päivittäisen kalenterin hallintaan ja potilaiden sujuvaan vastaanottamiseen.
            </p>

            <ul className="space-y-4 text-xs sm:text-sm text-[var(--text)]">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--accent)] shrink-0 mt-0.5" />
                <span><strong>Suora kalenterinhallinta:</strong> Hoitaa potilasajanvaraukset ja vastaanottotilat sujuvasti.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--accent)] shrink-0 mt-0.5" />
                <span><strong>Täydentävä rooli:</strong> Toimii parhaiten silloin, kun rinnalla on oma tunnettu asiantuntijaprofiili.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--accent)] shrink-0 mt-0.5" />
                <span><strong>Keskittyminen vastaanottotyöhön:</strong> Tarjoaa puitteet kliinisen vastaanottotyön tekemiselle.</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Owned Land Card (Oma maa) */}
          <div className="glass rounded-3xl p-8 space-y-6 border border-[var(--success)]/40 bg-[var(--success)]/[0.03]">
            <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--success)]/10 border border-[var(--success)]/30 flex items-center justify-center text-[var(--success)]">
                  <Globe2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[var(--text)] font-display">OMA DIGITAALINEN KOTI</h3>
                  <span className="text-xs text-[var(--success)] font-mono font-semibold">Tekoälyoptimoitu (GEO) oma profiili</span>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-[var(--success)]/10 text-[var(--success)] text-xs font-mono font-bold">
                100 % OMISTUS &amp; KASVU
              </span>
            </div>

            <p className="text-sm text-[var(--muted)] leading-relaxed">
              Oma digitaalinen kiinteistösi kokoaa yhteen osaamisesi, suosituksesi ja potilasohjeesi — ja kerryttää arvoa suoraan sinulle.
            </p>

            <ul className="space-y-4 text-xs sm:text-sm text-[var(--text)]">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--success)] shrink-0 mt-0.5" />
                <span><strong>Omat asiakassuhteet:</strong> Luottamus ja potilassuhteet rakentuvat suoraan sinulle. Asiakkaat seuraavat sinua urasi kaikissa vaiheissa.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--success)] shrink-0 mt-0.5" />
                <span><strong>Tekoälysuositukset (AEO/GEO):</strong> ChatGPT, Gemini ja Google suosittelevat sinua omalla nimelläsi, kun potilas hakee apua vaivaansa.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--success)] shrink-0 mt-0.5" />
                <span><strong>Täysi riippumattomuus ja arvo:</strong> Voit kytkeä minkä tahansa varausjärjestelmän ja rakentaa pysyvää digitaalista pääomaa itsellesi.</span>
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
              Miltä tekoäly- ja ihmiystävällinen oma kiinteistö näyttää?
            </h3>
            <p className="text-xs sm:text-sm text-[var(--muted)]">
              Tutustu toteuttamiimme asiantuntijaprofiileihin, jotka rakentavat auktoriteettia sekä hakukoneille että potilaille:
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
                OMT-Fysioterapeutti Janne Säkkisen kliininen asiantuntijaportaali. Optimoitu tekoälyindeksoinnille (AEO/GEO) ja suoralle potilasohjaukselle.
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
                Fysioterapian ja valmennuksen verkkokoti. Selkeä asiantuntijamallinnus, joka tekee palveluista ja ajanvarauksesta riippumattoman.
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
