import React from 'react';
import { useLanguage } from './LanguageProvider';
import { Section } from './Section';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export const About: React.FC = () => {
  const { t } = useLanguage();
  return (
    <Section id="about" title={t.about.title}>
      <div className="grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-8 bg-white/5 border border-white/10 p-10 relative rounded-2xl">
           <p className="text-xl md:text-2xl leading-relaxed font-display font-medium text-white/90">
            {t.about.content}
          </p>
          <div className="absolute -top-px -left-px w-8 h-8 border-t border-l border-white/40 rounded-tl-2xl"></div>
        </div>
        <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-1 gap-6">
          <div className="bg-white/2 border border-white/5 p-8 rounded-2xl">
             <div className="text-3xl font-display font-extrabold text-white mb-1">1+</div>
             <div className="text-[9px] uppercase tracking-[0.2em] text-slate-500">{t.about.content2}</div>
          </div>
          <div className="bg-white/2 border border-white/5 p-8 rounded-2xl">
             <div className="text-3xl font-display font-extrabold text-white mb-1">5+</div>
             <div className="text-[9px] uppercase tracking-[0.2em] text-slate-500">{t.about.content3}</div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export const EducationAndAchievements: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-xs font-display font-bold text-white/50 uppercase mb-8 flex items-center gap-4 tracking-widest">
           <span className="w-4 h-px bg-white/20"></span>
           {t.education.title}
        </h2>
        <div className="space-y-4">
          {t.education.items.map((item, i) => (
            <div key={i} className="bg-white/2 border border-white/5 p-6 relative group hover:bg-white/4 transition-colors rounded-2xl">
              <div className="text-[10px] text-white/40 uppercase mb-2 tracking-widest font-medium">{item.period}</div>
              <h3 className="text-sm text-white font-bold mb-1 tracking-wide">{item.degree}</h3>
              <p className="text-[11px] font-medium text-slate-500">{item.institution}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-xs font-display font-bold text-white/50 uppercase mb-8 flex items-center gap-4 tracking-widest">
           <span className="w-4 h-px bg-white/20"></span>
           {t.achievements.title}
        </h2>
        <div className="space-y-4">
          {t.achievements.items.map((item, i) => (
            <div key={i} className="flex items-start gap-4 bg-white/2 border border-white/5 p-6 group hover:bg-white/4 transition-colors rounded-2xl">
              <div className="mt-1 text-white/20 group-hover:text-white transition-colors">
                <CheckCircle2 size={16} />
              </div>
              <p className="text-slate-400 text-sm leading-relaxed font-medium">{item}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
