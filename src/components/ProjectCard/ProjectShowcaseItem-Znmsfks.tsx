import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { IProject } from '@/data/projects';
import { RevealMask } from '@/components/RevealMask/RevealMask';
import { TechGridOverlay } from '@/components/StreetwearBadge/TechGridOverlay';
import { ArrowUpRight, Github, ExternalLink, Search } from 'lucide-react';

interface IProjectShowcaseItemProps {
  project: IProject;
  index: number;
}

export const ProjectShowcaseItem: React.FC<IProjectShowcaseItemProps> = ({ project, index }) => {
  const { language, t } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);
  const formattedIndex = String(index + 1).padStart(2, '0');

  return (
    <article
      className="relative mb-20 last:mb-0 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Outer Card Frame in Signature Blue Accent */}
      <div className="relative bg-[#0D0E11] text-white border border-white/10 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-12 overflow-hidden shadow-2xl transition-all duration-300 hover:border-[#087F5B]/50">
        {/* Subtle grid background on dark surface */}
        <div className="absolute inset-0 bg-grid-blue pointer-events-none opacity-25" />

        {/* Ambient Blue Glow behind active card */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#087F5B]/15 rounded-full blur-[90px] pointer-events-none" />

        {/* Technical Corner Crosshairs (+) */}
        <span className="absolute top-4 left-4 font-mono text-[10px] text-white/30 select-none">+</span>
        <span className="absolute top-4 right-4 font-mono text-[10px] text-white/30 select-none">+</span>
        <span className="absolute bottom-4 left-4 font-mono text-[10px] text-white/30 select-none">+</span>
        <span className="absolute bottom-4 right-4 font-mono text-[10px] text-white/30 select-none">+</span>

        {/* Top Meta Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10 relative z-10">
          <div className="flex items-center gap-3">
            {/* Index Tag */}
            <span className="bg-[#087F5B] text-white font-poppins font-bold text-xs px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
              SYS-0{formattedIndex}
            </span>
            <div className="h-4 w-[1px] bg-white/20" />
            <span className="font-poppins text-xs text-[#087F5B] uppercase font-bold tracking-wider">
              {project.category}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-poppins text-xs text-white/70 uppercase tracking-widest hidden sm:inline-block font-semibold">
              RELEASE - {project.year}
            </span>
            {/* Circular Action Button with ↗ */}
            <Link
              to={`/projects/${project.slug}`}
              className="btn-circle-action"
              aria-label={`Open ${project.title} case study`}
            >
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>
        </div>

        {/* Main Grid: Visual Media + High-Impact Typography & Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          {/* Left Column (7 cols): Layered Graphic Poster Preview */}
          <div className="lg:col-span-7">
            <Link to={`/projects/${project.slug}`} className="block group/preview relative">
              <RevealMask direction="bottom-to-top">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#141519] border border-white/10 shadow-lg group-hover/preview:border-[#087F5B]/60 transition-colors duration-500">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover filter contrast-110 group-hover/preview:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  
                  {/* Subtle Dark Vignette & Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                  {/* Bottom Image Stamp */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white font-poppins text-[11px]">
                    <span className="font-poppins font-bold text-[#087F5B] tracking-wider uppercase">
                      {project.title}
                    </span>
                    <span className="text-white/60 font-poppins">
                      [{project.year}]
                    </span>
                  </div>
                </div>
              </RevealMask>
            </Link>
          </div>

          {/* Right Column (5 cols): Content & Spec Sheet */}
          <div className="lg:col-span-5 space-y-6">
            {/* Signature Prompt Pill in Primary Blue */}
            <div className="prompt-pill-blue">
              <div className="flex items-center gap-2 text-xs font-bold italic tracking-tight text-white line-clamp-1 font-poppins">
                <Search className="w-3.5 h-3.5 text-white stroke-[2.5]" />
                <span>{project.subtitle[language]}</span>
              </div>
              <span className="font-poppins text-[10px] font-black uppercase text-white bg-white/20 px-2 py-0.5 rounded-full ml-2 shrink-0">
                VERIFIED
              </span>
            </div>

            {/* Project Title (Proportional, Bold, never gepeng) */}
            <div>
              <Link to={`/projects/${project.slug}`} className="block group/title">
                <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-white group-hover/title:text-[#087F5B] transition-colors leading-tight">
                  {project.title}
                </h3>
              </Link>
              <p className="font-poppins text-xs sm:text-sm text-white/70 mt-3 leading-relaxed font-normal">
                {project.description[language]}
              </p>
            </div>

            {/* Engineering Role & Approach Snippet */}
            <div className="p-4 bg-white/5 border-l-2 border-[#087F5B] rounded-r-xl border-y border-r border-white/5 text-xs">
              <span className="font-poppins text-[10px] text-[#087F5B] font-bold uppercase tracking-wider block mb-1">
                ARCHITECTURAL ROLE
              </span>
              <p className="text-white/90 font-medium leading-relaxed font-poppins text-xs">
                {project.role[language]}
              </p>
            </div>

            {/* Performance Telemetry Chips (if project has metrics) */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="grid grid-cols-3 gap-2 py-1">
                {project.metrics.map((metric, i) => (
                  <div
                    key={i}
                    className="p-2.5 rounded-xl bg-black/60 border border-white/10 text-center"
                  >
                    <span className="font-poppins font-black text-sm text-[#087F5B] block">
                      {metric.value}
                    </span>
                    <span className="font-poppins text-[9px] uppercase tracking-wider text-white/60 block mt-0.5 truncate font-semibold">
                      {metric.label[language]}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.technologies.slice(0, 5).map((tech) => (
                <span
                  key={tech}
                  className="font-poppins text-[10px] font-semibold px-2.5 py-1 bg-white/5 border border-white/10 text-white/80 rounded-full hover:border-[#087F5B] hover:text-[#087F5B] transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Actions: Pill CTA & Social Links */}
            <div className="flex items-center gap-3 pt-3">
              <Link
                to={`/projects/${project.slug}`}
                className="btn-pill-primary text-xs"
              >
                <span>{t.projects.viewCaseStudy}</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1 stroke-[2.5]" />
              </Link>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Repository"
                  className="w-10 h-10 rounded-full bg-black/60 border border-white/15 text-white hover:border-[#087F5B] hover:text-[#087F5B] transition-colors flex items-center justify-center cursor-pointer"
                  title="View Source on GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Live Demo"
                  className="w-10 h-10 rounded-full bg-black/60 border border-white/15 text-white hover:border-[#087F5B] hover:text-[#087F5B] transition-colors flex items-center justify-center cursor-pointer"
                  title="Live Demo"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Decorative Coordinate Grid Overlay in corner */}
        <div className="absolute -bottom-6 -right-6 pointer-events-none opacity-40">
          <TechGridOverlay size={130} color="#087F5B" />
        </div>
      </div>
    </article>
  );
};
