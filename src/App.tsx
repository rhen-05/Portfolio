import React, { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/context/ThemeContext';
import { LanguageProvider } from '@/context/LanguageContext';
import { RootLayout } from '@/layouts/RootLayout';

// Route-level code splitting: on-demand dynamic chunk imports
const HomePage = lazy(() => import('@/pages/Home/HomePage').then((m) => ({ default: m.HomePage })));
const AboutPage = lazy(() => import('@/pages/About/AboutPage').then((m) => ({ default: m.AboutPage })));
const ProjectsPage = lazy(() => import('@/pages/Projects/ProjectsPage').then((m) => ({ default: m.ProjectsPage })));
const ProjectDetailPage = lazy(() => import('@/pages/ProjectDetail/ProjectDetailPage').then((m) => ({ default: m.ProjectDetailPage })));
const CertificatesPage = lazy(() => import('@/pages/Certificates/CertificatesPage').then((m) => ({ default: m.CertificatesPage })));
const CertificateDetailPage = lazy(() => import('@/pages/CertificateDetail/CertificateDetailPage').then((m) => ({ default: m.CertificateDetailPage })));
const ContactPage = lazy(() => import('@/pages/Contact/ContactPage').then((m) => ({ default: m.ContactPage })));
const NotFoundPage = lazy(() => import('@/pages/NotFound/NotFoundPage').then((m) => ({ default: m.NotFoundPage })));

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          <Routes>
            <Route path="/" element={<RootLayout />}>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="projects" element={<ProjectsPage />} />
              <Route path="projects/:slug" element={<ProjectDetailPage />} />
              <Route path="certificates" element={<CertificatesPage />} />
              <Route path="certificates/:slug" element={<CertificateDetailPage />} />
              <Route path="experience" element={<AboutPage defaultSection="experience" />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
