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

      {/* Main Experience: Distinct Visual Rhythm & Cadence */}
      <main id="main-content">
        {/* 1. FULL-BLEED IMAGE: Hero Automotive Campaign */}
        <Hero
          onExploreInventory={handleExploreInventory}
          onContactClick={handleContactClick}
        />

        {/* 2. ASYMMETRIC EDITORIAL SECTION: 74vh Featured Vehicle Showcase */}
        <FeaturedVehicle onSelectCar={(car) => setSelectedCar(car)} />

        {/* 3. QUIET TEXT SECTION: Authentic Brand Provenance Story */}
        <AboutSection />

        {/* 4. FULL-BLEED AUTOMOTIVE MOMENT: Lookbook Collection with Large Vehicles */}
        <InventorySection
          onSelectCar={(car) => setSelectedCar(car)}
          selectedCategory={selectedCategory}
          onCategoryChange={(cat) => setSelectedCategory(cat)}
          onOpenInquiry={handleOpenInquiry}
        />

        {/* 5. EDITORIAL LIST: Automotive Capabilities */}
        <Services onOpenInquiry={handleOpenInquiry} />

        {/* 6. MANIFESTO: A Better Way to Buy Your Next Car */}
        <WhyUs />

        {/* 7. TESTIMONIAL: Large Editorial Quotation with Subtle Texture */}
        <Testimonials />

        {/* 8. CINEMATIC CTA: Finale with Automotive Silhouette */}
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
