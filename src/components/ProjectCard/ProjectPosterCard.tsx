import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

interface ProjectPosterCardProps {
  project?: {
    title: string;
    category: string;
    image: string;
    slug?: string;
    github?: string;
    demo?: string;
    year?: string;
    subtitle?: { id?: string; en?: string } | string;
    [key: string]: any;
  };
  isComingSoon?: boolean;
  className?: string;
  displayOnly?: boolean;
  isActive?: boolean;
  onClick?: () => void;
}

export const ProjectPosterCard: React.FC<ProjectPosterCardProps> = ({
  project,
  isComingSoon = false,
  className = '',
  displayOnly = false,
  isActive = false,
  onClick,
}) => {
  const { language } = useLanguage();

  // 1. EXHIBITION ARCH MODE (HOME PAGE - INTERACTIVE & CLEAN)
  if (displayOnly && project) {
    const subtitleText =
      typeof project.subtitle === 'object'
        ? project.subtitle[language] || project.subtitle.en || ''
        : project.subtitle || '';

    return (
      <div
        onClick={onClick}
        className={`group relative w-full h-full rounded-[24px] sm:rounded-[30px] overflow-hidden select-none cursor-pointer bg-[#171C19] border transition-all duration-500 ${
          isActive
            ? 'border-emerald-500/70 shadow-2xl ring-2 ring-emerald-500/30'
            : 'border-white/10 hover:border-white/25 shadow-xl hover:shadow-2xl'
        } ${className}`}
      >
        {/* Full-Bleed Background Image */}
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover filter contrast-[1.03] brightness-[0.92] group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />

        {/* Top-Left Category Badge (Clean, Minimal, No Slop) */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 px-3 py-1 rounded-full bg-black/55 backdrop-blur-md border border-white/15 text-white/90 shadow-md">
          <span className="font-poppins text-[10px] sm:text-[11px] font-semibold tracking-wide uppercase">
            {project.category}
          </span>
        </div>

        {/* Frosted Glass Blur Overlay in Bottom Panel */}
        <div className="absolute inset-x-0 bottom-0 h-[46%] pointer-events-none backdrop-blur-md bg-gradient-to-t from-black/95 via-black/60 to-transparent" />

        {/* Bottom Content Area: Simple, Direct to the Core */}
        <div className="relative z-10 flex flex-col justify-end h-full p-4 sm:p-5 lg:p-6 pointer-events-none">
          {/* Main Title */}
          <h3 className="font-display font-bold text-sm sm:text-base lg:text-xl text-white tracking-tight leading-snug line-clamp-2 group-hover:text-emerald-400 transition-colors">
            {project.title}
          </h3>

          {/* Subtitle / Context (if available) */}
          {subtitleText && (
            <p className="font-poppins text-[11px] sm:text-xs text-white/70 line-clamp-1 mt-1 font-normal">
              {subtitleText}
            </p>
          )}
        </div>
      </div>
    );
  }

  // 2. COMING SOON / INCUBATION PROJECT MODE (CLEAN & MINIMAL)
  if (isComingSoon || !project) {
    return (
      <div
        className={`group relative w-full aspect-[4/5] rounded-[24px] sm:rounded-[30px] overflow-hidden bg-[#0D0F14] border border-white/10 shadow-xl select-none ${className}`}
      >
        <div className="absolute inset-0 bg-grid-white/[0.04] pointer-events-none" />
        <div className="absolute -top-20 -right-20 w-56 h-56 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Top-Left Badge */}
        <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/55 backdrop-blur-md border border-white/15 text-white shadow-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-poppins text-[11px] font-semibold tracking-wide">
            IN INCUBATION
          </span>
        </div>

        {/* Top-Right Year */}
        <div className="absolute top-4 right-4 sm:top-5 sm:right-5 z-20 px-2.5 py-1 rounded-full bg-black/55 backdrop-blur-md border border-white/15 text-white/90 shadow-md">
          <span className="font-mono text-[11px] font-bold">2026</span>
        </div>

        {/* Center Graphic */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="font-mono text-3xl text-emerald-400/80 mb-2 font-black">
            [✦]
          </span>
          <span className="font-mono text-xs tracking-widest text-white/50 uppercase font-semibold">
            STEALTH LABS
          </span>
        </div>

        {/* Frosted Bottom */}
        <div className="absolute inset-x-0 bottom-0 h-[42%] pointer-events-none backdrop-blur-md bg-gradient-to-t from-black/95 via-black/60 to-transparent" />

        <div className="relative z-10 flex flex-col justify-end h-full p-5 sm:p-6 pointer-events-none">
          <h3 className="font-display font-bold text-base sm:text-xl text-white tracking-tight leading-snug">
            Next-Gen Autonomous Agent
          </h3>
          <p className="font-poppins text-xs text-white/60 mt-1">
            Zero-day Telemetry Engine • Q3 Release
          </p>
        </div>
      </div>
    );
  }

  // 3. STANDARD INTERACTIVE CARD (PROJECTS PAGE & CATALOG)
  const subtitleText =
    typeof project.subtitle === 'object'
      ? project.subtitle[language] || project.subtitle.en || ''
      : project.subtitle || '';

  return (
    <div
      className={`group relative w-full aspect-[4/5] rounded-[24px] sm:rounded-[30px] overflow-hidden bg-[#171C19] border border-black/10 dark:border-white/10 shadow-xl hover:shadow-2xl hover:border-emerald-500/50 transition-all duration-500 cursor-pointer select-none ${className}`}
    >
      {/* Full-Bleed Background Image */}
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover filter contrast-[1.03] brightness-[0.92] group-hover:scale-105 transition-transform duration-700 ease-out"
        loading="lazy"
      />

      {/* Top-Left Category Badge */}
      <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-20 px-3 py-1 rounded-full bg-black/55 backdrop-blur-md border border-white/15 text-white shadow-md pointer-events-none">
        <span className="font-poppins text-[11px] font-semibold tracking-wide uppercase">
          {project.category}
        </span>
      </div>

      {/* Top-Right Action Buttons */}
      <div className="absolute top-4 right-4 sm:top-5 sm:right-5 z-30 flex items-center gap-2">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            aria-label="GitHub Repository"
            title="GitHub Repository"
            className="w-8 h-8 rounded-full bg-black/60 hover:bg-[#087F5B] backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all shadow-md"
          >
            <Github className="w-3.5 h-3.5" />
          </a>
        )}

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            aria-label="Live Demo Link"
            title="Live Demo"
            className="w-8 h-8 rounded-full bg-black/60 hover:bg-[#087F5B] backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all shadow-md"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}

        {project.slug && (
          <Link
            to={`/projects/${project.slug}`}
            aria-label="View Project Case Study"
            title="Case Study"
            className="w-8 h-8 rounded-full bg-black/60 hover:bg-white hover:text-black backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all shadow-md"
          >
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        )}
      </div>

      {/* Frosted Glass Blur Overlay in Bottom Panel */}
      <div className="absolute inset-x-0 bottom-0 h-[44%] pointer-events-none backdrop-blur-md bg-gradient-to-t from-black/95 via-black/60 to-transparent" />

      {/* Bottom Content Area: Clean & Direct to the Point */}
      <div className="relative z-10 flex flex-col justify-end h-full p-5 sm:p-6 pointer-events-none">
        {/* Title */}
        <h3 className="font-display font-bold text-lg sm:text-xl text-white tracking-tight leading-snug line-clamp-2 group-hover:text-emerald-400 transition-colors">
          {project.title}
        </h3>

        {/* Subtitle */}
        {subtitleText && (
          <p className="font-poppins text-xs text-white/70 line-clamp-1 mt-1 font-normal">
            {subtitleText}
          </p>
        )}
      </div>

      {/* Full Card Interactive Link */}
      {project.slug && (
        <Link
          to={`/projects/${project.slug}`}
          className="absolute inset-0 z-20"
          aria-label={project.title}
        />
      )}
    </div>
  );
};
