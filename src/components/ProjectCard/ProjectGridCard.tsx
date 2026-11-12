import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { IProject } from '@/data/projects';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface IProjectGridCardProps {
  project: IProject;
  index: number;
}

export const ProjectGridCard: React.FC<IProjectGridCardProps> = ({ project, index }) => {
  const { language } = useLanguage();

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 350, damping: 22 }}
      className="group relative flex flex-col w-full bg-white dark:bg-[#171C19] border border-black/10 dark:border-white/10 rounded-[28px] sm:rounded-[34px] overflow-hidden shadow-xs hover:border-[#087F5B]/60 dark:hover:border-[#087F5B]/60 hover:shadow-xl transition-all duration-300 h-full"
    >
      <Link to={`/projects/${project.slug}`} className="flex flex-col h-full">
        {/* 1. Visual Image Showcase Frame */}
        <div className="relative w-full aspect-[16/10.5] overflow-hidden bg-black/5 dark:bg-white/5 border-b border-black/5 dark:border-white/5">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />

          {/* Top-Right Index Badge (No dot) */}
          <div className="absolute top-4 right-4 z-20">
            <span className="font-mono text-[11px] font-black px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-white border border-white/20 shadow-xs">
              0{index + 1}
            </span>
          </div>

          {/* Top-Left Domain/Category Badge */}
          <div className="absolute top-4 left-4 z-20">
            <span className="font-mono text-[10px] font-bold tracking-wider px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-white/95 border border-white/20 shadow-xs uppercase">
              {project.category}
            </span>
          </div>

          {/* Subtle Bottom-Right Year Pill inside Image */}
          <div className="absolute bottom-3 right-4 z-20">
            <span className="font-mono text-[10px] font-semibold px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-white/80 border border-white/10">
              {project.year}
            </span>
          </div>
        </div>

        {/* 2. Text & Narrative Content */}
        <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between bg-white dark:bg-[#171C19]">
          <div>
            {/* Project Title */}
            <h3 className="font-display font-black text-lg sm:text-xl uppercase tracking-tight text-primary leading-tight group-hover:text-[#087F5B] transition-colors line-clamp-2">
              {project.title}
            </h3>

            {/* Subtitle / Focus */}
            <p className="font-editorial-italic font-medium text-xs sm:text-[13px] text-secondary mt-1.5 line-clamp-1">
              {project.subtitle[language]}
            </p>

            {/* Brief Description */}
            <p className="font-body text-xs sm:text-[13px] text-secondary leading-relaxed mt-3 line-clamp-3 font-normal">
              {project.description[language]}
            </p>
          </div>

          {/* 3. Tech Stack Tags & Interactive Action Bar */}
          <div className="pt-6 mt-4 border-t border-black/5 dark:border-white/5">
            <div className="flex flex-wrap items-center gap-1.5 mb-4">
              {project.technologies.slice(0, 3).map((tech, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-full text-[10px] font-mono font-medium bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-secondary"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="text-[10px] font-mono text-muted pl-1">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>

            {/* View Case Study Link */}
            <div className="flex items-center justify-between text-xs font-poppins font-bold text-[#087F5B] group-hover:translate-x-0.5 transition-transform">
              <span className="uppercase tracking-wider">
                {language === 'id' ? 'BEDAH STUDI KASUS' : 'EXPLORE CASE STUDY'}
              </span>
              <div className="w-7 h-7 rounded-full bg-[#087F5B]/10 dark:bg-[#087F5B]/20 flex items-center justify-center text-[#087F5B] group-hover:bg-[#087F5B] group-hover:text-white transition-all">
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};
