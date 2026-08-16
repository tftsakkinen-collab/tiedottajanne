import Link from "next/link";
import { SITE_CONFIG } from "@/data/config";
import { Video, ShieldCheck, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#00050d] border-t border-[#0C66B4]/40 py-12 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#00AEEF]/20 border border-[#00AEEF] flex items-center justify-center">
                <Video className="w-5 h-5 text-[#00AEEF]" />
              </div>
              <span className="font-display text-xl font-bold text-white">
                TIEDOTTAJANNE<span className="text-[#00AEEF]">.OY</span>
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed max-w-md">
              Tiedottajanne Oy (3305813-7) on OMT-fysioterapeutti Janne Säkkisen perustama asiantuntijayritys, joka auttaa terveydenhuollon ja SOTE-alan ammattilaisia tekemään vaikuttavaa, eettistä ja tekoälyindeksoitua videosisältöä.
            </p>
            <div className="text-xs text-gray-500 font-mono">
              Valvira / Terhikki -rekisteröity OMT-fysioterapeutti • Oulun yliopiston luennoitsija (2017–)
            </div>
          </div>

          {/* Links Col 1 */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Sivut &amp; Osykkeet</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/" className="hover:text-[#00AEEF] transition-colors">Etusivu</Link></li>
              <li><Link href="/referenssit" className="hover:text-[#00AEEF] transition-colors">Referenssikanavat</Link></li>
              <li><Link href="/yhteystiedot" className="hover:text-[#00AEEF] transition-colors">Tarjouspyyntö &amp; Yhteystiedot</Link></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Verkostot &amp; Kanavat</h4>
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
                <span>YouTube: @ft_sakkinen (1,1M+ katselua)</span>
                <ExternalLink className="w-3 h-3 text-gray-500" />
              </a>
              <a
                href={SITE_CONFIG.youtubePtSakkinen}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#00AEEF] transition-colors"
              >
                <Video className="w-4 h-4 text-red-500 shrink-0" />
                <span>YouTube: @pt_sakkinen (Global EN)</span>
                <ExternalLink className="w-3 h-3 text-gray-500" />
              </a>
              <a
                href="https://www.ftsakkinen.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#00AEEF] transition-colors pt-1"
              >
                <ShieldCheck className="w-4 h-4 text-[#00AEEF] shrink-0" />
                <span>Sivusto: ftsakkinen.com (Suomi)</span>
              </a>
              <a
                href="https://www.ptsakkinen.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#00AEEF] transition-colors"
              >
                <ShieldCheck className="w-4 h-4 text-[#00AEEF] shrink-0" />
                <span>Sivusto: ptsakkinen.com (English)</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-6 border-t border-[#0C66B4]/20 text-center text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} Tiedottajanne Oy (Y-tunnus: 3305813-7). Kaikki oikeudet pidätetään.
          </div>
          <div className="flex items-center gap-4 text-gray-400">
            <Link href="/llms.txt" className="hover:text-[#00AEEF]">llms.txt</Link>
            <span>•</span>
            <Link href="/llms-full.txt" className="hover:text-[#00AEEF]">llms-full.txt</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
