import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = '404 - Disappeared';
  }, []);

  return (
    <div className="min-h-screen pt-36 pb-24 bg-canvas flex flex-col justify-center items-center px-5 sm:px-8 text-center relative overflow-hidden">
      {/* Ghost Background 404 */}
      <div
        aria-hidden="true"
        className="select-none pointer-events-none absolute inset-0 flex items-center justify-center font-display font-black text-[32vw] text-black/[0.03] dark:text-white/[0.03] leading-none"
      >
        404
      </div>

      <div className="relative z-10 max-w-xl mx-auto">
        <div className="flex items-center justify-center mb-4 font-poppins text-xs font-bold text-[#087F5B] uppercase">
          <span>ROUTING EXCEPTION - 404</span>
        </div>

        <h1 className="font-display text-5xl sm:text-7xl font-black uppercase tracking-tight text-primary leading-[0.92] mb-6">
          {t.notFound.heading}
        </h1>

        <p className="font-body text-base text-secondary leading-relaxed mb-10 max-w-md mx-auto font-normal">
          {t.notFound.subheading}
        </p>

        <Link
          to="/"
          className="btn-pill-primary text-xs"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          <span>{t.notFound.backHome}</span>
        </Link>
      </div>
    </div>
  );
};
