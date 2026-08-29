"use client";

import { useState } from "react";
import { 
  Building2, 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  Sparkles
} from "lucide-react";
import { SITE_CONFIG } from "@/data/config";

export default function ConsultingBookingSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [serviceType, setServiceType] = useState("SOTE-Videokoulutus tiimille");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Form submission simulation
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus("success");
      setName("");
      setEmail("");
      setOrganization("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-12 md:py-16 bg-[var(--bg)] border-b border-[var(--border)] relative overflow-hidden" id="tarjous">
      {/* Ambient Light */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[500px] bg-[var(--accent)]/10 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-semibold uppercase tracking-wider">
            <Building2 className="w-4 h-4 text-[var(--accent)]" />
            <span>KOULUTUS- JA VALMENNUSPYYNTÖ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--text)] leading-tight font-display">
            PYYDÄ TARJOUS <span className="text-gradient-cyan">SOTE-SOMETHING-KOULUTUKSESTA</span>
          </h2>
          <p className="text-[var(--muted)] text-sm sm:text-base leading-relaxed">
            Räätälöidyt luennot, työpajat ja asiantuntijavalmennukset hyvinvointialueille, erikoislääkäriasemille, hammaslääkäriketjuille ja kuntoutusyrityksille.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Info Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass rounded-3xl p-8 sm:p-10 space-y-8">
              <h3 className="text-2xl font-bold text-[var(--text)] flex items-center gap-3 font-display">
                <div className="w-10 h-10 rounded-xl bg-[var(--surface-elevated)] border border-[var(--accent)]/30 text-[var(--accent)] flex items-center justify-center">
                  <Building2 className="w-5 h-5" />
                </div>
                <span>Tiedottajanne Oy</span>
              </h3>

              <div className="space-y-4 text-sm text-[var(--muted)]">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[var(--accent)] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[var(--text)] block">Sijainti &amp; Toimialue:</span>
                    <span className="text-xs text-[var(--muted)]">Oulu (Päätoimipaikka) &amp; Valtakunnallinen (koko Suomi)</span>
                  </div>
                </div>
                <div className="flex items-center gap-3.5">
                  <Mail className="w-5 h-5 text-[var(--accent)] shrink-0" />
                  <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="hover:text-[var(--accent)] text-[var(--text)] font-medium transition-colors">
                    {SITE_CONFIG.contactEmail}
                  </a>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] space-y-2.5">
                <div className="text-xs font-semibold text-[var(--text)] uppercase tracking-wider">Asiantuntija Janne Säkkinen</div>
                <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                  OMT-Fysioterapeutti (SOMTY), Oulun yliopiston lääketieteellisen tiedekunnan luennoitsija (2017–). Kokemusta 3 suuren YouTube-kanavan ja monikanavaisen SOTE-somen rakentamisesta.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="glass rounded-3xl p-8 sm:p-10 space-y-8">
              
              <h3 className="text-2xl font-bold text-[var(--text)] tracking-tight font-display">Jätä Yhteydenottopyyntö / Tarjouspyyntö</h3>

              {status === "success" ? (
                <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-[var(--text)] space-y-3 shadow-lg">
                  <div className="flex items-center gap-3 text-emerald-400 font-bold text-lg">
                    <CheckCircle2 className="w-6 h-6" />
                    <span>Viestisi on lähetetty onnistuneesti!</span>
                  </div>
                  <p className="text-sm text-emerald-200 leading-relaxed">
                    Kiitos yhteydenotostasi. Vastaamme tarjouspyyntöösi pian sähköpostitse ({SITE_CONFIG.contactEmail}).
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-3 text-xs font-semibold text-[var(--accent)] underline hover:text-[var(--text)] transition-colors min-h-[44px]"
                  >
                    Lähetä toinen viesti
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[var(--muted)] uppercase tracking-wider mb-1.5">
                        Nimi *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Matti Meikäläinen"
                        className="w-full px-4 py-3 rounded-2xl bg-[var(--surface)] border border-[var(--border)] text-[var(--text)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--accent)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] text-sm transition-colors min-h-[44px]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[var(--muted)] uppercase tracking-wider mb-1.5">
                        Sähköposti *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="matti@klinikka.fi"
                        className="w-full px-4 py-3 rounded-2xl bg-[var(--surface)] border border-[var(--border)] text-[var(--text)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--accent)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] text-sm transition-colors min-h-[44px]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[var(--muted)] uppercase tracking-wider mb-1.5">
                        Yritys / Organisaatio
                      </label>
                      <input
                        type="text"
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                        placeholder="Esim. Hammaslääkäriasema Oy"
                        className="w-full px-4 py-3 rounded-2xl bg-[var(--surface)] border border-[var(--border)] text-[var(--text)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--accent)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] text-sm transition-colors min-h-[44px]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[var(--muted)] uppercase tracking-wider mb-1.5">
                        Palvelutarve
                      </label>
                      <select
                        value={serviceType}
                        onChange={(e) => setServiceType(e.target.value)}
                        className="w-full px-4 py-3 rounded-2xl bg-[var(--surface)] border border-[var(--border)] text-[var(--text)] focus:outline-none focus:border-[var(--accent)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] text-sm transition-colors min-h-[44px]"
                      >
                        <option value="SOTE-Videokoulutus tiimille">SOTE-Videokoulutus tiimille</option>
                        <option value="Lääkinnällinen AI-SEO & Metatiedot">Lääkinnällinen AI-SEO &amp; Metatiedot</option>
                        <option value="1-on-1 Asiantuntijavalmennus">1-on-1 Asiantuntijavalmennus</option>
                        <option value="Ergonomia & Luennot">Ergonomia &amp; Luennot</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[var(--muted)] uppercase tracking-wider mb-1.5">
                      Viesti / Kuvaus tarpeesta
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Kerro lyhyesti sote-tiimisi koosta, aikataulusta ja toivotuista teemoista..."
                      className="w-full px-4 py-3 rounded-2xl bg-[var(--surface)] border border-[var(--border)] text-[var(--text)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--accent)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] text-sm transition-colors min-h-[44px]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-4 px-6 rounded-full bg-[var(--text)] text-[var(--bg)] font-semibold text-sm hover:opacity-90 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 min-h-[44px]"
                  >
                    <Send className="w-4 h-4 text-[var(--bg)]" />
                    <span>{status === "loading" ? "Lähetetään..." : "Lähetä Tarjouspyyntö"}</span>
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
