"use client";

import { useState } from "react";
import { SOTE_PROMPTS } from "@/data/sote-prompts";
import { Sparkles, Copy, Check, Filter } from "lucide-react";

export default function AiPromptLibrary() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("Kaikki");

  const categories = ["Kaikki", "Oireanalyysi & Hookit", "Valvira & Etiikka", "YouTube SEO & Metatiedot", "TikTok/Shorts Skriptaus"];

  const filteredPrompts = selectedCategory === "Kaikki"
    ? SOTE_PROMPTS
    : SOTE_PROMPTS.filter((p) => p.category === selectedCategory);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section className="py-20 md:py-28 bg-[#0c0c0c] border-b border-white/10 relative overflow-hidden">
      {/* Subtle Ambient Light */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[450px] bg-gradient-to-l from-[#00d2ff]/10 to-transparent blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00d2ff]/30 bg-[#00d2ff]/10 text-[#00d2ff] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#00d2ff]" />
            <span>VALMIIT PROMPTIRUNGOT CHATGPT &amp; PERPLEXITY -MALLEILLE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            SOTE-VIDEON <span className="bg-gradient-to-r from-white via-[#A4F4FD] to-[#00d2ff] bg-clip-text text-transparent">AI-PROMPTIKIRJASTO</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base leading-relaxed">
            Kopioi valmiit eettiset promptipohjat suoraan ChatGPT:hen tai Perplexityyn. Suunniteltu erityisesti lääkäreille, fysioterapeuteille ja terveysteknologian asiantuntijoille.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-white text-black shadow-lg font-bold scale-105"
                  : "bg-white/[0.03] border border-white/10 text-white/70 hover:border-white/30 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Prompts Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPrompts.map((p) => (
            <div
              key={p.id}
              className="liquid-glass rounded-3xl p-8 sm:p-10 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/15 text-[#00d2ff] text-xs font-mono font-semibold">
                    {p.category}
                  </span>
                  <span className="text-xs font-mono text-white/50">
                    Kohderyhmä: {p.roleTarget}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight">
                  {p.title}
                </h3>

                <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                  {p.description}
                </p>

                {/* Prompt Code Block */}
                <div className="relative rounded-2xl bg-black/60 border border-white/10 p-5 font-mono text-xs text-white/80 leading-relaxed max-h-64 overflow-y-auto">
                  <pre className="whitespace-pre-wrap">{p.promptText}</pre>
                </div>

              </div>

              {/* Copy Button */}
              <div>
                <button
                  onClick={() => handleCopy(p.id, p.promptText)}
                  className={`w-full py-3.5 px-5 rounded-2xl font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    copiedId === p.id
                      ? "bg-emerald-500 text-black shadow-lg"
                      : "bg-white text-black hover:bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:scale-[1.01] active:scale-[0.99]"
                  }`}
                >
                  {copiedId === p.id ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Kopioitu leikepöydälle!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Kopioi Prompti ChatGPT:hen</span>
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
