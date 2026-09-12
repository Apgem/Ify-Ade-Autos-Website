import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SITE_DATA } from '../data/content';

export const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);
  const testimonials = SITE_DATA.testimonials;
  const current = testimonials[index];

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="reviews" className="relative py-44 sm:py-64 px-6 sm:px-10 lg:px-16 bg-[#070707] overflow-hidden">
      {/* Extremely subtle automotive texture in background (6% opacity, pure atmosphere) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="https://images.cdn-files-a.com/uploads/4901520/800_6038466b95142.jpg"
          alt="Atmospheric automotive texture"
          className="w-full h-full object-cover object-center filter grayscale contrast-125 opacity-[0.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-[#070707]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070707] via-transparent to-[#070707]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-12"
          >
            {/* Monumental Centered Quotation */}
            <blockquote className="font-display-serif text-3xl sm:text-5xl lg:text-6xl text-[#F3F0E8] font-light leading-[1.22] tracking-tight italic">
              "{current.quote}"
            </blockquote>

            {/* Quiet Attribution */}
            <div className="space-y-2 pt-4">
              <span className="text-[10px] tracking-[0.38em] uppercase text-[#B99A5B] block font-medium">
                CLIENT EXPERIENCE
              </span>
              <p className="text-xs text-[#8A877F] tracking-[0.24em] uppercase font-light">
                {current.name} &mdash; {current.location}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Minimal dot-step trigger */}
        {testimonials.length > 1 && (
          <div className="pt-16 flex items-center justify-center space-x-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-[1px] transition-all duration-300 cursor-pointer ${
                  i === index ? 'w-8 bg-[#B99A5B]' : 'w-3 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Show review ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
