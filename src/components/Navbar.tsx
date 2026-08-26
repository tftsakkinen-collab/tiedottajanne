"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Video, Send, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/data/config";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Palvelut", href: "/#palvelut" },
    { name: "Referenssit", href: "/referenssit" },
    { name: "Yhteystiedot", href: "/yhteystiedot" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0c0c0c]/80 backdrop-blur-xl border-b border-white/10 transition-all">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3.5 shrink-0 group">
            <div className="relative w-11 h-11 rounded-2xl border border-[#00d2ff]/40 bg-gradient-to-br from-[#00d2ff]/20 via-[#0B2551]/30 to-black flex items-center justify-center shadow-[0_0_20px_rgba(0,210,255,0.25)] group-hover:scale-105 group-hover:border-[#00d2ff] transition-all p-1">
              <Video className="w-5 h-5 text-[#00d2ff] group-hover:text-white transition-colors" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg sm:text-xl font-bold tracking-wide text-white group-hover:text-[#00d2ff] transition-colors flex items-center gap-1">
                TIEDOTTAJANNE<span className="text-[#00d2ff]">.OY</span>
              </span>
              <span className="text-[10px] text-white/50 uppercase tracking-widest font-sans font-medium">
                SOTE-Alan Videotuotanto &amp; AI
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center justify-center flex-1 gap-1">
            <div className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-xs font-semibold px-4 py-1.5 rounded-full transition-all relative ${
                      isActive
                        ? "bg-white/10 text-white shadow-sm border border-white/15"
                        : "text-white/70 hover:text-white hover:bg-white/[0.05]"
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
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-white/15 bg-white/[0.03] text-xs font-medium text-white/80 hover:text-white hover:border-[#00d2ff]/40 hover:bg-[#00d2ff]/10 transition-all"
            >
              <Video className="w-4 h-4 text-[#00d2ff]" />
              <span>@tiedottajanne</span>
            </a>
            <Link
              href="/yhteystiedot"
              className="px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-xs sm:text-sm hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_25px_rgba(255,255,255,0.2)] flex items-center gap-2 whitespace-nowrap"
            >
              <Send className="w-4 h-4 text-black" />
              <span>Pyydä Koulutustarjous</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
            className="lg:hidden p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white hover:text-[#00d2ff] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c0c0c]/95 backdrop-blur-2xl border-b border-white/10 px-6 pt-4 pb-8 space-y-5 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "bg-white/10 text-[#00d2ff] border border-white/15"
                      : "text-white/70 hover:bg-white/5 hover:text-white"
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
              className="w-full py-3 rounded-xl border border-white/15 bg-white/[0.02] text-white/80 text-center text-xs font-semibold hover:border-[#00d2ff]/40 hover:text-white transition-all flex items-center justify-center gap-2"
            >
              <Video className="w-4 h-4 text-[#00d2ff]" />
              <span>YouTube: @tiedottajanne</span>
            </a>
            <Link
              href="/yhteystiedot"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 rounded-xl bg-white text-black font-semibold text-center text-sm hover:bg-white/90 transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4 text-black" />
              <span>Pyydä Koulutustarjous</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
