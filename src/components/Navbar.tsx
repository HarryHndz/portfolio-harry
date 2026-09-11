import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageProvider';
import { Menu, X, Globe, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.about, href: "#about" },
    { name: t.nav.experience, href: "#experience" },
    { name: t.nav.education, href: "#education" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.projects, href: "#projects" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0A0A0B]/80 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#" 
          className="text-2xl font-display font-bold text-white tracking-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Harry.dev
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-500 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="flex gap-4 text-[11px] uppercase tracking-widest text-slate-500 border-l border-white/10 pl-8 ml-2">
            <button 
              onClick={toggleLanguage}
              className={`cursor-pointer transition-colors ${language === 'es' ? 'text-white' : 'hover:text-white'}`}
            >
              ES
            </button>
            <button 
              onClick={toggleLanguage}
              className={`cursor-pointer transition-colors ${language === 'en' ? 'text-white' : 'hover:text-white'}`}
            >
              EN
            </button>
          </div>
          <a 
            href={t.hero.cvFile}
            download
            className="px-6 py-2.5 bg-white text-black text-[11px] font-bold uppercase tracking-widest hover:bg-slate-200 transition-colors rounded-lg"
          >
            {t.hero.cv}
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex lg:hidden items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="p-2 text-slate-400"
          >
            <Globe size={18} />
            <span className="ml-1 text-xs font-bold uppercase">{language}</span>
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-400"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0A0A0B] border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium uppercase tracking-widest text-slate-400 hover:text-white"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href={t.hero.cvFile}
                download
                className="flex items-center justify-center gap-2 bg-white text-black p-4 text-[11px] font-bold uppercase tracking-widest mt-2 rounded-lg"
              >
                {t.hero.cv}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
