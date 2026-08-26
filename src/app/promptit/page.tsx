import type { Metadata } from "next";
import AiPromptLibrary from "@/components/AiPromptLibrary";

export const metadata: Metadata = {
  title: "SOTE AI-Promptikirjasto | Tiedottajanne Oy",
  description: "Valmiit eettiset ChatGPT & Perplexity -promptirungot lääkäreille, fysioterapeuteille ja terveysteknologian asiantuntijoille.",
};

export default function PromptitPage() {
  return (
    <div className="py-12 bg-[#0c0c0c] min-h-screen">
      <AiPromptLibrary />
    </div>
  );
}
