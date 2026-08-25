'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Sparkles, Paperclip, ChevronRight, MoreHorizontal, Menu, Check } from 'lucide-react';

// --- Shared Primitives ---

const AppleLogo = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 384 512" fill="currentColor">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
  </svg>
);

const LogoMark = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 256 256" fill="white">
    <path d="M 0 128 C 70.692 128 128 185.308 128 256 L 64 256 C 64 220.654 35.346 192 0 192 Z M 256 192 C 220.654 192 192 220.654 192 256 L 128 256 C 128 185.308 185.308 128 256 128 Z M 128 0 C 128 70.692 70.692 128 0 128 L 0 64 C 35.346 64 64 35.346 64 0 Z M 192 0 C 192 35.346 220.654 64 256 64 L 256 128 C 185.308 128 128 70.692 128 0 Z" />
  </svg>
);

const AppleButton = ({ label = "Lataa Aura", full = false }: { label?: string, full?: boolean }) => (
  <button className={`group inline-flex items-center justify-center gap-2 rounded-full bg-white text-black font-medium text-sm px-5 py-3 transition-all hover:bg-white/90 active:scale-[0.98] ${full ? 'w-full' : ''}`}>
    <AppleLogo />
    {label}
    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-[1px]" />
  </button>
);

const SectionEyebrow = ({ label, tag }: { label: string, tag?: string }) => (
  <div className="flex items-center gap-3">
    <div className="flex items-center gap-2">
      <span className="w-1.5 h-1.5 rounded-full bg-white" />
      <span className="text-sm font-medium">{label}</span>
    </div>
    {tag && <span className="px-2 py-0.5 rounded-full border border-white/10 text-white/50 text-xs">{tag}</span>}
  </div>
);

// --- Main Component ---

export default function AuraLanding() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0c0c0c] text-white">
      
      {/* Global SVG Noise Filters */}
      <svg className="hidden">
        <filter id="c3-noise-root">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.35 0" />
          <feComposite in2="SourceGraphic" operator="in" result="noise" />
          <feBlend in="SourceGraphic" in2="noise" mode="multiply" />
        </filter>
        <filter id="c3-noise-pricing">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="2" stitchTiles="stitch" />
          <feComponentTransfer><feFuncA type="linear" slope="0.075" /></feComponentTransfer>
          <feComposite in2="SourceGraphic" operator="in" result="noise" />
          <feBlend in="SourceGraphic" in2="noise" mode="overlay" />
        </filter>
      </svg>

      {/* Global Background Video & Guide Lines */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover pointer-events-none" src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064122_c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4" />
      </div>
      <div className="hidden md:block pointer-events-none fixed inset-y-0 left-1/2 -translate-x-[calc(50%+36rem)] w-px bg-white/10 z-[5]" />
      <div className="hidden md:block pointer-events-none fixed inset-y-0 left-1/2 translate-x-[calc(-50%+36rem)] w-px bg-white/10 z-[5]" />

      <div className="relative z-10 flex flex-col items-center">
        


        {/* Section 2 - Hero */}
        <section className="w-full pt-16 md:pt-28 pb-20 text-center flex flex-col items-center max-w-6xl mx-auto px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-7xl font-semibold tracking-tight leading-[0.9]"
          >
            <div className="text-white">Viestintäsi.</div>
            <div className="animate-shiny" style={{
              backgroundImage: 'linear-gradient(to right, #091020 0%, #0B2551 12.5%, #A4F4FD 32.5%, #00d2ff 50%, #0B2551 67.5%, #091020 87.5%, #091020 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              WebkitTextFillColor: 'transparent',
              filter: 'url(#c3-noise-root)'
            }}>
              Uudistettu
            </div>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="mt-8 text-white/60 max-w-md text-base leading-[1.5]"
          >
            Tiedottajanne Oy tarjoaa nykyaikaisen AI-pohjaisen viestintäalustan ja asiantuntijapalvelut. Valjasta tekoäly järjestämään, priorisoimaan ja terävöittämään organisaatiosi viestintä.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="mt-8 flex flex-col items-center gap-3">
            <AppleButton />
            <span className="text-xs text-white/40">Saatavilla macOS & Windows -alustoille</span>
          </motion.div>
        </section>

        {/* Section 3 - macOS menu bar strip */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="w-full h-10 bg-black/40 backdrop-blur-md border-t border-b border-white/10">
          <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between text-xs">
            <div className="flex items-center gap-4">
              <AppleLogo className="w-3.5 h-3.5" />
              <span className="font-bold">Tiedottajanne Aura</span>
              {['Tiedosto', 'Muokkaa', 'Näkymä', 'Siirry', 'Ikkuna', 'Ohje'].map((item, i) => (
                <span key={item} className={`${i > 2 ? 'hidden sm:inline' : ''} ${i > 3 ? 'hidden md:inline' : ''}`}>{item}</span>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <Search className="w-3.5 h-3.5" />
              <span>Ti 25. Elokuuta 20:00</span>
            </div>
          </div>
        </motion.div>

        {/* Section 4 - Inbox mockup */}
        <motion.section initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.8 }} className="w-full max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0e1014]/90 backdrop-blur-2xl">
            {/* Title bar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/20">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="text-xs text-white/50 absolute left-1/2 -translate-x-1/2">Tiedottajanne — Aura Inbox</div>
              <div />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 h-[520px]">
              {/* Sidebar */}
              <div className="hidden md:block col-span-3 border-r border-white/10 bg-black/30 p-4">
                <button className="w-full rounded-lg bg-white text-black text-xs font-semibold px-3 py-2 flex items-center justify-center gap-2 mb-6">
                  <Sparkles className="w-4 h-4" /> Luo tekoälyllä
                </button>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between items-center bg-white/10 text-white px-3 py-1.5 rounded-md"><span>Saapuneet</span><span>12</span></div>
                  <div className="flex justify-between items-center text-white/60 hover:bg-white/5 px-3 py-1.5 rounded-md"><span>Tärkeät</span><span>3</span></div>
                  <div className="flex justify-between items-center text-white/60 hover:bg-white/5 px-3 py-1.5 rounded-md"><span>Lähetetyt</span></div>
                  <div className="flex justify-between items-center text-white/60 hover:bg-white/5 px-3 py-1.5 rounded-md"><span>Luonnokset</span><span>2</span></div>
                  <div className="flex justify-between items-center text-white/60 hover:bg-white/5 px-3 py-1.5 rounded-md"><span>Arkisto</span></div>
                  <div className="flex justify-between items-center text-white/60 hover:bg-white/5 px-3 py-1.5 rounded-md"><span>Roskakori</span></div>
                </div>
                <div className="mt-8">
                  <div className="text-xs uppercase tracking-widest text-white/40 mb-3 px-3">Tunnisteet</div>
                  {[{l:'Asiakkaat',c:'#00d2ff'},{l:'Internal',c:'#A4F4FD'},{l:'SOTE',c:'#f59e0b'},{l:'Tiedotteet',c:'#10b981'}].map(label => (
                    <div key={label.l} className="flex items-center gap-2 text-white/60 px-3 py-1.5 text-sm"><span className="w-2 h-2 rounded-full" style={{backgroundColor: label.c}}/>{label.l}</div>
                  ))}
                </div>
              </div>

              {/* Message List */}
              <div className="hidden md:flex flex-col col-span-4 border-r border-white/10 overflow-hidden">
                <div className="p-3 border-b border-white/10 flex items-center gap-2 text-white/50 bg-black/20">
                  <Search className="w-4 h-4" /> <span className="text-sm">Etsi viestejä</span>
                </div>
                <div className="flex-1 overflow-y-auto">
                  {[
                    { n: 'Linear', s: 'Viikoittainen tuotekatsaus', p: 'Tiiminne koodasi 23 uutta ominaisuutta...', t: '09:41', active: true, unread: true },
                    { n: 'Sofia Korhonen', s: 'Re: Q3 viestintästrategia', p: 'Kiitos materiaaleista. Kävin läpi ehdotuksen...', t: '08:12', unread: true },
                    { n: 'Figma', s: 'Kommentti etusivun designiin', p: 'Tämä uusi Aura-ilme näyttää upealta!', t: 'Eilen' },
                    { n: 'Stripe', s: 'Maksusuoritus $12,480.00 tilille', p: 'Tilitys on matkalla pankkitilillesi...', t: 'Eilen' },
                    { n: 'Vercel', s: 'tiedottajanne.com julkaisu valmis', p: 'Uusi versio on nyt tuotannossa.', t: 'Ma' },
                    { n: 'GitHub', s: '[tiedottajanne/web] PR #482 hyväksytty', p: 'Main haara päivitetty onnistuneesti.', t: 'Ma' }
                  ].map((msg, i) => (
                    <div key={i} className={`p-4 border-b border-white/5 cursor-pointer ${msg.active ? 'bg-white/10' : 'hover:bg-white/5'}`}>
                      <div className="flex justify-between items-baseline mb-1">
                        <span className={`text-sm ${msg.unread ? 'font-semibold text-white' : 'text-white/80'}`}>{msg.n}</span>
                        <span className={`text-xs ${msg.unread ? 'text-cyan-400' : 'text-white/40'}`}>{msg.t}</span>
                      </div>
                      <div className={`text-sm truncate ${msg.unread ? 'font-medium text-white' : 'text-white/70'}`}>{msg.s}</div>
                      <div className="text-xs text-white/50 truncate mt-0.5">{msg.p}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reader */}
              <div className="col-span-1 md:col-span-5 bg-black/10 flex flex-col">
                <div className="h-12 border-b border-white/10 flex items-center justify-between px-4">
                  <div className="flex gap-1">
                    {['Vastaa', 'Eteenpäin', 'Arkistoi', 'Poista'].map(btn => (
                      <button key={btn} className="w-7 h-7 rounded-md flex items-center justify-center hover:bg-white/5 text-white/70"><div className="w-4 h-4 bg-white/20 rounded-sm" /></button>
                    ))}
                  </div>
                  <MoreHorizontal className="w-4 h-4 text-white/50" />
                </div>
                <div className="p-6 overflow-y-auto">
                  <h2 className="text-xl font-semibold mb-6">Viikoittainen tuotekatsaus</h2>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#00d2ff] to-[#0B2551] flex items-center justify-center text-xs font-bold">L</div>
                    <div>
                      <div className="text-sm font-medium">Linear <span className="text-white/50 font-normal text-xs ml-1">minulle · 09:41</span></div>
                    </div>
                    <span className="ml-auto px-2 py-0.5 text-[10px] uppercase tracking-wider rounded border border-white/10 bg-white/5 text-[#00d2ff]">Tärkeät</span>
                  </div>
                  
                  <div className="mb-6 rounded-lg border border-[#A4F4FD]/20 bg-[#A4F4FD]/5 p-4 flex gap-3 items-start">
                    <Sparkles className="w-5 h-5 text-[#A4F4FD] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-[#A4F4FD] mb-1">Aura AI Tiivistelmä</div>
                      <div className="text-sm text-white/80 leading-relaxed">Tiiminne sulki 23 tikettiä, yhdisti 14 PR-muutosta ja julkaisi 2 uutta ominaisuutta. Ei vaadi välittömiä toimenpiteitä.</div>
                    </div>
                  </div>

                  <div className="space-y-4 text-sm text-white/80 leading-relaxed">
                    <p>Hei tiimi,</p>
                    <p>Tässä on viikoittainen katsaus kaikista tiiminne saavutuksista. Viikko oli erittäin tehokas ja etenimme merkittävästi Q3-tavoitteissa.</p>
                    <p>23 teemaa käsiteltiin, 14 koodipäivitystä ajettiin tuotantoon ja 2 uutta asiakasominaisuutta on aktivoitu.</p>
                    <p>Ole yhteydessä mikäli haluat tarkemman erittelyn projektikohtaisesti.</p>
                    <p className="text-white/50">— Linear-tiimi</p>
                  </div>
                  <div className="mt-6 inline-flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 bg-white/5 text-xs hover:bg-white/10 cursor-pointer transition-colors">
                    <Paperclip className="w-3.5 h-3.5" /> katsaus-elokuu-2026.pdf
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 5 - FeatureTriage */}
        <section id="palvelut" className="w-full max-w-6xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <SectionEyebrow label="Tekoälyautomaatio" tag="AI-native" />
            <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.02]">
              Järjestä viestintäsi <br/> yhdellä painalluksella.
            </h2>
            <p className="mt-6 text-white/60 text-base leading-[1.6] max-w-md">
              Aura lukee jokaisen viestin, ymmärtää kontekstin ja suodattaa kohinan pois oleellisesta. Keskity siihen mikä vie liiketoimintaasi eteenpäin.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {['Automaattinen luokittelu', 'Älykäs lykkäys', 'Tiedoteseulonta', 'Yhden klikkauksen peruutus'].map(chip => (
                <span key={chip} className="text-xs text-white/70 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03]">{chip}</span>
              ))}
            </div>
          </motion.div>
          <div className="liquid-glass rounded-2xl p-5">
            <div className="text-sm font-medium mb-4 px-1">Tänään · 42 viestiä luokiteltu</div>
            <div className="space-y-3">
              {[
                { l: 'Tärkeät (4)', c: '#ffffff', items: ['Sofia Korhonen — Q3 katsaus', 'David Lim — sopimusvahvistus'] },
                { l: 'Seurannassa (7)', c: '#e5e5e5', items: ['Markus — design-katselmus', 'Figma — kommenttiketju'] },
                { l: 'Päivitykset (18)', c: '#a3a3a3', items: ['Vercel — tuotantojulkaisu', 'GitHub — PR #482 yhdistetty'] },
                { l: 'Arkistoitu (13)', c: '#525252', items: ['Stripe tilitys · Uutiskirjeet · Kuitit'] }
              ].map(card => (
                <div key={card.l} className="liquid-glass rounded-lg p-3">
                  <div className="text-xs font-semibold mb-2" style={{color: card.c}}>{card.l}</div>
                  <div className="space-y-1.5">
                    {card.items.map((item, i) => (
                      <div key={i} className="text-sm text-white/60 truncate">{item}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6 - LogoCloud */}
        <section id="referenssit" className="w-full max-w-6xl mx-auto px-6 py-16 md:py-20 text-center">
          <div className="text-xs uppercase tracking-widest text-white/40">Luotettava kumppani edelläkävijäyrityksille</div>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
            {['Linear', 'Vercel', 'Figma', 'Stripe', 'Ramp', 'Notion', 'Loom', 'Arc'].map((logo, i) => (
              <motion.div 
                key={logo} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="text-sm font-semibold tracking-tight text-white/50 hover:text-white cursor-default transition-colors"
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 7 - Testimonials */}
        <section className="w-full max-w-6xl mx-auto px-6 py-20 md:py-28 border-t border-white/10">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { q: "Aura säästää johtoryhmältämme 4 tuntia työaikaa joka viikko. Viestinnän tekoälyautomaatio toimii täydellisesti.", n: "Petri Salminen", r: "Toimitusjohtaja", c: "TEKNOLOGIA OY" },
              { q: "Tiedottajanne Oy:n rakentama komentoalusta muutti täysin tavan jolla käsittelemme päivittäiset tiedotteet.", n: "Laura Ruohonen", r: "Viestintäjohtaja", c: "MEDIA KONSORNI" },
              { q: "Automaattinen triage ja yhteenvedot toivat vihdoin selkeyden sähköposteihimme ja asiakasviestintään.", n: "Matti Kinnunen", r: "Operatiivinen Johtaja", c: "DIGI ENTERPRISE" }
            ].map((t, i) => (
              <div key={i} className="liquid-glass rounded-2xl p-6 flex flex-col">
                <blockquote className="text-sm text-white/80 leading-[1.6]">"{t.q}"</blockquote>
                <figcaption className="mt-6 pt-5 border-t border-white/10 mt-auto">
                  <div className="text-sm font-semibold">{t.n}</div>
                  <div className="text-xs text-white/50 mb-1">{t.r}</div>
                  <div className="text-xs text-white font-semibold tracking-wide uppercase">{t.c}</div>
                </figcaption>
              </div>
            ))}
          </div>
        </section>

        {/* Section 8 - Pricing */}
        <section id="hinnoittelu" className="c3-pricing-section w-full">
          <svg width="0" height="0" className="hidden">
            <filter id="c3-noise-watermark">
              <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="2" stitchTiles="stitch" />
              <feComponentTransfer><feFuncA type="linear" slope="0.075" /></feComponentTransfer>
              <feComposite in2="SourceGraphic" operator="in" result="noise" />
              <feBlend in="SourceGraphic" in2="noise" mode="overlay" />
            </filter>
          </svg>

          <div className="c3-watermark-container">
            <div className="c3-watermark-main" style={{ filter: 'url(#c3-noise-watermark)' }}>
              <span className="c3-watermark-line-1">Viestintäsi.</span>
              <span className="c3-watermark-line-2">Uudistettu</span>
            </div>
          </div>

          <div className="c3-toggle-wrap">
            <span className="text-sm font-medium">Vuosiveloitus</span>
            <button className={`c3-toggle ${isYearly ? 'active' : ''}`} onClick={() => setIsYearly(!isYearly)}>
              <div className="c3-toggle-knob" />
            </button>
          </div>

          <div className="c3-grid">
            <div className="c3-card">
              <div className="c3-tier-small">Starter</div>
              <div className="c3-tier-large">Maksuton</div>
              <div className="c3-desc">Kokeile Tiedottajanne Aura -alustaa ja perusominaisuuksia.</div>
              <ul className="c3-list flex-1">
                <li><span className="c3-check"><Check className="w-4 h-4 text-white"/></span> Max 3 pilviprojektia</li>
                <li><span className="c3-check"><Check className="w-4 h-4 text-white"/></span> Kuvien vienti 1080p saakka</li>
                <li><span className="c3-check"><Check className="w-4 h-4 text-white"/></span> Perusmuokkaustyökalut</li>
                <li><span className="c3-check"><Check className="w-4 h-4 text-white"/></span> Maksuttomat pohjat ja ikonit</li>
                <li><span className="c3-check"><Check className="w-4 h-4 text-white"/></span> Käyttö selaimella ja mobiilissa</li>
              </ul>
              <button className="c3-btn">Valitse Starter</button>
            </div>
            
            <div className="c3-card">
              <div className="c3-tier-small">Standard</div>
              <div className="c3-tier-large">{isYearly ? '99,99 €/v' : '9,99 €/kk'}</div>
              <div className="c3-desc">Asiantuntijoille ja tiimeille, jotka tarvitsevat lisää tehoa ja suorituskykyä.</div>
              <ul className="c3-list flex-1">
                <li><span className="c3-check"><Check className="w-4 h-4 text-white"/></span> Max 50 pilviprojektia</li>
                <li><span className="c3-check"><Check className="w-4 h-4 text-white"/></span> Vienti 4K saakka</li>
                <li><span className="c3-check"><Check className="w-4 h-4 text-white"/></span> Edistyneet muokkaustyökalut</li>
                <li><span className="c3-check"><Check className="w-4 h-4 text-white"/></span> Tiimiyhteistyö (5 jäsentä)</li>
                <li><span className="c3-check"><Check className="w-4 h-4 text-white"/></span> Pääsy premium-mallikirjastoon</li>
              </ul>
              <button className="c3-btn">Valitse Standard</button>
            </div>

            <div className="c3-card c3-card-pro">
              <div className="c3-tier-small">Pro</div>
              <div className="c3-tier-large">{isYearly ? '199,99 €/v' : '19,99 €/kk'}</div>
              <div className="c3-desc">Yrityksille ja toimistoille täydellä AI-automaatiointegraatiolla.</div>
              <ul className="c3-list flex-1">
                <li><span className="c3-check"><Check className="w-4 h-4 text-white"/></span> Rajoittamattomat projektit</li>
                <li><span className="c3-check"><Check className="w-4 h-4 text-white"/></span> Vienti 8K + animaatiot</li>
                <li><span className="c3-check"><Check className="w-4 h-4 text-white"/></span> AI-pohjaiset sisällöntuotantotyökalut</li>
                <li><span className="c3-check"><Check className="w-4 h-4 text-white"/></span> Rajoittamaton tiimikoko</li>
                <li><span className="c3-check"><Check className="w-4 h-4 text-white"/></span> Mukautettu brändäys & tuki</li>
              </ul>
              <button className="c3-btn">Valitse Pro</button>
            </div>
          </div>
        </section>

        {/* Section 9 - FinalCTA */}
        <section id="yhteystiedot" className="w-full max-w-6xl mx-auto px-6 py-20 md:py-32">
          <div className="liquid-glass relative overflow-hidden rounded-3xl px-8 py-16 md:py-24 text-center">
            <div className="absolute inset-0 pointer-events-none opacity-30" style={{ background: 'radial-gradient(600px circle at 50% 0%, rgba(255,255,255,0.15), transparent 70%)' }} />
            <h2 className="relative z-10 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.02]">
              Sulje turhat välilehdet.<br/>Aloita tehokas työpäivä.
            </h2>
            <p className="relative z-10 mt-6 text-white/60 max-w-md mx-auto text-sm leading-[1.6]">
              Liity satojen kasvuyritysten joukkoon, jotka tekevät viestinnästään strategisen kilpailuedun.
            </p>
            <div className="relative z-10 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <AppleButton />
              <button className="inline-flex items-center gap-2 rounded-full border border-white/15 text-white text-sm font-medium px-5 py-3 transition-colors hover:bg-white/5">
                Ota yhteyttä myyntiin
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
