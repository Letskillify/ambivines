import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = "917772010555";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 group flex items-center">
      {/* Tooltip text */}
      <span className="hidden md:inline-block mr-3 bg-stone-900/90 text-white text-[10px] uppercase tracking-[0.25em] font-medium font-sans px-4 py-2 border border-stone-800 rounded-sm opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 pointer-events-none shadow-xl">
        Chat with us
      </span>

      {/* Ripple Animations */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.3)] transition-all duration-300 hover:scale-110 hover:shadow-[0_15px_40px_rgba(37,211,102,0.5)] active:scale-95 overflow-visible"
      >
        {/* Animated Rings */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping -z-10" style={{ animationDuration: '2s' }} />
        <span className="absolute inset-1 rounded-full bg-[#25D366]/20 animate-pulse-slow -z-10" />

        {/* WhatsApp Icon */}
        <FaWhatsapp size={32} className="relative z-10 drop-shadow-md text-white" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
