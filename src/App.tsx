import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStatsBar } from './components/TrustStatsBar';
import { AboutSection } from './components/AboutSection';
import { DifferentialsSection } from './components/DifferentialsSection';
import { CoursesSection } from './components/CoursesSection';
import { NormasRegulamentadorasSection } from './components/NormasRegulamentadorasSection';
import { CreaSection } from './components/CreaSection';
import { LearningGuaranteeSection } from './components/LearningGuaranteeSection';
import { DirectorSection } from './components/DirectorSection';
import { GallerySection } from './components/GallerySection';
import { LocationsSection } from './components/LocationsSection';
import { FAQSection } from './components/FAQSection';
import { ContactFooter } from './components/ContactFooter';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CourseModal } from './components/CourseModal';

export default function App() {
  const [isCourseModalOpen, setIsCourseModalOpen] = useState(false);

  const handleOpenCourseModal = () => setIsCourseModalOpen(true);
  const handleCloseCourseModal = () => setIsCourseModalOpen(false);

  return (
    <div className="min-h-screen bg-[#07080a] text-gray-100 font-sans selection:bg-amber-500 selection:text-black">
      
      {/* Top Navigation */}
      <Navbar onOpenCourseModal={handleOpenCourseModal} />

      {/* Main Page Flow */}
      <main>
        <Hero onOpenCourseModal={handleOpenCourseModal} />
        <TrustStatsBar />
        <AboutSection />
        <DifferentialsSection onOpenCourseModal={handleOpenCourseModal} />
        <CoursesSection onOpenCourseModal={handleOpenCourseModal} />
        <NormasRegulamentadorasSection />
        <CreaSection />
        <LearningGuaranteeSection />
        <DirectorSection />
        <GallerySection />
        <LocationsSection />
        <FAQSection />
      </main>

      {/* Contact & Footer */}
      <ContactFooter />

      {/* Floating Glowing WhatsApp Icon */}
      <FloatingWhatsApp />

      {/* Strategic Course Enrollment Modal */}
      <CourseModal
        isOpen={isCourseModalOpen}
        onClose={handleCloseCourseModal}
      />

    </div>
  );
}
