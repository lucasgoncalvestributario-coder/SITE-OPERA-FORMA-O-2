import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, CheckCircle2, FileText, Building2, Check } from 'lucide-react';
import { CREA_INSTITUTIONAL } from '../data/content';

export const CreaSection: React.FC = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-[#07080a] via-[#0f1118] to-[#07080a] overflow-hidden border-t border-amber-500/20">
      {/* Golden Aura Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Accreditation Container */}
        <div className="relative p-8 sm:p-12 md:p-14 rounded-3xl bg-gradient-to-br from-[#13151f] via-[#10121a] to-[#0d0e14] border-2 border-amber-500/40 shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden">
          
          {/* Decorative Corner Accents */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Brand Badge */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center p-8 rounded-2xl bg-black/60 border border-amber-500/30 shadow-inner">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-amber-400 via-amber-500 to-yellow-600 flex items-center justify-center text-black shadow-[0_0_30px_rgba(212,175,55,0.5)] mb-5">
                <Award className="w-12 h-12 sm:w-14 sm:h-14 stroke-[2.2]" />
              </div>

              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-amber-400 mb-1">
                Registro Oficial
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase font-display tracking-wider">
                CREA
              </h3>
              <p className="text-xs text-gray-300 font-body mt-1">
                Conselho Regional de Engenharia e Agronomia
              </p>

              <div className="mt-4 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 text-[10px] font-bold uppercase tracking-widest">
                Validade Nacional
              </div>
            </div>

            {/* Right Information Content */}
            <div className="lg:col-span-8 space-y-6">
              
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-widest mb-3">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>Reconhecimento Institucional</span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase font-display tracking-tight leading-tight">
                  {CREA_INSTITUTIONAL.title}
                </h2>

                <p className="text-gray-300 text-sm sm:text-base mt-4 font-body leading-relaxed">
                  {CREA_INSTITUTIONAL.description}
                </p>
              </div>

              {/* Pillars of trust */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-black/40 border border-amber-500/20">
                  <div className="p-1 rounded bg-amber-500/20 text-amber-400 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xs uppercase font-display tracking-wide">
                      Responsabilidade Técnica
                    </h4>
                    <p className="text-gray-400 text-xs mt-1 font-body">
                      Supervisão técnica por profissionais devidamente habilitados no sistema CONFEA/CREA.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-black/40 border border-amber-500/20">
                  <div className="p-1 rounded bg-amber-500/20 text-amber-400 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xs uppercase font-display tracking-wide">
                      Aceitação em Grandes Obras
                    </h4>
                    <p className="text-gray-400 text-xs mt-1 font-body">
                      Certificados prontos para admissão em empreiteiras, portos, indústrias e mineradoras.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
