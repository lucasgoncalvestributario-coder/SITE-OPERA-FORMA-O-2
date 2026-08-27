import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center pt-28 sm:pt-36 pb-16 sm:pb-20 overflow-hidden bg-[#07080a]">
      
      {/* Background Video Layer - Vivid, Bright & Clear Machinery in Action */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://i.ibb.co/h1hg9cjz/Whats-App-Image-2026-08-20-at-13-56-06-1.jpg"
          className="w-full h-full object-cover filter brightness-95 contrast-110 saturate-125"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-heavy-machinery-excavator-digging-ground-41399-large.mp4" type="video/mp4" />
        </video>

        {/* Crisp Semi-Transparent Contrast Overlays - Keeps machines fully visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080a] via-black/40 to-black/30 z-10" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/30 to-[#07080a]/80 z-10" />

        {/* Warm Golden Atmosphere */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-amber-400/20 rounded-full blur-[140px] pointer-events-none z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-4 sm:pt-8">
        
        {/* Core Main Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto space-y-4"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-black/60 border border-amber-400/50 backdrop-blur-md text-amber-300 text-xs sm:text-sm font-mono font-bold uppercase tracking-[0.25em] shadow-[0_0_20px_rgba(212,175,55,0.4)]">
            Opera Formação
          </span>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase font-display leading-[1.08] drop-shadow-2xl">
            Formação Profissional para Operadores de{' '}
            <span className="animate-shine-light relative inline-block drop-shadow-[0_0_25px_rgba(251,191,36,0.5)]">
              Máquinas Pesadas
            </span>
          </h1>

          <p className="text-base sm:text-xl text-gray-100 font-body max-w-3xl mx-auto leading-relaxed pt-2 drop-shadow-md">
            Aulas práticas diretas na cabine. Carteira de operador e certificado CREA entregues em até 24 horas. Qualificação de alto padrão para canteiros de obras e mineração.
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="mt-14 sm:mt-16 flex justify-center">
          <a
            href="#galeria"
            className="p-3 rounded-full bg-black/70 border border-amber-400/60 text-amber-400 hover:text-amber-300 transition animate-bounce shadow-xl"
            title="Ver Galeria de Treinamentos"
          >
            <ChevronDown className="w-6 h-6" />
          </a>
        </div>

      </div>
    </section>
  );
};
