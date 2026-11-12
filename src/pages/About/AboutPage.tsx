import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { personalData } from '@/data/personal';
import { experienceData, IExperienceItem } from '@/data/experience';
import { ImaginePoster } from '@/components/ImaginePoster/ImaginePoster';
import {
  ArrowUpRight,
  MapPin,
  Briefcase,
  Award,
  GraduationCap,
  Flag,
} from 'lucide-react';
import { motion } from 'framer-motion';

interface AboutPageProps {
  defaultSection?: 'about' | 'experience';
}

export const AboutPage: React.FC<AboutPageProps> = ({ defaultSection }) => {
  const { language, t } = useLanguage();
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  useEffect(() => {
    document.title = `${language === 'id' ? 'Tentang & Rekam Jejak' : 'About & Experience'} — ${personalData.name}`;

    if (defaultSection === 'experience' || location.hash === '#experience') {
      setTimeout(() => {
        const expEl = document.getElementById('experience');
        if (expEl) {
          expEl.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    } else {
      window.scrollTo(0, 0);
    }
  }, [defaultSection, location.hash, language]);

  const categories = ['ALL', 'MILESTONES', 'COMPETITIONS', 'PROJECTS', 'EDUCATION'];

  const filteredExperience =
    selectedCategory === 'ALL'
      ? experienceData
      : experienceData.filter((item) => item.category === selectedCategory);

  const getCategoryIcon = (cat: IExperienceItem['category']) => {
    switch (cat) {
      case 'EDUCATION':
        return GraduationCap;
      case 'COMPETITIONS':
        return Award;
      case 'MILESTONES':
        return Flag;
      default:
        return Briefcase;
    }
  };

  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-canvas min-h-screen">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* ========================================================= */}
        {/* SECTION 01: HEADER DOSSIER                                */}
        {/* ========================================================= */}
        <div className="mb-14 sm:mb-20">
          <div className="flex items-center gap-2 mb-4">
            <span className="font-poppins text-xs font-bold tracking-widest text-[#087F5B] uppercase">
              {language === 'id' ? 'DOSIR EDITORIAL & BIOGRAFI' : 'EDITORIAL DOSSIER'}
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-primary leading-tight">
                {language === 'id' ? 'TENTANG &' : 'ABOUT &'}{' '}
                <span className="highlight-block-blue tracking-tight">
                  {language === 'id' ? 'PENGALAMAN' : 'EXPERIENCE'}
                </span>
              </h1>
              <span className="font-editorial-italic font-medium text-2xl sm:text-4xl lg:text-5xl text-secondary block mt-1.5">
                {language === 'id'
                  ? 'perpaduan estetika, sistem tangguh & rekam jejak riset.'
                  : 'confluence of visual aesthetic, system defense & trajectory.'}
              </span>
            </div>

            <p className="max-w-md font-body text-sm sm:text-base text-secondary leading-relaxed font-normal">
              {personalData.introParagraph[language]}
            </p>
          </div>
        </div>

        {/* ========================================================= */}
        {/* SECTION 02: PHOTO 2 ART-DIRECTED HERO COMPOSITION          */}
        {/* Left: Imagine* Poster / Right: Manifesto & Creed          */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start my-12 sm:my-16">
          {/* Left Column (7 cols): Photo 2 Layout (Cobalt Circle + Imagine* Poster) */}
          <div className="lg:col-span-7">
            <ImaginePoster />
          </div>

          {/* Right Column (5 cols): Manifesto & Deep System Metadata */}
          <div className="lg:col-span-5 space-y-6">
            {/* Manifesto Quote Block */}
            <div className="border-l-3 border-[#087F5B] pl-5 sm:pl-6 py-2 bg-black/[0.02] dark:bg-white/[0.02] rounded-r-2xl">
              <span className="font-poppins text-xs tracking-wider text-[#087F5B] uppercase font-bold block mb-2">
                PHILOSOPHY • MANIFESTO
              </span>
              <blockquote className="font-display font-black text-xl sm:text-2xl uppercase tracking-tight text-primary leading-snug">
                "{personalData.statement[language]}"
              </blockquote>
            </div>

            {/* Narrative Story */}
            <div className="space-y-4 font-body text-sm sm:text-base text-secondary leading-relaxed font-normal">
              {personalData.aboutStory.map((paragraph, index) => (
                <p key={index}>
                  {paragraph[language]}
                </p>
              ))}
            </div>

            {/* Quick System Profile Card */}
            <div className="bg-surface p-6 border border-black/10 dark:border-white/10 rounded-2xl shadow-sm">
              <span className="font-poppins text-[10px] tracking-widest uppercase text-muted block mb-3 font-bold">
                SYSTEM TELEMETRY
              </span>
              <dl className="space-y-2.5 font-poppins text-xs">
                <div className="flex justify-between py-1 border-b border-black/5 dark:border-white/5">
                  <dt className="text-secondary font-medium">SPECIALIZATION:</dt>
                  <dd className="font-bold text-primary">Web Architecture & Cybersecurity</dd>
                </div>
                <div className="flex justify-between py-1 border-b border-black/5 dark:border-white/5">
                  <dt className="text-secondary font-medium">LOCATION:</dt>
                  <dd className="font-bold text-primary">{personalData.location}</dd>
                </div>
                <div className="flex justify-between py-1">
                  <dt className="text-secondary font-medium">STATUS:</dt>
                  <dd className="font-bold text-[#087F5B]">{personalData.status[language]}</dd>
                </div>
              </dl>
            </div>

          </div>
        </div>




        {/* ========================================================= */}
        {/* SECTION 05: UNIFIED CAREER & TIMELINE EXPERIENCE          */}
        {/* (Integrated from ExperiencePage)                          */}
        {/* ========================================================= */}
        <div className="pt-20 sm:pt-28 border-t border-black/10 dark:border-white/10" id="experience">
          <div className="mb-12 sm:mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-poppins text-xs font-bold tracking-widest text-[#087F5B] uppercase">
                {language === 'id' ? 'REKAM JEJAK' : 'EXPERIENCE'}
              </span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div>
                <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-primary leading-tight">
                  {language === 'id' ? 'PENGALAMAN &' : 'CAREER &'}{' '}
                  <span className="highlight-block-blue tracking-tight">
                    {language === 'id' ? 'LINTASAN KARIR' : 'MILESTONES'}
                  </span>
                </h2>
                <span className="font-editorial-italic font-medium text-2xl sm:text-4xl lg:text-5xl text-secondary block mt-1.5">
                  {language === 'id'
                    ? 'rekam jejak pendidikan, riset & keterlibatan industri.'
                    : 'academic milestones, research involvement & leadership.'}
                </span>
              </div>

              <p className="max-w-md font-body text-sm sm:text-base text-secondary leading-relaxed font-normal">
                {language === 'id'
                  ? 'Garis waktu kronologis yang mendokumentasikan lintasan akademis, riset, keterlibatan kompetisi, dan pencapaian rekayasa sistem.'
                  : 'A chronological trajectory documenting academic research, competition engagements, and systems engineering milestones.'}
              </p>
            </div>
          </div>

          {/* Category Filters with Pill Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-12 border-b border-black/10 dark:border-white/10 scrollbar-none flex-nowrap sm:flex-wrap">
            <span className="font-poppins text-xs uppercase text-muted mr-1 font-bold shrink-0">
              FILTER:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 font-display text-xs uppercase tracking-wider rounded-full border transition-all cursor-pointer font-bold whitespace-nowrap shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-[#087F5B] text-white border-[#087F5B] shadow-sm'
                    : 'bg-surface text-secondary border-black/10 dark:border-white/10 hover:border-[#087F5B] hover:text-[#087F5B]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quiet Editorial Timeline */}
          <div className="relative border-l-2 border-black/15 dark:border-white/15 ml-3 sm:ml-6 space-y-12 pl-6 sm:pl-10">
            {filteredExperience.map((item) => {
              const Icon = getCategoryIcon(item.category);
              return (
                <div key={item.id} className="relative group">
                  {/* Timeline node */}
                  <span className="absolute -left-[33px] sm:-left-[49px] top-1.5 w-4 h-4 rounded-full bg-surface border-2 border-[#087F5B] group-hover:bg-[#087F5B] transition-colors shadow-sm" />

                  {/* Date and category */}
                  <div className="flex flex-wrap items-center gap-3 mb-2 font-poppins text-xs font-semibold">
                    <span className="text-[#087F5B] font-black">
                      {item.year}
                    </span>
                    <span className="text-muted">•</span>
                    <span className="px-3 py-0.5 bg-subtle border border-black/5 dark:border-white/5 uppercase text-muted rounded-full font-bold">
                      {item.category}
                    </span>
                  </div>

                  {/* Role and Organization */}
                  <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-primary mb-1">
                    {item.role[language]}
                  </h3>

                  <div className="flex items-center gap-2 font-poppins text-xs text-secondary mb-4 font-semibold">
                    <span className="text-primary font-bold">{item.organization}</span>
                    <span>-</span>
                    <span className="flex items-center gap-1 text-muted">
                      <MapPin className="w-3 h-3 text-[#087F5B]" />
                      {item.location}
                    </span>
                  </div>

                  <p className="max-w-2xl font-poppins text-sm sm:text-base text-secondary leading-relaxed mb-4 font-normal">
                    {item.description[language]}
                  </p>

                  {/* Highlights if any */}
                  {item.highlights && item.highlights.length > 0 && (
                    <ul className="space-y-1.5 font-poppins text-xs text-secondary/90 mb-4 max-w-xl font-medium">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="flex items-baseline gap-2">
                          <span className="text-[#087F5B] font-black">↳</span>
                          <span>{h[language]}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Skill tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className="font-poppins text-[10px] font-semibold px-3 py-1 bg-subtle border border-black/5 dark:border-white/5 text-muted rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* SECTION 06: CALL TO ACTION STRIP                          */}
        {/* ========================================================= */}
        <div className="mt-24 pt-10 border-t border-black/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl font-black uppercase tracking-tight text-primary">
              {t.nav.letsWorkTogether}
            </h3>
            <p className="font-body text-sm text-secondary mt-1">
              {personalData.status[language]}
            </p>
          </div>
          <Link
            to="/contact"
            className="btn-pill-primary text-xs"
          >
            <span>{t.contact.sendButton}</span>
            <ArrowUpRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

      </div>
    </div>
  );
};
