import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { personalData } from '@/data/personal';
import { projectsData } from '@/data/projects';
import { certificatesData } from '@/data/certificates';
import { Hero } from '@/components/Hero/Hero';
import { Expertise } from '@/components/Expertise/Expertise';
import { SectionHeading } from '@/components/SectionHeading/SectionHeading';
import { ProjectPosterCard } from '@/components/ProjectCard/ProjectPosterCard';
import { CertificateCard } from '@/components/CertificateCard/CertificateCard';
import { ImaginePoster } from '@/components/ImaginePoster/ImaginePoster';
import { CoreDomainsCard } from '@/components/CoreDomainsCard/CoreDomainsCard';
import { DeveloperStatement } from '@/components/DeveloperStatement/DeveloperStatement';
import { HorizontalTimeline } from '@/components/HorizontalTimeline/HorizontalTimeline';
import { StreetwearBadge } from '@/components/StreetwearBadge/StreetwearBadge';
import { ArrowUpRight, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

// Helper to convert ALL-CAPS text to Title Case while preserving essential acronyms
const formatTitleCase = (text: string): string => {
  if (!text) return '';
  const acronyms = new Set([
    'CLI', 'API', 'TLS', 'SSL', 'RFC', 'DDOS', 'DDoS', 'SVG', 'DOM', 
    'UI', 'UX', 'P99', 'FPS', 'ASVS', 'CIS', 'NSE', 'PCAP', 'CTF', 
    'TCP', 'UDP', 'CVE', 'REST', 'SDK', 'ID', 'AI', 'NMAP'
  ]);

  return text
    .split(' ')
    .map((word) => {
      if (/^[—\-/&|]+$/.test(word)) return word;

      if (word.includes('-')) {
        return word
          .split('-')
          .map((part) => {
            const clean = part.replace(/[^a-zA-Z0-9]/g, '');
            if (acronyms.has(clean.toUpperCase())) return clean.toUpperCase();
            if (!part) return part;
            return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
          })
          .join('-');
      }

      const cleanWord = word.replace(/[^a-zA-Z0-9]/g, '');
      if (acronyms.has(cleanWord.toUpperCase())) {
        return word.toUpperCase();
      }

      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');
};

// Static project and certificate subsets hoisted to module scope for optimal performance
const showcaseProjects = projectsData.slice(0, 4);
const featuredProjects = projectsData.filter((p) => p.featured);
const featuredCertificates = certificatesData.slice(0, 2);

// Sticker pills data: signature abstract formation (organic tilts, dynamic typography, zero overlap)
const skillStickers = [
  { label: 'Frontend Architecture', rotate: -3.5, font: 'font-display font-bold' },
  { label: 'React & TypeScript', rotate: 3, font: 'font-editorial-italic font-semibold' },
  { label: 'Network Telemetry', rotate: -2.5, font: 'font-display font-bold' },
  { label: 'UI/UX Systems', rotate: 3.5, font: 'font-editorial-italic font-semibold' },
  { label: 'Cybersecurity', rotate: -3, font: 'font-display font-bold' },
  { label: 'Next.js & Vite', rotate: 2.5, font: 'font-display font-bold' },
  { label: 'Wireshark DPI', rotate: -3.5, font: 'font-editorial-italic font-semibold' },
  { label: 'Web Performance', rotate: 3, font: 'font-display font-bold' },
  { label: 'RESTful APIs', rotate: -2.5, font: 'font-display font-bold' },
  { label: 'WCAG 2.1 AA', rotate: 3.5, font: 'font-editorial-italic font-semibold' },
  { label: 'Linux & Shell', rotate: -3, font: 'font-display font-bold' },
  { label: 'Micro-Interactions', rotate: 2.5, font: 'font-editorial-italic font-semibold' },
];

export const HomePage: React.FC = () => {
  const { language, t } = useLanguage();
  const navigate = useNavigate();
  const [selectedProjectIdx, setSelectedProjectIdx] = useState<number>(showcaseProjects.length - 1);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${personalData.name} — Creative Developer & Problem Solver`;

    // Ensure the initial rightmost card is visible on smaller / scrollable screens
    if (cardsContainerRef.current) {
      cardsContainerRef.current.scrollLeft = cardsContainerRef.current.scrollWidth;
    }
  }, []);

  return (
    <div className="bg-canvas overflow-hidden">
      {/* 00 / HERO (Photo ends flush at bottom) */}
      <Hero />

      {/* SIGNATURE ELECTRIC COBALT BANNER (Directly touches the hero photo) */}
      <section className="bg-[#087F5B] text-white pt-16 sm:pt-20 pb-20 sm:pb-28 px-4 sm:px-8 relative overflow-hidden select-none">
        <div className="w-full max-w-[1440px] mx-auto">
          {/* Top Row: Bold Title on Left + Description & Pill CTA on Right */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 sm:gap-14 pb-16 sm:pb-24 border-b border-white/20">
            <div>
              <h2 className="font-display font-black text-4xl xs:text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tighter text-white leading-[0.92]">
                ALL YOUR
              </h2>
              <span className="font-editorial-italic font-medium text-4xl xs:text-5xl sm:text-7xl lg:text-8xl text-white block -mt-1 sm:-mt-2">
                {language === 'id' ? 'kebutuhan teknis' : 'technical needs'}
              </span>
            </div>

            <div className="lg:max-w-md space-y-6">
              <p className="font-body text-sm sm:text-base text-white/90 leading-relaxed font-normal">
                {language === 'id'
                  ? 'Semua kapabilitas rekayasa antarmuka, arsitektur performa, dan ketahanan sistem terintegrasi dalam satu standar kualitas rekayasa terdepan.'
                  : 'All interface engineering, performance architecture, and system resilience capabilities unified with the highest caliber of craft.'}
              </p>

              <div>
                <Link
                  to="/contact"
                  className="btn-pill-white text-xs tracking-wider font-bold"
                >
                  <span>{language === 'id' ? 'JADWALKAN DISKUSI' : 'BOOK A CALL'}</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Row: Signature Abstract Sticker Formation (Zero Overlap, Clean Organic Spacing) */}
          <div className="pt-14 sm:pt-20">
            <div className="flex flex-wrap items-center justify-center gap-x-3.5 sm:gap-x-5 lg:gap-x-6 gap-y-4.5 sm:gap-y-6 lg:gap-y-7 max-w-5xl mx-auto px-2">
              {skillStickers.map((sticker, idx) => (
                <motion.div
                  key={sticker.label}
                  initial={{ opacity: 0, scale: 0.95, rotate: sticker.rotate, y: idx % 2 === 0 ? -3 : 3 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: sticker.rotate, y: idx % 2 === 0 ? -3 : 3 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.08,
                    rotate: 0,
                    y: -5,
                    zIndex: 20,
                    boxShadow: '0 16px 36px rgba(0, 0, 0, 0.28)',
                  }}
                  whileTap={{ scale: 0.97 }}
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 20,
                  }}
                  className="sticker-pill cursor-default transform-gpu will-change-transform"
                >
                  <span className={`${sticker.font} text-xs sm:text-sm tracking-tight`}>
                    {sticker.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 01 / ABOUT PREVIEW (STREETWEAR & POSTER REDESIGN IN SIGNATURE BLUE) */}
      <section className="py-24 sm:py-32 border-t border-black/10 dark:border-white/10 relative overflow-hidden" id="about">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-[#087F5B]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          {/* Header Bar: Poster Typography */}
          <div className="mb-14 sm:mb-20">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-poppins text-xs font-bold tracking-widest text-[#087F5B] uppercase">
                MANIFESTO & PROFILE
              </span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div>
                <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-primary leading-tight">
                  {language === 'id' ? 'REKAYASA SISTEM' : 'ENGINEERING'}{' '}
                  <span className="highlight-block-blue tracking-tight">
                    {language === 'id' ? 'BERMUTU TINGGI' : 'MANIFESTO'}
                  </span>
                </h2>
                <span className="font-editorial-italic font-medium text-2xl sm:text-4xl lg:text-5xl text-secondary block mt-1.5">
                  {language === 'id' ? 'antara kepekaan visual & ketahanan siber.' : 'between aesthetic rigor & technical defense.'}
                </span>
              </div>

              <p className="max-w-md font-body text-sm sm:text-base text-secondary leading-relaxed font-normal">
                {personalData.introParagraph[language]}
              </p>
            </div>
          </div>

          {/* Master 2-Column Composition: Streetwear Poster on Left, Photo 1 Style Core Domains Card on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column (5 cols): Imagine* Poster */}
            <div className="lg:col-span-5 flex justify-center">
              <ImaginePoster />
            </div>

            {/* Right Column (7 cols): Core Domains Showcase Card (Photo 1 Editorial Neo-Brutalist Card) */}
            <div className="lg:col-span-7">
              <CoreDomainsCard />
            </div>

          </div>
        </div>
      </section>

      {/* 02 / EXPERTISE */}
      <Expertise />

      {/* 03 / SELECTED PROJECTS */}
      <section className="py-24 sm:py-32 border-t border-black/10 dark:border-white/10" id="projects">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="mb-14 sm:mb-20">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-poppins text-xs font-bold tracking-widest text-[#087F5B] uppercase">
                SELECTED WORK
              </span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div>
                <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-primary leading-tight">
                  {language === 'id' ? 'KARYA' : 'SELECTED'}{' '}
                  <span className="highlight-block-blue tracking-tight">
                    {language === 'id' ? 'UNGGULAN' : 'WORKS'}
                  </span>
                </h2>
                <span className="font-editorial-italic font-medium text-2xl sm:text-4xl lg:text-5xl text-secondary block mt-1.5">
                  {language === 'id' ? 'arsitektur antarmuka & sistem.' : 'precision engineering & systems.'}
                </span>
              </div>

              <p className="max-w-md font-body text-sm sm:text-base text-secondary leading-relaxed font-normal">
                {language === 'id' 
                  ? "Pilihan karya unggulan yang mendemonstrasikan keahlian arsitektur antarmuka dan ketahanan teknis."
                  : "Curated body of work demonstrating frontend architecture, interaction design, and technical precision."}
              </p>
            </div>
          </div>

          {/* Expanding Horizontal Accordion Showcase (Matching User Photo Layout) */}
          <div className="w-full py-4 sm:py-8 select-none">
            {/* MOBILE ONLY (sm:hidden): TOUCH-OPTIMIZED SWIPEABLE PROJECT DECK */}
            <div className="sm:hidden w-full flex flex-col gap-4">
              {/* Project Quick Selector Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                {showcaseProjects.map((p, pIdx) => {
                  const isCur = pIdx === selectedProjectIdx;
                  return (
                    <button
                      key={p.slug}
                      onClick={() => setSelectedProjectIdx(pIdx)}
                      className={`px-3 py-1.5 rounded-full font-poppins text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 cursor-pointer ${
                        isCur
                          ? 'bg-[#087F5B] text-white shadow-md shadow-[#087F5B]/30'
                          : 'bg-surface text-secondary border border-black/10 dark:border-white/10'
                      }`}
                    >
                      <span>0{pIdx + 1}</span>
                      <span className="text-[11px] font-medium opacity-90 truncate max-w-[105px]">
                        {formatTitleCase(p.title.split('—')[0].trim())}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active Mobile Project Card */}
              {(() => {
                const activeCard = showcaseProjects[selectedProjectIdx] || showcaseProjects[0];
                const activeSubtitle =
                  typeof activeCard.subtitle === 'object'
                    ? activeCard.subtitle[language] || activeCard.subtitle.en || ''
                    : activeCard.subtitle || '';

                return (
                  <motion.div
                    key={activeCard.slug}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.25 }}
                    className="relative w-full rounded-[24px] overflow-hidden border border-black/10 dark:border-white/10 shadow-xl bg-[#171C19]"
                  >
                    {/* Visual Preview */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <img
                        src={activeCard.image}
                        alt={activeCard.title}
                        className="w-full h-full object-cover filter contrast-[1.05]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20" />

                      {/* Top Category Tag & Year */}
                      <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between z-10">
                        <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white font-mono text-[10px] font-bold tracking-wider uppercase">
                          {formatTitleCase(activeCard.category)}
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white font-mono text-[10px] font-bold">
                          {activeCard.year}
                        </span>
                      </div>
                    </div>

                    {/* Content Details */}
                    <div className="p-5 flex flex-col justify-between">
                      <div>
                        <h3 className="font-display font-black text-xl text-white tracking-tight leading-tight">
                          {formatTitleCase(activeCard.title)}
                        </h3>

                        {activeSubtitle && (
                          <p className="font-body text-xs text-white/80 line-clamp-2 mt-2 leading-relaxed font-normal">
                            {activeSubtitle}
                          </p>
                        )}

                        {/* Tech Tags */}
                        {activeCard.technologies && activeCard.technologies.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-3">
                            {activeCard.technologies.slice(0, 3).map((tech, tIdx) => (
                              <span
                                key={tIdx}
                                className="px-2 py-0.5 rounded-md bg-white/10 text-[10px] font-mono text-emerald-300 font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Mobile Action Link & Dot Indicators */}
                      <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          {showcaseProjects.map((_, dotIdx) => (
                            <button
                              key={dotIdx}
                              onClick={() => setSelectedProjectIdx(dotIdx)}
                              aria-label={`Project ${dotIdx + 1}`}
                              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                                dotIdx === selectedProjectIdx ? 'w-5 bg-emerald-400' : 'w-1.5 bg-white/30'
                              }`}
                            />
                          ))}
                        </div>

                        <Link
                          to={`/projects/${activeCard.slug}`}
                          className="btn-pill-primary py-2.5 px-4 text-[11px] font-poppins font-bold uppercase tracking-wider inline-flex items-center gap-1.5"
                        >
                          <span>{language === 'id' ? 'Studi Kasus' : 'Case Study'}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })()}
            </div>

            {/* DESKTOP ACCORDION (hidden on mobile, unchanged for sm/desktop) */}
            <div 
              ref={cardsContainerRef}
              className="hidden sm:flex w-full items-stretch gap-2.5 sm:gap-3.5 lg:gap-4 h-[440px] sm:h-[480px] lg:h-[530px] overflow-x-auto sm:overflow-visible pb-2 sm:pb-0 scrollbar-none scroll-smooth"
            >
              {showcaseProjects.map((card, idx) => {
                const isActive = idx === selectedProjectIdx;
                const subtitleText =
                  typeof card.subtitle === 'object'
                    ? card.subtitle[language] || card.subtitle.en || ''
                    : card.subtitle || '';

                if (isActive) {
                  return (
                    <motion.div
                      key={card.slug}
                      layout
                      transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                      onClick={() => navigate(`/projects/${card.slug}`)}
                      className="relative flex-1 min-w-[260px] sm:min-w-[420px] lg:min-w-[560px] h-full rounded-[24px] sm:rounded-[32px] overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl group cursor-pointer bg-[#171C19]"
                    >
                      {/* Full-Bleed Background Image */}
                      <img
                        src={card.image}
                        alt={card.title}
                        className="absolute inset-0 w-full h-full object-cover filter contrast-[1.05] brightness-[0.88] group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />

                      {/* Smooth Dark Gradient Overlays for High Legibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/25 pointer-events-none" />
                      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />

                      {/* Top Bar: Category (Text only, no pill shape/bg) */}
                      <div className="relative z-10 p-5 sm:p-7 flex items-center justify-between">
                        <span className="font-poppins text-xs sm:text-sm font-semibold tracking-wider text-white/90 drop-shadow">
                          {formatTitleCase(card.category)}
                        </span>
                      </div>

                      {/* Bottom Content Area */}
                      <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-8 flex flex-col justify-end">
                        <h3 className="font-display font-black text-xl sm:text-2xl lg:text-3xl text-white tracking-tight leading-tight group-hover:text-emerald-300 transition-colors">
                          {formatTitleCase(card.title)}
                        </h3>

                        {subtitleText && (
                          <p className="font-body text-xs sm:text-sm text-white/85 line-clamp-2 mt-2 max-w-2xl font-normal leading-relaxed">
                            {subtitleText}
                          </p>
                        )}

                        {/* CTA */}
                        <div className="flex items-center justify-end mt-4 pt-3 border-t border-white/15">
                          <div className="inline-flex items-center gap-1.5 text-xs font-poppins font-bold text-emerald-400 group-hover:text-white transition-colors tracking-wider">
                            <span>{language === 'id' ? 'Studi Kasus' : 'Case Study'}</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                }

                // Collapsed Strip
                return (
                  <motion.div
                    key={card.slug}
                    layout
                    transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                    onClick={() => setSelectedProjectIdx(idx)}
                    className="relative w-14 sm:w-20 lg:w-24 shrink-0 h-full rounded-[20px] sm:rounded-[28px] overflow-hidden border border-black/10 dark:border-white/10 hover:border-[#087F5B] transition-all duration-300 shadow-lg hover:shadow-2xl cursor-pointer group bg-[#171C19] flex items-center justify-center select-none"
                  >
                    {/* Darkened Background Image */}
                    <img
                      src={card.image}
                      alt={card.title}
                      className="absolute inset-0 w-full h-full object-cover filter contrast-[1.05] brightness-[0.35] group-hover:brightness-[0.55] group-hover:scale-110 transition-all duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-300" />

                    {/* Center: VERTICAL ROTATED TITLE */}
                    <div className="relative z-10 w-full h-full flex items-center justify-center pointer-events-none">
                      <span className="font-display font-black text-base sm:text-lg lg:text-xl tracking-widest uppercase text-white/90 group-hover:text-emerald-400 transition-colors whitespace-nowrap rotate-90 select-none drop-shadow-md">
                        {card.title.split('—')[0].trim() || card.title}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Centered Explore More Action Button */}
          <div className="mt-8 sm:mt-10 flex justify-center">
            <Link
              to="/projects"
              className="btn-pill-primary inline-flex items-center gap-2.5 px-8 py-3.5 text-xs sm:text-sm font-bold tracking-wider uppercase shadow-lg shadow-[#087F5B]/25 hover:shadow-xl hover:shadow-[#087F5B]/40 hover:scale-105 transition-all duration-300 pointer-events-auto"
            >
              <span>{language === 'id' ? 'EKSPLORASI SELURUH ARSIP' : 'EXPLORE FULL ARCHIVE'}</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 04 / DEVELOPER STATEMENT & VERIFIED CREDENTIALS (PHOTO 3 LAYOUT) */}
      <DeveloperStatement />

      {/* 05 / EXPERIENCE PREVIEW */}
      <section className="py-24 sm:py-32 border-t border-black/10 dark:border-white/10" id="experience">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <SectionHeading
            number={t.experience.sectionNumber}
            boldPart={language === 'id' ? 'PENGALAMAN' : 'EXPERIENCE'}
            italicPart={language === 'id' ? 'rekam jejak' : 'timeline'}
            alignment="split"
            subtitle={language === 'id'
              ? "Perjalanan profesional, keterlibatan riset, dan peran kepemimpinan teknologi."
              : "Professional journey, research involvement, and technical leadership milestones."}
          />

          {/* Horizontal Timeline (Year by Year) with Direct CTA to About & Experience */}
          <HorizontalTimeline />
        </div>
      </section>

      {/* 06 / CONTACT CTA */}
      <section className="py-24 sm:py-32 border-t border-black/10 dark:border-white/10 bg-[#171C19] text-white dark:bg-[#171C19] relative overflow-hidden" id="contact">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#087F5B]/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 text-center select-none relative z-10">
          <div className="inline-flex items-center mb-6 font-poppins text-xs text-[#087F5B] uppercase tracking-widest font-bold">
            <span>INITIATE TRANSMISSION</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white max-w-4xl mx-auto leading-[0.96] mb-8">
            {language === 'id' ? (
              <>
                MARI MEMBANGUN <br />
                SESUATU YANG <span className="font-editorial-italic lowercase text-[#087F5B] font-medium">bermakna.</span>
              </>
            ) : (
              <>
                LET'S BUILD <br />
                SOMETHING <span className="font-editorial-italic lowercase text-[#087F5B] font-medium">meaningful.</span>
              </>
            )}
          </h2>

          <p className="font-body text-base text-[#A3A09B] max-w-lg mx-auto mb-10 leading-relaxed font-normal">
            {t.contact.subheadline}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="btn-pill-white text-xs"
            >
              <span>{t.hero.ctaPrimary}</span>
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </Link>

            <a
              href={`mailto:${personalData.email.replace('mailto:', '')}`}
              className="btn-pill-mode text-xs border-white/20 text-white hover:border-[#087F5B]"
            >
              <Mail className="w-3.5 h-3.5 text-[#087F5B]" />
              <span>{personalData.email.replace('mailto:', '')}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
