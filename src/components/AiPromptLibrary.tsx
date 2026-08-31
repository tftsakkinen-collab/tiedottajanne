"use client";

import { useState } from "react";
import { SOTE_PROMPTS } from "@/data/sote-prompts";
import { Sparkles, Copy, Check } from "lucide-react";

export default function AiPromptLibrary() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section className="py-12 md:py-16 border-b border-[var(--border)] relative overflow-hidden">
      {/* Ambient Light */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[450px] bg-[var(--accent)]/10 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[var(--accent)]" />
            <span>Valmiit promptirungot ChatGPT &amp; Perplexity -malleille</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--text)] leading-tight font-display">
            SOTE-videon <span className="text-gradient-cyan">AI-promptikirjasto</span>
          </h2>
          <p className="text-[var(--muted)] text-sm sm:text-base leading-relaxed">
            Kopioi testatut tekoäly-promptit suoraan ChatGPT:hen tai Claudeen. Valvira-yhteensopivat rungot lääkäreille, fysioterapeuteille ja terveysteknologian asiantuntijoille.
          </p>
        </div>

        {/* Prompts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {SOTE_PROMPTS.map((p) => (
            <div
              key={p.id}
              className="liquid-glass rounded-3xl p-6 sm:p-8 space-y-6 flex flex-col justify-between border border-white/10 hover:border-[#00d2ff]/40 shadow-lg transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-4">
                  <span className="text-xs font-semibold text-[#00d2ff] uppercase tracking-wider">
                    {p.category}
                  </span>
                  <span className="text-[10px] px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/15 text-slate-300 font-semibold">
                    {p.roleTarget}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight font-display">{p.title}</h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">{p.description}</p>

                <div className="p-4 rounded-2xl bg-black/40 border border-white/10 text-xs text-slate-200 space-y-2 relative overflow-hidden">
                  <div className="text-[10px] text-[#00d2ff] uppercase tracking-wider font-semibold">Prompt-runko:</div>
                  <p className="leading-relaxed whitespace-pre-line select-all font-sans">{p.promptText}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 mt-2">
                <button
                  onClick={() => handleCopy(p.id, p.promptText)}
                  className="w-full py-3.5 px-6 rounded-2xl bg-white text-black font-semibold text-xs sm:text-sm hover:bg-[#00d2ff] hover:text-black transition-all flex items-center justify-center gap-2 min-h-[48px] cursor-pointer shadow-sm"
                >
                  {copiedId === p.id ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-black font-bold">Kopioitu leikepöydälle!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-black" />
                      <span>Kopioi prompti</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
