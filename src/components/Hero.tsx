import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight, Calendar, CheckCircle2, Sparkles, Award } from 'lucide-react';
import { CLINICAL_METRICS } from '../data/content';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  // Count-up animation state for stats
  const [hasStartedCount, setHasStartedCount] = useState(false);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);

  useEffect(() => {
    setHasStartedCount(true);
    const targets = CLINICAL_METRICS.map((m) => m.value);
    const duration = 1800;
    const steps = 40;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = Math.min(step / steps, 1);
      // easeOutExpo
      const factor = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCounts(targets.map((target) => Math.round(target * factor)));

      if (step >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden subtle-grid">
      {/* Ambient background accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-slate-200/50 via-teal-100/30 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Copy (7 cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-sm mb-6"
            >
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                Fisioterapia Clínica Baseada em Evidências
              </span>
              <span className="text-slate-300">|</span>
              <span className="text-xs font-medium text-slate-500 flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-slate-700" />
                Método Souchard &amp; Ortopedia
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: 'easeOut' }}
              className="hero-headline font-bold text-[#0F172A] mb-6 text-balance"
            >
              Restauração biomecânica de precisão para uma vida{' '}
              <span className="relative inline-block text-slate-900">
                sem dor.
                <svg
                  className="absolute left-0 -bottom-2 w-full h-2.5 text-emerald-500/40"
                  viewBox="0 0 200 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5.5C40 2.5 120 1 199 6.5"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16, ease: 'easeOut' }}
              className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mb-8 font-normal"
            >
              Diagnóstico cinético computadorizado, Reeducação Postural Global (RPG), Pilates Clínico
              e reabilitação ortopédica singular. Conduzido pelo fisioterapeuta <strong>Dr. Rafael Matos dos Santos</strong> em sessões exclusivas de 60 minutos.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10"
            >
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-3 bg-[#0F172A] text-white hover:bg-slate-800 text-sm font-semibold uppercase tracking-wider px-7 py-4 rounded-xl shadow-xl shadow-slate-900/20 hover:-translate-y-0.5 transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
              >
                <Calendar className="w-4 h-4 text-emerald-400" />
                Agendar Avaliação Clínica
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#contato"
                className="inline-flex items-center justify-center gap-2 bg-white text-slate-800 hover:text-slate-950 border border-slate-300/80 hover:border-slate-400 text-sm font-semibold uppercase tracking-wider px-6 py-4 rounded-xl shadow-sm hover:bg-slate-50 transition-all duration-200 focus:outline-none"
              >
                Entrar em contato
              </a>
            </motion.div>

            {/* Key Assurance Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200/80 w-full"
            >
              <div className="flex items-center gap-2.5 text-xs text-slate-600 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Atendimento 100% individual</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-600 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Laudo para reembolso</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-600 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Equipamentos calibrados</span>
              </div>
            </motion.div>
          </div>

          {/* Visual Showcase Card (5 cols on desktop) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Backing decorative glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-slate-900 via-slate-700 to-emerald-800 rounded-3xl blur-lg opacity-25" />

              {/* Main Card Container */}
              <div className="relative rounded-2xl overflow-hidden bg-white border border-slate-200/80 shadow-2xl shadow-slate-900/10">
                <div className="relative aspect-[4/5] overflow-hidden bg-slate-900">
                  <img
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80"
                    alt="Atendimento de Fisioterapia Especializada com Dr. Rafael Matos dos Santos"
                    className="w-full h-full object-cover object-center filter saturate-[0.95] contrast-[1.05] hover:scale-105 transition-transform duration-700 ease-out"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-xs font-medium border border-white/15 shadow-sm">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      CREFITO Certificado
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/90 backdrop-blur-md text-white text-[11px] font-semibold tracking-wide uppercase shadow-sm">
                      Sessão Exclusiva
                    </span>
                  </div>

                  {/* Bottom Information Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-xs uppercase tracking-widest text-emerald-300 font-semibold mb-1">
                      Dr. Rafael Matos dos Santos
                    </p>
                    <h2 className="font-display font-bold text-xl sm:text-2xl text-white mb-2 leading-tight">
                      Laboratório Clínico de Biomecânica e Reabilitação Postural
                    </h2>
                    <p className="text-xs text-slate-300 line-clamp-2 mb-4">
                      Protocolos individualizados para dores na coluna, hérnia discal, lesões articulares e reeducação postural definitiva.
                    </p>

                    <div className="flex items-center justify-between pt-3 border-t border-white/15 text-xs text-slate-300">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        Consultas com hora marcada
                      </span>
                      <button
                        onClick={onOpenBooking}
                        className="text-white font-semibold hover:text-emerald-300 underline underline-offset-4 decoration-emerald-400 transition-colors"
                      >
                        Ver horários disponíveis &rarr;
                      </button>
                    </div>
                  </div>
                </div>

                {/* Sub-card Micro Banner */}
                <div className="p-4 bg-slate-50 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-emerald-600" />
                    <span className="font-medium text-slate-800">Avaliação cinético-funcional completa</span>
                  </div>
                  <span className="font-semibold text-slate-900">60 min / sessão</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Metrics Bar with Animated Counters */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 sm:mt-24 bg-[#0F172A] text-white rounded-2xl p-6 sm:p-10 shadow-2xl border border-slate-800 relative overflow-hidden"
        >
          {/* Subtle line background */}
          <div className="absolute inset-0 dark-subtle-grid opacity-30 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 divide-y lg:divide-y-0 lg:divide-x divide-slate-800/80">
            {CLINICAL_METRICS.map((metric, idx) => {
              const displayVal = hasStartedCount ? counts[idx] : 0;
              return (
                <div
                  key={metric.label}
                  className={`flex flex-col ${idx > 0 ? 'pt-6 lg:pt-0 lg:pl-6' : ''}`}
                >
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white">
                      {idx === 0 ? `+${displayVal.toLocaleString('pt-BR')}` : displayVal}
                    </span>
                    <span className="font-display font-bold text-xl sm:text-2xl text-emerald-400">
                      {metric.suffix}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-slate-200 mb-1 tracking-tight">
                    {metric.label}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    {metric.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
