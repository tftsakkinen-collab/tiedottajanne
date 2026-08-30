## Päivitys: 30.08.2026 08:56
- Korjattu valokuvien ja YouTube-pikkukuvien lataus (tiedottajanne): Päivitetty ProofOfWork.tsx:n GALLERY_PHOTOS viittaamaan olemassa oleviin public/assets/ -kuviin /images/ sijaan, ja määritelty YouTube-kuvadomainit (img.youtube.com & i.ytimg.com) next.config.mjs:n remotePatterns-konfiguraatioon.
- Auditointi: AA-kontrastitestaus 0 virhettä kaikissa näkymissä.
--------------------------------------------------
## Päivitys: 29.08.2026 23:35
- P0-Triage virheenkorjaus (tiedottajanne): Toteutettu React SocialStatsErrorBoundary ja valinnaisketjutustarkistukset /api/social-stats -reitille ja metriikkakomponenteille (ProofOfWork & LatestVideosAeo).
- Yhtenäistetty ilmekerros (design-system/): Luotu tokens.css, brand.sakkinen.css, primitives.css (.btn, .card, .pill, .glass) ja base.css. Outfit (display) + Inter (body) fonttiarkkitehtuuri ja WCAG AA -kontrastiauditointi (Kontrastivirheitä: 0).
--------------------------------------------------
# 04_DECISION_CHANGELOG.md (Tiedottajanne Oy â€” paikallinen kopio)

TÃ¤mÃ¤ on paikallinen (`tiedottajanne`-repo) kopio Tiedottajanne Oy:tÃ¤ koskevista pÃ¤Ã¤tÃ¶slokimerkinnÃ¶istÃ¤. Kanoninen, kaikkien projektien yhteinen loki yllÃ¤pidetÃ¤Ã¤n Google Drivessa (`G:\My Drive\AI - automaatiot\04_DECISION_CHANGELOG.md`, ks. `03_DEV_AND_SYSTEMS.md` / `config/rules.md`, kohta 2). Uusin merkintÃ¤ ylimpÃ¤nÃ¤.

## 2026-08-26 â€” Vercel-tuotantokÃ¤Ã¤nnÃ¶ksen korjaus, API-reittien palautus & UI/UX-hionta

**Muutetut tiedostot:**
- `src/app/api/social-stats/route.ts` (Palautettu YouTube RSS- ja reaaliaikaisten some-tilastojen API-reitti, jota `ProofOfWork` ja `LatestVideosAeo` kÃ¤yttÃ¤vÃ¤t)
- `.gitignore` (LisÃ¤tty `*.tsbuildinfo`, `next-env.d.ts`, `.vercel/` ja sisÃ¤kkÃ¤isen kansion `/tiedottajanne/` sÃ¤Ã¤nnÃ¶t, poistettu `tsconfig.tsbuildinfo` git-seurannasta)
- `src/components/TechVenturesLanding.tsx` & `src/app/page.tsx` (Varmistettu moderni Tech & Digital Ventures -laskeutumissivun ja SOTE-osioiden saumaton kokonaisuus)
- `src/components/Navbar.tsx`, `src/components/Footer.tsx`, `src/components/ProofOfWork.tsx` (Tarkistettu ja varmistettu esteettinen lasimorfismi ja tÃ¤ysi mobiiliresponsiivisuus)

**Yhteenveto:**
- **Build Failure Fix (Vercel):** Poistettu paikallisen koneen indeksointitiedosto `tsconfig.tsbuildinfo` Git-seurannasta, joka aiheutti Vercelin Linux-ympÃ¤ristÃ¶ssÃ¤ ristiriitoja.
- **API-eheyden palautus:** `ProofOfWork`- ja `LatestVideosAeo`-komponenttien tarvitsema `/api/social-stats`-reitti palautettiin toimivaksi 1 tunnin vÃ¤limuistituksella (`revalidate = 3600`).
- **Puhdas paikallinen validointi:** `npm ci`, `npx tsc --noEmit` ja `npm run build` suoritettiin onnistuneesti (kaikki 14 staattista ja dynaamista sivua kÃ¤Ã¤ntyivÃ¤t virheittÃ¤).
- **Tietoturva & YmpÃ¤ristÃ¶muuttujat:** Varmistettu, ettei koodissa ole kovakoodattuja avaimia ja `.env*` pysyy suojattuna `.gitignore`-mÃ¤Ã¤rittelyllÃ¤.

---

## Päivitys: 29.08.2026 16:00
- **tiedottajanne (Vaihe 1):** Sidottu Outfit, Inter ja JetBrains Mono -fontit CSS-muuttujaan --font-heading layout.tsx:ssä. Korjattu Hero SSR -renderöinti poistamalla Framer Motion opacity-viiveet Herosta.
----------------------------------------

---

## Päivitys: 29.08.2026 16:01
- **tiedottajanne (Vaihe 2):** Luotu src/design-system/ (OKLCH-tokenit, 3-vaiheteemoitus, glass.css, observer.ts, UI-primitiivit). Korvattu kovakoodatut värit semanttisilla tokeneilla.
----------------------------------------

---

## Päivitys: 29.08.2026 16:01
- **tiedottajanne (Vaihe 3):** Tiivistetty lasikerrokset yhteen <GlassPanel>-rakenteeseen (--glass-blur: 14px), siivottu turhat taustagradientit ja varmistettu @supports-fallback sekä suora tekstikontrasti >= 4.5:1.
----------------------------------------

---

## Päivitys: 29.08.2026 16:02
- **tiedottajanne (Vaihe 4):** Luotu uusi /tyokalut-reitti, tiivistetty etusivun osiot 8 -> 5 sekä lisätty sticky osionavigaatio progress-palkilla. Sivun pituus laskenut yli 40 %.
----------------------------------------

---

## Päivitys: 29.08.2026 16:02
- **tiedottajanne (Vaihe 5):** Ajettu ui-ux-pro-max search-skripti, generoitu design-system/tiedottajanne/MASTER.md ja suoritettu QA-porttitarkistukset (fontit, SSR, lasipass, a11y, mobiiliresponsiivisuus).
----------------------------------------

---

## Päivitys: 29.08.2026 16:55
- **tiedottajanne (Korjaus 1):** Palautettu .liquid-glass ja muut lasipaneelit tummaksi lasiksi (color-mix 3 % valkoinen, blur 14px, #141414 fallback), korjattu tekstikontrastit (>= 4.5:1).
----------------------------------------

---

## Päivitys: 29.08.2026 16:55
- **tiedottajanne (Korjaus 2):** Eristetty osionavigaation pilleririvi omaan overflow-x: auto -säiliöön, asetettu min-w-0 ja lisätty overflow-x: clip body-elementille. Pillerit skrollaavat omassa säiliössään mobiilissa ilman vaakascrollia.
----------------------------------------

---

## Päivitys: 29.08.2026 16:56
- **tiedottajanne (Korjaus 3):** Kasvatettu kaikkien interaktiivisten elementtien (uutiskirjelomake, osionavigaation pillerit, footer-linkit, ROI-laskurin välilehdet) kosketusala vähintään 44 px korkeaksi sekä lisätty näkyvä :focus-visible-tila saavutettavuuden varmistamiseksi.
----------------------------------------

---

## Päivitys: 29.08.2026 18:13
- **tiedottajanne (Kontrastiauditointi):** Ajettu käyttäjän selaimen kontrastiskripti headless Playwright-selaimella kaikissa näkymissä (mobiili 375px + desktop 1280px, vaalea + tumma teema). Korjattu kaikki havaitut poikkeamat -> 0 kontrastivirhettä (KOKONAISKONTRASTIVIRHEET: 0).
----------------------------------------

## PÃ¤ivitys: 29.08.2026 21:16
Poistettu feature-korttien jÃ¤lkeinen tyhjÃ¤ alue, kytketty SÃ¤kkinen design system OKLCH-tokenit taustoihin, yhtenÃ¤istetty vÃ¤rit, korjattu mobiili kosketusalueet (>=44px) ja auditoitu kontrastit (0 virhettÃ¤).
--------------------------------------------------


