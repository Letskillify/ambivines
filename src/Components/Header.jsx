import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Plus, Minus } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);
  const navigate = useNavigate();

  /* ================= Scroll Effect ================= */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ================= Lock Background Scroll ================= */
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'auto';
    return () => (document.body.style.overflow = 'auto');
  }, [mobileMenuOpen]);

  /* ================= Navigation Data ================= */
  const navLinks = {
    left: [
      // { name: 'Book a Tour', href: '/book-tour' },
      { name: 'Our Outlets', href: '/stores' },
      {
        name: 'About Us',
        subLinks: [
          { name: 'Our Story', href: '/our-story' },
          { name: 'Our People', href: '/our-people' },
          { name: 'Our Vineyards', href: '/our-vineyards' },
          { name: 'Our Farmers', href: '/our-farmers' },
        ],
      },
    ],
    right: [
      {
        name: 'Our Wines',
        subLinks: [
          { name: 'Explore All', href: '/wines' },
          { name: 'Red Wine', href: '/wines/red' },
          { name: 'White Wine', href: '/wines/white' },
          { name: 'Rosé Wine', href: '/wines/rose' },
          { name: 'Sparkling Wine', href: '/wines/sparkling' },
        ],
      },
      { name: 'Events', href: '/events' },
      { name: 'Get A Franchise', href: '/partner' },
    ],
  };

  /* ================= Desktop Nav Item ================= */
  const NavItem = ({ link }) => (
    <div className="relative group py-2">
      <Link
        to={link.href || '#'}
        className={`text-[11px] uppercase tracking-[0.2em] font-serif flex items-center gap-1 transition-colors ${isScrolled ? 'text-stone-800' : 'text-white'
          }`}
      >
        {link.name}
        {link.subLinks && (
          <ChevronDown
            size={10}
            className="opacity-40 transition-transform group-hover:rotate-180"
          />
        )}
      </Link>

      {link.subLinks && (
        <div className="absolute top-full left-[-20px] pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 min-w-[220px]">
          <div className="bg-white shadow-2xl py-6 border-t-2 border-stone-800">
            {link.subLinks.map((sub) => (
              <Link
                key={sub.name}
                to={sub.href}
                className="block px-8 py-2.5 text-[10px] uppercase tracking-[0.15em] text-stone-500 hover:text-stone-900 hover:bg-stone-50 transition"
              >
                {sub.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* ================= Header ================= */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${isScrolled
          ? 'bg-white/95 backdrop-blur-md py-4 shadow-md'
          : 'bg-transparent py-8'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">

          {/* Left Element: Desktop links OR Mobile Logo */}
          <div className="flex flex-1 items-center justify-start">
            {/* Desktop Left */}
            <div className="hidden lg:flex gap-8">
              {navLinks.left.map((link) => (
                <NavItem key={link.name} link={link} />
              ))}
            </div>
            {/* Mobile Logo */}
            <div className="lg:hidden">
              <Link to="/">
                <img
                  src="/img/logoc.png"
                  alt="Logo"
                  className="w-20 h-auto transition-all duration-300"
                  style={{ filter: isScrolled ? 'brightness(0)' : 'none' }}
                />
              </Link>
            </div>
          </div>

          {/* Center Element: Desktop Logo Only */}
          <div className="hidden lg:block text-center flex-shrink-0">
            <Link to="/">
              <img
                src="/img/logoc.png"
                alt="Logo"
                className="w-28 md:w-32 h-auto transition-all duration-300"
                style={{ filter: isScrolled ? 'brightness(0)' : 'none' }}
              />
            </Link>
          </div>

          {/* Right Element: Desktop Right links OR Mobile Sidebar Menu Button */}
          <div className="flex flex-1 items-center justify-end">
            {/* Desktop Right */}
            <div className="hidden lg:flex gap-8 items-center">
              {navLinks.right.map((link) => (
                <NavItem key={link.name} link={link} />
              ))}
            </div>
            {/* Mobile Menu Button - aligned right */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className={isScrolled ? 'text-stone-800' : 'text-white'}
              >
                <Menu size={24} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ================= Mobile Sidebar ================= */}
      <div
        className={`fixed inset-0 z-[60] bg-stone-50 transform transition-transform duration-700 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        style={{ height: '100dvh' }}
      >
        <div className="h-full flex flex-col p-8 overflow-y-auto overscroll-contain">

          {/* Sidebar Header */}
          <div className="flex justify-between items-center mb-10">
            
            <button onClick={() => setMobileMenuOpen(false)}>
              <X size={28} strokeWidth={1} />
            </button>
          </div>

          {/* Sidebar Links */}
          <div className="space-y-6">
            {[
              'About Us',
              'Our Wines',
              'Our Outlets',
              'Events',
              'Get A Franchise'
            ].map(name => [...navLinks.left, ...navLinks.right].find(link => link.name === name))
             .filter(Boolean)
             .map((link) => (
              <div key={link.name} className="border-b border-stone-200 pb-4">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() =>
                    link.subLinks &&
                    setExpandedSection(
                      expandedSection === link.name ? null : link.name
                    )
                  }
                >
                  <Link
                    to={link.subLinks ? '#' : link.href}
                    className="text-2xl font-serif text-stone-900"
                    onClick={() => !link.subLinks && setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>

                  {link.subLinks && (
                    expandedSection === link.name ? (
                      <Minus size={20} className="text-stone-500" />
                    ) : (
                      <Plus size={20} className="text-stone-500" />
                    )
                  )}
                </div>

                {link.subLinks && expandedSection === link.name && (
                  <div className="mt-4 pl-4 space-y-4 animate-in fade-in slide-in-from-top-2">
                    {link.subLinks.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.href}
                        className="block text-sm uppercase tracking-widest text-stone-500"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Sidebar Footer */}
          <div className="mt-auto pt-10 border-t border-stone-200">
            <p className="text-[9px] tracking-widest uppercase text-stone-400">
              AMBI VINES © 2026
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
