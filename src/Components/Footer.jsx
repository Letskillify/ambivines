import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, ArrowUp, ChevronRight, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const brandColor = '#5a0019';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    {
      title: 'About Us',
      links: [
        { name: 'Our Story', href: '/our-story' },
        { name: 'Our People', href: '/our-people' },
        { name: 'Our Vineyards', href: '/our-vineyards' },
        { name: 'Our Farmers', href: '/our-farmers' },

      ],
    },
    {
      title: 'Our Wines',
      links: [
        { name: 'Explore All', href: '/wines' },
        { name: 'Red Wine', href: '/wines/red' },
        { name: 'White Wine', href: '/wines/white' },
        { name: 'Rosé Wine', href: '/wines/rose' },
        { name: 'Sparkling Wine', href: '/wines/sparkling' },
      ],
    },
    {
      title: 'Explore',
      links: [
        // { name: 'Book a Tour', href: '/book-tour' },
        { name: 'Our Outlets', href: '/stores' },
        { name: 'Events', href: '/events' },
        { name: 'Get A Franchise', href: '/partner' },
      ],
    },
  ];

  return (
    <footer className="relative py-24 pb-12 px-6 md:px-16 overflow-hidden" style={{ backgroundColor: brandColor }}>
      {/* Subtle Grain Overlay for Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>

      <div className="relative z-10 max-w-[1300px] mx-auto">

        {/* --- Top Section --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24 items-start">

          {/* Brand Identity */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex flex-col">
              {/* <h2 className="text-3xl md:text-4xl font-serif tracking-[0.25em] text-white leading-none">
                AMBI VINES
              </h2> */}
              <img src="/img/logo_white.png" alt="Ambi Wines" style={{ width: "110px" }} />
             
            </div>
            <p className="text-sm font-light leading-relaxed max-w-xs text-white/80 font-sans italic">
              "From the heart of Madhya Pradesh, we craft wines rooted in passion, precision, and authenticity, with a vision to take Central India to the global stage."
            </p>
            <div className="flex space-x-6 pt-2">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/ambivineyards?igsh=aGN5eTdtZzI4cmNi" },
                { Icon: Facebook, href: "https://www.facebook.com/share/1CUC6YVvnB/?mibextid=wwXIfr" },
                { Icon: Twitter, href: "https://x.com/ambi_vineyards?s=11" },
                { Icon: Mail, href: "mailto:info@ambivineyards.com" },
              ].map(({ Icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target={href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className="text-white/60 hover:text-white transition-all duration-500 hover:-translate-y-1"
                >
                  <Icon size={20} strokeWidth={1.2} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-10">
            {footerLinks.map((group) => (
              <div key={group.title} className="space-y-8">
                <h4 className="text-white uppercase text-[10px] tracking-[0.3em] font-bold border-b border-white/20 pb-4">
                  {group.title}
                </h4>
                <ul className="space-y-4">
                  {group.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-[11px] uppercase tracking-widest text-white/70 hover:text-white transition-all duration-300 flex items-center group relative w-fit"
                      >
                        {link.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Details Section */}
          <div className="hidden lg:flex lg:col-span-3 bg-white/5 hover:bg-white/10 p-8 border border-white/10 hover:border-white/20 rounded-lg backdrop-blur-md shadow-2xl transition-all duration-500 group/contact relative overflow-hidden flex-col justify-between">
            {/* Ambient luxury light effect */}
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-white/5 rounded-full blur-2xl group-hover/contact:bg-white/10 transition-all duration-700"></div>

            <div className="space-y-6">
              <h4 className="text-white font-serif text-xl italic tracking-wide pb-3 border-b border-white/10">
                Connect With Us
              </h4>

              <div className="space-y-5">
                {/* Location */}


                {/* Email Enquiries */}
                <div className="flex items-start gap-3 group/item">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover/item:border-white/30 group-hover/item:bg-white/10 transition-all duration-300 transform group-hover/item:scale-105 shrink-0 mt-0.5">
                    <Mail size={14} className="text-white/60 group-hover/item:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-white/40 mb-0.5">Enquiries</p>
                    <a
                      href="mailto:info@ambivineyards.com"
                      className="text-[12px] font-sans font-light leading-relaxed text-white/80 hover:text-white transition-colors block"
                    >
                      info@ambivineyards.com
                    </a>
                  </div>
                </div>

                {/* Phone Link */}
                <div className="flex items-start gap-3 group/item">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover/item:border-white/30 group-hover/item:bg-white/10 transition-all duration-300 transform group-hover/item:scale-105 shrink-0 mt-0.5">
                    <Phone size={14} className="text-white/60 group-hover/item:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-white/40 mb-0.5">Call Us</p>
                    <a
                      href="tel:+917772010555"
                      className="text-[12px] font-sans font-light leading-relaxed text-white/80 hover:text-white transition-colors block"
                    >
                      +91 77720 10555
                    </a>
                  </div>
                </div>

                {/* Visiting Hours */}
                {/* <div className="flex items-start gap-3 group/item">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover/item:border-white/30 group-hover/item:bg-white/10 transition-all duration-300 transform group-hover/item:scale-105 shrink-0 mt-0.5">
                    <Clock size={14} className="text-white/60 group-hover/item:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-white/40 mb-0.5">Visiting Hours</p>
                    <p className="text-[12px] font-sans font-light leading-relaxed text-white/80 font-light">
                      Daily: 10:00 AM – 07:00 PM
                    </p>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Premium CTA Button */}
            <div className="pt-6 mt-6 border-t border-white/10">
              <Link
                to="/partner"
                className="inline-flex w-full items-center justify-between text-[9px] uppercase tracking-[0.25em] font-semibold text-white bg-white/5 hover:bg-white/15 px-4 py-3 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 group/btn"
              >
                <span>Franchise Enquiry</span>
                <ChevronRight size={12} className="transform group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* --- Bottom Bar --- */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center gap-8 text-[9px] tracking-[0.3em] font-medium text-white/50">
            <p>© 2026 AMBI VINEYARDS . ALL RIGHTS RESERVED.</p>
            <div className="flex gap-8 uppercase">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="mt-12 md:mt-0 flex flex-col items-center gap-4 group"
          >
            <div className="relative flex items-center justify-center w-12 h-12 border border-white/20 rounded-full transition-all duration-500 group-hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-white"></div>
              <ArrowUp
                size={18}
                strokeWidth={1.5}
                className="relative z-10 transition-colors duration-500 text-white group-hover:text-[#811331]"
              />
            </div>
            <span className="text-[8px] uppercase tracking-[0.6em] text-white/50 group-hover:text-white transition-colors">Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;