import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, ShieldCheck, Send, CheckCircle2, MessageSquare } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSpecialty?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialSpecialty,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [specialty, setSpecialty] = useState(initialSpecialty || 'Avaliação Fisioterapêutica Geral');
  const [preferredTime, setPreferredTime] = useState<'manha' | 'tarde' | 'indiferente'>('indiferente');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialSpecialty) {
      setSpecialty(initialSpecialty);
    }
  }, [initialSpecialty]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const msg = `Olá, Dr. Rafael Matos dos Santos! Gostaria de agendar uma consulta.
*Nome:* ${name}
*Telefone:* ${phone}
*Interesse/Queixa:* ${specialty}
*Turno de preferência:* ${preferredTime}
${details ? `*Detalhes:* ${details}` : ''}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(msg)}`, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10"
          >
            {/* Header bar */}
            <div className="bg-[#0F172A] p-6 text-white flex items-center justify-between">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-400 block mb-0.5">
                  Agendamento Rápido
                </span>
                <h3 className="font-display font-bold text-lg text-white">
                  Consulta com Dr. Rafael Matos
                </h3>
              </div>
              <button
                onClick={onClose}
                aria-label="Fechar janela"
                className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              {submitted ? (
                <div className="text-center py-6">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="font-display font-bold text-xl text-[#0F172A] mb-2">
                    Solicitação Encaminhada
                  </h4>
                  <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                    Sua solicitação para <strong>{name}</strong> foi registrada no sistema clínico.
                    Para adiantar seu agendamento de forma imediata via WhatsApp, clique no botão abaixo:
                  </p>
                  <div className="flex flex-col gap-2.5">
                    <button
                      onClick={handleWhatsAppRedirect}
                      className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl transition-all shadow-md focus:outline-none"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Prosseguir no WhatsApp
                    </button>
                    <button
                      onClick={onClose}
                      className="w-full py-2.5 text-xs text-slate-500 hover:text-slate-700 font-medium"
                    >
                      Fechar
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Seu Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: Mariana Castro"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0F172A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Telefone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(DD) 99999-9999"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0F172A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Área de Interesse / Queixa
                    </label>
                    <input
                      type="text"
                      value={specialty}
                      onChange={(e) => setSpecialty(e.target.value)}
                      placeholder="Ex: RPG, Dor na Lombar, Pilates..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0F172A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Turno Preferencial
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'manha', label: 'Manhã' },
                        { id: 'tarde', label: 'Tarde' },
                        { id: 'indiferente', label: 'Flexível' },
                      ].map((t) => (
                        <button
                          type="button"
                          key={t.id}
                          onClick={() => setPreferredTime(t.id as any)}
                          className={`py-2 rounded-lg border text-xs font-medium text-center transition-all ${
                            preferredTime === t.id
                              ? 'bg-[#0F172A] text-white border-[#0F172A]'
                              : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Comentário Adicional (Opcional)
                    </label>
                    <textarea
                      rows={2}
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      placeholder="Algum detalhe relevante sobre a sua dor ou diagnóstico prévio..."
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0F172A] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#0F172A] hover:bg-slate-800 text-white font-semibold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl shadow-md transition-all mt-2 focus:outline-none"
                  >
                    <Send className="w-3.5 h-3.5 text-emerald-400" />
                    Entrar em contato &amp; Confirmar
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Seus dados são protegidos por sigilo de saúde</span>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
