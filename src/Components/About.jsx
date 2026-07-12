import React from 'react';
import Reveal from './Reveal';
import { Link } from 'react-router-dom';
const StorySection = () => {
  return (
    <section className="bg-[#fcfaf8] py-20 md:py-32 px-6 md:px-12 overflow-hidden relative">
      {/* Background Subtle Texture/Watermark */}
      <div className="absolute top-20 right-[-5%] opacity-[0.03] pointer-events-none hidden lg:block">
        <h2 className="text-[20rem] font-serif italic leading-none uppercase">AMBI VINES</h2>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-20 lg:gap-8 items-center">

          {/* Visual Side: Multi-layered images */}
          <div className="lg:col-span-6 relative order-2 lg:order-1 mt-12 lg:mt-0">
            <Reveal direction="left" className="relative z-10">
              {/* Main Image with refined shadow */}
              <div className="aspect-[4/5] overflow-hidden shadow-[20px_20px_60px_-15px_rgba(0,0,0,0.12)] md:shadow-[30px_30px_80px_-15px_rgba(0,0,0,0.1)] rounded-sm">
                <img
                  src="https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&q=80&w=1500"
                  alt="Vineyard Detail"
                  loading="lazy"
                  className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-[2000ms] hover:scale-105"
                />
              </div>
            </Reveal>

            {/* Floating Accent Image (The Premium Touch) */}
            <Reveal direction="up" delay={0.2} className="absolute -bottom-10 -right-6 md:-bottom-16 md:-right-20 w-5/12 md:w-1/2 aspect-square z-20">
              <div className="w-full h-full p-1.5 md:p-2 bg-white shadow-2xl rounded-sm">
                <img
                  src="https://res.cloudinary.com/dcjn4y284/image/upload/v1783407840/g1_j1pwwa.jpg"
                  alt="Hands holding grapes"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>

            {/* Decorative Geometry */}
            <div className="absolute -top-6 -left-6 md:top-12 md:-left-12 w-32 h-32 md:w-48 md:h-48 border-[0.5px] -z-0" style={{ borderColor: 'rgba(129, 19, 49, 0.15)' }} />
          </div>

          {/* Text Side */}
          <div className="lg:col-span-5 lg:col-start-8 flex flex-col order-1 lg:order-2">
            <Reveal direction="right" delay={0.1}>
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <span className="w-8 h-[1px]" style={{ backgroundColor: 'rgba(129, 19, 49, 0.3)' }} />
                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.5em] font-medium font-sans" style={{ color: '#811331' }}>
                  Our Heritage
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 leading-[1.2] md:leading-[1.1] mb-8 md:mb-16">
                A Legacy Poured <br className="hidden sm:block" />
                <span className="italic" style={{ color: 'rgba(129, 19, 49, 0.85)' }}>With Intention</span>
              </h2>

              <div className="space-y-6 md:space-y-8">
                <p className="text-stone-700/90 leading-relaxed font-light text-base md:text-lg italic font-sans border-l-2 pl-6" style={{ borderColor: 'rgba(129, 19, 49, 0.1)' }}>
                  "We believe that great wine isn't made, it's listened to."
                </p>

                <div className="w-12 h-[1px] bg-stone-200" />

                <p className="text-stone-500 leading-relaxed font-light tracking-wide text-sm md:text-base font-sans">
                  Set across expansive, sunlit landscapes, our estate thrives in carefully nurtured conditions. From hand-harvested grapes to a patient maturation process, every bottle reflects balance, character, & intent.
                </p>

                <div className="pt-6 md:pt-10">
                  <button
                    type="button"
                    className="group relative inline-flex items-center justify-center w-full sm:w-auto px-10 md:px-12 py-4 border border-[#811331] text-[#811331] overflow-hidden transition-all duration-500 ease-out hover:text-white"
                  >
                    <Link to="/our-story">
                    <span className="relative z-10 uppercase text-[10px] md:text-[11px] tracking-[0.3em] md:tracking-[0.4em] font-bold font-sans">
                     More About Us
                    </span>
                    </Link>
                    <div
                      className="absolute inset-x-0 bottom-0 h-0 group-hover:h-full transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"
                      style={{ backgroundColor: '#811331' }}
                    />
                  </button>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StorySection;
