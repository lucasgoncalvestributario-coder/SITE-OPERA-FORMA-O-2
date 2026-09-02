import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, CheckCircle2, Search } from 'lucide-react';
import { OFFICIAL_LOGO_URL } from './LoadingScreen';

interface WhatsAppSurveyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectOption: (optionText: string) => void;
}

export const WhatsAppSurveyModal: React.FC<WhatsAppSurveyModalProps> = ({
  isOpen,
  onClose,
  onSelectOption,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const options = [
    {
      id: 'decidido',
      title: 'Já estou decidido e só procurando uma escola',
      icon: <CheckCircle2 className="w-8 h-8 sm:w-9 sm:h-9 text-[#25D366] shrink-0" />,
      iconBox: 'bg-[#25D366]/15 border-[#25D366]/40 text-[#25D366]',
      hoverBorder: 'hover:border-[#25D366] hover:bg-[#25D366]/10',
      accentGlow: 'group-hover:shadow-[0_0_35px_rgba(37,211,102,0.25)]',
    },
    {
      id: 'pesquisando',
      title: 'Ainda estou pesquisando',
      icon: <Search className="w-8 h-8 sm:w-9 sm:h-9 text-amber-400 shrink-0" />,
      iconBox: 'bg-amber-500/15 border-amber-500/40 text-amber-400',
      hoverBorder: 'hover:border-amber-400 hover:bg-amber-500/10',
      accentGlow: 'group-hover:shadow-[0_0_35px_rgba(245,158,11,0.25)]',
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          {/* Backdrop click */}
          <div className="absolute inset-0" onClick={onClose} />

          <motion.div
            initial={{ opacity: 0, scale: 0.93, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-[#0c0e17] border-2 border-amber-500/40 rounded-3xl p-6 sm:p-10 shadow-[0_25px_80px_rgba(0,0,0,0.98),0_0_40px_rgba(245,158,11,0.25)] overflow-hidden z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Ambient subtle radiant glow */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-amber-500/15 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-yellow-400/10 rounded-full blur-[120px] pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10 transition-colors focus:outline-none cursor-pointer z-20"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Top School Logo (4x maior) */}
            <div className="flex items-center justify-center sm:justify-start mb-6 sm:mb-8">
              <img
                src={OFFICIAL_LOGO_URL}
                alt="Opera Formação"
                className="h-28 sm:h-36 md:h-40 w-auto object-contain drop-shadow-[0_0_25px_rgba(212,175,55,0.45)]"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Header Question with Yellow Gradient */}
            <div className="mb-6 sm:mb-8 text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase font-display tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-500 drop-shadow-sm">
                Como está sua situação?
              </h3>
            </div>

            {/* Interactive Choice Buttons */}
            <div className="space-y-4 sm:space-y-5">
              {options.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => onSelectOption(opt.title)}
                  className={`w-full group text-left p-6 sm:p-7 rounded-2xl bg-[#131622] border-2 border-white/10 ${opt.hoverBorder} ${opt.accentGlow} transition-all duration-300 transform active:scale-[0.98] flex items-center gap-5 sm:gap-6 relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-amber-400 cursor-pointer shadow-xl`}
                >
                  {/* Left Icon */}
                  <div className={`p-3.5 sm:p-4 rounded-2xl border ${opt.iconBox} transition-transform group-hover:scale-105 shrink-0`}>
                    {opt.icon}
                  </div>

                  {/* Text Details */}
                  <div className="flex-1 min-w-0 pr-2">
                    <h4 className="text-lg sm:text-xl md:text-2xl font-black text-white group-hover:text-amber-300 transition-colors font-display leading-tight tracking-tight">
                      {opt.title}
                    </h4>
                  </div>

                  {/* Right Arrow */}
                  <div className="shrink-0 p-3 rounded-xl bg-white/5 group-hover:bg-amber-400 group-hover:text-black text-gray-400 transition-all">
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              ))}
            </div>

            {/* Bottom Subtitle / Info */}
            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm text-gray-400 font-body">
              <span>Selecione uma opção para continuar</span>
              <span className="font-mono text-xs text-amber-400 font-semibold">
                Atendimento Rápido
              </span>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
