"use client";

import { Sparkles, ArrowRight, ShieldCheck, Flame, Lock, CheckCircle2, CreditCard } from "lucide-react";

export default function PalvelutHero() {
  return (
    <section className="relative py-12 md:py-20 bg-[var(--bg)] text-[var(--text)] overflow-hidden selection:bg-[var(--accent)]/20">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[850px] h-[500px] bg-[radial-gradient(ellipse_at_center,var(--accent)_0%,transparent_70%)] opacity-15 rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* FOMO Founder Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--warning)]/40 bg-[var(--warning)]/10 text-[var(--warning)] text-xs sm:text-sm font-semibold tracking-wide mb-8 shadow-sm">
          <Flame className="w-4 h-4 text-[var(--warning)] animate-pulse" />
          <span>TESTIRYHMÄTARJOUS: Vain 10 ensimmäiselle sote-ammatinharjoittajalle (499 € + alv 0%)</span>
        </div>

        {/* Hero Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight leading-[1.08] max-w-4xl text-[var(--text)]">
          Näytkö tekoälylle vai oletko vain <span className="text-gradient-cyan">nimi ison talon varauslistassa?</span>
        </h1>

        {/* Hero Lede / Value Proposition */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-[var(--muted)] max-w-3xl leading-relaxed font-sans">
          <strong>Oma maa vs. Vuokramaa:</strong> Älä jätä asiakasvirtaasi ja digitaalista identiteettiäsi ison lääkärikeskuksen varausjärjestelmän armoille. Tiedottajanne Oy rakentaa sinulle täysin oman, tekoälylle (ChatGPT, Gemini, Google AI) optimoidun digitaalisen kiinteistön, joka tuo potilaat suoraan sinulle.
        </p>

        {/* Dual Call to Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          
          {/* Primary CTA: Direct Stripe Checkout */}
          <a
            href="https://buy.stripe.com/9B600j4Kg4fA8xQ8zX0Ny04"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary btn--lg w-full sm:w-auto text-base sm:text-lg font-bold shadow-xl flex items-center justify-center gap-2.5 cursor-pointer group"
          >
            <CreditCard className="w-5 h-5 text-[var(--accent-ink)]" />
            <span>Tilaa AI-optimoidut sivut (499 €)</span>
            <ArrowRight className="w-5 h-5 text-[var(--accent-ink)] group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Secondary CTA: What's included */}
          <a
            href="#godfather-offer"
            className="btn btn--outline btn--lg w-full sm:w-auto text-sm sm:text-base font-semibold flex items-center justify-center gap-2"
          >
            <span>Katso mitä pakettiin sisältyy</span>
          </a>

        </div>

        {/* Guarantee Badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-[var(--muted)] font-mono">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--surface-elevated)] border border-[var(--border)]">
            <ShieldCheck className="w-4 h-4 text-[var(--success)]" />
            <span><strong>"Näe ennen kuin maksat"</strong> -lupaus</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--surface-elevated)] border border-[var(--border)]">
            <CheckCircle2 className="w-4 h-4 text-[var(--accent)]" />
            <span>30 päivän tyytyväisyystakuu</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--surface-elevated)] border border-[var(--border)]">
            <Lock className="w-4 h-4 text-[var(--success)]" />
            <span>100 % Omat asiakassuhteet</span>
          </div>
        </div>

      </div>
    </section>
  );
}
