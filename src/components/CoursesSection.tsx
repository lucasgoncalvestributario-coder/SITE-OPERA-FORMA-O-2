import React from 'react';
import { motion } from 'motion/react';
import { MAIN_COURSE_PACKAGE, COMPANY_INFO } from '../data/content';
import { Clock, ShieldCheck, Award, MessageSquare, AlertCircle, Calendar, Check, Truck, HardHat, Info, ChevronRight } from 'lucide-react';
import excavatorHeroImg from '../assets/images/excavator_hero_1784734858636.jpg';

interface CoursesSectionProps {
  onOpenCourseModal?: () => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({ onOpenCourseModal }) => {
  return (
    <section id="cursos" className="relative py-24 bg-gold-gradient-subtle overflow-hidden border-t border-amber-500/15">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-widest mb-4">
            <HardHat className="w-4 h-4 text-amber-400" />
            <span>Formação Completa e Unificada</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase font-display tracking-tight leading-tight">
            Pacote Trilha de Ouro <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500">
              Formação em Máquinas Pesadas
            </span>
          </h2>

          <p className="text-gray-300 text-sm sm:text-base mt-3 max-w-2xl mx-auto font-body">
            Ganha-se mais e consegue-se emprego mais rápido quando se domina mais de um equipamento. Oferecemos o treinamento integrado das máquinas mais requisitadas.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-400 mx-auto mt-4 rounded-full shadow-[0_0_10px_rgba(212,175,55,0.8)]"></div>
        </div>

        {/* Course Package Feature Hero Container */}
        <div className="relative p-8 sm:p-12 rounded-3xl bg-gold-gradient-card border border-amber-500/35 shadow-[0_25px_60px_rgba(0,0,0,0.85)] backdrop-blur-xl mb-12">
          
          {/* Top Badge Ribbon */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 text-black font-black text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(212,175,55,0.6)] font-display">
            Combo 3 em 1 de Alta Empregabilidade
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-4">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white uppercase font-display leading-snug">
                  {MAIN_COURSE_PACKAGE.title}
                </h3>
                <p className="text-gray-300 text-sm mt-2 leading-relaxed font-body">
                  {MAIN_COURSE_PACKAGE.subtitle}
                </p>
              </div>

              {/* Machines included grid */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono text-amber-400 uppercase tracking-wider font-bold block">
                  Equipamentos inclusos na trilha prática:
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {MAIN_COURSE_PACKAGE.machinesIncluded.map((machine, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-black/60 border border-amber-500/25 hover:border-amber-400/50 transition group"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-2 h-2 rounded-full bg-amber-400 group-hover:scale-125 transition-transform"></div>
                        <h4 className="text-white font-bold text-xs uppercase font-display group-hover:text-amber-300 tracking-wider">
                          {machine.name}
                        </h4>
                      </div>
                      <p className="text-[11px] text-gray-400 leading-tight font-body">
                        {machine.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Porto Alegre Special Notice Box */}
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/40 flex items-start gap-3">
                <Info className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-amber-200 font-medium font-body">
                  {MAIN_COURSE_PACKAGE.poaSpecialNote}
                </p>
              </div>

            </div>

            {/* Right Course Specs Card Column */}
            <div className="lg:col-span-5 relative">
              <div className="p-6 rounded-2xl bg-[#090a0e] border border-amber-500/35 shadow-2xl space-y-4">
                
                <h4 className="text-lg font-black text-amber-300 uppercase font-display border-b border-amber-500/20 pb-3 flex items-center gap-2 tracking-wider">
                  <Award className="w-5 h-5 text-amber-400" /> Detalhes do Curso
                </h4>

                <div className="space-y-3 text-xs sm:text-sm font-body">
                  
                  {/* Duration */}
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-display uppercase tracking-wider text-xs">Duração:</strong>
                      <span className="text-gray-300">{MAIN_COURSE_PACKAGE.duration}</span>
                    </div>
                  </div>

                  {/* Mode */}
                  <div className="flex items-start gap-3">
                    <Calendar className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-display uppercase tracking-wider text-xs">Modalidade:</strong>
                      <span className="text-gray-300">{MAIN_COURSE_PACKAGE.mode}</span>
                    </div>
                  </div>

                  {/* CNH Requirement */}
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-amber-300 block font-display uppercase tracking-wider text-xs">Sem necessidade de CNH:</strong>
                      <span className="text-gray-300">{MAIN_COURSE_PACKAGE.cnhDetail}</span>
                    </div>
                  </div>

                  {/* Min Age */}
                  <div className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-display uppercase tracking-wider text-xs">Idade mínima:</strong>
                      <span className="text-gray-300">{MAIN_COURSE_PACKAGE.minAge}</span>
                    </div>
                  </div>

                  {/* Investment */}
                  <div className="flex items-start gap-3">
                    <Award className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-display uppercase tracking-wider text-xs">Investimento:</strong>
                      <span className="text-amber-300 font-semibold">{MAIN_COURSE_PACKAGE.investment}</span>
                    </div>
                  </div>

                  {/* CREA & 24h delivery */}
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-amber-300 block font-display uppercase tracking-wider text-xs">Certificado e Carteira em 24h:</strong>
                      <span className="text-gray-300">{MAIN_COURSE_PACKAGE.deliveryTime}</span>
                    </div>
                  </div>

                </div>

                {/* WhatsApp Action inside Card */}
                <div className="pt-3 border-t border-amber-500/20">
                  <a
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-black font-extrabold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 shadow-lg transition font-display"
                  >
                    <MessageSquare className="w-4 h-4 text-black" />
                    <span>Quero Garantir Minha Vaga</span>
                  </a>
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* Detailed Machine Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Escavadeira Hidráulica */}
          <div className="p-6 rounded-2xl bg-gold-gradient-card border border-amber-500/25 hover:border-amber-400/60 transition flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-300 mb-4 font-bold text-xl font-display">
                01
              </div>
              <h4 className="text-xl font-black text-white uppercase font-display mb-2 tracking-wide">
                Escavadeira Hidráulica
              </h4>
              <p className="text-gray-300 text-xs leading-relaxed mb-4 font-body">
                Líder absoluta de vagas em grandes obras e mineração. Treinamento completo de operação do braço hidráulico, caçamba, giro e movimentação sobre esteira.
              </p>
              <ul className="space-y-2 text-xs text-gray-300 border-t border-amber-500/15 pt-3 font-body">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400" />
                  <span>Sistemas de joystick hidráulico</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400" />
                  <span>Corte de talude e escavação de valas</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400" />
                  <span>Normas Regulamentadoras aplicáveis</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenCourseModal}
              className="mt-6 py-2.5 px-4 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider transition flex items-center justify-between font-display"
            >
              <span>Saiba Mais</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 2: Retroescavadeira */}
          <div className="p-6 rounded-2xl bg-gold-gradient-card border border-amber-500/25 hover:border-amber-400/60 transition flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-300 mb-4 font-bold text-xl font-display">
                02
              </div>
              <h4 className="text-xl font-black text-white uppercase font-display mb-2 tracking-wide">
                Retroescavadeira
              </h4>
              <p className="text-gray-300 text-xs leading-relaxed mb-4 font-body">
                A máquina mais versátil do canteiro. Combina caçamba dianteira e lança traseira para escavação, aterro e carregamento de caminhões.
              </p>
              <ul className="space-y-2 text-xs text-gray-300 border-t border-amber-500/15 pt-3 font-body">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400" />
                  <span>Operação com caçamba e concha</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400" />
                  <span>Estabilizadores mecânicos e patolas</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400" />
                  <span>Prática real de movimentação</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenCourseModal}
              className="mt-6 py-2.5 px-4 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider transition flex items-center justify-between font-display"
            >
              <span>Saiba Mais</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 3: Mini Pá Carregadeira */}
          <div className="p-6 rounded-2xl bg-gold-gradient-card border border-amber-500/25 hover:border-amber-400/60 transition flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-300 mb-4 font-bold text-xl font-display">
                03
              </div>
              <h4 className="text-xl font-black text-white uppercase font-display mb-2 tracking-wide">
                Mini Pá Carregadeira
              </h4>
              <p className="text-gray-300 text-xs leading-relaxed mb-4 font-body">
                Compacta e indispensável em obras urbanas e confinadas. Manuseio ágil com curva de aprendizado acelerada e alta procura no mercado.
              </p>
              <ul className="space-y-2 text-xs text-gray-300 border-t border-amber-500/15 pt-3 font-body">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400" />
                  <span>Giro rápido de 360° no próprio eixo</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400" />
                  <span>Manuseio de agregados e limpeza</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400" />
                  <span>Segurança e manutenção diária</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenCourseModal}
              className="mt-6 py-2.5 px-4 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider transition flex items-center justify-between font-display"
            >
              <span>Saiba Mais</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

