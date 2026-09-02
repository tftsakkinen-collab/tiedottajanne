"use client";

import { CheckCircle2, ArrowRight, Flame, Zap, Lock, CreditCard, ShieldCheck } from "lucide-react";

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
            <span>The Godfather Offer — Ensimmäiselle 10 Asiakkaan Testiryhmälle</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--text)] font-display leading-tight">
            Oma AI-Kotisivusto <span className="text-gradient-cyan">avaimet käteen -pakettina</span>
          </h2>
          <p className="text-[var(--muted)] text-sm sm:text-base leading-relaxed">
            Hoidamme koko teknisen toteutuksen, GEO-tekoälyoptimoinnin ja sote-vaatimukset valmiiksi. Hinnat ilmoitetaan B2B-muodossa (alv 0 %, lisätään kassalla).
          </p>
        </div>

        {/* Guarantee Callout Banner */}
        <div className="max-w-4xl mx-auto p-6 rounded-3xl bg-[var(--success)]/10 border border-[var(--success)]/30 text-center space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase text-[var(--success)]">
            <ShieldCheck className="w-4 h-4 text-[var(--success)]" />
            <span>RISKITÖN LUPAUS: "NÄE ENNEN KUIN MAKSAT" &amp; 30 PÄIVÄN TYYTYVÄISYYSTAKUU</span>
          </div>
          <p className="text-xs sm:text-sm text-[var(--text)] leading-relaxed max-w-2xl mx-auto">
            Huoleton ylläpito (29 €/kk) ja lopullinen hyväksyntä aktivoituvat vasta, kun olet nähnyt ja hyväksynyt valmiit kotisivusi. Jos et ole tyytyväinen, sinulla on 30 päivän täysi tyytyväisyystakuu.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* Main Product Card: AI-Ystävälliset Sivut (499 €) */}
          <div className="lg:col-span-7 glass rounded-3xl p-8 sm:p-10 border-2 border-[var(--accent)]/40 shadow-2xl relative flex flex-col justify-between">
            
            <div className="space-y-6">
              
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[var(--accent)]/15 text-[var(--accent)] text-xs font-mono font-bold uppercase">
                  TUOTE 1 (PÄÄTUOTE)
                </span>
                <span className="text-xs text-[var(--warning)] font-mono font-bold uppercase flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 text-[var(--warning)]" />
                  VAIN 10 PAIKKAA
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text)] font-display">
                  AI-Ystävälliset Sivut
                </h3>
                <p className="text-xs text-[var(--muted)]">
                  Täydellinen avaimet käteen -toteutus tekoäly- ja hakukoneoptimoinnilla.
                </p>
              </div>

              {/* Price Tag */}
              <div className="space-y-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-extrabold text-[var(--text)] font-display">499 €</span>
                  <span className="text-xs text-[var(--muted)] font-mono">+ alv 0% (Kertamaksu)</span>
                </div>
                <div className="text-xs text-[var(--success)] font-mono font-semibold">
                  ✓ Normaali hinta testiryhmän jälkeen 998 €
                </div>
              </div>

              {/* Features Included */}
              <ul className="space-y-3 text-xs sm:text-sm text-[var(--text)] pt-2">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[var(--success)] shrink-0 mt-0.5" />
                  <span><strong>Sivuston Rakenne &amp; Visuaalisuus:</strong> Responsiivinen, salamannopea toteutus (Next.js/React).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[var(--success)] shrink-0 mt-0.5" />
                  <span><strong>Asiantuntijaprofiilin Luonti:</strong> Eettinen ja vakuuttava kliinisen osaamisesi tuotteistus.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[var(--success)] shrink-0 mt-0.5" />
                  <span><strong>SEO &amp; GEO-Optimoidut Tekstit:</strong> Generative Engine Optimization ChatGPT:lle, Geminille ja Googlelle.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[var(--success)] shrink-0 mt-0.5" />
                  <span><strong>Varausjärjestelmän Integrointi:</strong> Ohjaa asiakkaat nykyiseen tai uuteen ajanvaraukseesi.</span>
                </li>
              </ul>

            </div>

            {/* Direct Stripe Button Product 1 */}
            <div className="pt-8 space-y-2">
              <a
                href="https://buy.stripe.com/9B600j4Kg4fA8xQ8zX0Ny04"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary btn--lg w-full text-base font-bold shadow-xl flex items-center justify-center gap-2 group cursor-pointer"
              >
                <CreditCard className="w-5 h-5 text-[var(--accent-ink)]" />
                <span>OSTA AI-SIVUT (499 €) — STRIPE</span>
                <ArrowRight className="w-4 h-4 text-[var(--accent-ink)] group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="text-[11px] text-[var(--muted)] text-center font-mono flex items-center justify-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span>Turvallinen Stripe Checkout (B2B alv 0% lisätään kassalla)</span>
              </div>
            </div>

          </div>

          {/* Mandatory Add-on: Huoleton Ylläpito (29 € / kk) */}
          <div className="lg:col-span-5 glass rounded-3xl p-8 sm:p-10 border border-[var(--border)] relative flex flex-col justify-between">
            
            <div className="space-y-6">
              
              <div className="px-3 py-1 rounded-full bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--muted)] text-xs font-mono font-bold uppercase inline-block">
                TUOTE 2 (PAKOLLINEN LISÄ)
              </div>

              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--text)] font-display">
                  Huoleton Ylläpito
                </h3>
                <p className="text-xs text-[var(--muted)] leading-relaxed">
                  Me hoidamme kaiken teknisen huolenpidon, jotta voit keskittyä 100-prosenttisesti potilastyöhön.
                </p>
              </div>

              {/* Price Tag */}
              <div className="space-y-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[var(--text)] font-display">29 €</span>
                  <span className="text-xs text-[var(--muted)] font-mono">/ kk + alv 0%</span>
                </div>
                <div className="text-[11px] text-[var(--success)] font-mono font-semibold">
                  ✓ Aktivoituu vasta kun sivut on hyväksytty
                </div>
              </div>

              {/* Features Included */}
              <ul className="space-y-3 text-xs text-[var(--text)] pt-2">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                  <span><strong>Ultra-Nopea Hosting &amp; SSL:</strong> 256-bit tietoturvasertifikaatti ja salamannopea pilvipalvelu.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                  <span><strong>Järjestelmäpäivitykset:</strong> Automaattiset tietoturvakorjaukset ja varmuuskopiot.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                  <span><strong>Tekninen Tuki:</strong> Nopea apu ja pienet tekstimuutokset sisältyvät kuukausihintaan.</span>
                </li>
              </ul>

            </div>

            {/* Direct Stripe Button Product 2 */}
            <div className="pt-8 space-y-2">
              <a
                href="https://buy.stripe.com/00wcN5gsYcM629s4jH0Ny06"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline btn--lg w-full text-sm font-bold flex items-center justify-center gap-2 cursor-pointer"
              >
                <CreditCard className="w-4 h-4 text-[var(--accent)]" />
                <span>TILAA YLLÄPITO (29 €/KK) — STRIPE</span>
              </a>
              <div className="text-[11px] text-[var(--muted)] text-center font-mono">
                Automaattinen veloitus. Voit perua milloin tahansa.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
