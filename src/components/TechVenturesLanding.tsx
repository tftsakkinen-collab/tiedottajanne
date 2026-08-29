'use client';

import Link from "next/link";
import { Sparkles, ArrowRight, Cpu, Stethoscope, ChevronRight } from "lucide-react";
import { GlassPanel } from "@/design-system/primitives/GlassPanel";

export default function TechVenturesLanding() {
  return (
    <div className="relative py-8 md:py-12 bg-[var(--bg)] text-[var(--text)] overflow-hidden selection:bg-[var(--accent)]/20">
      {/* Background Glow Gradient */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-[radial-gradient(ellipse_at_center,var(--accent)_0%,transparent_70%)] opacity-10 rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-4 md:py-8 flex flex-col items-center">
        
        {/* Badge */}
        <div className="pill mb-8 shadow-sm">
          <Sparkles className="w-4 h-4 text-[var(--accent)]" />
          <span>Tiedottajanne Oy — Digitaalinen Innovaatiostudio</span>
        </div>

        {/* Hero H1 */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold tracking-tight text-center leading-[1.05] max-w-4xl text-[var(--text)]">
          <span>Rakennamme tulevaisuuden </span>
          <span className="block mt-1 sm:inline text-gradient-cyan">
            digitaalisia työkaluja.
          </span>
        </h1>

        {/* Hero Lede */}
        <p className="mt-8 text-base sm:text-lg md:text-xl text-[var(--muted)] text-center max-w-2xl leading-relaxed font-sans">
          Tiedottajanne Oy yhdistää syvän toimialatuntemuksen, modernin tekoälyn ja huippuluokan ohjelmistokehityksen tuotteiksi, jotka ratkaisevat todellisia arjen ongelmia.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Link
            href="/#projektit"
            className="btn btn--primary w-full sm:w-auto px-8 py-3.5 text-sm sm:text-base shadow-lg"
          >
            <span>Tutustu projekteihin</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/yhteystiedot"
            className="btn btn--outline w-full sm:w-auto px-8 py-3.5 text-sm sm:text-base"
          >
            <span>Ota yhteyttä</span>
            <ChevronRight className="w-4 h-4 text-[var(--muted)]" />
          </Link>
        </div>

        {/* 3 Stat Elements / Core Value Pillars */}
        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {/* Card 1 */}
          <GlassPanel className="rounded-3xl flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center mb-6 text-[var(--accent)] group-hover:scale-110 transition-transform">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--text)] tracking-tight mb-3 font-display">
                AI-Native Arkkitehtuuri
              </h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                Modernit tekoälyputket ja automaatiot osana jokaista ratkaisua.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[var(--border)] text-xs text-[var(--muted)] flex items-center gap-1 font-mono">
              <span>Optimoitu skaalautuvuuteen</span>
            </div>
          </GlassPanel>

          {/* Card 2 */}
          <GlassPanel className="rounded-3xl flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center mb-6 text-[var(--accent)] group-hover:scale-110 transition-transform">
                <Stethoscope className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--text)] tracking-tight mb-3 font-display">
                Vahva Kliininen Tausta
              </h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                Syvä ymmärrys terveydenhuollon ja SOTE-alan erityisvaatimuksista.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[var(--border)] text-xs text-[var(--muted)] flex items-center gap-1 font-mono">
              <span>Reguloitu &amp; Eettinen</span>
            </div>
          </GlassPanel>

          {/* Card 3 */}
          <GlassPanel className="rounded-3xl flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center mb-6 text-[var(--accent)] group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--text)] tracking-tight mb-3 font-display">
                Tietoturva &amp; Skaalautuvuus
              </h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                Nykyaikaiset pilviteknologiat ja tarkka tietosuojan noudattaminen.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[var(--border)] text-xs text-[var(--muted)] flex items-center gap-1 font-mono">
              <span>GDPR-yhteensopiva</span>
            </div>
          </GlassPanel>
        </div>

      </div>
    </div>
  );
}
