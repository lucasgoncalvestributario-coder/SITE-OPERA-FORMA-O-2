import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/content';
import { MessageSquare, Phone, Instagram, Facebook, MapPin, Clock, HardHat, Send, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { OFFICIAL_LOGO_URL } from './LoadingScreen';

export const ContactFooter: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    city: 'Itajaí',
    courseInterest: 'Trilha Completa (3 Máquinas)',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Meu nome é ${formState.name}. Tenho interesse no curso de ${formState.courseInterest} para a cidade de ${formState.city}. Meu telefone é ${formState.phone}. Gostaria de mais informações sobre datas e valores!`;
    const whatsappUrl = `https://wa.me/554791572989?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer id="contato" className="relative pt-20 pb-12 bg-gold-gradient-subtle border-t border-amber-500/20 overflow-hidden">
      
      {/* Background Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/10 rounded-full blur-[180px] pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-start">
          
          {/* Left Column - Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Standalone Large Logo (No box frame) */}
            <div className="relative inline-flex items-center group">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse pointer-events-none" />
              <img
                src={OFFICIAL_LOGO_URL}
                alt="Logo Oficial da Escola"
                className="relative h-20 sm:h-28 md:h-32 w-auto object-contain drop-shadow-[0_0_20px_rgba(212,175,55,0.7)]"
                referrerPolicy="no-referrer"
              />
            </div>

            <p className="text-gray-300 text-sm leading-relaxed font-body">
              Escola referência nacional no ensino prático de operação de máquinas pesadas. Formação rápida em 3 dias com certificado e carteira de operador credenciados pelo CREA em até 24h.
            </p>

            {/* Contact Details List */}
            <div className="space-y-4 text-xs sm:text-sm">
              
              {/* WhatsApp */}
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-xl bg-gold-gradient-card border border-amber-500/25 hover:border-amber-400/60 transition group"
              >
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 group-hover:bg-amber-400 group-hover:text-black transition">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-gray-400 text-[11px] block uppercase font-mono">WhatsApp Oficial</span>
                  <span className="text-amber-300 font-bold text-sm group-hover:text-amber-200 transition font-mono">
                    {COMPANY_INFO.phoneFormatted}
                  </span>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-gold-gradient-card border border-amber-500/25">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-gray-400 text-[11px] block uppercase font-mono">Endereço</span>
                  <span className="text-white font-medium text-xs sm:text-sm font-body">
                    {COMPANY_INFO.address}
                  </span>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-gold-gradient-card border border-amber-500/25">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-gray-400 text-[11px] block uppercase font-mono">Horário de Atendimento</span>
                  <span className="text-amber-300 font-bold text-xs sm:text-sm font-body">
                    {COMPANY_INFO.businessHours}
                  </span>
                </div>
              </div>

            </div>

            {/* Social Media Links */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-mono uppercase text-gray-400 tracking-wider block">Redes Sociais:</span>
              <div className="flex items-center gap-3">
                <a
                  href={COMPANY_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gold-gradient-card border border-amber-500/30 hover:border-amber-400/60 text-gray-300 hover:text-amber-300 text-xs font-bold transition font-display"
                >
                  <Instagram className="w-4 h-4 text-amber-400" />
                  <span>{COMPANY_INFO.instagram}</span>
                </a>

                <a
                  href={COMPANY_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gold-gradient-card border border-amber-500/30 hover:border-amber-400/60 text-gray-300 hover:text-amber-300 text-xs font-bold transition font-display"
                >
                  <Facebook className="w-4 h-4 text-amber-400" />
                  <span>{COMPANY_INFO.facebook}</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column - Direct Pre-Inrolment Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-gold-gradient-card border border-amber-500/35 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl relative">
              
              <div className="mb-6">
                <span className="text-amber-400 font-mono text-xs uppercase tracking-widest block mb-1">
                  Atendimento Direto no WhatsApp
                </span>
                <h3 className="text-2xl font-black text-white uppercase font-display tracking-wide">
                  Pré-Inscrição & Consulta de Vagas
                </h3>
                <p className="text-gray-300 text-xs mt-1 font-body">
                  Preencha os campos abaixo para ser redirecionado com sua mensagem personalizada.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name */}
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1.5 font-mono">
                    Seu Nome Completo
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: João Silva"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0c0d12] border border-amber-500/30 text-white text-sm focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400 transition font-body"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1.5 font-mono">
                    Telefone com DDD (WhatsApp)
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ex: (47) 99999-8888"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0c0d12] border border-amber-500/30 text-white text-sm focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400 transition font-body"
                  />
                </div>

                {/* City Selection */}
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1.5 font-mono">
                    Cidade de Seu Interesse
                  </label>
                  <select
                    value={formState.city}
                    onChange={(e) => setFormState({ ...formState, city: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0c0d12] border border-amber-500/30 text-white text-sm focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400 transition font-body"
                  >
                    <option value="Itajaí">Itajaí / SC</option>
                    <option value="Palhoça">Palhoça / SC</option>
                    <option value="Balneário Camboriú">Balneário Camboriú / SC</option>
                    <option value="Porto Alegre">Porto Alegre / RS (+ Empilhadeira)</option>
                    <option value="Passo Fundo">Passo Fundo / RS</option>
                    <option value="Erechim">Erechim / RS</option>
                    <option value="Curitiba">Curitiba / PR</option>
                    <option value="Londrina">Londrina / PR</option>
                    <option value="Toledo">Toledo / PR</option>
                    <option value="Sorocaba">Sorocaba / SP</option>
                    <option value="Diadema">Diadema / SP</option>
                    <option value="Goiânia">Goiânia / GO</option>
                    <option value="Rio de Janeiro">Rio de Janeiro / RJ</option>
                  </select>
                </div>

                {/* Course Interest */}
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1.5 font-mono">
                    Interesse Principal
                  </label>
                  <select
                    value={formState.courseInterest}
                    onChange={(e) => setFormState({ ...formState, courseInterest: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0c0d12] border border-amber-500/30 text-white text-sm focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400 transition font-body"
                  >
                    <option value="Trilha Completa (3 Máquinas)">Trilha Completa (Mini Pá, Retroescavadeira, Escavadeira)</option>
                    <option value="Escavadeira Hidráulica">Escavadeira Hidráulica (Individual)</option>
                    <option value="Retroescavadeira">Retroescavadeira (Individual)</option>
                    <option value="Mini Pá Carregadeira">Mini Pá Carregadeira (Bobcat)</option>
                    <option value="Empilhadeira (Porto Alegre)">Empilhadeira (Especial Porto Alegre)</option>
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-black font-extrabold text-sm uppercase tracking-wider rounded-xl shadow-[0_0_25px_rgba(212,175,55,0.4)] transition flex items-center justify-center gap-2 transform hover:-translate-y-0.5 font-display"
                >
                  <Send className="w-4 h-4 text-black" />
                  <span>Enviar e Falar no WhatsApp</span>
                </button>

              </form>

            </div>
          </div>

        </div>

        {/* Footer Bottom Rights */}
        <div className="pt-8 border-t border-amber-500/20 text-center sm:flex sm:items-center sm:justify-between text-xs text-gray-400 font-body">
          <p>
            © {new Date().getFullYear()} <strong className="text-amber-300 font-bold font-display">Opera Formação</strong>. Todos os direitos reservados.
          </p>

          <div className="mt-4 sm:mt-0 flex items-center justify-center gap-4 text-gray-400 font-mono text-[11px]">
            <span className="flex items-center gap-1 text-amber-400/90">
              <ShieldCheck className="w-3.5 h-3.5 inline" /> Credenciado CREA
            </span>
            <span>•</span>
            <span>CNPJ e Registro Oficial</span>
            <span>•</span>
            <span>Sem CNH Exigida</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

