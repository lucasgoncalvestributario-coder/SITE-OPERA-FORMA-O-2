import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS } from '../data/content';
import { GalleryItem } from '../types';
import { Camera, X, ChevronLeft, ChevronRight, ArrowLeft, MoveRight } from 'lucide-react';
import { DustParticles } from './DustParticles';

export const GallerySection: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [activeMobileIndex, setActiveMobileIndex] = useState<number>(0);
  
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! + 1) % GALLERY_ITEMS.length);
  }, [selectedIndex]);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
  }, [selectedIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, handleNext, handlePrev]);

  // Touch Swipe handlers for mobile inside modal
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.targetTouches[0].clientX;
    touchEndXRef.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartXRef.current === null || touchEndXRef.current === null) return;
    const distance = touchStartXRef.current - touchEndXRef.current;
    const minSwipeDistance = 50;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
  };

  // Track active slide on mobile horizontal scroll
  const handleMobileScroll = () => {
    if (!mobileScrollRef.current) return;
    const container = mobileScrollRef.current;
    const scrollLeft = container.scrollLeft;
    const itemWidth = container.offsetWidth * 0.82;
    const newIndex = Math.round(scrollLeft / itemWidth);
    if (newIndex >= 0 && newIndex < GALLERY_ITEMS.length) {
      setActiveMobileIndex(newIndex);
    }
  };

  const scrollMobileTo = (index: number) => {
    if (!mobileScrollRef.current) return;
    const container = mobileScrollRef.current;
    const targetItem = container.children[index] as HTMLElement;
    if (targetItem) {
      targetItem.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      setActiveMobileIndex(index);
    }
  };

  const currentImage: GalleryItem | null = selectedIndex !== null ? GALLERY_ITEMS[selectedIndex] : null;

  return (
    <section id="galeria" className="relative py-16 sm:py-24 bg-[#07080b] overflow-hidden border-t border-amber-500/15">
      {/* Background Ambience & Atmospheric Heavy Machinery Dust */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-500/5 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />
      <DustParticles theme="dark" density="normal" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase font-display tracking-tight leading-tight">
            Galeria de <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500">Treinamentos</span>
          </h2>

          <p className="text-gray-300 text-sm sm:text-base mt-2 sm:mt-3 font-body">
            Registros reais das turmas e das instruções práticas nas máquinas pesadas.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-400 mx-auto mt-4 rounded-full shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
        </div>

        {/* MOBILE VIEW: Compact Horizontal Swipe Carousel */}
        <div className="block sm:hidden">
          
          {/* Mobile Counter */}
          <div className="flex items-center justify-end px-2 mb-3">
            <span className="text-xs font-mono text-gray-400 bg-black/60 px-2.5 py-1 rounded-full border border-gray-800">
              <strong className="text-amber-400">{activeMobileIndex + 1}</strong> / {GALLERY_ITEMS.length}
            </span>
          </div>

          {/* Snapping Horizontal Scroll Container */}
          <div
            ref={mobileScrollRef}
            onScroll={handleMobileScroll}
            className="flex gap-3 overflow-x-auto snap-x snap-mandatory py-2 px-1 scroll-smooth no-scrollbar"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {GALLERY_ITEMS.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setSelectedIndex(idx)}
                className="snap-center shrink-0 w-[82vw] max-w-[310px] aspect-[4/3] relative rounded-2xl overflow-hidden bg-[#11131a] border-2 border-amber-500/30 active:border-amber-400 shadow-xl transition-transform active:scale-[0.98] cursor-pointer"
              >
                <img
                  src={item.image}
                  alt="Foto do Treinamento"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover select-none"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle Click to Enlarge Badge */}
                <div className="absolute bottom-2.5 right-2.5 bg-black/75 backdrop-blur-sm text-amber-300 text-[11px] font-mono font-medium px-2.5 py-1 rounded-lg border border-amber-500/40 flex items-center gap-1 shadow-md">
                  <span>Toque para ampliar</span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Navigation Buttons & Dots Bar */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <button
              onClick={() => scrollMobileTo(Math.max(0, activeMobileIndex - 1))}
              disabled={activeMobileIndex === 0}
              className="p-2 rounded-full bg-[#151822] text-amber-400 border border-amber-500/30 disabled:opacity-30 disabled:pointer-events-none active:bg-amber-500 active:text-black transition"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Micro Indicator Dots */}
            <div className="flex items-center gap-1 max-w-[180px] overflow-hidden px-2">
              {GALLERY_ITEMS.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => scrollMobileTo(dotIdx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    dotIdx === activeMobileIndex
                      ? 'w-5 bg-amber-400'
                      : 'w-1.5 bg-gray-600'
                  }`}
                  aria-label={`Ir para foto ${dotIdx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => scrollMobileTo(Math.min(GALLERY_ITEMS.length - 1, activeMobileIndex + 1))}
              disabled={activeMobileIndex === GALLERY_ITEMS.length - 1}
              className="p-2 rounded-full bg-[#151822] text-amber-400 border border-amber-500/30 disabled:opacity-30 disabled:pointer-events-none active:bg-amber-500 active:text-black transition"
              aria-label="Próxima foto"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* DESKTOP & TABLET VIEW: Modern Grid */}
        <div className="hidden sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3">
          {GALLERY_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.03 }}
              onClick={() => setSelectedIndex(idx)}
              className="group relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden bg-[#11131a] border border-amber-500/25 hover:border-amber-400/80 cursor-pointer shadow-md hover:shadow-[0_8px_25px_rgba(212,175,55,0.3)] transition-all duration-300 transform active:scale-95"
            >
              <img
                src={item.image}
                alt="Treinamento Opera Formação"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 select-none"
                referrerPolicy="no-referrer"
              />

              {/* Gentle Golden Border Glow on Hover */}
              <div className="absolute inset-0 bg-amber-400/0 group-hover:bg-amber-400/10 transition-colors duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>

      {/* Advanced Lightbox Modal with Safe-Area Back/Close Button */}
      <AnimatePresence>
        {currentImage && selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-50 flex flex-col items-center justify-between p-3 sm:p-6 bg-black/95 backdrop-blur-xl overflow-y-auto"
          >
            {/* Top Navigation Bar with generous safe distance from notification notch */}
            <div 
              onClick={(e) => e.stopPropagation()} 
              className="w-full max-w-4xl pt-8 sm:pt-4 pb-2 px-2 flex items-center justify-between"
            >
              {/* Prominent Back / Return Button */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#161922] hover:bg-amber-500 text-amber-400 hover:text-black border border-amber-500/40 transition-all font-mono text-xs uppercase tracking-wider font-bold shadow-lg active:scale-95 cursor-pointer"
                title="Voltar para a página"
                aria-label="Voltar para a galeria"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Voltar</span>
              </button>

              <div className="text-right">
                <span className="text-xs font-mono font-bold text-amber-400 tracking-wider uppercase block">
                  Foto {selectedIndex + 1} de {GALLERY_ITEMS.length}
                </span>
                <span className="text-[11px] text-gray-400 font-body hidden sm:inline">
                  Deslize ou use as setas para navegar
                </span>
              </div>
            </div>

            {/* Modal Image Display with Touch Swipe */}
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              className="relative max-w-4xl w-full flex-1 flex items-center justify-center my-auto py-2"
            >
              <div className="relative max-w-full max-h-[75vh] flex items-center justify-center rounded-2xl overflow-hidden bg-black/80 border border-amber-500/30 shadow-[0_0_50px_rgba(0,0,0,0.9)]">
                <img
                  src={currentImage.image}
                  alt="Foto do Treinamento Ampliada"
                  decoding="async"
                  className="max-h-[72vh] w-auto max-w-full object-contain select-none"
                  referrerPolicy="no-referrer"
                />

                {/* Prev Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/75 hover:bg-amber-500 text-white hover:text-black border border-amber-500/40 transition shadow-lg focus:outline-none cursor-pointer"
                  title="Foto anterior"
                  aria-label="Foto anterior"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                {/* Next Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/75 hover:bg-amber-500 text-white hover:text-black border border-amber-500/40 transition shadow-lg focus:outline-none cursor-pointer"
                  title="Próxima foto"
                  aria-label="Próxima foto"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>
            </motion.div>

            {/* Bottom Helper Bar on Mobile */}
            <div 
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl pb-4 pt-1 px-2 text-center"
            >
              <span className="text-[11px] font-mono text-gray-400 bg-black/60 px-3 py-1 rounded-full border border-gray-800">
                Arraste para os lados para trocar de foto
              </span>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
