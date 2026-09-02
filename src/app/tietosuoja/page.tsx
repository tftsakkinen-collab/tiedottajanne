import Link from "next/link";
import { Shield, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Tietosuojaseloste | Tiedottajanne Oy",
  description: "Tiedottajanne Oy:n tietosuojaseloste ja henkilÃ¶tietojen kÃ¤sittelyperiaatteet.",
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
            <p className="text-xs text-[var(--muted)]">PÃ¤ivitetty: 23. elokuuta 2026</p>
          </div>

          <div className="space-y-6 text-sm leading-relaxed text-[var(--muted)]">
            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-[var(--text)] font-display">1. RekisterinpitÃ¤jÃ¤</h2>
              <p>Tiedottajanne Oy (Y-tunnus: 3305813-7)<br />SÃ¤hkÃ¶posti: janne@tiedottajanne.com</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-[var(--text)] font-display">2. KerÃ¤ttÃ¤vÃ¤t henkilÃ¶tiedot</h2>
              <p>KÃ¤sittelemme vain henkilÃ¶tietoja, jotka annat vapaaehtoisesti ota yhteyttÃ¤ -lomakkeella tai uutiskirjeen tilauksen yhteydessÃ¤ (esim. nimi, sÃ¤hkÃ¶postiosoite, puhelinnumero ja viestin sisÃ¤ltÃ¶).</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-[var(--text)] font-display">3. HenkilÃ¶tietojen kÃ¤yttÃ¶tarkoitus</h2>
              <p>Tietoja kÃ¤ytetÃ¤Ã¤n yhteydenottopyyntÃ¶ihin vastaamiseen, palvelutarjousten laatimiseen, asiakassuhteen hoitamiseen sekÃ¤ sovitusti viestinnÃ¤n ja uutiskirjeiden lÃ¤hettÃ¤miseen.</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-[var(--text)] font-display">4. Tietojen sÃ¤ilytys ja suojaus</h2>
              <p>HenkilÃ¶tietojasi kÃ¤sitellÃ¤Ã¤n luottamuksellisesti ja suojatusti. Tietoja ei luovuteta ulkopuolisille kolmansille osapuolille ilman lakisÃ¤Ã¤teistÃ¤ velvoitetta tai eksplisiittistÃ¤ suostumusta.</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-[var(--text)] font-display">5. RekisterÃ¶idyn oikeudet</h2>
              <p>Sinulla on oikeus tarkastaa itseÃ¤si koskevat henkilÃ¶tiedot, pyytÃ¤Ã¤ tietojen korjaamista tai poistamista sekÃ¤ kieltÃ¤Ã¤ tietojesi kÃ¤yttÃ¶ suoramarkkinointiin ottamalla yhteyttÃ¤ rekisterinpitÃ¤jÃ¤Ã¤n.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

