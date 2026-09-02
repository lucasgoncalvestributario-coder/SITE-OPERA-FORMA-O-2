import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center pt-32 sm:pt-40 md:pt-44 pb-16 sm:pb-20 overflow-hidden bg-[#07080a]">
      
      {/* Background Image Layer - Maximum Sharpness & Native Quality */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#07080a]">
        <img
          src="https://i.ibb.co/HjxcdCW/Chat-GPT-Image-2-de-set-de-2026-09-33-17.png"
          alt="Formação de operadores de máquinas pesadas"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />

        {/* Minimal Clean Dark Gradient for Text Contrast without hazing */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080a] via-transparent to-black/30 pointer-events-none" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-4 sm:pt-8">
        
        {/* Core Main Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto space-y-4"
        >
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
