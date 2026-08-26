import { CASE_STUDIES } from "@/data/case-studies";
import { Youtube, Instagram, ExternalLink, CheckCircle2, Video } from "lucide-react";

export default function ChannelReferences() {
  return (
    <section className="py-20 md:py-28 bg-[#0c0c0c] border-b border-white/10 relative overflow-hidden">
      {/* Subtle Ambient Light */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[30%] left-[-10%] w-[500px] h-[450px] bg-gradient-to-r from-[#014489]/10 to-transparent blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00d2ff]/30 bg-[#00d2ff]/10 text-[#00d2ff] text-xs font-semibold tracking-wider">
            <Video className="w-4 h-4" />
            <span>Käytännön näytöt &amp; referenssit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Opeta SOTEa <span className="bg-gradient-to-r from-white via-[#A4F4FD] to-[#00d2ff] bg-clip-text text-transparent">aidoilla referenssikanavilla</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base leading-relaxed">
            Teoria ei yksin riitä terveydenhuollossa. Tiedottajanne Oy:n opit ja videostrategiat perustuvat aitoihin, satojatuhansia ihmisiä tavoittaneisiin suomen- ja englanninkielisiin videokanaviin.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASE_STUDIES.map((c) => (
            <div
              key={c.id}
              className="liquid-glass rounded-3xl p-8 sm:p-10 space-y-8 flex flex-col justify-between group"
            >
              <div className="space-y-5">
                
                {/* Top Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    {c.platform === "YouTube" ? (
                      <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                        <Youtube className="w-4 h-4" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400">
                        <Instagram className="w-4 h-4" />
                      </div>
                    )}
                    <span className="text-xs font-mono text-[#00d2ff] font-semibold">{c.handle}</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/[0.04] text-white/70 text-xs font-medium border border-white/10">
                    {c.language}
                  </span>
                </div>

                {/* Title & Stats */}
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {c.channelName}
                  </h3>
                  <p className="text-xs text-[#00d2ff] font-mono mt-1 font-semibold">
                    {c.subscribersOrFollowers} • {c.viewsOrReach}
                  </p>
                </div>

                <p className="text-sm text-white/60 leading-relaxed">
                  {c.description}
                </p>

                {/* Key Learnings list */}
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
                  <div className="text-xs font-semibold text-white uppercase tracking-wider">Mitä tästä oppii SOTE-ammattilaiselle:</div>
                  <ul className="space-y-2 text-xs sm:text-sm text-white/70">
                    {c.keyLearnings.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#00d2ff] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Action Link */}
              <div className="pt-4 border-t border-white/10">
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-5 rounded-2xl bg-white/[0.03] border border-white/15 text-white font-semibold text-xs sm:text-sm hover:border-[#00d2ff]/40 hover:bg-white/[0.06] transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <span>Avaa kanava ({c.handle})</span>
                  <ExternalLink className="w-4 h-4 text-[#00d2ff] group-hover/btn:translate-x-0.5 transition-transform" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
