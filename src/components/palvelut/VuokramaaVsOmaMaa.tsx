"use client";

import { AlertTriangle, CheckCircle2, XCircle, Building2, Globe2, Cpu, ExternalLink, Sparkles } from "lucide-react";

export default function VuokramaaVsOmaMaa() {
  return (
    <section id="oma-maa-vs-vuokramaa" className="py-12 md:py-20 bg-[var(--bg)] border-y border-[var(--border)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="pill uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4 text-[var(--warning)]" />
            <span>Liiketoimintariski Sote-Ammatinharjoittajalle</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--text)] font-display leading-tight">
            Rakennatko menestystäsi <span className="text-gradient-cyan">omalle maalle vai vuokramaalle?</span>
          </h2>
          <p className="text-[var(--muted)] text-sm sm:text-base leading-relaxed">
            Fysioterapeutit, osteopaatit, terapeutit ja erikoislääkärit tekevät usein saman virheen: he jättävät koko asiakasvirransa ison lääkäritalon varausjärjestelmän armoille.
          </p>
        </div>

        {/* Side-by-Side Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Rented Land Card (Vuokramaa) */}
          <div className="glass rounded-3xl p-8 space-y-6 border border-[var(--danger)]/30 bg-[var(--danger)]/[0.02]">
            <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--danger)]/10 border border-[var(--danger)]/20 flex items-center justify-center text-[var(--danger)]">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[var(--text)] font-display">VUOKRAMAA (Ongelma)</h3>
                  <span className="text-xs text-[var(--danger)] font-mono font-semibold">Ohut profiili ison talon sivuilla</span>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-[var(--danger)]/10 text-[var(--danger)] text-xs font-mono font-bold">
                KORKEA RISKI
              </span>
            </div>

            <p className="text-sm text-[var(--muted)] leading-relaxed">
              Olet vain yksi rivi monisivuisessa varauskalenterissa. Et omista digitaalista identiteettiäsi eikä asiantuntemuksesi kerrytä omaa pääomaasi.
            </p>

            <ul className="space-y-4 text-xs sm:text-sm text-[var(--text)]">
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-[var(--danger)] shrink-0 mt-0.5" />
                <span><strong>Katkeava asiakasvirta:</strong> Jos vaihdat klinikkaa tai toimipistettä, potilaat jäävät ison lääkäritalon järjestelmään.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-[var(--danger)] shrink-0 mt-0.5" />
                <span><strong>Tekoälyhaun (GEO) näkymättömyys:</strong> ChatGPT ja Gemini eivät osaa suositella sinua erillisenä asiantuntijana pelkän varauslinkin perusteella.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-[var(--danger)] shrink-0 mt-0.5" />
                <span><strong>0 % Oman brändin omistusta:</strong> Maksat komissioita ja vuokria, mutta rakennat kaiken arvon toisen yrityksen taseeseen.</span>
              </li>
            </ul>
          </div>

          {/* Owned Land Card (Oma maa) */}
          <div className="glass rounded-3xl p-8 space-y-6 border border-[var(--success)]/40 bg-[var(--success)]/[0.03]">
            <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--success)]/10 border border-[var(--success)]/30 flex items-center justify-center text-[var(--success)]">
                  <Globe2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[var(--text)] font-display">OMA MAA (Ratkaisu)</h3>
                  <span className="text-xs text-[var(--success)] font-mono font-semibold">Tekoäly-optimoitu (GEO) oma profiili</span>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-[var(--success)]/10 text-[var(--success)] text-xs font-mono font-bold">
                100 % OMISTUS
              </span>
            </div>

            <p className="text-sm text-[var(--muted)] leading-relaxed">
              Oma digitaalinen kiinteistösi, jonka omistat 100-prosenttisesti itse. Se ohjaa uudet potilaat suoraan sinulle riippumatta siitä, missä kulloinkin vastaanotat.
            </p>

            <ul className="space-y-4 text-xs sm:text-sm text-[var(--text)]">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--success)] shrink-0 mt-0.5" />
                <span><strong>Omat asiakassuhteet:</strong> Luottamus ja potilassuhteet rakentuvat sinulle yrittäjänä. Asiakkaat seuraavat sinua aina.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--success)] shrink-0 mt-0.5" />
                <span><strong>Generative Engine Optimization (GEO):</strong> ChatGPT, Gemini ja Google suosittelevat sinua nimelläsi kun potilas hakee vaivaansa apua.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--success)] shrink-0 mt-0.5" />
                <span><strong>Täysi riippumattomuus:</strong> Voit kytkeä minkä tahansa varausjärjestelmän tai suoran ajanvarauksen omiin sivuihisi.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Live Reference Cases Showcase */}
        <div className="space-y-6 pt-4">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase text-[var(--accent)]">
              <Sparkles className="w-4 h-4" />
              <span>Aitoja Esimerkkejä "Oma Maa" -Toteutuksista</span>
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
              className="glass rounded-2xl p-6 border border-[var(--border)] hover:border-[var(--accent)] transition-all group block"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-display font-bold text-lg text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                  ftsakkinen.com
                </span>
                <ExternalLink className="w-4 h-4 text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors" />
              </div>
              <p className="text-xs text-[var(--muted)] leading-relaxed">
                OMT-Fysioterapeutti Janne Säkkisen kliininen asiantuntijaportaali. Optimoitu tekoälyindeksoinnille (AEO/GEO) ja suoralle potilasohjaukselle.
              </p>
            </a>

            {/* Reference 2: ptsakkinen.com */}
            <a
              href="https://ptsakkinen.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl p-6 border border-[var(--border)] hover:border-[var(--accent)] transition-all group block"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-display font-bold text-lg text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                  ptsakkinen.com
                </span>
                <ExternalLink className="w-4 h-4 text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors" />
              </div>
              <p className="text-xs text-[var(--muted)] leading-relaxed">
                Fysioterapian ja valmennuksen verkkokoti. Selkeä asiantuntijamallinnus, joka tekee palveluista ja ajanvarauksesta riippumattoman.
              </p>
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}
