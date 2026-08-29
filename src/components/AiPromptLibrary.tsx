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
    <section className="py-12 md:py-16 bg-[var(--bg)] border-b border-[var(--border)] relative overflow-hidden">
      {/* Ambient Light */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[450px] bg-[var(--accent)]/10 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[var(--accent)]" />
            <span>VALMIIT PROMPTIRUNGOT CHATGPT &amp; PERPLEXITY -MALLEILLE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--text)] leading-tight font-display">
            SOTE-VIDEON <span className="text-gradient-cyan">AI-PROMPTIKIRJASTO</span>
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
              className="glass rounded-3xl p-8 space-y-6 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2 border-b border-[var(--border)] pb-4">
                  <span className="text-xs font-mono font-semibold text-[var(--accent)] uppercase tracking-wider">
                    {p.category}
                  </span>
                  <span className="text-[10px] px-2.5 py-1 rounded-full bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--muted)] font-semibold">
                    {p.roleTarget}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[var(--text)] tracking-tight font-display">{p.title}</h3>
                <p className="text-xs text-[var(--muted)] leading-relaxed">{p.description}</p>

                <div className="p-4 rounded-2xl bg-[var(--surface)] border border-[var(--border)] font-mono text-xs text-[var(--text)] space-y-2 relative overflow-hidden">
                  <div className="text-[10px] text-[var(--accent)] uppercase tracking-wider font-semibold">PROMPT RUNKO:</div>
                  <p className="leading-relaxed whitespace-pre-line select-all">{p.promptText}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--border)]">
                <button
                  onClick={() => handleCopy(p.id, p.promptText)}
                  className="w-full py-3 px-4 rounded-2xl bg-[var(--text)] text-[var(--bg)] font-semibold text-xs sm:text-sm hover:opacity-90 transition-all flex items-center justify-center gap-2 min-h-[44px]"
                >
                  {copiedId === p.id ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>Kopioitu leikepöydälle!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[var(--bg)]" />
                      <span>Kopioi Prompti</span>
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
