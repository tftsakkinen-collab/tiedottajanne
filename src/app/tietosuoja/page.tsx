import Link from "next/link";
import { Shield, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Tietosuojaseloste | Tiedottajanne Oy",
  description: "Tiedottajanne Oy:n tietosuojaseloste ja henkilötietojen käsittelyperiaatteet.",
};

export default function PrivacyPolicyPage() {
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
                <Shield className="w-5 h-5" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Tietosuojaseloste</h1>
            </div>
            <p className="text-xs text-white/50">Päivitetty: 23. elokuuta 2026</p>
          </div>

          <div className="space-y-6 text-sm leading-relaxed text-white/70">
            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-white">1. Rekisterinpitäjä</h2>
              <p>Tiedottajanne Oy (Y-tunnus: 3305813-7)<br />Sähköposti: janne@tiedottajanne.fi</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-white">2. Kerättävät henkilötiedot</h2>
              <p>Käsittelemme vain henkilötietoja, jotka annat vapaaehtoisesti ota yhteyttä -lomakkeella tai uutiskirjeen tilauksen yhteydessä (esim. nimi, sähköpostiosoite, puhelinnumero ja viestin sisältö).</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-white">3. Henkilötietojen käyttötarkoitus</h2>
              <p>Tietoja käytetään yhteydenottopyyntöihin vastaamiseen, palvelutarjousten laatimiseen, asiakassuhteen hoitamiseen sekä sovitusti viestinnän ja uutiskirjeiden lähettämiseen.</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-white">4. Tietojen säilytys ja suojaus</h2>
              <p>Henkilötietojasi käsitellään luottamuksellisesti ja suojatusti. Tietoja ei luovuteta ulkopuolisille kolmansille osapuolille ilman lakisääteistä velvoitetta tai eksplisiittistä suostumusta.</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-white">5. Rekisteröidyn oikeudet</h2>
              <p>Sinulla on oikeus tarkastaa itseäsi koskevat henkilötiedot, pyytää tietojen korjaamista tai poistamista sekä kieltää tietojesi käyttö suoramarkkinointiin ottamalla yhteyttä rekisterinpitäjään.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
