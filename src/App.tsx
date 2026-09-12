import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedVehicle } from './components/FeaturedVehicle';
import { InventorySection } from './components/InventorySection';
import { Services } from './components/Services';
import { WhyUs } from './components/WhyUs';
import { Testimonials } from './components/Testimonials';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { VehicleModal } from './components/VehicleModal';
import { ConsultationModal } from './components/ConsultationModal';
import { CarItem, SITE_DATA } from './data/content';
import { MessageSquare } from 'lucide-react';

export default function App() {
  const [selectedCar, setSelectedCar] = useState<CarItem | null>(null);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquirySubject, setInquirySubject] = useState<string | undefined>(undefined);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'suv' | 'sedan' | 'van'>('all');

  const handleOpenInquiry = (subject?: string) => {
    setInquirySubject(subject);
    setInquiryModalOpen(true);
  };

  const handleBookInspection = (vehicleTitle: string) => {
    handleOpenInquiry(`Inspection Request: ${vehicleTitle}`);
  };

  const handleExploreInventory = () => {
    const el = document.getElementById('collection');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#070707] text-[#F3F0E8] selection:bg-[#B99A5B]/30 selection:text-[#FFFFFF] antialiased">
      {/* Refined Minimal Luxury Navigation */}
      <Navbar onOpenInquiry={handleOpenInquiry} />

      {/* Main Experience */}
      <main id="main-content">
        {/* HERO: Cinematic Automotive Campaign */}
        <Hero
          onExploreInventory={handleExploreInventory}
          onContactClick={handleContactClick}
        />

        {/* FEATURED AUTOMOBILE: Full-Width Feature */}
        <FeaturedVehicle onSelectCar={(car) => setSelectedCar(car)} />

        {/* THE COLLECTION: Editorial Rhythm & Asymmetric Compositions */}
        <InventorySection
          onSelectCar={(car) => setSelectedCar(car)}
          selectedCategory={selectedCategory}
          onCategoryChange={(cat) => setSelectedCategory(cat)}
          onOpenInquiry={handleOpenInquiry}
        />

        {/* SERVICES: Editorial List with Large Numbers & Hairlines */}
        <Services onOpenInquiry={handleOpenInquiry} />

        {/* A BETTER WAY: Asymmetric Layout & Four Quiet Principles */}
        <WhyUs />

        {/* CLIENT EXPERIENCE: Large Quotation & Whitespace */}
        <Testimonials />

        {/* BRAND STORY: Built Around the Love of Cars */}
        <AboutSection />

        {/* FINAL CTA: Dramatic Dark Section */}
        <ContactSection onOpenConsultation={() => handleOpenInquiry('Showroom Acquisition Consultation')} />
      </main>

      {/* FOOTER: Minimal & Sophisticated */}
      <Footer />

      {/* Discreet Concierge WhatsApp Trigger */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href={SITE_DATA.dealership.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center space-x-2 px-4 py-2 bg-[#0D0D0D]/90 hover:bg-[#141414] border border-white/[0.1] hover:border-[#B99A5B] text-[#F3F0E8] backdrop-blur-md shadow-2xl transition-all duration-300"
          title="Direct WhatsApp Concierge"
          aria-label="Direct WhatsApp Concierge"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#B99A5B] animate-pulse" />
          <MessageSquare className="w-3.5 h-3.5 text-[#B99A5B]" />
          <span className="text-[10px] tracking-[0.22em] uppercase font-medium">
            Concierge
          </span>
        </a>
      </div>

      {/* Vehicle Specifications Modal */}
      <VehicleModal
        car={selectedCar}
        onClose={() => setSelectedCar(null)}
        onBookInspection={handleBookInspection}
      />

      {/* General Inquiry & Consultation Modal */}
      <ConsultationModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        defaultService={inquirySubject}
      />
    </div>
  );
}
