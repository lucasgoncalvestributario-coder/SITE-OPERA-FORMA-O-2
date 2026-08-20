import React from 'react';
import { motion } from 'motion/react';
import { RotateCcw, CheckCircle2, Shield, HeartHandshake, Award } from 'lucide-react';
import { LEARNING_GUARANTEE } from '../data/content';

export const LearningGuaranteeSection: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-28 bg-[#f8fafc] text-slate-900 overflow-hidden border-t border-slate-200">
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[500px] bg-amber-100/50 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px] opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Guarantee Card Container */}
        <div className="relative rounded-3xl bg-white border-2 border-slate-200 p-8 sm:p-12 lg:p-14 shadow-2xl overflow-hidden">
          
          {/* Subtle accent bar on top */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500"></div>

          {/* Top Decorative Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-amber-400 text-xs font-mono uppercase tracking-widest mb-6 shadow-sm">
            <HeartHandshake className="w-4 h-4 text-amber-400" />
            <span>{LEARNING_GUARANTEE.badge}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-5">
              
              <div className="space-y-2">
                <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-amber-600 block">
                  {LEARNING_GUARANTEE.title}
                </span>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase font-display tracking-tight leading-[1.08]">
                  APRENDEU? <span className="text-amber-600">ÓTIMO.</span><br />
                  AINDA PRECISA REFORÇAR? <span className="text-slate-900 underline decoration-amber-400 decoration-wavy">VOLTE.</span>
                </h2>
              </div>

              <p className="text-slate-600 text-sm sm:text-base md:text-lg font-body leading-relaxed max-w-2xl">
                {LEARNING_GUARANTEE.description}
              </p>

              {/* Benefits Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {LEARNING_GUARANTEE.keyPoints.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-[#f8fafc] border border-slate-200"
                  >
                    <div className="p-1 rounded-md bg-amber-100 text-amber-800 flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-800 font-semibold font-body">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

            </div>

            {/* Right Visual Pillar */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center p-8 sm:p-10 rounded-2xl bg-slate-900 text-white border-2 border-slate-900 shadow-2xl">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-amber-400 via-amber-500 to-yellow-400 flex items-center justify-center text-black shadow-[0_0_35px_rgba(212,175,55,0.5)] mb-6 animate-pulse">
                <RotateCcw className="w-10 h-10 stroke-[2.5]" />
              </div>

              <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400">
                Sem Custo Adicional
              </span>

              <h3 className="text-xl sm:text-2xl font-black text-white uppercase font-display mt-1 tracking-wide">
                Refaça 100% Grátis
              </h3>

              <p className="text-xs text-slate-300 font-body mt-3 leading-relaxed">
                Nosso compromisso é com a sua segurança operacional e total domínio da máquina.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

