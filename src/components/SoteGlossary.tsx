"use client";

import { useState } from "react";
import { BookOpen, ShieldCheck, Search, Sparkles, CheckCircle2 } from "lucide-react";

interface GlossaryItem {
  term: string;
  category: string;
  definition: string;
}

const GLOSSARY_TERMS: GlossaryItem[] = [
  {
    term: "AEO (Answer Engine Optimization)",
    category: "Hakukonenäkyvyys",
    definition: "Videoiden ja tekstien optimointi tekoälyhakukoneille (ChatGPT, Perplexity, Google Gemini), jotta yrityksesi tai vastaanottosi suositellaan suoraan hakuvastauksena.",
  },
  {
    term: "Valvira- & Terhikki-yhteensopiva viestintä",
    category: "Sääntely & Laillisuus",
    definition: "Terveys- ja SOTE-alan lainsäädännön ja etiikan mukainen markkinointi, jossa potilasturvallisuus, laillistus ja tutkittu tieto toteutuvat täysin ilman katteettomia lupauksia.",
  },
  {
    term: "Orgaaninen Tavoittavuus (Organic Reach)",
    category: "Somestrategia",
    definition: "Katselut, tykkäykset ja yhteydenotot, jotka saavutetaan ilman maksettuja lehtimainoksia tai klikkimainontaa, perustuen puhtaasti videon arvoon ja kiinnostavuuteen.",
  },
  {
    term: "Medical Review (Lääketieteellinen Tarkastus)",
    category: "Laadunvarmistus",
    definition: "Terveysaiheisen sisällön ja potilasohjeiden kliininen laadunvarmistus, jonka suorittaa Valvira-laillistettu terveydenhuollon ammattilainen (esim. OMT-fysioterapeutti Janne Säkkinen).",
  },
  {
    term: "Short-Form Video (Reels / Shorts / TikTok)",
    category: "Videotuotanto",
    definition: "Korkeintaan 60 sekunnin pystymuotoinen opetusvideo, jolla tuodaan monimutkainenkin kliininen tieto nopeasti ja ymmärrettävästi potilaan ja asiakkaan puhelimeen.",
  },
  {
    term: "Tulehdus- & Biomekaniikkaopas",
    category: "Terveyssisältö",
    definition: "Kliiniseen tutkimusnäyttöön perustuva potilas- tai asiantuntijaohjeisto tuki- ja liikuntaelimistön sekä purentaelimistön fysioterapiasta ja hoidosta.",
  },
];

export default function SoteGlossary() {
  const [search, setSearch] = useState("");
  const [selectedCat, setSelectedCat] = useState("Kaikki");

  const categories = ["Kaikki", "Hakukonenäkyvyys", "Sääntely & Laillisuus", "Somestrategia", "Laadunvarmistus"];

  const filteredTerms = GLOSSARY_TERMS.filter((t) => {
    const matchSearch = t.term.toLowerCase().includes(search.toLowerCase()) || t.definition.toLowerCase().includes(search.toLowerCase());
    const matchCat = selectedCat === "Kaikki" || t.category === selectedCat;
    return matchSearch && matchCat;
  });

  return (
    <section className="py-16 bg-[#000a18] border-b border-[#0C66B4]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#0C66B4]/40 pb-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00AEEF]/20 border border-[#00AEEF]/40 text-[#00AEEF] text-xs font-bold uppercase tracking-wider">
              <BookOpen className="w-4 h-4" />
              <span>SOTE-Viestinnän &amp; Tekoälyn Sanasto</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display text-white tracking-normal">
              SOTE-alan <span className="text-[#00AEEF]">sanasto &amp; lääketieteellinen laatu</span>
            </h2>
            <p className="text-gray-300 text-sm max-w-2xl">
              Ymmärrä SOTE-alan videotuotannon, AEO-hakukonenäkyvyyden ja Valvira-sääntelyn keskeiset käsitteet.
            </p>
          </div>

          {/* Medical Review Credibility Card */}
          <div className="p-4 rounded-2xl bg-[#000d21] border border-[#00AEEF]/40 flex items-center gap-3 shrink-0 shadow-panel">
            <ShieldCheck className="w-8 h-8 text-[#00AEEF] shrink-0" />
            <div className="text-xs">
              <span className="font-bold text-white block">Medical Review Verified</span>
              <span className="text-gray-300">Valvira / Terhikki -rekisteröity OMT-Fysioterapeutti Janne Säkkinen</span>
            </div>
          </div>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Etsi termiä (esim. AEO, Valvira...)"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#000d21] border border-[#0C66B4]/60 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-[#00AEEF]"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedCat === cat
                    ? "bg-[#00AEEF] text-black font-bold shadow-glow"
                    : "bg-[#000d21] text-gray-300 border border-[#0C66B4]/40 hover:border-[#00AEEF]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Glossary Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTerms.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#000d21] border border-[#0C66B4]/50 space-y-3 shadow-panel hover:border-[#00AEEF]/60 transition-all flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#014489]/40 border border-[#0C66B4] text-[#00AEEF] text-[10px] font-mono font-bold uppercase">
                  {item.category}
                </span>
                <h3 className="text-base font-bold text-white">{item.term}</h3>
                <p className="text-xs text-gray-300 leading-relaxed">{item.definition}</p>
              </div>

              <div className="pt-2 border-t border-[#0C66B4]/30 flex items-center gap-1.5 text-[11px] text-gray-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Kliinisesti auditoitu käsite</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
