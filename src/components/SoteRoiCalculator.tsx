"use client";

import { useState } from "react";
import { Calculator, Sparkles, TrendingUp, CheckCircle2, Send, ShieldCheck, HelpCircle, ArrowRight } from "lucide-react";

export default function SoteRoiCalculator() {
  const [monthlyViews, setMonthlyViews] = useState(25000);
  const [activeTab, setActiveTab] = useState<"roi" | "quiz" | "newsletter">("roi");

  // Quiz state
  const [q1, setQ1] = useState<boolean | null>(null);
  const [q2, setQ2] = useState<boolean | null>(null);
  const [q3, setQ3] = useState<boolean | null>(null);
  const [q4, setQ4] = useState<boolean | null>(null);

  // Email form state
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("SOTE-yritys / Klinikka");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // ROI calculations
  const cpmEquivalent = 12; // 12€ / 1000 views in healthcare Google/Meta ads
  const adSavings = Math.round((monthlyViews / 1000) * cpmEquivalent);
  const annualSavings = adSavings * 12;
  const estimatedLeads = Math.round(monthlyViews * 0.008); // 0.8% conversion

  // Quiz Score Calculation
  const calculateScore = () => {
    let score = 20;
    if (q1 === true) score += 20;
    if (q2 === true) score += 20;
    if (q3 === true) score += 20;
    if (q4 === true) score += 20;
    return score;
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          role,
          message,
          locale: "fi",
          type: "tiedottajanneNewsletterOrCollab",
        }),
      });

      if (res.ok) {
        setIsSubmitted(true);
      } else {
        setIsSubmitted(true);
      }
    } catch {
      setIsSubmitted(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="sote-roi-ja-postituslista" className="py-12 md:py-16 bg-[var(--bg)] border-b border-[var(--border)] relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[var(--accent)]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="pill tracking-wider uppercase">
            <Sparkles className="w-4 h-4 text-[var(--accent)]" />
            <span>SOTE-Viestinnän Laskuri, Testi &amp; Yhteistyö</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--text)] leading-tight font-display">
            Laske orgaanisen videon <span className="text-gradient-cyan">säästöt &amp; liity verkostoon</span>
          </h2>
          <p className="text-[var(--muted)] text-sm sm:text-base leading-relaxed">
            Katso kuinka paljon orgaaninen videoviestintä säästää sote-yrityksesi mainosbudjetista, testaa nykytilasi ja tilaa SOTE-viestinnän ilmaiset teho-ohjeet sähköpostiisi!
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => setActiveTab("roi")}
            className={`btn text-xs sm:text-sm ${
              activeTab === "roi"
                ? "btn--primary"
                : "btn--outline"
            }`}
          >
            <Calculator className="w-4 h-4" />
            <span>1. SOTE-Somen ROI-Laskuri</span>
          </button>

          <button
            onClick={() => setActiveTab("quiz")}
            className={`btn text-xs sm:text-sm ${
              activeTab === "quiz"
                ? "btn--primary"
                : "btn--outline"
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>2. Somen Nykytilan Testi</span>
          </button>

          <button
            onClick={() => setActiveTab("newsletter")}
            className={`btn text-xs sm:text-sm ${
              activeTab === "newsletter"
                ? "btn--primary"
                : "btn--outline"
            }`}
          >
            <Send className="w-4 h-4" />
            <span>3. Liity Sähköpostilistalle / Yhteistyö</span>
          </button>
        </div>

        {/* Tab 1: ROI Calculator */}
        {activeTab === "roi" && (
          <div className="liquid-glass rounded-3xl p-6 sm:p-10 space-y-8 max-w-4xl mx-auto border border-white/10 shadow-lg">
            <div className="space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <label className="text-xs sm:text-sm font-semibold text-slate-300 uppercase tracking-wider">
                  Arvioitu kuukausittainen orgaaninen katselumäärä:
                </label>
                <span className="text-2xl sm:text-3xl font-bold font-display text-[#00d2ff]">
                  {monthlyViews.toLocaleString("fi-FI")} katselua / kk
                </span>
              </div>

              <input
                type="range"
                min={5000}
                max={200000}
                step={5000}
                value={monthlyViews}
                onChange={(e) => setMonthlyViews(Number(e.target.value))}
                className="w-full h-3 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#00d2ff] border border-white/15 min-h-[44px] touch-pan-x"
              />
              <div className="flex justify-between text-[11px] sm:text-xs text-slate-300 font-medium">
                <span>5 000 katselua</span>
                <span>50 000 katselua</span>
                <span>200 000+ (Pääkanavat)</span>
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10">
              <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1.5 text-center">
                <span className="text-xs uppercase font-medium text-slate-300 block">Vastaava Ads-arvo / kk:</span>
                <div className="text-3xl font-bold font-display text-emerald-400">{adSavings.toLocaleString("fi-FI")} €</div>
                <span className="text-[11px] text-slate-300 block">Arvo, jonka luot suoraan omalla orgaanisella näkyvyydelläsi ja brändipääomallasi</span>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1.5 text-center">
                <span className="text-xs uppercase font-medium text-slate-300 block">Vuosittainen mainossäästö:</span>
                <div className="text-3xl font-bold font-display text-emerald-400">{annualSavings.toLocaleString("fi-FI")} €</div>
                <span className="text-[11px] text-slate-300 block">Säästö 12 kuukauden orgaanisella näkyvyydellä</span>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1.5 text-center">
                <span className="text-xs uppercase font-medium text-slate-300 block">Potentiaaliset kyselyt / kk:</span>
                <div className="text-3xl font-bold font-display text-[#00d2ff]">~{estimatedLeads} kpl</div>
                <span className="text-[11px] text-slate-300 block">Aitoja sote-potilas- ja asiakaskyselyitä</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 text-xs sm:text-sm text-slate-200 flex items-start sm:items-center gap-3.5">
              <ShieldCheck className="w-5 h-5 text-[#00d2ff] shrink-0 mt-0.5 sm:mt-0" />
              <span>
                <strong className="text-white">Tiedottajanne Oy:n periaate:</strong> Orgaaninen laatu ja AEO-hakukonenäkyvyys (YouTube &amp; Google) rakentavat pysyvää luottamusta ja omaa asiantuntijabrändiä, joka kasvaa ja kantaa vuodesta toiseen kestävällä pohjalla.
              </span>
            </div>
          </div>
        )}

        {/* Tab 2: SOTE Quiz */}
        {activeTab === "quiz" && (
          <div className="liquid-glass rounded-3xl p-6 sm:p-10 space-y-8 max-w-3xl mx-auto border border-white/10 shadow-lg">
            <div className="space-y-2 text-center">
              <h3 className="text-2xl font-bold text-white tracking-tight font-display">SOTE-somen nykytilan 4 kysymyksen testi</h3>
              <p className="text-xs sm:text-sm text-slate-300">Vastaa rehellisesti alla oleviin 4 kysymykseen nähdäksesi klinikkasi tai asiantuntijuutesi valmiuden.</p>
            </div>

            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
                <p className="text-sm font-semibold text-white">1. Tuottaako klinikkasi / yrityksesi säännöllisesti opetus- tai asiantuntijavideoita YouTubessa tai somessa?</p>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQ1(true)}
                    className={`btn btn--sm ${q1 === true ? "btn--primary" : "btn--outline"}`}
                  >
                    Kyllä (+20 p)
                  </button>
                  <button
                    onClick={() => setQ1(false)}
                    className={`btn btn--sm ${q1 === false ? "bg-white/20 text-white border-white/40 font-semibold" : "btn--outline"}`}
                  >
                    Ei vielä
                  </button>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
                <p className="text-sm font-semibold text-white">2. Hyödynnättekö tekoälyä (ChatGPT / Perplexity) potilasohjeissa, tekstin stilisoinnissa ja kuvauskentissä?</p>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQ2(true)}
                    className={`btn btn--sm ${q2 === true ? "btn--primary" : "btn--outline"}`}
                  >
                    Kyllä (+20 p)
                  </button>
                  <button
                    onClick={() => setQ2(false)}
                    className={`btn btn--sm ${q2 === false ? "bg-white/20 text-white border-white/40 font-semibold" : "btn--outline"}`}
                  >
                    Ei vielä
                  </button>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
                <p className="text-sm font-semibold text-white">3. Ovatko videonne ja artikkelinne haku- ja AEO-optimoituja (Google &amp; YouTube Search)?</p>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQ3(true)}
                    className={`btn btn--sm ${q3 === true ? "btn--primary" : "btn--outline"}`}
                  >
                    Kyllä (+20 p)
                  </button>
                  <button
                    onClick={() => setQ3(false)}
                    className={`btn btn--sm ${q3 === false ? "bg-white/20 text-white border-white/40 font-semibold" : "btn--outline"}`}
                  >
                    Ei vielä
                  </button>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
                <p className="text-sm font-semibold text-white">4. Onko videotuotannon Valvira-yhteensopivuus ja eettiset vastuuvapauslausekkeet tarkastettu?</p>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQ4(true)}
                    className={`btn btn--sm ${q4 === true ? "btn--primary" : "btn--outline"}`}
                  >
                    Kyllä (+20 p)
                  </button>
                  <button
                    onClick={() => setQ4(false)}
                    className={`btn btn--sm ${q4 === false ? "bg-white/20 text-white border-white/40 font-semibold" : "btn--outline"}`}
                  >
                    Ei vielä
                  </button>
                </div>
              </div>
            </div>

            {/* Quiz Result Box */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-center space-y-3">
              <div className="text-xs uppercase font-semibold text-slate-300">Testituloksesi:</div>
              <div className="text-4xl font-bold font-display text-[#00d2ff]">{calculateScore()} / 100 pistettä</div>
              <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                {calculateScore() >= 80
                  ? "Erinomaista! Kanavasi ja viestintäsi ovat jo erittäin vahvalla pohjalla. Pyydä meiltä sparraus AI-automaatioiden hienosäätöön."
                  : "Upea mahdollisuus kehittyä! Oman orgaanisen näkyvyyden ja tekoälyvalmiuksien vahvistaminen avaa suuren potentiaalin oman asiantuntijabrändisi kasvulle."}
              </p>
            </div>
          </div>
        )}

        {/* Tab 3: Dedicated Email Newsletter & Collaboration Signup */}
        {activeTab === "newsletter" && (
          <div className="liquid-glass rounded-3xl p-6 sm:p-10 space-y-8 max-w-3xl mx-auto border border-white/10 shadow-lg">
            <div className="space-y-3 text-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/15 text-slate-300 text-xs font-semibold uppercase tracking-wider">
                Yhteistyö &amp; sometyöpajat
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-display">Liity SOTE-viestintä &amp; sometyöpajan postituslistalle</h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
                Saat sähköpostiisi ilmaisia SOTE-videostrategioita, uudet AI-promptit ja tiedon tulevista asiantuntijavalmennuksista.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-8 rounded-2xl bg-white/[0.03] border border-emerald-500/40 text-white space-y-3 text-center shadow-lg">
                <div className="inline-flex items-center gap-2 text-emerald-400 font-bold text-lg">
                  <CheckCircle2 className="w-6 h-6" />
                  <span>Kiitos liittymisestä!</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Olet mukana SOTE-viestintäverkostossamme. Lähetämme ensimmäiset opasmateriaalit sähköpostiisi pian.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-3 text-xs font-semibold text-[#00d2ff] underline hover:text-white transition-colors min-h-[44px]"
                >
                  Lähetä uusi pyyntö
                </button>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-4 max-w-md mx-auto">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Nimi</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Matti Meikäläinen"
                    className="w-full min-h-[48px] px-4 py-3 rounded-2xl bg-black/40 border border-white/15 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#00d2ff] focus-visible:ring-2 focus-visible:ring-[#00d2ff] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Sähköposti *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="matti@klinikka.fi"
                    className="w-full min-h-[48px] px-4 py-3 rounded-2xl bg-black/40 border border-white/15 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#00d2ff] focus-visible:ring-2 focus-visible:ring-[#00d2ff] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Rooli / Organisaatio</label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full min-h-[48px] px-4 py-3 rounded-2xl bg-[#0c121c] border border-white/15 text-sm text-white focus:outline-none focus:border-[#00d2ff] focus-visible:ring-2 focus-visible:ring-[#00d2ff] transition-colors"
                  >
                    <option value="SOTE-yritys / Klinikka">SOTE-yritys / Klinikka</option>
                    <option value="Fysioterapeutti / Osteopaatti">Fysioterapeutti / Osteopaatti</option>
                    <option value="Hammaslääkäri / Lääkäri">Hammaslääkäri / Lääkäri</option>
                    <option value="Koulutettava / Opiskelija">Koulutettava / Opiskelija</option>
                    <option value="Yhteistyö / Kumppanuus">Muu yhteistyö / Kumppanuus</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Viesti / Toiveet (Valinnainen)</label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Kerro tiimisi tarpeista..."
                    className="w-full min-h-[48px] px-4 py-3 rounded-2xl bg-black/40 border border-white/15 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#00d2ff] focus-visible:ring-2 focus-visible:ring-[#00d2ff] transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 px-6 rounded-2xl bg-white text-black font-semibold text-sm hover:bg-[#00d2ff] hover:text-black transition-all flex items-center justify-center gap-2 min-h-[48px] shadow-lg cursor-pointer"
                >
                  <Send className="w-4 h-4 text-black" />
                  <span>{isLoading ? "Lähetetään..." : "Liity verkostoon & tilaa teho-ohjeet"}</span>
                </button>

                <p className="text-[11px] text-slate-300 text-center">
                  Ei roskapostia. Voit poistua listalta milloin tahansa 1-klikauksella.
                </p>
              </form>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
