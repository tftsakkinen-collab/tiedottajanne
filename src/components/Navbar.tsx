"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Video, CreditCard } from "lucide-react";
import { SITE_CONFIG } from "@/data/config";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Palvelut", href: "/palvelut" },
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

          {/* CTA & Mobile Menu Trigger */}
          <div className="flex items-center gap-3">
            <a
              href="https://buy.stripe.com/9B600j4Kg4fA8xQ8zX0Ny04"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex btn btn--primary px-5 py-2.5 text-xs sm:text-sm items-center gap-2 whitespace-nowrap cursor-pointer"
            >
              <CreditCard className="w-4 h-4 text-[var(--accent-ink)]" />
              <span>Tilaa AI-sivut (499 €)</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--text)] hover:text-[var(--accent)] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
              aria-label="Avaa valikko"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[var(--border)] bg-[var(--surface)] p-6 space-y-4 shadow-2xl animate-in slide-in-from-top-4">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-2xl text-sm font-semibold text-[var(--text)] hover:bg-[var(--surface-elevated)] hover:text-[var(--accent)] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="pt-2">
            <a
              href="https://buy.stripe.com/9B600j4Kg4fA8xQ8zX0Ny04"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn--primary w-full py-3.5 text-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <CreditCard className="w-4 h-4 text-[var(--accent-ink)]" />
              <span>Tilaa AI-sivut (499 €)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
