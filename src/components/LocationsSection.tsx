import React from 'react';
import { motion } from 'motion/react';
import { CITIES_LIST, PHYSICAL_UNITS } from '../data/content';
import { MapPin, Building2, ShieldCheck, Map } from 'lucide-react';

export const LocationsSection: React.FC = () => {
  return (
    <section id="unidades" className="relative py-20 sm:py-24 bg-[#090b10] text-white overflow-hidden border-t border-amber-500/20">
      {/* Background Lighting */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono uppercase tracking-widest mb-4 shadow-sm">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>Presença Nacional</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase font-display tracking-tight leading-tight">
            Cidades de <span className="text-amber-400">Atuação</span>
          </h2>

          <p className="text-gray-300 text-sm sm:text-base mt-3 font-body">
            Com unidades físicas próprias e turmas presenciais periódicas nas 26 cidades e polos industriais de maior demanda do país.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 mx-auto mt-4 rounded-full shadow-[0_0_10px_rgba(212,175,55,0.6)]" />
        </div>

        {/* 1. Unidades Físicas Oficiais */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-amber-500/15 border border-amber-500/40 text-amber-400 shadow-sm">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold block">
                Sedes Físicas
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase font-display">
                Unidades Oficiais
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PHYSICAL_UNITS.map((unit) => (
              <div
                key={unit.id}
                className="p-6 sm:p-7 rounded-2xl bg-[#12141c] border border-amber-500/30 shadow-xl"
              >
                <div className="flex items-center justify-between gap-3 mb-2">
                  <h4 className="text-lg font-black text-white uppercase font-display">
                    {unit.title}
                  </h4>
                  <span className="px-2.5 py-1 rounded-full bg-amber-400/20 text-amber-300 font-mono text-[10px] font-bold uppercase tracking-wider border border-amber-400/30">
                    {unit.highlight}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 font-body mb-3">
                  {unit.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-amber-400 font-mono font-medium">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span>{unit.address}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Lista das 26 Cidades */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-amber-500/15 border border-amber-500/40 text-amber-400 shadow-sm">
              <Map className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold block">
                Cobertura Nacional (8 Estados)
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase font-display">
                26 Cidades Atendidas
              </h3>
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-[#12141c] border border-white/10 shadow-2xl">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-3">
              {CITIES_LIST.map((city, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-xl bg-black/40 border border-white/5 hover:border-amber-500/40 transition select-none"
                >
                  <span className="text-xs sm:text-sm font-semibold text-gray-200 font-body">
                    {city.name}
                  </span>
                  <span className="text-[10px] font-mono font-black text-amber-400 px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/30">
                    {city.state}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-gray-400 font-body mt-6">
              * Treinamentos itinerantes e polos práticos realizados regularmente nas 26 cidades acima.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
