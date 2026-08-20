import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Award, Clock, MapPin, ChevronDown, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface HeroProps {
  onOpenCourseModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCourseModal }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 sm:pt-40 pb-20 overflow-hidden bg-[#07080a]">
      
      {/* Background Video Layer with Machinery in Action */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://i.ibb.co/h1hg9cjz/Whats-App-Image-2026-08-20-at-13-56-06-1.jpg"
          className="w-full h-full object-cover scale-105 filter brightness-75 contrast-125 saturate-110"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-heavy-machinery-excavator-digging-ground-41399-large.mp4" type="video/mp4" />
        </video>

        {/* Sophisticated Dark Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080a] via-[#07080a]/70 to-black/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07080a]/90 via-[#07080a]/50 to-transparent z-10" />

        {/* Ambient Golden Lighting */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/15 rounded-full blur-[170px] pointer-events-none z-10 animate-pulse" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-6 sm:pt-10">
        
        {/* Core Main Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="max-w-5xl mx-auto space-y-4"
        >
          <span className="block text-amber-400 text-sm sm:text-base md:text-lg font-mono font-bold uppercase tracking-[0.25em]">
            Opera Formação
          </span>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase font-display leading-[1.04]">
            Formação Profissional para Operadores de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 underline decoration-amber-400/40">
              Máquinas Pesadas
            </span>
          </h1>

          <p className="text-base sm:text-xl text-gray-300 font-body max-w-3xl mx-auto leading-relaxed pt-2">
            Aulas práticas diretas na cabine. Carteira de operador e certificado CREA entregues em até 24 horas. Qualificação de alto padrão para canteiros de obras e mineração.
          </p>
        </motion.div>

        {/* Clean Strategic CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 max-w-md mx-auto"
        >
          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-black font-extrabold text-sm sm:text-base uppercase tracking-wider rounded-2xl shadow-[0_0_35px_rgba(212,175,55,0.45)] hover:shadow-[0_0_50px_rgba(212,175,55,0.7)] transition-all transform hover:-translate-y-0.5 font-display"
          >
            <MessageSquare className="w-5 h-5 text-black" />
            <span>Falar com um Consultor</span>
          </a>

          {onOpenCourseModal && (
            <button
              onClick={onOpenCourseModal}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 rounded-2xl bg-[#12141c]/90 hover:bg-[#181a24] text-gray-200 hover:text-white border border-amber-500/30 text-xs sm:text-sm font-bold uppercase tracking-wider font-display transition"
            >
              Ver Grade de Cursos
            </button>
          )}
        </motion.div>

        {/* Scroll Indicator */}
        <div className="mt-14 flex justify-center">
          <a
            href="#diferenciais"
            className="p-2.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 hover:text-amber-300 transition animate-bounce"
            title="Rolar para ver mais"
          >
            <ChevronDown className="w-6 h-6" />
          </a>
        </div>

      </div>
    </section>
  );
};
