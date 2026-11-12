import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { experienceData, IExperienceItem } from '@/data/experience';
import { SectionHeading } from '@/components/SectionHeading/SectionHeading';
import { MapPin, Briefcase, Award, GraduationCap, Flag } from 'lucide-react';

export const ExperiencePage: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Experience - Rhanendra Pradipta';
  }, []);

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
    <div className="pt-28 sm:pt-36 pb-28 bg-canvas min-h-screen">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          number={t.experience.sectionNumber}
          boldPart={language === 'id' ? 'REKAM JEJAK' : 'CAREER'}
          italicPart={language === 'id' ? 'lintasan karir' : 'timeline & milestones'}
          subtitle={language === 'id'
            ? "Garis waktu tenang yang mendokumentasikan lintasan akademis, riset, keterlibatan kompetisi, dan pencapaian rekayasa sistem."
            : "A chronological trajectory documenting academic research, competition engagements, and systems engineering milestones."}
          alignment="split"
        />

        {/* Category Filters with Pill Buttons */}
        <div className="flex flex-wrap items-center gap-2.5 mb-16 border-b border-black/10 dark:border-white/10 pb-5">
          <span className="font-poppins text-xs uppercase text-muted mr-2 font-bold">
            FILTER TIMELINE:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 font-display text-xs uppercase tracking-wider rounded-full border transition-all cursor-pointer font-bold ${
                selectedCategory === cat
                  ? 'bg-[#2238FF] text-white border-[#2238FF] shadow-sm'
                  : 'bg-white/80 dark:bg-black/60 text-secondary border-black/10 dark:border-white/10 hover:border-[#2238FF] hover:text-[#2238FF]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Quiet Editorial Timeline */}
        <div className="relative border-l-2 border-black/15 dark:border-white/15 ml-3 sm:ml-6 space-y-14 pl-6 sm:pl-10">
          {filteredExperience.map((item) => {
            const Icon = getCategoryIcon(item.category);
            return (
              <div key={item.id} className="relative group">
                {/* Timeline node */}
                <span className="absolute -left-[33px] sm:-left-[49px] top-1.5 w-4 h-4 rounded-full bg-surface border-2 border-[#2238FF] group-hover:bg-[#2238FF] transition-colors shadow-sm" />

                {/* Date and category */}
                <div className="flex flex-wrap items-center gap-3 mb-2 font-poppins text-xs font-semibold">
                  <span className="text-[#2238FF] font-black">
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
                    <MapPin className="w-3 h-3 text-[#2238FF]" />
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
                        <span className="text-[#2238FF] font-black">↳</span>
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
    </div>
  );
};
