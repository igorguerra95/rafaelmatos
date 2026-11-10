import React from 'react';
import { ShieldCheck, HeartPulse, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B1120] text-slate-400 text-xs border-t border-slate-800/80 py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-white font-display font-bold text-base shadow-sm">
                RM
              </div>
              <div>
                <h3 className="font-display font-bold text-base text-white tracking-tight">
                  Rafael Matos dos Santos
                </h3>
                <p className="text-[11px] text-slate-400 uppercase tracking-wider font-medium">
                  Fisioterapia Especializada &amp; Reabilitação
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Laboratório clínico de alta precisão dedicado à biomecânica postural, Reeducação Postural Global (RPG),
              Pilates Clínico e reabilitação funcional de coluna e articulações.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Registro Profissional CREFITO Ativo</span>
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-200">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#especialidades" className="hover:text-white transition-colors">
                  Especialidades Clínicas
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">
                  Sobre o Fisioterapeuta
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-white transition-colors">
                  Depoimentos de Recuperação
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors">
                  Contato &amp; Agendamento
                </a>
              </li>
            </ul>
          </div>

          {/* Methodologies & Standards (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-200">
              Fundamentos &amp; Metodologias
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>• Reeducação Postural Global (Método Souchard)</li>
              <li>• Pilates Clínico para Coluna e Grandes Articulações</li>
              <li>• Cinesioterapia e Reabilitação Baseada em Evidências</li>
              <li>• Terapia Manual Ortopédica (Conceito Maitland)</li>
              <li>• Sessões Individuais e Exclusivas de 60 Minutos</li>
            </ul>
          </div>
        </div>

        {/* Bottom credits & Ethical statement */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-[11px] text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Dr. Rafael Matos dos Santos. Todos os direitos reservados.
            Atendimento fisioterapêutico privativo conforme diretrizes do COFFITO/CREFITO.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Voltar ao topo da página"
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors focus:outline-none"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
