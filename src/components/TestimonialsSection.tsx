import React, { useState, useRef, useCallback } from 'react';
import { 
  ChevronLeft, 
  ChevronRight
} from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/content';
import { DustParticles } from './DustParticles';

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

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
              className="p-2.5 sm:p-3 rounded-xl bg-[#141724] border border-amber-500/30 hover:border-amber-400 text-gray-300 hover:text-white transition-all shadow-md active:scale-95 focus:outline-none focus:ring-2 focus:ring-amber-400/50 cursor-pointer"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-5 h-5 text-amber-400" />
            </button>

            <button
              onClick={handleNext}
              className="p-2.5 sm:p-3 rounded-xl bg-[#141724] border border-amber-500/30 hover:border-amber-400 text-gray-300 hover:text-white transition-all shadow-md active:scale-95 focus:outline-none focus:ring-2 focus:ring-amber-400/50 cursor-pointer"
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
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="snap-start shrink-0 w-[88vw] sm:w-[360px] md:w-[400px] lg:w-[410px] flex flex-col bg-[#12141c]/95 rounded-2xl border border-white/10 hover:border-amber-400/60 overflow-hidden shadow-[0_12px_35px_rgba(0,0,0,0.7)] hover:shadow-[0_15px_40px_rgba(234,179,8,0.18)] transition-all duration-300 group"
            >
              {/* Direct YouTube Video Embed Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-black">
                {item.youtubeId ? (
                  <iframe
                    className="w-full h-full border-0"
                    src={`https://www.youtube-nocookie.com/embed/${item.youtubeId}?rel=0&playsinline=1&modestbranding=1`}
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                    allowFullScreen
                  />
                ) : null}
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
              className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none cursor-pointer ${
                activeIndex === idx
                  ? 'w-8 bg-gradient-to-r from-amber-400 to-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.7)]'
                  : 'w-2.5 bg-gray-700 hover:bg-gray-500'
              }`}
              aria-label={`Ir para depoimento ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
