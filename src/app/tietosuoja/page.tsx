import Link from "next/link";
import { Shield, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Tietosuojaseloste | Tiedottajanne Oy",
  description: "Tiedottajanne Oy:n tietosuojaseloste ja henkil�tietojen k�sittelyperiaatteet.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-gray-200 space-y-8">
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#00AEEF] hover:underline">
        <ArrowLeft className="w-4 h-4" /> Takaisin etusivulle
      </Link>
      <div className="space-y-3 border-b border-[#0C66B4]/40 pb-6">
        <div className="flex items-center gap-3">
          <Shield className="w-8 h-8 text-[#00AEEF]" />
          <h1 className="text-3xl font-bold text-white">Tietosuojaseloste</h1>
        </div>
        <p className="text-sm text-gray-400">P�ivitetty: 23. elokuuta 2026</p>
      </div>

      <div className="space-y-6 text-sm leading-relaxed text-gray-300">
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-white">1. Rekisterinpit�j�</h2>
          <p>Tiedottajanne Oy (Y-tunnus: 3305813-7)<br />S�hk�posti: janne@tiedottajanne.fi</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-white">2. Ker�tt�v�t henkil�tiedot</h2>
          <p>K�sittelemme vain henkil�tietoja, jotka annat vapaaehtoisesti ota yhteytt� -lomakkeella tai uutiskirjeen tilauksen yhteydess� (esim. nimi, s�hk�postiosoite, puhelinnumero ja viestin sis�lt�).</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-white">3. Henkil�tietojen k�ytt�tarkoitus</h2>
          <p>Tietoja k�ytet��n yhteydenottopyynt�ihin vastaamiseen, palvelutarjousten laatimiseen, asiakassuhteen hoitamiseen sek� sovitusti viestinn�n ja uutiskirjeiden l�hett�miseen.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-white">4. Tietojen s�ilytys ja suojaus</h2>
          <p>Henkil�tietojasi k�sitell��n luottamuksellisesti ja suojatusti. Tietoja ei luovuteta ulkopuolisille kolmansille osapuolille ilman lakis��teist� velvoitetta tai eksplisiittist� suostumusta.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-white">5. Rekister�idyn oikeudet</h2>
          <p>Sinulla on oikeus tarkastaa itse�si koskevat henkil�tiedot, pyyt�� tietojen korjaamista tai poistamista sek� kielt�� tietojesi k�ytt� suoramarkkinointiin ottamalla yhteytt� rekisterinpit�j��n.</p>
        </section>
      </div>
    </div>
  );
}

