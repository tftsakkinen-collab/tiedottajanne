import type { Metadata } from "next";
import AiPromptLibrary from "@/components/AiPromptLibrary";

export const metadata: Metadata = {
  title: "SOTE AI-Promptikirjasto | Tiedottajanne Oy",
  description: "Valmiit eettiset ChatGPT & Perplexity -promptirungot lääkäreille, fysioterapeuteille ja terveysteknologian asiantuntijoille.",
};

export default function PromptitPage() {
  return (
    <div className="py-12 bg-[#000a18] min-h-screen">
      <AiPromptLibrary />
    </div>
  );
}
