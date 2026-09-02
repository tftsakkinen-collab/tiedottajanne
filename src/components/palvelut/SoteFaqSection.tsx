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
      question: "Eikö profiili ison lääkärikeskuksen sivuilla riitä minulle?",
      answer: "Profiili ison talon sivuilla on vuokramaata. Et omista digitaalista identiteettiäsi, ja jos vaihdat toimipistettä tai kliinistä ryhmää, asiakasvirtasi katkeaa. Lisäksi ChatGPT ja Gemini eivät osaa suositella sinua erillisenä asiantuntijana ilman omaa indeksoitua verkkokotia.",
    },
    {
      question: "Mitä 'Näe ennen kuin maksat' -lupaus tarkoittaa?",
      answer: "Lupaamme, että pääset näkemään ja hyväksymään valmiin AI-optimoidun kotisivustosi ennen kuin huoleton 39 €/kk ylläpito aktivoituu. Lisäksi kaikilla toteutuksillamme on 30 päivän täysi tyytyväisyystakuu.",
    },
    {
      question: "Miten ilmainen 45 minuutin Näkyvyysdiagnoosi toimii?",
      answer: "Näkyvyysdiagnoosi on maksuton 45 min etätapaaminen (Google Meet), jossa selvitämme kuka todella omistaa brändisi tällä hetkellä ja miltä näytät tekoälyhakukoneissa (ChatGPT, Gemini, Google AI). Diagnoosi ei velvoita ostamaan mitään.",
    },
    {
      question: "Miksi 499 € tarjous on rajattu vain 10 ensimmäiselle?",
      answer: "499 € (+ alv 0%) on testiryhmähinta, jolla keräämme 10 uutta vahvaa sote-alan ammatinharjoittajareferenssiä. Kun 10 paikkaa on myyty, hinta nousee normaaliin 998 euroon.",
    },
    {
      question: "Miten maksaminen tapahtuu Stripe-kassan kautta?",
      answer: "Ostopainiketta klikkaamalla siirryt turvalliseen Stripe Checkout -kassaan. Maksu ilmoitetaan B2B-muodossa (alv 0 %, lisätään kassalla). Saat kuitin ja aloituskyselyn välittömästi sähköpostiisi.",
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
              <span>Lukitse 499 € Testiryhmäetu Tästä</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
