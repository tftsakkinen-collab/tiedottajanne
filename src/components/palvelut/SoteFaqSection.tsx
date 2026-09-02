"use client";

import { HelpCircle, ChevronDown, CheckCircle2, CreditCard } from "lucide-react";
import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

export default function SoteFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: "Miksi oma verkkokoti on tärkeä lisä vastaanoton ja varausjärjestelmän rinnalle?",
      answer: "Oma digitaalinen koti varmistaa, että asiantuntijabrändisi, potilassuhteesi ja ammatillinen luottamuksesi rakentuvat suoraan sinulle. Lisäksi ChatGPT, Perplexity ja Google suosittelevat sinua omalla nimelläsi asiantuntijana vain silloin, kun sinulla on oma tekoälyoptimoitu verkkoprofiili.",
    },
    {
      question: "Mitä 'Näe ennen kuin maksat' -lupaus ja 30 päivän takuu tarkoittavat?",
      answer: "Lupaamme, että pääset näkemään ja hyväksymään valmiin AI-optimoidun kotisivustosi ennen kuin huoleton 29 €/kk ylläpito aktivoituu. Lisäksi kaikilla toteutuksillamme on 30 päivän täysi tyytyväisyystakuu — kynnys tilaukselle on tehty olemattomaksi.",
    },
    {
      question: "Mitä 499 € Kertaperustus sisältää?",
      answer: "499 € (+ alv 0%) kertaperustus sisältää avaimet käteen -sivustorakenne, asiantuntijaprofiilin luonnin, eettiset potilasohjeistukset ja SEO/GEO-optimoidut tekstit tekoälyhakukoneille (ChatGPT, Gemini, Google AI).",
    },
    {
      question: "Miksi 499 € tarjous on rajattu vain 10 ensimmäiselle?",
      answer: "499 € (+ alv 0%) on testiryhmähinta, jolla keräämme 10 uutta vahvaa sote-alan ammatinharjoittajareferenssiä. Kun 10 paikkaa on täytetty, hinta nousee normaaliin 998 euroon.",
    },
    {
      question: "Miten tilaaminen ja maksaminen tapahtuu Stripe-kassalla?",
      answer: "Painamalla 'Tilaa AI-optimoidut sivut (499 €)' siirryt suoraan turvalliseen Stripe Checkout -kassaan. Maksu ilmoitetaan B2B-muodossa (alv 0 %, vero lisätään kassalla). Saat kuitin ja aloituskyselyn välittömästi sähköpostiisi.",
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
            Haluamme, että tilaaminen on sinulle täysin läpinäkyvää, turvallista ja huoletonta.
          </p>
        </div>

        {/* FAQ Accordion with semantic H3 headings */}
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
                  <h3 className="font-semibold text-sm sm:text-base text-[var(--text)] font-display m-0 p-0 leading-snug">
                    {faq.question}
                  </h3>
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
            Oletko valmis rakentamaan menestyksesi omalle maallesi?
          </h3>
          <div>
            <a
              href="https://buy.stripe.com/9B600j4Kg4fA8xQ8zX0Ny04"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary btn--lg text-sm sm:text-base font-bold shadow-xl inline-flex items-center gap-2 cursor-pointer"
            >
              <CreditCard className="w-5 h-5 text-[var(--accent-ink)]" />
              <span>Tilaa AI-optimoidut sivut (499 €) — Stripe</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
