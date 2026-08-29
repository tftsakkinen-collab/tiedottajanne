import type { Metadata } from "next";
import AiPromptLibrary from "@/components/AiPromptLibrary";

export const metadata: Metadata = {
  title: "SOTE AI-Promptikirjasto | Tiedottajanne Oy",
  description: "Valmiit eettiset ChatGPT & Perplexity -promptirungot lääkäreille, fysioterapeuteille ja terveysteknologian asiantuntijoille.",
};

export default function PromptitPage() {
  return (
    <div className="py-12 md:py-16 bg-[var(--bg)] min-h-screen text-[var(--text)]">
      <AiPromptLibrary />
    </div>
  );
}
