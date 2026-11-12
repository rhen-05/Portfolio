import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  // High precision springs for organic tracking
  const mouseX = useSpring(0, { stiffness: 500, damping: 28 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 28 });
  const ringX = useSpring(0, { stiffness: 220, damping: 24 });
  const ringY = useSpring(0, { stiffness: 220, damping: 24 });

  useEffect(() => {
    // Check touch device or reduced motion
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (hasTouch || reduced) {
      setIsReducedMotion(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
      setIsVisible((prev) => (prev ? prev : true));

      const target = e.target as HTMLElement;
      if (!target) return;

      const interactive = Boolean(
        target.closest('a, button, [role="button"], input, textarea, select, .cursor-interactive')
      );
      setIsHovering((prev) => (prev !== interactive ? interactive : prev));
      setIsPointer((prev) => (prev !== interactive ? interactive : prev));
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, ringX, ringY]);

  if (isReducedMotion || !isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Outer Ring */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 1.7 : 1,
          borderColor: isHovering ? 'rgba(8, 127, 91, 0.85)' : 'rgba(8, 8, 8, 0.35)',
        }}
        transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] as const }}
        className="w-8 h-8 rounded-full border border-black/35 dark:border-white/40 will-change-transform"
      />

      {/* Central Precision Dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 0.6 : 1,
          backgroundColor: isHovering ? '#087F5B' : 'var(--text-primary)',
        }}
        transition={{ duration: 0.12 }}
        className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white will-change-transform"
      />
    </div>
  );
};
