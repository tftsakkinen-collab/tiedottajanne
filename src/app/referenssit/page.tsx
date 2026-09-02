import type { Metadata } from "next";
import Link from "next/link";
import ProofOfWork from "@/components/ProofOfWork";
import ChannelReferences from "@/components/ChannelReferences";
import LatestVideosAeo from "@/components/LatestVideosAeo";
import { Video, ArrowRight, Send, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Referenssikanavat & NÃ¤ytÃ¶t | Tiedottajanne Oy",
  description: "Yli 1,1 miljoonaa orgaanista katselukertaa YouTubessa. Tutustu Tiedottajanne Oy:n referenssikanaviin, videofeediin ja todistettuun dataan.",
  alternates: {
    canonical: "https://www.tiedottajanne.com/referenssit",
  },
  openGraph: {
    title: "Referenssikanavat & NÃ¤ytÃ¶t | Tiedottajanne Oy",
    description: "Yli 1,1 miljoonaa orgaanista katselukertaa YouTubessa. Tutustu Tiedottajanne Oy:n referenssikanaviin, videofeediin ja todistettuun dataan.",
    url: "https://www.tiedottajanne.com/referenssit",
  },
};

export default function ReferenssitPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Etusivu",
        "item": "https://www.tiedottajanne.com",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Referenssit",
        "item": "https://www.tiedottajanne.com/referenssit",
      },
    ],
  };

  return (
    <div className="py-12 md:py-20 min-h-screen text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Title & AEO Lead Paragraph */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00d2ff]/30 bg-[#00d2ff]/10 text-[#00d2ff] text-xs font-semibold uppercase tracking-wider">
            <Video className="w-4 h-4" />
            <span>KÃ¤ytÃ¤nnÃ¶n NÃ¤ytÃ¶t &amp; Proof of Work</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            SOTE-Videotuotannon Referenssit &amp; <span className="bg-gradient-to-r from-white via-[#A4F4FD] to-[#00d2ff] bg-clip-text text-transparent">Mitattavat Tulokset</span>
          </h1>
          {/* AEO Lead Paragraph: direct clear answer */}
          <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Tiedottajanne Oy:n perustaja Janne SÃ¤kkinen on rakentanut nollasta yli 1,1 miljoonan katselukerran ja 5 380+ tilaajan orgaaniset somekanavat tÃ¤ysin ilman maksettua mainontaa. Kanaviin kuuluvat @tiedottajanne, @ft_sakkinen, @pt_sakkinen sekÃ¤ @sakkinenjanne.
          </p>
        </div>

        {/* Live Metrics & Analytics Showcase */}
        <ProofOfWork />

        {/* Channel Details Grid */}
        <ChannelReferences />

        {/* AEO-Indexed Video Feed */}
        <LatestVideosAeo />

        {/* Bottom CTA */}
        <div className="liquid-glass rounded-3xl p-8 sm:p-12 border border-[#00d2ff]/30 text-center space-y-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Aito orgaaninen kasvu</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Haluatko saavuttaa vastaavia tuloksia omassa asiantuntijaviestinnÃ¤ssÃ¤si?
          </h2>
          <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto leading-relaxed">
            Tutustu palveluihimme tai varaa suoraan henkilÃ¶kohtainen Google Meet -tuntisparraus (200 â‚¬ / h).
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/palvelut"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold text-sm hover:bg-white/90 transition-all shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:scale-[1.02] active:scale-[0.98] min-h-[48px]"
            >
              <span>Katso Palvelut &amp; Hinnat</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/yhteystiedot"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 bg-white/5 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/40 transition-all min-h-[48px]"
            >
              <Send className="w-4 h-4 text-[#00d2ff]" />
              <span>Ota YhteyttÃ¤</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

