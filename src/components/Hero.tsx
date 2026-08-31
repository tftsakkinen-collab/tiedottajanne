"use client";

import Link from "next/link";
import { 
  Video, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Play, 
  TrendingUp, 
  ShieldCheck, 
  Award,
  GraduationCap,
  Users
} from "lucide-react";
import { SITE_CONFIG } from "@/data/config";

export default function Hero() {
  const highlights = [
    {
      title: "1,1M+ Katselukertaa",
      desc: "Suomen seuratuin fysioterapiakanava (@ft_sakkinen)",
      icon: Award,
    },
    {
      title: "AEO & AI-SEO",
      desc: "Indeksoidut skriptit ChatGPT & Perplexity -hakuihin",
      icon: Sparkles,
    },
    {
      title: "SOTE & Valvira",
      desc: "Täysin eettinen, säännösten mukainen asiantuntijaviestintä",
      icon: GraduationCap,
    },
  ];

  return (
    <section className="relative py-12 md:py-16 bg-[var(--bg)] border-b border-[var(--border)] overflow-hidden">
      
      {/* Background glow circle */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent)]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* SOTE Category Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/40 text-[var(--accent)] text-xs font-bold tracking-wider backdrop-blur-md">
              <Video className="w-4 h-4 text-[var(--accent)]" />
              <span>SOTE-alan videotuotanto &amp; AI-indeksointi</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text)] leading-[1.1] font-display">
              Tee SOTE-asiantuntijuudestasi <br className="hidden sm:inline" />
              <span className="text-gradient-cyan">
                näkyvää &amp; vaikuttavaa
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed max-w-2xl font-sans">
              Autamme terveydenhuollon asiantuntijoita, lääkäriasemia ja sote-yrityksiä tekemään eettistä, Valvira-yhteensopivaa ja tekoälyhakukoneissa (AEO) menestyvää videosisältöä.
            </p>

            {/* Value Proof Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {highlights.map((h, idx) => {
                const Icon = h.icon;
                return (
                  <div key={idx} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--surface)] border border-[var(--border)]">
                    <Icon className="w-4 h-4 text-[var(--accent)] shrink-0" />
                    <div className="text-[11px]">
                      <span className="font-bold text-[var(--text)] block">{h.title}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Group */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/yhteystiedot"
                className="px-8 py-4 rounded-xl bg-[var(--text)] text-[var(--bg)] font-bold text-base hover:opacity-90 transition-all shadow-md flex items-center justify-center gap-2 group text-center min-h-[44px]"
              >
                <span>Pyydä Koulutustarjous</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-[var(--bg)]" />
              </Link>
              <Link
                href="/#palvelut"
                className="px-8 py-4 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-[var(--text)] font-bold text-base hover:border-[var(--accent)] hover:bg-[var(--surface-elevated)] transition-all flex items-center justify-center gap-2 text-center min-h-[44px]"
              >
                <span>Tutustu Palveluihin</span>
              </Link>
            </div>
          </div>

          {/* Media Column / Creator Profile Card */}
          <div className="lg:col-span-5 relative">
            <div className="glass rounded-3xl p-6 border border-[var(--border)] space-y-6">
              <div className="relative rounded-[22px] overflow-hidden aspect-[4/5] bg-[var(--surface)] p-6 flex flex-col justify-between border border-[var(--border)]">
                
                {/* Top Badge */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[var(--accent)]/20 text-[var(--accent)] text-xs font-mono font-bold">
                    FOUNDER &amp; SPEAKER
                  </span>
                  <div className="w-8 h-8 rounded-full bg-red-600/80 text-white flex items-center justify-center shadow-lg">
                    <Play className="w-4 h-4 fill-white ml-0.5" />
                  </div>
                </div>

                {/* Bottom Overlay Info */}
                <div className="space-y-3 z-10">
                  <div className="p-4 rounded-2xl bg-[var(--surface)] border border-[var(--border)] space-y-2 backdrop-blur-md">
                    <h3 className="text-xl font-bold text-[var(--text)] tracking-tight font-display">Janne Säkkinen</h3>
                    <p className="text-xs text-[var(--accent)] font-semibold">
                      OMT-Fysioterapeutti (SOMTY) • Tietokirjailija • Luennoitsija, Oulun yliopisto
                    </p>
                    <div className="flex items-center gap-1.5 text-[11px] text-[var(--muted)] font-mono">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Valvira / Terhikki -rekisteröity asiantuntija</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Verified Metrics Strip */}
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-3.5 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
                  <span className="text-xl font-bold text-[var(--text)] font-display block">350+</span>
                  <span className="text-[11px] text-[var(--muted)]">Julkaistua videota</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
                  <span className="text-xl font-bold text-emerald-400 font-display block">100 %</span>
                  <span className="text-[11px] text-[var(--muted)]">Valvira-yhteensopiva</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Channel Reach Showcase Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 p-3 sm:p-6 md:p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] shadow-sm">
          <div className="flex items-center gap-3 p-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[var(--surface-elevated)] border border-[var(--accent)]/40 text-[var(--accent)] flex items-center justify-center shrink-0">
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <div className="text-sm sm:text-base font-bold text-[var(--text)] font-display">1 100 000+</div>
              <div className="text-[10px] sm:text-xs text-[var(--muted)]">Katselua (@ft_sakkinen)</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[var(--surface-elevated)] border border-[var(--accent)]/40 text-[var(--accent)] flex items-center justify-center shrink-0">
              <Users className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <div className="text-sm sm:text-base font-bold text-[var(--text)] font-display">200 000+</div>
              <div className="text-[10px] sm:text-xs text-[var(--muted)]">TikTok/Shorts kk-katselua</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[var(--surface-elevated)] border border-[var(--accent)]/40 text-[var(--accent)] flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <div className="text-sm sm:text-base font-bold text-[var(--text)] font-display">AEO-Optimointi</div>
              <div className="text-[10px] sm:text-xs text-[var(--muted)]">ChatGPT &amp; Perplexity SEO</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[var(--surface-elevated)] border border-[var(--accent)]/40 text-[var(--accent)] flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
            </div>
            <div>
              <div className="text-sm sm:text-base font-bold text-[var(--text)] font-display">Medical Review</div>
              <div className="text-[10px] sm:text-xs text-[var(--muted)]">Lääketieteellinen laatu</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
