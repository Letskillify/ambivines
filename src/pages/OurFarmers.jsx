import React, { useEffect, useRef, useState } from 'react';
import SubPageHero from '../Components/SubPageHero';

const FarmerVideoCard = ({ videoUrl, index, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play().catch(error => {
        console.log("Autoplay with sound prevented by browser:", error);
      });
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reset to beginning
      videoRef.current.muted = true;
    }
  };

  return (
    <div
      ref={cardRef}
      className={`group relative transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative aspect-[9/16] md:aspect-[3/4] overflow-hidden rounded-2xl bg-stone-200 shadow-sm transition-shadow duration-500 group-hover:shadow-2xl">
        {/* Video Element */}
        <video
          ref={videoRef}
          src={videoUrl}
          className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-in-out"
          loop
          muted
          playsInline
        />

        {/* Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
        
        {/* Play Icon / Interaction Hint */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center bg-white/10 backdrop-blur-sm group-hover:opacity-0 transition-all duration-300">
             <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
               <path d="M8 5v14l11-7z" />
             </svg>
          </div>
        </div>

        {/* Caption */}
        <div className="absolute bottom-6 left-6 right-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/80 mb-1">Ambi Vineyards</p>
          <h4 className="text-xl font-serif italic text-white leading-tight">Farmer Story #{index + 1}</h4>
        </div>
      </div>
    </div>
  );
};

const OurFarmers = () => {
  const videoUrls = [
    "https://res.cloudinary.com/duzwys877/video/upload/v1774606648/03_iryhxd.mp4",
    "https://res.cloudinary.com/duzwys877/video/upload/v1774606632/06_qhxhc3.mp4",
    "https://res.cloudinary.com/duzwys877/video/upload/v1774606632/02_plzujx.mp4",
    "https://res.cloudinary.com/duzwys877/video/upload/v1774606630/01_kdqgbg.mp4",
    // "https://res.cloudinary.com/duzwys877/video/upload/v1774606621/04_vz2mtd.mp4",
    "https://res.cloudinary.com/duzwys877/video/upload/v1774608053/07_nucuwk.mp4",
    "https://res.cloudinary.com/duzwys877/video/upload/v1774606621/05_j7ednp.mp4",
    "https://res.cloudinary.com/duzwys877/video/upload/v1774606613/09_cg4w4e.mp4",
    "https://res.cloudinary.com/duzwys877/video/upload/v1774606611/08_anmh1l.mp4"
  ];

  return (
    <div className="bg-[#FCFBFA] min-h-screen font-sans text-stone-900 pb-32">
      
      {/* 1. CINEMATIC HERO SECTION */}
      <SubPageHero
        title="Our Farmers"
        subtitle="The heart of our harvest, rooted in tradition and passion."
        bgImageDesktop="https://res.cloudinary.com/duzwys877/image/upload/v1784302049/farmers_tenntd.png"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Our Farmers" }
        ]}
      />

      {/* VIDEO GALLERY GRID - 3 in a row */}
      <section className="px-6 max-w-7xl mx-auto mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {videoUrls.map((url, index) => (
            <FarmerVideoCard 
              key={index} 
              videoUrl={url} 
              index={index}
              delay={(index % 3) * 150} // Staggered delay per row
            />
          ))}
        </div>
      </section>

      {/* FOOTER CTA SECTION */}
      <section className="mt-32 px-6">
        <div className="max-w-4xl mx-auto border-t border-stone-200 pt-20 text-center">
            <h3 className="text-3xl font-serif italic mb-6">Rooted in Tradition</h3>
            <p className="text-[11px] uppercase tracking-[0.4em] font-bold text-[#811331]">
              Sustainably Farmed &bull; Hand Harvested &bull; Community Driven
            </p>
        </div>
      </section>

      {/* Global CSS for seamless interactions */}
      <style jsx>{`
        video {
          /* Smooth out the pause/play transition */
          transition: filter 0.5s ease;
        }
        .group:hover video {
          filter: contrast(1.1) brightness(1.05);
        }
      `}</style>
    </div>
  );
};

export default OurFarmers;