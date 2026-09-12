import React from 'react';
import { motion } from 'motion/react';
import { CarItem, SITE_DATA } from '../data/content';
import { ArrowRight } from 'lucide-react';

interface FeaturedVehicleProps {
  onSelectCar: (car: CarItem) => void;
}

export const FeaturedVehicle: React.FC<FeaturedVehicleProps> = ({ onSelectCar }) => {
  // Flagship vehicle: Lexus RX 350 Spindle Grille Conversion
  const featured =
    SITE_DATA.inventory.find((c) => c.id === 'lexus-rx350-2013-upgraded') || SITE_DATA.inventory[0];

  return (
    <section id="featured" className="bg-[#070707] text-[#F3F0E8] overflow-hidden">
      {/* 2. VISUAL PAUSE AFTER HERO: Quiet transition & whitespace */}
      <div className="pt-28 sm:pt-40 pb-20 sm:pb-28 text-center px-6">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[10px] tracking-[0.42em] uppercase text-[#B99A5B] font-medium block"
        >
          THE COLLECTION
        </motion.span>
      </div>

      {/* 3. FEATURED AUTOMOBILE: Monumental Edge-to-Edge Showcase */}
      <div className="w-full px-3 sm:px-6 lg:px-10 pb-28 sm:pb-36">
        {/* Magazine-style Index Header */}
        <div className="max-w-[94rem] mx-auto mb-6 flex items-center justify-between text-[11px] tracking-[0.32em] uppercase text-[#8A877F]">
          <span className="text-[#B99A5B] font-medium">01 / FEATURED AUTOMOBILE</span>
          <span className="hidden sm:inline font-mono">{featured.customsStatus}</span>
        </div>

        {/* Almost Edge-to-Edge Image Container (~75% Viewport Height, No Rounded Corners) */}
        <div
          onClick={() => onSelectCar(featured)}
          className="group relative w-full h-[72vh] sm:h-[78vh] bg-[#0D0D0D] overflow-hidden cursor-pointer border border-white/[0.08]"
        >
          {/* Main Hero Automobile Photo */}
          <motion.img
            initial={{ scale: 1.06 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            src={featured.images[0]}
            alt={featured.title}
            className="w-full h-full object-cover object-center filter contrast-[1.08] brightness-[0.88] group-hover:scale-105 transition-transform duration-1000 ease-out"
          />

          {/* Cinematic Vignette & Bottom Falloff */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-[#070707]/30 to-transparent opacity-95 group-hover:opacity-75 transition-opacity duration-700 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070707]/80 via-transparent to-transparent opacity-70 pointer-events-none" />

          {/* Magazine Caption Overlay (Minimal & Architectural) */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-12 lg:p-16 flex flex-col md:flex-row md:items-end justify-between gap-8 z-10">
            <div className="max-w-xl space-y-3">
              <span className="text-[10px] tracking-[0.32em] uppercase text-[#B99A5B] block font-mono">
                01 / FEATURED AUTOMOBILE
              </span>

              <h2 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-light text-[#F3F0E8] tracking-tight leading-[1.02]">
                {featured.year} {featured.make} <br />
                <span className="font-display-serif italic font-normal text-white">
                  {featured.model}
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-[#8A877F] font-light leading-relaxed max-w-md pt-1">
                {featured.description}
              </p>
            </div>

            <div className="shrink-0">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectCar(featured);
                }}
                className="group/btn inline-flex items-center space-x-3 text-[11px] tracking-[0.28em] uppercase text-[#F3F0E8] hover:text-white px-6 py-3.5 border border-white/[0.15] hover:border-[#B99A5B] transition-all duration-300 bg-[#070707]/80 backdrop-blur-md cursor-pointer"
              >
                <span>VIEW AUTOMOBILE</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#B99A5B] group-hover/btn:translate-x-1.5 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
