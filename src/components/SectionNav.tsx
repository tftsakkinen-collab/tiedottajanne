"use client";

import { useEffect, useState } from "react";

interface SectionItem {
  id: string;
  label: string;
}

const SECTIONS: SectionItem[] = [
  { id: "studiot", label: "Studio & AI" },
  { id: "projektit", label: "Projektit & Proof" },
  { id: "videot", label: "Videot & AEO" },
  { id: "palvelut", label: "Palvelut & ROI" },
  { id: "varaa", label: "Varaukset" },
];

export default function SectionNav() {
  const [activeId, setActiveId] = useState<string>("studiot");
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = totalHeight > 0 ? (currentScroll / totalHeight) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));

      // Calculate active section
      const sectionElements = SECTIONS.map((s) => document.getElementById(s.id)).filter(
        Boolean
      ) as HTMLElement[];

      let currentActive = SECTIONS[0].id;
      for (const el of sectionElements) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 200) {
          currentActive = el.id;
        }
      }
      setActiveId(currentActive);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="sticky top-20 z-40 bg-[var(--surface)]/90 backdrop-blur-md border-b border-[var(--border)] transition-all">
      {/* Scroll Progress Bar */}
      <div
        className="h-0.5 bg-[var(--primary)] transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-start sm:justify-center overflow-x-auto py-2.5 gap-2 sm:gap-6 no-scrollbar">
          {SECTIONS.map((section) => {
            const isActive = activeId === section.id;
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                aria-current={isActive ? "true" : undefined}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? "bg-[var(--primary)] text-[var(--primary-ink)] shadow-sm"
                    : "text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--border)]/50"
                }`}
              >
                {section.label}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
