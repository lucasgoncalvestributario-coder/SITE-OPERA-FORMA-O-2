import React, { useState } from 'react';
import { motion } from 'motion/react';
import { LOCATIONS, PHYSICAL_UNITS } from '../data/content';
import { MapPin, Building2, Navigation, CheckCircle2, ShieldCheck, Map, Globe, Info } from 'lucide-react';

export const LocationsSection: React.FC = () => {
  const [selectedState, setSelectedState] = useState<string>('TODOS');

  const states = [
    { code: 'TODOS', label: 'Todas as Regiões' },
    { code: 'SC', label: 'Santa Catarina (SC)' },
    { code: 'RS', label: 'Rio Grande do Sul (RS)' },
    { code: 'PR', label: 'Paraná (PR)' },
    { code: 'SP', label: 'São Paulo (SP)' },
    { code: 'GO', label: 'Goiás (GO)' },
    { code: 'RJ', label: 'Rio de Janeiro (RJ)' },
  ];

  const filteredLocations = selectedState === 'TODOS'
    ? LOCATIONS
    : LOCATIONS.filter((loc) => loc.stateCode === selectedState);

  return (
    <section id="unidades" className="relative py-24 sm:py-28 bg-[#f4f5f8] text-slate-900 overflow-hidden border-t border-slate-200">
      {/* Background Lighting */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-amber-100/50 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px] opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-amber-400 text-xs font-mono uppercase tracking-widest mb-4 shadow-sm">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>Presença & Cobertura</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase font-display tracking-tight leading-tight">
            Unidades Físicas e <span className="text-amber-600">Cidades de Atuação</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base mt-3 font-body">
            Conheça as sedes físicas da Opera Formação e a nossa rede de cidades atendidas em polos estratégicos do Brasil.
          </p>

          <div className="w-24 h-1.5 bg-gradient-to-r from-amber-500 to-yellow-500 mx-auto mt-4 rounded-full shadow-sm" />
        </div>

        {/* 1. UNIDADES FÍSICAS (HIGHLIGHTED SECTION) */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-slate-900 text-amber-400 shadow-sm">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-600 font-bold block">
                Estrutura Própria
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 uppercase font-display">
                Unidades Físicas
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PHYSICAL_UNITS.map((unit) => (
              <div
                key={unit.id}
                className="relative p-8 rounded-3xl bg-white border-2 border-slate-200 hover:border-amber-500 shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-slate-900 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
                      {unit.highlight}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-500">
                      {unit.stateCode}
                    </span>
                  </div>

                  <h4 className="text-2xl font-black text-slate-900 uppercase font-display group-hover:text-amber-600 transition-colors tracking-wide">
                    {unit.title}
                  </h4>

                  <p className="text-slate-600 text-sm mt-3 font-body leading-relaxed">
                    {unit.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3 text-xs text-slate-700 font-body font-semibold">
                  <MapPin className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>{unit.address}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. CIDADES DE ATUAÇÃO */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-slate-900 text-amber-400 shadow-sm">
                <Navigation className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-amber-600 font-bold block">
                  Área de Cobertura
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 uppercase font-display">
                  Cidades de Atuação
                </h3>
              </div>
            </div>

            {/* State Filter Buttons */}
            <div className="flex flex-wrap gap-1.5">
              {states.map((st) => (
                <button
                  key={st.code}
                  onClick={() => setSelectedState(st.code)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 border font-display ${
                    selectedState === st.code
                      ? 'bg-slate-900 text-amber-400 border-slate-900 font-black shadow-md'
                      : 'bg-white text-slate-600 border-slate-200 hover:text-slate-900 hover:border-slate-300'
                  }`}
                >
                  {st.code}
                </button>
              ))}
            </div>
          </div>

          {/* Cities Directory Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredLocations.map((loc) => (
              <motion.div
                key={loc.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className={`p-5 rounded-2xl bg-white border-2 ${
                  loc.hasSpecialForklift
                    ? 'border-amber-500 shadow-lg'
                    : 'border-slate-200'
                } hover:border-amber-500 transition-colors flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900 text-[10px] font-mono font-bold uppercase">
                      {loc.stateCode}
                    </span>
                    <span className="text-[11px] text-slate-500 font-body font-medium">
                      {loc.state}
                    </span>
                  </div>

                  <h4 className="text-lg font-black text-slate-900 uppercase font-display tracking-wide flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <span>{loc.name}</span>
                  </h4>

                  <div className="mt-3 space-y-1 text-xs text-slate-600 font-body">
                    <div className="flex items-center gap-1.5 text-amber-700 font-bold text-[11px]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                      <span>{loc.nextDate}</span>
                    </div>
                  </div>

                  {loc.hasSpecialForklift && (
                    <div className="mt-3 p-2 rounded-lg bg-amber-50 border border-amber-200 text-[10px] text-amber-900 font-semibold font-body">
                      🚜 Destaque: Formação com opção de Empilhadeira
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Clean Informational Note */}
          <div className="mt-8 p-4 rounded-xl bg-white border border-slate-200 text-center max-w-2xl mx-auto shadow-sm">
            <p className="text-xs text-slate-600 font-body font-medium">
              Atendimento programado conforme o calendário técnico de turmas presenciais para cada localidade.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
