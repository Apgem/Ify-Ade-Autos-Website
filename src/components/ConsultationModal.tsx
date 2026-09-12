import React, { useState, useEffect } from 'react';
import { X, MessageSquare, CheckCircle, ArrowRight } from 'lucide-react';
import { SITE_DATA } from '../data/content';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultService,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    interest: defaultService || SITE_DATA.inventory[0].title,
    serviceType: 'Direct Vehicle Acquisition',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultService) {
      setFormData((prev) => ({ ...prev, interest: defaultService }));
    }
  }, [defaultService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const waText = encodeURIComponent(
      `Hello Ifyade Autos!\n\nName: ${formData.name}\nPhone: ${formData.phone}\nInterest: ${formData.interest}\nInquiry: ${formData.serviceType}\nNotes: ${formData.notes || 'Inquiry for Akure showroom.'}`
    );
    const waUrl = `https://wa.me/2348037763627?text=${waText}`;

    setTimeout(() => {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }, 400);
  };

  return (
    <div
      id="inquiry-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/92 backdrop-blur-xl"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-lg bg-[#0D0D0D] border border-white/[0.08] p-8 sm:p-10 shadow-2xl max-h-[92vh] overflow-y-auto">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#8A877F] hover:text-[#F3F0E8] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-6">
            <div className="w-12 h-12 border border-[#B99A5B]/40 flex items-center justify-center mx-auto text-[#B99A5B]">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h3 className="font-sans text-2xl font-light text-[#F3F0E8] tracking-tight">
              Inquiry Prepared
            </h3>
            <p className="text-xs text-[#8A877F] font-light max-w-sm mx-auto leading-relaxed">
              Connecting you directly to our Akure showroom sales desk on WhatsApp ({SITE_DATA.dealership.contact.phoneFormatted}).
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={SITE_DATA.dealership.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="luxury-btn w-full sm:w-auto justify-center bg-white/[0.04]"
              >
                <span>OPEN WHATSAPP</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#B99A5B]" />
              </a>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full sm:w-auto px-6 py-3 border border-white/[0.08] text-xs text-[#8A877F] hover:text-[#F3F0E8] uppercase tracking-[0.2em] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#B99A5B] block mb-2">
              SHOWROOM CONSULTATION
            </span>
            <h3 className="font-sans text-2xl sm:text-3xl font-light text-[#F3F0E8] tracking-tight mb-2">
              Arrange An Engagement
            </h3>
            <p className="text-xs text-[#8A877F] font-light leading-relaxed mb-8">
              Inquire about any automobile, schedule a physical inspection beside Old Diamond Bank, or discuss a trade-in.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-[10px] uppercase tracking-[0.22em] text-[#8A877F] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Babatunde Adeleke"
                  className="w-full px-4 py-3 bg-[#070707] border border-white/[0.08] focus:border-[#B99A5B] text-[#F3F0E8] text-xs focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.22em] text-[#8A877F] mb-2">
                  Phone / WhatsApp
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. 0803 776 3627"
                  className="w-full px-4 py-3 bg-[#070707] border border-white/[0.08] focus:border-[#B99A5B] text-[#F3F0E8] text-xs focus:outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.22em] text-[#8A877F] mb-2">
                    Automobile
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-3 py-3 bg-[#070707] border border-white/[0.08] focus:border-[#B99A5B] text-[#F3F0E8] text-xs focus:outline-none transition-colors"
                  >
                    {SITE_DATA.inventory.map((car) => (
                      <option key={car.id} value={car.title} className="bg-[#070707] text-[#F3F0E8]">
                        {car.year} {car.make} {car.model}
                      </option>
                    ))}
                    <option value="Custom Auction Order" className="bg-[#070707] text-[#F3F0E8]">Custom Auction Order</option>
                    <option value="Vehicle Upgrade / Facelift" className="bg-[#070707] text-[#F3F0E8]">Facelift Conversion</option>
                    <option value="Car Swap Appraisal" className="bg-[#070707] text-[#F3F0E8]">Car Swap Valuation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.22em] text-[#8A877F] mb-2">
                    Purpose
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-3 py-3 bg-[#070707] border border-white/[0.08] focus:border-[#B99A5B] text-[#F3F0E8] text-xs focus:outline-none transition-colors"
                  >
                    <option value="Direct Vehicle Acquisition">Direct Purchase</option>
                    <option value="Physical Inspection & Test Drive">Showroom Inspection</option>
                    <option value="Swap Trade-In Valuation">Trade-In Valuation</option>
                    <option value="Price Consultation">Price Consultation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.22em] text-[#8A877F] mb-2">
                  Additional Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Inquiring on duty papers or physical inspection time"
                  className="w-full px-4 py-3 bg-[#070707] border border-white/[0.08] focus:border-[#B99A5B] text-[#F3F0E8] text-xs focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="luxury-btn w-full justify-center text-center cursor-pointer bg-white/[0.04]"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#B99A5B]" />
                <span>CONNECT WITH CONCIERGE</span>
              </button>

              <p className="text-[10px] text-center text-[#8A877F] tracking-[0.18em] uppercase pt-1">
                Akure Sales Desk: {SITE_DATA.dealership.contact.phoneFormatted}
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
