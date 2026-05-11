import React from 'react';
import { useLanguage } from './LanguageProvider';
import { Section } from './Section';
import { ProjectCarousel } from './ProjectCarousel';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'motion/react';

export const Projects: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Section id="projects" title={t.projects.title}>
      <div className="grid md:grid-cols-2 gap-8">
        {t.projects.items.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group bg-white/4 border border-white/5 relative overflow-hidden flex flex-col pt-8 rounded-3xl"
          >
            <div className="px-8 mb-6 flex flex-col grow">
              <h3 className="text-xl text-white font-display font-bold mb-3 tracking-tight">
                {project.title}
              </h3>
              <p className="text-[14px] text-slate-400 mb-6 leading-relaxed font-medium">
                {project.description}
              </p>
              
              {project.technologies && (
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2.5 py-1 bg-white/5 text-[10px] uppercase tracking-wider text-slate-300 border border-white/5 hover:border-white/20 transition-colors cursor-default rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="px-6 pb-6 mt-auto">
              <ProjectCarousel images={project.images} />
              
              <div className="mt-6 flex gap-3">
                {
                  (project.link !== "") && (
                     <a 
                      href={project.link}
                      className="flex-1 flex items-center justify-center gap-2 bg-white text-black py-4 text-[11px] uppercase font-bold tracking-[0.2em] hover:bg-slate-200 transition-all active:scale-95 rounded-lg"
                    >
                      <ExternalLink size={14} />
                      {t.projects.viewProject}
                    </a>
                  )
                }
                <a 
                  href={project.github}
                  className="px-6 flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white/60 py-4 text-[11px] uppercase font-bold tracking-[0.2em] hover:bg-white/10 hover:text-white transition-all active:scale-95 rounded-lg"
                  title="View Source on GitHub"
                >
                  <Github size={16} />
                  <span>{t.projects.viewGithub}</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
