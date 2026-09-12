import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface ContactSectionProps {
  onOpenConsultation: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section
      id="contact"
      className="relative min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-center items-center px-6 sm:px-12 bg-[#070707] overflow-hidden text-center"
    >
      {/* Subtle Cinematic Automotive Detail in Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="https://images.cdn-files-a.com/uploads/4901520/800_603846625d00c.jpg"
          alt="Luxury Automotive Finale"
          className="w-full h-full object-cover object-center filter contrast-[1.15] brightness-[0.22] saturate-[0.7]"
        />
        {/* Soft Vignette & Atmospheric Falloff */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-[#070707]/60 to-[#070707]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070707]/80 via-transparent to-[#070707]/80" />
      </div>

      {/* Cinematic Finale Content */}
      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[10px] tracking-[0.38em] uppercase text-[#B99A5B] font-medium block"
        >
          THE NEXT DRIVE STARTS HERE.
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-[clamp(3.25rem,8vw,7.5rem)] font-light text-[#F3F0E8] tracking-[-0.03em] leading-[0.94]"
        >
          FIND YOUR <br />
          <span className="font-display-serif italic font-normal text-white">
            NEXT CAR.
          </span>
        </motion.h2>

        {/* Sole Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="pt-6 flex justify-center"
        >
          <button
            onClick={onOpenConsultation}
            className="group inline-flex items-center space-x-3 text-[11px] tracking-[0.32em] uppercase text-[#F3F0E8] hover:text-white px-8 py-4 border border-white/[0.2] hover:border-[#B99A5B] transition-all duration-300 bg-[#070707]/60 backdrop-blur-md cursor-pointer"
          >
            <span>ENQUIRE</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#B99A5B] group-hover:translate-x-1.5 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
