import React from 'react';
import { motion } from 'motion/react';
import { Building2, Users, MapPin, Briefcase } from 'lucide-react';
import { DIRECTOR_INFO } from '../data/content';

export const DirectorSection: React.FC = () => {
  return (
    <section id="diretor" className="relative py-20 sm:py-24 bg-[#ffffff] text-slate-900 overflow-hidden border-t border-slate-200">
      
      {/* Background Subtle Ambience */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-amber-100/50 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:28px_28px] opacity-70 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-amber-400 text-xs font-mono uppercase tracking-widest mb-3 shadow-sm">
            <Building2 className="w-4 h-4 text-amber-400" />
            <span>Diretoria Executiva</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase font-display tracking-tight">
            Valiandro <span className="text-amber-600">Bock</span>
          </h2>
          
          <p className="text-slate-600 text-sm sm:text-base font-body font-medium mt-1">
            Diretor & CEO da Opera Formação
          </p>

          <div className="w-20 h-1.5 bg-gradient-to-r from-amber-500 to-yellow-500 mx-auto mt-4 rounded-full shadow-sm"></div>
        </div>

        {/* Executive Profile Card */}
        <div className="relative p-6 sm:p-10 rounded-3xl bg-[#f8fafc] border-2 border-slate-200 shadow-2xl">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Executive Photo Column - Bigger, Bright & Colorful */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-6 relative text-center flex justify-center"
            >
              <div className="relative w-full max-w-sm sm:max-w-md h-[420px] sm:h-[480px] rounded-3xl overflow-hidden border-4 border-amber-400 shadow-2xl group">
                <img
                  src={DIRECTOR_INFO.photo}
                  alt={DIRECTOR_INFO.name}
                  className="w-full h-full object-cover filter brightness-105 saturate-125 contrast-105 group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Vivid Corner Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none"></div>

                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 backdrop-blur-md p-3.5 rounded-2xl border border-amber-400/50 shadow-lg text-center">
                  <span className="text-white font-black text-base uppercase tracking-wider font-display block">
                    {DIRECTOR_INFO.name}
                  </span>
                  <span className="text-amber-400 text-xs font-mono uppercase block font-bold mt-0.5">
                    {DIRECTOR_INFO.role}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Stats Column - ONLY the 3 items requested */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="md:col-span-6 space-y-4"
            >
              <div className="space-y-3">
                {/* Stat 1: Experiência */}
                <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border-2 border-slate-200 hover:border-amber-500 transition shadow-md group">
                  <div className="p-3.5 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-500 text-black shadow-md flex-shrink-0">
                    <Briefcase className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <div>
                    <span className="text-xl sm:text-2xl font-black text-slate-900 font-display uppercase tracking-tight block">
                      Mais de 3 Anos
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-600 font-body">
                      De experiência no ramo
                    </span>
                  </div>
                </div>

                {/* Stat 2: Alunos */}
                <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border-2 border-slate-200 hover:border-amber-500 transition shadow-md group">
                  <div className="p-3.5 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-500 text-black shadow-md flex-shrink-0">
                    <Users className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <div>
                    <span className="text-xl sm:text-2xl font-black text-slate-900 font-display uppercase tracking-tight block">
                      Mais de 1.650
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-600 font-body">
                      Alunos formados no Brasil
                    </span>
                  </div>
                </div>

                {/* Stat 3: Cidades */}
                <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border-2 border-slate-200 hover:border-amber-500 transition shadow-md group">
                  <div className="p-3.5 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-500 text-black shadow-md flex-shrink-0">
                    <MapPin className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <div>
                    <span className="text-xl sm:text-2xl font-black text-slate-900 font-display uppercase tracking-tight block">
                      26 Cidades
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-600 font-body">
                      Cidades atendidas em 8 Estados
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};



