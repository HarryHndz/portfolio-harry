import React, { ReactNode } from 'react';
import { motion } from 'motion/react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, title, children, className = "" }) => {
  return (
    <section id={id} className={`py-20 px-6 max-w-7xl mx-auto scroll-mt-20 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-xs font-display font-bold text-white/40 uppercase mb-8 flex items-center gap-4 tracking-[0.3em]">
          <span className="h-[1px] w-8 bg-white/20"></span>
          {title}
        </h2>
        {children}
      </motion.div>
    </section>
  );
};
