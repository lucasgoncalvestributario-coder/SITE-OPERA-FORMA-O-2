import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageSquare, ShieldCheck, HardHat, Check, ChevronRight } from 'lucide-react';
import { COMPANY_INFO, LOCATIONS } from '../data/content';

interface CourseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CourseModal: React.FC<CourseModalProps> = ({ isOpen, onClose }) => {
  const [selectedCity, setSelectedCity] = useState('Itajaí');
  const [selectedPackage, setSelectedPackage] = useState('Trilha Completa (3 Máquinas)');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Gostaria de garantir minha vaga no curso da Opera Formação.\n\n• Pacote: ${selectedPackage}\n• Unidade: ${selectedCity}\n\nPor favor, me informe o valor e a data da próxima turma!`;
    const whatsappUrl = `https://wa.me/554791572989?text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
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
              Escolha sua cidade e o curso desejado para atendimento prioritário no WhatsApp.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* City Selection */}
            <div>
              <label className="block text-xs font-bold text-gray-300 uppercase mb-1.5 font-mono">
                Selecione a Unidade / Cidade
              </label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#0c0d12] border border-amber-500/30 text-white text-sm focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400 transition"
              >
                {LOCATIONS.map((loc) => (
                  <option key={loc.id} value={loc.name}>
                    {loc.name} - {loc.stateCode} {loc.hasSpecialForklift ? '(+ Empilhadeira)' : ''}
                  </option>
                ))}
              </select>
            </div>

            {/* Package Selection */}
            <div>
              <label className="block text-xs font-bold text-gray-300 uppercase mb-1.5 font-mono">
                Pacote ou Máquina
              </label>
              <select
                value={selectedPackage}
                onChange={(e) => setSelectedPackage(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#0c0d12] border border-amber-500/30 text-white text-sm focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400 transition"
              >
                <option value="Trilha Completa (3 Máquinas)">⭐ Trilha Completa (Mini Pá, Retroescavadeira e Escavadeira)</option>
                <option value="Escavadeira Hidráulica">Escavadeira Hidráulica</option>
                <option value="Retroescavadeira">Retroescavadeira</option>
                <option value="Mini Pá Carregadeira">Mini Pá Carregadeira (Bobcat)</option>
                <option value="Empilhadeira (Porto Alegre)">Empilhadeira (Especial Porto Alegre)</option>
              </select>
            </div>

            {/* Guarantees List */}
            <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200 space-y-1.5">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Sem exigência de CNH. Idade mínima: 16 anos.</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Carteira e certificado CREA em até 24h.</span>
              </div>
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              className="w-full py-4 px-6 bg-gradient-to-r from-emerald-500 via-emerald-600 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-extrabold text-sm uppercase tracking-wider rounded-xl shadow-[0_0_25px_rgba(16,185,129,0.4)] transition flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-white" />
              <span>Confirmar Vaga no WhatsApp</span>
            </button>
          </form>

        </motion.div>

      </div>
    </AnimatePresence>
  );
};
