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
    { name: "Etusivu", href: "/" },
    { name: "Referenssikanavat", href: "/referenssit" },
    { name: "Yhteydenotto & Koulutukset", href: "/yhteystiedot" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#000a18]/95 backdrop-blur-md border-b border-[#0C66B4]/40">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[#00AEEF] bg-[#000a18] flex items-center justify-center shadow-[0_0_15px_rgba(0,174,239,0.8)] group-hover:scale-105 transition-transform p-1">
              <Video className="w-6 h-6 text-[#00AEEF]" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl sm:text-2xl tracking-wide text-white group-hover:text-[#00AEEF] transition-colors">
                TIEDOTTAJANNE<span className="text-[#00AEEF]">.OY</span>
              </span>
              <span className="text-[10px] text-gray-400 uppercase tracking-widest -mt-1 font-sans">
                SOTE-Alan Videotuotanto &amp; AI
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center justify-center flex-1 gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors hover:text-[#00AEEF] whitespace-nowrap relative py-1.5 ${
                    isActive ? "text-[#00AEEF]" : "text-gray-200"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00AEEF] shadow-[0_0_8px_#00AEEF]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Action */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href={SITE_CONFIG.youtubeTiedottajanne}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-[#0C66B4]/60 bg-[#000d21] text-xs font-semibold text-gray-200 hover:text-white hover:border-[#00AEEF] hover:bg-[#0C66B4]/30 transition-all shadow-sm"
            >
              <Video className="w-4 h-4 text-[#00AEEF]" />
              <span>@tiedottajanne</span>
            </a>
            <Link
              href="/yhteystiedot"
              className="px-4 py-2 rounded-lg bg-[#00AEEF] text-black font-bold text-xs sm:text-sm hover:bg-[#33C2F5] transition-all shadow-glow flex items-center gap-2 whitespace-nowrap"
            >
              <Send className="w-4 h-4" />
              <span>Pyydä Koulutustarjous</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
            className="lg:hidden p-2 rounded-lg bg-[#0C66B4]/20 border border-[#0C66B4]/50 text-white hover:text-[#00AEEF]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#000d21] border-b border-[#0C66B4]/40 px-4 pt-4 pb-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? "bg-[#0C66B4]/30 text-[#00AEEF] border-l-4 border-[#00AEEF]"
                      : "text-gray-300 hover:bg-[#0C66B4]/10 hover:text-white"
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
              className="w-full py-2.5 rounded-lg border border-[#0C66B4]/60 bg-[#000a18] text-gray-200 text-center text-sm font-semibold hover:border-[#00AEEF] transition-all flex items-center justify-center gap-2"
            >
              <Video className="w-4 h-4 text-[#00AEEF]" />
              YouTube: @tiedottajanne
            </a>
            <Link
              href="/yhteystiedot"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-lg bg-[#00AEEF] text-black font-semibold text-center text-base hover:bg-[#33C2F5] transition-all shadow-glow flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Pyydä Koulutustarjous
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
