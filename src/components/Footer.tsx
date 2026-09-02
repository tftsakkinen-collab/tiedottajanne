import Link from "next/link";
import { SITE_CONFIG } from "@/data/config";
import { Video, ShieldCheck, ExternalLink, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--surface)] border-t border-[var(--border)] py-16 text-[var(--muted)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* 3-Column Grid + Structured Contact Block */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Col 1: Brand Info & Contact Block */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[var(--surface-elevated)] border border-[var(--accent)]/40 flex items-center justify-center text-[var(--accent)]">
                <Video className="w-5 h-5" />
              </div>
              <span className="font-display text-xl font-bold text-[var(--text)] tracking-wide">
                TIEDOTTAJANNE<span className="text-[var(--accent)]">.OY</span>
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed max-w-sm font-normal">
              Tiedottajanne Oy (Y-tunnus: 3305813-7) on OMT-fysioterapeutti Janne Säkkisen perustama asiantuntijayritys. Autamme SOTE-alan ammattilaisia ja yrityksiä tekemään vaikuttavaa, eettistä ja tekoälyoptimoitua videosisältöä.
            </p>

            {/* Direct Contact Block */}
            <div className="p-4 rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border)] space-y-2 text-xs text-[var(--text)]">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[var(--accent)] shrink-0" />
                <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="hover:text-[var(--accent)] font-medium transition-colors">
                  {SITE_CONFIG.contactEmail}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[var(--accent)] shrink-0" />
                <a href={`tel:${SITE_CONFIG.contactPhone}`} className="hover:text-[var(--accent)] font-medium transition-colors">
                  {SITE_CONFIG.contactPhone}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-[var(--muted)]">
                <MapPin className="w-4 h-4 text-[var(--accent)] shrink-0" />
                <span>Oulu (Päätoimipaikka) • Google Meet valtakunnallisesti</span>
              </div>
            </div>

            <div className="text-[11px] text-[var(--muted)] font-medium flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>Valvira / Terhikki -rekisteröity OMT-fysioterapeutti • Oulun yliopisto (2017–)</span>
            </div>
          </div>

          {/* Col 2: Pikalinkit */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-[var(--text)] uppercase tracking-wider">Pikalinkit</h4>
            <ul className="space-y-1 text-xs">
              <li><Link href="/palvelut" className="min-h-[44px] py-2 flex items-center text-[var(--muted)] hover:text-[var(--accent)] transition-colors">Palvelut &amp; Hinnoittelu</Link></li>
              <li><Link href="/referenssit" className="min-h-[44px] py-2 flex items-center text-[var(--muted)] hover:text-[var(--accent)] transition-colors">Referenssit</Link></li>
              <li><Link href="/tyokalut" className="min-h-[44px] py-2 flex items-center text-[var(--muted)] hover:text-[var(--accent)] transition-colors">Työkalut</Link></li>
              <li><Link href="/yhteystiedot" className="min-h-[44px] py-2 flex items-center text-[var(--muted)] hover:text-[var(--accent)] transition-colors">Yhteystiedot</Link></li>
              <li><Link href="/kasikirja" className="min-h-[44px] py-2 flex items-center text-[var(--muted)] hover:text-[var(--accent)] transition-colors">SOTE-Käsikirja</Link></li>
              <li><Link href="/promptit" className="min-h-[44px] py-2 flex items-center text-[var(--muted)] hover:text-[var(--accent)] transition-colors font-mono">AI-Promptit</Link></li>
            </ul>
          </div>

          {/* Col 3: Info & Verkostot */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold text-[var(--text)] uppercase tracking-wider">Info &amp; Kanavat</h4>
            <div className="space-y-1 text-xs">
              <a
                href={SITE_CONFIG.youtubeTiedottajanne}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] py-2 flex items-center gap-2 text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
              >
                <Video className="w-4 h-4 text-red-500 shrink-0" />
                <span>YouTube: @tiedottajanne</span>
                <ExternalLink className="w-3 h-3 text-[var(--muted)]" />
              </a>
              <a
                href={SITE_CONFIG.youtubeFtSakkinen}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] py-2 flex items-center gap-2 text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
              >
                <Video className="w-4 h-4 text-red-500 shrink-0" />
                <span>YouTube: @ft_sakkinen</span>
                <ExternalLink className="w-3 h-3 text-[var(--muted)]" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Legal Row */}
        <div className="pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <span>© {new Date().getFullYear()} Tiedottajanne Oy. Kaikki oikeudet pidätetään.</span>
          <div className="flex items-center gap-6">
            <Link href="/tietosuoja" className="hover:text-[var(--accent)] transition-colors min-h-[44px] flex items-center">
              Tietosuoja
            </Link>
            <Link href="/evasteet" className="hover:text-[var(--accent)] transition-colors min-h-[44px] flex items-center">
              Evästeet
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
