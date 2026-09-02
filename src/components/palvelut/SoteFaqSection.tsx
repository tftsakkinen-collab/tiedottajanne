"use client";

import { HelpCircle, ChevronDown, CheckCircle2 } from "lucide-react";
import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

export default function SoteFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: "Eikö profiili ison lääkäritalon sivuilla riitä minulle?",
      answer: "Profiili ison talon sivuilla on vuokramaata. Jos vaihdat klinikkaa tai sopimusehdot huononevat, et voi ottaa potilashistoriaasi ja asiakasluottamustasi mukaasi. Omat AI-kotisivut ovat sinun oma digitaalinen kiinteistösi, joka kerää asiakasvirran suoraan sinulle riippumatta siitä, missä vastaanotat.",
    },
    {
      question: "En ole tekninen ihminen — en osaa ylläpitää tai päivittää kotisivuja.",
      answer: "Sinun ei tarvitsekaan! Siksi pakettiin kuuluu huoleton 29 € / kk ylläpitopalvelu. Me hoidamme ultra-nopean pilvihostingin, SSL-tietoturvan, järjestelmäpäivitykset ja teknisen tuen, jotta voit keskittyä 100 % potilastyöhösi.",
    },
    {
      question: "Miksi hinta on 499 € eikä 998 €?",
      answer: "499 € on erikoisperustajatarjous, joka koskee vain ensimmäistä 10 sote-yrittäjää. Haluamme kerätä 10 uutta vahvaa referenssicasea. Kun nämä 10 paikkaa ovat täynnä, hinta nousee pysyvästi 998 euroon.",
    },
    {
      question: "Kuinka nopeasti AI-kotisivuni ovat valmiina?",
      answer: "Avaimet käteen -toteutus kestää yleensä 7–14 arkipäivää aloituskyselyn täyttämisestä. Hoidamme sivuston rakenteen, tekstien hienosäädön, Valvira-yhteensopivuuden ja AEO-tekoälyindeksoinnin puolestasi.",
    },
    {
      question: "Miten maksaminen tapahtuu Stripe-kassan kautta?",
      answer: "Kopiotuasi tai klikattuasi ostopainiketta siirryt turvalliseen Stripe Checkout -kassaan. Voit maksaa pankkikortilla, Apple Paylla tai luottokortilla. Maksettuasi saat sähköpostiisi aloituskyselyn ja kuitin välittömästi.",
    },
  ];

  return (
    <section id="faq" className="py-12 md:py-20 bg-[var(--bg)] border-b border-[var(--border)] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="pill tracking-wider uppercase">
            <HelpCircle className="w-4 h-4 text-[var(--accent)]" />
            <span>Vastalauseiden Kumoaminen &amp; FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text)] font-display">
            Usein kysytyt kysymykset
          </h2>
          <p className="text-[var(--muted)] text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Haluamme, että päätöksenteko on sinulle täysin läpinäkyvää ja huoletonta.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass rounded-2xl overflow-hidden border border-[var(--border)] transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none min-h-[44px]"
                >
                  <span className="font-semibold text-sm sm:text-base text-[var(--text)] font-display">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[var(--accent)] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-[var(--muted)] leading-relaxed border-t border-[var(--border)]/50 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Final CTA Strip */}
        <div className="pt-8 text-center space-y-4">
          <h3 className="text-xl font-bold text-[var(--text)] font-display">
            Oletko valmis siirtymään vuokramaalta omalle maalle?
          </h3>
          <div>
            <a
              href="#godfather-offer"
              className="btn btn--primary btn--lg text-sm sm:text-base font-bold shadow-xl inline-flex items-center gap-2"
            >
              <CheckCircle2 className="w-5 h-5 text-[var(--accent-ink)]" />
              <span>Lukitse 499 € Perustajaetu tästä</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
