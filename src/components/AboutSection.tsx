import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, HardHat, Award, Target, Users, Check } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="relative py-28 bg-white text-slate-900 overflow-hidden border-t-2 border-amber-500/20">
      
      {/* Subtle brand background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-50/60 rounded-full blur-[100px] pointer-events-none" />

      {/* Modern diagonal hair-line grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-amber-400 text-xs font-mono uppercase tracking-widest mb-4 shadow-md">
            <HardHat className="w-4 h-4 text-amber-400" />
            <span>Sobre a Escola</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase font-display tracking-tight leading-tight">
            A Escola Líder em Formação de <br />
            <span className="text-amber-600 underline decoration-amber-400 decoration-wavy decoration-2">
              Operadores de Máquinas Pesadas
            </span>
          </h2>
          
          <div className="w-24 h-1.5 bg-gradient-to-r from-amber-500 to-yellow-500 mx-auto mt-4 rounded-full shadow-sm"></div>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            {/* Elegant shadow frame */}
            <div className="absolute -inset-3 bg-gradient-to-tr from-amber-400/20 via-amber-200/30 to-slate-200 rounded-3xl blur-md pointer-events-none"></div>

            <div className="relative rounded-2xl overflow-hidden border-2 border-slate-900 shadow-2xl group">
              <img
                src="https://i.ibb.co/h1hg9cjz/Whats-App-Image-2026-08-20-at-13-56-06-1.jpg"
                alt="Treinamento prático de máquinas pesadas Opera Formação"
                className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>

              {/* Float Card Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-slate-900/95 border border-amber-500/40 backdrop-blur-md shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-amber-400 via-amber-500 to-yellow-600 rounded-xl text-black font-extrabold shadow-lg">
                    <Award className="w-7 h-7 text-black" />
                  </div>
                  <div>
                    <h4 className="text-white font-black text-base uppercase font-display tracking-wider">Ensino 100% Prático e Seguro</h4>
                    <p className="text-slate-300 text-xs font-body mt-0.5">Instrução individual na cabine com instrutores credenciados.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed font-body">
              <p className="text-lg sm:text-xl text-slate-900 font-bold border-l-4 border-amber-500 pl-4 py-2 bg-amber-50 rounded-r-xl">
                A <span className="text-amber-700 font-black">{COMPANY_INFO.name}</span> nasceu com a missão de transformar vidas de forma rápida, acessível e profissional através do ensino técnico de excelência em máquinas pesadas.
              </p>

              <p>
                Com metodologia focada na prática de campo e total conformidade com as normas regulamentadoras aplicáveis a cada treinamento, preparamos você para ingressar imediatamente no mercado da construção civil, terraplanagem, infraestrutura rodoviária e agronegócio.
              </p>

              <p>
                Nosso diferencial está no respeito ao aluno: eliminação de burocracias, investimento justo cabível no bolso, ausência da exigência de CNH para o curso e entrega da sua <strong className="text-slate-900 underline font-black">carteira física e certificado credenciado pelo CREA em até 24 horas</strong>.
              </p>
            </div>

            {/* Core Values Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-5 rounded-2xl bg-slate-900 text-white border-2 border-slate-900 shadow-md hover:border-amber-500 transition">
                <div className="flex items-center gap-3 mb-2">
                  <Target className="w-5 h-5 text-amber-400" />
                  <h4 className="text-white font-bold text-sm font-display uppercase tracking-wider">Acessibilidade Total</h4>
                </div>
                <p className="text-slate-300 text-xs font-body">Cursos com valores populares, sem necessidade de habilitação prévia.</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900 text-white border-2 border-slate-900 shadow-md hover:border-amber-500 transition">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="w-5 h-5 text-amber-400" />
                  <h4 className="text-white font-bold text-sm font-display uppercase tracking-wider">Suporte ao Aluno</h4>
                </div>
                <p className="text-slate-300 text-xs font-body">Orientação contínua para elaboração de currículo e encaminhamento profissional.</p>
              </div>
            </div>

            {/* Features check list */}
            <div className="pt-2 space-y-3">
              <div className="flex items-center gap-3 text-sm text-slate-800 font-semibold font-body">
                <div className="w-6 h-6 rounded-full bg-amber-500 text-black flex items-center justify-center font-black flex-shrink-0 shadow-sm">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <span>Instrutores altamente qualificados com experiência prática real no setor.</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-800 font-semibold font-body">
                <div className="w-6 h-6 rounded-full bg-amber-500 text-black flex items-center justify-center font-black flex-shrink-0 shadow-sm">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <span>Frota moderna de máquinas pesadas de grande porte.</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-800 font-semibold font-body">
                <div className="w-6 h-6 rounded-full bg-amber-500 text-black flex items-center justify-center font-black flex-shrink-0 shadow-sm">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <span>Validade em todo o território nacional com certificação CREA.</span>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

