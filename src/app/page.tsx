import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Sparkles, ArrowRight, ShieldCheck, Video, Send, CheckCircle2, Building2, CreditCard, Flame, Lock } from "lucide-react";
import { SITE_CONFIG } from "@/data/config";

export const metadata: Metadata = {
  title: "Tiedottajanne Oy — AI-Kotisivut SOTE-Ammatinharjoittajille",
  description: "Rakenna oma digitaalinen kotisi: asiakassuhteet ja näkyvyys, jotka pysyvät sinulla. Hanki tekoälylle (GEO) optimoitu oma profiili 499 € perustajahintaan (vain 10 ensimmäiselle).",
  alternates: {
    canonical: "https://www.tiedottajanne.com",
  },
  openGraph: {
    title: "AI-Kotisivut SOTE-Ammatinharjoittajille — Tiedottajanne Oy",
    description: "Rakenna oma digitaalinen kotisi: asiakassuhteet ja näkyvyys, jotka pysyvät sinulla. Tekoälylle (ChatGPT, Gemini) optimoitu kotisivusto sote-alan ammatinharjoittajille.",
    url: "https://www.tiedottajanne.com",
    siteName: "Tiedottajanne Oy",
    locale: "fi_FI",
    type: "website",
  },
};

export default function Home() {
  const jsonLdPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Janne Säkkinen",
    "jobTitle": "OMT-fysioterapeutti",
    "url": "https://www.tiedottajanne.com",
    "worksFor": [
      { "@type": "Organization", "name": "Terveystalo" },
      { "@type": "Organization", "name": "Norre Työterveys" }
    ],
    "alumniOf": { "@type": "CollegeOrUniversity", "name": "Oulun yliopisto" },
    "sameAs": [
      "https://www.ftsakkinen.com",
      "https://www.ptsakkinen.com",
      SITE_CONFIG.youtubeTiedottajanne,
      SITE_CONFIG.instagramUrl
    ]
  };

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Tiedottajanne Oy",
    "url": "https://www.tiedottajanne.com",
    "email": "tiedottajanne@gmail.com",
    "telephone": "+358413274967",
    "areaServed": "FI",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Oulu",
      "addressCountry": "FI"
    },
    "founder": {
      "@type": "Person",
      "name": "Janne Säkkinen"
    }
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Miksi oma verkkokoti on tärkeä lisä vastaanoton ja varausjärjestelmän rinnalle?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oma digitaalinen koti varmistaa, että asiantuntijabrändisi, potilassuhteesi ja ammatillinen luottamuksesi rakentuvat suoraan sinulle. Lisäksi ChatGPT, Perplexity ja Google suosittelevat sinua omalla nimelläsi asiantuntijana vain, kun sinulla on oma tekoälyoptimoitu verkkoprofiili."
        }
      },
      {
        "@type": "Question",
        "name": "Mitä 'Näe ennen kuin maksat' -lupaus ja 30 päivän takuu tarkoittavat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Lupaamme, että pääset näkemään ja hyväksymään valmiin AI-optimoidun kotisivustosi ennen kuin huoleton 29 €/kk ylläpito aktivoituu. Lisäksi kaikilla toteutuksillamme on 30 päivän täysi tyytyväisyystakuu — kynnys tilaukselle on tehty olemattomaksi."
        }
      },
      {
        "@type": "Question",
        "name": "Mitä 499 € Kertaperustus sisältää?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "499 € (+ alv 0%) kertaperustus sisältää avaimet käteen -sivustorakenne, asiantuntijaprofiilin luonnin, eettiset potilasohjeistukset ja SEO/GEO-optimoidut tekstit tekoälyhakukoneille (ChatGPT, Gemini, Google AI)."
        }
      },
      {
        "@type": "Question",
        "name": "Miksi 499 € tarjous on rajattu vain 10 ensimmäiselle?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "499 € (+ alv 0%) on testiryhmähinta, jolla keräämme 10 uutta vahvaa sote-alan ammatinharjoittajareferenssiä. Kun 10 paikkaa on täytetty, hinta nousee normaaliin 998 euroon."
        }
      },
      {
        "@type": "Question",
        "name": "Miten tilaaminen ja maksaminen tapahtuu Stripe-kassalla?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Painamalla 'Tilaa AI-optimoidut sivut (499 €)' siirryt suoraan turvalliseen Stripe Checkout -kassaan. Maksu ilmoitetaan B2B-muodossa (alv 0 %, vero lisätään kassalla). Saat kuitin ja aloituskyselyn välittömästi sähköpostiisi."
        }
      }
    ]
  };

  return (
    <div className="bg-[var(--bg)] text-[var(--text)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* 1. HERO SECTION */}
      <section className="relative py-16 md:py-24 overflow-hidden px-4 sm:px-6 lg:px-8 border-b border-[var(--border)]">
        {/* Subtle Ambient Light */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-[radial-gradient(ellipse_at_center,var(--accent)_0%,transparent_70%)] opacity-15 rounded-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left: Headline, Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--warning)]/40 bg-[var(--warning)]/10 text-[var(--warning)] text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
              <Flame className="w-4 h-4 text-[var(--warning)] animate-pulse" />
              <span>TESTIRYHMÄTARJOUS: Vain 10 ensimmäiselle sote-ammatinharjoittajalle (499 € + alv 0%)</span>
            </div>

            {/* Hero H1 */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] font-display text-[var(--text)]">
              Näy tekoälylle omalla nimelläsi – <span className="text-gradient-cyan">rakenna näkyvyyttä, joka on sinun.</span>
            </h1>

            {/* Hero Lede */}
            <p className="text-base sm:text-lg text-[var(--muted)] max-w-2xl leading-relaxed">
              <strong>Rakenna oma digitaalinen kotisi:</strong> asiakassuhteet ja näkyvyys, jotka pysyvät sinulla. Tiedottajanne Oy rakentaa sinulle tekoälylle (ChatGPT, Gemini, Google AI) optimoidun digitaalisen profiilin, joka tuo potilaat ja asiakkaat suoraan luoksesi.
            </p>

            {/* Primary CTA + Secondary Link */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="https://buy.stripe.com/9B600j4Kg4fA8xQ8zX0Ny04"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary btn--lg text-sm sm:text-base font-bold shadow-xl flex items-center justify-center gap-2.5 cursor-pointer group"
              >
                <CreditCard className="w-5 h-5 text-[var(--accent-ink)]" />
                <span>Tilaa AI-optimoidut sivut (499 €)</span>
                <ArrowRight className="w-4 h-4 text-[var(--accent-ink)] group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href="/palvelut"
                className="btn btn--outline btn--lg text-sm sm:text-base font-semibold flex items-center justify-center gap-2"
              >
                <span>Lue lisää oman digitaalisen kodin eduista</span>
              </Link>
            </div>

            {/* Trust Metrics Pills */}
            <div className="pt-4 border-t border-[var(--border)] flex flex-wrap items-center gap-4 text-xs text-[var(--muted)] font-mono">
              <div className="flex items-center gap-1.5 font-semibold">
                <ShieldCheck className="w-4 h-4 text-[var(--success)]" />
                <span>"Näe ennen kuin maksat" -lupaus</span>
              </div>
              <div className="flex items-center gap-1.5 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent)]" />
                <span>30 päivän tyytyväisyystakuu</span>
              </div>
              <div className="flex items-center gap-1.5 font-semibold">
                <Lock className="w-4 h-4 text-[var(--success)]" />
                <span>100 % Omat asiakassuhteet</span>
              </div>
            </div>

          </div>

          {/* Right: Visual SOTE Video Mockup Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Glow Behind Mockup */}
              <div className="absolute -inset-1.5 bg-[var(--accent)]/20 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition duration-1000" />

              {/* Main Frame */}
              <div className="relative glass rounded-3xl p-3 sm:p-4 border border-[var(--border)] shadow-2xl space-y-3">
                <div className="relative aspect-[16/10] sm:aspect-video rounded-2xl overflow-hidden bg-black/60 border border-[var(--border)] group">
                  <Image
                    src="/assets/DSC09790.jpg"
                    alt="SOTE-videotuotannon ja asiantuntijaopetuksen esikatselu — Janne Säkkinen"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Top Verified Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[var(--accent)] text-[11px] font-semibold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>GEO-optimoitu sote-verkkokoti</span>
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[var(--accent)] text-[var(--accent-ink)] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Video className="w-6 h-6 text-[var(--accent-ink)]" />
                    </div>
                  </div>

                  {/* Bottom Video Meta */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                    <span className="font-semibold truncate max-w-[200px]">Janne Säkkinen (OMT)</span>
                    <span className="px-2 py-0.5 rounded bg-black/70 border border-white/15 font-semibold text-[11px]">1,1M+ näytöt</span>
                  </div>
                </div>

                {/* Floating Growth Stat Bar */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border)] text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--success)] animate-pulse" />
                    <span className="font-medium text-[var(--text)]">Orgaaninen tekoälynäkyvyys:</span>
                  </div>
                  <span className="font-bold text-[var(--success)] font-display text-sm">Oma digitaalinen koti</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 2. CORE PRODUCTS ("THE GODFATHER OFFER") */}
      <section className="py-16 md:py-24 border-b border-[var(--border)] bg-[var(--bg)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="pill uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-[var(--accent)]" />
              <span>Palvelumme &amp; Hinnoittelu (B2B alv 0%)</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--text)] font-display">
              Testiryhmäpaketit SOTE-Ammatinharjoittajille
            </h2>
            <p className="text-sm text-[var(--muted)]">
              Selkeä, suoraviivainen hinnoittelu ilman piilokuluja tai pitkiä määräaikaisuuksia.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Card 1: Core AI Website Package */}
            <div className="lg:col-span-7 glass rounded-3xl p-8 sm:p-10 space-y-8 flex flex-col justify-between border-2 border-[var(--accent)]/40 shadow-xl">
              <div className="space-y-6">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full bg-[var(--accent)]/15 border border-[var(--accent)]/30 text-[var(--accent)] text-xs font-mono font-bold uppercase">
                    TUOTE 1 (PÄÄTUOTE)
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[var(--warning)]/15 border border-[var(--warning)]/30 text-[var(--warning)] text-[10px] font-bold uppercase font-mono">
                    VAIN 10 PAIKKAA
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text)] tracking-tight leading-snug font-display">
                    AI-Ystävälliset Sivut
                  </h3>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-extrabold text-[var(--text)] font-display">499 €</span>
                    <span className="text-xs text-[var(--muted)] font-mono">+ alv 0% (Kertamaksu)</span>
                  </div>
                </div>

                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  Avaimet käteen -sivustorakenne, asiantuntijaprofiilin luonti ja SEO/GEO-optimoidut tekstit tekoälyhakukoneille (ChatGPT, Gemini, Google AI).
                </p>

                <div className="pt-4 space-y-3 border-t border-[var(--border)]">
                  <span className="text-xs font-semibold text-[var(--text)] uppercase tracking-wider block">Mitä pakettiin sisältyy:</span>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[var(--text)]">
                    {[
                      "Responsiivinen, salamannopea toteutus (CLS < 0.05)",
                      "Asiantuntijaprofiilin tuotteistus & GEO-optimoidut tekstit",
                      "Valvira- & Kela-yhteensopivat eettiset vastuuvapauslausekkeet",
                      "Ajanvarauslinkkien integrointi nykyiseen kalenteriisi",
                    ].map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[var(--success)] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <a
                href="https://buy.stripe.com/9B600j4Kg4fA8xQ8zX0Ny04"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary btn--lg w-full text-base font-bold shadow-xl flex items-center justify-center gap-2 group cursor-pointer"
              >
                <CreditCard className="w-5 h-5 text-[var(--accent-ink)]" />
                <span>Osta AI-sivut (499 €) — Stripe</span>
                <ArrowRight className="w-4 h-4 text-[var(--accent-ink)] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Card 2: Add-on & Upsell */}
            <div className="lg:col-span-5 glass rounded-3xl p-8 sm:p-10 space-y-8 flex flex-col justify-between border border-[var(--border)]">
              <div className="space-y-6">
                <span className="px-3 py-1 rounded-full bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--muted)] text-xs font-mono font-bold uppercase">
                  YLLÄPITO &amp; SOMEKOUTSAUS
                </span>

                <div className="space-y-4 border-b border-[var(--border)] pb-4">
                  <div>
                    <h4 className="text-lg font-bold text-[var(--text)] font-display">Huoleton Ylläpito</h4>
                    <div className="text-xl font-extrabold text-[var(--text)] font-display mt-1">
                      29 € <span className="text-xs font-sans font-normal text-[var(--muted)]">/ kk + alv 0%</span>
                    </div>
                  </div>
                  <p className="text-xs text-[var(--muted)]">
                    Hosting, SSL, automaattiset päivitykset ja tekninen huolenpito. Aktivoituu vasta kun sivut on hyväksytty.
                  </p>
                  <a
                    href="https://buy.stripe.com/00wcN5gsYcM629s4jH0Ny06"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--outline btn--sm w-full text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Tilaa Ylläpito (29 €/kk)</span>
                  </a>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-bold text-[var(--text)] font-display">Somekoutsaus</h4>
                    <div className="text-xl font-extrabold text-[var(--text)] font-display mt-1">
                      200 € <span className="text-xs font-sans font-normal text-[var(--muted)]">/ h + alv 0%</span>
                    </div>
                  </div>
                  <p className="text-xs text-[var(--muted)]">
                    Henkilökohtainen 1-on-1 etävalmennus kamerakammon selättämiseen ja ammattibrändin rakentamiseen somessa.
                  </p>
                  <a
                    href="https://buy.stripe.com/00wcN5gsYcM629s4jH0Ny06"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--outline btn--sm w-full text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Tilaa Somekoutsaus (200 €/h)</span>
                  </a>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. SHORT EXPERT PROFILE (JANNE SÄKKINEN) */}
      <section className="py-16 md:py-24 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-3xl p-8 sm:p-12 border border-[var(--border)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Photo */}
            <div className="lg:col-span-4 relative aspect-[4/5] rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--surface-elevated)]">
              <Image
                src="/assets/DSC09967.jpg"
                alt="Janne Säkkinen — Valvira-rekisteröity OMT-fysioterapeutti, Oulun yliopiston luennoitsija ja Tiedottajanne Oy:n perustaja"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover object-top"
              />
            </div>

            {/* Content */}
            <div className="lg:col-span-8 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--accent)] text-xs font-semibold uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Kouluttaja &amp; Asiantuntija</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-bold text-[var(--text)] tracking-tight font-display">
                  Janne Säkkinen
                </h2>
                <div className="text-xs text-[var(--muted)] font-medium font-mono">
                  OMT-Fysioterapeutti (SOMTY) • Terveystieteiden B.Sc. • Oulun yliopiston luennoitsija (2017–) • Terveystalo &amp; Norre Työterveys
                </div>
              </div>

              <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed">
                Janne Säkkinen on Valvira-rekisteröity OMT-fysioterapeutti ja Oulun yliopiston lääketieteellisen tiedekunnan pitkäaikainen luennoitsija (2017–). Hän toimii ammatinharjoittajana Terveystalolla ja Norre Työterveydessä sekä on rakentanut nollasta yli 1,1 miljoonan orgaanisen katselukerran kanavakokonaisuuden. Tiedottajanne Oy tuo nämä käytännön opit sote-alan ammattilaisten ja yritysten käyttöön.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/referenssit"
                  className="btn btn--outline px-6 py-3 text-xs sm:text-sm font-semibold inline-flex items-center gap-2"
                >
                  <span>Katso referenssit &amp; 1,1M+ näytöt</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/yhteystiedot"
                  className="btn btn--ghost px-6 py-3 text-xs sm:text-sm font-semibold inline-flex items-center gap-2"
                >
                  <span>Ota yhteyttä</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. UNIFIED FINAL CALL TO ACTION */}
      <section className="py-20 md:py-28 relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
          
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text)] font-display">
              Rakenna menestyksesi <span className="text-gradient-cyan">kestävälle pohjalle – omalle maallesi.</span>
            </h2>
            <p className="text-sm sm:text-base text-[var(--muted)] max-w-xl mx-auto leading-relaxed">
              Lukitse 499 € testiryhmähinta (10 ensimmäiselle sote-ammatinharjoittajalle). "Näe ennen kuin maksat" -lupaus ja 30 päivän tyytyväisyystakuu.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://buy.stripe.com/9B600j4Kg4fA8xQ8zX0Ny04"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary btn--lg text-sm sm:text-base font-bold shadow-xl inline-flex items-center gap-2 cursor-pointer"
            >
              <CreditCard className="w-5 h-5 text-[var(--accent-ink)]" />
              <span>Tilaa AI-optimoidut sivut (499 €) — Stripe</span>
            </a>
            <Link
              href="/palvelut"
              className="btn btn--outline btn--lg text-sm sm:text-base font-semibold inline-flex items-center gap-2"
            >
              <span>Lue kaikki palvelutiedot</span>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
