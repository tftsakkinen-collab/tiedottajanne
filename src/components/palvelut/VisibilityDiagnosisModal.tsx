"use client";

import { useState } from "react";
import { Calendar, Clock, CheckCircle2, Send, X, ShieldCheck, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/data/config";

interface VisibilityDiagnosisModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VisibilityDiagnosisModal({ isOpen, onClose }: VisibilityDiagnosisModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    profession: "",
    currentPortal: "",
    message: "",
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("/palaute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tyyppi: "Näkyvyysdiagnoosi (45 min)",
          ...formData,
        }),
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl glass rounded-3xl p-6 sm:p-8 border border-[var(--accent)]/40 shadow-2xl bg-[var(--surface)] text-[var(--text)] overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--muted)] hover:text-[var(--text)] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
          aria-label="Sulje ikkuna"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="space-y-6">
            
            {/* Header */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-mono font-bold">
                <Clock className="w-3.5 h-3.5" />
                <span>ILMAINEN ETÄKARTOITUS (45 MIN)</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-[var(--text)]">
                Varaa Näkyvyysdiagnoosi
              </h3>
              <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                Selvitämme 45 minuutin maksuttomassa etätapaamisessa, kuka todella omistaa brändisi tällä hetkellä ja miten tekoälyt (ChatGPT, Gemini) näkevät sinut. Ei ostopakkoa.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div>
                <label className="block text-xs font-semibold text-[var(--text)] mb-1 font-display">
                  Nimi *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Esim. Matti Meikäläinen"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--bg)] text-[var(--text)] placeholder-[var(--muted)] text-sm focus:outline-none focus:border-[var(--accent)] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[var(--text)] mb-1 font-display">
                    Sähköposti *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="matti@fysio.fi"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--bg)] text-[var(--text)] placeholder-[var(--muted)] text-sm focus:outline-none focus:border-[var(--accent)] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[var(--text)] mb-1 font-display">
                    Puhelinnumero
                  </label>
                  <input
                    type="tel"
                    placeholder="040 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--bg)] text-[var(--text)] placeholder-[var(--muted)] text-sm focus:outline-none focus:border-[var(--accent)] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[var(--text)] mb-1 font-display">
                    Ammatti / Erikoisala *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Esim. OMT-Fysioterapeutti"
                    value={formData.profession}
                    onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--bg)] text-[var(--text)] placeholder-[var(--muted)] text-sm focus:outline-none focus:border-[var(--accent)] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[var(--text)] mb-1 font-display">
                    Nykyinen varausjärjestelmä
                  </label>
                  <input
                    type="text"
                    placeholder="Esim. Terveystalo, Norre jne."
                    value={formData.currentPortal}
                    onChange={(e) => setFormData({ ...formData, currentPortal: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--bg)] text-[var(--text)] placeholder-[var(--muted)] text-sm focus:outline-none focus:border-[var(--accent)] transition-colors"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn--primary w-full py-3.5 text-base font-bold flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                <Send className="w-5 h-5 text-[var(--accent-ink)]" />
                <span>{loading ? "Lähetetään..." : "Varaa Ilmainen 45 min Diagnoosi"}</span>
              </button>

            </form>

            <div className="flex items-center justify-center gap-4 text-[11px] text-[var(--muted)] font-mono pt-2 border-t border-[var(--border)]">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[var(--success)]" />
                100 % Maksuton
              </span>
              <span className="flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[var(--accent)]" />
                Ei ostopakkoa
              </span>
            </div>

          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[var(--success)]/10 text-[var(--success)] flex items-center justify-center mx-auto border border-[var(--success)]/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-display text-[var(--text)]">
              Varauspyyntö lähetetty!
            </h3>
            <p className="text-sm text-[var(--muted)] max-w-md mx-auto leading-relaxed">
              Kiitos! Olemme sinuun yhteydessä sähköpostitse tai puhelimitse 24 tunnin sisällä ehdottaaksemme sopivaa 45 minuutin etäaikaa.
            </p>
            <button
              onClick={onClose}
              className="btn btn--outline mt-4 px-6 py-2.5 text-sm font-semibold cursor-pointer"
            >
              Sulje
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
