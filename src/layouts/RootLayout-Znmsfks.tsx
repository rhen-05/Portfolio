import React, { useEffect, Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '@/components/Navbar/Navbar';
import { Footer } from '@/components/Footer/Footer';
import { CustomCursor } from '@/components/CustomCursor/CustomCursor';
import { MusicPlayer } from '@/components/MusicPlayer/MusicPlayer';
import { PageLoader } from '@/components/PageLoader/PageLoader';
import { useLenis } from '@/hooks/useLenis';

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

      {/* Floating Ambient Music Player */}
      <MusicPlayer />

      {/* Global Editorial Navbar */}
      <Navbar />

      {/* Main Content with Instant, Deterministic Route Rendering */}
      <main className="flex-1 w-full" id="main-content">
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>

      {/* Global Editorial Footer */}
      <Footer />
    </div>
  );
};
