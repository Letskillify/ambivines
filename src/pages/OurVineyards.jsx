import React, { useEffect, useRef, useState } from 'react';
import SubPageHero from '../Components/SubPageHero';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// Custom Hook for Scroll Reveal
const useElementOnScreen = (options) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, options);
    
    const current = containerRef.current;
    if (current) observer.observe(current);
    
    return () => {
      if (current) observer.unobserve(current);
    };
  }, [containerRef, options]);

  return [containerRef, isVisible];
};

const VineyardSection = ({ title, subtitle, description, image, reversed, label }) => {
  const [ref, isVisible] = useElementOnScreen({ threshold: 0.2 });
  const isMultipleImages = Array.isArray(image);

  return (
    <section 
      ref={ref}
      className={`py-12 md:py-24 px-6 md:px-12 max-w-7xl mx-auto transition-all duration-[1200ms] ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
    >
      <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-6 lg:gap-24`}>
        {/* Image Side */}
        <div className="w-full lg:w-1/2">
          <div className="relative group overflow-hidden rounded-[2rem] shadow-sm">
            {isMultipleImages ? (
              <div className="w-full aspect-square overflow-hidden rounded-[2rem] vineyard-swiper relative">
                <Swiper
                  modules={[Autoplay, Pagination, EffectFade]}
                  effect="fade"
                  spaceBetween={0}
                  slidesPerView={1}
                  autoplay={{ delay: 1500, disableOnInteraction: false }}
                  pagination={{ clickable: true }}
                  className="w-full h-full"
                >
                  {image.map((img, index) => (
                    <SwiperSlide key={index} className="w-full h-full relative">
                      <img
                        src={img}
                        alt={`${title} Detail ${index + 1}`}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            ) : (
              <>
                <img 
                  src={image} 
                  alt={title} 
                  className="w-full aspect-[4/5] object-cover transition-transform duration-[3s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700"></div>
              </>
            )}
          </div>
        </div>

        {/* Text Side */}
        <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
          <div className="space-y-4">
          <span className="text-[11px] uppercase tracking-[0.5em] font-bold block" style={{ color: '#811331' }}>
             
            </span>
            <h2 className="text-4xl md:text-5xl font-serif italic text-stone-900 leading-tight">
              {title}
            </h2>
            <p className="text-stone-400 font-serif italic text-lg">{subtitle}</p>
          </div>
          <div className="h-px w-16 bg-stone-200"></div>
          <p className="text-stone-500 font-light leading-relaxed text-lg max-w-lg">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

const OurVineyards = () => {
  return (
    <main className="bg-[#F9F8F6] min-h-screen font-sans text-stone-900 overflow-x-hidden">
      
      <SubPageHero
        title="Our Vineyards"
        subtitle="Origin & Earth"
        bgImageDesktop="https://res.cloudinary.com/duzwys877/image/upload/v1784300002/WhatsApp_Image_2026-07-17_at_20.22.11_ybflm4.jpg"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Our Vineyards" }
        ]}
      />

      {/* 2. ALTERNATING SHOWCASE */}
      <div className="space-y-4 md:space-y-12">
        <VineyardSection 
          label="The Location"
          title="Expansion of Vineyards"
          // subtitle="Sun-Drenched High Altitudes"
          description="Initially Cultivated On Just 2 Acres, The Vineyard Now Spans Over 180 Acres, Utilizing Modern Technology For Grape Production."
          image={[
            "https://res.cloudinary.com/duzwys877/image/upload/v1784299321/WhatsApp_Image_2026-07-17_at_20.10.45_lnkuss.jpg",
            "https://res.cloudinary.com/duzwys877/image/upload/v1784299321/WhatsApp_Image_2026-07-17_at_20.10.45_2_ikpfh7.jpg",
            "https://res.cloudinary.com/duzwys877/image/upload/v1784299322/WhatsApp_Image_2026-07-17_at_20.10.44_andtfn.jpg",
            "https://res.cloudinary.com/duzwys877/image/upload/v1784299325/WhatsApp_Image_2026-07-17_at_20.10.45_1_brmeai.jpg"
          ]}
          reversed={false}
        />

        <VineyardSection 
          label="The Terroir"
          title="Premium Grape Varieties"
          // subtitle="Ancient Stones, Modern Character"
          description="Ambi Vineyards Grows Globally Renowned Grape Varieties For Red And White Wine Production, Including Shiraz, Cabernet Sauvignon, Zinfandel, Merlot, And Chenin Blanc."
          image={[
            "https://res.cloudinary.com/duzwys877/image/upload/v1784299562/WhatsApp_Image_2026-07-17_at_20.14.12_hkyrz6.jpg",
            "https://res.cloudinary.com/duzwys877/image/upload/v1784299562/WhatsApp_Image_2026-07-17_at_20.14.13_mndvlv.jpg",
            "https://res.cloudinary.com/duzwys877/image/upload/v1784299562/WhatsApp_Image_2026-07-17_at_20.14.13_1_xqwrsi.jpg",
            "https://res.cloudinary.com/duzwys877/image/upload/v1784299592/WhatsApp_Image_2026-07-17_at_20.14.14_yjkoii.jpg"
          ]}
          reversed={true}
        />

        <VineyardSection 
          label="Philosophy"
          title="Production Capacity Growth"
          // subtitle="Respecting the Natural Cycle"
          description="Wine Production Capacity Has Expanded From 50,000 Liters To An Impressive 10,00,000 Liters."
          image={[
            "https://res.cloudinary.com/duzwys877/image/upload/v1784299847/WhatsApp_Image_2026-07-17_at_20.17.08_hwk6o4.jpg",
            "https://res.cloudinary.com/duzwys877/image/upload/v1784299847/WhatsApp_Image_2026-07-17_at_20.17.08_1_g2nzgi.jpg",
            "https://res.cloudinary.com/duzwys877/image/upload/v1784299850/WhatsApp_Image_2026-07-17_at_20.17.09_xrulsz.jpg",
            "https://res.cloudinary.com/duzwys877/image/upload/v1784299851/WhatsApp_Image_2026-07-17_at_20.17.12_nft9em.jpg"
          ]}
          reversed={false}
        />
          <VineyardSection 
          label="The Terroir"
          title="Educational & Tourism Initiatives"
          // subtitle="Ancient Stones, Modern Character"
          description="Over 5,00,000 Visitors Have Taken Free Vineyard Tours & Participated In Agricultural And Processing Training Programs."
          image={[
            "https://res.cloudinary.com/duzwys877/image/upload/v1784300000/WhatsApp_Image_2026-07-17_at_20.19.46_smtfv6.jpg",
            "https://res.cloudinary.com/duzwys877/image/upload/v1784299998/WhatsApp_Image_2026-07-17_at_20.19.44_h74nlh.jpg",
            "https://res.cloudinary.com/duzwys877/image/upload/v1784299999/WhatsApp_Image_2026-07-17_at_20.19.45_zomoap.jpg",
            "https://res.cloudinary.com/duzwys877/image/upload/v1784299999/WhatsApp_Image_2026-07-17_at_20.19.45_1_xvytuv.jpg"
          ]}
          reversed={true}
        />
      </div>

      {/* 3. VISUAL STORYTELLING (Cinematic Break) */}
      <section className="relative mt-16 md:mt-32 h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Full-width Image (Responsive) */}
        <img 
          src="https://res.cloudinary.com/duzwys877/image/upload/v1784298876/WhatsApp_Image_2026-07-17_at_20.03.24_cbgti5.jpg" 
          alt="Panoramic Vineyard View Mobile" 
          className="absolute inset-0 w-full h-full object-cover block md:hidden"
        />
        <img 
          src="https://res.cloudinary.com/duzwys877/image/upload/v1784299137/WhatsApp_Image_2026-07-17_at_20.07.31_e5dhqa.jpg" 
          alt="Panoramic Vineyard View Desktop" 
          className="absolute inset-0 w-full h-full object-cover hidden md:block"
        />
        {/* Cinematic Overlay */}
        <div className="absolute inset-0 bg-stone-900/40"></div>
        
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h3 className="text-white font-serif text-3xl md:text-5xl italic leading-tight mb-8">
            “Each bottle we craft is not just for today, but for a timeless experience.”
          </h3>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-white/30"></div>
            <span className="text-white/80 text-[10px] uppercase tracking-[0.5em] font-bold">The Ambi Promise</span>
            <div className="h-px w-12 bg-white/30"></div>
          </div>
        </div>
      </section>

      {/* 4. CLOSING STATEMENT */}
      <section className="py-20 md:py-32 px-6 text-center max-w-2xl mx-auto flex flex-col items-center">
        <h4 className="text-[25px] uppercase tracking-[0.4em] font-bold mb-6" style={{ color: '#811331' }}>Experience the Source</h4>
        <p className="text-stone-800 font-serif text-2xl italic leading-relaxed mb-10">
          Every bottle of Ambi tells the story of our soil. We invite you to taste the landscape of Central India, distilled into its finest form.
        </p>
        <a
          href="https://wa.me/917772010555?text=Hello%20Ambi%20Vineyards%2C%20I%20would%20like%20to%20book%20a%20vineyard%20tour."
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center px-16 py-5 bg-[#811331] text-white border border-[#811331] overflow-hidden rounded-full shadow-lg transition-all duration-500 ease-out hover:shadow-[0_15px_35px_rgba(129,19,49,0.3)] hover:-translate-y-1 hover:scale-105"
        >
          <span className="relative z-10 uppercase text-[12px] tracking-[0.4em] font-bold font-sans transition-colors duration-500 group-hover:text-[#811331]">
            Book A Tour
          </span>
          <div
            className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] bg-white"
          />
        </a>
      </section>

    </main>
  );
};

export default OurVineyards;