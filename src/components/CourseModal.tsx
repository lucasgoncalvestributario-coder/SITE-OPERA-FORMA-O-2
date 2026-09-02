import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, HardHat, Check } from 'lucide-react';
import { WhatsAppIcon } from './BrandIcons';
import { CITIES_LIST } from '../data/content';
import { useWhatsAppSurvey } from '../context/WhatsAppContext';

interface CourseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CourseModal: React.FC<CourseModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [selectedCity, setSelectedCity] = useState('Itajaí - SC');
  const { openWhatsAppSurvey } = useWhatsAppSurvey();

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Meu nome é ${name}. Gostaria de informações sobre o curso prático de máquinas pesadas (3 Máquinas) para a cidade de ${selectedCity}.\n\nPor favor, me informe o valor e a data da próxima turma!`;
    onClose();
    openWhatsAppSurvey(msg);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="relative max-w-lg w-full bg-[#12141d] border border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-amber-400 hover:text-white border border-amber-500/30"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="mb-6 space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-amber-400 uppercase">
              <HardHat className="w-4 h-4 text-amber-400" />
              <span>Garantia de Vaga Expressa</span>
            </div>
            <h3 className="text-2xl font-black text-white font-display uppercase">
              Inscrição Opera Formação
            </h3>
            <p className="text-gray-300 text-xs">
              Preencha seu nome e selecione a cidade para atendimento prioritário no WhatsApp.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-bold text-gray-300 uppercase mb-1.5 font-mono">
                Seu Nome Completo
              </label>
              <input
                type="text"
                required
                placeholder="Ex: Carlos Eduardo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#0c0d12] border border-amber-500/30 text-white text-sm focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400 transition"
              />
            </div>

            {/* City Selection */}
            <div>
              <label className="block text-xs font-bold text-gray-300 uppercase mb-1.5 font-mono">
                Selecione a Cidade
              </label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#0c0d12] border border-amber-500/30 text-white text-sm focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400 transition"
              >
                {CITIES_LIST.map((city, idx) => (
                  <option key={idx} value={`${city.name} - ${city.state}`}>
                    {city.name} / {city.state}
                  </option>
                ))}
              </select>
            </div>

            {/* Guarantees List */}
            <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200 space-y-1.5">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Formação prática nas 3 máquinas (Mini Pá, Retro e Escavadeira).</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Sem exigência de CNH. Carteira e certificado CREA em até 24h.</span>
              </div>
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              className="w-full py-4 px-6 bg-[#25D366] hover:bg-[#20bd5a] text-black font-extrabold text-sm uppercase tracking-wider rounded-xl shadow-[0_0_25px_rgba(37,211,102,0.4)] transition flex items-center justify-center gap-2 font-display"
            >
              <WhatsAppIcon className="w-5 h-5 text-black" />
              <span>Confirmar Vaga no WhatsApp</span>
            </button>
          </form>

        </motion.div>

      </div>
    </AnimatePresence>
  );
};

