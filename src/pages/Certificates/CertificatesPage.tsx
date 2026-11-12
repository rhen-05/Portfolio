import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { certificatesData } from '@/data/certificates';
import { CertificateCard } from '@/components/CertificateCard/CertificateCard';

export const CertificatesPage: React.FC = () => {
  const { language } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState<string>('ALL');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Certificates & Credentials — Rhanendra Pradipta';
  }, []);

  const filterTabs = [
    { id: 'ALL', label: { id: 'SEMUA', en: 'ALL' }, count: certificatesData.length },
    {
      id: 'SECURITY',
      label: { id: 'KEAMANAN SIBER', en: 'CYBERSECURITY' },
      count: certificatesData.filter(
        (c) => c.category.includes('SECURITY') || c.category.includes('DEFENSE')
      ).length,
    },
    {
      id: 'INFRASTRUCTURE',
      label: { id: 'CLOUD & JARINGAN', en: 'CLOUD & NETWORK' },
      count: certificatesData.filter(
        (c) => c.category.includes('NETWORK') || c.category.includes('CLOUD')
      ).length,
    },
    {
      id: 'SYSTEMS_FRONTEND',
      label: { id: 'SISTEM & FRONTEND', en: 'SYSTEMS & FRONTEND' },
      count: certificatesData.filter(
        (c) => c.category.includes('OPERATING') || c.category.includes('FRONTEND')
      ).length,
    },
  ];

  const filteredCertificates = certificatesData.filter((cert) => {
    if (selectedFilter === 'ALL') return true;
    if (selectedFilter === 'SECURITY') {
      return cert.category.includes('SECURITY') || cert.category.includes('DEFENSE');
    }
    if (selectedFilter === 'INFRASTRUCTURE') {
      return cert.category.includes('NETWORK') || cert.category.includes('CLOUD');
    }
    if (selectedFilter === 'SYSTEMS_FRONTEND') {
      return cert.category.includes('OPERATING') || cert.category.includes('FRONTEND');
    }
    return true;
  });

  return (
    <div className="pt-28 sm:pt-36 pb-28 bg-canvas min-h-screen">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header Section */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="font-poppins text-xs font-bold tracking-widest text-[#087F5B] uppercase">
              CREDENTIALS & ACCREDITATIONS
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-black/10 dark:border-white/10">
            <div>
              <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-primary leading-tight">
                {language === 'id' ? 'KREDENSIAL' : 'VERIFIED'}{' '}
                <span className="highlight-block-blue tracking-tight">
                  {language === 'id' ? 'TERVERIFIKASI' : 'ARCHIVES'}
                </span>
              </h1>
              <span className="font-editorial-italic font-medium text-2xl sm:text-4xl lg:text-5xl text-secondary block mt-1.5">
                {language === 'id'
                  ? 'standar kompetensi resmi & keamanan siber.'
                  : 'industry standards, systems & cyber defense.'}
              </span>
            </div>

            <p className="max-w-md font-body text-sm sm:text-base text-secondary leading-relaxed font-normal">
              {language === 'id'
                ? 'Sertifikasi industri terakreditasi yang memverifikasi kecakapan teknis dalam pengujian penetrasi siber, arsitektur cloud, dan rekayasa frontend.'
                : 'Official industry accreditations authenticating competencies across defensive cybersecurity, distributed cloud architectures, and modern web systems.'}
            </p>
          </div>
        </div>

        {/* Control Bar: Filter Tabs + Counter */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none w-full sm:w-auto flex-nowrap sm:flex-wrap">
            {filterTabs.map((tab) => {
              const isActive = selectedFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedFilter(tab.id)}
                  className={`px-4 py-2 rounded-full font-poppins text-xs font-semibold tracking-wide transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-[#087F5B] text-white shadow-md shadow-[#087F5B]/20'
                      : 'bg-surface hover:bg-black/5 dark:hover:bg-white/5 text-secondary hover:text-primary border border-black/10 dark:border-white/10'
                  }`}
                >
                  <span>{tab.label[language]}</span>
                  <span className={`ml-1.5 text-[10px] ${isActive ? 'text-white/80' : 'text-muted'}`}>
                    ({tab.count})
                  </span>
                </button>
              );
            })}
          </div>

          {/* Registry Status */}
          <div className="flex items-center gap-2 text-xs font-mono text-secondary">
            <span className="w-2 h-2 rounded-full bg-[#087F5B]" />
            <span className="font-semibold">
              {language === 'id' ? 'TERDAFTAR' : 'RECORDS'}: {filteredCertificates.length} DARI {certificatesData.length}
            </span>
          </div>
        </div>

        {/* Certificates Grid (Clean 3-column / 2-column) */}
        {filteredCertificates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredCertificates.map((cert, index) => (
              <CertificateCard key={cert.slug} certificate={cert} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-surface rounded-3xl border border-black/10 dark:border-white/10">
            <p className="font-body text-secondary text-sm">
              {language === 'id' ? 'Tidak ada kredensial dalam kategori ini.' : 'No credentials found in this category.'}
            </p>
            <button
              onClick={() => setSelectedFilter('ALL')}
              className="mt-4 px-4 py-2 rounded-full bg-[#087F5B] text-white font-poppins text-xs font-semibold cursor-pointer"
            >
              {language === 'id' ? 'Reset Filter' : 'Reset Filter'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
