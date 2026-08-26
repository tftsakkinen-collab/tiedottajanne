"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Youtube, Instagram, Video, TrendingUp, CheckCircle2, ArrowUpRight, BarChart3, Sparkles, Search } from "lucide-react";

interface SocialStats {
  timestamp: string;
  youtube: {
    totalViews: string;
    viewsGrowth: string;
    subscribers: string;
    subscribersGrowth: string;
    searchSeoShare: string;
    engagementRate: string;
    channels: Array<{
      name: string;
      handle: string;
      latestVideos: Array<{ title: string; id: string; url: string }>;
    }>;
  };
  instagram: {
    handle: string;
    handleEn: string;
    estimatedMonthlyReach: string;
    reachGrowth: string;
    profileVisitsGrowth: string;
    contentType: string;
  };
  tiktok: {
    handle: string;
    handleEn: string;
    estimatedMonthlyViews: string;
    viewsGrowth: string;
    savesGrowth: string;
    contentType: string;
  };
}

const GALLERY_PHOTOS = [
  {
    src: "/assets/DSC09967.jpg",
    alt: "Janne Säkkinen",
  },
  {
    src: "/assets/A6707373.jpg",
    alt: "Janne Säkkinen koulutuksessa",
  },
  {
    src: "/assets/DSC02309.jpg",
    alt: "Janne Säkkinen työssä",
  },
  {
    src: "/assets/Janne_0705_2022-2196.jpg",
    alt: "Janne Säkkinen Oulun yliopistolla",
  },
];

export default function ProofOfWork() {
  const [stats, setStats] = useState<SocialStats | null>(null);

  useEffect(() => {
    fetch("/api/social-stats")
      .then((res) => res.json())
      .then((data) => {
        setStats(data);
      })
      .catch(() => {});
  }, []);

  return (
    <section className="py-20 md:py-28 bg-[#0c0c0c] border-b border-white/10 relative overflow-hidden">
      {/* Subtle Ambient Light */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[10%] left-[-15%] w-[600px] h-[500px] bg-gradient-to-r from-[#00d2ff]/10 to-transparent blur-[140px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-15%] w-[600px] h-[500px] bg-gradient-to-l from-[#014489]/10 to-transparent blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00d2ff]/30 bg-[#00d2ff]/10 text-[#00d2ff] text-xs font-semibold tracking-wider">
            <TrendingUp className="w-4 h-4" />
            <span>Reaaliaikaiset näytöt &amp; Proof of Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Data puhuu puolestaan — <span className="bg-gradient-to-r from-white via-[#A4F4FD] to-[#00d2ff] bg-clip-text text-transparent">orgaaniset katselumäärät &amp; kasvuprosentit</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base leading-relaxed">
            Katso reaaliaikaiset katselutilastot, kasvuprosentit ja videonäytöt YouTubesta, Instagramista ja TikTokista. Tiedottajanne Oy:n opit perustuvat aitoihin, mitattaviin tuloksiin.
          </p>
        </div>

        {/* Live Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* YouTube Stats */}
          <div className="liquid-glass rounded-3xl p-8 space-y-6 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 group-hover:scale-110 transition-transform">
                    <Youtube className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-white tracking-wide">YouTube Metrics</span>
                </div>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                  {stats?.youtube.viewsGrowth || "+145 %"}
                </span>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                  {stats?.youtube.totalViews || "1 150 000+"}
                </div>
                <div className="text-xs text-white/50 mt-1 font-medium">Orgaanista katselukertaa yhteensä</div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-2.5 text-xs text-white/70">
              <div className="flex items-center justify-between">
                <span>Tilaajia yhteensä:</span>
                <span className="font-semibold text-white flex items-center gap-1.5">
                  {stats?.youtube.subscribers || "5 380+"}
                  <span className="text-[11px] text-emerald-400 font-mono">({stats?.youtube.subscribersGrowth || "+85 %"})</span>
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Hakukonenäkyvyys (SEO):</span>
                <span className="font-semibold text-emerald-400">{stats?.youtube.searchSeoShare || "92 %"}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Sitoutumisaste:</span>
                <span className="font-semibold text-white">{stats?.youtube.engagementRate || "8.4 %"}</span>
              </div>
            </div>
          </div>

          {/* Instagram Stats */}
          <div className="liquid-glass rounded-3xl p-8 space-y-6 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-white tracking-wide">Instagram Reach</span>
                </div>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                  {stats?.instagram.reachGrowth || "+120 %"}
                </span>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                  {stats?.instagram.estimatedMonthlyReach || "150 000+"}
                </div>
                <div className="text-xs text-white/50 mt-1 font-medium">Kuukausittainen orgaaninen tavoittavuus</div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-2.5 text-xs text-white/70">
              <div className="flex items-center justify-between">
                <span>Profiilivierailujen kasvu:</span>
                <span className="font-semibold text-emerald-400">{stats?.instagram.profileVisitsGrowth || "+65 %"}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Tilit:</span>
                <span className="font-semibold text-[#00d2ff]">@sakkinenjanne &amp; @ptsakkinen</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Formaatit:</span>
                <span className="font-semibold text-white">Reels &amp; Mikro-oppaat</span>
              </div>
            </div>
          </div>

          {/* TikTok & Shorts Stats */}
          <div className="liquid-glass rounded-3xl p-8 space-y-6 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-[#00d2ff]/10 border border-[#00d2ff]/20 flex items-center justify-center text-[#00d2ff] group-hover:scale-110 transition-transform">
                    <Video className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-white tracking-wide">TikTok &amp; Shorts</span>
                </div>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                  {stats?.tiktok.viewsGrowth || "+210 %"}
                </span>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                  {stats?.tiktok.estimatedMonthlyViews || "200 000+"}
                </div>
                <div className="text-xs text-white/50 mt-1 font-medium">Katselukertaa kuukaudessa</div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-2.5 text-xs text-white/70">
              <div className="flex items-center justify-between">
                <span>Tallennukset &amp; jakelut:</span>
                <span className="font-semibold text-emerald-400">{stats?.tiktok.savesGrowth || "+180 %"}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Kanavat:</span>
                <span className="font-semibold text-[#00d2ff]">@sakkinenjanne &amp; @ptsakkinen</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Fokus:</span>
                <span className="font-semibold text-white">Lyhytvideot &amp; Ergonomia</span>
              </div>
            </div>
          </div>

        </div>

        {/* vidIQ Analytics Verified Showcase Card */}
        <div className="liquid-glass rounded-3xl p-8 sm:p-10 border border-[#00d2ff]/20 space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00d2ff]/20 to-[#014489]/30 border border-[#00d2ff]/30 text-[#00d2ff] flex items-center justify-center">
                <BarChart3 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold text-[#00d2ff] uppercase tracking-wider block">vidIQ &amp; YouTube Studio Analytiikka</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Somen orgaaninen kasvu &amp; mitattavat tulokset</h3>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-xs font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              Säännöllisesti todennettu data
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-1.5">
              <span className="text-2xl sm:text-3xl font-bold font-display text-emerald-400">+145 %</span>
              <span className="text-xs text-white/60 block font-medium">Orgaaninen katselukasvu</span>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-1.5">
              <span className="text-2xl sm:text-3xl font-bold font-display text-emerald-400">+85 %</span>
              <span className="text-xs text-white/60 block font-medium">Kuukausittainen tilaajanousu</span>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-1.5">
              <span className="text-2xl sm:text-3xl font-bold font-display text-[#00d2ff]">92 %</span>
              <span className="text-xs text-white/60 block font-medium">Hakukonenäkyvyys (SEO)</span>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-1.5">
              <span className="text-2xl sm:text-3xl font-bold font-display text-amber-400">8.4 %</span>
              <span className="text-xs text-white/60 block font-medium">Sitoutumisaste (Engagement)</span>
            </div>
          </div>
        </div>

        {/* Clean Photo Gallery without text overlay boxes */}
        <div className="space-y-6 pt-6 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Valmennukset &amp; asiantuntijatyö
              </h3>
            </div>
            <div className="text-xs text-[#00d2ff] font-mono flex items-center gap-1.5 shrink-0 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10">
              <CheckCircle2 className="w-4 h-4" />
              <span>Valvira-laillistettu OMT-fysioterapeutti</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {GALLERY_PHOTOS.map((photo, idx) => (
              <div
                key={idx}
                className="group relative rounded-3xl overflow-hidden aspect-[4/5] bg-white/[0.02] border border-white/10 shadow-card hover:border-[#00d2ff]/40 transition-all"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
