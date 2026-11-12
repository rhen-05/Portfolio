import React from 'react';
import { motion } from 'framer-motion';
import { personalData } from '@/data/personal';

interface ImaginePosterProps {
  imageSrc?: string;
  className?: string;
}

export const ImaginePoster: React.FC<ImaginePosterProps> = ({
  imageSrc = personalData.profileImage,
  className = '',
}) => {
  return (
    <div
      className={`relative w-full flex flex-col items-center justify-center select-none py-2 sm:py-6 ${className}`}
    >
      {/* Centerpiece: Cobalt Blue Circle + Cutout / Portrait (Shifted slightly to the left) */}
      <div className="relative w-full flex flex-col items-center justify-center -translate-x-1 sm:-translate-x-5">
        <div className="relative w-64 h-64 xs:w-72 xs:h-72 sm:w-[380px] sm:h-[380px] md:w-[460px] md:h-[460px] flex items-center justify-center">
          {/* Cobalt Blue Solid Circle */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="absolute w-56 h-56 xs:w-64 xs:h-64 sm:w-[340px] sm:h-[340px] md:w-[420px] md:h-[420px] rounded-full bg-[#087F5B] shadow-[0_25px_60px_rgba(8,127,91,0.38)]"
          />

          {/* Portrait / Silhouette Overlaid */}
          <motion.div
            className="relative z-10 w-48 h-64 xs:w-56 xs:h-72 sm:w-72 sm:h-96 md:w-[340px] md:h-[440px] translate-y-[35px] xs:translate-y-[45px] flex items-end justify-center"
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <img
              src={imageSrc}
              alt="Rhanendra Pradipta"
              className="max-h-full object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.4)] transition-all duration-700"
            />
            {/* Ground Contact Shadow */}
            <div className="absolute -bottom-2 w-32 xs:w-36 sm:w-52 h-5 bg-black/40 blur-md rounded-full pointer-events-none" />
          </motion.div>
        </div>
      </div>

      {/* Lower Composition: 'Imagine' and '& make it real' lowered so it doesn't overlap with the figure's feet */}
      <div className="w-full relative z-20 mt-8 sm:mt-14 px-4 flex justify-center">
        <div className="inline-flex flex-col items-center max-w-xl">
          {/* Top word: Imagine, slightly shifted left from center */}
          <h3 className="font-display font-black text-4xl xs:text-5xl sm:text-7xl md:text-8xl tracking-tight text-primary leading-none -translate-x-2 sm:-translate-x-12">
            Imagine
          </h3>
          {/* Bottom phrase: & make it real, slightly shifted right from center */}
          <div className="mt-2 sm:mt-3 translate-x-2 sm:translate-x-12">
            <span className="font-display font-black text-xl xs:text-2xl sm:text-4xl md:text-5xl text-[#087F5B] tracking-tight drop-shadow-sm whitespace-nowrap">
              & make it real
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
