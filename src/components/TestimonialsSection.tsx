import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1));
  };

  const next = () => {
    setCurrentIndex((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1));
  };

  return (
    <section id="depoimentos" className="py-24 bg-[#0F172A] text-white relative overflow-hidden">
      {/* Subtle background mesh */}
      <div className="absolute inset-0 dark-subtle-grid opacity-25 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-3"
            >
              Casos Clínicos &amp; Resultados
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="section-headline font-bold text-white tracking-tight mb-4"
            >
              Histórias de Reabilitação &amp; Retorno à Vida Ativa
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base text-slate-300 leading-relaxed font-light"
            >
              A verdadeira métrica de um tratamento fisioterapêutico é a devolução da função, da mobilidade
              e da confiança corporal. Veja o relato de pacientes que superaram diagnósticos complexos.
            </motion.p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Depoimento anterior"
              className="w-11 h-11 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 flex items-center justify-center text-white transition-colors focus:outline-none"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              aria-label="Próximo depoimento"
              className="w-11 h-11 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 flex items-center justify-center text-white transition-colors focus:outline-none"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-7 border border-slate-700/80 flex flex-col justify-between hover:border-slate-600 transition-all duration-300 relative group"
            >
              <div>
                {/* Header row with star rating and condition pill */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-slate-900/90 text-emerald-400 border border-emerald-500/20">
                    {t.recoveryTime}
                  </span>
                </div>

                {/* Condition Treated Tag */}
                <div className="mb-3">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                    Quadro Clínico:
                  </span>
                  <span className="text-sm font-semibold text-white">
                    {t.condition}
                  </span>
                </div>

                {/* Quote Content */}
                <p className="text-sm text-slate-300 leading-relaxed italic mb-6">
                  &ldquo;{t.content}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between">
                <div>
                  <h4 className="font-display font-bold text-sm text-white">
                    {t.name}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {t.role}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-400">
                  <Quote className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Safety & Ethics Banner */}
        <div className="mt-12 text-center text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Depoimentos autorizados com consentimento livre e esclarecido</span>
          </div>
          <span className="hidden sm:inline text-slate-600">•</span>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Conduta pautada pelo código de ética do Conselho de Fisioterapia</span>
          </div>
        </div>
      </div>
    </section>
  );
};
