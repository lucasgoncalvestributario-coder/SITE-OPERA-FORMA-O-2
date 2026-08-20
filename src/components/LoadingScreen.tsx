import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, HardHat } from 'lucide-react';

interface LoadingScreenProps {
  onLoaded?: () => void;
  minDuration?: number;
}

export const OFFICIAL_LOGO_URL = 'https://i.postimg.cc/pTsJkf2p/Chat-GPT-Image-22-de-jul-de-2026-12-50-13.png';

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoaded, minDuration = 2200 }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min(100, Math.floor((elapsed / minDuration) * 100));
      
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsFinished(true);
          if (onLoaded) onLoaded();
        }, 300);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [minDuration, onLoaded]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-b from-[#050608] via-[#0a0b0f] to-[#040406] select-none px-4"
        >
          {/* Subtle Golden Radial Glow background */}
          <div className="absolute w-[500px] h-[500px] bg-amber-500/15 rounded-full blur-[140px] pointer-events-none animate-pulse" />
          <div className="absolute w-[300px] h-[300px] bg-yellow-500/10 rounded-full blur-[90px] pointer-events-none" />

          {/* Center Content Container */}
          <div className="relative z-10 flex flex-col items-center text-center max-w-sm w-full">
            
            {/* Logo Container with Pulsing Gold Aura (No background box/frame) */}
            <div className="relative mb-8 group flex items-center justify-center">
              {/* Gold Glow Ring Pulsing */}
              <div className="absolute -inset-10 bg-gradient-to-r from-amber-500/50 via-yellow-400/40 to-amber-600/50 rounded-full blur-3xl animate-pulse opacity-90 pointer-events-none"></div>

              {/* Transparent PNG Logo */}
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="relative flex items-center justify-center"
              >
                <img
                  src={OFFICIAL_LOGO_URL}
                  alt="Logo Oficial da Escola"
                  className="h-32 sm:h-44 md:h-52 w-auto object-contain drop-shadow-[0_0_30px_rgba(212,175,55,0.85)] filter brightness-105"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>

            {/* School Tagline */}
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-1 mb-8"
            >
              <p className="text-xs text-amber-300 font-mono tracking-widest uppercase flex items-center justify-center gap-1.5 font-bold">
                <ShieldCheck className="w-4 h-4 text-amber-400 inline" /> Escola Credenciada CREA
              </p>
            </motion.div>

            {/* Fine Progress Bar Indicator */}
            <div className="w-full space-y-2">
              <div className="flex items-center justify-between text-[11px] font-mono text-gray-400 uppercase tracking-widest px-1">
                <span className="flex items-center gap-1.5 text-amber-300 font-semibold">
                  <HardHat className="w-3.5 h-3.5 text-amber-400 animate-bounce" />
                  Carregando Centro de Treinamento...
                </span>
                <span className="font-bold text-amber-400">{progress}%</span>
              </div>

              {/* Progress Track */}
              <div className="relative w-full h-1.5 bg-gray-900/90 rounded-full overflow-hidden border border-amber-500/20 p-0.5">
                <motion.div
                  className="h-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-300 rounded-full shadow-[0_0_12px_rgba(255,215,0,0.8)]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'easeOut' }}
                />
              </div>
            </div>

            {/* Footer Trust Indicator */}
            <p className="text-[10px] text-gray-500 uppercase tracking-wider mt-6 font-medium">
              Preparando simuladores e informações de turmas
            </p>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
