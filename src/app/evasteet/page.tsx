import Link from "next/link";
import { Cookie, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Ev�stek�yt�nn�t | Tiedottajanne Oy",
  description: "Tiedottajanne Oy:n sivuston ev�stek�yt�nn�t ja analytiikka.",
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
          <h1 className="text-3xl font-bold text-white">Ev�stek�yt�nn�t & Analytiikka</h1>
        </div>
        <p className="text-sm text-gray-400">P�ivitetty: 23. elokuuta 2026</p>
      </div>

      <div className="space-y-6 text-sm leading-relaxed text-gray-300">
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-white">1. Mit� ev�steet ovat?</h2>
          <p>Ev�steet (cookies) ovat pieni� tekstitiedostoja, joita selain tallentaa laitteellesi verkkosivustolla vieraillessasi. Ne auttavat parantamaan k�ytt�kokemusta ja ymm�rt�m��n sivuston k�ytt��.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-white">2. K�ytett�v� analytiikka (Microsoft Clarity)</h2>
          <p>Sivustollamme k�ytet��n Microsoft Clarity -analytiikkapalvelua sivuston k�yt�n, suorituskyvyn ja k�ytt�kokemuksen parantamiseen. Clarity auttaa n�kem��n anonyymisti, miten sivustoa k�ytet��n ja mitk� osiot kiinnostavat k�vij�it� eniten.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-white">3. Ev�steiden hallinta</h2>
          <p>Voit hallinnoida ja est�� ev�steit� selaimen omista asetuksista. Huomioithan, ett� ev�steiden poistaminen k�yt�st� saattaa vaikuttaa tiettyjen verkkosivuston toimintojen toimivuuteen.</p>
        </section>
      </div>
    </div>
  );
}

