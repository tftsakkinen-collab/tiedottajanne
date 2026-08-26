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
    <section className="py-20 md:py-28 bg-[#0c0c0c] border-b border-white/10 relative overflow-hidden">
      {/* Subtle Ambient Light */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[450px] bg-gradient-to-r from-[#014489]/10 to-transparent blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3.5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00d2ff]/30 bg-[#00d2ff]/10 text-[#00d2ff] text-xs font-semibold uppercase tracking-wider">
              <BookOpen className="w-4 h-4" />
              <span>SOTE-Viestinnän &amp; Tekoälyn Sanasto</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              SOTE-alan <span className="bg-gradient-to-r from-white via-[#A4F4FD] to-[#00d2ff] bg-clip-text text-transparent">sanasto &amp; lääketieteellinen laatu</span>
            </h2>
            <p className="text-white/60 text-sm max-w-2xl leading-relaxed">
              Ymmärrä SOTE-alan videotuotannon, AEO-hakukonenäkyvyyden ja Valvira-sääntelyn keskeiset käsitteet.
            </p>
          </div>

          {/* Medical Review Credibility Card */}
          <div className="p-4 sm:p-5 rounded-2xl liquid-glass border border-white/15 flex items-center gap-3.5 shrink-0">
            <ShieldCheck className="w-8 h-8 text-[#00d2ff] shrink-0" />
            <div className="text-xs">
              <span className="font-bold text-white block">Medical Review Verified</span>
              <span className="text-white/60">Valvira / Terhikki -rekisteröity OMT-Fysioterapeutti Janne Säkkinen</span>
            </div>
          </div>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-white/40 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Etsi termiä (esim. AEO, Valvira...)"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full bg-white/[0.03] border border-white/15 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#00d2ff] transition-colors"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedCat === cat
                    ? "bg-white text-black font-bold shadow-md"
                    : "bg-white/[0.03] text-white/70 border border-white/10 hover:border-white/30 hover:text-white"
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
              className="liquid-glass rounded-3xl p-7 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/15 text-[#00d2ff] text-[10px] font-mono font-semibold uppercase">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold text-white tracking-tight">{item.term}</h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed">{item.definition}</p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-xs text-white/50">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Kliinisesti auditoitu käsite</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
