import React from 'react';

interface ISectionHeadingProps {
  number: string;
  title?: string;
  boldPart?: string;
  italicPart?: string;
  subtitle?: string;
  accentWord?: string;
  alignment?: 'left' | 'split' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<ISectionHeadingProps> = ({
  number,
  title,
  boldPart,
  italicPart,
  subtitle,
  accentWord,
  alignment = 'left',
  className = '',
}) => {
  // Render dual-style title (Ultra-bold geometric sans + Flowing Playfair Display italic)
  const renderTitle = () => {
    if (boldPart && italicPart) {
      return (
        <span className="inline-flex items-baseline flex-wrap gap-x-3 sm:gap-x-4 leading-tight">
          <span className="font-display font-black uppercase text-primary tracking-tighter text-3xl sm:text-4xl lg:text-5xl">
            {boldPart}
          </span>
          <span className="font-editorial-italic lowercase text-[#087F5B] tracking-tight text-3xl sm:text-4xl lg:text-5xl font-semibold">
            {italicPart}
          </span>
        </span>
      );
    }

    if (!title) return null;

    if (!accentWord) {
      const words = title.trim().split(' ');
      if (words.length >= 2) {
        const lastWord = words[words.length - 1];
        const firstWords = words.slice(0, words.length - 1).join(' ');
        return (
          <span className="inline-flex items-baseline flex-wrap gap-x-3 sm:gap-x-4 leading-tight">
            <span className="font-display font-black uppercase text-primary tracking-tighter text-3xl sm:text-4xl lg:text-5xl">
              {firstWords}
            </span>
            <span className="font-editorial-italic lowercase text-[#087F5B] tracking-tight text-3xl sm:text-4xl lg:text-5xl font-semibold">
              {lastWord}
            </span>
          </span>
        );
      }
      return <span className="font-display font-black uppercase text-primary">{title}</span>;
    }

    const parts = title.split(new RegExp(`(${accentWord})`, 'gi'));
    return (
      <span className="inline-flex items-baseline flex-wrap gap-x-2 leading-tight">
        {parts.map((part, i) =>
          part.toLowerCase() === accentWord.toLowerCase() ? (
            <span key={i} className="font-editorial-italic lowercase text-[#087F5B] tracking-tight text-3xl sm:text-4xl lg:text-5xl font-semibold">
              {part}
            </span>
          ) : (
            <span key={i} className="font-display font-black uppercase tracking-tighter text-3xl sm:text-4xl lg:text-5xl text-primary">
              {part}
            </span>
          )
        )}
      </span>
    );
  };

  // Format section tag into clean uppercase name without leading dash
  const formatSectionTag = (raw: string) => {
    const cleaned = raw.replace(/^[-—\s]*\d*\s*[-—\s]*/, '').replace(/^[-—\s]+/, '').trim();
    return cleaned;
  };

  if (alignment === 'split') {
    return (
      <div className={`mb-12 md:mb-16 border-b border-black/10 dark:border-white/10 pb-6 ${className}`}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-poppins text-xs font-bold tracking-widest text-[#087F5B] uppercase">
                {formatSectionTag(number)}
              </span>
            </div>
            <h2 className="tracking-tight leading-tight">
              {renderTitle()}
            </h2>
          </div>
          {subtitle && (
            <p className="max-w-md font-body text-sm sm:text-base text-secondary leading-relaxed font-normal">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    );
  }

  if (alignment === 'center') {
    return (
      <div className={`mb-12 md:mb-16 text-center max-w-3xl mx-auto ${className}`}>
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="font-poppins text-xs font-bold tracking-widest text-[#087F5B] uppercase">
            {formatSectionTag(number)}
          </span>
        </div>
        <h2 className="tracking-tight leading-tight">
          {renderTitle()}
        </h2>
        {subtitle && (
          <p className="mt-4 font-body text-sm sm:text-base text-secondary leading-relaxed max-w-xl mx-auto font-normal">
            {subtitle}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className={`mb-12 md:mb-16 ${className}`}>
      <div className="flex items-center gap-2 mb-3">
        <span className="font-poppins text-xs font-bold tracking-widest text-[#087F5B] uppercase">
          {formatSectionTag(number)}
        </span>
      </div>
      <h2 className="tracking-tight leading-tight max-w-4xl">
        {renderTitle()}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-xl font-body text-sm sm:text-base text-secondary leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
      <div className="mt-6 w-full h-[1px] bg-black/10 dark:bg-white/10" />
    </div>
  );
};
