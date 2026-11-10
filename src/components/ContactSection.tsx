import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Calendar,
  Clock,
  ShieldCheck,
  Send,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  HelpCircle,
  Sparkles,
} from 'lucide-react';
import { FAQS } from '../data/content';

interface ContactSectionProps {
  preselectedSpecialty?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedSpecialty }) => {
  // Booking Form State
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [complaintArea, setComplaintArea] = useState(preselectedSpecialty || 'Coluna Vertebral / Dor Lombar');
  const [painLevel, setPainLevel] = useState<'leve' | 'moderada' | 'severa'>('moderada');
  const [preferredPeriod, setPreferredPeriod] = useState<'manha' | 'tarde' | 'flexivel'>('flexivel');
  const [notes, setNotes] = useState('');
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState('');

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName.trim() || !patientPhone.trim()) {
      return;
    }

    const randomProtocol = `RM-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmissionId(randomProtocol);
    setIsSubmitted(true);
  };

  const handleOpenWhatsAppDirect = () => {
    const textMessage = `Olá, Dr. Rafael Matos dos Santos! Gostaria de agendar uma avaliação fisioterapêutica.
*Nome:* ${patientName || 'Não informado'}
*Queixa/Área:* ${complaintArea}
*Nível da dor:* ${painLevel}
*Período de preferência:* ${preferredPeriod}
${notes ? `*Observações:* ${notes}` : ''}`;

    const encoded = encodeURIComponent(textMessage);
    // Uses international format or generic whatsapp link
    window.open(`https://api.whatsapp.com/send?text=${encoded}`, '_blank');
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setPatientName('');
    setPatientPhone('');
    setNotes('');
  };

  return (
    <section id="contato" className="py-24 bg-white border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200/80 text-xs font-semibold uppercase tracking-wider text-slate-700 mb-3"
          >
            Atendimento Clínico com Hora Marcada
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-headline font-bold text-[#0F172A] tracking-tight mb-4"
          >
            Agende Sua Avaliação Fisioterapêutica
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base text-slate-600 leading-relaxed font-normal"
          >
            Preencha a triagem clínica preliminar abaixo. Retornamos com os horários mais oportunos
            e orientações específicas para a sua primeira consulta com o Dr. Rafael Matos dos Santos.
          </motion.p>
        </div>

        {/* Two-Column Grid: Interactive Booking Form + FAQ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Booking Form (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-[#F8FAFC] rounded-2xl p-6 sm:p-9 border border-slate-200 shadow-lg relative"
          >
            {isSubmitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 border border-emerald-300 text-emerald-700 mx-auto flex items-center justify-center mb-5 shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 block mb-1">
                  Solicitação Recebida com Sucesso
                </span>
                <h3 className="font-display font-bold text-2xl text-[#0F172A] mb-3">
                  Protocolo de Atendimento: {submissionId}
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
                  Obrigado, <strong>{patientName}</strong>. Sua triagem preliminar foi registrada.
                  Para confirmar de imediato seu horário ou tirar dúvidas em tempo real com nossa equipe de apoio, utilize o botão abaixo:
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleOpenWhatsAppDirect}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md transition-all focus:outline-none"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Enviar Mensagem no WhatsApp
                  </button>
                  <button
                    onClick={handleResetForm}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-semibold text-xs uppercase tracking-wider px-5 py-3.5 rounded-xl transition-all focus:outline-none"
                  >
                    Nova Solicitação
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div>
                    <h3 className="font-display font-bold text-lg text-[#0F172A]">
                      Triagem Clínica Preliminar
                    </h3>
                    <p className="text-xs text-slate-500">
                      Sessões individuais de 60 minutos | Consulta inicial diagnóstica
                    </p>
                  </div>
                  <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-medium text-slate-500 bg-white px-2.5 py-1 rounded-md border border-slate-200">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Sigilo Profissional
                  </span>
                </div>

                {/* Patient Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      placeholder="Ex: Carlos Eduardo Silva"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F172A] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      WhatsApp / Telefone de Contato *
                    </label>
                    <input
                      type="tel"
                      required
                      value={patientPhone}
                      onChange={(e) => setPatientPhone(e.target.value)}
                      placeholder="(DD) 99999-9999"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F172A] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Primary Complaint Area */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                    Principal Região de Dor ou Desconforto
                  </label>
                  <select
                    value={complaintArea}
                    onChange={(e) => setComplaintArea(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F172A] focus:border-transparent transition-all"
                  >
                    <option value="Coluna Vertebral / Dor Lombar">Coluna Vertebral / Dor Lombar (Lombalgia, Hérnia Discal)</option>
                    <option value="Cervical e Pescoço">Cervical, Pescoço ou Cefaleia Tensional</option>
                    <option value="Ombro ou Membros Superiores">Ombro (Manguito Rotador, Bursite) ou Cotovelo</option>
                    <option value="Joelho, Quadril ou Tornozelo">Joelho, Quadril, Tornozelo ou Fascite Plantar</option>
                    <option value="Reeducação Postural Global (RPG)">Postura Global / Escoliose / RPG</option>
                    <option value="Pilates Clínico Reabilitador">Pilates Clínico e Fortalecimento de Core</option>
                    <option value="Pós-Operatório Traumato-Ortopédico">Pós-Cirúrgico Traumato-Ortopédico</option>
                    <option value="Fisioterapia Esportiva">Fisioterapia Esportiva / Lesão de Treino</option>
                    <option value="Outro Motivo">Outro Diagnóstico Específico</option>
                  </select>
                </div>

                {/* Pain Level Selection */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                    Grau de Intensidade do Desconforto
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: 'leve', label: 'Leve / Desconforto ocasional', color: 'border-slate-300' },
                      { id: 'moderada', label: 'Moderada / Limita certas tarefas', color: 'border-amber-400' },
                      { id: 'severa', label: 'Severa / Dor contínua ou aguda', color: 'border-red-400' },
                    ].map((lvl) => (
                      <button
                        type="button"
                        key={lvl.id}
                        onClick={() => setPainLevel(lvl.id as any)}
                        className={`p-3 rounded-xl border text-left transition-all ${
                          painLevel === lvl.id
                            ? 'bg-[#0F172A] text-white border-[#0F172A] shadow-sm'
                            : 'bg-white text-slate-700 hover:bg-slate-100 border-slate-200'
                        }`}
                      >
                        <span className="block text-xs font-bold capitalize mb-0.5">{lvl.id}</span>
                        <span className="block text-[10px] opacity-80 leading-tight">{lvl.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Preferred Period */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                    Turno de Preferência para Atendimento
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: 'manha', label: 'Manhã (08h às 12h)' },
                      { id: 'tarde', label: 'Tarde (13h às 18h)' },
                      { id: 'flexivel', label: 'Horário Flexível' },
                    ].map((period) => (
                      <button
                        type="button"
                        key={period.id}
                        onClick={() => setPreferredPeriod(period.id as any)}
                        className={`p-3 rounded-xl border text-xs font-medium text-center transition-all ${
                          preferredPeriod === period.id
                            ? 'bg-[#0F172A] text-white border-[#0F172A] shadow-sm'
                            : 'bg-white text-slate-700 hover:bg-slate-100 border-slate-200'
                        }`}
                      >
                        {period.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Additional Clinical Notes */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                    Histórico Clínico ou Observações (Opcional)
                  </label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Ex: Possuo laudo de ressonância de 2025; sinto dor ao ficar muito tempo sentado..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F172A] focus:border-transparent transition-all resize-none"
                  />
                </div>

                {/* Primary CTA Button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 bg-[#0F172A] hover:bg-slate-800 text-white font-semibold text-xs uppercase tracking-wider py-4 px-6 rounded-xl shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#0F172A] focus:ring-offset-2"
                >
                  <Send className="w-4 h-4 text-emerald-400" />
                  Entrar em contato &amp; Solicitar Agendamento
                </button>

                <p className="text-[11px] text-center text-slate-500">
                  Ao enviar, seus dados são mantidos em estrita confidencialidade clínica para fins de triagem de horário.
                </p>
              </form>
            )}
          </motion.div>

          {/* Right Column: FAQ Accordion + Quick Guidelines (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-7 border border-slate-200"
            >
              <div className="flex items-center gap-2 mb-4">
                <HelpCircle className="w-5 h-5 text-emerald-600" />
                <h3 className="font-display font-bold text-lg text-[#0F172A]">
                  Dúvidas Frequentes (FAQ)
                </h3>
              </div>

              <div className="divide-y divide-slate-200">
                {FAQS.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div key={idx} className="py-3.5">
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between text-left text-xs sm:text-sm font-semibold text-slate-900 hover:text-emerald-700 transition-colors py-1 focus:outline-none"
                      >
                        <span className="pr-4">{faq.question}</span>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 shrink-0 text-slate-500" />
                        ) : (
                          <ChevronDown className="w-4 h-4 shrink-0 text-slate-400" />
                        )}
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="pt-2 text-xs text-slate-600 leading-relaxed overflow-hidden font-normal"
                          >
                            {faq.answer}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Quick Consultation Guidelines Card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-sm"
            >
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                Dica Para a Primeira Sessão
              </div>
              <h4 className="font-display font-bold text-base text-white mb-2">
                O que trazer na consulta de avaliação?
              </h4>
              <ul className="text-xs text-slate-300 space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Roupas confortáveis que facilitem a inspeção postural (bermuda, top ou camiseta leve).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Exames anteriores de imagem caso possua (Ressonâncias, Raio-X ou relatórios médicos).</span>
                </li>
              </ul>
              <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400">
                Atendimento exclusivamente com agendamento prévio para garantir pontualidade e silêncio terapêutico.
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
