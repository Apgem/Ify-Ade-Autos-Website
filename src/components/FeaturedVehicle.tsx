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
    <section id="featured" className="bg-[#070707] text-[#F3F0E8] overflow-hidden py-32 sm:py-44 lg:py-52 px-6 sm:px-10 lg:px-16">
      <div className="max-w-[94rem] mx-auto">
        {/* Structure 1: 01 / FEATURED AUTOMOBILE */}
        <div className="mb-6 sm:mb-8">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[10px] tracking-[0.38em] uppercase text-[#B99A5B] font-mono font-medium block"
          >
            01 / FEATURED AUTOMOBILE
          </motion.span>
        </div>

        {/* Structure 2: VERY LARGE LEXUS IMAGE (68–80vh cinematic height, object-cover) */}
        <div
          onClick={() => onSelectCar(featured)}
          className="group relative w-full h-[68vh] sm:h-[76vh] lg:h-[80vh] bg-[#0D0D0D] overflow-hidden cursor-pointer border border-white/[0.08]"
        >
          <motion.img
            initial={{ scale: 1.05 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            src={featured.images[0]}
            alt={featured.title}
            className="w-full h-full object-cover object-[center_38%] filter contrast-[1.12] brightness-[0.98] group-hover:scale-105 transition-transform duration-1000 ease-out"
          />

          {/* Subtle atmospheric vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#070707]/50 via-transparent to-[#070707]/15 opacity-60 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none" />
        </div>

        {/* Structure 3: Typography placed outside and below the image */}
        <div className="mt-8 sm:mt-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <h2 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-light text-[#F3F0E8] tracking-tight leading-[0.96]">
              2013 LEXUS <span className="font-display-serif italic font-normal text-white">RX 350</span>
            </h2>

            <p className="text-xs sm:text-sm text-[#8A877F] tracking-[0.24em] uppercase font-mono">
              2017 SPINDLE GRILLE CONVERSION
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => onSelectCar(featured)}
              className="group/btn inline-flex items-center space-x-3 text-[11px] tracking-[0.28em] uppercase text-[#F3F0E8] hover:text-white py-2 cursor-pointer relative"
            >
              <span>VIEW AUTOMOBILE</span>
              <span className="text-[#B99A5B] group-hover/btn:translate-x-1.5 transition-transform duration-300">
                →
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#B99A5B] group-hover/btn:w-full transition-all duration-300 ease-out" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
