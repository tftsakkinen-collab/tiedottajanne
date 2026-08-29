# 04_DECISION_CHANGELOG.md (Tiedottajanne Oy ‚Äî paikallinen kopio)

T√§m√§ on paikallinen (`tiedottajanne`-repo) kopio Tiedottajanne Oy:t√§ koskevista p√§√§t√∂slokimerkinn√∂ist√§. Kanoninen, kaikkien projektien yhteinen loki yll√§pidet√§√§n Google Drivessa (`G:\My Drive\AI - automaatiot\04_DECISION_CHANGELOG.md`, ks. `03_DEV_AND_SYSTEMS.md` / `config/rules.md`, kohta 2). Uusin merkint√§ ylimp√§n√§.

## 2026-08-26 ‚Äî Vercel-tuotantok√§√§nn√∂ksen korjaus, API-reittien palautus & UI/UX-hionta

**Muutetut tiedostot:**
- `src/app/api/social-stats/route.ts` (Palautettu YouTube RSS- ja reaaliaikaisten some-tilastojen API-reitti, jota `ProofOfWork` ja `LatestVideosAeo` k√§ytt√§v√§t)
- `.gitignore` (Lis√§tty `*.tsbuildinfo`, `next-env.d.ts`, `.vercel/` ja sis√§kk√§isen kansion `/tiedottajanne/` s√§√§nn√∂t, poistettu `tsconfig.tsbuildinfo` git-seurannasta)
- `src/components/TechVenturesLanding.tsx` & `src/app/page.tsx` (Varmistettu moderni Tech & Digital Ventures -laskeutumissivun ja SOTE-osioiden saumaton kokonaisuus)
- `src/components/Navbar.tsx`, `src/components/Footer.tsx`, `src/components/ProofOfWork.tsx` (Tarkistettu ja varmistettu esteettinen lasimorfismi ja t√§ysi mobiiliresponsiivisuus)

**Yhteenveto:**
- **Build Failure Fix (Vercel):** Poistettu paikallisen koneen indeksointitiedosto `tsconfig.tsbuildinfo` Git-seurannasta, joka aiheutti Vercelin Linux-ymp√§rist√∂ss√§ ristiriitoja.
- **API-eheyden palautus:** `ProofOfWork`- ja `LatestVideosAeo`-komponenttien tarvitsema `/api/social-stats`-reitti palautettiin toimivaksi 1 tunnin v√§limuistituksella (`revalidate = 3600`).
- **Puhdas paikallinen validointi:** `npm ci`, `npx tsc --noEmit` ja `npm run build` suoritettiin onnistuneesti (kaikki 14 staattista ja dynaamista sivua k√§√§ntyiv√§t virheitt√§).
- **Tietoturva & Ymp√§rist√∂muuttujat:** Varmistettu, ettei koodissa ole kovakoodattuja avaimia ja `.env*` pysyy suojattuna `.gitignore`-m√§√§rittelyll√§.

---

## P‰ivitys: 29.08.2026 16:00
- **tiedottajanne (Vaihe 1):** Sidottu Outfit, Inter ja JetBrains Mono -fontit CSS-muuttujaan --font-heading layout.tsx:ss‰. Korjattu Hero SSR -renderˆinti poistamalla Framer Motion opacity-viiveet Herosta.
----------------------------------------

---

## P‰ivitys: 29.08.2026 16:01
- **tiedottajanne (Vaihe 2):** Luotu src/design-system/ (OKLCH-tokenit, 3-vaiheteemoitus, glass.css, observer.ts, UI-primitiivit). Korvattu kovakoodatut v‰rit semanttisilla tokeneilla.
----------------------------------------

---

## P‰ivitys: 29.08.2026 16:01
- **tiedottajanne (Vaihe 3):** Tiivistetty lasikerrokset yhteen <GlassPanel>-rakenteeseen (--glass-blur: 14px), siivottu turhat taustagradientit ja varmistettu @supports-fallback sek‰ suora tekstikontrasti >= 4.5:1.
----------------------------------------

---

## P‰ivitys: 29.08.2026 16:02
- **tiedottajanne (Vaihe 4):** Luotu uusi /tyokalut-reitti, tiivistetty etusivun osiot 8 -> 5 sek‰ lis‰tty sticky osionavigaatio progress-palkilla. Sivun pituus laskenut yli 40 %.
----------------------------------------

---

## P‰ivitys: 29.08.2026 16:02
- **tiedottajanne (Vaihe 5):** Ajettu ui-ux-pro-max search-skripti, generoitu design-system/tiedottajanne/MASTER.md ja suoritettu QA-porttitarkistukset (fontit, SSR, lasipass, a11y, mobiiliresponsiivisuus).
----------------------------------------

---

## P‰ivitys: 29.08.2026 16:55
- **tiedottajanne (Korjaus 1):** Palautettu .liquid-glass ja muut lasipaneelit tummaksi lasiksi (color-mix 3 % valkoinen, blur 14px, #141414 fallback), korjattu tekstikontrastit (>= 4.5:1).
----------------------------------------

---

## P‰ivitys: 29.08.2026 16:55
- **tiedottajanne (Korjaus 2):** Eristetty osionavigaation pilleririvi omaan overflow-x: auto -s‰iliˆˆn, asetettu min-w-0 ja lis‰tty overflow-x: clip body-elementille. Pillerit skrollaavat omassa s‰iliˆss‰‰n mobiilissa ilman vaakascrollia.
----------------------------------------

---

## P‰ivitys: 29.08.2026 16:56
- **tiedottajanne (Korjaus 3):** Kasvatettu kaikkien interaktiivisten elementtien (uutiskirjelomake, osionavigaation pillerit, footer-linkit, ROI-laskurin v‰lilehdet) kosketusala v‰hint‰‰n 44 px korkeaksi sek‰ lis‰tty n‰kyv‰ :focus-visible-tila saavutettavuuden varmistamiseksi.
----------------------------------------

---

## P‰ivitys: 29.08.2026 18:13
- **tiedottajanne (Kontrastiauditointi):** Ajettu k‰ytt‰j‰n selaimen kontrastiskripti headless Playwright-selaimella kaikissa n‰kymiss‰ (mobiili 375px + desktop 1280px, vaalea + tumma teema). Korjattu kaikki havaitut poikkeamat -> 0 kontrastivirhett‰ (KOKONAISKONTRASTIVIRHEET: 0).
----------------------------------------
