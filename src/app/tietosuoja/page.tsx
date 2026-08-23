import Link from "next/link";
import { Shield, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Tietosuojaseloste | Tiedottajanne Oy",
  description: "Tiedottajanne Oy:n tietosuojaseloste ja henkilötietojen käsittelyperiaatteet.",
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
        <p className="text-sm text-gray-400">Päivitetty: 23. elokuuta 2026</p>
      </div>

      <div className="space-y-6 text-sm leading-relaxed text-gray-300">
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-white">1. Rekisterinpitäjä</h2>
          <p>Tiedottajanne Oy (Y-tunnus: 3305813-7)<br />Sähköposti: janne@tiedottajanne.fi</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-white">2. Kerättävät henkilötiedot</h2>
          <p>Käsittelemme vain henkilötietoja, jotka annat vapaaehtoisesti ota yhteyttä -lomakkeella tai uutiskirjeen tilauksen yhteydessä (esim. nimi, sähköpostiosoite, puhelinnumero ja viestin sisältö).</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-white">3. Henkilötietojen käyttötarkoitus</h2>
          <p>Tietoja käytetään yhteydenottopyyntöihin vastaamiseen, palvelutarjousten laatimiseen, asiakassuhteen hoitamiseen sekä sovitusti viestinnän ja uutiskirjeiden lähettämiseen.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-white">4. Tietojen säilytys ja suojaus</h2>
          <p>Henkilötietojasi käsitellään luottamuksellisesti ja suojatusti. Tietoja ei luovuteta ulkopuolisille kolmansille osapuolille ilman lakisääteistä velvoitetta tai eksplisiittistä suostumusta.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-white">5. Rekisteröidyn oikeudet</h2>
          <p>Sinulla on oikeus tarkastaa itseäsi koskevat henkilötiedot, pyytää tietojen korjaamista tai poistamista sekä kieltää tietojesi käyttö suoramarkkinointiin ottamalla yhteyttä rekisterinpitäjään.</p>
        </section>
      </div>
    </div>
  );
}

