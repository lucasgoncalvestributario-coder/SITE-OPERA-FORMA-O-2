import React from 'react';
import { Users, Award, ShieldCheck, CheckCircle2, MapPin } from 'lucide-react';

export const TrustStatsBar: React.FC = () => {
  const stats = [
    {
      icon: <Users className="w-6 h-6 text-black flex-shrink-0" />,
      title: '+15 Mil Alunos',
      subtitle: 'Formados no Brasil',
    },
    {
      icon: <Award className="w-6 h-6 text-black flex-shrink-0" />,
      title: 'Certificado CREA',
      subtitle: 'Emissão em 24 Horas',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-black flex-shrink-0" />,
      title: '100% Prático',
      subtitle: 'Aulas Direto na Cabine',
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-black flex-shrink-0" />,
      title: 'Sem Exigência CNH',
      subtitle: 'Acessível a Todos',
    },
    {
      icon: <MapPin className="w-6 h-6 text-black flex-shrink-0" />,
      title: '13 Unidades',
      subtitle: 'Presença Nacional',
    },
  ];

  return (
    <section className="relative z-30 bg-gradient-to-r from-[#b88e1a] via-[#f5e6a3] to-[#d4af37] py-6 shadow-2xl border-y-2 border-amber-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-black">
          {stats.map((st, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3.5 p-2 rounded-xl hover:bg-black/5 transition"
            >
              <div className="p-2.5 rounded-xl bg-black/10 border border-black/20 shadow-inner">
                {st.icon}
              </div>
              <div>
                <div className="text-sm sm:text-base font-black uppercase font-display leading-tight tracking-wide text-black">
                  {st.title}
                </div>
                <div className="text-[11px] font-bold font-body text-slate-900 opacity-90">
                  {st.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
