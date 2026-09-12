import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-36 sm:py-52 px-6 sm:px-10 lg:px-16 bg-[#070707]">
      <div className="max-w-[94rem] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          {/* Authentic Mercedes Rear Photograph: Tail lights, Mercedes star badge, sculpted body lines */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/11] overflow-hidden bg-[#0D0D0D] border border-white/[0.08]">
              <img
                src="https://images.cdn-files-a.com/uploads/4901520/800_6038466b95142.jpg"
                alt="Authentic Mercedes-Benz rear tail lights, badge, and bodywork at Ifyade Autos"
                className="w-full h-full object-cover object-[center_36%] filter contrast-[1.14] brightness-[0.96]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070707]/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Luxury Brand Story Copy */}
          <div className="lg:col-span-5 space-y-8">
            <h2 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-light text-[#F3F0E8] tracking-tight leading-[0.98]">
              BUILT AROUND <br />
              <span className="font-display-serif italic font-normal text-white">
                THE LOVE OF CARS.
              </span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#8A877F] font-light leading-relaxed">
              <p>
                Founded in Akure, Ondo State, Ifyade Autos was established with a singular standard: bringing true transparency and uncompromising quality to automotive ownership in Nigeria.
              </p>
              <p>
                We curate clean-title foreign-used and upgraded vehicles, verify every customs document directly through official port channels, and maintain an open showroom floor built on trust and personal relationships.
              </p>
            </div>

            {/* Quiet Provenance Line */}
            <div className="pt-6 border-t border-white/[0.08] text-xs text-[#8A877F]/80 flex items-center justify-between tracking-[0.22em] uppercase font-mono">
              <span>EST. AKURE</span>
              <span>AUTHENTIC CUSTOMS DUTY</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
