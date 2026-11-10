import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ShieldCheck,
  Activity,
  Bone,
  Trophy,
  Sparkles,
  HandMetal,
  Clock,
  ArrowRight,
  CheckCircle2,
  Filter,
} from 'lucide-react';
import { SPECIALTIES, Specialty } from '../data/content';

interface SpecialtiesSectionProps {
  onSelectSpecialty: (specialtyTitle: string) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
  Activity: <Activity className="w-5 h-5 text-emerald-600" />,
  Bone: <Bone className="w-5 h-5 text-emerald-600" />,
  Trophy: <Trophy className="w-5 h-5 text-emerald-600" />,
  Sparkles: <Sparkles className="w-5 h-5 text-emerald-600" />,
  HandMetal: <HandMetal className="w-5 h-5 text-emerald-600" />,
};

export const SpecialtiesSection: React.FC<SpecialtiesSectionProps> = ({ onSelectSpecialty }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'postura' | 'ortopedia' | 'performance'>('all');

  const filteredSpecialties = SPECIALTIES.filter((item) => {
    if (activeFilter === 'postura') return item.id === 'rpg' || item.id === 'dor-cronica-coluna';
    if (activeFilter === 'ortopedia') return item.id === 'reabilitacao-ortopedica' || item.id === 'terapia-manual';
    if (activeFilter === 'performance') return item.id === 'fisioterapia-esportiva' || item.id === 'pilates-clinico';
    return true;
  });

  return (
    <section id="especialidades" className="py-24 bg-white border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80 text-xs font-semibold uppercase tracking-wider text-slate-700 mb-3"
            >
              Áreas de Atuação Clínica
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="section-headline font-bold text-[#0F172A] tracking-tight mb-4"
            >
              Especialidades de Alta Precisão &amp; Reabilitação
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base text-slate-600 leading-relaxed font-normal"
            >
              Tratamentos fundamentados na biomecânica avançada, cinesioterapia baseada em evidências
              e respeito rigoroso à fisiologia da dor. Cada sessão é desenhada para restaurar a integridade
              musculoesquelética duradoura.
            </motion.p>
          </div>

          {/* Filter Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap items-center gap-2"
          >
            {[
              { id: 'all', label: 'Todas as Áreas' },
              { id: 'postura', label: 'Coluna & Postura' },
              { id: 'ortopedia', label: 'Ortopedia & Cirurgia' },
              { id: 'performance', label: 'Esporte & Movimento' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id as any)}
                className={`text-xs font-medium px-3.5 py-2 rounded-lg transition-all duration-200 focus:outline-none ${
                  activeFilter === f.id
                    ? 'bg-[#0F172A] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70 hover:text-slate-900'
                }`}
              >
                {f.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* 12-Column Grid of Specialty Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSpecialties.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
              className="group flex flex-col justify-between bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:shadow-slate-900/5 hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-900 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Header row with icon and method badge */}
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-slate-100 border border-slate-200/80 flex items-center justify-center shrink-0 group-hover:bg-emerald-50 group-hover:border-emerald-200 transition-colors">
                    {iconMap[item.iconName] || <ShieldCheck className="w-5 h-5 text-emerald-600" />}
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    {item.badge}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-display font-bold text-xl text-[#0F172A] mb-1.5 group-hover:text-emerald-950 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-medium text-emerald-700 mb-3.5">
                  {item.subtitle}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Clinical Highlights */}
                <div className="mb-6 space-y-2">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                    Principais Intervenções:
                  </span>
                  {item.highlights.slice(0, 3).map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Indications Tags */}
                <div className="mb-6">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                    Indicações Típicas:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.indications.map((ind) => (
                      <span
                        key={ind}
                        className="text-[11px] px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200 text-slate-600 font-normal"
                      >
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-4 mt-auto border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{item.sessionDuration}</span>
                </div>
                <button
                  onClick={() => onSelectSpecialty(item.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F172A] hover:text-emerald-600 group-hover:translate-x-0.5 transition-all focus:outline-none"
                >
                  Consultar sobre esta área
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Callout Banner below specialties */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800"
        >
          <div className="max-w-2xl text-center md:text-left">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 block mb-1">
              Avaliação de Primeiro Contato
            </span>
            <h4 className="font-display font-bold text-xl sm:text-2xl text-white mb-2">
              Não tem certeza de qual especialidade é a mais indicada para o seu caso?
            </h4>
            <p className="text-sm text-slate-300">
              Na consulta inicial, realizamos o diagnóstico cinético diferencial para indicar com precisão a conduta mais resolutiva para a sua queixa.
            </p>
          </div>
          <button
            onClick={() => onSelectSpecialty('Avaliação Geral de Primeiro Contato')}
            className="shrink-0 bg-white text-[#0F172A] hover:bg-slate-100 font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md transition-all focus:outline-none"
          >
            Entrar em contato
          </button>
        </motion.div>
      </div>
    </section>
  );
};
