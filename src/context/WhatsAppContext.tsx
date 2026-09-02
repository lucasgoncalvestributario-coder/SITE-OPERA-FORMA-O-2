import React, { createContext, useContext, useState, ReactNode } from 'react';
import { WhatsAppSurveyModal } from '../components/WhatsAppSurveyModal';
import { COMPANY_INFO } from '../data/content';

interface WhatsAppContextType {
  openWhatsAppSurvey: (customMessage?: string) => void;
}

const WhatsAppContext = createContext<WhatsAppContextType | undefined>(undefined);

export const WhatsAppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [pendingMessage, setPendingMessage] = useState<string>('');

  const openWhatsAppSurvey = (customMessage?: string) => {
    setPendingMessage(
      customMessage || COMPANY_INFO.whatsappMessage || 'Olá, quero saber mais sobre os cursos da Opera Formação'
    );
    setIsOpen(true);
  };

  const handleSelectOption = (answer: string) => {
    const base = pendingMessage.trim();
    const situationFormatted = `*Situação:* ${answer}`;
    
    // Combine base text with answer
    let fullText = '';
    if (base) {
      fullText = `${base}\n\n${situationFormatted}`;
    } else {
      fullText = `Olá! Quero saber mais sobre os cursos da Opera Formação.\n\n${situationFormatted}`;
    }

    const phone = COMPANY_INFO.phoneRaw || '4791572989';
    const whatsappUrl = `https://wa.me/55${phone}?text=${encodeURIComponent(fullText)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <WhatsAppContext.Provider value={{ openWhatsAppSurvey }}>
      {children}
      <WhatsAppSurveyModal
        isOpen={isOpen}
        onClose={handleClose}
        onSelectOption={handleSelectOption}
      />
    </WhatsAppContext.Provider>
  );
};

export const useWhatsAppSurvey = (): WhatsAppContextType => {
  const context = useContext(WhatsAppContext);
  if (!context) {
    throw new Error('useWhatsAppSurvey must be used within a WhatsAppProvider');
  }
  return context;
};
