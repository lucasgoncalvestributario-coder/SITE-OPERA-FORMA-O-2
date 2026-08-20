import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, Quote, Sparkles, Building2, Users } from 'lucide-react';
import { DIRECTOR_INFO, COMPANY_INFO } from '../data/content';

export const DirectorSection: React.FC = () => {
  return (
    <section id="diretor" className="relative py-24 sm:py-28 bg-[#ffffff] text-slate-900 overflow-hidden border-t border-slate-200">
      
      {/* Background Subtle Ambience */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-amber-100/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-slate-100 rounded-full blur-[120px] pointer-events-none" />

      {/* Modern Diagonal Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:28px_28px] opacity-70 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-amber-400 text-xs font-mono uppercase tracking-widest mb-4 shadow-sm">
            <Building2 className="w-4 h-4 text-amber-400" />
            <span>Liderança e Visão Institucional</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase font-display tracking-tight">
            Conheça Nosso <span className="text-amber-600">Diretor & CEO</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base mt-3 font-body">
            Inovação, compromisso social e paixão por formar profissionais prontos para o canteiro de obras.
          </p>

          <div className="w-24 h-1.5 bg-gradient-to-r from-amber-500 to-yellow-500 mx-auto mt-4 rounded-full shadow-sm"></div>
        </div>

        {/* Executive Profile Card */}
        <div className="relative p-8 sm:p-12 rounded-3xl bg-[#f8fafc] border-2 border-slate-200 shadow-xl max-w-5xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            
            {/* Executive Photo Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-5 relative text-center"
            >
              <div className="relative inline-block mx-auto">
                {/* Shadow frame */}
                <div className="absolute -inset-3 bg-gradient-to-tr from-amber-400/20 via-amber-200/30 to-slate-200 rounded-3xl blur-md pointer-events-none"></div>

                <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-2xl overflow-hidden border-2 border-slate-900 shadow-2xl">
                  <img
                    src={DIRECTOR_INFO.photo}
                    alt={DIRECTOR_INFO.name}
                    className="w-full h-full object-cover filter brightness-100 contrast-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-4 left-4 right-4 text-center bg-slate-900/95 backdrop-blur-md p-3 rounded-xl border border-amber-500/40">
                    <span className="text-white font-black text-sm uppercase tracking-wider font-display block">
                      {DIRECTOR_INFO.name}
                    </span>
                    <span className="text-amber-400 text-[11px] font-mono uppercase block font-semibold mt-0.5">
                      Diretor & CEO
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-7 space-y-6"
            >
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-100 text-amber-900 text-xs font-bold uppercase mb-2 font-display tracking-wider border border-amber-300">
                  <Sparkles className="w-3.5 h-3.5 text-amber-700" /> Liderança Executiva
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase font-display tracking-wide">
                  {DIRECTOR_INFO.name}
                </h3>
                <p className="text-amber-700 font-bold text-sm font-display tracking-wide">
                  Diretor e CEO da Opera Formação
                </p>
              </div>

              {/* Bio Paragraph */}
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-body">
                {DIRECTOR_INFO.bio}
              </p>

              {/* Executive Quote Block */}
              <div className="relative p-5 rounded-2xl bg-white border-2 border-slate-200 shadow-sm">
                <Quote className="absolute top-3 right-4 w-8 h-8 text-amber-500/20" />
                <p className="text-slate-800 italic text-sm sm:text-base font-semibold relative z-10 leading-relaxed font-body">
                  "{DIRECTOR_INFO.quote}"
                </p>
              </div>

              {/* Key Stats Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {DIRECTOR_INFO.stats.map((stat, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white border border-slate-200 text-center shadow-sm">
                    <span className="block text-xl font-black text-slate-900 font-display">
                      {stat.value}
                    </span>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mt-0.5 font-display">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};


