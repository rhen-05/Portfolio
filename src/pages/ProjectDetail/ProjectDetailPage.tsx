import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { projectsData } from '@/data/projects';
import { RevealMask } from '@/components/RevealMask/RevealMask';
import { ArrowLeft, ArrowRight, Github, ExternalLink, Calendar, ShieldCheck } from 'lucide-react';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language, t } = useLanguage();

  const currentIndex = projectsData.findIndex((p) => p.slug === slug);
  const project = projectsData[currentIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
    if (project) {
      document.title = `${project.title} - Case Study`;
    }
  }, [slug, project]);

  if (!project) {
    return (
      <div className="min-h-screen pt-36 pb-20 flex flex-col items-center justify-center text-center px-4">
        <span className="font-poppins text-sm text-[#087F5B] mb-2 font-bold">ERROR 404</span>
        <h1 className="font-display text-4xl font-black uppercase mb-4">Project Not Found</h1>
        <p className="font-body text-secondary mb-8">The project you are looking for does not exist in the archive.</p>
        <Link
          to="/projects"
          className="btn-pill-primary text-xs"
        >
          <ArrowLeft className="w-3.5 h-3.5 mr-1" />
          <span>{t.projects.backToProjects}</span>
        </Link>
      </div>
    );
  }

  // Next and Previous projects for circular navigation
  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : projectsData[projectsData.length - 1];
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : projectsData[0];

  return (
    <div className="pt-28 sm:pt-36 pb-28 bg-canvas min-h-screen">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Navigation Breadcrumb */}
        <div className="mb-10 flex items-center justify-between border-b border-black/10 dark:border-white/10 pb-4">
          <Link
            to="/projects"
            className="btn-pill-mode text-[11px]"
          >
            <ArrowLeft className="w-3.5 h-3.5 mr-1" />
            <span>{t.projects.backToProjects}</span>
          </Link>

          <div className="font-poppins text-xs text-muted flex items-center gap-2 font-bold">
            <span>INDEX: 0{currentIndex + 1} - 0{projectsData.length}</span>
          </div>
        </div>

        {/* Project Hero Header */}
        <div className="mb-14">
          <div className="flex flex-wrap items-center gap-3 mb-4 font-poppins text-xs font-semibold">
            <span className="px-3.5 py-1 bg-surface border border-black/10 dark:border-white/10 text-primary font-bold uppercase rounded-full">
              {project.category}
            </span>
            <span className="text-muted flex items-center gap-1 font-medium">
              <Calendar className="w-3 h-3" />
              {project.year}
            </span>
          </div>

          <h1 className="font-display text-3xl xs:text-4xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tight text-primary leading-tight sm:leading-[0.95] mb-6">
            {(() => {
              const words = project.title.trim().split(' ');
              if (words.length >= 2) {
                const firstPart = words.slice(0, words.length - 1).join(' ');
                const lastPart = words[words.length - 1];
                return (
                  <span className="inline-flex items-baseline flex-wrap gap-x-3 sm:gap-x-4">
                    <span>{firstPart}</span>
                    <span className="font-editorial-italic lowercase text-[#087F5B] font-semibold">
                      {lastPart}
                    </span>
                  </span>
                );
              }
              return project.title;
            })()}
          </h1>

          <p className="max-w-3xl font-body text-lg sm:text-xl text-secondary leading-relaxed font-normal">
            {project.subtitle[language]}
          </p>
        </div>

        {/* Primary Project Imagery with Signature Reveal */}
        <div className="mb-16">
          <RevealMask direction="bottom-to-top">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#121212] border border-black/10 dark:border-white/10 shadow-2xl rounded-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover filter contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white font-poppins text-xs font-bold">
                <span>CASE STUDY ARCHIVE - {project.slug}</span>
                <span className="text-[#087F5B] font-black">STATUS: VERIFIED</span>
              </div>
            </div>
          </RevealMask>
        </div>

        {/* Key Metrics Strip */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="mb-16 bg-[#171C19] text-white dark:bg-[#171C19] p-6 sm:p-8 border border-white/15 rounded-2xl">
            <span className="font-poppins text-[10px] uppercase tracking-widest text-[#85827D] block mb-4 font-bold">
              TELEMETRY & SYSTEM BENCHMARKS
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {project.metrics.map((metric, i) => (
                <div key={i}>
                  <div className="font-poppins text-2xl sm:text-3xl font-black text-white">
                    {metric.value}
                  </div>
                  <div className="font-poppins text-[11px] uppercase tracking-wider text-[#A3A09B] font-semibold">
                    {metric.label[language]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Two-Column Editorial Deep Dive */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 my-16 border-t border-black/10 dark:border-white/10 pt-12">
          {/* Main Story (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview */}
            <section>
              <h2 className="font-poppins text-xs font-bold tracking-widest text-[#087F5B] uppercase mb-4">
                01 - ARCHITECTURAL OVERVIEW
              </h2>
              <p className="font-body text-base sm:text-lg text-secondary leading-relaxed font-normal">
                {project.description[language]}
              </p>
            </section>

            {/* Problem & Solution Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Problem */}
              <div className="bg-surface p-6 sm:p-8 border border-black/10 dark:border-white/10 rounded-2xl">
                <span className="font-poppins text-[11px] font-bold text-muted uppercase tracking-widest block mb-2">
                  {t.projects.problem}
                </span>
                <p className="font-body text-sm sm:text-base text-secondary leading-relaxed font-normal">
                  {project.problem[language]}
                </p>
              </div>

              {/* Solution */}
              <div className="bg-surface p-6 sm:p-8 border-l-2 border-[#087F5B] border-y border-r border-black/10 dark:border-white/10 rounded-2xl">
                <span className="font-poppins text-[11px] font-bold text-[#087F5B] uppercase tracking-widest block mb-2">
                  {t.projects.solution}
                </span>
                <p className="font-body text-sm sm:text-base text-secondary leading-relaxed font-normal">
                  {project.solution[language]}
                </p>
              </div>
            </div>

            {/* Process & Steps */}
            {project.process && project.process.length > 0 && (
              <section className="pt-6">
                <h2 className="font-poppins text-xs font-bold tracking-widest text-[#087F5B] uppercase mb-6">
                  02 - {t.projects.process}
                </h2>
                <div className="space-y-6">
                  {project.process.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-6 bg-surface border border-black/10 dark:border-white/10 rounded-2xl"
                    >
                      <span className="font-display text-xs text-[#087F5B] font-black block mb-1">
                        {step.phase}
                      </span>
                      <h4 className="font-display font-black text-lg uppercase text-primary mb-2">
                        {step.title[language]}
                      </h4>
                      <p className="font-body text-sm text-secondary leading-relaxed font-normal">
                        {step.desc[language]}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Outcomes */}
            {project.outcomes && project.outcomes.length > 0 && (
              <section className="pt-6">
                <h2 className="font-poppins text-xs font-bold tracking-widest text-[#087F5B] uppercase mb-6">
                  03 - {t.projects.outcomes}
                </h2>
                <ul className="space-y-3 font-body text-sm text-secondary font-normal">
                  {project.outcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-start gap-3 p-4 bg-subtle border border-black/5 dark:border-white/5 rounded-xl">
                      <ShieldCheck className="w-4 h-4 text-[#087F5B] shrink-0 mt-0.5" />
                      <span>{outcome[language]}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Sticky Sidebar Metadata */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-surface p-6 sm:p-7 border border-black/10 dark:border-white/10 space-y-6 rounded-2xl">
              <div>
                <span className="font-poppins text-[10px] uppercase tracking-widest text-muted block mb-1.5 font-bold">
                  {t.projects.role}
                </span>
                <p className="font-poppins text-sm font-medium text-primary">
                  {project.role[language]}
                </p>
              </div>

              <div className="border-t border-black/10 dark:border-white/10 pt-4">
                <span className="font-poppins text-[10px] uppercase tracking-widest text-muted block mb-2 font-bold">
                  {t.projects.technologies}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="font-poppins text-xs font-semibold px-3 py-1 bg-subtle border border-black/5 dark:border-white/5 text-primary rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons - Pill Shaped */}
              <div className="border-t border-black/10 dark:border-white/10 pt-6 space-y-3">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-pill-primary w-full text-xs"
                  >
                    <span>{t.projects.liveDemo}</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-pill-mode w-full text-xs text-primary"
                  >
                    <Github className="w-3.5 h-3.5 mr-1" />
                    <span>{t.projects.sourceCode}</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Circular Next & Previous Project Navigation */}
        <div className="mt-24 pt-12 border-t border-black/10 dark:border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <Link
            to={`/projects/${prevProject.slug}`}
            className="group p-6 bg-surface border border-black/10 dark:border-white/10 hover:border-[#087F5B] transition-all rounded-2xl"
          >
            <div className="flex items-center gap-2 font-poppins text-xs text-muted mb-2 font-semibold">
              <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
              <span>{t.projects.prevProject}</span>
            </div>
            <h4 className="font-display font-black text-xl uppercase tracking-tight text-primary group-hover:text-[#087F5B] transition-colors">
              {prevProject.title}
            </h4>
          </Link>

          <Link
            to={`/projects/${nextProject.slug}`}
            className="group p-6 bg-surface border border-black/10 dark:border-white/10 hover:border-[#087F5B] transition-all rounded-2xl text-right"
          >
            <div className="flex items-center justify-end gap-2 font-poppins text-xs text-muted mb-2 font-semibold">
              <span>{t.projects.nextProject}</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </div>
            <h4 className="font-display font-black text-xl uppercase tracking-tight text-primary group-hover:text-[#087F5B] transition-colors">
              {nextProject.title}
            </h4>
          </Link>
        </div>
      </div>
    </div>
  );
};
