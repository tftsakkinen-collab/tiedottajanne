"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Video, Send } from "lucide-react";
import { SITE_CONFIG } from "@/data/config";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Palvelut", href: "/#palvelut" },
    { name: "Työkalut", href: "/tyokalut" },
    { name: "Referenssit", href: "/referenssit" },
    { name: "Yhteystiedot", href: "/yhteystiedot" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[var(--surface)]/80 backdrop-blur-xl border-b border-[var(--border)] transition-all">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3.5 shrink-0 group">
            <div className="relative w-11 h-11 rounded-2xl border border-[var(--accent)]/40 bg-[var(--surface-elevated)] flex items-center justify-center shadow-sm group-hover:scale-105 group-hover:border-[var(--accent)] transition-all p-1">
              <Video className="w-5 h-5 text-[var(--accent)] transition-colors" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg sm:text-xl font-bold tracking-wide text-[var(--text)] group-hover:text-[var(--accent)] transition-colors flex items-center gap-1">
                TIEDOTTAJANNE<span className="text-[var(--accent)]">.OY</span>
              </span>
              <span className="text-[10px] text-[var(--muted)] uppercase tracking-widest font-sans font-medium">
                SOTE-Alan Videotuotanto &amp; AI
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center justify-center flex-1 gap-1">
            <div className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] backdrop-blur-md">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-xs font-semibold px-4 py-1.5 rounded-full transition-all relative ${
                      isActive
                        ? "bg-[var(--accent)]/20 text-[var(--accent)] shadow-sm border border-[var(--accent)]/30"
                        : "text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--surface-elevated)]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Desktop Right Action */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href={SITE_CONFIG.youtubeTiedottajanne}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-xs font-medium text-[var(--text)] hover:text-[var(--accent)] hover:border-[var(--accent)]/40 hover:bg-[var(--accent)]/10 transition-all min-h-[44px]"
            >
              <Video className="w-4 h-4 text-[#ef4444]" />
              <span>@tiedottajanne</span>
            </a>
            <Link
              href="/yhteystiedot"
              className="btn btn--primary px-5 py-2.5 text-xs sm:text-sm flex items-center gap-2 whitespace-nowrap"
            >
              <Send className="w-4 h-4 text-[var(--accent-ink)]" />
              <span>Pyydä Koulutustarjous</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
            className="lg:hidden p-2.5 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-[var(--text)] hover:text-[var(--accent)] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[var(--surface)]/95 backdrop-blur-2xl border-b border-[var(--border)] px-6 pt-4 pb-8 space-y-5 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all min-h-[44px] flex items-center ${
                    isActive
                      ? "bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/30"
                      : "text-[var(--muted)] hover:bg-[var(--surface-elevated)] hover:text-[var(--text)]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          <div className="pt-2 flex flex-col gap-3">
            <a
              href={SITE_CONFIG.youtubeTiedottajanne}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] text-center text-xs font-semibold hover:border-[var(--accent)]/40 hover:text-[var(--accent)] transition-all flex items-center justify-center gap-2 min-h-[44px]"
            >
              <Video className="w-4 h-4 text-[#ef4444]" />
              <span>YouTube: @tiedottajanne</span>
            </a>
            <Link
              href="/yhteystiedot"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 rounded-xl bg-[var(--text)] text-[var(--bg)] font-semibold text-center text-sm hover:opacity-90 transition-all shadow-lg flex items-center justify-center gap-2 min-h-[44px]"
            >
              <Send className="w-4 h-4 text-[var(--bg)]" />
              <span>Pyydä Koulutustarjous</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
