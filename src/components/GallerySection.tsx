import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS } from '../data/content';
import { GalleryItem } from '../types';
import { Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

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

  // Touch Swipe handlers for mobile
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

  const currentImage: GalleryItem | null = selectedIndex !== null ? GALLERY_ITEMS[selectedIndex] : null;

  return (
    <section id="galeria" className="relative py-20 sm:py-24 bg-[#07080b] overflow-hidden border-t border-amber-500/15">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-500/5 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-widest mb-4">
            <Camera className="w-4 h-4 text-amber-400" />
            <span>Treinamento na Prática</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase font-display tracking-tight leading-tight">
            Galeria de <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500">Treinamentos</span>
          </h2>

          <p className="text-gray-300 text-sm sm:text-base mt-3 font-body">
            Registros reais das turmas e das instruções práticas nas máquinas pesadas.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-400 mx-auto mt-4 rounded-full shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
        </div>

        {/* Clean Modern Square Photo Grid (NO categories, NO filters, NO titles over photos) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3">
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
                className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 select-none"
                referrerPolicy="no-referrer"
              />

              {/* Gentle Golden Border Glow on Hover */}
              <div className="absolute inset-0 bg-amber-400/0 group-hover:bg-amber-400/10 transition-colors duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>

      {/* Advanced Lightbox Modal with Mobile Swipe and Comfortable Close Margin */}
      <AnimatePresence>
        {currentImage && selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/95 backdrop-blur-xl"
          >
            {/* Modal Dialog Container with generous top margin */}
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              className="relative max-w-4xl w-full max-h-[85vh] flex flex-col bg-[#0f1118] border border-amber-500/40 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.95)] my-auto mt-12 sm:mt-auto"
            >
              
              {/* Header Bar with comfortable top margin and close button */}
              <div className="px-5 py-3.5 bg-[#090a0f] border-b border-amber-500/20 flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-amber-400 tracking-wider uppercase">
                    Foto {selectedIndex + 1} de {GALLERY_ITEMS.length}
                  </span>
                  <span className="text-[11px] text-gray-400 block font-body sm:inline sm:ml-3">
                    Deslize para ver as próximas
                  </span>
                </div>

                <button
                  onClick={() => setSelectedIndex(null)}
                  className="p-2 sm:p-2.5 rounded-full bg-black/80 text-gray-200 hover:text-white hover:bg-amber-500/20 border border-amber-500/40 transition focus:outline-none focus:ring-2 focus:ring-amber-400 cursor-pointer"
                  title="Fechar visualização"
                  aria-label="Fechar"
                >
                  <X className="w-5 h-5 text-amber-300" />
                </button>
              </div>

              {/* Main Image Area with Prev/Next Navigation */}
              <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[280px] sm:min-h-[460px]">
                <img
                  src={currentImage.image}
                  alt="Foto do Treinamento"
                  className="max-h-[62vh] w-auto max-w-full object-contain select-none"
                  referrerPolicy="no-referrer"
                />

                {/* Prev Button (Desktop/Tablet) */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/75 hover:bg-amber-500 text-white hover:text-black border border-amber-500/40 transition shadow-lg focus:outline-none cursor-pointer"
                  title="Foto anterior"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                {/* Next Button (Desktop/Tablet) */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/75 hover:bg-amber-500 text-white hover:text-black border border-amber-500/40 transition shadow-lg focus:outline-none cursor-pointer"
                  title="Próxima foto"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
