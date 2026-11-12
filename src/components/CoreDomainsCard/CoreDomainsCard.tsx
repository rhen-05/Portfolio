import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowUpRight, Crosshair, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const CoreDomainsCard: React.FC = () => {
  const { language } = useLanguage();

  const cards = [
    {
      num: '01',
      title: 'Problem Solver',
      badgeBg: 'bg-[#087F5B] text-white',
      cardStyle:
        'bg-white dark:bg-[#171C19] text-primary border border-black/10 dark:border-white/10 ring-4 ring-black/[0.04] dark:ring-white/[0.06] shadow-[0_16px_36px_rgba(0,0,0,0.06)] dark:shadow-[0_16px_36px_rgba(0,0,0,0.45)]',
      titleColor: 'text-primary',
      descColor: 'text-secondary',
      iconBox: 'bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-[#087F5B]',
      icon: Crosshair,
      offsetClass: 'sm:translate-y-0',
      desc: {
        id: 'Membedah batasan masalah teknis, mengisolasi anomali sistemik, dan merumuskan solusi deterministik yang terukur.',
        en: 'Deconstructing technical constraints, isolating systemic anomalies, and engineering deterministic solutions.',
      },
    },
    {
      num: '02',
      title: 'Critical Thinking',
      badgeBg: 'bg-white text-[#171C19] dark:bg-[#087F5B] dark:text-white',
      cardStyle:
        'bg-[#171C19] dark:bg-[#171C19] text-white border border-white/10 ring-4 ring-black/10 dark:ring-white/[0.08] shadow-[0_20px_42px_rgba(0,0,0,0.28)]',
      titleColor: 'text-white',
      descColor: 'text-white/75',
      iconBox: 'bg-white/10 border border-white/20 text-white',
      icon: ShieldCheck,
      offsetClass: 'sm:translate-y-7 lg:translate-y-8',
      desc: {
        id: 'Menguji ketahanan arsitektur, mengaudit vektor celah keamanan, dan menolak solusi instan demi keandalan penuh.',
        en: 'Validating architecture resilience, auditing security vectors, and eliminating blind spots with zero-trust rigor.',
      },
    },
    {
      num: '03',
      title: 'Creative Developer',
      badgeBg: 'bg-white text-[#087F5B]',
      cardStyle:
        'bg-[#087F5B] text-white border border-[#087F5B]/30 ring-4 ring-[#087F5B]/20 shadow-[0_20px_46px_rgba(8,127,91,0.36)]',
      titleColor: 'text-white',
      descColor: 'text-white/85',
      iconBox: 'bg-white/20 border border-white/30 text-white',
      icon: Sparkles,
      offsetClass: 'sm:translate-y-0',
      desc: {
        id: 'Mengeksekusi kode menjadi antarmuka digital 60 FPS yang berpresisi tipografi editorial dan berestetika premium.',
        en: 'Synthesizing code into fluid 60 FPS digital surfaces with Swiss typographic rigor and premium editorial craft.',
      },
    },
  ];

  return (
    <div className="w-full select-none pt-2 pb-2">
      {/* 1. Section Header (Mobile: Natural Left Alignment / Desktop: Original Right Alignment) */}
      <div className="flex flex-col items-start text-left sm:items-end sm:text-right mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-2 mb-2">
          <span className="font-poppins text-xs font-bold tracking-widest text-[#087F5B] uppercase">
            {language === 'id' ? 'METODOLOGI EKSEKUSI' : 'CORE METHODOLOGY'}
          </span>
        </div>

        <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-primary leading-[1.08] max-w-xl">
          {language === 'id' ? (
            <>
              SISTEM DETERMINISTIK{' '}
              <span className="highlight-block-blue tracking-tight">PRESISI EDITORIAL</span>
            </>
          ) : (
            <>
              DETERMINISTIC SYSTEMS{' '}
              <span className="highlight-block-blue tracking-tight">EDITORIAL CLARITY</span>
            </>
          )}
        </h3>

        <p className="font-body text-xs sm:text-sm text-secondary leading-relaxed mt-3 max-w-md font-normal">
          {language === 'id'
            ? 'Setiap antarmuka dan arsitektur dibangun melalui siklus deterministik: membedah masalah teknis, mengamankan aliran data, dan mengeksekusinya ke kanvas digital.'
            : 'Every interface and architecture is forged through a deterministic cycle: dissecting core constraints, securing data flow, and executing high-rigor digital surfaces.'}
        </p>
      </div>

      {/* 2. 3 Process Cards Container with Alternating Stagger & Curved Flow Arrows */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-8 sm:gap-2 lg:gap-3 pt-4 pb-2 sm:pb-8">
        
        {/* Card 01 */}
        <motion.div
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 350, damping: 20 }}
          className={`relative w-full sm:w-[31%] rounded-[26px] p-5 sm:p-5 lg:p-6 flex flex-col justify-between min-h-[225px] sm:min-h-[255px] transition-all duration-300 ${cards[0].cardStyle} ${cards[0].offsetClass}`}
        >
          {/* Top-Left Floating Circle Badge */}
          <div
            className={`absolute -top-4 left-5 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center font-mono font-black text-xs shadow-md ring-4 ring-white dark:ring-[#171C19] ${cards[0].badgeBg}`}
          >
            {cards[0].num}
          </div>

          <div className="pt-2">
            <h4
              className={`font-display font-black text-base sm:text-[17px] uppercase tracking-tight leading-snug ${cards[0].titleColor}`}
            >
              {cards[0].title}
            </h4>
            <p
              className={`font-body text-xs sm:text-[11px] lg:text-xs leading-relaxed mt-2.5 font-normal ${cards[0].descColor}`}
            >
              {cards[0].desc[language]}
            </p>
          </div>

          {/* Bottom Right Emblem Icon */}
          <div className="flex justify-end pt-4">
            <div className={`p-2 rounded-xl ${cards[0].iconBox}`}>
              <Crosshair className="w-4 h-4 stroke-[2.2]" />
            </div>
          </div>
        </motion.div>

        {/* Curved Arrow 01 ➔ 02 (Swooping Downward) */}
        <div className="flex items-center justify-center shrink-0 sm:pt-16 text-[#087F5B]">
          {/* Desktop Curved Down Arrow with clean visible swoop */}
          <svg
            className="hidden sm:block w-8 h-8 lg:w-10 lg:h-10 -mx-1"
            viewBox="0 0 50 50"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M 6 12 C 26 10, 38 22, 40 38"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="4 3"
            />
            <path
              d="M 31 35 L 40 40 L 43 30"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </svg>

          {/* Mobile Downward Arrow */}
          <svg
            className="sm:hidden w-6 h-6 rotate-90"
            viewBox="0 0 44 44"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M 8 22 L 34 22"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M 26 14 L 34 22 L 26 30"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Card 02 */}
        <motion.div
          whileHover={{ y: 2, scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 350, damping: 20 }}
          className={`relative w-full sm:w-[31%] rounded-[26px] p-5 sm:p-5 lg:p-6 flex flex-col justify-between min-h-[225px] sm:min-h-[255px] transition-all duration-300 ${cards[1].cardStyle} ${cards[1].offsetClass}`}
        >
          {/* Top-Left Floating Circle Badge */}
          <div
            className={`absolute -top-4 left-5 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center font-mono font-black text-xs shadow-md ring-4 ring-white dark:ring-[#171C19] ${cards[1].badgeBg}`}
          >
            {cards[1].num}
          </div>

          <div className="pt-2">
            <h4
              className={`font-display font-black text-base sm:text-[17px] uppercase tracking-tight leading-snug ${cards[1].titleColor}`}
            >
              {cards[1].title}
            </h4>
            <p
              className={`font-body text-xs sm:text-[11px] lg:text-xs leading-relaxed mt-2.5 font-normal ${cards[1].descColor}`}
            >
              {cards[1].desc[language]}
            </p>
          </div>

          {/* Bottom Right Emblem Icon */}
          <div className="flex justify-end pt-4">
            <div className={`p-2 rounded-xl ${cards[1].iconBox}`}>
              <ShieldCheck className="w-4 h-4 stroke-[2.2]" />
            </div>
          </div>
        </motion.div>

        {/* Curved Arrow 02 ➔ 03 (Swooping Upward) */}
        <div className="flex items-center justify-center shrink-0 sm:pt-6 text-[#087F5B]">
          {/* Desktop Curved Up Arrow with clean visible swoop */}
          <svg
            className="hidden sm:block w-8 h-8 lg:w-10 lg:h-10 -mx-1"
            viewBox="0 0 50 50"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M 6 38 C 20 28, 32 18, 40 12"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="4 3"
            />
            <path
              d="M 30 16 L 41 10 L 38 22"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </svg>

          {/* Mobile Downward Arrow */}
          <svg
            className="sm:hidden w-6 h-6 rotate-90"
            viewBox="0 0 44 44"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M 8 22 L 34 22"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M 26 14 L 34 22 L 26 30"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Card 03 */}
        <motion.div
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 350, damping: 20 }}
          className={`relative w-full sm:w-[31%] rounded-[26px] p-5 sm:p-5 lg:p-6 flex flex-col justify-between min-h-[225px] sm:min-h-[255px] transition-all duration-300 ${cards[2].cardStyle} ${cards[2].offsetClass}`}
        >
          {/* Top-Left Floating Circle Badge */}
          <div
            className={`absolute -top-4 left-5 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center font-mono font-black text-xs shadow-md ring-4 ring-white dark:ring-[#171C19] ${cards[2].badgeBg}`}
          >
            {cards[2].num}
          </div>

          <div className="pt-2">
            <h4
              className={`font-display font-black text-base sm:text-[17px] uppercase tracking-tight leading-snug ${cards[2].titleColor}`}
            >
              {cards[2].title}
            </h4>
            <p
              className={`font-body text-xs sm:text-[11px] lg:text-xs leading-relaxed mt-2.5 font-normal ${cards[2].descColor}`}
            >
              {cards[2].desc[language]}
            </p>
          </div>

          {/* Bottom Right Emblem Icon */}
          <div className="flex justify-end pt-4">
            <div className={`p-2 rounded-xl ${cards[2].iconBox}`}>
              <Sparkles className="w-4 h-4 stroke-[2.2]" />
            </div>
          </div>
        </motion.div>

      </div>

      {/* Action CTA link beneath the 3 cards with ample breathing room */}
      <div className="pt-10 sm:pt-14 flex items-center justify-center sm:justify-end">
        <Link
          to="/about"
          className="btn-pill-primary text-xs inline-flex items-center gap-2"
        >
          <span>
            {language === 'id' ? 'BACA MANIFESTO & PENGALAMAN' : 'EXPLORE FULL MANIFESTO'}
          </span>
          <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
        </Link>
      </div>
    </div>
  );
};


