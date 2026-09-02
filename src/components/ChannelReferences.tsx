import { CASE_STUDIES } from "@/data/case-studies";
import { Youtube, ExternalLink, CheckCircle2, Video } from "lucide-react";

export default function ChannelReferences() {
  return (
    <section className="py-12 md:py-16 border-b border-[var(--border)] relative overflow-hidden">
      {/* Ambient Light */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[30%] left-[-10%] w-[500px] h-[450px] bg-[var(--accent)]/10 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-semibold tracking-wider">
            <Video className="w-4 h-4" />
            <span>Käytännön näytöt &amp; referenssit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--text)] leading-tight font-display">
            Rakenna omaa asiantuntijabrändiäsi <span className="text-gradient-cyan">testatuilla opeilla</span>
          </h2>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
            Vahva ammatillinen osaaminen herää eloon vaikuttavalla videoviestinnällä. Tiedottajanne Oy:n opit ja videostrategiat antavat sinulle suorat työkalut oman kanavasi ja näkyvyytesi rakentamiseen.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASE_STUDIES.map((c) => (
            <div
              key={c.id}
              className="liquid-glass rounded-3xl p-6 sm:p-8 space-y-6 flex flex-col justify-between border border-white/10 hover:border-[#00d2ff]/40 shadow-lg transition-all group"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between gap-4 border-b border-[var(--border)] pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 flex items-center justify-center">
                      <Youtube className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[var(--text)] text-base font-display">{c.channelName}</h3>
                      <span className="text-xs text-[var(--accent)] font-semibold">{c.handle}</span>
                    </div>
                  </div>
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--text)] hover:text-[var(--accent)] text-xs font-semibold transition-all min-h-[44px]"
                  >
                    <span>Avaa kanava</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <p className="text-sm text-slate-200 leading-relaxed font-normal">
                  {c.description}
                </p>

                <div className="p-4 rounded-2xl bg-[var(--surface)] border border-[var(--border)] space-y-2">
                  <span className="text-xs font-semibold text-[var(--accent)] uppercase tracking-wider block">
                    Miten voit soveltaa tätä omaan asiantuntijabrändiisi:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-200">
                    {c.keyLearnings.map((t, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between text-xs text-slate-300">
                <span>Saavutettu näkyvyys:</span>
                <span className="font-bold text-sm text-[var(--accent)] font-display">{c.viewsOrReach}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
