import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { certificatesData } from '@/data/certificates';
import { RevealMask } from '@/components/RevealMask/RevealMask';
import { ArrowLeft, Award, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';

export const CertificateDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language, t } = useLanguage();

  const certificate = certificatesData.find((c) => c.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (certificate) {
      document.title = `${certificate.title} - Certificate`;
    }
  }, [slug, certificate]);

  if (!certificate) {
    return (
      <div className="min-h-screen pt-36 pb-20 flex flex-col items-center justify-center text-center px-4">
        <span className="font-poppins text-sm text-[#087F5B] mb-2 font-bold">ERROR 404</span>
        <h1 className="font-display text-4xl font-black uppercase mb-4">Certificate Not Found</h1>
        <p className="font-body text-secondary mb-8">The requested credential record could not be found in the archive.</p>
        <Link
          to="/certificates"
          className="btn-pill-primary text-xs"
        >
          <ArrowLeft className="w-3.5 h-3.5 mr-1" />
          <span>{t.certificates.backToCertificates}</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-28 sm:pt-36 pb-28 bg-canvas min-h-screen">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Navigation Breadcrumb */}
        <div className="mb-10 flex items-center justify-between gap-3 border-b border-black/10 dark:border-white/10 pb-4">
          <Link
            to="/certificates"
            className="btn-pill-mode text-[11px] shrink-0"
          >
            <ArrowLeft className="w-3.5 h-3.5 mr-1" />
            <span>{t.certificates.backToCertificates}</span>
          </Link>

          <div className="font-poppins text-xs text-muted flex items-center gap-2 font-bold truncate">
            <span className="truncate">REG: {certificate.credentialId}</span>
          </div>
        </div>

        {/* Certificate Editorial Header */}
        <div className="mb-14">
          <div className="flex flex-wrap items-center gap-3 mb-4 font-poppins text-xs font-semibold">
            <span className="px-3.5 py-1 bg-surface border border-black/10 dark:border-white/10 text-primary font-bold uppercase rounded-full">
              {certificate.category}
            </span>
            <span className="text-muted flex items-center gap-1 font-medium">
              <Calendar className="w-3 h-3" />
              {certificate.date}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-primary leading-[1.02] mb-6">
            {(() => {
              const words = certificate.title.trim().split(' ');
              if (words.length >= 2) {
                const firstPart = words.slice(0, words.length - 1).join(' ');
                const lastPart = words[words.length - 1];
                return (
                  <span className="inline-flex items-baseline flex-wrap gap-x-3 sm:gap-x-4">
                    <span>{firstPart}</span>
                    <span className="font-editorial-italic lowercase text-[#087F5B] font-semibold">
                      {lastPart}
                    </span>
                  </span>
                );
              }
              return certificate.title;
            })()}
          </h1>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 font-poppins text-xs sm:text-sm text-secondary">
            <div className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-[#087F5B] shrink-0" />
              <span className="font-bold text-primary">{certificate.issuer}</span>
            </div>
            <span>•</span>
            <span className="text-muted font-poppins break-all">ID: {certificate.credentialId}</span>
          </div>
        </div>

        {/* Archival Certificate Visual Card */}
        <div className="mb-16">
          <RevealMask direction="bottom-to-top">
            <div className="relative w-full max-h-[580px] aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl bg-black/5 dark:bg-white/5">
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </RevealMask>
        </div>

        {/* Details & Covered Competencies */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-black/10 dark:border-white/10 pt-12">
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-poppins text-xs font-bold tracking-widest text-[#087F5B] uppercase">
              DESKRIPSI & VALIDASI
            </h3>
            <p className="font-poppins text-base sm:text-lg text-secondary leading-relaxed font-normal">
              {certificate.description[language]}
            </p>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-surface p-6 sm:p-8 border border-black/10 dark:border-white/10 rounded-2xl">
              <span className="font-poppins text-xs font-bold tracking-widest uppercase text-muted block mb-4">
                {t.certificates.skills}
              </span>
              <ul className="space-y-3 font-poppins text-xs font-semibold text-primary mb-8">
                {certificate.skillsCovered.map((skill, idx) => (
                  <li key={idx} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#087F5B]" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>

              {certificate.verificationUrl && (
                <a
                  href={certificate.verificationUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-pill-primary w-full text-xs"
                >
                  <span>{t.certificates.verifyCredential}</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
