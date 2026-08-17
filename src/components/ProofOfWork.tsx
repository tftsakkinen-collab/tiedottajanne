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
    <section className="py-16 bg-[#000a18] border-b border-[#0C66B4]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00AEEF]/20 border border-[#00AEEF]/40 text-[#00AEEF] text-xs font-bold tracking-wider">
            <TrendingUp className="w-4 h-4" />
            <span>Reaaliaikaiset näytöt &amp; Proof of Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-white tracking-normal leading-[1.2]">
            Data puhuu puolestaan — <span className="text-[#00AEEF]">orgaaniset katselumäärät &amp; kasvuprosentit</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Katso reaaliaikaiset katselutilastot, kasvuprosentit ja videonäytöt YouTubesta, Instagramista ja TikTokista. Tiedottajanne Oy:n opit perustuvat aitoihin, mitattaviin tuloksiin.
          </p>
        </div>

        {/* Live Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* YouTube Stats */}
          <div className="p-6 rounded-3xl bg-[#000d21] border border-[#0C66B4]/50 space-y-4 shadow-panel hover:border-[#00AEEF]/60 transition-all relative overflow-hidden group">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Youtube className="w-6 h-6 text-red-500" />
                <span className="text-xs font-mono font-bold text-white">YouTube Metrics</span>
              </div>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 text-[11px] font-mono font-bold">
                <ArrowUpRight className="w-3 h-3" />
                {stats?.youtube.viewsGrowth || "+145 %"}
              </span>
            </div>
            <div>
              <div className="text-3xl font-display font-bold text-white">
                {stats?.youtube.totalViews || "1 150 000+"}
              </div>
              <div className="text-xs text-gray-400 mt-0.5">Orgaanista katselukertaa yhteensä</div>
            </div>
            <div className="pt-2 border-t border-[#0C66B4]/30 space-y-2 text-xs text-gray-300">
              <div className="flex items-center justify-between">
                <span>Tilaajia yhteensä:</span>
                <span className="font-bold text-[#00AEEF] flex items-center gap-1">
                  {stats?.youtube.subscribers || "5 380+"}
                  <span className="text-[10px] text-emerald-400 font-mono">({stats?.youtube.subscribersGrowth || "+85 %"})</span>
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Hakukonenäkyvyys (SEO):</span>
                <span className="font-bold text-emerald-400">{stats?.youtube.searchSeoShare || "92 %"}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Sitoutumisaste:</span>
                <span className="font-bold text-white">{stats?.youtube.engagementRate || "8.4 %"}</span>
              </div>
            </div>
          </div>

          {/* Instagram Stats */}
          <div className="p-6 rounded-3xl bg-[#000d21] border border-[#0C66B4]/50 space-y-4 shadow-panel hover:border-[#00AEEF]/60 transition-all relative overflow-hidden group">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Instagram className="w-6 h-6 text-pink-500" />
                <span className="text-xs font-mono font-bold text-white">Instagram Reach</span>
              </div>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 text-[11px] font-mono font-bold">
                <ArrowUpRight className="w-3 h-3" />
                {stats?.instagram.reachGrowth || "+120 %"}
              </span>
            </div>
            <div>
              <div className="text-3xl font-display font-bold text-white">
                {stats?.instagram.estimatedMonthlyReach || "150 000+"}
              </div>
              <div className="text-xs text-gray-400 mt-0.5">Kuukausittainen orgaaninen tavoittavuus</div>
            </div>
            <div className="pt-2 border-t border-[#0C66B4]/30 space-y-2 text-xs text-gray-300">
              <div className="flex items-center justify-between">
                <span>Profiilivierailujen kasvu:</span>
                <span className="font-bold text-emerald-400">{stats?.instagram.profileVisitsGrowth || "+65 %"}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Tilit:</span>
                <span className="font-bold text-[#00AEEF]">@sakkinenjanne &amp; @ptsakkinen</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Formaatit:</span>
                <span className="font-bold text-white">Reels &amp; Mikro-oppaat</span>
              </div>
            </div>
          </div>

          {/* TikTok & Shorts Stats */}
          <div className="p-6 rounded-3xl bg-[#000d21] border border-[#0C66B4]/50 space-y-4 shadow-panel hover:border-[#00AEEF]/60 transition-all relative overflow-hidden group">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Video className="w-6 h-6 text-cyan-400" />
                <span className="text-xs font-mono font-bold text-white">TikTok &amp; Shorts</span>
              </div>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 text-[11px] font-mono font-bold">
                <ArrowUpRight className="w-3 h-3" />
                {stats?.tiktok.viewsGrowth || "+210 %"}
              </span>
            </div>
            <div>
              <div className="text-3xl font-display font-bold text-white">
                {stats?.tiktok.estimatedMonthlyViews || "200 000+"}
              </div>
              <div className="text-xs text-gray-400 mt-0.5">Katselukertaa kuukaudessa</div>
            </div>
            <div className="pt-2 border-t border-[#0C66B4]/30 space-y-2 text-xs text-gray-300">
              <div className="flex items-center justify-between">
                <span>Tallennukset &amp; jakelut:</span>
                <span className="font-bold text-emerald-400">{stats?.tiktok.savesGrowth || "+180 %"}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Kanavat:</span>
                <span className="font-bold text-[#00AEEF]">@sakkinenjanne &amp; @ptsakkinen</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Fokus:</span>
                <span className="font-bold text-white">Lyhytvideot &amp; Ergonomia</span>
              </div>
            </div>
          </div>

        </div>

        {/* vidIQ Analytics Verified Showcase Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#000d21] via-[#014489]/30 to-[#000d21] border border-[#00AEEF]/50 shadow-glow space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#0C66B4]/40 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00AEEF]/20 text-[#00AEEF] flex items-center justify-center">
                <BarChart3 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#00AEEF] uppercase tracking-wider block">vidIQ &amp; YouTube Studio Analytiikka</span>
                <h3 className="text-lg sm:text-xl font-bold text-white">Somen orgaaninen kasvu &amp; mitattavat tulokset</h3>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              Säännöllisesti todennettu data
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 rounded-2xl bg-[#000814]/70 border border-[#0C66B4]/40 space-y-1">
              <span className="text-2xl sm:text-3xl font-bold font-display text-emerald-400">+145 %</span>
              <span className="text-xs text-gray-300 block font-medium">Orgaaninen katselukasvu</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#000814]/70 border border-[#0C66B4]/40 space-y-1">
              <span className="text-2xl sm:text-3xl font-bold font-display text-emerald-400">+85 %</span>
              <span className="text-xs text-gray-300 block font-medium">Kuukausittainen tilaajanousu</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#000814]/70 border border-[#0C66B4]/40 space-y-1">
              <span className="text-2xl sm:text-3xl font-bold font-display text-[#00AEEF]">92 %</span>
              <span className="text-xs text-gray-300 block font-medium">Hakukonenäkyvyys (SEO)</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#000814]/70 border border-[#0C66B4]/40 space-y-1">
              <span className="text-2xl sm:text-3xl font-bold font-display text-amber-400">8.4 %</span>
              <span className="text-xs text-gray-300 block font-medium">Sitoutumisaste (Engagement)</span>
            </div>
          </div>
        </div>

        {/* Clean Photo Gallery without text overlay boxes */}
        <div className="space-y-6 pt-6 border-t border-[#0C66B4]/30">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold text-white tracking-wide">
                Valmennukset &amp; asiantuntijatyö
              </h3>
            </div>
            <div className="text-xs text-[#00AEEF] font-mono flex items-center gap-1.5 shrink-0">
              <CheckCircle2 className="w-4 h-4" />
              <span>Valvira-laillistettu OMT-fysioterapeutti</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {GALLERY_PHOTOS.map((photo, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#000d21] border border-[#0C66B4]/40 shadow-panel hover:border-[#00AEEF]/60 transition-all"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
