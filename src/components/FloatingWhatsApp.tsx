import React from 'react';
import { MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Atendimento WhatsApp" className="fixed bottom-6 right-6 z-50">
      <a
        href={COMPANY_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir WhatsApp oficial da Opera Formação"
        className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-green-400 text-white shadow-[0_4px_25px_rgba(16,185,129,0.45)] hover:shadow-[0_6px_35px_rgba(16,185,129,0.7)] transition-all duration-300 transform hover:scale-105 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-black"
        title="WhatsApp Opera Formação"
      >
        {/* Gentle ambient glow ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 blur-sm animate-pulse pointer-events-none" />

        {/* Crisp clean icon */}
        <MessageSquare className="w-7 h-7 sm:w-8 sm:h-8 text-white relative z-10 drop-shadow-md" />
      </a>
    </aside>
  );
};
