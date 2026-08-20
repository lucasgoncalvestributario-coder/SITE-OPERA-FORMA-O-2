import React from 'react';
import { motion } from 'motion/react';
import { DIFFERENTIALS } from '../data/content';
import { BadgePercent, ShieldCheck, Award, Zap, ChevronRight } from 'lucide-react';

interface DifferentialsSectionProps {
  onOpenCourseModal?: () => void;
}

export const DifferentialsSection: React.FC<DifferentialsSectionProps> = ({ onOpenCourseModal }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BadgePercent':
        return <BadgePercent className="w-8 h-8 text-amber-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-8 h-8 text-amber-600" />;
      case 'Award':
        return <Award className="w-8 h-8 text-amber-600" />;
      case 'Zap':
        return <Zap className="w-8 h-8 text-amber-600" />;
      default:
        return <Award className="w-8 h-8 text-amber-600" />;
    }
  };

  return (
    <section id="diferenciais" className="relative py-28 bg-[#f8f7f4] text-slate-900 overflow-hidden border-t-2 border-slate-200">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-200/30 rounded-full blur-[140px] pointer-events-none" />

      {/* Modern Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px] opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-amber-400 text-xs font-mono uppercase tracking-widest mb-4 shadow-md">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>Por que escolher a Opera Formação</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase font-display tracking-tight">
            Nossos <span className="text-amber-600">Diferenciais Exclusivos</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base mt-3 font-body">
            O padrão de excelência nacional para quem deseja aprender de verdade e trabalhar rápido.
          </p>

          <div className="w-24 h-1.5 bg-gradient-to-r from-amber-500 to-yellow-500 mx-auto mt-4 rounded-full shadow-sm"></div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DIFFERENTIALS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative p-6 rounded-2xl bg-white border-2 border-slate-200 hover:border-amber-500 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between"
            >
              <div className="relative z-10 space-y-4">
                {/* Badge & Icon Header */}
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-xl bg-amber-100 border border-amber-300 group-hover:bg-slate-900 transition duration-300 shadow-sm">
                    {getIcon(item.iconName)}
                  </div>
                  
                  <span className="text-[10px] font-mono font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-900 text-amber-400">
                    {item.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-black text-slate-900 uppercase font-display leading-snug group-hover:text-amber-600 transition-colors tracking-wide">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-body">
                  {item.description}
                </p>
              </div>

              {/* Bottom Decorative Element */}
              <div className="relative z-10 pt-4 mt-4 border-t border-slate-200 flex items-center justify-between text-xs font-black text-amber-600 group-hover:text-slate-900 font-display uppercase tracking-wider">
                <span>Garantia Opera</span>
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA banner below differentials */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 p-8 sm:p-10 rounded-3xl bg-slate-950 text-white border-2 border-slate-900 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
        >
          <div>
            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase font-display tracking-wide">
              Quer ver de perto a nossa estrutura e tirar suas dúvidas?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base mt-2 font-body">
              Fale direto com nossos consultores pedagógicos e reserve sua vaga para a próxima turma.
            </p>
          </div>

          <button
            onClick={onOpenCourseModal}
            className="px-8 py-4 bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-black font-extrabold text-sm uppercase tracking-wider rounded-xl shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:shadow-[0_0_35px_rgba(212,175,55,0.7)] transition-all whitespace-nowrap transform hover:scale-105 font-display"
          >
            Consultar Próxima Turma
          </button>
        </motion.div>

      </div>
    </section>
  );
};

