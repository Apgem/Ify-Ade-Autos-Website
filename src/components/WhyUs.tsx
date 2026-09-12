import React from 'react';

export const WhyUs: React.FC = () => {
  const principles = [
    {
      title: 'SELECTION',
      desc: 'Hand-picked acquisitions from trusted North American dealer networks. Zero unvetted lots.',
    },
    {
      title: 'QUALITY',
      desc: 'Authentic mileage, untouched odometers, and comprehensive pre-delivery inspection.',
    },
    {
      title: 'TRANSPARENCY',
      desc: 'Original Customs Single Goods Declaration (SGD) duty documentation. Every paper is verifiable.',
    },
    {
      title: 'CONFIDENCE',
      desc: 'Physical showroom on Oyemekun Road with on-site mechanic inspections and secure nationwide logistics.',
    },
  ];

  return (
    <section id="why-us" className="py-36 sm:py-52 px-6 sm:px-10 lg:px-16 bg-[#070707]">
      <div className="max-w-[94rem] mx-auto">
        {/* Asymmetric Editorial Grid: Monumental Headline + Distant Paragraph */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-32 sm:mb-44 items-start">
          <div className="lg:col-span-8">
            <h2 className="font-sans text-[clamp(2.75rem,7vw,6.5rem)] font-light text-[#F3F0E8] tracking-[-0.03em] leading-[0.94]">
              A BETTER WAY <br />
              <span className="font-display-serif italic font-normal text-white">
                TO BUY YOUR
              </span> <br />
              NEXT CAR.
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pt-12">
            <p className="text-sm sm:text-base text-[#8A877F] leading-relaxed font-light">
              The automobile market is often complicated by speculation and obscured history. At Ifyade Autos, we replace uncertainty with verifiable provenance: authentic foreign-used mileage, genuine Nigeria Customs Service duty clearances, and a physical showroom floor open for rigorous scrutiny.
            </p>
          </div>
        </div>

        {/* Brand Manifesto Pillars: Pure Typography & Thin Rules (NO CARDS) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16 pt-16 border-t border-white/[0.08]">
          {principles.map((item, idx) => (
            <div key={item.title} className="space-y-4">
              <span className="text-[10px] tracking-[0.3em] text-[#8A877F] font-mono block">
                0{idx + 1}
              </span>
              <h3 className="font-sans text-sm tracking-[0.25em] uppercase text-[#F3F0E8] font-medium">
                {item.title}
              </h3>
              <div className="w-8 h-[1px] bg-white/[0.12]" />
              <p className="text-xs text-[#8A877F]/75 leading-relaxed font-light pt-1">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
