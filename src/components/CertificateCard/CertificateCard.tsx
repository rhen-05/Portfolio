import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { ICertificate } from '@/data/certificates';
import { motion } from 'framer-motion';

interface ICertificateCardProps {
  certificate: ICertificate;
  index: number;
}

export const CertificateCard: React.FC<ICertificateCardProps> = ({ certificate, index }) => {
  const { language } = useLanguage();

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.05, 0.25), ease: [0.23, 1, 0.32, 1] }}
      className="group flex flex-col"
    >
      <Link
        to={`/certificates/${certificate.slug}`}
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F5B] rounded-2xl sm:rounded-3xl"
      >
        {/* Certificate Image Frame */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:border-[#087F5B]/50">
          <img
            src={certificate.image}
            alt={certificate.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>

        {/* Content: Judul Besar dan Deskripsi Singkat Berukuran Kecil di Bawahnya */}
        <div className="pt-4 sm:pt-5">
          <h3 className="font-display font-black text-xl sm:text-2xl text-primary tracking-tight leading-snug group-hover:text-[#087F5B] transition-colors">
            {certificate.title}
          </h3>
          <p className="font-body text-xs sm:text-[13px] text-secondary leading-relaxed line-clamp-2 mt-2 font-normal">
            {certificate.description[language]}
          </p>
        </div>
      </Link>
    </motion.article>
  );
};
