import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenInquiry: (subject?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? 'bg-[#070707]/80 backdrop-blur-md border-b border-white/[0.08] py-4'
            : 'bg-transparent py-7 sm:py-8 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Left: Refined Brand Signature */}
          <a
            href="#"
            className="group flex items-baseline space-x-2 text-[#F3F0E8] focus:outline-none"
            aria-label="IFYADE AUTOS"
          >
            <span className="font-sans text-[13px] tracking-[0.28em] font-medium uppercase text-[#F3F0E8] group-hover:text-white transition-colors">
              IFYADE AUTOS
            </span>
          </a>

          {/* Middle: Editorial Nav Items (Collection, Services, About) */}
          <nav className="hidden md:flex items-center space-x-10 text-[11px] tracking-[0.24em] uppercase text-[#8A877F]">
            <a
              href="#collection"
              className="hover:text-[#F3F0E8] transition-colors duration-300 relative py-1 hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#B99A5B] after:transition-all after:duration-300"
            >
              COLLECTION
            </a>
            <a
              href="#services"
              className="hover:text-[#F3F0E8] transition-colors duration-300 relative py-1 hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#B99A5B] after:transition-all after:duration-300"
            >
              SERVICES
            </a>
            <a
              href="#about"
              className="hover:text-[#F3F0E8] transition-colors duration-300 relative py-1 hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#B99A5B] after:transition-all after:duration-300"
            >
              ABOUT
            </a>
          </nav>

          {/* Right: Contact & Small Refined CTA */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#contact"
              className="text-[11px] tracking-[0.24em] uppercase text-[#8A877F] hover:text-[#F3F0E8] transition-colors duration-300"
            >
              CONTACT
            </a>

            <button
              onClick={() => onOpenInquiry('General Showroom Consultation')}
              className="group inline-flex items-center space-x-2 text-[10px] tracking-[0.26em] uppercase text-[#F3F0E8] hover:text-[#FFFFFF] px-4 py-2 border border-white/[0.12] hover:border-[#B99A5B] transition-all duration-300 cursor-pointer"
            >
              <span>ENQUIRE</span>
              <ArrowRight className="w-3 h-3 text-[#B99A5B] group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#8A877F] hover:text-[#F3F0E8] focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer (Spacious & Minimal) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#070707]/98 backdrop-blur-2xl md:hidden flex flex-col justify-between px-8 py-24">
          <div className="space-y-8">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#B99A5B] block">
              Menu
            </span>
            <nav className="space-y-6">
              {[
                { name: 'COLLECTION', href: '#collection' },
                { name: 'SERVICES', href: '#services' },
                { name: 'ABOUT', href: '#about' },
                { name: 'CONTACT', href: '#contact' },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block font-display-serif text-3xl tracking-tight text-[#F3F0E8] hover:text-[#B99A5B] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-8 border-t border-white/[0.08] space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry('Showroom Consultation');
              }}
              className="w-full py-3.5 text-center border border-white/[0.12] hover:border-[#B99A5B] text-[#F3F0E8] text-[11px] tracking-[0.25em] uppercase transition-colors"
            >
              ENQUIRE →
            </button>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#8A877F] text-center">
              Oyemekun Road, Akure
            </p>
          </div>
        </div>
      )}
    </>
  );
};
