import React from 'react';
import { useLanguage } from './LanguageProvider';
import { motion } from 'motion/react';
import { Github, Linkedin, ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center pt-20 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-12 items-center w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest text-slate-400 rounded-lg">
              {t.hero.roleLabel}
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-display font-extrabold text-white tracking-tight mb-8">
            Harry Hernández Arias
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-lg leading-relaxed font-light">
            {t.hero.role}, {t.hero.roleDescription}
          </p>
          
          <div className="flex flex-wrap gap-8 items-center">
            <a 
              href="#projects" 
              className="px-10 py-5 bg-white text-black text-[12px] font-bold uppercase tracking-widest hover:bg-slate-200 transition-all active:scale-95 rounded-lg"
            >
              {t.hero.cta}
            </a>
            <div className="flex gap-6 items-center">
              <a href="https://github.com/HarryHndz" className="text-slate-500 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"><Github size={22} /></a>
              <a href="https://www.linkedin.com/in/harry-hdze/" className="text-slate-500 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"><Linkedin size={22} /></a>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="relative hidden lg:block"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <div className="aspect-4/5 bg-white/5 border border-white/10 p-8 relative flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-700 rounded-3xl">
             <div className="w-full h-full border border-white/10 flex items-center justify-center rounded-2xl">
               <img src="/profile.jpg" alt="" />
             </div>
             {/* Accent lines - updated to be more subtle dots/corners */}
             <div className="absolute -top-2 -right-2 w-16 h-16 border-t-2 border-r-2 border-white/10 rounded-tr-3xl"></div>
             <div className="absolute -bottom-2 -left-2 w-16 h-16 border-b-2 border-l-2 border-white/10 rounded-bl-3xl"></div>
          </div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};
