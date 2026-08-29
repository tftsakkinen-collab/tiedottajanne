import Link from "next/link";
import { Cookie, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Evästekäytännöt | Tiedottajanne Oy",
  description: "Tiedottajanne Oy:n sivuston evästekäytännöt ja analytiikka.",
};

export default function CookiePolicyPage() {
  return (
    <div className="py-12 md:py-16 bg-[var(--bg)] min-h-screen text-[var(--text)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--accent)] hover:underline min-h-[44px]">
          <ArrowLeft className="w-4 h-4" /> Takaisin etusivulle
        </Link>

        <div className="glass rounded-3xl p-8 sm:p-12 space-y-8">
          <div className="space-y-3 border-b border-[var(--border)] pb-6">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[var(--surface-elevated)] border border-[var(--accent)]/30 text-[var(--accent)] flex items-center justify-center">
                <Cookie className="w-5 h-5" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text)] tracking-tight font-display">Evästekäytännöt &amp; Analytiikka</h1>
            </div>
            <p className="text-xs text-[var(--muted)]">Päivitetty: 23. elokuuta 2026</p>
          </div>

          <div className="space-y-6 text-sm leading-relaxed text-[var(--muted)]">
            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-[var(--text)] font-display">1. Mitä evästeet ovat?</h2>
              <p>Evästeet (cookies) ovat pieniä tekstitiedostoja, joita selain tallentaa laitteellesi verkkosivustolla vieraillessasi. Ne auttavat parantamaan käyttökokemusta ja ymmärtämään sivuston käyttöä.</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-[var(--text)] font-display">2. Käytettävä analytiikka (Microsoft Clarity)</h2>
              <p>Sivustollamme käytetään Microsoft Clarity -analytiikkapalvelua sivuston käytön, suorituskyvyn ja käyttökokemuksen parantamiseen. Clarity auttaa näkemään anonyymisti, miten sivustoa käytetään ja mitkä osiot kiinnostavat kävijöitä eniten.</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-[var(--text)] font-display">3. Evästeiden hallinta</h2>
              <p>Voit hallinnoida ja estää evästeitä selaimen omista asetuksista. Huomioithan, että evästeiden poistaminen käytöstä saattaa vaikuttaa tiettyjen verkkosivuston toimintojen toimivuuteen.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
