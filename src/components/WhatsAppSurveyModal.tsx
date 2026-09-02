import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, CheckCircle2, Search, ArrowLeft } from 'lucide-react';
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
  // Lock background body scroll completely while modal is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      const originalOverscroll = document.body.style.overscrollBehavior;
      document.body.style.overflow = 'hidden';
      document.body.style.overscrollBehavior = 'none';
      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.overscrollBehavior = originalOverscroll;
      };
    }
  }, [isOpen]);

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
        <div className="fixed inset-0 z-[9999] overflow-y-auto overscroll-contain flex flex-col items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
          {/* Backdrop click */}
          <div className="fixed inset-0" onClick={onClose} />

          {/* Draggable & Slideable Sheet Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 40 }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0.25, bottom: 0.55 }}
            onDragEnd={(_, info) => {
              // Close if dragged up or down beyond threshold or flicked quickly
              if (
                info.offset.y > 90 ||
                info.velocity.y > 400 ||
                info.offset.y < -100 ||
                info.velocity.y < -400
              ) {
                onClose();
              }
            }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl my-auto bg-[#0c0e17] border-2 border-amber-500/40 rounded-3xl p-5 sm:p-8 md:p-10 shadow-[0_25px_80px_rgba(0,0,0,0.98),0_0_40px_rgba(245,158,11,0.25)] z-10 touch-pan-y"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Ambient subtle radiant glow */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-amber-500/15 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-yellow-400/10 rounded-full blur-[120px] pointer-events-none" />

            {/* Top Slide Handle & Indicator */}
            <div className="flex flex-col items-center justify-center pt-1 pb-3 cursor-grab active:cursor-grabbing select-none">
              <div className="w-14 h-1.5 bg-amber-400/60 rounded-full mb-1 transition-colors hover:bg-amber-400" />
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                Deslize para cima ou para baixo para voltar
              </span>
            </div>

            {/* Close / Return Button moving together with the sheet */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white border border-white/15 transition-all focus:outline-none cursor-pointer z-30 active:scale-95 shadow-lg font-mono text-xs"
              aria-label="Voltar para a página"
              title="Voltar"
            >
              <X className="w-4 h-4 text-amber-400" />
              <span className="font-bold">Voltar</span>
            </button>

            {/* Top School Logo */}
            <div className="flex items-center justify-center sm:justify-start mb-5 sm:mb-7 pt-1">
              <img
                src={OFFICIAL_LOGO_URL}
                alt="Opera Formação"
                className="h-24 sm:h-32 md:h-36 w-auto object-contain drop-shadow-[0_0_25px_rgba(212,175,55,0.45)] select-none"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Header Question with Yellow Gradient */}
            <div className="mb-5 sm:mb-7 text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase font-display tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-500 drop-shadow-sm">
                Como está sua situação?
              </h3>
            </div>

            {/* Interactive Choice Buttons */}
            <div className="space-y-3.5 sm:space-y-4">
              {options.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => onSelectOption(opt.title)}
                  className={`w-full group text-left p-5 sm:p-6 rounded-2xl bg-[#131622] border-2 border-white/10 ${opt.hoverBorder} ${opt.accentGlow} transition-all duration-300 transform active:scale-[0.98] flex items-center gap-4 sm:gap-6 relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-amber-400 cursor-pointer shadow-xl`}
                >
                  {/* Left Icon */}
                  <div className={`p-3 sm:p-3.5 rounded-2xl border ${opt.iconBox} transition-transform group-hover:scale-105 shrink-0`}>
                    {opt.icon}
                  </div>

                  {/* Text Details */}
                  <div className="flex-1 min-w-0 pr-2">
                    <h4 className="text-base sm:text-xl md:text-2xl font-black text-white group-hover:text-amber-300 transition-colors font-display leading-tight tracking-tight">
                      {opt.title}
                    </h4>
                  </div>

                  {/* Right Arrow */}
                  <div className="shrink-0 p-2.5 sm:p-3 rounded-xl bg-white/5 group-hover:bg-amber-400 group-hover:text-black text-gray-400 transition-all">
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              ))}
            </div>

            {/* Bottom Subtitle / Info */}
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm text-gray-400 font-body">
              <span>Selecione uma opção para continuar</span>
              <button
                onClick={onClose}
                className="font-mono text-xs text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 cursor-pointer transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Voltar ao site</span>
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
