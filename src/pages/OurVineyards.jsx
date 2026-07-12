import React, { useEffect, useRef, useState } from 'react';
import SubPageHero from '../Components/SubPageHero';

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

  return (
    <section 
      ref={ref}
      className={`py-24 px-6 md:px-12 max-w-7xl mx-auto transition-all duration-[1200ms] ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
    >
      <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}>
        {/* Image Side */}
        <div className="w-full lg:w-1/2">
          <div className="relative group overflow-hidden rounded-[2rem] shadow-sm">
            <img 
              src={image} 
              alt={title} 
              className="w-full aspect-[4/5] object-cover transition-transform duration-[3s] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700"></div>
          </div>
        </div>

        {/* Text Side */}
        <div className="w-full lg:w-1/2 space-y-8">
          <div className="space-y-4">
          <span className="text-[11px] uppercase tracking-[0.5em] font-bold block" style={{ color: '#811331' }}>
              {label}
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
        bgImageDesktop="https://images.unsplash.com/photo-1474844331793-c25076ecdf6d?auto=format&fit=crop&q=80&w=2000"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Our Vineyards" }
        ]}
      />

      {/* 2. ALTERNATING SHOWCASE */}
      <div className="space-y-12">
        <VineyardSection 
          label="The Location"
          title="The Titari Plateau"
          // subtitle="Sun-Drenched High Altitudes"
          description="Our vineyards are carefully selected and expertly managed, with a focus on soil integrity, climate suitability, and sustainable growth, ensuring consistency and quality in every harvest."
          image="https://images.unsplash.com/photo-1566995541428-f2246c17cda1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdpbmV8ZW58MHx8MHx8fDA%3D"
          reversed={false}
        />

        <VineyardSection 
          label="The Terroir"
          title="Location & Terroir"
          // subtitle="Ancient Stones, Modern Character"
          description="Located in the heart of Central India, our vineyards benefit from a unique combination of climate, soil composition, and altitude. These natural conditions allow the grapes to develop character, structure, and depth, contributing to wines that are expressive and well-balanced."
          image="https://images.unsplash.com/photo-1663534389881-abfc2dbba679?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          reversed={true}
        />

        <VineyardSection 
          label="Philosophy"
          title="Cultivation Philosophy"
          // subtitle="Respecting the Natural Cycle"
          description="At Ambi Vineyards, management is driven by precision and planning. From vine training to harvest timing, every decision is guided by expertise and careful observation. This disciplined approach ensures grapes of optimal quality, year after year."
          image="https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1200"
          reversed={false}
        />
      </div>

      {/* 3. VISUAL STORYTELLING (Cinematic Break) */}
      <section className="relative mt-32 h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Full-width Image */}
        <img 
          src="https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&q=80&w=2070" 
          alt="Panoramic Vineyard View" 
          className="absolute inset-0 w-full h-full object-cover"
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
      <section className="py-40 px-6 text-center max-w-2xl mx-auto">
        <h4 className="text-[11px] uppercase tracking-[0.4em] font-bold mb-6" style={{ color: '#811331' }}>Experience the Source</h4>
        <p className="text-stone-800 font-serif text-2xl italic leading-relaxed">
          Every bottle of Ambi tells the story of our soil. We invite you to taste the landscape of Central India, distilled into its finest form.
        </p>
      </section>

    </main>
  );
};

export default OurVineyards;