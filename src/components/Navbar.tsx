import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { WhatsAppIcon, InstagramIcon } from './BrandIcons';
import { COMPANY_INFO } from '../data/content';
import { OFFICIAL_LOGO_URL } from './LoadingScreen';
import { useWhatsAppSurvey } from '../context/WhatsAppContext';

interface NavbarProps {
  onOpenCourseModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCourseModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openWhatsAppSurvey } = useWhatsAppSurvey();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const shouldScrolled = window.scrollY > 30;
          setIsScrolled((prev) => (prev !== shouldScrolled ? shouldScrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#' },
    { name: 'Vídeo', href: '#video-saudacao' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Máquinas', href: '#maquinas' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Garantia', href: '#garantia' },
    { name: 'Diretoria', href: '#diretor' },
    { name: 'Cidades', href: '#unidades' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07080a]/95 backdrop-blur-md border-b border-amber-500/20 py-2 shadow-[0_10px_35px_rgba(0,0,0,0.9)]'
          : 'bg-gradient-to-b from-black/95 via-black/70 to-transparent py-3 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Prominent Yellow Logo with Elegant Golden Glow */}
          <a
            href="#"
            className="group flex items-center relative py-1.5 focus:outline-none"
            title="Opera Formação - Início"
          >
            {/* Elegant Golden Aura Glow */}
            <div className="absolute inset-0 bg-yellow-400/25 rounded-full blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none scale-125" />

            <img
              src={OFFICIAL_LOGO_URL}
              alt="Logo Opera Formação"
              decoding="async"
              fetchPriority="high"
              className={`relative w-auto object-contain transition-all duration-300 filter drop-shadow-[0_0_20px_rgba(234,179,8,0.65)] group-hover:drop-shadow-[0_0_32px_rgba(234,179,8,0.95)] ${
                isScrolled
                  ? 'h-16 sm:h-20 md:h-22 lg:h-24'
                  : 'h-20 sm:h-28 md:h-32 lg:h-36'
              }`}
              referrerPolicy="no-referrer"
            />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold text-gray-300 hover:text-amber-300 transition-colors uppercase tracking-widest relative group font-body"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Header Action Button (Clean & Strategic) */}
          <div className="hidden sm:flex items-center gap-2.5 lg:gap-3">
            {/* Instagram Oficial */}
            <a
              href="https://www.instagram.com/escola.opera.formacao/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 bg-[#12141c] hover:bg-[#181a24] text-amber-400 hover:text-amber-300 font-extrabold text-[11px] uppercase tracking-wider rounded-xl border border-amber-500/30 hover:border-amber-400 transition-all font-display"
              title="Instagram Oficial: @escola.opera.formacao"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden md:inline">@ESCOLA.OPERA.FORMACAO</span>
            </a>

            {onOpenCourseModal && (
              <button
                onClick={onOpenCourseModal}
                className="px-3.5 lg:px-4 py-2 bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-black font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-[0_0_20px_rgba(212,175,55,0.35)] hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] transition-all font-display"
              >
                Garantir Vaga
              </button>
            )}

            <button
              onClick={() => openWhatsAppSurvey()}
              className="flex items-center gap-1.5 px-3.5 lg:px-4 py-2 bg-[#12141c] hover:bg-[#181a24] text-emerald-400 font-extrabold text-xs uppercase tracking-wider rounded-xl border border-[#25D366]/40 hover:border-[#25D366] transition-all font-display"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              <span className="hidden lg:inline">WhatsApp</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex xl:hidden items-center gap-2">
            <a
              href="https://www.instagram.com/escola.opera.formacao/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex sm:hidden items-center gap-1 px-2.5 py-2 bg-[#12141c] text-amber-400 text-[10px] font-bold uppercase rounded-xl border border-amber-500/30"
              title="Instagram"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-amber-400" />
              <span>Instagram</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
              aria-label="Menu de Navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#07080a]/98 backdrop-blur-2xl border-b border-amber-500/30 px-6 pt-4 pb-8 mt-2 space-y-4">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-200 hover:text-amber-300 font-bold uppercase text-sm py-2.5 px-3 rounded-xl hover:bg-amber-500/10 transition font-display"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-amber-500/20 flex flex-col gap-2">
            {onOpenCourseModal && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCourseModal();
                }}
                className="w-full py-3 bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 text-black font-extrabold text-xs uppercase tracking-wider rounded-xl font-display shadow-md"
              >
                Garantir Minha Vaga
              </button>
            )}

            <a
              href="https://www.instagram.com/escola.opera.formacao/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 bg-[#11131a] hover:bg-[#181a24] text-amber-400 font-bold text-xs uppercase rounded-xl border border-amber-500/40 font-display"
            >
              <InstagramIcon className="w-4 h-4 text-amber-400" />
              <span>Instagram @ESCOLA.OPERA.FORMACAO</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openWhatsAppSurvey();
              }}
              className="flex items-center justify-center gap-2 py-3 bg-[#11131a] text-[#25D366] font-bold text-xs uppercase rounded-xl border border-[#25D366]/40 font-display"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              <span>Falar no WhatsApp ({COMPANY_INFO.phoneFormatted})</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
