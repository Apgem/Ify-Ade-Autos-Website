import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CarItem, SITE_DATA } from '../data/content';

interface InventorySectionProps {
  onSelectCar: (car: CarItem) => void;
  selectedCategory: 'all' | 'suv' | 'sedan' | 'van';
  onCategoryChange: (category: 'all' | 'suv' | 'sedan' | 'van') => void;
  onOpenInquiry: (vehicleTitle?: string) => void;
}

export const InventorySection: React.FC<InventorySectionProps> = ({
  onSelectCar,
  selectedCategory,
  onCategoryChange,
}) => {
  const [showAll, setShowAll] = useState(false);

  const categories = [
    { id: 'all', label: 'All Automobiles' },
    { id: 'suv', label: 'SUVs' },
    { id: 'sedan', label: 'Sedans' },
    { id: 'van', label: 'Vans' },
  ] as const;

  const filtered = SITE_DATA.inventory.filter((car) => {
    if (selectedCategory === 'all') return true;
    return car.category === selectedCategory;
  });

  const displayedCars = showAll || selectedCategory !== 'all' ? filtered : filtered.slice(0, 5);

  return (
    <section id="collection" className="py-32 sm:py-48 px-6 sm:px-10 lg:px-16 bg-[#070707]">
      <div className="max-w-[94rem] mx-auto">
        {/* Section Header: Quiet Editorial Typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-28 sm:mb-40 gap-10 border-b border-white/[0.08] pb-12">
          <div>
            <span className="text-[10px] tracking-[0.38em] uppercase text-[#B99A5B] block mb-3 font-medium">
              CURRENT ARCHIVE
            </span>

            <h2 className="font-sans text-4xl sm:text-6xl font-light text-[#F3F0E8] tracking-tight">
              THE <br />
              <span className="font-display-serif italic font-normal text-white">
                INVENTORY.
              </span>
            </h2>
          </div>

          {/* Minimalist Filter Bar */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-10">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    onCategoryChange(cat.id);
                    setShowAll(true);
                  }}
                  className={`text-[11px] tracking-[0.26em] uppercase transition-colors relative py-1 cursor-pointer ${
                    isActive ? 'text-[#F3F0E8] font-medium' : 'text-[#8A877F] hover:text-[#F3F0E8]'
                  }`}
                >
                  {cat.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterUnderline"
                      className="absolute bottom-[-13px] left-0 right-0 h-[1px] bg-[#B99A5B]"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Editorial Rhythm Layout: Alternating Large Scale Spreads, No Paragraph Bloat */}
        <div className="space-y-40 sm:space-y-56">
          {displayedCars.map((car, idx) => {
            const isEven = idx % 2 === 0;
            const itemNumber = `0${idx + 2}`; // following 01 featured

            return (
              <article
                key={car.id}
                onClick={() => onSelectCar(car)}
                className="group cursor-pointer block"
              >
                {isEven ? (
                  /* Layout A: Dominant Large Image Left (8 cols), Crisp Typography Right (4 cols) */
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                    <div className="lg:col-span-8">
                      <div className="relative aspect-[16/10] sm:aspect-[21/12] overflow-hidden bg-[#0D0D0D] border border-white/[0.08]">
                        <img
                          src={car.images[0]}
                          alt={`${car.year} ${car.make} ${car.model}`}
                          className="w-full h-full object-cover filter contrast-[1.08] brightness-[0.92] group-hover:scale-105 transition-transform duration-1000 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#070707]/60 via-transparent to-transparent opacity-50 group-hover:opacity-10 transition-opacity duration-700" />
                        
                        {/* Index Number */}
                        <div className="absolute top-6 left-6 text-[10px] tracking-[0.3em] text-[#8A877F] font-mono">
                          {itemNumber}
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-4 space-y-6 lg:pl-6">
                      <div className="space-y-3">
                        <span className="text-[10px] tracking-[0.32em] uppercase text-[#B99A5B] block font-mono">
                          {car.year} / {car.condition.toUpperCase()}
                        </span>

                        <h3 className="font-sans text-2xl sm:text-4xl font-light text-[#F3F0E8] tracking-tight leading-snug">
                          {car.make} <br />
                          <span className="font-display-serif italic font-normal text-white">
                            {car.model}
                          </span>
                        </h3>

                        <p className="text-[11px] text-[#8A877F] tracking-[0.22em] uppercase pt-2 font-mono">
                          {car.engine} • {car.transmission.split(' ')[0]}
                        </p>
                      </div>

                      <div className="pt-4">
                        <div className="inline-flex items-center space-x-2 text-[11px] tracking-[0.28em] uppercase text-[#F3F0E8] py-2 relative">
                          <span>VIEW AUTOMOBILE</span>
                          <span className="text-[#B99A5B] group-hover:translate-x-1.5 transition-transform duration-300">
                            →
                          </span>
                          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#B99A5B] group-hover:w-full transition-all duration-300 ease-out" />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Layout B: Reverse Composition — Typography Left (4 cols), Dominant Image Right (8 cols) */
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                    <div className="lg:col-span-4 lg:order-1 space-y-6 lg:pr-6">
                      <div className="space-y-3">
                        <span className="text-[10px] tracking-[0.32em] uppercase text-[#B99A5B] block font-mono">
                          {car.year} / {car.condition.toUpperCase()}
                        </span>

                        <h3 className="font-sans text-2xl sm:text-4xl font-light text-[#F3F0E8] tracking-tight leading-snug">
                          {car.make} <br />
                          <span className="font-display-serif italic font-normal text-white">
                            {car.model}
                          </span>
                        </h3>

                        <p className="text-[11px] text-[#8A877F] tracking-[0.22em] uppercase pt-2 font-mono">
                          {car.horsepower || car.engine} • {car.drivetrain}
                        </p>
                      </div>

                      <div className="pt-4">
                        <div className="inline-flex items-center space-x-2 text-[11px] tracking-[0.28em] uppercase text-[#F3F0E8] py-2 relative">
                          <span>VIEW AUTOMOBILE</span>
                          <span className="text-[#B99A5B] group-hover:translate-x-1.5 transition-transform duration-300">
                            →
                          </span>
                          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#B99A5B] group-hover:w-full transition-all duration-300 ease-out" />
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-8 lg:order-2">
                      <div className="relative aspect-[16/10] sm:aspect-[21/12] overflow-hidden bg-[#0D0D0D] border border-white/[0.08]">
                        <img
                          src={car.images[0]}
                          alt={`${car.year} ${car.make} ${car.model}`}
                          className="w-full h-full object-cover filter contrast-[1.08] brightness-[0.92] group-hover:scale-105 transition-transform duration-1000 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#070707]/60 via-transparent to-transparent opacity-50 group-hover:opacity-10 transition-opacity duration-700" />
                        
                        <div className="absolute top-6 right-6 text-[10px] tracking-[0.3em] text-[#8A877F] font-mono">
                          {itemNumber}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* View Complete Archive Button */}
        {!showAll && selectedCategory === 'all' && filtered.length > 5 && (
          <div className="pt-32 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="group inline-flex items-center space-x-3 text-[11px] tracking-[0.28em] uppercase text-[#F3F0E8] hover:text-white px-8 py-4 border border-white/[0.15] hover:border-[#B99A5B] transition-all duration-300 cursor-pointer bg-[#070707]"
            >
              <span>VIEW COMPLETE ARCHIVE ({filtered.length} AUTOMOBILES)</span>
              <span className="text-[#B99A5B] group-hover:translate-y-1 transition-transform duration-300">↓</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
