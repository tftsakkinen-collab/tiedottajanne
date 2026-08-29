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
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = totalHeight > 0 ? (currentScroll / totalHeight) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));

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
    <div className="sticky top-20 z-40 w-full max-w-full bg-[var(--surface)]/95 backdrop-blur-md border-b border-[var(--border)] transition-all overflow-hidden">
      {/* Scroll Progress Bar */}
      <div
        className="h-1 bg-[var(--accent)] transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-full overflow-hidden">
        {/* Scrollable Container with overflow-x: auto */}
        <div className="w-full max-w-full overflow-x-auto overflow-y-hidden touch-pan-x py-2 no-scrollbar scrollbar-none min-w-0">
          <nav className="flex items-center justify-start sm:justify-center gap-2 sm:gap-4 shrink-0 min-w-max px-1">
            {SECTIONS.map((section) => {
              const isActive = activeId === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  aria-current={isActive ? "true" : undefined}
                  className={`min-h-[44px] px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center justify-center cursor-pointer ${
                    isActive
                      ? "bg-[var(--accent)] text-[var(--accent-ink)] shadow-md"
                      : "text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--surface-elevated)] bg-[var(--surface)] border border-[var(--border)]"
                  }`}
                >
                  {section.label}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}
