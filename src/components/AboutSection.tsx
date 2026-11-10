import React from 'react';
import { motion } from 'motion/react';
import {
  GraduationCap,
  Award,
  BookOpen,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { CLINICAL_STEPS } from '../data/content';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="sobre" className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          {/* Portrait & Credentials Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Backing Frame */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-slate-900 to-slate-700 rounded-3xl opacity-10 transform -rotate-1" />

              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1000&q=80"
                  alt="Dr. Rafael Matos dos Santos, Fisioterapeuta Especialista"
                  className="w-full aspect-[4/5] object-cover object-top filter contrast-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />

                {/* Floating Bio Bottom Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10 text-white">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-display font-bold text-base text-white">
                      Dr. Rafael Matos dos Santos
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      <ShieldCheck className="w-3 h-3 text-emerald-400" />
                      CREFITO Ativo
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Fisioterapeuta Clínico &amp; Especialista em Biomecânica da Coluna e Reabilitação Funcional
                  </p>
                </div>
              </div>

              {/* Floating Certification Badge */}
              <div className="absolute -bottom-6 -right-4 hidden sm:flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-xl max-w-xs">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#0F172A] block">
                    Método RPG Souchard
                  </span>
                  <span className="text-[11px] text-slate-500">
                    Formação Internacional Certificada
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Narrative & Credentials Column */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 border border-slate-300 text-xs font-semibold uppercase tracking-wider text-slate-700 mb-4"
            >
              Corpo Clínico &amp; Trajetória
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="section-headline font-bold text-[#0F172A] tracking-tight mb-6"
            >
              Compromisso rigoroso com a ciência da recuperação e a anatomia humana.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed mb-8"
            >
              <p>
                Com mais de uma década dedicada à prática fisioterapêutica clínica e reabilitação avançada,
                o <strong>Dr. Rafael Matos dos Santos</strong> construiu sua metodologia a partir da convicção
                de que a dor musculoesquelética nunca deve ser tratada como um evento isolado, mas como o resultado
                de descompensações em cadeias miofasciais e sobrecargas articulares acumuladas.
              </p>
              <p>
                Graduado com distinção e pós-graduado em Fisioterapia Traumato-Ortopédica, obteve certificação
                internacional no método de <strong>Reeducação Postural Global (RPG Método Souchard)</strong> e
                especialização em Pilates Clínico voltado para coluna e grandes articulações.
              </p>
              <p>
                Seu consultório foi concebido para oferecer um ambiente de atendimento de silêncio clínico,
                com pontualidade britânica e dedicação exclusiva: um paciente por horário, sem compartilhamento
                de atenção com outros indivíduos.
              </p>
            </motion.div>

            {/* Academic & Professional Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8"
            >
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                <GraduationCap className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Graduação em Fisioterapia</h4>
                  <p className="text-[11px] text-slate-500">Formação de excelência com ênfase em biomecânica humana</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                <Award className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Especialista Traumato-Ortopédico</h4>
                  <p className="text-[11px] text-slate-500">Membro da Associação Brasileira de Fisioterapia Traumato-Ortopédica</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                <BookOpen className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">RPG Souchard Internacional</h4>
                  <p className="text-[11px] text-slate-500">Habilitação oficial para tratamento de desvios posturais complexos</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                <Sparkles className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Pilates Clínico Reabilitador</h4>
                  <p className="text-[11px] text-slate-500">Protocolos mecânicos sem impacto articular para coluna e pelve</p>
                </div>
              </div>
            </motion.div>

            {/* Direct Action */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 bg-[#0F172A] text-white hover:bg-slate-800 text-xs font-semibold uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md transition-all focus:outline-none"
              >
                <Calendar className="w-4 h-4 text-emerald-400" />
                Agendar Consulta de Avaliação
              </button>
              <a
                href="#contato"
                className="inline-flex items-center justify-center gap-2 bg-transparent text-[#0F172A] hover:text-slate-950 border border-slate-300 text-xs font-semibold uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all focus:outline-none"
              >
                Entrar em contato
              </a>
            </div>
          </div>
        </div>

        {/* Clinical Methodology (4-Step Process) */}
        <div className="mt-16 pt-16 border-t border-slate-200/80">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-2">
              Protocolo Clínico Padronizado
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#0F172A] mb-3">
              Como funciona o seu ciclo de tratamento
            </h3>
            <p className="text-sm text-slate-600">
              Da triagem inicial à autonomia motora duradoura: uma jornada estruturada sem adivinhações.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CLINICAL_STEPS.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm relative group hover:border-slate-300 hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display font-bold text-2xl text-slate-300 group-hover:text-[#0F172A] transition-colors">
                    {step.step}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                    {step.tag}
                  </span>
                </div>
                <h4 className="font-display font-bold text-base text-[#0F172A] mb-2">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
