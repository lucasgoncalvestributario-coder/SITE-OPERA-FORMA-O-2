import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStatsBar } from './components/TrustStatsBar';
import { WelcomeVideoSection } from './components/WelcomeVideoSection';
import { GallerySection } from './components/GallerySection';
import { MachinesSection } from './components/MachinesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { LearningGuaranteeSection } from './components/LearningGuaranteeSection';
import { DirectorSection } from './components/DirectorSection';
import { LocationsSection } from './components/LocationsSection';
import { FAQSection } from './components/FAQSection';
import { ContactFooter } from './components/ContactFooter';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { SocialProofNotification } from './components/SocialProofNotification';
import { CourseModal } from './components/CourseModal';
import { WhatsAppProvider } from './context/WhatsAppContext';

export default function App() {
  const [isCourseModalOpen, setIsCourseModalOpen] = useState(false);

  const handleOpenCourseModal = () => setIsCourseModalOpen(true);
  const handleCloseCourseModal = () => setIsCourseModalOpen(false);

  return (
    <WhatsAppProvider>
      <div className="min-h-screen bg-[#07080a] text-gray-100 font-sans selection:bg-amber-500 selection:text-black">
        
        {/* Top Navigation */}
        <Navbar onOpenCourseModal={handleOpenCourseModal} />

        {/* Main Page Flow */}
        <main>
          <Hero />
          <TrustStatsBar />
          <WelcomeVideoSection />
          <GallerySection />
          <MachinesSection />
          <TestimonialsSection />
          <LearningGuaranteeSection />
          <DirectorSection />
          <LocationsSection />
          <FAQSection />
        </main>

        {/* Contact & Footer */}
        <ContactFooter />

        {/* Floating Glowing WhatsApp Icon */}
        <FloatingWhatsApp />

        {/* Social Proof Realtime Enrollment Notification Banner */}
        <SocialProofNotification />

        {/* Strategic Course Enrollment Modal */}
        <CourseModal
          isOpen={isCourseModalOpen}
          onClose={handleCloseCourseModal}
        />

      </div>
    </WhatsAppProvider>
  );
}


