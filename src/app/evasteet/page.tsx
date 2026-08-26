import Link from "next/link";
import { Cookie, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Evästekäytännöt | Tiedottajanne Oy",
  description: "Tiedottajanne Oy:n sivuston evästekäytännöt ja analytiikka.",
};

export default function CookiePolicyPage() {
  return (
    <div className="py-20 bg-[#0c0c0c] min-h-screen text-white/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-[#00d2ff] hover:underline">
          <ArrowLeft className="w-4 h-4" /> Takaisin etusivulle
        </Link>

        <div className="liquid-glass rounded-3xl p-8 sm:p-12 space-y-8">
          <div className="space-y-3 border-b border-white/10 pb-6">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00d2ff]/20 to-[#014489]/30 border border-[#00d2ff]/30 text-[#00d2ff] flex items-center justify-center">
                <Cookie className="w-5 h-5" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Evästekäytännöt &amp; Analytiikka</h1>
            </div>
            <p className="text-xs text-white/50">Päivitetty: 23. elokuuta 2026</p>
          </div>

          <div className="space-y-6 text-sm leading-relaxed text-white/70">
            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-white">1. Mitä evästeet ovat?</h2>
              <p>Evästeet (cookies) ovat pieniä tekstitiedostoja, joita selain tallentaa laitteellesi verkkosivustolla vieraillessasi. Ne auttavat parantamaan käyttökokemusta ja ymmärtämään sivuston käyttöä.</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-white">2. Käytettävä analytiikka (Microsoft Clarity)</h2>
              <p>Sivustollamme käytetään Microsoft Clarity -analytiikkapalvelua sivuston käytön, suorituskyvyn ja käyttökokemuksen parantamiseen. Clarity auttaa näkemään anonyymisti, miten sivustoa käytetään ja mitkä osiot kiinnostavat kävijöitä eniten.</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-white">3. Evästeiden hallinta</h2>
              <p>Voit hallinnoida ja estää evästeitä selaimen omista asetuksista. Huomioithan, että evästeiden poistaminen käytöstä saattaa vaikuttaa tiettyjen verkkosivuston toimintojen toimivuuteen.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
