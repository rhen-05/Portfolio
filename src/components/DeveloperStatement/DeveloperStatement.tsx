import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { certificatesData } from '@/data/certificates';
import { CertificateCard } from '@/components/CertificateCard/CertificateCard';
import { ArrowRight, ShieldCheck, Award, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export const DeveloperStatement: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section className="py-24 sm:py-32 border-t border-black/10 dark:border-white/10 bg-canvas relative overflow-hidden" id="certificates">
      {/* Subtle Ambient Background */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Marker */}
        <div className="flex items-center gap-3 mb-10 sm:mb-12">
          <span className="font-poppins text-xs font-bold tracking-widest text-[#087F5B] uppercase">
            {language === 'id' ? 'VALIDASI KOMPETENSI' : 'VERIFIED CREDENTIALS'}
          </span>
        </div>

        {/* The Exact Photo 3 Typographic Layout Adapted for Developer */}
        <div className="max-w-5xl mb-14 sm:mb-16">
          {/* Top Line: Lighter / Medium Sans Typography */}
          <p className="font-display font-medium text-xl sm:text-3xl lg:text-4xl text-secondary mb-3 sm:mb-4 leading-tight">
            {language === 'id'
              ? 'Bukan sekadar menulis kode demi impresi developer.'
              : "We don't write code to impress developers."}
          </p>

          {/* Main Statement with Signature Cobalt Box & Pin Indicator */}
          <h2 className="font-display font-black text-2xl xs:text-3xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] text-primary uppercase tracking-tight leading-[1.12] sm:leading-[1.14]">
            <span className="block mb-1 sm:mb-2">
              {language === 'id' ? 'Kami membangun sistem untuk' : 'We build systems to'}
            </span>
            <span className="inline-flex flex-wrap items-baseline gap-x-2 gap-y-1">
              <span className="relative inline-block bg-[#087F5B] text-white px-3 sm:px-5 py-1 sm:py-1.5 my-1 mr-1 align-baseline shadow-md">
                <span>{language === 'id' ? 'memecahkan masalah' : 'solve real problems'}</span>
                {/* Vertical Pin Line and Solid Blue Dot on the top right corner */}
                <span
                  className="absolute -top-5 sm:-top-9 right-0 flex flex-col items-center pointer-events-none select-none"
                  aria-hidden="true"
                >
                  <span className="w-2.5 h-2.5 sm:w-4 sm:h-4 rounded-full bg-[#087F5B] shadow-sm" />
                  <span className="w-[2px] h-5 sm:h-9 bg-[#087F5B]" />
                </span>
              </span>
              <span>{language === 'id' ? 'secara teruji.' : 'reliably.'}</span>
            </span>
          </h2>
        </div>

        {/* Editorial Lead-in Narrative & Metadata Tag (Option 1) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-black/10 dark:border-white/10">
          <p className="max-w-2xl font-body text-sm sm:text-base text-secondary leading-relaxed font-normal">
            {language === 'id'
              ? 'Setiap arsitektur dan sistem yang kami bangun dilandasi standar kepatuhan industri, protokol keamanan zero-trust, serta rekayasa performa yang telah terakreditasi secara global.'
              : 'Every production architecture is grounded in industry compliance standards, zero-trust security protocols, and globally accredited engineering rigor.'}
          </p>

          <div className="flex items-center shrink-0">
            <span className="font-poppins text-xs font-bold tracking-wider text-[#087F5B] uppercase">
              {language === 'id'
                ? 'STANDAR INDUSTRI TERVERIFIKASI'
                : 'VERIFIED INDUSTRY STANDARDS'}
            </span>
          </div>
        </div>

        {/* Certified Credentials Showcase Grid (Developer-Themed with Photo 1 Aesthetic) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-8">
          {certificatesData.slice(0, 3).map((cert, idx) => (
            <CertificateCard key={cert.slug} certificate={cert} index={idx} />
          ))}
        </div>

        {/* View All Credentials Button */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-black/10 dark:border-white/10">
          <p className="font-body text-sm text-secondary">
            {language === 'id'
              ? 'Seluruh kredensial diverifikasi secara resmi oleh institusi terakreditasi.'
              : 'All credentials are authenticated by accredited technology organizations.'}
          </p>

          <Link
            to="/certificates"
            className="btn-pill-primary inline-flex items-center gap-2 group text-xs"
          >
            <span>{t.certificates.viewArchive} [{certificatesData.length}]</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};
