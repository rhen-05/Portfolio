import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { skillCategories } from '@/data/skills';
import { motion } from 'framer-motion';
import { Terminal, Shield, Sparkles, Layers, LucideIcon } from 'lucide-react';
import { TechIcon } from '@/components/TechIcon/TechIcon';

export const Expertise: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>(skillCategories[0].id);

  const categoryIcons: Record<string, LucideIcon> = {
    frontend: Sparkles,
    backend: Layers,
    tools: Terminal,
    security: Shield,
  };

  const currentCategory = skillCategories.find((c) => c.id === activeCategory) || skillCategories[0];
  const displayedSkills = currentCategory.skills;

  return (
    <section className="py-24 sm:py-32 bg-[#087F5B] text-white relative overflow-hidden select-none" id="expertise">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header: Proportional Bold Typography */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="font-poppins text-xs font-bold tracking-widest text-white/80 uppercase">
              CORE MATRIX
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-tight">
                {language === 'id' ? 'ARSITEKTUR' : 'TECHNICAL'}{' '}
                <span className="bg-white text-[#087F5B] px-3 sm:px-4 py-0.5 rounded-xl inline-block tracking-tight shadow-md">
                  {language === 'id' ? 'KAPABILITAS' : 'EXPERTISE'}
                </span>
              </h2>
              <span className="font-editorial-italic font-medium text-2xl sm:text-4xl lg:text-5xl text-white/95 block mt-1.5">
                {language === 'id' ? 'presisi & deterministik.' : 'rigor, security & craft.'}
              </span>
            </div>

            <p className="max-w-md font-body text-sm sm:text-base text-white/90 leading-relaxed font-normal">
              {t.expertise.subtext}
            </p>
          </div>
        </div>

        {/* Category Pills - Centered */}
        <div className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-3 mb-12 border-b border-white/20 pb-6">
          {skillCategories.map((cat) => {
            const Icon = categoryIcons[cat.id] || Sparkles;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full font-poppins text-xs uppercase tracking-wider font-semibold flex items-center gap-2.5 border transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-white text-[#087F5B] border-white shadow-[0_4px_20px_rgba(0,0,0,0.2)] scale-[1.02]'
                    : 'bg-white/10 text-white/90 border-white/20 hover:bg-white/20 hover:text-white'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#087F5B]' : 'text-white'}`} />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Full-Width Skills Grid in #171C19 Dark Background */}
        <div>
          {displayedSkills.length === 0 ? (
            <div className="p-12 text-center bg-[#171C19] border border-white/10 rounded-2xl">
              <p className="font-poppins text-sm text-white/80 font-medium">
                {language === 'id' ? 'Tidak ada teknologi yang cocok.' : 'No technologies matched your query.'}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {displayedSkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ y: -3, scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  className="bg-[#171C19] text-white px-5 py-4 rounded-2xl shadow-[0_6px_22px_rgba(0,0,0,0.25)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.45)] transition-all duration-200 flex items-center justify-between gap-3.5 border border-white/10 select-none cursor-default group"
                >
                  {/* Left: Icon & Name */}
                  <div className="flex items-center gap-3.5 min-w-0 flex-1">
                    <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-2 shrink-0 group-hover:scale-105 transition-transform">
                      <TechIcon name={skill.name} size={28} />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-display font-black text-base sm:text-[17px] tracking-tight leading-snug text-white group-hover:text-emerald-400 transition-colors truncate">
                        {skill.name}
                      </span>
                      <span className="font-poppins text-[10px] font-bold text-emerald-400 uppercase tracking-wider mt-0.5 sm:hidden">
                        {skill.proficiency}
                      </span>
                    </div>
                  </div>

                  {/* Right: Proficiency Badge */}
                  <span className="hidden sm:inline-block font-poppins text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#087F5B]/25 text-emerald-300 border border-[#087F5B]/35 uppercase tracking-wider shrink-0">
                    {skill.proficiency}
                  </span>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
