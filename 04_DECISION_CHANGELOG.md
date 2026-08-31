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

## 2026-08-31 — Tuotemallin ja sivuston radikaali yksinkertaistus (200 € / h Meet ainoa tuote, yritykset lomakkeella)

**Muutetut tiedostot:**
- `src/app/page.tsx` (Etusivu virtaviivaistettu: esillä selkeästi 200 € / h Meet -tuntiohjaus ainoana päätuotteena ja räätälöity yritystarjousboxi)
- `src/components/ServicesAndTraining.tsx` & `src/app/palvelut/page.tsx` (Poistettu ylimääräiset kiinteät monipakettirakenteet, keskitetty 200 € / h Google Meet -tuntiohjaukseen ja räätälöityihin yrityspalveluihin)
- `src/components/ConsultingBookingSection.tsx` (Yksinkertaistettu tilausvalikko tukemaan suoraa 200 € / h Meet -tilausta sekä yritysten räätälöityä tarjouspyyntöä)
- `src/components/Navbar.tsx` (PääCTA muutettu muotoon "Tilaa Tuntiohjaus (200 €/h)")
- `public/llms.txt` & `public/llms-full.txt` (Päivitetty tekoälyindeksit kuvaamaan 200 € / h tuntiohjaus ainoana kiinteänä tuotteena)

**Yhteenveto:**
- Sivuston myyntimalli yksinkertaistettu: Yksi ainoa suoraan myytävä tuote (Somenkonsultointi & Google Meet -tuntiohjaus, 200 € + alv / h). Kaikki yritysten laajemmat luennot ja koulutukset ohjataan yhteydenottolomakkeeseen räätälöitäväksi.

## 2026-08-31 — Sivuston kokonaisvaltainen auditointi, kanonisointi, matala 5-sivun hierarkia & AEO/SEO-uudistus

**Muutetut tiedostot:**
- `next.config.mjs` (Lisätty 301-uudelleenohjaukset vanhoista reiteistä `/kasikirja` ja `/promptit` kohteeseen `/tyokalut`)
- `src/data/config.ts` (Määritetty kanoninen domain `tiedottajanne.fi` ja `canonicalUrl`)
- `src/app/layout.tsx` (Päivitetty globaali metadata, canonical-tagit ja Schema.org Organization + Person)
- `src/components/Navbar.tsx` & `src/components/Footer.tsx` (Päivitetty suorat sivulinkit `/`, `/palvelut`, `/referenssit`, `/tyokalut`, `/yhteystiedot` ja korostettu 48px pääCTA)
- `src/app/page.tsx` (Tiivistetty etusivu 9 raskaan komponentin ketjusta 5 kevyeen ja nopeaan osioon: Hero, 3 pilaria, Janne Säkkinen -esittely, Palveluteaser, PääCTA)
- `src/app/palvelut/page.tsx` (Uusi sivu: Koulutuspaketit, Google Meet 200€/h, FAQ-osio ja FAQPage Schema)
- `src/app/referenssit/page.tsx` (Uudistettu sivu: Proof of Work, 4 kanavaa, AEO-videofeed, kuvagalleria ja BreadcrumbList Schema)
- `src/app/tyokalut/page.tsx` (Uusi sivu: SOTE ROI -laskuri, AI-promptikirjasto, Käsikirja ja Sanasto)
- `src/app/yhteystiedot/page.tsx` (Uudistettu sivu: Tilaus- ja tarjouslomake, LocalBusiness Schema)
- `src/app/sitemap.xml/route.ts` & `src/app/robots.txt/route.ts` (Päivitetty kanoninen sivukartta ja indeksointisäännöt)
- `public/llms.txt` & `public/llms-full.txt` (Päivitetty tekoälyindeksit vastaamaan uutta matalaa rakennetta)

**Yhteenveto:**
- Sivuston rakenne virtaviivaistettu matalaksi, helposti löydettäväksi ja tekoälyhakukoneille (ChatGPT, Perplexity, Google AI Overviews) optimaaliseksi.
- Etusivun JavaScript-kuorma ja pituus pienennetty murto-osaan aiemmasta.
- Yksi selkeä konversiotavoite (Tarjouspyyntö / Google Meet -ohjaus) nostettu etualalle kaikilla sivuilla.
- Täysi TypeScript- ja tuotantokäännöksen validointi (`npm run build`, 16/16 reittiä generoitu onnistuneesti).

## 2026-08-31 — Somenkonsultoinnin Google Meet -tuntiohjauksen (200 € / h) lisäys palveluihin ja tilauslomakkeeseen

**Muutetut tiedostot:**
- `src/components/ServicesAndTraining.tsx` (Lisätty uusi tuotteistettu Google Meet -tuntiohjaus 200 € / h -paketti, responsiivinen 3 sarakkeen asettelu ja korostettu korttityyli)
- `src/components/ConsultingBookingSection.tsx` (Päivitetty lomake ja palveluvalikko tukemaan suoraa Google Meet -tuntikonsultoinnin tilausta sekä yhteydenottoa)
- `SOMENKONSULTOINTI_SUUNNITELMA.md` (Dokumentoitu palvelukonsepti, kohderyhmät ja sähköpostiohjaus)

**Yhteenveto:**
- Tuotteistettu matalan kynnyksen 1-on-1 / tiimikohtainen somesparraus Google Meetissä (200 € + alv / h) Tiedottajanne Oy:n verkkosivuille.
- Päivitetty tilauslomake ohjaamaan asiakkaiden yhteydenottopyynnöt ja toiveet aikataulutusta varten.
- TypeScript-tarkistus (`npx.cmd tsc --noEmit`) ja tuotantokäännös (`npm.cmd run build`) validoitu onnistuneesti ilman virheitä.

## 2026-08-26 — Vercel-tuotantokäännöksen korjaus, API-reittien palautus & UI/UX-hionta

**Muutetut tiedostot:**
- `src/app/api/social-stats/route.ts` (Palautettu YouTube RSS- ja reaaliaikaisten some-tilastojen API-reitti, jota `ProofOfWork` ja `LatestVideosAeo` käyttävät)
- `.gitignore` (Lisätty `*.tsbuildinfo`, `next-env.d.ts`, `.vercel/` ja sisäkkäisen kansion `/tiedottajanne/` säännöt, poistettu `tsconfig.tsbuildinfo` git-seurannasta)
- `src/components/TechVenturesLanding.tsx` & `src/app/page.tsx` (Varmistettu moderni Tech & Digital Ventures -laskeutumissivun ja SOTE-osioiden saumaton kokonaisuus)
- `src/components/Navbar.tsx`, `src/components/Footer.tsx`, `src/components/ProofOfWork.tsx` (Tarkistettu ja varmistettu esteettinen lasimorfismi ja täysi mobiiliresponsiivisuus)
