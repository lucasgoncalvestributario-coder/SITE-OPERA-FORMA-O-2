import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { REGULATORY_STANDARDS } from '../data/content';

export const NormasRegulamentadorasSection: React.FC = () => {
  return (
    <section id="normas" className="relative py-12 sm:py-14 bg-[#0c0d12] text-white overflow-hidden border-t border-amber-500/20">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-white/10 pb-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono uppercase tracking-widest mb-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Conformidade Legal</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase font-display tracking-tight">
              Normas <span className="text-amber-400">Regulamentadoras</span>
            </h2>
          </div>
          <p className="text-gray-400 text-xs sm:text-sm max-w-md font-body">
            Treinamentos fundamentados e em conformidade técnica com as diretrizes e normas de segurança vigentes.
          </p>
        </div>

        {/* Compact, Fast-to-Scan Pills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {REGULATORY_STANDARDS.map((nr) => (
            <div
              key={nr.code}
              className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-amber-400/50 hover:bg-white/[0.08] transition duration-200"
            >
              <span className="px-2.5 py-1 rounded-lg bg-amber-400 text-black font-display font-black text-xs uppercase tracking-wider flex-shrink-0">
                {nr.code}
              </span>
              <span className="text-xs sm:text-sm text-gray-200 font-medium font-body leading-snug truncate">
                {nr.title}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};


