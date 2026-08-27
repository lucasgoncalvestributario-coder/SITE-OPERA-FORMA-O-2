import React from 'react';
import { WhatsAppIcon } from './BrandIcons';
import { COMPANY_INFO } from '../data/content';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Atendimento WhatsApp" className="fixed bottom-6 right-6 z-50">
      <a
        href={COMPANY_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir WhatsApp oficial da Opera Formação"
        className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-[0_4px_25px_rgba(37,211,102,0.55)] hover:shadow-[0_6px_35px_rgba(37,211,102,0.85)] transition-all duration-300 transform hover:scale-105 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-black"
        title="WhatsApp Oficial Opera Formação"
      >
        {/* Gentle ambient glow ring */}
        <span className="absolute -inset-1.5 rounded-full bg-[#25D366]/40 blur-md animate-pulse pointer-events-none" />

        {/* Authentic WhatsApp brand logo */}
        <WhatsAppIcon className="w-8 h-8 sm:w-9 sm:h-9 text-white relative z-10 drop-shadow-md" />
      </a>
    </aside>
  );
};

