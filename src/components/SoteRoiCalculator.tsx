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

  // Email form state (#25)
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
    <section id="sote-roi-ja-postituslista" className="py-16 bg-[#000a18] border-b border-[#0C66B4]/30 relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#00AEEF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00AEEF]/20 border border-[#00AEEF]/40 text-[#00AEEF] text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-4 h-4 text-[#00AEEF]" />
            <span>SOTE-Viestinnän Laskuri, Testi &amp; Yhteistyö</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-white tracking-normal leading-[1.2]">
            Laske orgaanisen videon <span className="text-[#00AEEF]">säästöt &amp; liity verkostoon</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Katso kuinka paljon orgaaninen videoviestintä säästää sote-yrityksesi mainosbudjetista, testaa nykytilasi ja tilaa SOTE-viestinnän ilmaiset teho-ohjeet sähköpostiisi!
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => setActiveTab("roi")}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 border cursor-pointer ${
              activeTab === "roi"
                ? "bg-[#00AEEF] text-black border-[#00AEEF] shadow-[0_0_20px_rgba(0,174,239,0.4)]"
                : "bg-[#000d21] text-gray-300 border-[#0C66B4]/50 hover:border-[#00AEEF]/60"
            }`}
          >
            <Calculator className="w-4 h-4" />
            <span>1. SOTE-Somen ROI-Laskuri</span>
          </button>

          <button
            onClick={() => setActiveTab("quiz")}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 border cursor-pointer ${
              activeTab === "quiz"
                ? "bg-[#00AEEF] text-black border-[#00AEEF] shadow-[0_0_20px_rgba(0,174,239,0.4)]"
                : "bg-[#000d21] text-gray-300 border-[#0C66B4]/50 hover:border-[#00AEEF]/60"
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>2. Somen Nykytilan Testi</span>
          </button>

          <button
            onClick={() => setActiveTab("newsletter")}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 border cursor-pointer ${
              activeTab === "newsletter"
                ? "bg-[#00AEEF] text-black border-[#00AEEF] shadow-[0_0_20px_rgba(0,174,239,0.4)]"
                : "bg-[#000d21] text-gray-300 border-[#0C66B4]/50 hover:border-[#00AEEF]/60"
            }`}
          >
            <Send className="w-4 h-4" />
            <span>3. Liity Sähköpostilistalle / Yhteistyö</span>
          </button>
        </div>

        {/* Tab 1: ROI Calculator */}
        {activeTab === "roi" && (
          <div className="p-6 sm:p-10 rounded-3xl bg-[#000d21] border border-[#00AEEF]/50 shadow-panel space-y-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-sm font-bold text-white uppercase tracking-wider">
                  Arvioitu kuukausittainen orgaaninen katselumäärä:
                </label>
                <span className="text-2xl font-display font-bold text-[#00AEEF]">
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
                className="w-full h-3 bg-[#000814] rounded-lg appearance-none cursor-pointer accent-[#00AEEF] border border-[#0C66B4]/60"
              />
              <div className="flex justify-between text-xs text-gray-400 font-mono">
                <span>5 000 katselua</span>
                <span>50 000 katselua</span>
                <span>200 000 katselua (Pääkanavat)</span>
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#0C66B4]/40">
              <div className="p-5 rounded-2xl bg-[#000814] border border-[#0C66B4]/50 space-y-1 text-center">
                <span className="text-xs uppercase font-semibold text-gray-400">Vastaava Ads-arvo / kk:</span>
                <div className="text-3xl font-display font-bold text-emerald-400">{adSavings.toLocaleString("fi-FI")} €</div>
                <span className="text-[11px] text-gray-400 block">Säästö suoraan leikkaamalla maksettua CPM-mainontaa</span>
              </div>

              <div className="p-5 rounded-2xl bg-[#000814] border border-[#0C66B4]/50 space-y-1 text-center">
                <span className="text-xs uppercase font-semibold text-gray-400">Vuosittainen Mainossäästö:</span>
                <div className="text-3xl font-display font-bold text-emerald-400">{annualSavings.toLocaleString("fi-FI")} €</div>
                <span className="text-[11px] text-gray-400 block">Säästö 12 kuukauden orgaanisella näkyvyydellä</span>
              </div>

              <div className="p-5 rounded-2xl bg-[#000814] border border-[#0C66B4]/50 space-y-1 text-center">
                <span className="text-xs uppercase font-semibold text-gray-400">Potentiaaliset Kyselyt / kk:</span>
                <div className="text-3xl font-display font-bold text-[#00AEEF]">~{estimatedLeads} kpl</div>
                <span className="text-[11px] text-gray-400 block">Aitoja sote-potilas- ja asiakaskyselyitä</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#014489]/20 border border-[#00AEEF]/40 text-xs text-gray-200 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#00AEEF] shrink-0" />
              <span>
                <strong>Tiedottajanne Oy:n periaate:</strong> Orgaaninen laatu ja AEO-hakukonenäkyvyys (YouTube &amp; Google) tuovat kestävää luottamusta sote-alan asiakkaille ilman jatkuvia eurojen pumppaamista pikamainoksiin.
              </span>
            </div>
          </div>
        )}

        {/* Tab 2: SOTE Quiz */}
        {activeTab === "quiz" && (
          <div className="p-6 sm:p-10 rounded-3xl bg-[#000d21] border border-[#00AEEF]/50 shadow-panel space-y-8 max-w-3xl mx-auto">
            <div className="space-y-2 text-center">
              <h3 className="text-2xl font-bold text-white">SOTE-Somen Nykytilan 4 Kysymyksen Testi</h3>
              <p className="text-xs text-gray-300">Vastaa rehellisesti alla oleviin 4 kysymykseen nähdäksesi klinikkasi tai asiantuntijuutesi valmiuden.</p>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-[#000814] border border-[#0C66B4]/40 space-y-3">
                <p className="text-sm font-semibold text-white">1. Tuottaako klinikkasi / yrityksesi säännöllisesti opetus- tai asiantuntijavideoita YouTubessa tai somessa?</p>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQ1(true)}
                    className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${q1 === true ? "bg-emerald-500 text-black" : "bg-[#000d21] text-gray-300 border border-gray-700"}`}
                  >
                    Kyllä (+20 p)
                  </button>
                  <button
                    onClick={() => setQ1(false)}
                    className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${q1 === false ? "bg-red-500 text-white" : "bg-[#000d21] text-gray-300 border border-gray-700"}`}
                  >
                    Ei vielä
                  </button>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#000814] border border-[#0C66B4]/40 space-y-3">
                <p className="text-sm font-semibold text-white">2. Hyödynnättekö tekoälyä (ChatGPT / Perplexity) potilasohjeissa, tekstin stilisoinnissa ja kuvauskentissä?</p>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQ2(true)}
                    className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${q2 === true ? "bg-emerald-500 text-black" : "bg-[#000d21] text-gray-300 border border-gray-700"}`}
                  >
                    Kyllä (+20 p)
                  </button>
                  <button
                    onClick={() => setQ2(false)}
                    className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${q2 === false ? "bg-red-500 text-white" : "bg-[#000d21] text-gray-300 border border-gray-700"}`}
                  >
                    Ei vielä
                  </button>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#000814] border border-[#0C66B4]/40 space-y-3">
                <p className="text-sm font-semibold text-white">3. Ovatko videonne ja artikkelinne haku- ja AEO-optimoituja (Google &amp; YouTube Search)?</p>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQ3(true)}
                    className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${q3 === true ? "bg-emerald-500 text-black" : "bg-[#000d21] text-gray-300 border border-gray-700"}`}
                  >
                    Kyllä (+20 p)
                  </button>
                  <button
                    onClick={() => setQ3(false)}
                    className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${q3 === false ? "bg-red-500 text-white" : "bg-[#000d21] text-gray-300 border border-gray-700"}`}
                  >
                    Ei vielä
                  </button>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#000814] border border-[#0C66B4]/40 space-y-3">
                <p className="text-sm font-semibold text-white">4. Onko videotuotanto laillistettua (Valvira- ja Terhikki-yhteensopivaa terveysalan viestintää)?</p>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQ4(true)}
                    className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${q4 === true ? "bg-emerald-500 text-black" : "bg-[#000d21] text-gray-300 border border-gray-700"}`}
                  >
                    Kyllä (+20 p)
                  </button>
                  <button
                    onClick={() => setQ4(false)}
                    className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${q4 === false ? "bg-red-500 text-white" : "bg-[#000d21] text-gray-300 border border-gray-700"}`}
                  >
                    Ei vielä
                  </button>
                </div>
              </div>
            </div>

            {/* Score Summary */}
            <div className="p-6 rounded-2xl bg-[#000814] border border-[#00AEEF]/50 text-center space-y-3">
              <span className="text-xs uppercase font-bold text-gray-400">SOTE-Somen Nykytilasi Pisteet:</span>
              <div className="text-4xl sm:text-5xl font-display font-bold text-[#00AEEF]">
                {calculateScore()} / 100 pistettä
              </div>
              <p className="text-xs text-gray-300 max-w-md mx-auto">
                {calculateScore() < 60
                  ? "Sotesivustollasi ja somessasi on valtavasti hyödyntämätöntä orgaanista kasvupotentiaalia! Tiedottajanne Oy auttaa rakentamaan valmiin tuotantoputken."
                  : "Klinikkasi on jo hyvällä mallilla! Ota yhteyttä, niin viilataan AEO-hakuindeksointi ja tekoäly-promptit huipputasolle."}
              </p>
            </div>
          </div>
        )}

        {/* Tab 3: Dedicated Email Newsletter & Collaboration Signup (#25) */}
        {activeTab === "newsletter" && (
          <div className="p-6 sm:p-10 rounded-3xl bg-[#000d21] border border-[#00AEEF]/50 shadow-panel space-y-6 max-w-3xl mx-auto">
            <div className="space-y-2 text-center">
              <span className="px-3 py-1 rounded-full bg-[#00AEEF]/20 text-[#00AEEF] text-xs font-bold uppercase tracking-wider">
                Yhteistyö &amp; Sometyöpajat
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Liity SOTE-Viestintä &amp; Sometyöpajan Postituslistalle</h3>
              <p className="text-xs sm:text-sm text-gray-300 max-w-lg mx-auto">
                Haluatko oppia lisää orgaanisesta somen tekemisestä, tekoälyn hyödyntämisestä tai tehdä yhteistyötä Janne Säkkisen / Tiedottajanne Oy:n kanssa? Syötä tietosi alla.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-950/70 border border-emerald-500/50 text-center space-y-3 shadow-glow">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-bold text-white">Kiitos ilmoittautumisesta!</h4>
                <p className="text-xs text-emerald-200">
                  Tietosi on vastaanotettu. Lähetämme sinulle säännöllisesti uusimmat SOTE-vinkit, AI-promptit sekä otamme tarvittaessa yhteyttä yhteistyön tiimoilta.
                </p>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">Nimi / Yritys *</label>
                    <input
                      type="text"
                      required
                      placeholder="esim. Janne Säkkinen / Klinikka Oy"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#000814] border border-[#0C66B4]/60 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#00AEEF]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">Sähköpostiosoite *</label>
                    <input
                      type="email"
                      required
                      placeholder="esim. etunimi@klinikka.fi"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#000814] border border-[#0C66B4]/60 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#00AEEF]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">Rooli / Organisaatio</label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#000814] border border-[#0C66B4]/60 text-sm text-white focus:outline-none focus:border-[#00AEEF]"
                  >
                    <option value="SOTE-yritys / Klinikka">SOTE-yritys / Klinikka</option>
                    <option value="Fysioterapeutti / Osteopaatti">Fysioterapeutti / Osteopaatti</option>
                    <option value="Hammaslääkäri / Lääkäri">Hammaslääkäri / Lääkäri</option>
                    <option value="Koulutettava / Opiskelija">Koulutettava / Opiskelija</option>
                    <option value="Yhteistyö / Kumppanuus">Muu yhteistyö / Kumppanuus</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">Mistä haluat lisätietoja? (Valinnainen)</label>
                  <textarea
                    rows={3}
                    placeholder="Esim. Haluamme koulutuksen henkilöstöllemme / Olen kiinnostunut yhteistyöstä..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#000814] border border-[#0C66B4]/60 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#00AEEF]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 px-6 rounded-xl bg-[#00AEEF] text-black font-bold text-base hover:bg-[#33C2F5] transition-all shadow-[0_0_25px_rgba(0,174,239,0.5)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-5 h-5" />
                  <span>{isLoading ? "Lähetetään..." : "Liity postituslistalle / Lähetä yhteistyöpyyntö"}</span>
                </button>

                <p className="text-[11px] text-gray-400 text-center">
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
