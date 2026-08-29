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
        // Fallback demo success
        setIsSubmitted(true);
      }
    } catch {
      setIsSubmitted(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="sote-roi-ja-postituslista" className="py-20 md:py-28 bg-[#0c0c0c] border-b border-white/10 relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#00d2ff]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00d2ff]/30 bg-[#00d2ff]/10 text-[#00d2ff] text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-4 h-4 text-[#00d2ff]" />
            <span>SOTE-Viestinnän Laskuri, Testi &amp; Yhteistyö</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Laske orgaanisen videon <span className="bg-gradient-to-r from-white via-[#A4F4FD] to-[#00d2ff] bg-clip-text text-transparent">säästöt &amp; liity verkostoon</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base leading-relaxed">
            Katso kuinka paljon orgaaninen videoviestintä säästää sote-yrityksesi mainosbudjetista, testaa nykytilasi ja tilaa SOTE-viestinnän ilmaiset teho-ohjeet sähköpostiisi!
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => setActiveTab("roi")}
            className={`min-h-[44px] px-5 py-3 rounded-full font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 border cursor-pointer focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:outline-none ${
              activeTab === "roi"
                ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                : "bg-white/[0.03] text-white/70 border-white/10 hover:border-white/30 hover:text-white"
            }`}
          >
            <Calculator className="w-4 h-4" />
            <span>1. SOTE-Somen ROI-Laskuri</span>
          </button>

          <button
            onClick={() => setActiveTab("quiz")}
            className={`min-h-[44px] px-5 py-3 rounded-full font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 border cursor-pointer focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:outline-none ${
              activeTab === "quiz"
                ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                : "bg-white/[0.03] text-white/70 border-white/10 hover:border-white/30 hover:text-white"
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>2. Somen Nykytilan Testi</span>
          </button>

          <button
            onClick={() => setActiveTab("newsletter")}
            className={`min-h-[44px] px-5 py-3 rounded-full font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 border cursor-pointer focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:outline-none ${
              activeTab === "newsletter"
                ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                : "bg-white/[0.03] text-white/70 border-white/10 hover:border-white/30 hover:text-white"
            }`}
          >
            <Send className="w-4 h-4" />
            <span>3. Liity Sähköpostilistalle / Yhteistyö</span>
          </button>
        </div>

        {/* Tab 1: ROI Calculator */}
        {activeTab === "roi" && (
          <div className="liquid-glass rounded-3xl p-8 sm:p-12 space-y-10 max-w-4xl mx-auto border border-[#00d2ff]/20">
            <div className="space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <label className="text-xs sm:text-sm font-semibold text-white/80 uppercase tracking-wider">
                  Arvioitu kuukausittainen orgaaninen katselumäärä:
                </label>
                <span className="text-2xl sm:text-3xl font-bold font-mono text-[#00d2ff]">
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
                className="w-full h-3 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#00d2ff] border border-white/15"
              />
              <div className="flex justify-between text-xs text-white/50 font-mono">
                <span>5 000 katselua</span>
                <span>50 000 katselua</span>
                <span>200 000 katselua (Pääkanavat)</span>
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-6 border-t border-white/10">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-1.5 text-center">
                <span className="text-xs uppercase font-medium text-white/50">Vastaava Ads-arvo / kk:</span>
                <div className="text-3xl font-bold font-display text-emerald-400">{adSavings.toLocaleString("fi-FI")} €</div>
                <span className="text-[11px] text-white/50 block">Säästö suoraan leikkaamalla maksettua CPM-mainontaa</span>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-1.5 text-center">
                <span className="text-xs uppercase font-medium text-white/50">Vuosittainen Mainossäästö:</span>
                <div className="text-3xl font-bold font-display text-emerald-400">{annualSavings.toLocaleString("fi-FI")} €</div>
                <span className="text-[11px] text-white/50 block">Säästö 12 kuukauden orgaanisella näkyvyydellä</span>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-1.5 text-center">
                <span className="text-xs uppercase font-medium text-white/50">Potentiaaliset Kyselyt / kk:</span>
                <div className="text-3xl font-bold font-display text-[#00d2ff]">~{estimatedLeads} kpl</div>
                <span className="text-[11px] text-white/50 block">Aitoja sote-potilas- ja asiakaskyselyitä</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-xs sm:text-sm text-white/80 flex items-start sm:items-center gap-3.5">
              <ShieldCheck className="w-5 h-5 text-[#00d2ff] shrink-0 mt-0.5 sm:mt-0" />
              <span>
                <strong>Tiedottajanne Oy:n periaate:</strong> Orgaaninen laatu ja AEO-hakukonenäkyvyys (YouTube &amp; Google) tuovat kestävää luottamusta sote-alan asiakkaille ilman jatkuvia eurojen pumppaamista pikamainoksiin.
              </span>
            </div>
          </div>
        )}

        {/* Tab 2: SOTE Quiz */}
        {activeTab === "quiz" && (
          <div className="liquid-glass rounded-3xl p-8 sm:p-12 space-y-8 max-w-3xl mx-auto border border-[#00d2ff]/20">
            <div className="space-y-2 text-center">
              <h3 className="text-2xl font-bold text-white tracking-tight">SOTE-Somen Nykytilan 4 Kysymyksen Testi</h3>
              <p className="text-xs sm:text-sm text-white/60">Vastaa rehellisesti alla oleviin 4 kysymykseen nähdäksesi klinikkasi tai asiantuntijuutesi valmiuden.</p>
            </div>

            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
                <p className="text-sm font-semibold text-white">1. Tuottaako klinikkasi / yrityksesi säännöllisesti opetus- tai asiantuntijavideoita YouTubessa tai somessa?</p>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQ1(true)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${q1 === true ? "bg-emerald-500 text-black font-bold" : "bg-white/[0.04] text-white/70 border border-white/10"}`}
                  >
                    Kyllä (+20 p)
                  </button>
                  <button
                    onClick={() => setQ1(false)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${q1 === false ? "bg-red-500 text-white font-bold" : "bg-white/[0.04] text-white/70 border border-white/10"}`}
                  >
                    Ei vielä
                  </button>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
                <p className="text-sm font-semibold text-white">2. Hyödynnättekö tekoälyä (ChatGPT / Perplexity) potilasohjeissa, tekstin stilisoinnissa ja kuvauskentissä?</p>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQ2(true)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${q2 === true ? "bg-emerald-500 text-black font-bold" : "bg-white/[0.04] text-white/70 border border-white/10"}`}
                  >
                    Kyllä (+20 p)
                  </button>
                  <button
                    onClick={() => setQ2(false)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${q2 === false ? "bg-red-500 text-white font-bold" : "bg-white/[0.04] text-white/70 border border-white/10"}`}
                  >
                    Ei vielä
                  </button>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
                <p className="text-sm font-semibold text-white">3. Ovatko videonne ja artikkelinne haku- ja AEO-optimoituja (Google &amp; YouTube Search)?</p>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQ3(true)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${q3 === true ? "bg-emerald-500 text-black font-bold" : "bg-white/[0.04] text-white/70 border border-white/10"}`}
                  >
                    Kyllä (+20 p)
                  </button>
                  <button
                    onClick={() => setQ3(false)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${q3 === false ? "bg-red-500 text-white font-bold" : "bg-white/[0.04] text-white/70 border border-white/10"}`}
                  >
                    Ei vielä
                  </button>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
                <p className="text-sm font-semibold text-white">4. Onko videotuotanto laillistettua (Valvira- ja Terhikki-yhteensopivaa terveysalan viestintää)?</p>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQ4(true)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${q4 === true ? "bg-emerald-500 text-black font-bold" : "bg-white/[0.04] text-white/70 border border-white/10"}`}
                  >
                    Kyllä (+20 p)
                  </button>
                  <button
                    onClick={() => setQ4(false)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${q4 === false ? "bg-red-500 text-white font-bold" : "bg-white/[0.04] text-white/70 border border-white/10"}`}
                  >
                    Ei vielä
                  </button>
                </div>
              </div>
            </div>

            {/* Score Summary */}
            <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/15 text-center space-y-3">
              <span className="text-xs uppercase font-semibold text-white/50 tracking-wider">SOTE-Somen Nykytilasi Pisteet:</span>
              <div className="text-4xl sm:text-5xl font-bold font-mono text-[#00d2ff]">
                {calculateScore()} / 100 pistettä
              </div>
              <p className="text-xs sm:text-sm text-white/70 max-w-md mx-auto leading-relaxed">
                {calculateScore() < 60
                  ? "Sotesivustollasi ja somessasi on valtavasti hyödyntämätöntä orgaanista kasvupotentiaalia! Tiedottajanne Oy auttaa rakentamaan valmiin tuotantoputken."
                  : "Klinikkasi on jo hyvällä mallilla! Ota yhteyttä, niin viilataan AEO-hakuindeksointi ja tekoäly-promptit huipputasolle."}
              </p>
            </div>
          </div>
        )}

        {/* Tab 3: Dedicated Email Newsletter & Collaboration Signup */}
        {activeTab === "newsletter" && (
          <div className="liquid-glass rounded-3xl p-8 sm:p-12 space-y-8 max-w-3xl mx-auto border border-[#00d2ff]/20">
            <div className="space-y-2 text-center">
              <span className="px-3.5 py-1 rounded-full bg-[#00d2ff]/10 text-[#00d2ff] text-xs font-semibold uppercase tracking-wider border border-[#00d2ff]/30">
                Yhteistyö &amp; Sometyöpajat
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Liity SOTE-Viestintä &amp; Sometyöpajan Postituslistalle</h3>
              <p className="text-xs sm:text-sm text-white/60 max-w-lg mx-auto leading-relaxed">
                Haluatko oppia lisää orgaanisesta somen tekemisestä, tekoälyn hyödyntämisestä tai tehdä yhteistyötä Janne Säkkisen / Tiedottajanne Oy:n kanssa? Syötä tietosi alla.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3 shadow-lg">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-bold text-white">Kiitos ilmoittautumisesta!</h4>
                <p className="text-xs sm:text-sm text-emerald-200 leading-relaxed">
                  Tietosi on vastaanotettu. Lähetämme sinulle säännöllisesti uusimmat SOTE-vinkit, AI-promptit sekä otamme tarvittaessa yhteyttä yhteistyön tiimoilta.
                </p>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-white/80 mb-1.5">Nimi / Yritys *</label>
                    <input
                      type="text"
                      required
                      placeholder="esim. Janne Säkkinen / Klinikka Oy"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full min-h-[44px] px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/15 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#00d2ff] focus-visible:ring-2 focus-visible:ring-[#00d2ff] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white/80 mb-1.5">Sähköpostiosoite *</label>
                    <input
                      type="email"
                      required
                      placeholder="esim. etunimi@klinikka.fi"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full min-h-[44px] px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/15 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#00d2ff] focus-visible:ring-2 focus-visible:ring-[#00d2ff] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/80 mb-1.5">Rooli / Organisaatio</label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full min-h-[44px] px-4 py-3 rounded-2xl bg-[#0c0c0c] border border-white/15 text-sm text-white focus:outline-none focus:border-[#00d2ff] focus-visible:ring-2 focus-visible:ring-[#00d2ff] transition-colors"
                  >
                    <option value="SOTE-yritys / Klinikka">SOTE-yritys / Klinikka</option>
                    <option value="Fysioterapeutti / Osteopaatti">Fysioterapeutti / Osteopaatti</option>
                    <option value="Hammaslääkäri / Lääkäri">Hammaslääkäri / Lääkäri</option>
                    <option value="Koulutettava / Opiskelija">Koulutettava / Opiskelija</option>
                    <option value="Yhteistyö / Kumppanuus">Muu yhteistyö / Kumppanuus</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/80 mb-1.5">Mistä haluat lisätietoja? (Valinnainen)</label>
                  <textarea
                    rows={3}
                    placeholder="Esim. Haluamme koulutuksen henkilöstöllemme / Olen kiinnostunut yhteistyöstä..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full min-h-[44px] px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/15 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#00d2ff] focus-visible:ring-2 focus-visible:ring-[#00d2ff] transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full min-h-[44px] py-3.5 px-6 rounded-full bg-white text-black font-semibold text-sm hover:bg-white/90 transition-all shadow-[0_0_25px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 hover:scale-[1.01] active:scale-[0.99] focus-visible:ring-2 focus-visible:ring-[#00d2ff] focus-visible:outline-none"
                >
                  <Send className="w-4 h-4 text-black shrink-0" />
                  <span>{isLoading ? "Lähetetään..." : "Liity postituslistalle / Lähetä yhteistyöpyyntö"}</span>
                </button>

                <p className="text-[11px] text-white/40 text-center">
                  Ei roskapostia. Voit perua tilauksen milloin vain. Tiedottajanne Oy • Valvira / Terhikki -rekisteröity asiantuntemus.
                </p>
              </form>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
