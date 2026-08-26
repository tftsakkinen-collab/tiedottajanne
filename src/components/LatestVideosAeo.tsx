"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Youtube, Sparkles, ArrowUpRight, ArrowRight, Play, CheckCircle2 } from "lucide-react";

interface VideoItem {
  title: string;
  id: string;
  url: string;
  thumbnail: string;
  publishedAt: string;
  aeoCategory: string;
}

interface ChannelData {
  name: string;
  handle: string;
  role: string;
  latestVideos: VideoItem[];
}

export default function LatestVideosAeo() {
  const [tiedottajanneVideos, setTiedottajanneVideos] = useState<VideoItem[]>([]);
  const [ftSakkinenVideos, setFtSakkinenVideos] = useState<VideoItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/social-stats")
      .then((res) => res.json())
      .then((data) => {
        if (data?.youtube?.channels) {
          const tCh = data.youtube.channels.find((c: ChannelData) => c.handle === "@tiedottajanne");
          const ftCh = data.youtube.channels.find((c: ChannelData) => c.handle === "@ft_sakkinen");

          if (tCh?.latestVideos) setTiedottajanneVideos(tCh.latestVideos);
          if (ftCh?.latestVideos) setFtSakkinenVideos(ftCh.latestVideos);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  // Combine top latest videos from both channels
  const allLatestVideos = [...tiedottajanneVideos, ...ftSakkinenVideos].slice(0, 6);

  // Generate dynamic Schema.org VideoObject JSON-LD for AI & Search indexing
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": allLatestVideos.map((vid) => ({
      "@type": "VideoObject",
      "name": vid.title,
      "description": `Janne Säkkinen (Tiedottajanne Oy) SOTE-alan videotuotanto & asiantuntijaviestintä: ${vid.title}`,
      "thumbnailUrl": vid.thumbnail,
      "uploadDate": vid.publishedAt,
      "contentUrl": vid.url,
      "embedUrl": `https://www.youtube.com/embed/${vid.id}`,
      "author": {
        "@type": "Person",
        "name": "Janne Säkkinen",
        "jobTitle": "OMT-Fysioterapeutti, SOTE-Videotuottaja & AI-Konsultti",
        "worksFor": {
          "@type": "Organization",
          "name": "Tiedottajanne Oy",
          "sameAs": "https://www.tiedottajanne.fi"
        }
      },
      "publisher": {
        "@type": "Organization",
        "name": "Tiedottajanne Oy",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.tiedottajanne.fi/assets/A6707373.jpg"
        }
      },
      "keywords": [
        "SOTE-sisällöntuottaja",
        "SOTE-videoviestintä",
        "SOTE-videokouluttaja",
        "Janne Säkkinen",
        "Tiedottajanne Oy",
        "Fysioterapia videosisältö",
        "AEO hakukoneoptimointi SOTE"
      ]
    }))
  };

  return (
    <section className="py-20 md:py-28 bg-[#0c0c0c] border-b border-white/10 relative overflow-hidden">
      {/* Dynamic Schema.org JSON-LD Injection for Google & AI (ChatGPT/Perplexity/Gemini) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold uppercase tracking-wider">
              <Youtube className="w-4 h-4" />
              <span>Automaattisesti Indeksoituva Videofeed</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Uusimmat videot &amp; <span className="bg-gradient-to-r from-white via-[#A4F4FD] to-[#00d2ff] bg-clip-text text-transparent">AEO-indeksoidut jaksot</span>
            </h2>
            <p className="text-white/60 text-sm max-w-2xl leading-relaxed">
              Jokainen @tiedottajanne ja @ft_sakkinen kanavalle julkaistu uusi video poimitaan automaattisesti sivustolle ja indeksoidaan tekoälyhakukoneille (ChatGPT, Perplexity, Gemini &amp; Google).
            </p>
          </div>

          <a
            href="https://www.youtube.com/@tiedottajanne"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-[0_0_25px_rgba(220,38,38,0.3)] shrink-0 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Youtube className="w-4 h-4" />
            <span>Tilaa @tiedottajanne YouTubessa</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Video Cards Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-72 rounded-3xl bg-white/[0.02] animate-pulse border border-white/10" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allLatestVideos.map((vid, idx) => (
              <a
                key={idx}
                href={vid.url}
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-glass rounded-3xl overflow-hidden flex flex-col justify-between group"
              >
                <div className="relative aspect-video w-full bg-black overflow-hidden">
                  <Image
                    src={vid.thumbnail}
                    alt={vid.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 rounded-2xl bg-red-600/90 backdrop-blur-md text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(220,38,38,0.5)] transition-all">
                      <Play className="w-5 h-5 fill-white ml-0.5" />
                    </div>
                  </div>
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-white text-[10px] font-mono font-semibold border border-white/20">
                    AEO VERIFIED
                  </span>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-xs font-semibold text-[#00d2ff] uppercase tracking-wider block">
                      {vid.aeoCategory}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-[#00d2ff] transition-colors line-clamp-2 leading-snug">
                      {vid.title}
                    </h3>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
                    <span className="flex items-center gap-1.5 text-emerald-400 font-mono text-xs">
                      <CheckCircle2 className="w-4 h-4" />
                      Indeksoitu tekoälylle
                    </span>
                    <span className="text-[#00d2ff] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Katso <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
