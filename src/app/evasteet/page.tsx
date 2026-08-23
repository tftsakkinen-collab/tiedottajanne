import Link from "next/link";
import { Cookie, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Evästekäytännöt | Tiedottajanne Oy",
  description: "Tiedottajanne Oy:n sivuston evästekäytännöt ja analytiikka.",
};

export default function CookiePolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-gray-200 space-y-8">
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#00AEEF] hover:underline">
        <ArrowLeft className="w-4 h-4" /> Takaisin etusivulle
      </Link>
      <div className="space-y-3 border-b border-[#0C66B4]/40 pb-6">
        <div className="flex items-center gap-3">
          <Cookie className="w-8 h-8 text-[#00AEEF]" />
          <h1 className="text-3xl font-bold text-white">Evästekäytännöt & Analytiikka</h1>
        </div>
        <p className="text-sm text-gray-400">Päivitetty: 23. elokuuta 2026</p>
      </div>

      <div className="space-y-6 text-sm leading-relaxed text-gray-300">
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-white">1. Mitä evästeet ovat?</h2>
          <p>Evästeet (cookies) ovat pieniä tekstitiedostoja, joita selain tallentaa laitteellesi verkkosivustolla vieraillessasi. Ne auttavat parantamaan käyttökokemusta ja ymmärtämään sivuston käyttöä.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-white">2. Käytettävä analytiikka (Microsoft Clarity)</h2>
          <p>Sivustollamme käytetään Microsoft Clarity -analytiikkapalvelua sivuston käytön, suorituskyvyn ja käyttökokemuksen parantamiseen. Clarity auttaa näkemään anonyymisti, miten sivustoa käytetään ja mitkä osiot kiinnostavat kävijöitä eniten.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-white">3. Evästeiden hallinta</h2>
          <p>Voit hallinnoida ja estää evästeitä selaimen omista asetuksista. Huomioithan, että evästeiden poistaminen käytöstä saattaa vaikuttaa tiettyjen verkkosivuston toimintojen toimivuuteen.</p>
        </section>
      </div>
    </div>
  );
}

