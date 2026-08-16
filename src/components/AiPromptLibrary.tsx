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
    <section className="py-16 bg-[#000a18] border-b border-[#0C66B4]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00AEEF]/20 border border-[#00AEEF]/40 text-[#00AEEF] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#00AEEF]" />
            <span>VALMIIT PROMPTIRUNGOT CHATGPT &amp; PERPLEXITY -MALLEILLE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-white tracking-wide">
            SOTE-VIDEON <span className="text-[#00AEEF]">AI-PROMPTIKIRJASTO</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Kopioi valmiit eettiset promptipohjat suoraan ChatGPT:hen tai Perplexityyn. Suunniteltu erityisesti lääkäreille, fysioterapeuteille ja terveysteknologian asiantuntijoille.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#00AEEF] text-black shadow-glow font-bold"
                  : "bg-[#000d21] border border-[#0C66B4]/50 text-gray-300 hover:border-[#00AEEF] hover:text-white"
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
              className="p-6 sm:p-8 rounded-3xl bg-[#000d21] border border-[#0C66B4]/50 shadow-panel flex flex-col justify-between space-y-6 hover:border-[#00AEEF]/60 transition-all"
            >
              <div className="space-y-4">
                
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#0C66B4]/30 border border-[#00AEEF]/40 text-[#00AEEF] text-xs font-mono font-bold">
                    {p.category}
                  </span>
                  <span className="text-xs font-mono text-gray-400">
                    Kohderyhmä: {p.roleTarget}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white tracking-wide">
                  {p.title}
                </h3>

                <p className="text-xs text-gray-300 leading-relaxed">
                  {p.description}
                </p>

                {/* Prompt Code Block */}
                <div className="relative rounded-2xl bg-[#000a18] border border-[#0C66B4]/40 p-4 font-mono text-xs text-gray-300 leading-relaxed max-h-64 overflow-y-auto">
                  <pre className="whitespace-pre-wrap">{p.promptText}</pre>
                </div>

              </div>

              {/* Copy Button */}
              <div>
                <button
                  onClick={() => handleCopy(p.id, p.promptText)}
                  className={`w-full py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    copiedId === p.id
                      ? "bg-green-500 text-black shadow-glow"
                      : "bg-[#00AEEF] text-black hover:bg-[#33C2F5] shadow-glow"
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
