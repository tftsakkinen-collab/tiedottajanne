export interface SotePrompt {
  id: string;
  title: string;
  category: "Oireanalyysi & Hookit" | "Valvira & Etiikka" | "YouTube SEO & Metatiedot" | "TikTok/Shorts Skriptaus";
  roleTarget: "Lääkärit & Hammaslääkärit" | "Fysioterapeutit & Terapeutit" | "SOTE-yritykset & Klinikat";
  description: string;
  promptText: string;
}

export const SOTE_PROMPTS: SotePrompt[] = [
  {
    id: "sote-hook-generator",
    title: "1. SOTE-Videon 3 Sekunnin Pysäyttävä Hook-Generaattori",
    category: "Oireanalyysi & Hookit",
    roleTarget: "Lääkärit & Hammaslääkärit",
    description: "Generoi 5 Valvira-yhteensopivaa, eettistä ja koukuttavaa aloituslausetta terveysaiheiselle videolle ilman pelon lietsontaa.",
    promptText: `Toimi SOTE-alan erikoislääkärin ja sosiaalisen median videostrategin roolissa. Tehtäväsi on luoda 5 pysäyttävää 3 sekunnin aloitusta (hookia) videolle aiheesta: [SYÖTÄ AIHE, ESIM. PURENTALIHASTEN KIREYS / LEUKAKIPU].

Säännöt:
1. Älä käytä yliampuvaa hehkutusta tai pelottelua.
2. Kohdista aloitus suoraan potilaan kokemaan tunteeseen tai fyysiseen aistimukseen (esim. naksahdus, aamusärky, pistely).
3. Varmista eettisyys ja lääkinnällinen tarkkuus.

Luo aloitukset 3 eri kulmasta:
- Oirekeskeinen ("Tuntuuko leuan avaaminen aamuisin jäykältä?")
- Virhekäsitys ("Uskotko että hammaskisko on ainoa ratkaisu purentakipuun?")
- Kliininen kotitesti ("Tee tämä 5 sekunnin leukaniveltesti nopeasti sormillasi.")`
  },
  {
    id: "valvira-ethics-check",
    title: "2. Valvira- & Etiikkatarkistus SOTE-Videokäsikirjoitukselle",
    category: "Valvira & Etiikka",
    roleTarget: "SOTE-yritykset & Klinikat",
    description: "Auditoi ja hiot videon käsikirjoituksen täyttämään Suomen terveydenhuollon lainsäädännön, potilassuojan ja Valviran ohjeistukset.",
    promptText: `Auditointitehtävä: Tarkista ja hiot seuraava videokäsikirjoitus SOTE-alan lainsäädännön (Valvira / Terhikki) ja hyvän lääkintätavan mukaisesti.

Videokäsikirjoitusluonnos:
[LIITÄ KÄSIKIRJOITUSTEKSTI TÄHÄN]

Tarkista seuraavat kohdat:
1. Eikä tekstissä luvata "varmaa parantumista" tai anneta katteettomia terveysväittämiä?
2. Onko mukana asianmukainen vastuuvapauslauseke (Disclaimer: "Tämä video on opetuksellista tietoa eikä korvaa yksilöllistä lääkärin tai fysioterapeutin tutkimusta")?
3. Onko kieli selkeää potilaskieltä ilman liiallista ammattijargonia?

Muotoile korjattu käsikirjoitusversio ja anna 3 parannusehdotusta.`
  },
  {
    id: "youtube-seo-schema-gen",
    title: "3. YouTube SEO & AI Metatieto (Perplexity/ChatGPT -optimointi)",
    category: "YouTube SEO & Metatiedot",
    roleTarget: "Fysioterapeutit & Terapeutit",
    description: "Generoi YouTube-videolle haettava otsikko, laaja 300 sanan kuvailu avainsanoineen, Schema.org VideoObject JSON-LD ja llms.txt -tiivistelmä.",
    promptText: `Luo terveysvideolle täydellinen hakukone- ja tekoälyindeksoitu SEO-paketti aiheesta: [SYÖTÄ AIHE, ESIM. NISKAKIPU JA YLÄNISKAN JÄYKKYYS].

Videotiedot: [SYÖTÄ PÄÄPISTEET]

Generoi seuraavat rakenneosat:
1. **Pääotsikko (max 60 merkkiä):** Hakukoneoptimoitu & potilasta puhutteleva.
2. **YouTube-kuvausteksti (300 sanaa):** Sisältää aikaleimat, oirekuvauksen, tieteellisen taustan ja kutsun ajanvaraukseen.
3. **Avainsanat & Tagit (15 kpl):** Kohdistettu suomalaisiin terveyshakuun (esim. niska jumissa, yläniska fysioterapia Oulu).
4. **llms.txt Tiivistelmä:** 3 lauseen ydinasiantuntijatiivistelmä tekoälyhakukoneille (ChatGPT, Perplexity, Gemini).`
  },
  {
    id: "shorts-tiktok-script",
    title: "4. 60 Sekunnin Pystyvideo / Shorts Käsikirjoitus (SOTE-formaatti)",
    category: "TikTok/Shorts Skriptaus",
    roleTarget: "Lääkärit & Hammaslääkärit",
    description: "Täydellinen 60 sekunnin pystyvideorakenne (AIDA-malli + Ruututekstit + Kliininen demonstraatio).",
    promptText: `Kirjoita 60 sekunnin pystyvideokäsikirjoitus (YouTube Shorts / TikTok / Reels) aiheesta: [SYÖTÄ AIHE, ESIM. ISOCHORISEN MATRONAN NISKAKIPU TAI HAMMASNAKSUTUS].

Rakenne sekunneittain:
0-3s: Koukku (Visual & Audio Hook + Ruututeksti)
3-15s: Ongelman ja oireen tarkka kuvaus potilaan arjessa
15-40s: Kliininen ratkaisu tai 1 yksinkertainen itsehoitoharjoite näytettynä ruudulla
40-55s: Miksi tämä toimii (lääketieteellinen/biomekaaninen syy 1 lauseella)
55-60s: Kutsu jatkotoimenpiteeseen (Lataa maksuton fysioterapiaopas / Varaa aika)`
  }
];
