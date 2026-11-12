import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { personalData } from '@/data/personal';
import { socialLinks } from '@/data/social';
import { ArrowUpRight, Copy, Check, MapPin, Clock, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ContactPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Contact - Rhanendra Pradipta';
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 900);
  };

  return (
    <div className="pt-28 sm:pt-36 pb-28 bg-canvas min-h-screen">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Editorial Section Number */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-3 h-[2px] bg-[#2238FF]" />
          <span className="font-poppins text-xs font-bold tracking-widest text-[#2238FF] uppercase">
            {t.contact.sectionNumber}
          </span>
        </div>

        {/* Massive Editorial Headline */}
        <div className="mb-14 select-none">
          <h1 className="font-display font-black uppercase tracking-tight text-primary leading-[0.92] text-4xl sm:text-6xl lg:text-8xl max-w-5xl">
            {language === 'id' ? (
              <>
                MARI MEMBANGUN <br />
                SESUATU YANG <br />
                <span className="font-editorial-italic lowercase text-[#2238FF] font-medium">bermakna.</span>
              </>
            ) : (
              <>
                LET'S BUILD <br />
                SOMETHING <br />
                <span className="font-editorial-italic lowercase text-[#2238FF] font-medium">meaningful.</span>
              </>
            )}
          </h1>

          <p className="mt-8 max-w-xl font-body text-base sm:text-lg text-secondary leading-relaxed font-normal">
            {t.contact.subheadline}
          </p>
        </div>

        <div className="w-full h-[1px] bg-black/10 dark:bg-white/10 my-12" />

        {/* Minimalist Split: Direct Coordinates vs Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Direct Coordinates & Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <span className="font-poppins text-xs uppercase tracking-widest text-muted block mb-3 font-bold">
                {t.contact.directEmail}
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={personalData.email.startsWith('mailto:') ? personalData.email : `mailto:${personalData.email}`}
                  className="font-display text-xl sm:text-2xl font-black uppercase text-primary hover:text-[#2238FF] transition-colors break-all"
                >
                  {personalData.email.replace('mailto:', '')}
                </a>
                <button
                  onClick={handleCopyEmail}
                  aria-label={t.contact.copyEmail}
                  className="w-10 h-10 rounded-full border border-black/10 dark:border-white/10 hover:border-[#2238FF] text-primary transition-colors active:scale-95 flex items-center justify-center cursor-pointer shrink-0"
                  title={t.contact.copyEmail}
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-[#2238FF]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              {copied && (
                <span className="font-poppins text-[11px] text-[#2238FF] mt-1 block font-bold">
                  {t.contact.emailCopied}
                </span>
              )}
            </div>

            <div>
              <span className="font-poppins text-xs uppercase tracking-widest text-muted block mb-3 font-bold">
                {t.contact.locationTitle}
              </span>
              <div className="space-y-2 font-poppins text-xs text-secondary font-semibold">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#2238FF]" />
                  <span>{personalData.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#2238FF]" />
                  <span>{personalData.timezone}</span>
                </div>
              </div>
            </div>

            <div>
              <span className="font-poppins text-xs uppercase tracking-widest text-muted block mb-3 font-bold">
                {t.contact.socialChannels}
              </span>
              <ul className="space-y-2.5 font-poppins text-xs font-semibold">
                <li>
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-primary hover:text-[#2238FF] transition-colors"
                  >
                    <span className="font-poppins">GITHUB - @rhanendra</span>
                    <ArrowUpRight className="w-3 h-3 text-[#2238FF]" />
                  </a>
                </li>
                <li>
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-primary hover:text-[#2238FF] transition-colors"
                  >
                    <span className="font-poppins">LINKEDIN - Rhanendra Pradipta</span>
                    <ArrowUpRight className="w-3 h-3 text-[#2238FF]" />
                  </a>
                </li>
                <li>
                  <a
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-primary hover:text-[#2238FF] transition-colors"
                  >
                    <span className="font-poppins">INSTAGRAM - @rhanendra</span>
                    <ArrowUpRight className="w-3 h-3 text-[#2238FF]" />
                  </a>
                </li>
                <li>
                  <a
                    href={socialLinks.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-primary hover:text-[#2238FF] transition-colors"
                  >
                    <span className="font-poppins">WHATSAPP DIRECT</span>
                    <ArrowUpRight className="w-3 h-3 text-[#2238FF]" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Clean Minimal Transmission Form (7 cols) */}
          <div className="lg:col-span-7 bg-surface p-8 sm:p-10 border border-black/10 dark:border-white/10 shadow-lg rounded-3xl">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-14 h-14 mx-auto rounded-full bg-[#2238FF]/10 border border-[#2238FF] flex items-center justify-center text-[#2238FF]">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="font-display text-2xl font-black uppercase text-primary">
                    TRANSMISSION COMPLETE
                  </h3>
                  <p className="font-body text-sm text-secondary max-w-md mx-auto font-normal">
                    {t.contact.successMessage}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-pill-mode text-xs font-bold"
                  >
                    KIRIM PESAN BARU
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block font-poppins text-xs uppercase tracking-wider text-muted mb-2 font-semibold">
                      {t.contact.nameLabel} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.contact.namePlaceholder}
                      className="w-full px-5 py-3.5 bg-canvas border border-black/10 dark:border-white/10 text-primary font-poppins text-sm focus:border-[#2238FF] focus:outline-none focus:ring-1 focus:ring-[#2238FF] transition-colors rounded-xl"
                    />
                  </div>

                  <div>
                    <label className="block font-poppins text-xs uppercase tracking-wider text-muted mb-2 font-semibold">
                      {t.contact.emailLabel} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t.contact.emailPlaceholder}
                      className="w-full px-5 py-3.5 bg-canvas border border-black/10 dark:border-white/10 text-primary font-poppins text-sm focus:border-[#2238FF] focus:outline-none focus:ring-1 focus:ring-[#2238FF] transition-colors rounded-xl"
                    />
                  </div>

                  <div>
                    <label className="block font-poppins text-xs uppercase tracking-wider text-muted mb-2 font-semibold">
                      {t.contact.subjectLabel}
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder={t.contact.subjectPlaceholder}
                      className="w-full px-5 py-3.5 bg-canvas border border-black/10 dark:border-white/10 text-primary font-poppins text-sm focus:border-[#2238FF] focus:outline-none focus:ring-1 focus:ring-[#2238FF] transition-colors rounded-xl"
                    />
                  </div>

                  <div>
                    <label className="block font-poppins text-xs uppercase tracking-wider text-muted mb-2 font-semibold">
                      {t.contact.messageLabel} *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t.contact.messagePlaceholder}
                      className="w-full px-5 py-3.5 bg-canvas border border-black/10 dark:border-white/10 text-primary font-poppins text-sm focus:border-[#2238FF] focus:outline-none focus:ring-1 focus:ring-[#2238FF] transition-colors resize-none rounded-xl"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-pill-primary w-full text-xs font-bold py-4 shadow-lg shadow-[#2238FF]/30 cursor-pointer"
                  >
                    <span>{isSubmitting ? t.contact.sending : t.contact.sendButton}</span>
                    <Send className="w-3.5 h-3.5 ml-1" />
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
