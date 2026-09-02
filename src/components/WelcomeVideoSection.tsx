import React from 'react';

interface VideoSectionProps {
  /**
   * YouTube Video ID or URL.
   * Accepts full URLs (e.g., https://youtu.be/... or https://www.youtube.com/watch?v=...) or the video ID.
   */
  videoId?: string;
}

export const WelcomeVideoSection: React.FC<VideoSectionProps> = ({
  videoId = 'tABOsavAArw', // Official Opera Formação presentation video
}) => {
  // If user enters a custom full URL or just the video ID, sanitize it
  const cleanVideoId = videoId.includes('v=')
    ? videoId.split('v=')[1]?.split('&')[0]
    : videoId.includes('youtu.be/')
    ? videoId.split('youtu.be/')[1]?.split('?')[0]
    : videoId.includes('embed/')
    ? videoId.split('embed/')[1]?.split('?')[0]
    : videoId;

  return (
    <section id="video-saudacao" className="relative py-14 sm:py-20 bg-[#0a0c13] overflow-hidden border-b border-amber-500/20">
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-400/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-600/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Decorative Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #d4af37 1px, transparent 1px), linear-gradient(to bottom, #d4af37 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase font-display tracking-tight text-white leading-tight">
            Seja Bem-Vindo à{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-500">
              Opera Formação
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-300 font-body leading-relaxed">
            Assista ao vídeo abaixo e conheça nossa estrutura prática, metodologia 100% na cabine e como preparamos você para o mercado de máquinas pesadas.
          </p>
        </div>

        {/* Video Player Container Card */}
        <div className="relative max-w-4xl mx-auto">
          {/* Glowing Aura Frame */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-600 rounded-[28px] opacity-40 blur-md pointer-events-none" />

          {/* Main Video Box */}
          <div className="relative rounded-2xl sm:rounded-3xl bg-[#0e111a] border-2 border-amber-500/50 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(212,175,55,0.2)]">
            
            {/* Aspect Ratio 16:9 Video Box - Direct YouTube Player */}
            <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
              <iframe
                className="w-full h-full border-0"
                src={`https://www.youtube-nocookie.com/embed/${cleanVideoId}?rel=0&playsinline=1&modestbranding=1`}
                title="Vídeo de Apresentação Opera Formação"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                allowFullScreen
              />
            </div>

            {/* Quick backup bar under player */}
            <div className="px-4 py-2.5 bg-[#0a0c13] border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs text-gray-400">
              <span className="flex items-center gap-1.5 text-amber-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Vídeo Oficial da Apresentação
              </span>
              <a
                href={`https://youtu.be/${cleanVideoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 hover:border-amber-400/40 transition font-medium"
              >
                Assistir no YouTube ↗
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
