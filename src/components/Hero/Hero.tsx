import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { personalData } from '@/data/personal';
import { motion, Variants } from 'framer-motion';
import heroBgVideo from '../video/hero-bg.mp4';

interface TypewriterTextProps {
  language: 'id' | 'en';
  prefix?: string;
  cursorClassName?: string;
}

// Isolated memoized Typewriter: prevents the heavy Hero DOM tree from re-rendering on every letter typed
const TypewriterText: React.FC<TypewriterTextProps> = React.memo(({
  language,
  prefix = '',
  cursorClassName = 'w-[3px] md:w-[4px] lg:w-[5px] h-[0.72em] bg-[#087F5B] ml-2',
}) => {
  const words = React.useMemo(() => {
    return language === 'id' ? ['kreatif'] : ['creative'];
  }, [language]);

  const [wordIndex, setWordIndex] = React.useState(0);
  const [displayText, setDisplayText] = React.useState('');
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    setWordIndex(0);
    setDisplayText('');
    setIsDeleting(false);
  }, [language]);

  React.useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    const typingSpeed = 110;
    const deletingSpeed = 55;
    const pauseEnd = 2000;
    const pauseStart = 350;

    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (displayText.length < currentWord.length) {
        timer = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseEnd);
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length - 1));
        }, deletingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }, pauseStart);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex, words]);

  return (
    <span className="inline-flex items-center align-middle whitespace-nowrap">
      <span>{prefix}{displayText}</span>
      <span
        className={`inline-block align-middle typewriter-cursor ${cursorClassName}`}
        aria-hidden="true"
      />
    </span>
  );
});
TypewriterText.displayName = 'TypewriterText';

export const Hero: React.FC = () => {
  const { language } = useLanguage();
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const heroSectionRef = React.useRef<HTMLElement>(null);

  // Performance Optimization: Pause video when scrolled out of view or tab is hidden
  React.useEffect(() => {
    const video = videoRef.current;
    const section = heroSectionRef.current;
    if (!video || !section) return;

    // Use IntersectionObserver to pause rendering when hero is not visible
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(section);

    const handleVisibility = () => {
      if (document.hidden) {
        video.pause();
      } else {
        const rect = section.getBoundingClientRect();
        if (rect.bottom > 0 && rect.top < window.innerHeight) {
          video.play().catch(() => {});
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] as const },
    },
  };

  return (
    <section
      ref={heroSectionRef}
      className="relative pt-24 sm:pt-28 md:pt-32 pb-0 mb-0 overflow-hidden bg-canvas transform-gpu"
    >
      {/* 0. HERO BACKGROUND VIDEO (Hardware accelerated, Zero-lag performance) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none transform-gpu">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          disablePictureInPicture
          disableRemotePlayback
          aria-hidden="true"
          className="w-full h-full object-cover opacity-60 dark:opacity-45 transform-gpu will-change-transform"
        >
          {/* Static public asset first for fast streaming, fallback to imported asset */}
          <source src="/assets/video/hero-bg.mp4" type="video/mp4" />
          <source src={heroBgVideo} type="video/mp4" />
        </video>

        {/* Multi-stage Cinematic Overlay: Pure CSS alpha gradient without heavy GPU backdrop-filter */}
        <div className="absolute inset-0 bg-gradient-to-b from-canvas/35 via-canvas/60 to-canvas dark:from-[#171C19]/45 dark:via-[#171C19]/70 dark:to-[#171C19] pointer-events-none" />
      </div>

      <div className="w-full max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pb-0 mb-0 z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative w-full mx-auto flex flex-col items-center select-none pb-0 mb-0"
        >
          {/* DESKTOP/TABLET (>= md): ARCHITECTURAL HERO STAGE WITH OVERLAID TYPOGRAPHY (PHOTO 1 AESTHETIC) */}
          <div className="hidden md:flex relative w-full min-h-[580px] lg:min-h-[640px] xl:min-h-[680px] flex-col justify-between pb-8 sm:pb-12 lg:pb-14 mb-0">
            
            {/* 1. CENTRAL PORTRAIT: Placed at z-10 behind the typography (No frame, no grey background, original colors) */}
            <motion.div
              variants={itemVariants}
              className="absolute top-2 md:top-4 bottom-0 left-1/2 -translate-x-1/2 z-31 w-72 sm:w-80 md:w-[310px] lg:w-[350px] xl:w-[375px] flex flex-col justify-end items-center pointer-events-none"
            >
              <div className="relative w-full h-full flex items-end justify-center">
                <img
                  src={personalData.heroImage}
                  alt={personalData.name}
                  className="w-full h-full object-contain object-bottom hover:scale-[1.02] transition-transform duration-700 pointer-events-auto"
                  loading="eager"
                  decoding="async"
                />

                {/* Pill Button: [ LET'S CHAT ] positioned on lower torso */}
                <div className="absolute bottom-8 sm:bottom-10 lg:bottom-12 left-1/2 -translate-x-1/2 z-40 pointer-events-auto">
                  <Link
                    to="/contact"
                    className="btn-pill-primary px-8 py-3.5 text-xs font-poppins tracking-widest uppercase shadow-xl whitespace-nowrap"
                  >
                    <span>{language === 'id' ? "MARI BICARA" : "LET'S CHAT"}</span>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* 2. OVERLAID TYPOGRAPHY FRAME (z-30): Positioned ON TOP OF the photo so text is never obscured */}
            <motion.div
              variants={itemVariants}
              className="absolute top-8 sm:top-10 md:top-12 lg:top-14 inset-x-0 z-30 flex flex-col items-center pointer-events-none select-none"
            >
              {/* Row 1 (Top): Symmetrical flanking around the center portrait head */}
              <div className="w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto flex items-center justify-center px-4 sm:px-6 lg:px-8">
                {/* Left side: "I'm" - bisa digeser dengan 'left-[...px]' (misal: left-35 atau left-[140px]) */}
                <div className="flex-1 flex justify-end">
                  <span className="relative left-20 sm:left-28 md:left-35 font-editorial-italic text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-primary tracking-tight leading-none drop-shadow-sm transition-colors duration-200">
                    I'm
                  </span>
                </div>

                {/* Center head clearance spacer - matching the portrait head width */}
                <div className="w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72 shrink-0 pointer-events-none" />

                {/* Right side: Typewriter text expanding naturally to the right with comfortable clearance */}
                <div className="flex-1 flex justify-start pl-10 sm:pl-14 md:pl-16 lg:pl-20 xl:pl-24">
                  <span className="font-editorial-italic text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-primary tracking-tight leading-none drop-shadow-sm transition-colors duration-200 inline-flex items-center text-left whitespace-nowrap">
                    <TypewriterText language={language} />
                  </span>
                </div>
              </div>

              {/* Row 2 (Bottom): "DEVELOPER" in massive bold electric blue across the chest/center */}
              <h1 className="font-display font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10.5rem] uppercase tracking-tighter text-[#087F5B] leading-[0.88] text-center w-full mt-1 lg:mt-2 drop-shadow-sm">
                DEVELOPER
              </h1>
            </motion.div>

            {/* Spacer top row to keep layout height intact */}
            <div className="w-full h-16 pointer-events-none" />

            {/* 4. FLANKING INFO STRIP: Symmetrical under left and right typography */}
            <div className="w-full flex items-end justify-between z-30 pt-4">
              {/* Left Block: Accent line + specialized text */}
              <motion.div
                variants={itemVariants}
                className="w-56 lg:w-64 xl:w-72 space-y-2.5"
              >
                <div className="w-8 h-[2px] bg-primary" />
                <p className="font-poppins text-[11px] lg:text-xs tracking-wider uppercase font-semibold text-primary leading-relaxed">
                  {language === 'id'
                    ? 'SPESIALISASI DALAM FRONTEND ARCHITECTURE, WEB PERFORMANCE, DAN KEAMANAN SIBER.'
                    : 'SPECIALIZED IN FRONTEND ARCHITECTURE, WEB PERFORMANCE, AND CYBERSECURITY.'}
                </p>
              </motion.div>

              {/* Center clearance for the frame torso */}
              <div className="w-72 sm:w-80 md:w-[310px] lg:w-[350px] xl:w-[375px] shrink-0 pointer-events-none" />

              {/* Right Block: Value proposition */}
              <motion.div
                variants={itemVariants}
                className="w-56 lg:w-64 xl:w-72 space-y-2.5 text-right"
              >
                <p className="font-body text-xs lg:text-sm text-secondary leading-relaxed font-normal">
                  {personalData.statement[language]}
                </p>
              </motion.div>
            </div>
          </div>

          {/* MOBILE (< md): TAILORED MOBILE HERO STACK WITH LUXURY EDITORIAL RIGOR */}
          <div className="md:hidden w-full flex flex-col items-center pb-0 mb-0 z-20 mt-2">
            {/* Mobile Headline: Fluid, Un-clipped Editorial Typography */}
            <motion.div variants={itemVariants} className="text-center px-2 mb-4 select-none w-full">
              <span className="font-editorial-italic text-[1.85rem] xs:text-3xl text-primary inline-flex items-center justify-center">
                <TypewriterText
                  language={language}
                  prefix="I'm "
                  cursorClassName="w-[3px] h-[0.72em] bg-[#087F5B] ml-1.5"
                />
              </span>
              <h1 className="font-display font-black text-[3.1rem] xs:text-[3.75rem] uppercase tracking-tighter text-[#087F5B] leading-[0.86] mt-0.5 drop-shadow-sm">
                DEVELOPER
              </h1>
            </motion.div>


            {/* 4. Mobile Portrait Stage with Subtle Ambient Aura (Flush at bottom) */}
            <div className="relative w-full max-w-[320px] xs:max-w-[350px] h-[390px] xs:h-[430px] flex items-end justify-center pb-0 mb-0 mt-1">
              {/* Diffused Atmosphere Glow behind head & torso */}
              <div className="absolute top-12 w-56 h-56 rounded-full bg-[#087F5B]/15 blur-3xl pointer-events-none" />

              <img
                src={personalData.heroImage}
                alt={personalData.name}
                className="w-full h-full object-contain object-bottom relative z-10"
                loading="eager"
                decoding="async"
              />

              {/* Mobile Floating Pill CTA with Touch Target */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 w-max pointer-events-auto">
                <Link
                  to="/contact"
                  className="btn-pill-primary px-7 py-3 text-xs font-poppins font-bold tracking-widest uppercase shadow-xl shadow-[#087F5B]/35 whitespace-nowrap active:scale-95 transition-transform"
                >
                  <span>{language === 'id' ? "MARI BICARA" : "LET'S CHAT"}</span>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
