import React from 'react';
import { SITE_DATA } from '../data/content';

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-[#070707] border-t border-white/[0.08] py-24 px-6 sm:px-10 lg:px-16 text-[#8A877F]">
      <div className="max-w-[94rem] mx-auto space-y-20">
        {/* Clean Editorial Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/[0.08]">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <span className="font-sans text-sm tracking-[0.28em] font-medium text-[#F3F0E8] uppercase block">
              IFYADE AUTOS
            </span>
            <p className="text-xs text-[#8A877F]/80 leading-relaxed font-light max-w-xs">
              Curated foreign-used and upgraded automobiles. Verified provenance, authentic Customs clearance, and physical showroom transparency.
            </p>
          </div>

          {/* Showroom Address */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[9px] tracking-[0.28em] uppercase text-[#B99A5B] block font-mono">
              SHOWROOM
            </span>
            <p className="text-xs text-[#F3F0E8]/90 font-light leading-relaxed">
              {SITE_DATA.dealership.address.primary}
            </p>
            <a
              href={SITE_DATA.dealership.address.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[10px] tracking-[0.2em] uppercase text-[#8A877F] hover:text-[#B99A5B] transition-colors pt-1"
            >
              Directions →
            </a>
          </div>

          {/* Hours */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-[9px] tracking-[0.28em] uppercase text-[#B99A5B] block font-mono">
              HOURS
            </span>
            <p className="text-xs text-[#F3F0E8]/90 font-light leading-relaxed">
              Mon – Sat: 8:00 AM – 6:30 PM <br />
              Sunday: By Appointment
            </p>
          </div>

          {/* Direct Communication */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[9px] tracking-[0.28em] uppercase text-[#B99A5B] block font-mono">
              COMMUNICATION
            </span>
            <div className="space-y-2 text-xs">
              <div>
                <a
                  href={`tel:${SITE_DATA.dealership.contact.phoneRaw}`}
                  className="text-[#F3F0E8]/90 hover:text-white transition-colors font-light"
                >
                  {SITE_DATA.dealership.contact.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center space-x-5 pt-1 text-[11px] tracking-[0.2em] uppercase">
                <a
                  href={SITE_DATA.dealership.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8A877F] hover:text-[#B99A5B] transition-colors"
                >
                  WhatsApp
                </a>
                <a
                  href={SITE_DATA.dealership.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8A877F] hover:text-[#B99A5B] transition-colors"
                >
                  Instagram
                </a>
                <a
                  href={SITE_DATA.dealership.contact.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8A877F] hover:text-[#B99A5B] transition-colors"
                >
                  TikTok
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Minimal Bottom Line */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[10px] tracking-[0.25em] uppercase text-[#8A877F]/60 font-mono">
          <p>IFYADE AUTOS • AKURE, NIGERIA</p>
          <p>ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </footer>
  );
};
