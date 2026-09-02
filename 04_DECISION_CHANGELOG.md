## Päivitys: 02.09.2026 08:05
- Luotu konvertoiva SOTE-myyntisivu reitille /palvelut (tiedottajanne): Toteutettu "Oma maa vs. Vuokramaa" -konsepti, 499 € Perustajatarjous (10 ensimmäiselle, FOMO), 29 €/kk huoleton ylläpito sekä 200 €/h somekoulutuksen lisämyynti valmiilla Stripe-ostopainikepaikolla.
- Auditointi: Next.js tuotantobuild (16/16 sivua), AA-kontrastitestaus 0 virhettä kaikissa näkymissä.
--------------------------------------------------
## Päivitys: 31.08.2026 12:50
- Sivuston tuotemallin ja sivuhierarkian täysi selkeytys:
  - 200 € / h Google Meet -tuntiohjaus asetettu ainoaksi suoraan myytäväksi tuotteeksi.
  - Kaikki yrityskohtaiset luennot ja koulutukset ohjattu yhteydenottolomakkeelle räätälöitäväksi.
  - Etusivu, palvelusivu ja lomake päivitetty tukemaan tätä selkeää 2-osaista mallia.
- Domainin kanonisointi ja 5 pääsivun hierarkia (/palvelut, /referenssit, /tyokalut, /yhteystiedot).
--------------------------------------------------
## Päivitys: 30.08.2026 08:56
- Korjattu valokuvien ja YouTube-pikkukuvien lataus (tiedottajanne): Päivitetty ProofOfWork.tsx:n GALLERY_PHOTOS viittaamaan olemassa oleviin public/assets/ -kuviin /images/ sijaan, ja määritelty YouTube-kuvadomainit (img.youtube.com & i.ytimg.com) next.config.mjs:n remotePatterns-konfiguraatioon.
- Auditointi: AA-kontrastitestaus 0 virhettä kaikissa näkymissä.
--------------------------------------------------
## Päivitys: 29.08.2026 23:35
- P0-Triage virheenkorjaus (tiedottajanne): Toteutettu React SocialStatsErrorBoundary ja valinnaisketjutustarkistukset /api/social-stats -reitille ja metriikkakomponenteille (ProofOfWork & LatestVideosAeo).
- Yhtenäistetty ilmekerros (design-system/): Luotu tokens.css, brand.sakkinen.css, primitives.css (.btn, .card, .pill, .glass) ja base.css. Outfit (display) + Inter (body) fonttiarkkitehtuuri ja WCAG AA -kontrastiauditointi (Kontrastivirheitä: 0).
--------------------------------------------------
# 04_DECISION_CHANGELOG.md (Tiedottajanne Oy — paikallinen kopio)

Tämä on paikallinen (`tiedottajanne`-repo) kopio Tiedottajanne Oy:tä koskevista päätöslokimerkinnöistä. Kanoninen, kaikkien projektien yhteinen loki ylläpidetään Google Drivessa (`G:\My Drive\AI - automaatiot\04_DECISION_CHANGELOG.md`, ks. `03_DEV_AND_SYSTEMS.md` / `config/rules.md`, kohta 2). Uusin merkintä ylimpänä.
