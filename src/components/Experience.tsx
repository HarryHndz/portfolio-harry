import React from 'react';
import { useLanguage } from './LanguageProvider';
import { Section } from './Section';
import { Briefcase, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

export const Experience: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Section id="experience" title={t.experience.title}>
      <div className="space-y-6">
        {t.experience.items.map((item, index) => (
          <motion.div 
            key={index} 
            className="group block"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="bg-white/[0.02] border border-white/5 p-8 hover:bg-white/[0.04] transition-all relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6 rounded-2xl">
              <div className="relative z-10">
                <p className="text-[10px] text-white/40 uppercase mb-2 tracking-[0.2em] font-medium">{item.period}</p>
                <h3 className="text-xl text-white font-display font-bold mb-1">{item.role}</h3>
                <p className="text-sm text-slate-500 font-semibold">{item.company}</p>
              </div>
              
              <div className="relative z-10 max-w-md">
                <p className="text-slate-400 text-sm leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-white/0 group-hover:border-white/10 transition-colors rounded-tr-2xl"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
