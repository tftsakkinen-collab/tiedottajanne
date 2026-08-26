"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2, Building2, Mail, Phone, MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/data/config";

export default function ConsultingBookingSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [serviceType, setServiceType] = useState("SOTE-Videokoulutus tiimille");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate form submission
      await new Promise((res) => setTimeout(res, 1200));
      setStatus("success");
      setName("");
      setEmail("");
      setOrganization("");
      setMessage("");
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#0c0c0c] border-b border-white/10 relative overflow-hidden" id="tarjous">
      {/* Subtle Ambient Light */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[500px] bg-gradient-to-l from-[#014489]/10 to-transparent blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00d2ff]/30 bg-[#00d2ff]/10 text-[#00d2ff] text-xs font-semibold uppercase tracking-wider">
            <Building2 className="w-4 h-4" />
            <span>KOULUTUS- JA VALMENNUSPYYNTÖ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            PYYDÄ TARJOUS <span className="bg-gradient-to-r from-white via-[#A4F4FD] to-[#00d2ff] bg-clip-text text-transparent">SOTE-SOMETHING-KOULUTUKSESTA</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base leading-relaxed">
            Räätälöidyt luennot, työpajat ja asiantuntijavalmennukset hyvinvointialueille, erikoislääkäriasemille, hammaslääkäriketjuille ja kuntoutusyrityksille.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Info Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="liquid-glass rounded-3xl p-8 sm:p-10 space-y-8">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00d2ff]/20 to-[#014489]/30 border border-[#00d2ff]/30 text-[#00d2ff] flex items-center justify-center">
                  <Building2 className="w-5 h-5" />
                </div>
                <span>Tiedottajanne Oy</span>
              </h3>

              <div className="space-y-4 text-sm text-white/70">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#00d2ff] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Sijainti &amp; Toimialue:</span>
                    <span className="text-xs text-white/50">Oulu (Päätoimipaikka) &amp; Valtakunnallinen (koko Suomi)</span>
                  </div>
                </div>
                <div className="flex items-center gap-3.5">
                  <Mail className="w-5 h-5 text-[#00d2ff] shrink-0" />
                  <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="hover:text-[#00d2ff] text-white font-medium transition-colors">
                    {SITE_CONFIG.contactEmail}
                  </a>
                </div>
                <div className="flex items-center gap-3.5">
                  <Phone className="w-5 h-5 text-[#00d2ff] shrink-0" />
                  <a href={`tel:${SITE_CONFIG.contactPhone}`} className="hover:text-[#00d2ff] text-white font-medium transition-colors">
                    {SITE_CONFIG.contactPhone}
                  </a>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2.5">
                <div className="text-xs font-semibold text-white uppercase tracking-wider">Asiantuntija Janne Säkkinen</div>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                  OMT-Fysioterapeutti (SOMTY), Oulun yliopiston lääketieteellisen tiedekunnan luennoitsija (2017–). Kokemusta 3 suuren YouTube-kanavan ja monikanavaisen SOTE-somen rakentamisesta.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="liquid-glass rounded-3xl p-8 sm:p-10 space-y-8">
              
              <h3 className="text-2xl font-bold text-white tracking-tight">Jätä Yhteydenottopyyntö / Tarjouspyyntö</h3>

              {status === "success" ? (
                <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-white space-y-3 shadow-lg">
                  <div className="flex items-center gap-3 text-emerald-400 font-bold text-lg">
                    <CheckCircle2 className="w-6 h-6" />
                    <span>Viestisi on lähetetty onnistuneesti!</span>
                  </div>
                  <p className="text-sm text-emerald-200 leading-relaxed">
                    Kiitos yhteydenotostasi. Vastaamme tarjouspyyntöösi pian sähköpostitse ({SITE_CONFIG.contactEmail}).
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-3 text-xs font-semibold text-[#00d2ff] underline hover:text-white transition-colors"
                  >
                    Lähetä toinen viesti
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1.5">
                        Nimi *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Matti Meikäläinen"
                        className="w-full px-4 py-3.5 rounded-2xl bg-white/[0.03] border border-white/15 text-white placeholder-white/40 focus:outline-none focus:border-[#00d2ff] text-sm transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1.5">
                        Sähköposti *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="matti@klinikka.fi"
                        className="w-full px-4 py-3.5 rounded-2xl bg-white/[0.03] border border-white/15 text-white placeholder-white/40 focus:outline-none focus:border-[#00d2ff] text-sm transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1.5">
                        Yritys / Organisaatio
                      </label>
                      <input
                        type="text"
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                        placeholder="Esim. Hammaslääkäriasema Oy"
                        className="w-full px-4 py-3.5 rounded-2xl bg-white/[0.03] border border-white/15 text-white placeholder-white/40 focus:outline-none focus:border-[#00d2ff] text-sm transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1.5">
                        Palvelutarve
                      </label>
                      <select
                        value={serviceType}
                        onChange={(e) => setServiceType(e.target.value)}
                        className="w-full px-4 py-3.5 rounded-2xl bg-[#0c0c0c] border border-white/15 text-white focus:outline-none focus:border-[#00d2ff] text-sm transition-colors"
                      >
                        <option value="SOTE-Videokoulutus tiimille">SOTE-Videokoulutus tiimille</option>
                        <option value="Lääkinnällinen AI-SEO & Metatiedot">Lääkinnällinen AI-SEO &amp; Metatiedot</option>
                        <option value="1-on-1 Asiantuntijavalmennus">1-on-1 Asiantuntijavalmennus</option>
                        <option value="Ergonomia & Luennot">Ergonomia &amp; Luennot</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1.5">
                      Viesti / Toiveet koulutukselle *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Kerro lyhyesti tiimistäsi, tavoitteistanne ja toivotusta ajankohdasta..."
                      className="w-full px-4 py-3.5 rounded-2xl bg-white/[0.03] border border-white/15 text-white placeholder-white/40 focus:outline-none focus:border-[#00d2ff] text-sm transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 px-6 rounded-full bg-white text-black font-semibold text-sm hover:bg-white/90 transition-all shadow-[0_0_25px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 hover:scale-[1.01] active:scale-[0.99]"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Lähetetään...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-black" />
                        <span>Lähetä Tarjouspyyntö</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
