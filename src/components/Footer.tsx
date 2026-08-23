import Link from "next/link";
import { SITE_CONFIG } from "@/data/config";
import { Video, ShieldCheck, ExternalLink, FileText, Cookie, Lock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#00050d] border-t border-[#0C66B4]/40 py-12 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 items-start">
          
          {/* Col 1: Brand Info */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#00AEEF]/20 border border-[#00AEEF] flex items-center justify-center">
                <Video className="w-5 h-5 text-[#00AEEF]" />
              </div>
              <span className="font-display text-xl font-bold text-white">
                TIEDOTTAJANNE<span className="text-[#00AEEF]">.OY</span>
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Tiedottajanne Oy (3305813-7) on OMT-fysioterapeutti Janne S�kkisen perustama asiantuntijayritys, joka auttaa terveydenhuollon ja SOTE-alan ammattilaisia tekem��n vaikuttavaa, eettist� ja teko�lyindeksoitua videosis�lt��.
            </p>
            <div className="text-xs text-gray-500 font-mono">
              Valvira / Terhikki -rekister�ity OMT-fysioterapeutti � Oulun yliopisto (2017�)
            </div>
          </div>

          {/* Col 2: Pikalinkit */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Pikalinkit</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/#palvelut" className="hover:text-[#00AEEF] transition-colors">Palvelut</Link></li>
              <li><Link href="/referenssit" className="hover:text-[#00AEEF] transition-colors">Referenssit</Link></li>
              <li><Link href="/yhteystiedot" className="hover:text-[#00AEEF] transition-colors">Yhteystiedot</Link></li>
              <li><Link href="/kasikirja" className="hover:text-[#00AEEF] transition-colors">SOTE-K�sikirja</Link></li>
              <li><Link href="/promptit" className="hover:text-[#00AEEF] transition-colors font-mono">AI-Promptit</Link></li>
            </ul>
          </div>

          {/* Col 3: Info & Verkostot */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Info &amp; Kanavat</h4>
            <div className="space-y-2 text-xs">
              <a
                href={SITE_CONFIG.youtubeTiedottajanne}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#00AEEF] transition-colors"
              >
                <Video className="w-4 h-4 text-red-500 shrink-0" />
                <span>YouTube: @tiedottajanne</span>
                <ExternalLink className="w-3 h-3 text-gray-500" />
              </a>
              <a
                href={SITE_CONFIG.youtubeFtSakkinen}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#00AEEF] transition-colors"
              >
                <Video className="w-4 h-4 text-red-500 shrink-0" />
                <span>YouTube: @ft_sakkinen (1,1M+)</span>
                <ExternalLink className="w-3 h-3 text-gray-500" />
              </a>
              <a
                href={SITE_CONFIG.youtubePtSakkinen}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#00AEEF] transition-colors"
              >
                <Video className="w-4 h-4 text-red-500 shrink-0" />
                <span>YouTube: @pt_sakkinen (Global)</span>
                <ExternalLink className="w-3 h-3 text-gray-500" />
              </a>
              <a
                href="https://www.ftsakkinen.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#00AEEF] transition-colors pt-1"
              >
                <ShieldCheck className="w-4 h-4 text-[#00AEEF] shrink-0" />
                <span>ftsakkinen.com (FI)</span>
              </a>
              <a
                href="https://www.ptsakkinen.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#00AEEF] transition-colors"
              >
                <ShieldCheck className="w-4 h-4 text-[#00AEEF] shrink-0" />
                <span>ptsakkinen.com (EN)</span>
              </a>
            </div>
          </div>

          {/* Col 4: Juridiset & Hallinnolliset */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Juridiset &amp; Hallinto</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/tietosuoja" className="flex items-center gap-2 hover:text-[#00AEEF] transition-colors">
                  <Lock className="w-3.5 h-3.5 text-[#00AEEF]" />
                  <span>Tietosuojaseloste</span>
                </Link>
              </li>
              <li>
                <Link href="/evasteet" className="flex items-center gap-2 hover:text-[#00AEEF] transition-colors">
                  <Cookie className="w-3.5 h-3.5 text-[#00AEEF]" />
                  <span>Ev�stek�yt�nn�t</span>
                </Link>
              </li>
              <li className="pt-2">
                <Link href="/llms.txt" className="flex items-center gap-2 hover:text-[#00AEEF] transition-colors font-mono text-[11px]">
                  <FileText className="w-3.5 h-3.5 text-gray-400" />
                  <span>llms.txt (AI Index)</span>
                </Link>
              </li>
              <li>
                <Link href="/llms-full.txt" className="flex items-center gap-2 hover:text-[#00AEEF] transition-colors font-mono text-[11px]">
                  <FileText className="w-3.5 h-3.5 text-gray-400" />
                  <span>llms-full.txt (Full AI Context)</span>
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-6 border-t border-[#0C66B4]/20 text-center text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            � {new Date().getFullYear()} Tiedottajanne Oy (Y-tunnus: 3305813-7). Kaikki oikeudet pid�tet��n.
          </div>
          <div className="text-gray-400 text-[11px]">
            Valvira / Terhikki-rekister�ity fysioterapiaviestint� &amp; AI-SEO
          </div>
        </div>
      </div>
    </footer>
  );
}

