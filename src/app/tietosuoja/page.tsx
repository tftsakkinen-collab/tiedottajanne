import Link from "next/link";
import { Shield, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Tietosuojaseloste | Tiedottajanne Oy",
  description: "Tiedottajanne Oy:n tietosuojaseloste ja henkilötietojen käsittelyperiaatteet.",
};

export default function PrivacyPolicyPage() {
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
                <Shield className="w-5 h-5" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text)] tracking-tight font-display">Tietosuojaseloste</h1>
            </div>
            <p className="text-xs text-[var(--muted)]">Päivitetty: 23. elokuuta 2026</p>
          </div>

          <div className="space-y-6 text-sm leading-relaxed text-[var(--muted)]">
            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-[var(--text)] font-display">1. Rekisterinpitäjä</h2>
              <p>Tiedottajanne Oy (Y-tunnus: 3305813-7)<br />Sähköposti: janne@tiedottajanne.com</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-[var(--text)] font-display">2. Kerättävät henkilötiedot</h2>
              <p>Käsittelemme vain henkilötietoja, jotka annat vapaaehtoisesti ota yhteyttä -lomakkeella tai uutiskirjeen tilauksen yhteydessä (esim. nimi, sähköpostiosoite, puhelinnumero ja viestin sisältö).</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-[var(--text)] font-display">3. Henkilötietojen käyttötarkoitus</h2>
              <p>Tietoja käytetään yhteydenottopyyntöihin vastaamiseen, palvelutarjousten laatimiseen, asiakassuhteen hoitamiseen sekä sovitusti viestinnän ja uutiskirjeiden lähettämiseen.</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-[var(--text)] font-display">4. Tietojen säilytys ja suojaus</h2>
              <p>Henkilötietojasi käsitellään luottamuksellisesti ja suojatusti. Tietoja ei luovuteta ulkopuolisille kolmansille osapuolille ilman lakisääteistä velvoitetta tai eksplisiittistä suostumusta.</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-[var(--text)] font-display">5. Rekisteröidyn oikeudet</h2>
              <p>Sinulla on oikeus tarkastaa itseäsi koskevat henkilötiedot, pyytää tietojen korjaamista tai poistamista sekä kieltää tietojesi käyttö suoramarkkinointiin ottamalla yhteyttä rekisterinpitäjään.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

