import React from 'react';
import { motion } from 'motion/react';
import { MACHINES_LIST } from '../data/content';
import { CheckCircle2, HardHat } from 'lucide-react';

export const MachinesSection: React.FC = () => {
  return (
    <section id="maquinas" className="relative py-24 sm:py-28 bg-[#ffffff] text-slate-900 overflow-hidden border-t border-slate-200">
      
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-100/50 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:28px_28px] opacity-70 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-amber-400 text-xs font-mono uppercase tracking-widest mb-4 shadow-sm">
            <HardHat className="w-4 h-4 text-amber-400" />
            <span>Treinamento Prático Real</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase font-display tracking-tight leading-tight">
            Máquinas de <span className="text-amber-600">Formação</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base mt-3 max-w-2xl mx-auto font-body">
            Capacitação prática completa nas 3 principais máquinas da construção civil e mineração — todas inclusas na mesma formação.
          </p>

          <div className="w-24 h-1.5 bg-gradient-to-r from-amber-500 to-yellow-500 mx-auto mt-4 rounded-full shadow-sm"></div>
        </div>

        {/* 3 Machines - Side-by-side horizontal scroll on mobile, 3-column grid on desktop */}
        <div className="flex lg:grid lg:grid-cols-3 gap-6 overflow-x-auto snap-x snap-mandatory pb-6 lg:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-thin">
          {MACHINES_LIST.map((machine, index) => (
            <motion.div
              key={machine.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="w-[85vw] sm:w-[360px] lg:w-auto snap-center shrink-0 lg:shrink relative rounded-3xl bg-white border-2 border-slate-200 overflow-hidden shadow-xl hover:shadow-2xl hover:border-amber-500 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* 100% Fill Photo Container */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-950 border-b border-slate-200">
                  <img
                    src={machine.image}
                    alt={machine.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-105"
                    referrerPolicy="no-referrer"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                  {/* Category Tag */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 rounded-full bg-slate-950/90 text-amber-400 font-mono text-[11px] font-bold uppercase tracking-wider backdrop-blur-sm border border-amber-500/40 shadow-sm">
                      {machine.tag}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 uppercase font-display tracking-tight">
                      {machine.name}
                    </h3>
                    <div className="w-12 h-1 bg-amber-500 rounded-full mt-1.5" />
                  </div>

                  <p className="text-slate-600 text-sm font-body leading-relaxed">
                    {machine.description}
                  </p>

                  <div className="pt-2 border-t border-slate-100 space-y-2.5">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 block">
                      Conteúdo Prático & Operacional:
                    </span>
                    {machine.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-body">
                        <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Informative Quality Note */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 max-w-4xl mx-auto text-center shadow-lg">
          <p className="text-xs sm:text-sm text-slate-300 font-body leading-relaxed">
            <strong className="text-amber-400 font-semibold font-display">Formação Tripla Integrada:</strong> O aluno aprende e opera na prática a Escavadeira Hidráulica, Retroescavadeira e Mini Pá Carregadeira (Bobcat) durante o mesmo curso.
          </p>
        </div>

      </div>
    </section>
  );
};
