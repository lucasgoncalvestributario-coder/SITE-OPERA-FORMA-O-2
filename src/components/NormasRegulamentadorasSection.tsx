import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, FileCheck, CheckCircle2, BookOpen } from 'lucide-react';
import { REGULATORY_STANDARDS } from '../data/content';

export const NormasRegulamentadorasSection: React.FC = () => {
  return (
    <section id="normas" className="relative py-24 sm:py-28 bg-[#ffffff] text-slate-900 overflow-hidden border-t border-slate-200">
      {/* Subtle Background Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-amber-100/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:28px_28px] opacity-70 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-amber-400 text-xs font-mono uppercase tracking-widest mb-4 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Conformidade Técnica e Legal</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase font-display tracking-tight leading-tight">
            Normas <span className="text-amber-600">Regulamentadoras</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base mt-4 font-body leading-relaxed">
            Nossos treinamentos são ministrados com rigor técnico, fundamentados nas <strong>Normas Regulamentadoras aplicáveis a cada capacitação</strong>, garantindo formação segura e alinhada às exigências da indústria, construção civil e mineração.
          </p>

          <div className="w-24 h-1.5 bg-gradient-to-r from-amber-500 to-yellow-500 mx-auto mt-5 rounded-full shadow-sm" />
        </div>

        {/* NRs Modern Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REGULATORY_STANDARDS.map((nr, index) => (
            <motion.div
              key={nr.code}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative p-6 sm:p-7 rounded-2xl bg-[#f8fafc] border-2 border-slate-200/90 hover:border-amber-500 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-xl group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1.5 rounded-xl bg-slate-900 text-amber-400 font-display font-black text-base tracking-wider shadow-sm">
                    {nr.code}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-amber-400 transition-colors shadow-sm">
                    <FileCheck className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-slate-900 font-bold text-base font-display uppercase tracking-wide group-hover:text-amber-600 transition-colors mb-2">
                  {nr.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm font-body leading-relaxed">
                  {nr.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-200 flex items-center gap-2 text-[11px] font-mono text-slate-700 font-bold uppercase">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                <span>Aplicável conforme a modalidade</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Informative Footer Note */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 max-w-4xl mx-auto text-center shadow-lg">
          <p className="text-xs sm:text-sm text-slate-300 font-body leading-relaxed">
            <strong className="text-amber-400 font-semibold font-display">Nota Técnica:</strong> Os conteúdos programáticos são personalizados e abrangem as normas pertinentes a cada tipo de máquina e operação, assegurando que o operador compreenda os requisitos de segurança, manutenção e prevenção de riscos específicos de sua função.
          </p>
        </div>

      </div>
    </section>
  );
};

