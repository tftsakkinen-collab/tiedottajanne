'use client';

import Link from "next/link";
import { Sparkles, ArrowRight, ShieldCheck, Cpu, Stethoscope, ChevronRight } from "lucide-react";

export default function TechVenturesLanding() {
  return (
    <div className="relative min-h-[90vh] bg-[#0c0c0c] text-white overflow-hidden selection:bg-[#00d2ff]/20">
      {/* Background Glow Gradients */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-[25%] left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-[#00d2ff]/15 via-[#014489]/10 to-transparent blur-[140px] rounded-full" />
        <div className="absolute top-[35%] right-[-10%] w-[600px] h-[450px] bg-gradient-to-l from-[#059669]/10 via-[#0B2551]/10 to-transparent blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[400px] bg-gradient-to-r from-[#014489]/10 to-transparent blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-12 pb-24 md:pt-20 md:pb-32 flex flex-col items-center">
        
        {/* Badge */}
        <div 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md text-xs sm:text-sm text-white/80 mb-8 shadow-sm hover:border-[#00d2ff]/30 transition-colors"
        >
          <Sparkles className="w-4 h-4 text-[#00d2ff]" />
          <span>Tiedottajanne Oy — Digitaalinen Innovaatiostudio</span>
        </div>

        {/* Hero H1 */}
        <h1 
          className="text-4xl sm:text-6xl md:text-7xl font-display font-bold tracking-tight text-center leading-[1.05] max-w-4xl text-white"
        >
          <span>Rakennamme tulevaisuuden </span>
          <span className="block mt-1 sm:inline bg-gradient-to-r from-white via-[#A4F4FD] to-[#00d2ff] bg-clip-text text-transparent">
            digitaalisia työkaluja.
          </span>
        </h1>

        {/* Hero Lede */}
        <p 
          className="mt-8 text-base sm:text-lg md:text-xl text-white/60 text-center max-w-2xl leading-relaxed font-sans"
        >
          Tiedottajanne Oy yhdistää syvän toimialatuntemuksen, modernin tekoälyn ja huippuluokan ohjelmistokehityksen tuotteiksi, jotka ratkaisevat todellisia arjen ongelmia.
        </p>

        {/* CTA Buttons */}
        <div 
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <Link
            href="/#projektit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white text-black font-semibold text-sm sm:text-base px-8 py-3.5 transition-all hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-white/10"
          >
            <span>Tutustu projekteihin</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/yhteystiedot"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-medium text-sm sm:text-base px-8 py-3.5 transition-all hover:bg-white/10 hover:border-white/40 active:scale-[0.98]"
          >
            <span>Ota yhteyttä</span>
            <ChevronRight className="w-4 h-4 text-white/50" />
          </Link>
        </div>

        {/* 3 Stat Elements / Core Value Pillars */}
        <div 
          className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
        >
          {/* Card 1 */}
          <div className="liquid-glass rounded-3xl p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00d2ff]/20 to-[#0B2551]/30 border border-[#00d2ff]/30 flex items-center justify-center mb-6 text-[#00d2ff] group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,210,255,0.3)] transition-all">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white tracking-tight mb-3">
                AI-Native Arkkitehtuuri
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Modernit tekoälyputket ja automaatiot osana jokaista ratkaisua.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/5 text-xs text-white/40 flex items-center gap-1">
              <span>Optimoitu skaalautuvuuteen</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="liquid-glass rounded-3xl p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#059669]/20 to-[#0B2551]/30 border border-[#059669]/30 flex items-center justify-center mb-6 text-[#059669] group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(5,150,105,0.3)] transition-all">
                <Stethoscope className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white tracking-tight mb-3">
                Vahva Kliininen Tausta
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Digitaalisia työkaluja, jotka on testattu todellisessa ammattilaisten arjessa.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/5 text-xs text-white/40 flex items-center gap-1">
              <span>Ammattilaisten suunnittelema</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="liquid-glass rounded-3xl p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#3b82f6]/20 to-[#0B2551]/30 border border-[#3b82f6]/30 flex items-center justify-center mb-6 text-[#3b82f6] group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white tracking-tight mb-3">
                Tietoturva & Skaalautuvuus
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Nollatoleranssi tietoturvassa, puhtaat lokaalit ympäristöt ja luotettava pilviarkkitehtuuri.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/5 text-xs text-white/40 flex items-center gap-1">
              <span>GDPR & ISO-yhteensopiva</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
