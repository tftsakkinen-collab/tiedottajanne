export interface CaseStudy {
  id: string;
  channelName: string;
  handle: string;
  language: "Suomi" | "Englanti" | "Kaksikielinen";
  platform: "YouTube" | "Instagram" | "TikTok" | "Multi-Channel";
  subscribersOrFollowers: string;
  viewsOrReach: string;
  niche: string;
  url: string;
  description: string;
  keyLearnings: string[];
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "tiedottajanne-main",
    channelName: "Tiedottajanne",
    handle: "@tiedottajanne",
    language: "Kaksikielinen",
    platform: "YouTube",
    subscribersOrFollowers: "Virallinen Asiantuntijakanava",
    viewsOrReach: "SOTE-alan videotuotanto & AI-SEO",
    niche: "Terveydenhuollon videostrategiat, ammattilaissome & AI-prosessi",
    url: "https://www.youtube.com/@tiedottajanne",
    description: "Tiedottajanne Oy:n pääkanava, joka keskittyy sote-alan ammattilaisten videotuotannon, lääkinnällisen viestinnän ja tekoälyautomaation opastukseen.",
    keyLearnings: [
      "Miten rakentaa asiantuntijabrändi terveydenhuollon tiukkojen etiikkasääntöjen puitteissa",
      "Videoiden automaattinen indeksointi hakukoneille ja tekoälyhakukoneille (ChatGPT, Perplexity)",
      "Valmiit tuotantoputket: kynästä ja kamerasta suoraan vastaanoton potilasvirraksi"
    ]
  },
  {
    id: "ft-sakkinen-fi",
    channelName: "FT Säkkinen (Suomi)",
    handle: "@ft_sakkinen",
    language: "Suomi",
    platform: "YouTube",
    subscribersOrFollowers: "5 380+ Tilaajaa",
    viewsOrReach: "Yli 1,1 Miljoonaa Katselukertaa",
    niche: "Purentaelimistön Fysioterapia (TMD), Yläniska & TULE-kuntoutus",
    url: "https://www.youtube.com/@ft_sakkinen",
    description: "Suomen johtava fysioterapian ja purentaelimistön opetuskanava. Yli 1,1 miljoonaa orgaanista katselukertaa täysin ilman maksettua mainontaa.",
    keyLearnings: [
      "Hakukone- ja potilaslähtöinen otsikointi: miten oirehaut muunnetaan orgaaniseksi katseluksi",
      "Kliinisen tarkkuuden ja kansanomaisen opetustavan yhdistäminen",
      "Miten ilmaiset opasvideot generoivat viikoittain uusia potilasvarauksia vastaanotolle"
    ]
  },
  {
    id: "pt-sakkinen-en",
    channelName: "PT Sakkinen (English Global)",
    handle: "@pt_sakkinen",
    language: "Englanti",
    platform: "YouTube",
    subscribersOrFollowers: "Kansainvälinen Yhteisö",
    viewsOrReach: "Globaali Tavoittavuus (USA, UK, EU)",
    niche: "Temporomandibular Disorders (TMJ/TMD) & Spinal Care",
    url: "https://www.youtube.com/@pt_sakkinen",
    description: "Englanninkielinen kansainvälinen opetuskanava, joka laajentaa suomalaisen OMT-fysioterapian osaamisen maailmanlaajuiseksi.",
    keyLearnings: [
      "Kansainvälisen yleisön optimointi: englanninkieliset kliiniset käsitteet ja laatu",
      "Rinnakkaisten kieliversioiden hallinta ja linkittäminen (FI <-> EN)",
      "Virtuaalikonsultaatioiden ja digitaalisten PDF-oppaiden jakelu maailmanlaajuisesti"
    ]
  },
  {
    id: "instagram-sakkinen",
    channelName: "Janne Säkkinen Instagram",
    handle: "@sakkinenjanne & @ptsakkinen",
    language: "Kaksikielinen",
    platform: "Instagram",
    subscribersOrFollowers: "Aktiivinen Seuraajakunta",
    viewsOrReach: "Mikro-oppaat & Kliiniset Demot",
    niche: "SOTE-arkiarvostus, koulutukset ja leukanivelen fysioterapia",
    url: "https://www.instagram.com/sakkinenjanne",
    description: "Päivittäinen asiantuntijasisältö, Reels-mikro-oppaat ja yliopistoluennon taustatunnelmat lääkäreille ja fysioterapeuteille.",
    keyLearnings: [
      "Miten Reels-videot muunnetaan potilas- ja luentokyselyiksi",
      "Luottamuksen ja asiantuntija-auktoriteetin rakentaminen tarina-osiossa (Stories)"
    ]
  }
];
