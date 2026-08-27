import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_ITEMS } from '../data/content';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { WhatsAppIcon } from './BrandIcons';
import { COMPANY_INFO } from '../data/content';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-28 bg-[#f5f4ef] text-slate-900 overflow-hidden border-t-2 border-slate-200">
      
      {/* Lighting */}
      <div className="absolute top-1/2 right-10 w-[400px] h-[400px] bg-amber-200/20 rounded-full blur-[140px] pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:30px_30px] opacity-40 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-amber-400 text-xs font-mono uppercase tracking-widest mb-4 shadow-md">
            <HelpCircle className="w-4 h-4 text-amber-400" />
            <span>Tire Suas Dúvidas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase font-display tracking-tight">
            Perguntas <span className="text-amber-600">Frequentes</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base mt-3 font-body">
            Tudo o que você precisa saber antes de iniciar seu treinamento na Opera Formação.
          </p>

          <div className="w-24 h-1.5 bg-gradient-to-r from-amber-500 to-yellow-500 mx-auto mt-4 rounded-full shadow-sm"></div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border-2 border-slate-200 hover:border-amber-500 transition overflow-hidden shadow-lg"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-black text-slate-900 uppercase font-display tracking-wide">
                    {item.question}
                  </span>
                  <div className={`p-2.5 rounded-xl transition-all duration-300 ${isOpen ? 'rotate-180 bg-slate-900 text-amber-400' : 'bg-amber-100 text-amber-800'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-6 pt-0 text-slate-700 text-sm sm:text-base leading-relaxed border-t border-slate-100 mt-2 font-body font-medium">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-16 p-8 rounded-3xl bg-slate-950 text-white border-2 border-slate-900 text-center space-y-4 shadow-2xl">
          <h4 className="text-xl sm:text-2xl font-black text-white uppercase font-display tracking-wide">
            Ainda tem alguma dúvida específica?
          </h4>
          <p className="text-slate-300 text-xs sm:text-sm font-body max-w-xl mx-auto">
            Nossa equipe de atendimento no WhatsApp está disponível diariamente das 07h30 às 00h para te ajudar.
          </p>
          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-black font-extrabold text-sm uppercase tracking-wider rounded-xl shadow-[0_0_25px_rgba(212,175,55,0.4)] transition font-display transform hover:scale-105"
          >
            <WhatsAppIcon className="w-5 h-5 text-black" />
            <span>Falar com Atendente Agora</span>
          </a>
        </div>

      </div>
    </section>
  );
};

