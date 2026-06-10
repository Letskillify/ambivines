import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Import Swiper React components and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CATEGORIES = [
  {
    id: 1,
    name: "Red",
    description: "Robust & Earthy",
    details: "Hand-picked Sangiovese and Cabernet.",
    image: "https://res.cloudinary.com/dcgcuvk02/image/upload/v1769948050/wrcudpyqlli6z5wfwgfq.jpg"
  },
  {
    id: 2,
    name: "White",
    description: "Crisp & Mineral",
    details: "Sun-drenched Chardonnay and Grigio.",
    image: "https://res.cloudinary.com/dcgcuvk02/image/upload/v1769948048/gpnqwjuexjturh5xl2wt.jpg"
  },
  {
    id: 3,
    name: "Rosé",
    description: "Fresh & Floral",
    details: "Elegant Provencal-style summer blends.",
    image: "https://res.cloudinary.com/dcgcuvk02/image/upload/v1769948049/wwupp685hmmqu5gzftdh.jpg"
  },
  {
    id: 4,
    name: "Sparkling",
    description: "Artisan & Cold",
    details: "Small-batch craft ales from our valley.",
    image: "https://res.cloudinary.com/dcgcuvk02/image/upload/v1770556159/bold_img_ugzwqk.jpg"
  }
];

const CategoryCard = ({ item, index, isVisible, onNavigate }) => {
  const handleClick = () => {
    const categorySlug = item.name.toLowerCase() === 'rosé' ? 'rose' : item.name.toLowerCase();
    onNavigate(`/wines/${categorySlug}`);
  };

  return (
    <div 
      onClick={handleClick}
      className={`group cursor-pointer flex flex-col transition-all duration-1000 ease-out h-full ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
    {/* Visual Stage */}
    <div className="relative w-full aspect-[4/5] mb-6 overflow-hidden bg-stone-100">
      <img 
        src={item.image} 
        alt={item.name}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
      />
      
      {/* Overlay: Text appears on hover */}
      <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-8">
        <p className="text-white text-center text-xs tracking-[0.2em] leading-relaxed uppercase font-sans">
          {item.details}
        </p>
      </div>
    </div>

    {/* Typography - Bold but compact spacing */}
    <div className="flex justify-between items-baseline border-b border-stone-200 pb-2">
      <h3 className="text-2xl md:text-3xl font-serif text-stone-900">{item.name}</h3>
      <span className="text-[10px] uppercase tracking-[0.2em] font-bold font-sans" style={{ color: 'rgba(129, 19, 49, 0.6)' }}>
        {item.description}
      </span>
    </div>
  </div>
  );
};

const OurWines = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[#FDFBF9] py-24 md:py-32 px-6 md:px-12 overflow-hidden">
      
      {/* BACKGROUND TEXTURE: Fine-grain noise effect */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none z-0" 
           style={{ 
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
           }} 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header: Large font, tight vertical gaps */}
        <div className="flex items-baseline justify-between mb-16 md:mb-24 border-b border-stone-900 pb-4">
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            Our <span className="italic">Wines</span>
          </h2>
          <span className="hidden md:block text-[11px] uppercase tracking-[0.5em] font-sans" style={{ color: '#811331' }}>
            Selection 2026
          </span>
        </div>

        {/* Categories Swiper */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 4, spaceBetween: 40 },
          }}
          className="wines-swiper !pb-12"
        >
          {CATEGORIES.map((item, index) => (
            <SwiperSlide key={item.id}>
              <CategoryCard 
                item={item} 
                index={index} 
                isVisible={isVisible}
                onNavigate={navigate}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Minimalist Bottom CTA */}
        <div className="mt-16 md:mt-24 flex justify-end">
          <button
            type="button"
            onClick={() => navigate('/stores')}
            className="group relative inline-flex items-center justify-center px-10 md:px-12 py-4 border border-[#811331] text-[#811331] overflow-hidden transition-all duration-300 ease-out hover:text-white"
          >
            <span className="relative z-10 uppercase text-[11px] tracking-[0.4em] font-bold font-sans">
              View Full Menu
            </span>
            <div
              className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.25,1)]"
              style={{ backgroundColor: '#811331' }}
            />
          </button>
        </div>

      </div>
    </section>
  );
};

export default OurWines;
