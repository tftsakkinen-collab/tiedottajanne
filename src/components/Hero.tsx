import Link from "next/link";
import { SITE_CONFIG } from "@/data/config";
import { ShieldCheck, ArrowRight, Video, Eye, Users, GraduationCap, FileCode2, Send } from "lucide-react";

export default function Hero() {
  const stats = [
    {
      label: SITE_CONFIG.stats.youtubeViews,
      sublabel: "Orgaanista katselukertaa",
      icon: Eye,
    },
    {
      label: SITE_CONFIG.stats.youtubeSubscribers,
      sublabel: "Suomalaista tilaajaa",
      icon: Users,
    },
    {
      label: SITE_CONFIG.stats.channelsCount,
      sublabel: "Valmiit tuotantoputket",
      icon: Video,
    },
    {
      label: "Oulun yliopisto",
      sublabel: "Hammaslääketiede & koulutus (2017–)",
      icon: GraduationCap,
    },
  ];

  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 bg-[#000a18] border-b border-[#0C66B4]/30 overflow-hidden">
      
      {/* Background glow circle */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00AEEF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* SOTE Category Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0C66B4]/30 border border-[#00AEEF]/40 text-[#00AEEF] text-xs font-bold tracking-wider backdrop-blur-md">
              <Video className="w-4 h-4 text-[#00AEEF]" />
              <span>SOTE-alan videotuotanto &amp; AI-indeksointi</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-display font-medium text-white tracking-normal leading-[1.2] break-words">
              Miten <span className="text-[#00AEEF]">SOTE-alan ammattilaiset</span> rakentavat vaikuttavaa somea
            </h1>

            {/* Subtitle */}
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Tiedottajanne Oy opastaa terveydenhuollon ja SOTE-alan ammattilaisia sekä organisaatioita tekemään luotettavaa, Valvira-yhteensopivaa ja tekoälyindeksoitua videosisältöä YouTubessa, Instagramissa, TikTokissa ja LinkedInissä.
            </p>

            {/* Credibility Pills */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-gray-300">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#000d21] border border-[#0C66B4]/50">
                <ShieldCheck className="w-4 h-4 text-[#00AEEF] shrink-0" />
                <span>Valvira / Terhikki -rekisteröity OMT-fysioterapeutti</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#000d21] border border-[#0C66B4]/50">
                <GraduationCap className="w-4 h-4 text-[#00AEEF] shrink-0" />
                <span>Oulun yliopisto (Hammaslääketiede 2017–)</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#000d21] border border-[#0C66B4]/50">
                <FileCode2 className="w-4 h-4 text-[#00AEEF] shrink-0" />
                <span>ChatGPT / Perplexity AI-metatiedot</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/referenssit"
                className="px-8 py-4 rounded-xl bg-[#00AEEF] text-black font-bold text-base hover:bg-[#33C2F5] transition-all shadow-glow flex items-center justify-center gap-2 group text-center"
              >
                <span>Katso referenssikanavat</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/yhteystiedot"
                className="px-8 py-4 rounded-xl bg-[#000d21] border border-[#0C66B4] text-white font-bold text-base hover:border-[#00AEEF] hover:bg-[#001533] transition-all flex items-center justify-center gap-2 text-center"
              >
                <Send className="w-4 h-4 text-[#00AEEF]" />
                <span>Pyydä koulutustarjous</span>
              </Link>
            </div>

          </div>

          {/* Video Showcase Card / Janne Profile */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md rounded-3xl p-2 bg-gradient-to-b from-[#0C66B4] to-[#000a18] shadow-panel">
              <div className="relative rounded-[22px] overflow-hidden aspect-[4/5] bg-[#000d21] p-6 flex flex-col justify-between border border-[#0C66B4]/50">
                
                {/* Top Badge */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#00AEEF]/20 text-[#00AEEF] text-xs font-mono font-bold">
                    Referenssikanavat
                  </span>
                  <Video className="w-6 h-6 text-[#00AEEF]" />
                </div>

                {/* Main Content */}
                <div className="space-y-4 my-auto">
                  <div className="p-4 rounded-2xl bg-[#000a18] border border-[#0C66B4]/40 space-y-2">
                    <div className="text-xs text-[#00AEEF] font-mono font-bold">YouTube: @ft_sakkinen</div>
                    <div className="text-lg font-bold text-white">Yli 1,1M+ katselukertaa</div>
                    <div className="text-xs text-gray-300">
                      Suomalainen fysioterapia- ja purentaelimistön (TMD) terveyskanava ilman maksettua mainontaa.
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#000a18] border border-[#0C66B4]/40 space-y-2">
                    <div className="text-xs text-[#00AEEF] font-mono font-bold">YouTube: @pt_sakkinen</div>
                    <div className="text-lg font-bold text-white">Kansainvälinen kanava (EN)</div>
                    <div className="text-xs text-gray-300">
                      Englanninkielinen TMJ joint &amp; spinal physical therapy -kanava kansainvälisellä tavoittavuudella.
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#000a18] border border-[#0C66B4]/40 space-y-2">
                    <div className="text-xs text-[#00AEEF] font-mono font-bold">YouTube: @tiedottajanne</div>
                    <div className="text-lg font-bold text-white">Viestintä &amp; tekoäly (FI/EN)</div>
                    <div className="text-xs text-gray-300">
                      SOTE-alan videotuotannon, AI-käsikirjoituksen ja hakukonemeta-arkkitehtuurin asiantuntijakanava.
                    </div>
                  </div>
                </div>

                {/* Footer Quote */}
                <div className="text-[11px] text-gray-400 font-mono text-center border-t border-[#0C66B4]/30 pt-3">
                  Tiedottajanne Oy • Janne Säkkinen
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 p-3 sm:p-6 md:p-8 rounded-3xl bg-[#000d21] border border-[#0C66B4]/50 shadow-panel">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="flex items-center gap-2 sm:gap-3.5 p-1.5 sm:p-2 min-w-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#014489]/40 border border-[#00AEEF]/40 text-[#00AEEF] flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs sm:text-base md:text-lg font-bold text-white leading-tight font-display break-words">
                    {stat.label}
                  </div>
                  <div className="text-[10px] sm:text-xs text-gray-400 leading-tight">
                    {stat.sublabel}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
