import React from 'react';
import { motion } from 'motion/react';
import { OFFICIAL_LOGO_URL } from './LoadingScreen';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center pt-36 sm:pt-44 md:pt-48 pb-16 sm:pb-20 overflow-hidden bg-[#07080a]">
      
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

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-2 sm:pt-4">
        
        {/* Grand Centered Official Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-8 sm:mb-12"
        >
          <div className="relative group inline-block">
            {/* Ambient Golden Glow Aura */}
            <div className="absolute -inset-16 bg-yellow-400/35 rounded-full blur-3xl opacity-85 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none scale-125 animate-pulse" />
            <img
              src={OFFICIAL_LOGO_URL}
              alt="Logo Oficial Opera Formação"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="relative h-48 sm:h-64 md:h-80 lg:h-[420px] xl:h-[500px] w-auto max-w-[92vw] object-contain drop-shadow-[0_0_45px_rgba(234,179,8,0.95)] filter brightness-105 transition-transform duration-500 hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        {/* Core Main Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
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

      </div>
    </section>
  );
};
