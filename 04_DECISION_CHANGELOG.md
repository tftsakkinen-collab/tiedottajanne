## Päivitys: 02.09.2026 10:53
- Tiedottajanne.com-sivuston 4-vaiheinen auditointi ja SEO/AEO-päivitys:
  1. Domain-korjaus: Kaikki viittaukset vaihdettu muotoon tiedottajanne.com (.fi -> .com), sitemap.xml päivitetty (/kasikirja, /promptit mukana) ja robots.txt sitemap-linkki korjattu.
  2. JSON-LD Structured Data: Lisätty etusivulle 3 syntaktisesti validia lohkoa (Person, ProfessionalService, FAQPage).
  3. Sisältörakenne: Etusivun Janne Säkkinen -profiilissa neutraali 3. persoonan faktateksti, FAQ-kysymykset muotoiltu semanttisiksi H3-otsikoiksi ja referenssikorteille lisätty konkreettiset numeeriset faktaelementit.
  4. AI & AksesSimplified: robots.txt:ään lisätty tekoälybottien Allow-säännöt (GPTBot, ClaudeBot, Google-Extended, PerplexityBot, CCBot), llms.txt päivitetty UTF-8-muodossa ja kuva-alt-tekstit auditoitu.
- Auditointi: Next.js tuotantobuild (16/16 sivua läpi virheettömästi), AA-kontrastitestaus 0 virhettä /palvelut.
--------------------------------------------------
## Päivitys: 02.09.2026 09:57
- Ylläpitohinnan korjaus (tiedottajanne): Korjattu Huoleton ylläpito -tuotteen hinta kaikkialla koodikannassa ja metatiedoissa takaisin muotoon 29 € / kk (+ alv 0%).
- Auditointi: Next.js tuotantobuild (16/16 sivua läpi virheettömästi).
--------------------------------------------------
## Päivitys: 02.09.2026 09:33
- Etusivun (app/page.tsx) osiotoiston korjaus: Poistettu päällekkäiset tuntiohjausosiot ja synkronoitu etusivun sisältö 100% uuden "Oma maa vs. Vuokramaa" & Godfather Offer -strategian (499 € AI-sivut, 39 €/kk ylläpito, 200 €/h somekoutsaus) mukaiseksi.
- Auditointi: Next.js tuotantobuild (16/16 sivua läpi virheettömästi), AA-kontrastitestaus 0 virhettä /palvelut.
--------------------------------------------------
## Päivitys: 02.09.2026 09:22
- Päivitetty ylänavigaation pääpainike (Navbar.tsx): Muutettu ylälaidan sinisen CTA-painikkeen linkki osoittamaan suoraan palveluihin (/palvelut#godfather-offer) ulkoisen Stripe-sivun sijaan.
- Auditointi: Next.js tuotantobuild (16/16 sivua läpi virheettömästi).
--------------------------------------------------
## Päivitys: 02.09.2026 08:59
- Näkyvyysdiagnoosin täydellinen poisto & suora Stripe-osto (tiedottajanne): Poistettu "Näkyvyysdiagnoosi"-maininnat ja varausmodal kokonaan.
- Päivitetty pää-CTA muotoon "Tilaa AI-optimoidut sivut (499 €)" ohjaten suoraan 499 € Stripe Checkout -osoitteeseen (buy.stripe.com/9B600j4Kg4fA8xQ8zX0Ny04) Hero-osiossa ja Navbarissa.
- Auditointi: Next.js tuotantobuild (16/16 sivua), AA-kontrastitestaus 0 virhettä kaikissa näkymissä.
--------------------------------------------------
## Päivitys: 02.09.2026 08:53
- Päivitetty SOTE-myyntisivu /palvelut (tiedottajanne): Suorat Stripe-ostolinkit (499 € AI-sivut: buy.stripe.com/9B600j4Kg4fA8xQ8zX0Ny04, 39 €/kk ylläpito & 200 €/h somekoutsaus: buy.stripe.com/00wcN5gsYcM629s4jH0Ny06).
- Lisätty pää-CTA "Varaa ilmainen Näkyvyysdiagnoosi (45 min)" modal-kartoituslomakkeella, B2B-hinnoittelu (alv 0%), "Näe ennen kuin maksat" -lupaus, 30 pv tyytyväisyystakuu sekä ftsakkinen.com ja ptsakkinen.com GEO-referenssikortit.
- Auditointi: Next.js tuotantobuild (16/16 sivua), AA-kontrastitestaus 0 virhettä kaikissa näkymissä.
--------------------------------------------------
## PÃ¤ivitys: 02.09.2026 08:05
- Luotu konvertoiva SOTE-myyntisivu reitille /palvelut (tiedottajanne): Toteutettu "Oma maa vs. Vuokramaa" -konsepti, 499 â‚¬ Perustajatarjous (10 ensimmÃ¤iselle, FOMO), 29 â‚¬/kk huoleton yllÃ¤pito sekÃ¤ 200 â‚¬/h somekoulutuksen lisÃ¤myynti valmiilla Stripe-ostopainikepaikolla.
- Auditointi: Next.js tuotantobuild (16/16 sivua), AA-kontrastitestaus 0 virhettÃ¤ kaikissa nÃ¤kymissÃ¤.
--------------------------------------------------
## PÃ¤ivitys: 31.08.2026 12:50
- Sivuston tuotemallin ja sivuhierarkian tÃ¤ysi selkeytys:
  - 200 â‚¬ / h Google Meet -tuntiohjaus asetettu ainoaksi suoraan myytÃ¤vÃ¤ksi tuotteeksi.
  - Kaikki yrityskohtaiset luennot ja koulutukset ohjattu yhteydenottolomakkeelle rÃ¤Ã¤tÃ¤lÃ¶itÃ¤vÃ¤ksi.
  - Etusivu, palvelusivu ja lomake pÃ¤ivitetty tukemaan tÃ¤tÃ¤ selkeÃ¤Ã¤ 2-osaista mallia.
- Domainin kanonisointi ja 5 pÃ¤Ã¤sivun hierarkia (/palvelut, /referenssit, /tyokalut, /yhteystiedot).
--------------------------------------------------
## PÃ¤ivitys: 30.08.2026 08:56
- Korjattu valokuvien ja YouTube-pikkukuvien lataus (tiedottajanne): PÃ¤ivitetty ProofOfWork.tsx:n GALLERY_PHOTOS viittaamaan olemassa oleviin public/assets/ -kuviin /images/ sijaan, ja mÃ¤Ã¤ritelty YouTube-kuvadomainit (img.youtube.com & i.ytimg.com) next.config.mjs:n remotePatterns-konfiguraatioon.
- Auditointi: AA-kontrastitestaus 0 virhettÃ¤ kaikissa nÃ¤kymissÃ¤.
--------------------------------------------------
## PÃ¤ivitys: 29.08.2026 23:35
- P0-Triage virheenkorjaus (tiedottajanne): Toteutettu React SocialStatsErrorBoundary ja valinnaisketjutustarkistukset /api/social-stats -reitille ja metriikkakomponenteille (ProofOfWork & LatestVideosAeo).
- YhtenÃ¤istetty ilmekerros (design-system/): Luotu tokens.css, brand.sakkinen.css, primitives.css (.btn, .card, .pill, .glass) ja base.css. Outfit (display) + Inter (body) fonttiarkkitehtuuri ja WCAG AA -kontrastiauditointi (KontrastivirheitÃ¤: 0).
--------------------------------------------------
# 04_DECISION_CHANGELOG.md (Tiedottajanne Oy â€” paikallinen kopio)

TÃ¤mÃ¤ on paikallinen (`tiedottajanne`-repo) kopio Tiedottajanne Oy:tÃ¤ koskevista pÃ¤Ã¤tÃ¶slokimerkinnÃ¶istÃ¤. Kanoninen, kaikkien projektien yhteinen loki yllÃ¤pidetÃ¤Ã¤n Google Drivessa (`G:\My Drive\AI - automaatiot\04_DECISION_CHANGELOG.md`, ks. `03_DEV_AND_SYSTEMS.md` / `config/rules.md`, kohta 2). Uusin merkintÃ¤ ylimpÃ¤nÃ¤.






