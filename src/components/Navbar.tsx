import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Menu, X, Calendar, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Especialidades', href: '#especialidades' },
    { label: 'Sobre o Fisioterapeuta', href: '#sobre' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato & Agendamento', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0F172A]/90 backdrop-blur-md shadow-lg shadow-black/10 py-3.5 border-b border-white/10'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Professional Badge */}
          <a
            href="#inicio"
            className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 border border-white/20 flex items-center justify-center text-white shadow-md shadow-black/20 group-hover:scale-105 transition-transform duration-200">
              <span className="font-display font-bold text-lg tracking-tight text-white">RM</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span
                  className={`font-display font-bold text-base sm:text-lg tracking-tight transition-colors ${
                    isScrolled ? 'text-white' : 'text-[#0F172A]'
                  }`}
                >
                  Rafael Matos dos Santos
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  CREFITO Ativo
                </span>
              </div>
              <span
                className={`text-xs font-medium tracking-wide uppercase transition-colors ${
                  isScrolled ? 'text-slate-300' : 'text-slate-500'
                }`}
              >
                Fisioterapia Especializada &amp; Biomecânica
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-emerald-500 relative py-1 focus:outline-none ${
                  isScrolled ? 'text-slate-200' : 'text-[#0F172A]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider px-4 py-2.5 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                isScrolled
                  ? 'bg-white text-[#0F172A] hover:bg-slate-100 shadow-sm'
                  : 'bg-[#0F172A] text-white hover:bg-slate-800 shadow-md shadow-slate-900/15'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              Agendar Avaliação
            </button>
            <a
              href="#contato"
              className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider px-4 py-2.5 rounded-lg border transition-all duration-200 focus:outline-none ${
                isScrolled
                  ? 'border-white/20 text-white hover:bg-white/10'
                  : 'border-[#0F172A]/20 text-[#0F172A] hover:bg-[#0F172A]/5'
              }`}
            >
              <PhoneCall className="w-3.5 h-3.5" />
              Entrar em contato
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
            className={`lg:hidden p-2 rounded-lg border focus:outline-none transition-colors ${
              isScrolled
                ? 'border-white/20 text-white hover:bg-white/10'
                : 'border-slate-300 text-slate-800 hover:bg-slate-100'
            }`}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-[#0F172A] border-b border-white/10 px-4 pt-3 pb-6 text-white shadow-2xl"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 px-3 rounded-lg text-slate-200 hover:text-white hover:bg-white/5 text-base font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-white/10 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider px-4 py-3 rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 shadow-md"
                >
                  <Calendar className="w-4 h-4" />
                  Agendar Avaliação Clínica
                </button>
                <a
                  href="#contato"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider px-4 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10"
                >
                  <PhoneCall className="w-4 h-4" />
                  Entrar em contato
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
