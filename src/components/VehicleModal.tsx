import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CarItem } from '../data/content';
import { X, MessageSquare, ArrowRight } from 'lucide-react';

interface VehicleModalProps {
  car: CarItem | null;
  onClose: () => void;
  onBookInspection: (vehicleTitle: string) => void;
}

export const VehicleModal: React.FC<VehicleModalProps> = ({ car, onClose, onBookInspection }) => {
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  if (!car) return null;

  const currentImg = car.images[activeImgIndex] || car.images[0];

  const generateWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hello Ifyade Autos! I am inquiring about the ${car.year} ${car.make} ${car.model} (${car.title}) in your Akure showroom collection. Could you please provide the price and inspection schedule?`
    );
    return `https://wa.me/2348037763627?text=${text}`;
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/92 backdrop-blur-xl"
        />

        {/* Modal Container: Sharp Editorial Aesthetic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 15 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl bg-[#0D0D0D] border border-white/[0.08] shadow-2xl overflow-hidden z-10 my-auto max-h-[92vh] flex flex-col"
        >
          {/* Top Bar */}
          <div className="p-6 border-b border-white/[0.08] flex items-center justify-between bg-[#070707]">
            <div className="flex items-center space-x-3 text-[10px] tracking-[0.3em] uppercase text-[#8A877F]">
              <span className="text-[#B99A5B]">{car.condition}</span>
              <span className="text-white/20">•</span>
              <span>Akure Showroom</span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-[#8A877F] hover:text-[#F3F0E8] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-10 overflow-y-auto space-y-10">
            {/* Gallery Image Display */}
            <div className="space-y-4">
              <div className="relative aspect-[16/9] bg-[#070707] overflow-hidden border border-white/[0.08]">
                <img
                  src={currentImg}
                  alt={car.title}
                  className="w-full h-full object-cover filter contrast-[1.05] brightness-95"
                />
              </div>

              {/* Thumbnails if multiple images exist */}
              {car.images.length > 1 && (
                <div className="flex items-center space-x-3">
                  {car.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImgIndex(idx)}
                      className={`relative w-20 h-14 overflow-hidden border transition-all cursor-pointer ${
                        activeImgIndex === idx
                          ? 'border-[#B99A5B] opacity-100'
                          : 'border-white/[0.08] opacity-50 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Vehicle Details & Specifications */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#8A877F] font-mono block">
                    {car.year}
                  </span>

                  <h2 className="font-sans text-3xl sm:text-4xl text-[#F3F0E8] font-light tracking-tight">
                    {car.make} <span className="font-display-serif italic font-normal text-white">{car.model}</span>
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-[#8A877F] font-light leading-relaxed">
                  {car.description}
                </p>

                {/* Selected Features */}
                <div className="pt-4 space-y-3">
                  <span className="text-[10px] tracking-[0.28em] uppercase text-[#8A877F] block">
                    HIGHLIGHTED FEATURES
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#F3F0E8]/90 font-light">
                    {car.features.map((feat, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <span className="w-1 h-1 bg-[#B99A5B]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Technical Specifications Box */}
              <div className="lg:col-span-5 p-6 bg-[#070707] border border-white/[0.08] space-y-5">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#B99A5B] block">
                  TECHNICAL SPECIFICATIONS
                </span>

                <div className="space-y-3 text-xs divide-y divide-white/[0.08]">
                  <div className="flex justify-between pt-2">
                    <span className="text-[#8A877F]">Engine</span>
                    <span className="text-[#F3F0E8] font-mono">{car.engine}</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span className="text-[#8A877F]">Power</span>
                    <span className="text-[#F3F0E8] font-mono">{car.horsepower}</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span className="text-[#8A877F]">Transmission</span>
                    <span className="text-[#F3F0E8] font-mono">{car.transmission}</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span className="text-[#8A877F]">Drivetrain</span>
                    <span className="text-[#F3F0E8] font-mono">{car.drivetrain}</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span className="text-[#8A877F]">Odometer</span>
                    <span className="text-[#F3F0E8] font-mono">{car.mileage}</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span className="text-[#8A877F]">Customs Clearance</span>
                    <span className="text-[#B99A5B] font-mono">{car.customsStatus}</span>
                  </div>
                </div>

                {/* Minimal Editorial Actions */}
                <div className="pt-6 space-y-3">
                  <a
                    href={generateWhatsAppInquiry()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="luxury-btn w-full justify-center text-center cursor-pointer bg-white/[0.03]"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#B99A5B]" />
                    <span>INQUIRE VIA WHATSAPP</span>
                  </a>

                  <button
                    onClick={() => {
                      onClose();
                      onBookInspection(car.title);
                    }}
                    className="group w-full py-3.5 border border-white/[0.08] hover:border-[#B99A5B] text-xs text-[#8A877F] hover:text-[#F3F0E8] uppercase tracking-[0.22em] transition-colors cursor-pointer text-center flex items-center justify-center space-x-2"
                  >
                    <span>SCHEDULE SHOWROOM VISIT</span>
                    <ArrowRight className="w-3 h-3 text-[#B99A5B] group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
