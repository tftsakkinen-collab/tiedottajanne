import Link from "next/link";
import { SITE_CONFIG } from "@/data/config";
import { Video, ShieldCheck, ExternalLink, FileText, Cookie, Lock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/10 py-16 text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 items-start">
          
          {/* Col 1: Brand Info */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00d2ff]/20 to-[#014489]/30 border border-[#00d2ff]/40 flex items-center justify-center text-[#00d2ff]">
                <Video className="w-4 h-4" />
              </div>
              <span className="font-display text-lg font-bold text-white tracking-wide">
                TIEDOTTAJANNE<span className="text-[#00d2ff]">.OY</span>
              </span>
            </div>
            <p className="text-xs text-white/60 leading-relaxed max-w-sm">
              Tiedottajanne Oy (3305813-7) on OMT-fysioterapeutti Janne Säkkisen perustama asiantuntijayritys, joka auttaa terveydenhuollon ja SOTE-alan ammattilaisia tekemään vaikuttavaa, eettistä ja tekoälyindeksoitua videosisältöä.
            </p>
            <div className="text-xs text-white/40 font-mono">
              Valvira / Terhikki -rekisteröity OMT-fysioterapeutti • Oulun yliopisto (2017–)
            </div>
          </div>

          {/* Col 2: Pikalinkit */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Pikalinkit</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="/#palvelut" className="hover:text-[#00d2ff] transition-colors">Palvelut</Link></li>
              <li><Link href="/referenssit" className="hover:text-[#00d2ff] transition-colors">Referenssit</Link></li>
              <li><Link href="/yhteystiedot" className="hover:text-[#00d2ff] transition-colors">Yhteystiedot</Link></li>
              <li><Link href="/kasikirja" className="hover:text-[#00d2ff] transition-colors">SOTE-Käsikirja</Link></li>
              <li><Link href="/promptit" className="hover:text-[#00d2ff] transition-colors font-mono">AI-Promptit</Link></li>
            </ul>
          </div>

          {/* Col 3: Info & Verkostot */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Info &amp; Kanavat</h4>
            <div className="space-y-2.5 text-xs">
              <a
                href={SITE_CONFIG.youtubeTiedottajanne}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#00d2ff] transition-colors"
              >
                <Video className="w-4 h-4 text-red-500 shrink-0" />
                <span>YouTube: @tiedottajanne</span>
                <ExternalLink className="w-3 h-3 text-white/40" />
              </a>
              <a
                href={SITE_CONFIG.youtubeFtSakkinen}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#00d2ff] transition-colors"
              >
                <Video className="w-4 h-4 text-red-500 shrink-0" />
                <span>YouTube: @ft_sakkinen (1,1M+)</span>
                <ExternalLink className="w-3 h-3 text-white/40" />
              </a>
              <a
                href={SITE_CONFIG.youtubePtSakkinen}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#00d2ff] transition-colors"
              >
                <Video className="w-4 h-4 text-red-500 shrink-0" />
                <span>YouTube: @pt_sakkinen (Global)</span>
                <ExternalLink className="w-3 h-3 text-white/40" />
              </a>
              <a
                href="https://www.ftsakkinen.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#00d2ff] transition-colors pt-1"
              >
                <ShieldCheck className="w-4 h-4 text-[#00d2ff] shrink-0" />
                <span>ftsakkinen.com (FI)</span>
              </a>
              <a
                href="https://www.ptsakkinen.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#00d2ff] transition-colors"
              >
                <ShieldCheck className="w-4 h-4 text-[#00d2ff] shrink-0" />
                <span>ptsakkinen.com (EN)</span>
              </a>
            </div>
          </div>

          {/* Col 4: Juridiset & Hallinnolliset */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Juridiset &amp; Hallinto</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/tietosuoja" className="flex items-center gap-2 hover:text-[#00d2ff] transition-colors">
                  <Lock className="w-3.5 h-3.5 text-[#00d2ff]" />
                  <span>Tietosuojaseloste</span>
                </Link>
              </li>
              <li>
                <Link href="/evasteet" className="flex items-center gap-2 hover:text-[#00d2ff] transition-colors">
                  <Cookie className="w-3.5 h-3.5 text-[#00d2ff]" />
                  <span>Evästekäytännöt</span>
                </Link>
              </li>
              <li className="pt-2">
                <Link href="/llms.txt" className="flex items-center gap-2 hover:text-[#00d2ff] transition-colors font-mono text-[11px]">
                  <FileText className="w-3.5 h-3.5 text-white/40" />
                  <span>llms.txt (AI Index)</span>
                </Link>
              </li>
              <li>
                <Link href="/llms-full.txt" className="flex items-center gap-2 hover:text-[#00d2ff] transition-colors font-mono text-[11px]">
                  <FileText className="w-3.5 h-3.5 text-white/40" />
                  <span>llms-full.txt (Full AI Context)</span>
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-white/10 text-center text-xs text-white/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} Tiedottajanne Oy (Y-tunnus: 3305813-7). Kaikki oikeudet pidätetään.
          </div>
          <div className="text-white/40 text-[11px]">
            Valvira / Terhikki-rekisteröity fysioterapiaviestintä &amp; AI-SEO
          </div>
        </div>
      </div>
    </footer>
  );
}
