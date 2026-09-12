import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onExploreInventory: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreInventory, onContactClick }) => {
  return (
    <section
      id="hero"
      className="relative h-screen min-h-[720px] flex flex-col justify-between pt-28 sm:pt-36 pb-12 sm:pb-16 px-6 sm:px-12 lg:px-20 bg-[#070707] overflow-hidden"
    >
      {/* Dominant Cinematic Automotive Imagery (Vehicle 15-20% larger, selective front illumination) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ scale: 1.25, opacity: 0 }}
          animate={{ scale: 1.15, opacity: 0.96 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full h-full"
        >
          <img
            src="https://images.cdn-files-a.com/uploads/4901520/800_603836ef82f4f.jpg"
            alt="Flagship Mercedes-Benz GLE 350 at Ifyade Autos"
            className="w-full h-full object-cover object-[center_32%] sm:object-[center_26%] filter contrast-[1.26] brightness-[1.06] saturate-[0.98]"
          />
          {/* Selective Lighting: Highlights grille, headlights, hood & front bodywork while keeping surrounding environment dark */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_35%,_transparent_15%,_#070707_88%)] pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-[#070707]/70 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070707]/80 via-transparent to-[#070707]/70 pointer-events-none" />
        </motion.div>
      </div>

      {/* Top: IFYADE AUTOS signature */}
      <div className="relative z-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <span className="text-[11px] tracking-[0.38em] uppercase text-[#F3F0E8] font-medium">
            IFYADE AUTOS
          </span>
        </motion.div>
      </div>

      {/* Main Campaign Headline & Actions (Dramatic Scale, Pure Automotive Focus) */}
      <div className="relative z-20 w-full my-auto py-8">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-[clamp(2.75rem,8vw,7.5rem)] font-light tracking-[-0.03em] leading-[0.94] text-[#F3F0E8] mb-10 max-w-4xl"
        >
          DRIVE SOMETHING <br />
          <span className="font-display-serif italic font-normal text-white">
            EXTRAORDINARY.
          </span>
        </motion.h1>

        {/* Minimal CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-wrap items-center gap-6 sm:gap-10"
        >
          <button
            onClick={onExploreInventory}
            className="group inline-flex items-center space-x-3 text-[11px] tracking-[0.28em] uppercase text-[#F3F0E8] hover:text-white px-6 py-3.5 border border-white/[0.18] hover:border-[#B99A5B] transition-all duration-300 cursor-pointer bg-[#070707]/50 backdrop-blur-sm"
          >
            <span>EXPLORE COLLECTION</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#B99A5B] group-hover:translate-x-1.5 transition-transform duration-300" />
          </button>

          <button
            onClick={onContactClick}
            className="group inline-flex items-center space-x-2 text-[11px] tracking-[0.28em] uppercase text-[#8A877F] hover:text-[#F3F0E8] transition-colors py-3.5 cursor-pointer"
          >
            <span>ENQUIRE</span>
            <span className="text-[#B99A5B] group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </button>
        </motion.div>
      </div>

      {/* Baseline: Clean location signature without noisy micro-metadata */}
      <div className="relative z-20 w-full pt-6 border-t border-white/[0.08] flex items-center justify-between text-[10px] tracking-[0.32em] uppercase text-[#8A877F]">
        <span>ABUJA / NIGERIA</span>
      </div>
    </section>
  );
};
