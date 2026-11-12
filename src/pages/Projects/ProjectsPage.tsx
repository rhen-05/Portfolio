import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { projectsData, IProject } from '@/data/projects';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ProjectsPage: React.FC = () => {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Projects & Engineering Archive — Rhanendra Pradipta';
  }, []);

  const filterTabs = [
    {
      id: 'ALL',
      label: { id: 'SEMUA', en: 'ALL' },
      count: projectsData.length,
    },
    {
      id: 'CYBERSECURITY',
      label: { id: 'KEAMANAN SIBER', en: 'CYBERSECURITY' },
      count: projectsData.filter(
        (p) => p.category.includes('SECURITY') || p.category.includes('CYBER')
      ).length,
    },
    {
      id: 'FRONTEND',
      label: { id: 'ARSITEKTUR FRONTEND', en: 'FRONTEND' },
      count: projectsData.filter(
        (p) => p.category.includes('FRONTEND') || p.category.includes('DESIGN')
      ).length,
    },
    {
      id: 'BACKEND',
      label: { id: 'BACKEND TERDISTRIBUSI', en: 'DISTRIBUTED BACKEND' },
      count: projectsData.filter(
        (p) => p.category.includes('BACKEND') || p.category.includes('DISTRIBUTED')
      ).length,
    },
  ];

  const filteredProjects = projectsData.filter((p) => {
    if (selectedCategory === 'ALL') return true;
    if (selectedCategory === 'CYBERSECURITY') {
      return p.category.includes('SECURITY') || p.category.includes('CYBER');
    }
    if (selectedCategory === 'FRONTEND') {
      return p.category.includes('FRONTEND') || p.category.includes('DESIGN');
    }
    if (selectedCategory === 'BACKEND') {
      return p.category.includes('BACKEND') || p.category.includes('DISTRIBUTED');
    }
    return true;
  });

  // Spotlight is the first featured project in the filtered list
  const spotlightProject: IProject | undefined = filteredProjects[0];
  const secondaryProjects: IProject[] = filteredProjects.slice(1);

  return (
    <div className="pt-28 sm:pt-36 pb-28 bg-canvas min-h-screen">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header Section */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="font-poppins text-xs font-bold tracking-widest text-[#087F5B] uppercase">
              ENGINEERING ARCHIVE
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-black/10 dark:border-white/10">
            <div>
              <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-primary leading-tight">
                {language === 'id' ? 'ARSIP' : 'SELECTED'}{' '}
                <span className="highlight-block-blue tracking-tight">
                  {language === 'id' ? 'KARYA' : 'SYSTEMS'}
                </span>
              </h1>
              <span className="font-editorial-italic font-medium text-2xl sm:text-4xl lg:text-5xl text-secondary block mt-1.5">
                {language === 'id'
                  ? 'sistem, telemetri & arsitektur antarmuka.'
                  : 'systems, telemetry & interface craft.'}
              </span>
            </div>

            <p className="max-w-md font-body text-sm sm:text-base text-secondary leading-relaxed font-normal">
              {language === 'id'
                ? 'Setiap sistem dirancang dengan integritas teknis, performa deterministik, dan penolakan terhadap kompleksitas buatan.'
                : 'Every project engineered with architectural rigor, deterministic performance, and elimination of unnecessary visual slop.'}
            </p>
          </div>
        </div>

        {/* Filter Navigation Bar + Counter */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none w-full sm:w-auto flex-nowrap sm:flex-wrap">
            {filterTabs.map((tab) => {
              const isActive = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-4 py-2 rounded-full font-poppins text-xs font-semibold tracking-wide transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-[#087F5B] text-white shadow-md shadow-[#087F5B]/20'
                      : 'bg-surface hover:bg-black/5 dark:hover:bg-white/5 text-secondary hover:text-primary border border-black/10 dark:border-white/10'
                  }`}
                >
                  <span>{tab.label[language]}</span>
                  <span className={`ml-1.5 text-[10px] ${isActive ? 'text-white/80' : 'text-muted'}`}>
                    ({tab.count})
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-secondary">
            <span className="w-2 h-2 rounded-full bg-[#087F5B]" />
            <span className="font-semibold uppercase">
              {language === 'id' ? 'TOTAL KARYA' : 'INDEXED'}: {filteredProjects.length} OF {projectsData.length}
            </span>
          </div>
        </div>

        {/* 01 / FLAGSHIP SPOTLIGHT (High Density & Architectural Spec Sheet) */}
        <AnimatePresence mode="wait">
          {spotlightProject && (
            <motion.section
              key={spotlightProject.slug}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="mb-14 sm:mb-20"
            >
              <div className="flex items-center justify-between pb-3 mb-6 border-b border-black/10 dark:border-white/10">
                <span className="font-mono text-xs font-bold text-[#087F5B] uppercase tracking-wider">
                  01 / {language === 'id' ? 'PROYEK UTAMA' : 'FLAGSHIP SPOTLIGHT'}
                </span>
                <span className="font-mono text-xs text-muted">
                  {spotlightProject.year}
                </span>
              </div>

              <div className="bg-surface rounded-[24px] sm:rounded-[32px] border border-black/10 dark:border-white/10 overflow-hidden shadow-lg hover:border-[#087F5B]/50 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Visual Preview (Left / Top) */}
                <div className="lg:col-span-6 relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-black/5 dark:bg-black/40 group">
                  <img
                    src={spotlightProject.image}
                    alt={spotlightProject.title}
                    className="w-full h-full object-cover filter contrast-[1.03] group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white font-mono text-[10px] font-bold tracking-wider uppercase">
                    {spotlightProject.category}
                  </div>
                  <div className="absolute top-4 right-4 z-10 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white font-mono text-xs font-bold">
                    {spotlightProject.year}
                  </div>
                </div>

                {/* Editorial Spec Sheet (Right / Bottom) */}
                <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-xs text-[#087F5B] font-bold tracking-wider uppercase block mb-1">
                      {spotlightProject.category}
                    </span>

                    <Link to={`/projects/${spotlightProject.slug}`} className="block group">
                      <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-primary tracking-tight leading-snug group-hover:text-[#087F5B] transition-colors">
                        {spotlightProject.title}
                      </h2>
                    </Link>

                    <p className="font-editorial-italic text-lg sm:text-xl text-secondary mt-1 font-medium">
                      {typeof spotlightProject.subtitle === 'object'
                        ? spotlightProject.subtitle[language]
                        : spotlightProject.subtitle}
                    </p>

                    <p className="font-body text-xs sm:text-sm text-secondary leading-relaxed mt-4 line-clamp-3">
                      {spotlightProject.description[language]}
                    </p>

                    {/* Real Measured Metrics */}
                    {spotlightProject.metrics && spotlightProject.metrics.length > 0 && (
                      <div className="grid grid-cols-3 gap-3 my-6 pt-5 border-t border-black/10 dark:border-white/10">
                        {spotlightProject.metrics.map((metric, mIdx) => (
                          <div
                            key={mIdx}
                            className="p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5"
                          >
                            <span className="font-mono text-sm sm:text-base font-black text-primary block">
                              {metric.value}
                            </span>
                            <span className="font-poppins text-[10px] sm:text-[11px] text-muted block mt-0.5 line-clamp-1">
                              {metric.label[language]}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {spotlightProject.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-lg bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 font-mono text-[11px] text-secondary font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="mt-8 pt-5 border-t border-black/10 dark:border-white/10 flex flex-col xs:flex-row flex-wrap items-stretch xs:items-center gap-3">
                    <Link
                      to={`/projects/${spotlightProject.slug}`}
                      className="btn-pill-primary inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-2.5 text-xs font-bold tracking-wider uppercase shadow-md shadow-[#087F5B]/20 text-center"
                    >
                      <span>{language === 'id' ? 'Buka Studi Kasus' : 'Read Case Study'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </Link>

                    {spotlightProject.github && (
                      <a
                        href={spotlightProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-surface hover:bg-black/5 dark:hover:bg-white/5 text-secondary hover:text-primary border border-black/10 dark:border-white/10 text-xs font-semibold transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>
                    )}

                    {spotlightProject.demo && (
                      <a
                        href={spotlightProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-surface hover:bg-black/5 dark:hover:bg-white/5 text-secondary hover:text-primary border border-black/10 dark:border-white/10 text-xs font-semibold transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Preview</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* 02 / SECONDARY PROJECTS BENTO GRID */}
        {secondaryProjects.length > 0 && (
          <section>
            <div className="flex items-center justify-between pb-3 mb-6 border-b border-black/10 dark:border-white/10">
              <span className="font-mono text-xs font-bold text-[#087F5B] uppercase tracking-wider">
                02 / {language === 'id' ? 'ARSIP LAINNYA' : 'COMPLEMENTARY SYSTEMS'}
              </span>
              <span className="font-mono text-xs text-muted">
                {secondaryProjects.length} {language === 'id' ? 'ENTRI' : 'ENTRIES'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {secondaryProjects.map((project, idx) => (
                <motion.article
                  key={project.slug}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="group bg-surface rounded-[24px] border border-black/10 dark:border-white/10 hover:border-[#087F5B] transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    {/* Card Preview Image */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-black/5 dark:bg-black/40">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover filter contrast-[1.03] group-hover:scale-105 transition-transform duration-500 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white font-mono text-[10px] font-bold tracking-wider uppercase">
                        {project.category}
                      </div>
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white font-mono text-[10px] font-bold">
                        {project.year}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <Link to={`/projects/${project.slug}`} className="block">
                        <h3 className="font-display font-black text-lg text-primary tracking-tight leading-snug group-hover:text-[#087F5B] transition-colors">
                          {project.title}
                        </h3>
                      </Link>

                      <p className="font-editorial-italic text-sm text-secondary mt-1 line-clamp-1">
                        {typeof project.subtitle === 'object'
                          ? project.subtitle[language]
                          : project.subtitle}
                      </p>

                      <p className="font-body text-xs text-secondary leading-relaxed mt-3 line-clamp-2">
                        {project.description[language]}
                      </p>

                      {/* Card Metric Bar if Available */}
                      {project.metrics && project.metrics.length > 0 && (
                        <div className="flex items-center gap-2 mt-4 pt-3 border-t border-black/5 dark:border-white/5 font-mono text-xs">
                          <span className="text-[#087F5B] font-bold">
                            {project.metrics[0].value}
                          </span>
                          <span className="text-muted text-[11px]">
                            • {project.metrics[0].label[language]}
                          </span>
                        </div>
                      )}

                      {/* Tech stack pills */}
                      <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-black/5 dark:border-white/5">
                        {project.technologies.slice(0, 3).map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded-md bg-black/5 dark:bg-white/5 text-[10px] font-mono text-secondary font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="px-6 py-4 border-t border-black/10 dark:border-white/10 flex items-center justify-between gap-3">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#087F5B] hover:text-[#066146] transition-colors"
                    >
                      <span>{language === 'id' ? 'Buka Kasus' : 'View Case'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 text-muted hover:text-primary transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </motion.article>
              ))}

              {/* Incubation Card (Clean, minimal placeholder when in ALL view) */}
              {selectedCategory === 'ALL' && (
                <div className="group bg-surface/50 rounded-[24px] border border-dashed border-black/20 dark:border-white/20 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-black/5 dark:border-white/5">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#087F5B]/10 text-[#087F5B] text-[10px] font-mono font-bold uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#087F5B] animate-pulse" />
                        <span>IN INCUBATION</span>
                      </span>
                      <span className="font-mono text-xs text-muted">2026</span>
                    </div>

                    <div className="pt-4">
                      <span className="font-mono text-xs text-muted block mb-1">STEALTH LABS</span>
                      <h3 className="font-display font-bold text-lg text-primary tracking-tight">
                        Autonomous Security Agent
                      </h3>
                      <p className="font-body text-xs text-secondary leading-relaxed mt-2">
                        {language === 'id'
                          ? 'Engine telemetri deterministik zero-day dan verifikasi formal untuk antarmuka misi kritis.'
                          : 'Deterministic zero-day telemetry engine and formal verification for mission-critical client surfaces.'}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-black/5 dark:border-white/5">
                    <span className="font-mono text-[11px] text-muted block">
                      SCHEDULED: Q3 2026
                    </span>
                  </div>
                </div>
              )}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

