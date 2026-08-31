import Link from "next/link";
import { SITE_CONFIG } from "@/data/config";
import { Video, ShieldCheck, ExternalLink, FileText, Cookie, Lock, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#05080f] border-t border-white/10 pt-16 pb-12 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* 3-Column Grid + Structured Contact Block */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Col 1: Brand Info & Contact Block (md:col-span-5) */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00d2ff]/20 to-[#014489]/30 border border-[#00d2ff]/40 flex items-center justify-center text-[#00d2ff]">
                <Video className="w-5 h-5" />
              </div>
              <span className="font-display text-xl font-bold text-white tracking-wide">
                TIEDOTTAJANNE<span className="text-[#00d2ff]">.OY</span>
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm font-normal">
              Tiedottajanne Oy (Y-tunnus: 3305813-7) on OMT-fysioterapeutti Janne Säkkisen perustama asiantuntijayritys. Autamme SOTE-alan ammattilaisia ja yrityksiä tekemään vaikuttavaa, eettistä ja tekoälyoptimoitua videosisältöä.
            </p>

            {/* Direct Contact Block */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2 text-xs text-slate-200">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#00d2ff] shrink-0" />
                <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="hover:text-[#00d2ff] font-medium transition-colors">
                  {SITE_CONFIG.contactEmail}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#00d2ff] shrink-0" />
                <a href={`tel:${SITE_CONFIG.contactPhone}`} className="hover:text-[#00d2ff] font-medium transition-colors">
                  {SITE_CONFIG.contactPhone}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-[#00d2ff] shrink-0" />
                <span>Oulu (Päätoimipaikka) • Google Meet valtakunnallisesti</span>
              </div>
            </div>

            <div className="text-[11px] text-slate-400 font-medium flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00d2ff]" />
              <span>Valvira / Terhikki -rekisteröity OMT-fysioterapeutti • Oulun yliopisto (2017–)</span>
            </div>
          </div>

          {/* Col 2: Sivusto (md:col-span-3) */}
          <div className="md:col-span-3 space-y-3.5">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Sivusto &amp; palvelut</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/" className="hover:text-[#00d2ff] transition-colors py-1 block">
                  Etusivu
                </Link>
              </li>
              <li>
                <Link href="/palvelut" className="hover:text-[#00d2ff] transition-colors py-1 block">
                  Palvelut &amp; hinnat (200 €/h)
                </Link>
              </li>
              <li>
                <Link href="/referenssit" className="hover:text-[#00d2ff] transition-colors py-1 block">
                  Referenssit &amp; näytöt
                </Link>
              </li>
              <li>
                <Link href="/tyokalut" className="hover:text-[#00d2ff] transition-colors py-1 block">
                  Työkalut &amp; ROI-laskuri
                </Link>
              </li>
              <li>
                <Link href="/yhteystiedot" className="hover:text-[#00d2ff] transition-colors py-1 block">
                  Yhteystiedot &amp; tilaus
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Kanavat, Juridiset & AI-Indeksit (md:col-span-4) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Kanavat &amp; dokumentaatio</h4>
            
            <div className="space-y-2 text-xs sm:text-sm">
              <a
                href={SITE_CONFIG.youtubeTiedottajanne}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#00d2ff] transition-colors"
              >
                <Video className="w-4 h-4 text-red-500 shrink-0" />
                <span>YouTube: @tiedottajanne</span>
                <ExternalLink className="w-3 h-3 text-slate-400 ml-auto" />
              </a>
              <a
                href={SITE_CONFIG.youtubeFtSakkinen}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#00d2ff] transition-colors"
              >
                <Video className="w-4 h-4 text-red-500 shrink-0" />
                <span>YouTube: @ft_sakkinen (1,1M+)</span>
                <ExternalLink className="w-3 h-3 text-slate-400 ml-auto" />
              </a>
              <a
                href={SITE_CONFIG.youtubePtSakkinen}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#00d2ff] transition-colors"
              >
                <Video className="w-4 h-4 text-red-500 shrink-0" />
                <span>YouTube: @pt_sakkinen (Global EN)</span>
                <ExternalLink className="w-3 h-3 text-slate-400 ml-auto" />
              </a>
            </div>

            <div className="pt-3 border-t border-white/10 space-y-2 text-xs">
              <div className="flex items-center gap-4">
                <Link href="/tietosuoja" className="flex items-center gap-1.5 hover:text-[#00d2ff] transition-colors">
                  <Lock className="w-3.5 h-3.5 text-[#00d2ff]" />
                  <span>Tietosuoja</span>
                </Link>
                <Link href="/evasteet" className="flex items-center gap-1.5 hover:text-[#00d2ff] transition-colors">
                  <Cookie className="w-3.5 h-3.5 text-[#00d2ff]" />
                  <span>Evästeet</span>
                </Link>
              </div>
              <div className="flex items-center gap-4 pt-1">
                <Link href="/llms.txt" className="flex items-center gap-1.5 hover:text-[#00d2ff] transition-colors text-[11px] text-slate-400">
                  <FileText className="w-3 h-3 text-[#00d2ff]" />
                  <span>llms.txt (AI Index)</span>
                </Link>
                <Link href="/llms-full.txt" className="flex items-center gap-1.5 hover:text-[#00d2ff] transition-colors text-[11px] text-slate-400">
                  <FileText className="w-3 h-3 text-[#00d2ff]" />
                  <span>llms-full.txt</span>
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-white/10 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Tiedottajanne Oy (Y-tunnus: 3305813-7). Kaikki oikeudet pidätetään.
          </div>
          <div className="text-[11px] text-slate-400">
            Valvira- ja Terhikki-yhteensopiva SOTE-asiantuntijaviestintä &amp; AEO
          </div>
        </div>

      </div>
    </footer>
  );
}
