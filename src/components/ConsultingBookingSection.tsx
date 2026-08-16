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
      // Simulate form submission or call /api/contact
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
    <section className="py-16 bg-[#000d21] border-b border-[#0C66B4]/30 relative" id="tarjous">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00AEEF]/20 border border-[#00AEEF]/40 text-[#00AEEF] text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-4 h-4" />
            <span>KOULUTUS- JA VALMENNUSPYYNTÖ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-white tracking-wide">
            PYYDÄ TARJOUS <span className="text-[#00AEEF]">SOTE-SOMETHING-KOULUTUKSESTA</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Räätälöidyt luennot, työpajat ja asiantuntijavalmennukset hyvinvointialueille, erikoislääkäriasemille, hammaslääkäriketjuille ja kuntoutusyrityksille.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Info Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#000a18] border border-[#0C66B4] shadow-glow space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#00AEEF]" />
                Tiedottajanne Oy
              </h3>

              <div className="space-y-4 text-sm text-gray-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#00AEEF] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Sijainti &amp; Toimialue:</span>
                    <span className="text-xs text-gray-400">Oulu (Päätoipaikka) &amp; Valtakunnallinen (koko Suomi)</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#00AEEF] shrink-0" />
                  <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="hover:underline text-white font-medium">
                    {SITE_CONFIG.contactEmail}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#00AEEF] shrink-0" />
                  <a href={`tel:${SITE_CONFIG.contactPhone}`} className="hover:underline text-white font-medium">
                    {SITE_CONFIG.contactPhone}
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#000d21] border border-[#0C66B4]/40 space-y-2">
                <div className="text-xs font-bold text-white uppercase tracking-wider">Asiantuntija Janne Säkkinen</div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  OMT-Fysioterapeutti (SOMTY), Oulun yliopiston lääketieteellisen tiedekunnan luennoitsija (2017–). Kokemusta 3 suuren YouTube-kanavan ja monikanavaisen SOTE-somen rakentamisesta.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#000a18] border border-[#0C66B4] shadow-glow space-y-6">
              
              <h3 className="text-xl font-bold text-white">Jätä Yhteydenottopyyntö / Tarjouspyyntö</h3>

              {status === "success" ? (
                <div className="p-6 rounded-2xl bg-[#00AEEF]/10 border border-[#00AEEF] text-white space-y-3">
                  <div className="flex items-center gap-3 text-[#00AEEF] font-bold text-lg">
                    <CheckCircle2 className="w-6 h-6" />
                    <span>Viestisi on lähetetty onnistuneesti!</span>
                  </div>
                  <p className="text-sm text-gray-200">
                    Kiitos yhteydenotostasi. Vastaamme tarjouspyyntöösi pian sähköpostitse ({SITE_CONFIG.contactEmail}).
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-2 text-xs font-semibold text-[#00AEEF] underline hover:text-white"
                  >
                    Lähetä toinen viesti
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                        Nimi *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Matti Meikäläinen"
                        className="w-full px-4 py-3 rounded-xl bg-[#000d21] border border-[#0C66B4]/60 text-white placeholder-gray-500 focus:outline-none focus:border-[#00AEEF] text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                        Sähköposti *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="matti@klinikka.fi"
                        className="w-full px-4 py-3 rounded-xl bg-[#000d21] border border-[#0C66B4]/60 text-white placeholder-gray-500 focus:outline-none focus:border-[#00AEEF] text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                        Yritys / Organisaatio
                      </label>
                      <input
                        type="text"
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                        placeholder="Esim. Hammaslääkäriasema Oy"
                        className="w-full px-4 py-3 rounded-xl bg-[#000d21] border border-[#0C66B4]/60 text-white placeholder-gray-500 focus:outline-none focus:border-[#00AEEF] text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                        Palvelutarve
                      </label>
                      <select
                        value={serviceType}
                        onChange={(e) => setServiceType(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#000d21] border border-[#0C66B4]/60 text-white focus:outline-none focus:border-[#00AEEF] text-sm"
                      >
                        <option value="SOTE-Videokoulutus tiimille">SOTE-Videokoulutus tiimille</option>
                        <option value="Lääkinnällinen AI-SEO & Metatiedot">Lääkinnällinen AI-SEO &amp; Metatiedot</option>
                        <option value="1-on-1 Asiantuntijavalmennus">1-on-1 Asiantuntijavalmennus</option>
                        <option value="Ergonomia & Luennot">Ergonomia &amp; Luennot</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                      Viesti / Toiveet koulutukselle *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Kerro lyhyesti tiimistäsi, tavoitteistanne ja toivotusta ajankohdasta..."
                      className="w-full px-4 py-3 rounded-xl bg-[#000d21] border border-[#0C66B4]/60 text-white placeholder-gray-500 focus:outline-none focus:border-[#00AEEF] text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 rounded-xl bg-[#00AEEF] text-black font-bold text-base hover:bg-[#33C2F5] transition-all shadow-glow flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Lähetetään...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
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
