import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { socialLinks } from '@/data/social';
import { Sun, Moon, ArrowUpRight, X, Github, Linkedin, Instagram, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 25;
      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: t.nav.home, num: '00' },
    { path: '/about', label: t.nav.about, num: '01' },
    { path: '/projects', label: t.nav.projects, num: '02' },
    { path: '/certificates', label: t.nav.certificates, num: '03' },
    { path: '/contact', label: t.nav.contact, num: '04' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-[#171C19]/95 backdrop-blur-md border-b border-black/10 dark:border-white/10 py-3 sm:py-3.5 shadow-sm'
          : 'bg-transparent py-4 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between gap-2">
        {/* Brand: Rhanendra with first letter capitalized */}
        <Link
          to="/"
          onClick={() => setMobileMenuOpen(false)}
          className="group flex items-baseline gap-1 text-primary focus-visible:outline-2 focus-visible:outline-[#087F5B] shrink-0"
        >
          <span className="font-display font-black text-xl sm:text-3xl tracking-tight text-primary">
            Rhanendra
          </span>
        </Link>

        {/* Center: [ ☀️/🌙 Change Theme ] borderless pill button */}
        <div className="flex items-center">
          <button
            onClick={toggleTheme}
            aria-label={t.nav.toggleTheme}
            className="inline-flex items-center justify-center gap-2 p-2 sm:px-5 sm:py-2 rounded-full border-0 bg-white/80 dark:bg-[#171C19]/80 text-primary font-poppins text-xs font-semibold tracking-wide transition-all duration-200 hover:text-[#087F5B] active:scale-95 shadow-xs cursor-pointer focus-visible:outline-none"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-[#087F5B] stroke-[2.2] transition-transform duration-300 hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-[#087F5B] stroke-[2.2] transition-transform duration-300 hover:-rotate-12" />
            )}
            <span className="hidden sm:inline">
              {language === 'id'
                ? theme === 'light'
                  ? 'Ganti Mode Tema'
                  : 'Ganti ke Light'
                : 'Change Theme'}
            </span>
          </button>
        </div>

        {/* Right: Language switch + Minimalist Hamburger icon */}
        <div className="flex items-center gap-2.5 sm:gap-6 shrink-0">
          {/* Desktop Nav Links (clean, title case, not all uppercase) */}
          <nav className="hidden xl:flex items-center gap-6" aria-label="Main Navigation">
            {navLinks.map((item) => {
              const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-xs font-poppins tracking-wide transition-colors hover:text-[#087F5B] ${
                    isActive ? 'font-bold text-[#087F5B]' : 'font-medium text-secondary'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Bilingual Switcher (Clean Borderless Pill) */}
          <div className="flex items-center font-poppins text-[11px] font-bold rounded-full px-2.5 sm:px-3.5 py-1.5 bg-white/80 dark:bg-[#171C19]/80 shadow-xs border-0">
            <button
              onClick={() => setLanguage('id')}
              aria-label="Ganti ke Bahasa Indonesia"
              className={`transition-colors px-1 cursor-pointer ${
                language === 'id' ? 'font-black text-[#087F5B]' : 'text-muted hover:text-primary'
              }`}
            >
              ID
            </button>
            <span className="text-muted/40 mx-0.5 sm:mx-1 select-none">-</span>
            <button
              onClick={() => setLanguage('en')}
              aria-label="Switch to English"
              className={`transition-colors px-1 cursor-pointer ${
                language === 'en' ? 'font-black text-[#087F5B]' : 'text-muted hover:text-primary'
              }`}
            >
              EN
            </button>
          </div>

          {/* Minimal 2-line hamburger icon matching reference image */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? t.nav.close : t.nav.menu}
            className="w-9 h-9 sm:w-8 sm:h-8 flex flex-col justify-center items-end gap-1.5 focus-visible:outline-none cursor-pointer group p-1 touch-target"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-primary" />
            ) : (
              <>
                <span className="w-6 h-[2.5px] bg-[#171C19] dark:bg-white transition-all group-hover:w-5 rounded-full" />
                <span className="w-4 h-[2.5px] bg-[#171C19] dark:bg-white transition-all group-hover:w-6 rounded-full" />
              </>
            )}
          </button>
        </div>
      </div>

      {/* Editorial Drawer for fast navigation (Enriched for Mobile Screen) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.24, ease: [0.23, 1, 0.32, 1] as const }}
            className="border-b border-black/10 dark:border-white/10 bg-white/98 dark:bg-[#171C19]/98 backdrop-blur-2xl px-5 sm:px-8 py-8 sm:py-10 shadow-2xl max-h-[85vh] overflow-y-auto"
          >
            <div className="max-w-4xl mx-auto flex flex-col gap-6">
              {/* Header Status Bar inside mobile menu */}
              <div className="flex items-center justify-between pb-3 border-b border-black/5 dark:border-white/5">
                <span className="font-poppins text-[10px] font-bold tracking-widest text-[#087F5B] uppercase">
                  {language === 'id' ? 'TERSEDIA UNTUK PROYEK' : 'AVAILABLE FOR WORK'}
                </span>
                <span className="font-mono text-[10px] text-muted">
                  SURABAYA • UTC+7
                </span>
              </div>

              {/* Navigation Links Grid (Centered without numbers) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1">
                {navLinks.map((item) => {
                  const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-center py-3 px-4 rounded-xl border transition-all text-center ${
                        isActive
                          ? 'border-[#087F5B]/30 bg-[#087F5B]/10 text-[#087F5B] font-black'
                          : 'border-transparent text-primary hover:text-[#087F5B] hover:bg-black/5 dark:hover:bg-white/5'
                      }`}
                    >
                      <span className="font-display text-xl sm:text-2xl font-bold text-center">
                        {item.label}
                      </span>
                    </Link>
                  );
                })}
              </div>

              {/* Action Buttons & Direct Channels in Mobile Drawer */}
              <div className="pt-4 border-t border-black/10 dark:border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-pill-primary text-xs w-full sm:w-auto text-center"
                >
                  <span>{t.nav.letsWorkTogether}</span>
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </Link>

                {/* Quick Social Badges */}
                <div className="flex items-center justify-center gap-2 pt-2 sm:pt-0">
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="w-9 h-9 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center text-secondary hover:text-[#087F5B] hover:border-[#087F5B] transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="w-9 h-9 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center text-secondary hover:text-[#087F5B] hover:border-[#087F5B] transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="w-9 h-9 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center text-secondary hover:text-[#087F5B] hover:border-[#087F5B] transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href={socialLinks.email}
                    aria-label="Email"
                    className="w-9 h-9 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center text-secondary hover:text-[#087F5B] hover:border-[#087F5B] transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
