import React, { useState, useRef, useEffect, useCallback } from 'react';
import { 
  Play, 
  Award, 
  Globe, 
  Star, 
  Sparkles, 
  X, 
  Volume2, 
  ChevronLeft, 
  ChevronRight, 
  MoveRight, 
  Briefcase, 
  HardHat, 
  Quote 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS_DATA } from '../data/content';
import { DustParticles } from './DustParticles';

export const TestimonialsSection: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<{
    title: string;
    videoUrl?: string;
    poster?: string;
  } | null>(null);

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  const getIcon = (category: string) => {
    switch (category) {
      case 'Concurso Público':
        return <Award className="w-3.5 h-3.5" />;
      case 'Reconhecimento Global':
        return <Globe className="w-3.5 h-3.5" />;
      case 'Transição de Carreira':
        return <Briefcase className="w-3.5 h-3.5" />;
      case 'Alta Performance':
        return <HardHat className="w-3.5 h-3.5" />;
      default:
        return <Star className="w-3.5 h-3.5" />;
    }
  };

  // Scroll tracking to update the active indicator index
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollLeft = container.scrollLeft;
    const itemWidth = container.children[0] ? (container.children[0] as HTMLElement).offsetWidth + 20 : 340;
    const newIndex = Math.round(scrollLeft / itemWidth);
    if (newIndex >= 0 && newIndex < TESTIMONIALS_DATA.length) {
      setActiveIndex(newIndex);
    }
  };

  const scrollToIndex = useCallback((index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const targetItem = container.children[index] as HTMLElement;
    if (targetItem) {
      targetItem.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
      setActiveIndex(index);
    }
  }, []);

  const handleNext = useCallback(() => {
    const nextIndex = (activeIndex + 1) % TESTIMONIALS_DATA.length;
    scrollToIndex(nextIndex);
  }, [activeIndex, scrollToIndex]);

  const handlePrev = useCallback(() => {
    const prevIndex = (activeIndex - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length;
    scrollToIndex(prevIndex);
  }, [activeIndex, scrollToIndex]);

  // Touch Swipe Handlers for mobile & trackpads
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
    const minSwipeDistance = 45;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
  };

  // Keyboard navigation when testimonials are focused or in view
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeVideo) {
        if (e.key === 'Escape') setActiveVideo(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeVideo]);

  return (
    <section
      id="depoimentos"
      className="relative py-14 sm:py-20 bg-[#090b10] text-white overflow-hidden border-t border-amber-500/20"
    >
      {/* Background Subtle Radiant Glows & Atmospheric Earth Dust Smoke */}
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 w-96 h-96 bg-amber-400/5 rounded-full blur-[120px] pointer-events-none" />
      <DustParticles theme="dark" density="normal" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10 border-b border-white/10 pb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase font-display tracking-tight">
              Depoimentos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500">Nossos Alunos</span>
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm max-w-xl font-body leading-relaxed mt-1">
              Veja na prática a transformação profissional de quem se formou na Opera e conquistou seu espaço no mercado de máquinas pesadas.
            </p>
          </div>

          {/* Desktop / Tablet Slider Arrow Controls */}
          <div className="flex items-center gap-2 self-start md:self-end">
            <button
              onClick={handlePrev}
              className="p-2.5 sm:p-3 rounded-xl bg-[#141724] border border-amber-500/30 hover:border-amber-400 text-gray-300 hover:text-white transition-all shadow-md active:scale-95 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-5 h-5 text-amber-400" />
            </button>

            <button
              onClick={handleNext}
              className="p-2.5 sm:p-3 rounded-xl bg-[#141724] border border-amber-500/30 hover:border-amber-400 text-gray-300 hover:text-white transition-all shadow-md active:scale-95 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="w-5 h-5 text-amber-400" />
            </button>
          </div>
        </div>

        {/* Mobile Counter */}
        <div className="flex sm:hidden items-center justify-end px-1 mb-3">
          <span className="text-xs font-mono text-gray-300 bg-black/60 px-2.5 py-1 rounded-full border border-gray-800">
            <strong className="text-amber-400">{activeIndex + 1}</strong> / {TESTIMONIALS_DATA.length}
          </span>
        </div>

        {/* HORIZONTAL SLIDING / SWIPE CAROUSEL CONTAINER */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory py-3 px-1 scroll-smooth no-scrollbar"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {TESTIMONIALS_DATA.map((item, index) => (
            <div
              key={item.id}
              className="snap-start shrink-0 w-[88vw] sm:w-[360px] md:w-[400px] lg:w-[410px] flex flex-col bg-[#12141c]/95 rounded-2xl border border-white/10 hover:border-amber-400/60 overflow-hidden shadow-[0_12px_35px_rgba(0,0,0,0.7)] hover:shadow-[0_15px_40px_rgba(234,179,8,0.18)] transition-all duration-300 group"
            >
              {/* Video Cover Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-black/80">
                {item.videoUrl ? (
                  <video
                    src={item.videoUrl}
                    poster={item.poster}
                    preload="none"
                    controls
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="relative w-full h-full">
                    <img
                      src={item.poster}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 contrast-105 select-none"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#12141c] via-black/40 to-black/20" />

                    {/* Interactive Play Button */}
                    <button
                      onClick={() =>
                        setActiveVideo({
                          title: item.title,
                          videoUrl: item.videoUrl,
                          poster: item.poster,
                        })
                      }
                      className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 focus:outline-none"
                      aria-label={`Assistir depoimento: ${item.title}`}
                    >
                      <div className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-black shadow-[0_0_25px_rgba(234,179,8,0.7)] group-hover:shadow-[0_0_35px_rgba(234,179,8,0.95)] transition-all">
                        <div className="absolute -inset-1.5 rounded-full border border-amber-400/60 animate-ping opacity-30 pointer-events-none" />
                        <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-black translate-x-0.5" />
                      </div>
                    </button>
                  </div>
                )}

                {/* Category / Achievement Badge Tag */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/85 backdrop-blur-md border border-amber-400/40 text-amber-300 font-display font-bold text-[11px] uppercase tracking-wider shadow-md">
                    {getIcon(item.category)}
                    <span>{item.badge}</span>
                  </span>
                </div>

                {/* Subtle Slide Index Pill */}
                <div className="absolute top-3 right-3 z-10">
                  <span className="text-[10px] font-mono text-gray-300 bg-black/75 px-2 py-0.5 rounded-md border border-white/10">
                    0{index + 1}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="text-base sm:text-lg font-black text-white group-hover:text-amber-300 transition-colors font-display tracking-tight leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-amber-400/90 font-body mt-1">
                    {item.subtitle}
                  </p>
                  <p className="text-xs sm:text-[13px] text-gray-300 font-body leading-relaxed mt-2 line-clamp-3">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400 font-body">
                  <span className="flex items-center gap-1.5 text-amber-400 font-medium">
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Depoimento em Vídeo</span>
                  </span>
                  <span className="text-gray-400 font-mono text-[10px] bg-white/5 px-2 py-0.5 rounded border border-white/5">
                    Opera Formação
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Pagination Indicator Dots & Direct Navigation */}
        <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
          {TESTIMONIALS_DATA.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
                activeIndex === idx
                  ? 'w-8 bg-gradient-to-r from-amber-400 to-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.7)]'
                  : 'w-2.5 bg-gray-700 hover:bg-gray-500'
              }`}
              aria-label={`Ir para depoimento ${idx + 1}`}
            />
          ))}
        </div>

      </div>

      {/* Video Modal Player */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl bg-[#12141c] border border-amber-500/30 rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-white/10 bg-black/40">
                <h4 className="text-sm sm:text-base font-bold text-white font-display">
                  {activeVideo.title}
                </h4>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition"
                  aria-label="Fechar vídeo"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Video / Content Area */}
              <div className="relative aspect-video w-full bg-black flex items-center justify-center">
                {activeVideo.videoUrl ? (
                  <video
                    src={activeVideo.videoUrl}
                    poster={activeVideo.poster}
                    controls
                    autoPlay
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="p-6 text-center space-y-3">
                    <div className="w-14 h-14 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 flex items-center justify-center mx-auto">
                      <Play className="w-6 h-6 translate-x-0.5" />
                    </div>
                    <div className="text-sm font-semibold text-white">
                      Vídeo sendo preparado para exibição
                    </div>
                    <p className="text-xs text-gray-400 max-w-md mx-auto">
                      O link deste depoimento foi reservado e será integrado diretamente nesta tela.
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
