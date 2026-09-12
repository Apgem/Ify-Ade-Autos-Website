import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ServicesProps {
  onOpenInquiry: (serviceTitle?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenInquiry }) => {
  const services = [
    {
      num: '01',
      title: 'VEHICLE SALES',
      desc: 'Carefully vetted foreign-used and pristine new automobiles. Clean vehicle histories, verified mileage, and turnkey showroom delivery.',
    },
    {
      num: '02',
      title: 'AUTOMOTIVE SOURCING',
      desc: 'Direct auction access across premier North American dealer networks with end-to-end maritime shipping, port customs, and insured transit.',
    },
    {
      num: '03',
      title: 'VEHICLE ACQUISITION',
      desc: 'Fair market swap appraisals and transparent outright vehicle purchases with immediate settlement or credit toward your next automobile.',
    },
    {
      num: '04',
      title: 'AFTER-SALES SUPPORT',
      desc: 'Precision aesthetic conversions, modern facelift upgrades, and authenticated Nigeria Customs Service duty validation.',
    },
  ];

  return (
    <section id="services" className="py-36 sm:py-48 px-6 sm:px-10 lg:px-16 bg-[#070707]">
      <div className="max-w-[94rem] mx-auto">
        {/* Section Headline */}
        <div className="mb-24 sm:mb-36">
          <span className="text-[10px] tracking-[0.38em] uppercase text-[#B99A5B] block mb-4 font-medium">
            CAPABILITIES
          </span>
          <h2 className="font-sans text-4xl sm:text-6xl lg:text-7xl font-light text-[#F3F0E8] tracking-tight leading-[0.98]">
            AUTOMOTIVE <br />
            <span className="font-display-serif italic font-normal text-white">
              SERVICES.
            </span>
          </h2>
        </div>

        {/* Four Elegant Rows with Hairline Dividers (Taller rows, deep breathing room) */}
        <div className="border-t border-white/[0.08]">
          {services.map((item) => (
            <div
              key={item.num}
              onClick={() => onOpenInquiry(`Service: ${item.title}`)}
              className="group relative border-b border-white/[0.08] py-20 sm:py-28 transition-transform duration-500 hover:translate-x-2 cursor-pointer"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-12 items-baseline">
                {/* 01, 02, etc. */}
                <div className="md:col-span-2">
                  <span className="font-mono text-xs sm:text-sm text-[#8A877F] tracking-[0.25em] block">
                    {item.num}
                  </span>
                </div>

                {/* Service Title */}
                <div className="md:col-span-4">
                  <h3 className="font-sans text-2xl sm:text-3xl font-light text-[#F3F0E8] tracking-tight">
                    {item.title}
                  </h3>
                </div>

                {/* Secondary Description */}
                <div className="md:col-span-5">
                  <p className="text-xs sm:text-sm text-[#8A877F]/75 font-light leading-relaxed max-w-md">
                    {item.desc}
                  </p>
                </div>

                {/* Arrow Appears on Hover */}
                <div className="md:col-span-1 flex justify-end">
                  <div className="text-[#B99A5B] opacity-0 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Champagne line appears on hover */}
              <div className="absolute bottom-[-1px] left-0 w-0 h-[1px] bg-[#B99A5B] group-hover:w-full transition-all duration-500 ease-out" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
