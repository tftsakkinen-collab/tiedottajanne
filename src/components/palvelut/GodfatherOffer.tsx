"use client";

import { CheckCircle2, ArrowRight, Flame, Zap, Lock, CreditCard } from "lucide-react";

export default function GodfatherOffer() {
  return (
    <section id="godfather-offer" className="py-12 md:py-20 bg-[var(--bg)] border-b border-[var(--border)] relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[var(--accent)]/15 blur-[160px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--warning)]/40 bg-[var(--warning)]/10 text-[var(--warning)] text-xs font-semibold uppercase tracking-wider">
            <Flame className="w-4 h-4 text-[var(--warning)] animate-pulse" />
            <span>The Godfather Offer — Tarjous josta on typerää kieltäytyä</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--text)] font-display leading-tight">
            Oma AI-Kotisivusto <span className="text-gradient-cyan">avaimet käteen -pakettina</span>
          </h2>
          <p className="text-[var(--muted)] text-sm sm:text-base leading-relaxed">
            Hoidamme koko teknisen toteutuksen, AEO-tekoälyoptimoinnin ja sote-vaatimukset valmiiksi. Sinulle jää vain oman brändisi ja asiakasvirran omistaminen.
          </p>
        </div>

        {/* Pricing Card Showcase */}
        <div className="max-w-4xl mx-auto glass rounded-3xl p-8 sm:p-12 border-2 border-[var(--accent)]/40 shadow-2xl relative">
          
          {/* Badge */}
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-[var(--accent)] text-[var(--accent-ink)] font-bold text-xs sm:text-sm shadow-lg tracking-wider uppercase flex items-center gap-2">
            <Zap className="w-4 h-4 text-[var(--accent-ink)]" />
            <span>PERUSTAJAPAKETTI — VAIN 10 ENSIMMÄISELLE</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-4">
            
            {/* Left Column: Pricing Details */}
            <div className="md:col-span-7 space-y-6">
              
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase text-[var(--accent)]">Tuote 1 &amp; Tuote 2: Täysi Kotisivukokonaisuus</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text)] font-display">AI-Kotisivut &amp; Ylläpito</h3>
              </div>

              {/* Price Tag */}
              <div className="space-y-1">
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl sm:text-5xl font-extrabold text-[var(--text)] font-display">499 €</span>
                  <span className="text-lg text-[var(--muted)] line-through font-mono">998 €</span>
                  <span className="px-2.5 py-1 rounded-md bg-[var(--success)]/10 text-[var(--success)] text-xs font-bold font-mono">
                    SÄÄSTÄ 499 €
                  </span>
                </div>
                <div className="text-xs text-[var(--muted)] font-mono">
                  + Huoleton ylläpito <strong>29 € / kk</strong> (Automaattinen hosting, tietoturva &amp; päivitykset)
                </div>
              </div>

              {/* Urgency Callout */}
              <div className="p-4 rounded-2xl bg-[var(--warning)]/10 border border-[var(--warning)]/30 text-[var(--warning)] text-xs space-y-1">
                <div className="font-bold flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-[var(--warning)]" />
                  <span>KIIREELLISYYS (FOMO): 10 ensimmäisen paikan täytyttyä hinta on 998 €!</span>
                </div>
                <p className="leading-snug">
                  Tämä hinta koskee vain ensimmäisiä perustaja-asiakkaitamme. Kun 10 paikkaa on täynnä, hinta tuplaantuu välittömästi.
                </p>
              </div>

              {/* Stripe Checkout Button Placeholder */}
              <div className="space-y-3 pt-2">
                <a
                  href="https://buy.stripe.com/499_founder_offer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary btn--lg w-full text-base sm:text-lg font-bold shadow-xl flex items-center justify-center gap-3 group"
                >
                  <CreditCard className="w-5 h-5 text-[var(--accent-ink)]" />
                  <span>OSTA NYT — LUKITSE 499 € HINTA (STRIPE)</span>
                  <ArrowRight className="w-5 h-5 text-[var(--accent-ink)] group-hover:translate-x-1 transition-transform" />
                </a>
                <div className="text-[11px] text-[var(--muted)] text-center font-mono flex items-center justify-center gap-2">
                  <Lock className="w-3.5 h-3.5 text-[var(--accent)]" />
                  <span>Turvallinen Stripe Checkout 256-bit SSL-salauksella</span>
                </div>
              </div>

            </div>

            {/* Right Column: Included Features */}
            <div className="md:col-span-5 space-y-4 pt-6 md:pt-0 border-t md:border-t-0 md:border-l border-[var(--border)] md:pl-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--text)] block font-display">Mitä pakettiin sisältyy:</span>
              
              <ul className="space-y-3 text-xs sm:text-sm text-[var(--text)]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[var(--success)] shrink-0 mt-0.5" />
                  <span><strong>AI-Optimoitu Verkkokoti:</strong> Suorituskykyinen Next.js -rakenne, joka latautuu sekunnin murto-osassa (CLS &lt; 0.05).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[var(--success)] shrink-0 mt-0.5" />
                  <span><strong>ChatGPT &amp; Gemini AEO:</strong> Indeksointimetat, jotta tekoälyt suosittelevat sinua alueellasi.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[var(--success)] shrink-0 mt-0.5" />
                  <span><strong>SOTE-Sääntely &amp; Etiikka:</strong> Valvira- ja Kela-yhteensopivat pohjat ja lakisääteiset vastuuvapauslausekkeet.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[var(--success)] shrink-0 mt-0.5" />
                  <span><strong>Ajanvarauksen Integrointi:</strong> Linkitys nykyiseen varausjärjestelmääsi tai omaan kalenteriisi.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[var(--success)] shrink-0 mt-0.5" />
                  <span><strong>Huoleton 29 €/kk ylläpito:</strong> SSL-varmenne, pilvipalvelu, tietoturvapäivitykset ja varmuuskopiot.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
