import type { Metadata } from "next";
import AiPromptLibrary from "@/components/AiPromptLibrary";
import SoteGlossary from "@/components/SoteGlossary";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "SOTE AI-Promptikirjasto & Sanasto — Tiedottajanne Oy",
  description: "Ilmaiset SOTE-alan AI-promptit, tekoälykäsikirjoituksen pohjat ja terveydenhuollon digitaalinen sanasto ammattilaisille.",
};

export default function TyokalutPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Navigation back */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--surface)] text-[var(--text)] border border-[var(--border)] text-sm font-semibold hover:border-[var(--primary)] transition-all min-h-[44px]"
          >
            <ArrowLeft className="w-4 h-4 text-[var(--primary)] shrink-0" />
            <span>Takaisin etusivulle</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] text-xs font-semibold text-[var(--primary)]">
            <Sparkles className="w-4 h-4 text-[var(--primary)]" />
            <span>Digitaalinen Työkalupakki</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-bold text-[var(--text)] tracking-tight">
            SOTE AI-Promptikirjasto &amp; Sanasto
          </h1>
          <p className="text-[var(--muted)] text-base sm:text-lg leading-relaxed">
            Testatut tekoälypromptit videotuotantoon, Valvira-yhteensopiviin käsikirjoituksiin ja SOTE-alan digitaalisen viestinnän termistöön.
          </p>
        </div>

        {/* Tools Components */}
        <div className="space-y-16">
          <AiPromptLibrary />
          <SoteGlossary />
        </div>
      </div>
    </div>
  );
}
