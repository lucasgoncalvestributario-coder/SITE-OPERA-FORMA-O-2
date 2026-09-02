import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { UserCheck, MapPin, CheckCircle2 } from 'lucide-react';
import {
  ENROLLMENT_NOTIFICATIONS,
  SOCIAL_PROOF_CONFIG,
  EnrollmentNotification,
} from '../data/socialProofData';

// Utility to shuffle array randomly on initial mount
function shuffleList<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export const SocialProofNotification: React.FC = () => {
  const [currentNotification, setCurrentNotification] = useState<EnrollmentNotification | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  
  const queueRef = useRef<EnrollmentNotification[]>([]);
  const currentIndexRef = useRef<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const isMountedRef = useRef<boolean>(true);

  useEffect(() => {
    isMountedRef.current = true;

    if (!SOCIAL_PROOF_CONFIG.enabled || ENROLLMENT_NOTIFICATIONS.length === 0) {
      return;
    }

    // Initialize with a shuffled sequence for dynamic experience
    queueRef.current = shuffleList(ENROLLMENT_NOTIFICATIONS);
    currentIndexRef.current = 0;

    const showNext = () => {
      if (!isMountedRef.current) return;

      if (queueRef.current.length === 0) {
        queueRef.current = shuffleList(ENROLLMENT_NOTIFICATIONS);
        currentIndexRef.current = 0;
      }

      const item = queueRef.current[currentIndexRef.current];
      setCurrentNotification(item);
      setIsVisible(true);

      // Advance index for next iteration; reshuffle if at end to prevent repeating patterns
      currentIndexRef.current += 1;
      if (currentIndexRef.current >= queueRef.current.length) {
        queueRef.current = shuffleList(ENROLLMENT_NOTIFICATIONS);
        currentIndexRef.current = 0;
      }

      // Hide after display duration
      timerRef.current = setTimeout(() => {
        if (!isMountedRef.current) return;
        setIsVisible(false);

        // Schedule next notification after interval delay
        timerRef.current = setTimeout(() => {
          showNext();
        }, SOCIAL_PROOF_CONFIG.intervalDelayMs);
      }, SOCIAL_PROOF_CONFIG.displayDurationMs);
    };

    // Trigger initial notification after initial delay
    timerRef.current = setTimeout(() => {
      showNext();
    }, SOCIAL_PROOF_CONFIG.initialDelayMs);

    return () => {
      isMountedRef.current = false;
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  if (!SOCIAL_PROOF_CONFIG.enabled) {
    return null;
  }

  return (
    <aside
      aria-label="Notificações de Matrículas Recentes"
      className="fixed bottom-4 left-3 sm:bottom-6 sm:left-6 z-40 max-w-[90vw] sm:max-w-sm pointer-events-none select-none"
    >
      <AnimatePresence mode="wait">
        {isVisible && currentNotification && (
          <motion.div
            key={`${currentNotification.id}-${currentNotification.name}`}
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, x: -30, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.94 }}
            transition={{
              duration: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative overflow-hidden flex items-center gap-3.5 bg-[#0d0f17]/95 text-white pl-3.5 pr-4 py-3 rounded-2xl border border-amber-500/35 shadow-[0_12px_40px_rgba(0,0,0,0.85),0_0_20px_rgba(245,158,11,0.12)] backdrop-blur-xl"
          >
            {/* Top Amber Shimmer Accent */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-80" />

            {/* Left Verified Avatar Badge */}
            <div className="relative flex-shrink-0">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400/20 via-yellow-500/10 to-transparent border border-amber-400/40 flex items-center justify-center text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.25)]">
                <UserCheck className="w-5 h-5 text-amber-300 stroke-[2.2]" />
              </div>
              <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-[#0d0f17] items-center justify-center">
                  <CheckCircle2 className="w-2.5 h-2.5 text-white stroke-[3]" />
                </span>
              </span>
            </div>

            {/* Notification Text Content */}
            <div className="flex-1 min-w-0 pr-0.5 leading-snug">
              {/* Status Tag */}
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] font-mono font-bold tracking-wider text-amber-400/90 uppercase">
                  Nova Matrícula Confirmada
                </span>
              </div>

              {/* Student Name */}
              <div className="text-sm font-bold text-white tracking-wide truncate font-display">
                {currentNotification.name}
              </div>

              {/* City Location */}
              <div className="flex items-center gap-1 text-[11px] sm:text-xs text-gray-300 font-body mt-0.5">
                <MapPin className="w-3 h-3 text-amber-400 flex-shrink-0" />
                <span className="truncate">
                  Turma de{' '}
                  <strong className="text-amber-300 font-semibold font-mono">
                    {currentNotification.city}
                  </strong>
                </span>
              </div>
            </div>

            {/* Bottom Progress Timer Bar Animation */}
            <motion.div
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              transition={{
                duration: SOCIAL_PROOF_CONFIG.displayDurationMs / 1000,
                ease: 'linear',
              }}
              className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-300 origin-left"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  );
};

