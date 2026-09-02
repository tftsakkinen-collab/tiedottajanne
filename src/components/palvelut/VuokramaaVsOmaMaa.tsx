"use client";

import { AlertTriangle, CheckCircle2, XCircle, Building2, Globe2, Cpu } from "lucide-react";

export default function VuokramaaVsOmaMaa() {
  return (
    <section id="oma-maa-vs-vuokramaa" className="py-12 md:py-20 bg-[var(--bg)] border-y border-[var(--border)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="pill uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4 text-[var(--warning)]" />
            <span>Kriittinen Liiketoimintariski Sote-Yrittäjälle</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--text)] font-display leading-tight">
            Rakennatko menestystäsi <span className="text-gradient-cyan">omalle maalle vai vuokramaalle?</span>
          </h2>
          <p className="text-[var(--muted)] text-sm sm:text-base leading-relaxed">
            Suurin osa fysioterapeuteista, hierojista ja erikoislääkäreistä tekee kohtalokkaan virheen: he jättävät koko asiakasvirransa ison lääkäritalon varausjärjestelmän varaan.
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
                  <h3 className="text-lg sm:text-xl font-bold text-[var(--text)] font-display">VUOKRAMAA</h3>
                  <span className="text-xs text-[var(--danger)] font-mono font-semibold">Profiili isossa lääkäritalossa</span>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-[var(--danger)]/10 text-[var(--danger)] text-xs font-mono font-bold">
                KORKEA RISKI
              </span>
            </div>

            <p className="text-sm text-[var(--muted)] leading-relaxed">
              Olet vain yksi nimi sadan muun asiantuntijan joukossa ison toimijan varauskalenterissa. Maksat korkeita komissioita ja vuokria, mutta et omista mitään.
            </p>

            <ul className="space-y-4 text-xs sm:text-sm text-[var(--text)]">
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-[var(--danger)] shrink-0 mt-0.5" />
                <span><strong>Asiakasloukku:</strong> Jos vaihdat klinikkaa tai sopimusehdot huononevat, et voi ottaa potilashistoriaa ja asiakaskantaasi mukaasi.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-[var(--danger)] shrink-0 mt-0.5" />
                <span><strong>Algoritmin armoilla:</strong> Ison talon hakujärjestelmä suosittelee potilaille sitä asiantuntijaa, josta talo saa suurimman katteen.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-[var(--danger)] shrink-0 mt-0.5" />
                <span><strong>Näkymätön AI-haussa:</strong> ChatGPT ja Google AI eivät löydä sinua erillisenä asiantuntijana, vaan ohjaavat hakijan ison talon pääsivulle.</span>
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
                  <h3 className="text-lg sm:text-xl font-bold text-[var(--text)] font-display">OMA MAA</h3>
                  <span className="text-xs text-[var(--success)] font-mono font-semibold">Tekoäly-optimoitu oma verkkokoti</span>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-[var(--success)]/10 text-[var(--success)] text-xs font-mono font-bold">
                TÄYSI HALLINTA
              </span>
            </div>

            <p className="text-sm text-[var(--muted)] leading-relaxed">
              Oma digitaalinen kiinteistösi, joka indeksoituu tekoälyhakukoneisiin ja ohjaa uudet potilaat suoraan sinun varausjärjestelmääsi tai ajanvaraukseesi.
            </p>

            <ul className="space-y-4 text-xs sm:text-sm text-[var(--text)]">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--success)] shrink-0 mt-0.5" />
                <span><strong>Omat potilassuhteet:</strong> Luottamus ja brändi rakentuvat sinulle yrittäjänä. Asiakkaat seuraavat sinua missä tahansa vastaanotat.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--success)] shrink-0 mt-0.5" />
                <span><strong>AI-Hakukonesuosittelut (AEO):</strong> ChatGPT, Gemini ja Perplexity suosittelevat sinua nimelläsi kun potilas hakee vaivaansa apua.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--success)] shrink-0 mt-0.5" />
                <span><strong>100 % Riippumattomuus:</strong> Päätät itse hinnoistasi, erikoisaloistasi ja ajanvarauslinkeistäsi ilman välikäsiä.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Highlight Callout Box */}
        <div className="glass rounded-3xl p-6 sm:p-8 border border-[var(--accent)]/30 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase text-[var(--accent)]">
            <Cpu className="w-4 h-4 text-[var(--accent)]" />
            <span>Miksi tämä on kriittistä juuri nyt vuonna 2026?</span>
          </div>
          <p className="text-sm sm:text-base text-[var(--text)] leading-relaxed">
            Yli 40 % terveysalueen hakijoista ei enää selaa perinteisiä hakutuloksia, vaan kysyy suoraan ChatGPT:ltä tai Geminiltä: <em>"Kuka on paras OMT-fysioterapeutti / asiantuntija alueellani?"</em> Jos sinulla ei ole omaa tekoälyoptimoitua verkkokotia, et ole olemassa heidän vastauksissaan.
          </p>
        </div>

      </div>
    </section>
  );
}
