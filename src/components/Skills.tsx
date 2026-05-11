import React from 'react';
import { useLanguage } from './LanguageProvider';
import { Section } from './Section';
import { motion } from 'motion/react';
import { Code2, Layout, Database, Terminal } from 'lucide-react';

export const Skills: React.FC = () => {
  const { t } = useLanguage();

  const skillGroups = [
    {
      title: t.skills.categories.languages,
      icon: <Terminal className="text-indigo-600" />,
      skills: ["TypeScript", "JavaScript", "Python", "Java", "C++"]
    },
    {
      title: t.skills.categories.frontend,
      icon: <Layout className="text-indigo-600" />,
      skills: ["React", "Next.js", "Tailwind CSS", "Redux", "Framer Motion"]
    },
    {
      title: t.skills.categories.backend,
      icon: <Database className="text-indigo-600" />,
      skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis"]
    },
    {
      title: t.skills.categories.tools,
      icon: <Code2 className="text-indigo-600" />,
      skills: ["Git", "Docker", "AWS", "CI/CD", "Linux"]
    }
  ];

  return (
    <Section id="skills" title={t.skills.title}>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl"
          >
            <div className="text-white/20 mb-6">
              {group.icon}
            </div>
            <h3 className="text-xs font-display font-bold text-white/50 uppercase mb-4 tracking-widest">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map(skill => (
                <span 
                  key={skill}
                  className="px-3 py-1.5 bg-white/5 text-[10px] uppercase tracking-wider text-slate-300 border border-white/5 hover:border-white/20 transition-colors cursor-default rounded-lg font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
