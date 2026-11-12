import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '@/components/Navbar/Navbar';
import { Footer } from '@/components/Footer/Footer';
import { CustomCursor } from '@/components/CustomCursor/CustomCursor';
import { useLenis } from '@/hooks/useLenis';
import { motion, AnimatePresence } from 'framer-motion';

export const RootLayout: React.FC = () => {
  const location = useLocation();

  // Initialize editorial smooth scrolling
  useLenis();

  // Reset scroll position on route transitions
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen flex flex-col bg-canvas text-primary">
      {/* Subtle Cinematic Film Grain Overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Custom Desktop Physics Cursor */}
      <CustomCursor />

      {/* Global Editorial Navbar */}
      <Navbar />

      {/* Main Content with Fast Subtle Page Transition */}
      <main className="flex-1 w-full" id="main-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.24, ease: [0.23, 1, 0.32, 1] as const }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Global Editorial Footer */}
      <Footer />
    </div>
  );
};
