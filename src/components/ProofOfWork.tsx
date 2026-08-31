"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { 
  Youtube, 
  TrendingUp, 
  Award, 
  CheckCircle2, 
  ArrowUpRight,
  BarChart3,
  Video,
  Sparkles
} from "lucide-react";

interface SocialStats {
  youtubeFtSakkinen?: {
    subscribers?: string;
    views?: string;
    videos?: string;
  };
  youtubePtSakkinen?: {
    subscribers?: string;
    views?: string;
  };
  youtube?: {
    totalViews?: string;
    subscribers?: string;
  };
  tiktok?: {
    estimatedMonthlyViews?: string;
    viewsGrowth?: string;
    savesGrowth?: string;
  };
  combinedTotalViews?: string;
}

const GALLERY_PHOTOS = [
  {
    src: "/assets/Janne_0705_2022-2196.jpg",
    alt: "Janne Säkkinen — OMT-Fysioterapeutti ja Tiedottajanne Oy:n perustaja",
  },
  {
    src: "/assets/Janne_0705_2022-2226.jpg",
    alt: "Videotuotannon, käsikirjoituksen ja digitaalisen viestinnän suunnittelu",
  },
  {
    src: "/assets/DSC09790.jpg",
    alt: "Käytännön kliininen opetus ja SOTE-viestinnän koulutus",
  },
];

const DEFAULT_STATS: SocialStats = {
  youtubeFtSakkinen: {
    subscribers: "1 150+",
    views: "1 100 000+",
    videos: "350+",
  },
  youtubePtSakkinen: {
    subscribers: "Global",
    views: "150 000+",
  },
  tiktok: {
    estimatedMonthlyViews: "200 000+",
    viewsGrowth: "+210 %",
    savesGrowth: "+180 %",
  },
  combinedTotalViews: "1,5M+",
};

export default function ProofOfWork() {
  const [stats, setStats] = useState<SocialStats>(DEFAULT_STATS);

  useEffect(() => {
    fetch("/api/social-stats")
      .then((res) => res.json())
      .then((data) => {
        if (data && typeof data === "object") {
          setStats({
            youtubeFtSakkinen: {
              subscribers: data?.youtubeFtSakkinen?.subscribers ?? DEFAULT_STATS.youtubeFtSakkinen?.subscribers ?? "1 150+",
              views: data?.youtubeFtSakkinen?.views ?? data?.youtube?.totalViews ?? DEFAULT_STATS.youtubeFtSakkinen?.views ?? "1 100 000+",
              videos: data?.youtubeFtSakkinen?.videos ?? DEFAULT_STATS.youtubeFtSakkinen?.videos ?? "350+",
            },
            youtubePtSakkinen: {
              subscribers: data?.youtubePtSakkinen?.subscribers ?? DEFAULT_STATS.youtubePtSakkinen?.subscribers ?? "Global",
              views: data?.youtubePtSakkinen?.views ?? DEFAULT_STATS.youtubePtSakkinen?.views ?? "150 000+",
            },
            tiktok: {
              estimatedMonthlyViews: data?.tiktok?.estimatedMonthlyViews ?? DEFAULT_STATS.tiktok?.estimatedMonthlyViews ?? "200 000+",
              viewsGrowth: data?.tiktok?.viewsGrowth ?? DEFAULT_STATS.tiktok?.viewsGrowth ?? "+210 %",
              savesGrowth: data?.tiktok?.savesGrowth ?? DEFAULT_STATS.tiktok?.savesGrowth ?? "+180 %",
            },
            combinedTotalViews: data?.combinedTotalViews ?? DEFAULT_STATS.combinedTotalViews ?? "1,5M+",
          });
        }
      })
      .catch(() => {
        setStats(DEFAULT_STATS);
      });
  }, []);

  return (
    <section className="py-12 md:py-16 border-b border-[var(--border)] relative overflow-hidden">
      {/* Ambient Light */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[10%] left-[-15%] w-[600px] h-[500px] bg-[var(--accent)]/10 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-semibold tracking-wider">
            <TrendingUp className="w-4 h-4" />
            <span>Reaaliaikaiset näytöt &amp; Proof of Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--text)] leading-tight font-display">
            Data puhuu puolestaan — <span className="text-gradient-cyan">orgaaniset katselumäärät &amp; kasvuprosentit</span>
          </h2>
          <p className="text-[var(--muted)] text-sm sm:text-base leading-relaxed">
            Ei arvailua. Kaikki Tiedottajanne Oy:n videostrategiat pohjautuvat omien kanaviemme mittavaan, todennettuun orgaaniseen näyttödataan.
          </p>
        </div>

        {/* 3 Main Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Main YouTube Card */}
          <div className="glass rounded-3xl p-8 space-y-6 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                    <Youtube className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-[var(--text)] tracking-wide">YouTube: @ft_sakkinen</span>
                </div>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30 text-[var(--accent)] text-xs font-semibold">
                  <Award className="w-3.5 h-3.5" />
                  Pääkanava (FI)
                </span>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text)] font-display">
                  {stats?.youtubeFtSakkinen?.views ?? stats?.youtube?.totalViews ?? "1 100 000+"}
                </div>
                <div className="text-xs text-[var(--muted)] mt-1 font-medium">Katselukertaa yhteensä</div>
              </div>
            </div>

            <div className="pt-4 border-t border-[var(--border)] space-y-2.5 text-xs text-[var(--muted)]">
              <div className="flex items-center justify-between">
                <span>Tilaajia:</span>
                <span className="font-semibold text-[var(--text)]">{stats?.youtubeFtSakkinen?.subscribers ?? stats?.youtube?.subscribers ?? "1 150+"}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Julkaistuja videoita:</span>
                <span className="font-semibold text-[var(--text)]">{stats?.youtubeFtSakkinen?.videos ?? "350+"}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Kohderyhmä:</span>
                <span className="font-semibold text-[var(--accent)]">Suomi (SOTE &amp; Fysioterapia)</span>
              </div>
            </div>
          </div>

          {/* Global YouTube Card */}
          <div className="glass rounded-3xl p-8 space-y-6 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                    <Youtube className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-[var(--text)] tracking-wide">YouTube: @pt_sakkinen</span>
                </div>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--text)] text-xs font-semibold">
                  Global (EN)
                </span>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text)] font-display">
                  {stats?.youtubePtSakkinen?.views ?? "150 000+"}
                </div>
                <div className="text-xs text-[var(--muted)] mt-1 font-medium">Katselukertaa kansainvälisesti</div>
              </div>
            </div>

            <div className="pt-4 border-t border-[var(--border)] space-y-2.5 text-xs text-[var(--muted)]">
              <div className="flex items-center justify-between">
                <span>Tilaajakunta:</span>
                <span className="font-semibold text-[var(--text)]">Kansainvälinen</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Kieli:</span>
                <span className="font-semibold text-[var(--text)]">Englanti (EN)</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Fokus:</span>
                <span className="font-semibold text-[var(--accent)]">Global Health &amp; Rehab</span>
              </div>
            </div>
          </div>

          {/* TikTok & Shorts Stats */}
          <div className="glass rounded-3xl p-8 space-y-6 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)] group-hover:scale-110 transition-transform">
                    <Video className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-[var(--text)] tracking-wide">TikTok &amp; Shorts</span>
                </div>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--success)]/10 border border-[var(--success)]/30 text-[var(--success)] text-xs font-semibold">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                  {stats?.tiktok?.viewsGrowth ?? "+210 %"}
                </span>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text)] font-display">
                  {stats?.tiktok?.estimatedMonthlyViews ?? "200 000+"}
                </div>
                <div className="text-xs text-[var(--muted)] mt-1 font-medium">Katselukertaa kuukaudessa</div>
              </div>
            </div>

            <div className="pt-4 border-t border-[var(--border)] space-y-2.5 text-xs text-[var(--muted)]">
              <div className="flex items-center justify-between">
                <span>Tallennukset &amp; jakelut:</span>
                <span className="font-semibold text-[var(--success)]">{stats?.tiktok?.savesGrowth ?? "+180 %"}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Kanavat:</span>
                <span className="font-semibold text-[var(--accent)]">@sakkinenjanne &amp; @ptsakkinen</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Fokus:</span>
                <span className="font-semibold text-[var(--text)]">Lyhytvideot &amp; Ergonomia</span>
              </div>
            </div>
          </div>

        </div>

        {/* vidIQ Analytics Verified Showcase Card */}
        <div className="glass rounded-3xl p-8 sm:p-10 border border-[var(--accent)]/20 space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border)] pb-6">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[var(--surface-elevated)] border border-[var(--accent)]/30 text-[var(--accent)] flex items-center justify-center">
                <BarChart3 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold text-[var(--accent)] uppercase tracking-wider block">vidIQ &amp; YouTube Studio Analytiikka</span>
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--text)] tracking-tight font-display">Somen orgaaninen kasvu &amp; mitattavat tulokset</h3>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[var(--success)]/10 border border-[var(--success)]/30 text-[var(--success)] text-xs font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              Säännöllisesti todennettu data
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)] space-y-1.5">
              <span className="text-2xl sm:text-3xl font-bold font-display text-[var(--success)]">+145 %</span>
              <span className="text-xs text-[var(--muted)] block font-medium">Orgaaninen katselukasvu</span>
            </div>
            <div className="p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)] space-y-1.5">
              <span className="text-2xl sm:text-3xl font-bold font-display text-[var(--success)]">+85 %</span>
              <span className="text-xs text-[var(--muted)] block font-medium">Kuukausittainen tilaajanousu</span>
            </div>
            <div className="p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)] space-y-1.5">
              <span className="text-2xl sm:text-3xl font-bold font-display text-[var(--accent)]">92 %</span>
              <span className="text-xs text-[var(--muted)] block font-medium">Hakukonenäkyvyys (SEO)</span>
            </div>
            <div className="p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)] space-y-1.5">
              <span className="text-2xl sm:text-3xl font-bold font-display text-[var(--warning)]">8.4 %</span>
              <span className="text-xs text-[var(--muted)] block font-medium">Sitoutumisaste (Engagement)</span>
            </div>
          </div>
        </div>

        {/* Clean Photo Gallery */}
        <div className="space-y-6 pt-6 border-t border-[var(--border)]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold text-[var(--text)] tracking-tight font-display">
                Valmennukset &amp; asiantuntijatyö
              </h3>
            </div>
            <div className="text-xs text-[var(--accent)] font-semibold flex items-center gap-1.5 shrink-0 px-3 py-1.5 rounded-full bg-[var(--surface)] border border-[var(--border)]">
              <CheckCircle2 className="w-4 h-4" />
              <span>Valvira-laillistettu OMT-fysioterapeutti</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {GALLERY_PHOTOS.map((photo, idx) => (
              <div
                key={idx}
                className="group relative rounded-3xl overflow-hidden aspect-[4/5] bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)]/40 transition-all shadow-sm"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
