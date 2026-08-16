import { CASE_STUDIES } from "@/data/case-studies";
import { Youtube, Instagram, ExternalLink, CheckCircle2, Video, Globe } from "lucide-react";

export default function ChannelReferences() {
  return (
    <section className="py-16 bg-[#000a18] border-b border-[#0C66B4]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00AEEF]/20 border border-[#00AEEF]/40 text-[#00AEEF] text-xs font-bold uppercase tracking-wider">
            <Video className="w-4 h-4" />
            <span>KÄYTÄNNÖN NÄYTÖT &amp; REFERENSSIT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-white tracking-wide">
            OPETA SOTEA <span className="text-[#00AEEF]">AIDOILLA REFERENSSIKANAVILLA</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Teoria ei yksin riitä terveydenhuollossa. Tiedottajanne Oy:n opit ja videostrategiat perustuvat aitoihin, satojatuhansia ihmisiä tavoittaneisiin suomen- ja englanninkielisiin videokanaviin.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASE_STUDIES.map((c) => (
            <div
              key={c.id}
              className="p-6 sm:p-8 rounded-3xl bg-[#000d21] border border-[#0C66B4]/50 shadow-panel space-y-6 hover:border-[#00AEEF]/60 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                
                {/* Top Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {c.platform === "YouTube" ? (
                      <Youtube className="w-5 h-5 text-red-500" />
                    ) : (
                      <Instagram className="w-5 h-5 text-pink-500" />
                    )}
                    <span className="text-xs font-mono text-[#00AEEF] font-bold">{c.handle}</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#0C66B4]/30 text-gray-300 text-[11px] font-semibold border border-[#0C66B4]/50">
                    {c.language}
                  </span>
                </div>

                {/* Title & Stats */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
                    {c.channelName}
                  </h3>
                  <p className="text-xs text-[#00AEEF] font-mono mt-1">
                    {c.subscribersOrFollowers} • {c.viewsOrReach}
                  </p>
                </div>

                <p className="text-sm text-gray-300 leading-relaxed">
                  {c.description}
                </p>

                {/* Key Learnings list */}
                <div className="p-4 rounded-2xl bg-[#000a18] border border-[#0C66B4]/30 space-y-2">
                  <div className="text-xs font-bold text-white uppercase tracking-wider">Mitä tästä oppii SOTE-ammattilaiselle:</div>
                  <ul className="space-y-1.5 text-xs text-gray-300">
                    {c.keyLearnings.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#00AEEF] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Action Link */}
              <div className="pt-4 border-t border-[#0C66B4]/30">
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-[#000a18] border border-[#0C66B4] text-white font-bold text-xs uppercase tracking-wider hover:border-[#00AEEF] hover:bg-[#0C66B4]/20 transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Avaa Kanava ({c.handle})</span>
                  <ExternalLink className="w-4 h-4 text-[#00AEEF] group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
