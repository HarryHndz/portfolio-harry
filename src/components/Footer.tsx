import React from 'react';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#0A0A0B] text-white py-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-10">
        <div className="flex gap-10">
          <a href="#" className="p-3 text-slate-500 hover:text-white transition-all bg-white/5 border border-white/10 hover:bg-white/10 rounded-lg">
            <Github size={20} />
          </a>
          <a href="#" className="p-3 text-slate-500 hover:text-white transition-all bg-white/5 border border-white/10 hover:bg-white/10 rounded-lg">
            <Linkedin size={20} />
          </a>
          <a href="#" className="p-3 text-slate-500 hover:text-white transition-all bg-white/5 border border-white/10 hover:bg-white/10 rounded-lg">
            <Instagram size={20} />
          </a>
          <a href="mailto:hello@example.com" className="p-3 text-slate-500 hover:text-white transition-all bg-white/5 border border-white/10 hover:bg-white/10 rounded-lg">
            <Mail size={20} />
          </a>
        </div>
        
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] uppercase tracking-[0.3em] text-white/20 pt-8 border-t border-white/5">
          <span>© 2024 Juan Pérez</span>
          <span>Built with React + TypeScript</span>
        </div>
      </div>
    </footer>
  );
};
