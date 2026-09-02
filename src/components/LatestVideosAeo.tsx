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
        if (Array.isArray(data?.youtube?.channels)) {
          const tCh = data.youtube.channels.find((c: ChannelData) => c?.handle === "@tiedottajanne");
          const ftCh = data.youtube.channels.find((c: ChannelData) => c?.handle === "@ft_sakkinen");

          if (Array.isArray(tCh?.latestVideos)) setTiedottajanneVideos(tCh.latestVideos);
          if (Array.isArray(ftCh?.latestVideos)) setFtSakkinenVideos(ftCh.latestVideos);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  // Combine top latest videos from both channels
  const allLatestVideos = [...(Array.isArray(tiedottajanneVideos) ? tiedottajanneVideos : []), ...(Array.isArray(ftSakkinenVideos) ? ftSakkinenVideos : [])].slice(0, 6);

  // Generate dynamic Schema.org VideoObject JSON-LD for AI & Search indexing
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": (Array.isArray(allLatestVideos) ? allLatestVideos : []).map((vid) => ({
      "@type": "VideoObject",
      "name": vid.title,
      "description": `Janne SÃ¤kkinen (Tiedottajanne Oy) SOTE-alan videotuotanto & asiantuntijaviestintÃ¤: ${vid.title}`,
      "thumbnailUrl": vid.thumbnail,
      "uploadDate": vid.publishedAt,
      "contentUrl": vid.url,
      "embedUrl": `https://www.youtube.com/embed/${vid.id}`,
      "author": {
        "@type": "Person",
        "name": "Janne SÃ¤kkinen",
        "jobTitle": "OMT-Fysioterapeutti, SOTE-Videotuottaja & AI-Konsultti",
        "worksFor": {
          "@type": "Organization",
          "name": "Tiedottajanne Oy",
          "sameAs": "https://www.tiedottajanne.com"
        }
      },
      "publisher": {
        "@type": "Organization",
        "name": "Tiedottajanne Oy",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.tiedottajanne.com/assets/A6707373.jpg"
        }
      },
      "keywords": [
        "SOTE-sisÃ¤llÃ¶ntuottaja",
        "SOTE-videoviestintÃ¤",
        "SOTE-videokouluttaja",
        "Janne SÃ¤kkinen",
        "Tiedottajanne Oy",
        "Fysioterapia videosisÃ¤ltÃ¶",
        "AEO hakukoneoptimointi SOTE"
      ]
    }))
  };

  return (
    <section className="py-12 md:py-16 border-b border-[var(--border)] relative overflow-hidden">
      {/* Dynamic Schema.org JSON-LD Injection for Google & AI (ChatGPT/Perplexity/Gemini) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[var(--border)] pb-8">
          <div className="space-y-3.5">
            <div className="pill tracking-wider uppercase">
              <Youtube className="w-4 h-4 text-[var(--danger)]" />
              <span>Automaattisesti Indeksoituva Videofeed</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text)] font-display">
              Uusimmat videot &amp; <span className="text-gradient-cyan">AEO-indeksoidut jaksot</span>
            </h2>
            <p className="text-[var(--muted)] text-sm max-w-2xl leading-relaxed">
              Jokainen @tiedottajanne ja @ft_sakkinen kanavalle julkaistu uusi video poimitaan automaattisesti sivustolle ja indeksoidaan tekoÃ¤lyhakukoneille (ChatGPT, Perplexity, Gemini &amp; Google).
            </p>
          </div>

          <a
            href="https://www.youtube.com/@tiedottajanne"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary px-5 py-3 text-xs sm:text-sm shrink-0 shadow-md"
          >
            <Youtube className="w-4 h-4 text-[var(--accent-ink)]" />
            <span>Tilaa @tiedottajanne YouTubessa</span>
            <ArrowRight className="w-4 h-4 text-[var(--accent-ink)]" />
          </a>
        </div>

        {/* Video Cards Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-72 rounded-3xl bg-[var(--surface)] animate-pulse border border-[var(--border)]" />
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
                className="glass rounded-3xl overflow-hidden flex flex-col justify-between group"
              >
                <div className="relative aspect-video w-full bg-black overflow-hidden">
                  <Image
                    src={vid.thumbnail || "/assets/Janne_0705_2022-2196.jpg"}
                    alt={vid.title || "Tiedottajanne Oy video"}
                    fill
                    unoptimized
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 rounded-2xl bg-red-600/90 backdrop-blur-md text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-all">
                      <Play className="w-5 h-5 fill-white ml-0.5" />
                    </div>
                  </div>
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-white text-[10px] font-semibold border border-white/20">
                    AEO VERIFIED
                  </span>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-sm sm:text-base font-bold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors line-clamp-2 leading-snug font-display">
                      {vid.title}
                    </h3>
                  </div>

                  <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between text-xs text-[var(--muted)]">
                    <span className="flex items-center gap-1.5 text-[var(--success)] text-xs font-semibold">
                      <CheckCircle2 className="w-4 h-4" />
                      Indeksoitu tekoÃ¤lylle
                    </span>
                    <span className="text-[var(--accent)] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
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

