import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleOpenWhatsApp = () => {
    const text = encodeURIComponent(
      'Olá, Dr. Rafael Matos dos Santos! Gostaria de consultar a disponibilidade de horários para uma avaliação fisioterapêutica.'
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end flex-col gap-2 pointer-events-auto">
      {/* Tooltip Preview */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative bg-white border border-slate-200/90 shadow-xl rounded-xl p-3 pr-8 max-w-xs text-xs text-slate-800"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 focus:outline-none"
              aria-label="Fechar aviso"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <div className="flex items-center gap-1.5 font-semibold text-[#0F172A] mb-0.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Atendimento Online Fisioterapia
            </div>
            <p className="text-slate-500 text-[11px] leading-tight">
              Tire dúvidas sobre horários e procedimentos diretamente pelo WhatsApp.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button with subtle pulse */}
      <div className="relative group">
        <button
          onClick={handleOpenWhatsApp}
          aria-label="Falar com o Dr. Rafael Matos no WhatsApp"
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-950/20 hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
        >
          {/* Subtle pulse ring */}
          <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-30 animate-ping pointer-events-none" />
          
          <MessageSquare className="w-7 h-7 fill-white text-white relative z-10" />
        </button>
      </div>
    </div>
  );
};
