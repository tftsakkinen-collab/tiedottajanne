"use client";

import { GraduationCap, ArrowRight, CheckCircle2, Video, CreditCard } from "lucide-react";

export default function SomeKoulutusUpsell() {
  return (
    <section id="somekoulutus-ja-sparraus" className="py-12 md:py-20 bg-[var(--bg)] border-b border-[var(--border)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="pill tracking-wider uppercase">
            <GraduationCap className="w-4 h-4 text-[var(--accent)]" />
            <span>Lisäpalvelu — Henkilökohtainen Somekoutsaus</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--text)] font-display leading-tight">
            Nosta näkyvyytesi seuraavalle tasolle: <span className="text-gradient-cyan">Somekoutsaus &amp; Valmennus</span>
          </h2>
          <p className="text-[var(--muted)] text-sm sm:text-base leading-relaxed">
            Kädestä pitäen -valmennusta kamerakammon selättämiseen, lyhytvideoihin (Shorts, Reels, TikTok) ja ammattibrändin rakentamiseen sosiaalisessa mediassa.
          </p>
        </div>

        {/* Upsell Card */}
        <div className="max-w-4xl mx-auto glass rounded-3xl p-8 sm:p-12 border border-[var(--border)] relative">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Offer details */}
            <div className="md:col-span-7 space-y-6">
              
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-mono font-bold">
                  <Video className="w-3.5 h-3.5" />
                  <span>TUOTE 3: 1-ON-1 ETÄVALMENNUS</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text)] font-display">Somekoutsaus (200 € / h)</h3>
              </div>

              <div className="space-y-1">
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-extrabold text-[var(--text)] font-display">200 €</span>
                  <span className="text-sm text-[var(--muted)] font-mono">/ tunti + alv 0% (B2B)</span>
                </div>
                <p className="text-xs text-[var(--muted)]">
                  Intensiivinen etätapaaminen Google Meet / Zoom -yhteydellä.
                </p>
              </div>

              <p className="text-sm text-[var(--muted)] leading-relaxed">
                Valmennuksessa OMT-fysioterapeutti ja sote-videotuottaja Janne Säkkinen opastaa sinua henkilökohtaisesti, miten viestit luontevasti ja eettisesti asiantuntijana ilman turhaa hifistelyä.
              </p>

              {/* Stripe Button */}
              <div className="pt-2">
                <a
                  href="https://buy.stripe.com/00wcN5gsYcM629s4jH0Ny06"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--outline btn--lg w-full text-sm sm:text-base font-bold flex items-center justify-center gap-2 cursor-pointer"
                >
                  <CreditCard className="w-4 h-4 text-[var(--accent)]" />
                  <span>TILAA SOMEKOUTSAUS (200 € / H) — STRIPE</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>

            {/* Right Column: Key takeaways */}
            <div className="md:col-span-5 space-y-4 pt-6 md:pt-0 border-t md:border-t-0 md:border-l border-[var(--border)] md:pl-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--text)] block font-display">Mitä sparrauksessa opit:</span>
              
              <ul className="space-y-3 text-xs sm:text-sm text-[var(--text)]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                  <span><strong>Kamerakammon selättäminen:</strong> Luonteva esiintyminen ja kliinisen oppisi tiivistäminen.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                  <span><strong>Shorts &amp; Reels -formaatit:</strong> Vaikuttavat 60 sekunnin asiantuntijavideot.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                  <span><strong>Valvira-yhteensopiva viestintä:</strong> Eettiset rajat, potilasyksityisyys ja auktoriteetti.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                  <span><strong>Sisältökalenteri &amp; Promptit:</strong> Valmiit käsikirjoitusmallit ja tekoälyavustajat.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
