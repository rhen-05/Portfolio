import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { IProject } from '@/data/projects';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectEditorialCardProps {
  project: IProject;
  index?: number;
}

export const ProjectEditorialCard: React.FC<ProjectEditorialCardProps> = ({
  project,
  index = 0,
}) => {
  const { language } = useLanguage();

  const defaultMetrics = [
    {
      value: project.year,
      label: language === 'id' ? 'Tahun Rilis' : 'Release Year',
    },
    {
      value: project.metrics?.[0]?.value || '100k+',
      label: project.metrics?.[0]?.label[language] || (language === 'id' ? 'Throughput' : 'Throughput'),
    },
    {
      value: project.metrics?.[1]?.value || '< 16ms',
      label: project.metrics?.[1]?.label[language] || (language === 'id' ? 'Latensi' : 'Latency'),
    },
  ];

  return (
    <article className="w-full bg-[#F8F8F6] dark:bg-[#171C19] border border-black/10 dark:border-white/10 rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 lg:p-9 relative overflow-hidden group transition-all duration-300 shadow-sm hover:border-[#087F5B]/40 dark:hover:border-[#087F5B]/50 hover:shadow-md">
      
      {/* 1. Top Metadata Bar (Swiss Exhibition Format, No '//') */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 sm:mb-7 border-b border-black/10 dark:border-white/10">
        
        {/* Left: Number + Label (e.g. 01 CASE STUDY) */}
        <div className="flex items-center gap-2.5">
          <span className="font-mono text-xs font-black text-white bg-[#087F5B] px-2.5 py-0.5 rounded-md">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="font-poppins text-xs font-bold tracking-wider text-primary uppercase">
            {language === 'id' ? 'STUDI KASUS' : 'CASE STUDY'}
          </span>
        </div>

        {/* Center: Domain Category Pill */}
        <div className="hidden sm:inline-flex items-center px-3 py-0.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-secondary text-[11px] font-mono uppercase tracking-tight">
          <span>{project.category}</span>
        </div>

        {/* Right: Year */}
        <div className="flex items-center font-mono text-xs text-secondary font-semibold">
          <span>{project.year}</span>
        </div>
      </div>

      {/* 2. Main 2-Column Integrated Composition (Dense, Balanced, No Awkward Gaps) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-9 items-stretch">
        
        {/* Left Column (5 cols): Visual Mockup Showcase with Floated Tech Stack Pills */}
        <div className="lg:col-span-5 relative flex flex-col justify-center">
          <Link
            to={`/projects/${project.slug}`}
            className="block relative w-full aspect-[4/3.4] sm:aspect-[4/3.2] lg:aspect-[4/3.8] rounded-[20px] overflow-hidden bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 cursor-pointer shadow-xs group-hover:shadow-md transition-shadow"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />

            {/* Subtle Gradient Shade on Bottom of Image */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />

            {/* Overlaid Frosted Tech Stack Badges */}
            <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5 z-10">
              {(project.technologies || []).slice(0, 3).map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-tight bg-black/70 backdrop-blur-md text-white border border-white/20 shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        </div>

        {/* Right Column (7 cols): High-Density Editorial Content */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
          
          {/* Header Block: Title & Rich Description */}
          <div>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-primary uppercase tracking-tight leading-[1.12] group-hover:text-[#087F5B] transition-colors">
              <Link to={`/projects/${project.slug}`}>
                {project.title}
              </Link>
            </h3>

            <p className="font-body text-secondary text-xs sm:text-sm leading-relaxed mt-3 font-normal">
              {project.description[language]}
            </p>
          </div>

          {/* Integrated 3-Column Specifications Grid (Cleanly Anchored) */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/10 dark:border-white/10">
            {defaultMetrics.map((stat, idx) => (
              <div
                key={idx}
                className={idx < 2 ? 'border-r border-black/10 dark:border-white/10 pr-2.5 sm:pr-3' : ''}
              >
                <div className="font-display font-black text-base sm:text-lg text-primary tracking-tight">
                  {stat.value}
                </div>
                <div className="font-mono text-[9px] sm:text-[10px] text-secondary uppercase tracking-wider mt-0.5 truncate font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Action Row: Role Stamp + Pill CTA Button */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-1 border-t border-black/5 dark:border-white/5">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] font-semibold text-secondary uppercase tracking-wider">
                {language === 'id' ? 'PERAN:' : 'ROLE:'}
              </span>
              <span className="font-mono text-xs font-bold text-primary">
                {project.role[language]}
              </span>
            </div>

            <Link
              to={`/projects/${project.slug}`}
              className="btn-pill-primary text-xs inline-flex items-center gap-2 group/btn"
            >
              <span>
                {language === 'id' ? 'LIHAT STUDI KASUS' : 'EXPLORE CASE STUDY'}
              </span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

        </div>

      </div>

    </article>
  );
};

