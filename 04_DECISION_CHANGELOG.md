# 04_DECISION_CHANGELOG.md (Tiedottajanne Oy — paikallinen kopio)

Tämä on paikallinen (`tiedottajanne`-repo) kopio Tiedottajanne Oy:tä koskevista päätöslokimerkinnöistä. Kanoninen, kaikkien projektien yhteinen loki ylläpidetään Google Drivessa (`G:\My Drive\AI - automaatiot\04_DECISION_CHANGELOG.md`, ks. `03_DEV_AND_SYSTEMS.md` / `config/rules.md`, kohta 2). Uusin merkintä ylimpänä.

## 2026-08-26 — Vercel-tuotantokäännöksen korjaus, API-reittien palautus & UI/UX-hionta

**Muutetut tiedostot:**
- `src/app/api/social-stats/route.ts` (Palautettu YouTube RSS- ja reaaliaikaisten some-tilastojen API-reitti, jota `ProofOfWork` ja `LatestVideosAeo` käyttävät)
- `.gitignore` (Lisätty `*.tsbuildinfo`, `next-env.d.ts`, `.vercel/` ja sisäkkäisen kansion `/tiedottajanne/` säännöt, poistettu `tsconfig.tsbuildinfo` git-seurannasta)
- `src/components/TechVenturesLanding.tsx` & `src/app/page.tsx` (Varmistettu moderni Tech & Digital Ventures -laskeutumissivun ja SOTE-osioiden saumaton kokonaisuus)
- `src/components/Navbar.tsx`, `src/components/Footer.tsx`, `src/components/ProofOfWork.tsx` (Tarkistettu ja varmistettu esteettinen lasimorfismi ja täysi mobiiliresponsiivisuus)

**Yhteenveto:**
- **Build Failure Fix (Vercel):** Poistettu paikallisen koneen indeksointitiedosto `tsconfig.tsbuildinfo` Git-seurannasta, joka aiheutti Vercelin Linux-ympäristössä ristiriitoja.
- **API-eheyden palautus:** `ProofOfWork`- ja `LatestVideosAeo`-komponenttien tarvitsema `/api/social-stats`-reitti palautettiin toimivaksi 1 tunnin välimuistituksella (`revalidate = 3600`).
- **Puhdas paikallinen validointi:** `npm ci`, `npx tsc --noEmit` ja `npm run build` suoritettiin onnistuneesti (kaikki 14 staattista ja dynaamista sivua kääntyivät virheittä).
- **Tietoturva & Ympäristömuuttujat:** Varmistettu, ettei koodissa ole kovakoodattuja avaimia ja `.env*` pysyy suojattuna `.gitignore`-määrittelyllä.

---

## P�ivitys: 29.08.2026 16:00
- **tiedottajanne (Vaihe 1):** Sidottu Outfit, Inter ja JetBrains Mono -fontit CSS-muuttujaan --font-heading layout.tsx:ss�. Korjattu Hero SSR -render�inti poistamalla Framer Motion opacity-viiveet Herosta.
----------------------------------------

---

## P�ivitys: 29.08.2026 16:01
- **tiedottajanne (Vaihe 2):** Luotu src/design-system/ (OKLCH-tokenit, 3-vaiheteemoitus, glass.css, observer.ts, UI-primitiivit). Korvattu kovakoodatut v�rit semanttisilla tokeneilla.
----------------------------------------
