import React from 'react';
import { useLanguage } from './LanguageProvider';
import { Section } from './Section';
import { motion } from 'motion/react';
import { Code2, Layout, Database, Terminal } from 'lucide-react';

export const Skills: React.FC = () => {
  const { t } = useLanguage();

  const defaultIcon = <Code2 className="w-4 h-4 mr-1.5 text-gray-400" />;

  const skillGroups = [
    {
      title: t.skills.categories.languages,
      icon: <Terminal className="text-indigo-600" />,
      skills: [
        { name: "TypeScript", icon: <img src="/mecanografiado.png" alt="TypeScript" className="w-4 h-4 mr-1.5" /> },
        { name: "JavaScript", icon: <img src="/js.png" alt="JavaScript" className="w-4 h-4 mr-1.5" /> },
        { name: "Python", icon: <img src="/piton.png" alt="Python" className="w-4 h-4 mr-1.5" /> },
        { name: "SQL", icon: defaultIcon },
      ]
    },
    {
      title: t.skills.categories.frontend,
      icon: <Layout className="text-indigo-600" />,
      skills: [
        { name: "React", icon: <img src="/icons8-reaccionar-96.png" alt="React" className="w-4 h-4 mr-1.5" /> },
        { name: "Next.js", icon: defaultIcon },
        { name: "React Native", icon: <img src="/icons8-reaccionar-96.png" alt="React Native" className="w-4 h-4 mr-1.5" /> },
        { name: "Expo", icon: defaultIcon },
        { name: "Angular", icon: <img src="/icons8-angular-96.png" alt="Angular" className="w-4 h-4 mr-1.5" /> },
        { name: "Tailwind CSS", icon: <img src="/icons8-viento-de-cola-96.png" alt="Tailwind CSS" className="w-4 h-4 mr-1.5" /> },
      ]
    },
    {
      title: t.skills.categories.backend,
      icon: <Database className="text-indigo-600" />,
      skills: [
        { name: "Node.js", icon: <img src="/icons8-nodejs-96.png" alt="Node.js" className="w-4 h-4 mr-1.5" /> },
        { name: "Express", icon: <img src="/icons8-expresar-js-100.png" alt="Express" className="w-4 h-4 mr-1.5" /> },
        { name: "NestJS", icon: <img src="/icons-nestjs.png" alt="NestJS" className="w-4 h-4 mr-1.5" /> },
        { name: "FastAPI", icon: <img src="/piton.png" alt="FastAPI" className="w-4 h-4 mr-1.5" /> },
        { name: "PostgreSQL", icon: <img src="/icons8-postgresql-96.png" alt="PostgreSQL" className="w-4 h-4 mr-1.5" /> },
        { name: "Firebase", icon: <img src="/icons8-firebase-96.png" alt="Firebase" className="w-4 h-4 mr-1.5" /> },
      ]
    },
    {
      title: t.skills.categories.tools,
      icon: <Code2 className="text-indigo-600" />,
      skills: [
        { name: "AWS", icon: <img src="/icons8-amazon-web-services-96.png" alt="AWS" className="w-4 h-4 mr-1.5" /> },
        { name: "Docker", icon: <img src="/icons8-estibador-96.png" alt="Docker" className="w-4 h-4 mr-1.5" /> },
        { name: "GitHub", icon: defaultIcon },
        { name: "Cursor", icon: defaultIcon },
        { name: "Claude Code", icon: defaultIcon },
      ]
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
            className="bg-white/2 border border-white/5 p-8 rounded-2xl"
          >
            <div className="text-white/20 mb-6">
              {group.icon}
            </div>
            <h3 className="text-xs font-display font-bold text-white/50 uppercase mb-4 tracking-widest">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map(skill => (
                <span 
                  key={skill.name}
                  className="px-3 py-1.5 flex items-center bg-white/5 text-[10px] uppercase tracking-wider text-slate-300 border border-white/5 hover:border-white/20 transition-colors cursor-default rounded-lg font-medium"
                >
                  {skill.icon}
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
