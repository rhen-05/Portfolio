import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { socialLinks } from '@/data/social';
import { ArrowUp, Github, Linkedin, Instagram, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#171C19] text-[#F4F2EE] pt-20 pb-12 overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Top Grid: Editorial split */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Col 1: Statement & Persona */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center mb-4">
                <span className="font-poppins text-xs tracking-widest text-[#B4B0A8] uppercase font-bold">
                  SURABAYA - INDONESIA (UTC+7)
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-4 leading-tight">
                RHANENDRA PRADIPTA
              </h3>
              <p className="font-body text-sm text-[#B4B0A8] max-w-sm leading-relaxed mb-6 font-normal">
                {t.footer.builtWith}
              </p>
            </div>

            <div className="font-poppins text-xs text-[#85827D] font-bold">
              SYS: 2026.04 - LAT: 7.2575° S, 112.7521° E
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3">
            <span className="font-poppins text-[11px] tracking-widest uppercase text-[#85827D] block mb-4 font-bold">
              DIRECTORY
            </span>
            <ul className="space-y-2.5 font-poppins text-xs uppercase tracking-wider font-bold">
              <li>
                <Link to="/" className="text-[#C8C6C1] hover:text-[#087F5B] transition-colors">
                  00 - HOME
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#C8C6C1] hover:text-[#087F5B] transition-colors">
                  01 - ABOUT & EXPERIENCE
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-[#C8C6C1] hover:text-[#087F5B] transition-colors">
                  02 - PROJECTS
                </Link>
              </li>
              <li>
                <Link to="/certificates" className="text-[#C8C6C1] hover:text-[#087F5B] transition-colors">
                  03 - CERTIFICATES
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#C8C6C1] hover:text-[#087F5B] transition-colors">
                  04 - CONTACT
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Social Channels & Back to Top */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <span className="font-poppins text-[11px] tracking-widest uppercase text-[#85827D] block mb-4 font-bold">
                CONNECT
              </span>
              <div className="flex flex-wrap gap-2 mb-8">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 border border-white/15 text-xs font-poppins font-semibold uppercase text-[#C8C6C1] hover:text-white hover:border-[#087F5B] hover:bg-[#087F5B]/20 transition-all rounded-full"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GITHUB</span>
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 border border-white/15 text-xs font-poppins font-semibold uppercase text-[#C8C6C1] hover:text-white hover:border-[#087F5B] hover:bg-[#087F5B]/20 transition-all rounded-full"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LINKEDIN</span>
                </a>
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 border border-white/15 text-xs font-poppins font-semibold uppercase text-[#C8C6C1] hover:text-white hover:border-[#087F5B] hover:bg-[#087F5B]/20 transition-all rounded-full"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>INSTAGRAM</span>
                </a>
                <a
                  href={socialLinks.email}
                  className="inline-flex items-center gap-1.5 px-4 py-2 border border-white/15 text-xs font-poppins font-semibold uppercase text-[#C8C6C1] hover:text-white hover:border-[#087F5B] hover:bg-[#087F5B]/20 transition-all rounded-full"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>EMAIL</span>
                </a>
              </div>
            </div>

            <div>
              <button
                onClick={scrollToTop}
                aria-label="Back to Top"
                className="group inline-flex items-center gap-2.5 text-xs font-poppins font-semibold uppercase tracking-widest text-[#B4B0A8] hover:text-white transition-colors cursor-pointer"
              >
                <span>{t.footer.backToTop}</span>
                <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#087F5B] group-hover:bg-[#087F5B] transition-all">
                  <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Subtle Watermark */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-poppins text-[11px] text-[#85827D] font-semibold">
          <div>
            © {new Date().getFullYear()} RHANENDRA PRADIPTA. {t.footer.allRights}
          </div>
          <div className="flex items-center">
            <span>DISCIPLINED CRAFT & ANTI-SLOP ASSURANCE</span>
          </div>
        </div>
      </div>

      {/* Massive Cropped Editorial Typography in Background */}
      <div
        aria-hidden="true"
        className="select-none pointer-events-none absolute -bottom-10 left-0 right-0 whitespace-nowrap overflow-hidden opacity-[0.035] leading-none text-[18vw] font-display font-black uppercase text-white tracking-tighter"
      >
        RHANENDRA
      </div>
    </footer>
  );
};
