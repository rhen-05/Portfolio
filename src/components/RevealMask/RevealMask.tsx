import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface IRevealMaskProps {
  children: React.ReactNode;
  direction?: 'left-to-right' | 'bottom-to-top';
  className?: string;
  delay?: number;
}

export const RevealMask: React.FC<IRevealMaskProps> = ({
  children,
  direction = 'left-to-right',
  className = '',
  delay = 0,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px -10% 0px' });

  const isLtr = direction === 'left-to-right';

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* Underlying Content */}
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        animate={
          isInView
            ? {
                opacity: 1,
                scale: 1,
              }
            : { opacity: 0, scale: 1.04 }
        }
        transition={{
          duration: 0.55,
          delay: delay + 0.22,
          ease: [0.23, 1, 0.32, 1] as const,
        }}
      >
        {children}
      </motion.div>

      {/* Layer 1: Black Monochromatic Primary Wipe */}
      <motion.div
        initial={isLtr ? { scaleX: 0 } : { scaleY: 0 }}
        animate={
          isInView
            ? isLtr
              ? { scaleX: [0, 1, 1, 0] }
              : { scaleY: [0, 1, 1, 0] }
            : {}
        }
        transition={{
          duration: 0.72,
          delay: delay,
          times: [0, 0.42, 0.58, 1],
          ease: [0.65, 0, 0.35, 1] as const,
        }}
        style={{
          transformOrigin: isLtr ? 'left' : 'bottom',
        }}
        className="absolute inset-0 bg-[#080808] dark:bg-[#1A1A1A] z-30 pointer-events-none"
      />

      {/* Layer 2: Signature Electric Cobalt Blue Accent Wipe */}
      <motion.div
        initial={isLtr ? { scaleX: 0 } : { scaleY: 0 }}
        animate={
          isInView
            ? isLtr
              ? { scaleX: [0, 1, 1, 0] }
              : { scaleY: [0, 1, 1, 0] }
            : {}
        }
        transition={{
          duration: 0.68,
          delay: delay + 0.08,
          times: [0, 0.45, 0.6, 1],
          ease: [0.65, 0, 0.35, 1] as const,
        }}
        style={{
          transformOrigin: isLtr ? 'left' : 'bottom',
        }}
        className="absolute inset-0 bg-[#2238FF] dark:bg-[#1D30E0] z-20 pointer-events-none"
      />

      {/* Layer 3: Warm Off-White / Canvas Counter Wipe */}
      <motion.div
        initial={isLtr ? { scaleX: 0 } : { scaleY: 0 }}
        animate={
          isInView
            ? isLtr
              ? { scaleX: [0, 1, 1, 0] }
              : { scaleY: [0, 1, 1, 0] }
            : {}
        }
        transition={{
          duration: 0.62,
          delay: delay + 0.16,
          times: [0, 0.48, 0.65, 1],
          ease: [0.65, 0, 0.35, 1] as const,
        }}
        style={{
          transformOrigin: isLtr ? 'left' : 'bottom',
        }}
        className="absolute inset-0 bg-[#F5F5F2] dark:bg-[#0B0B0B] z-10 pointer-events-none"
      />
    </div>
  );
};
