import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { experienceData, IExperienceItem } from '@/data/experience';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const HorizontalTimeline: React.FC = () => {
  const { language } = useLanguage();

  // Chronological order from earliest to current milestone (2021 -> 2022 -> 2023 -> 2024)
  const sortedExperiences = [...experienceData].reverse();

  // Simple, concise titles without clutter
  const getSimpleTitle = (item: IExperienceItem) => {
    switch (item.id) {
      case 'exp-4':
        return language === 'id' ? 'Teknik Informatika' : 'Computer Science Studies';
      case 'exp-3':
        return 'Frontend Engineer & UI Specialist';
      case 'exp-2':
        return language === 'id' ? 'Finalis CTF Keamanan Siber' : 'Cybersecurity CTF Finalist';
      case 'exp-1':
        return language === 'id' ? 'Creative Developer & Researcher' : 'Creative Developer & Researcher';
      default:
        return item.role[language];
    }
  };

  const getYearTag = (item: IExperienceItem) => {
    switch (item.id) {
      case 'exp-4':
        return '2021';
      case 'exp-3':
        return '2022';
      case 'exp-2':
        return '2023';
      case 'exp-1':
        return '2024';
      default:
        return item.year.split(' ')[0];
    }
  };

  return (
    <div className="w-full">
      {/* Pure Horizontal Timeline Track (Desktop: 100% Unchanged / Mobile: Dedicated Vertical Flow) */}
      <div className="my-8 sm:my-14">
        {/* MOBILE ONLY (sm:hidden): ELEGANT VERTICAL MILESTONE TIMELINE */}
        <div className="sm:hidden relative border-l-2 border-[#087F5B]/30 ml-4 pl-6 space-y-7 my-6">
          {sortedExperiences.map((exp, idx) => {
            const isLatest = idx === sortedExperiences.length - 1;
            const yearTag = getYearTag(exp);
            const simpleTitle = getSimpleTitle(exp);

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                className="relative flex flex-col items-start text-left group"
              >
                {/* Node on Vertical Line */}
                <div className="absolute -left-[31px] top-1">
                  {isLatest ? (
                    <div className="relative flex items-center justify-center">
                      <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-[#087F5B] opacity-40" />
                      <div className="w-4 h-4 rounded-full bg-[#087F5B] border-2 border-white dark:border-[#171C19] flex items-center justify-center shadow-md">
                        <span className="w-1 h-1 rounded-full bg-white" />
                      </div>
                    </div>
                  ) : (
                    <div className="w-3.5 h-3.5 rounded-full bg-surface border-2 border-[#087F5B]/50 flex items-center justify-center">
                      <span className="w-1 h-1 rounded-full bg-[#087F5B]" />
                    </div>
                  )}
                </div>

                {/* Milestone Content */}
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={`font-mono text-xs font-black tracking-wider px-2 py-0.5 rounded-md ${
                      isLatest
                        ? 'bg-[#087F5B] text-white shadow-xs'
                        : 'bg-black/5 dark:bg-white/5 text-primary'
                    }`}
                  >
                    {yearTag}
                  </span>
                  {isLatest && (
                    <span className="font-poppins text-[10px] font-bold text-[#087F5B] uppercase tracking-wider">
                      {language === 'id' ? 'KARYA TERBARU' : 'LATEST FOCUS'}
                    </span>
                  )}
                </div>

                <h4 className="font-display font-black text-sm uppercase tracking-tight text-primary leading-snug mt-0.5">
                  {simpleTitle}
                </h4>

                {exp.organization && (
                  <span className="font-poppins text-xs text-secondary mt-0.5">
                    {exp.organization} • {exp.location}
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* DESKTOP ONLY (hidden on mobile, unchanged sm:grid) */}
        <div className="hidden sm:grid sm:grid-cols-4 gap-2">
          {sortedExperiences.map((exp, idx) => {
            const isLatest = idx === sortedExperiences.length - 1;
            const yearTag = getYearTag(exp);
            const simpleTitle = getSimpleTitle(exp);

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="min-w-0 flex-1 relative flex flex-col items-center text-center group cursor-default"
              >
                {/* 1. BAGIAN ATAS TITIK: TAHUN */}
                <div className="h-8 flex items-end justify-center mb-3">
                  <span
                    className={`font-mono text-sm sm:text-base font-black tracking-tight transition-colors ${
                      isLatest
                        ? 'text-[#087F5B]'
                        : 'text-secondary group-hover:text-primary'
                    }`}
                  >
                    {yearTag}
                  </span>
                </div>

                {/* 2. TITIK (DOT) & GARIS PENGHUBUNG HORIZONTAL */}
                <div className="relative w-full flex items-center justify-center h-7">
                  {/* Connecting horizontal line to the next dot */}
                  {idx < sortedExperiences.length - 1 && (
                    <div
                      className={`absolute left-1/2 w-full h-[2px] top-1/2 -translate-y-1/2 z-0 pointer-events-none ${
                        idx === sortedExperiences.length - 2
                          ? 'bg-gradient-to-r from-black/15 via-[#087F5B]/30 to-[#087F5B] dark:from-white/15 dark:via-[#087F5B]/40 dark:to-[#087F5B]'
                          : 'bg-black/15 dark:bg-white/15'
                      }`}
                      aria-hidden="true"
                    />
                  )}

                  {/* Dot Node */}
                  <div className="relative z-10">
                    {isLatest ? (
                      <div className="relative flex items-center justify-center">
                        <span className="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-[#087F5B] opacity-35" />
                        <div className="w-5 h-5 rounded-full bg-[#087F5B] border-2 border-white dark:border-[#171C19] flex items-center justify-center shadow-[0_0_12px_rgba(8,127,91,0.6)] group-hover:scale-125 transition-transform duration-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-white" />
                        </div>
                      </div>
                    ) : (
                      <div className="w-4 h-4 rounded-full bg-background border-2 border-black/25 dark:border-white/30 flex items-center justify-center group-hover:border-[#087F5B] group-hover:scale-125 transition-all duration-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-black/40 dark:bg-white/40 group-hover:bg-[#087F5B] transition-colors duration-300" />
                      </div>
                    )}
                  </div>
                </div>

                {/* 3. BAGIAN BAWAH TITIK: JUDUL */}
                <div className="mt-4 px-2 max-w-[200px] sm:max-w-[220px]">
                  <h4 className="font-display font-black text-xs sm:text-sm uppercase tracking-tight text-primary leading-snug group-hover:text-[#087F5B] transition-colors duration-300">
                    {simpleTitle}
                  </h4>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Tombol Di Bawah Garis Waktu Menuju Halaman About & Experience */}
      <div className="mt-12 sm:mt-16 text-center">
        <Link
          to="/about#experience"
          className="btn-pill-primary text-xs sm:text-sm inline-flex items-center gap-2.5 py-3 px-7 shadow-sm hover:shadow-md"
        >
          <span>
            {language === 'id' ? 'BACA PENGALAMAN LENGKAP' : 'READ COMPLETE EXPERIENCE'}
          </span>
          <ArrowRight className="w-4 h-4 stroke-[2.5] group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};
