import React from 'react';
import { motion } from 'motion/react';
import { RotateCcw } from 'lucide-react';
import { LEARNING_GUARANTEE } from '../data/content';
import { OFFICIAL_LOGO_URL } from './LoadingScreen';

export const LearningGuaranteeSection: React.FC = () => {
  return (
    <section id="garantia" className="relative py-20 sm:py-24 bg-[#090b10] text-white overflow-hidden border-t border-amber-500/20">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Highlighted Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-gradient-to-br from-[#12141d] via-[#0f1118] to-[#0c0d12] border-2 border-amber-400/50 p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden"
        >
          {/* Top Golden Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 shadow-[0_0_15px_rgba(212,175,55,0.8)]"></div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left: School Logo & Icon */}
            <div className="md:col-span-4 flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-black/60 border border-amber-500/30 shadow-inner">
              <img
                src={OFFICIAL_LOGO_URL}
                alt="Opera Formação Logo"
                className="w-28 sm:w-32 h-auto object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.4)] mb-3"
                referrerPolicy="no-referrer"
              />
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 text-[11px] font-mono font-bold uppercase tracking-wider">
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Garantia de Ensino</span>
              </div>
            </div>

            {/* Right: Exact Copy */}
            <div className="md:col-span-8 space-y-4 text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase font-display tracking-tight leading-tight">
                {LEARNING_GUARANTEE.headline1} <br />
                <span className="text-amber-400 underline decoration-amber-400/40">
                  {LEARNING_GUARANTEE.headline2}
                </span>
              </h2>

              <p className="text-gray-200 text-sm sm:text-base md:text-lg font-body leading-relaxed">
                {LEARNING_GUARANTEE.description}
              </p>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
