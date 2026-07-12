import React, { useRef } from 'react';
import { motion as Motion, useScroll, useTransform } from 'framer-motion';

const images = [
  {
    id: 1,
    subtitle: "The Terroir",
    title: "Central India’s Only & Fastest Growing Vineyard",
    description: "From the heart of Madhya Pradesh, we craft wines rooted in passion, precision, and authenticity, with a vision to take Central India to the global stage.",
    src: "https://res.cloudinary.com/duzwys877/image/upload/v1783860302/IMG_6407_gvbbry.jpg",
  },
  {
    id: 2,
    subtitle: "The Aging",
    title: "Rooted in Terroir",
    description: "Every bottle reflects the soil, climate, and character of the land it comes from.",
    src: "https://res.cloudinary.com/duzwys877/image/upload/v1783860305/IMG_6408_gtbnza.jpg",
  },
  {
    id: 3,
    subtitle: "The Experience",
    title: "Soul in a Bottle",
    description: "Every pour tells a story of heritage, a symphony of taste that defines the modern Indian spirit.",
    src: "https://res.cloudinary.com/duzwys877/image/upload/v1783860302/IMG_6409_yti5cg.jpg",
  }
];

const StorySection = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  /* --- TEXT ANIMATIONS --- */
  const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.25], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2, 0.25], [0, 0, -30]);

  const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.55, 0.65], [0, 1, 1, 0]);
  const y2Text = useTransform(scrollYProgress, [0.25, 0.35, 0.55, 0.65], [30, 0, 0, -30]);

  const opacity3 = useTransform(scrollYProgress, [0.65, 0.75, 1], [0, 1, 1]);
  const y3Text = useTransform(scrollYProgress, [0.65, 0.75, 1], [30, 0, 0]);

  /* --- IMAGE CONTAINER ANIMATIONS --- */
  const y2Image = useTransform(scrollYProgress, [0.2, 0.4], ["100%", "0%"]);
  const y3Image = useTransform(scrollYProgress, [0.6, 0.8], ["100%", "0%"]);

  /* --- DEPTH & PARALLAX ANIMATIONS --- */
  const scaleImage1 = useTransform(scrollYProgress, [0.2, 0.4], [1, 0.95]);
  const overlay1 = useTransform(scrollYProgress, [0.2, 0.4], [0, 0.4]); 

  const scaleImage2 = useTransform(scrollYProgress, [0.6, 0.8], [1, 0.95]);
  const overlay2 = useTransform(scrollYProgress, [0.6, 0.8], [0, 0.4]);

  const innerScale2 = useTransform(scrollYProgress, [0.2, 0.4], [1.2, 1]);
  const innerScale3 = useTransform(scrollYProgress, [0.6, 0.8], [1.2, 1]);

  return (
    <section ref={containerRef} className="relative min-h-[400vh] bg-[#F4F1EE]">
      
      {/* 1. Changed 'top-0' to 'top-20' (adds 5rem / 80px space for your header)
        2. Adjusted height to subtract that same 5rem to avoid page overflow 
      */}
      <div className="sticky top-20 h-[calc(75vh-5rem)] md:h-[calc(100vh-5rem)] w-full flex flex-col justify-center py-8 md:py-12 overflow-hidden">

        {/* Progress Bar - Adjusted top position slightly to align with content */}
        <div className="absolute left-8 top-[60%] -translate-y-1/2 h-32 w-[1px] bg-stone-300 hidden md:block z-50">
          <Motion.div
            style={{ scaleY: scrollYProgress }}
            className="w-full bg-stone-800 origin-top h-full"
          />
        </div>

        {/* TEXT AREA */}
        <div className="flex-none relative w-full max-w-4xl mx-auto px-6 text-center z-40 h-[120px] mb-6">
          
          {/* Text 1 */}
          <Motion.div style={{ opacity: opacity1, y: y1 }} className="absolute inset-0 flex flex-col items-center justify-start pointer-events-none space-y-3">
            <h2 className="text-3xl md:text-4xl font-serif text-stone-900 italic">
              {images[0].title}
            </h2>
            <p className="text-stone-600 font-light max-w-md mx-auto text-xs md:text-sm leading-relaxed">
              {images[0].description}
            </p>
          </Motion.div>

          {/* Text 2 */}
          <Motion.div style={{ opacity: opacity2, y: y2Text }} className="absolute inset-0 flex flex-col items-center justify-start pointer-events-none space-y-3">
            <h2 className="text-3xl md:text-5xl font-serif text-stone-900 italic">
              {images[1].title}
            </h2>
            <p className="text-stone-600 font-light max-w-md mx-auto text-xs md:text-sm leading-relaxed">
              {images[1].description}
            </p>
          </Motion.div>

          {/* Text 3 */}
          <Motion.div style={{ opacity: opacity3, y: y3Text }} className="absolute inset-0 flex flex-col items-center justify-start pointer-events-none space-y-3">
            <h2 className="text-3xl md:text-5xl font-serif text-stone-900 italic">
              {images[2].title}
            </h2>
            <p className="text-stone-600 font-light max-w-md mx-auto text-xs md:text-sm leading-relaxed">
              {images[2].description}
            </p>
          </Motion.div>
        </div>

        {/* IMAGE AREA - Reduced from 65vh to 55vh to ensure everything breathes easily */}
        <div className="flex-none relative w-full max-w-5xl mx-auto px-4 flex items-center justify-center h-[40vh] md:h-[55vh]">
          <div className="relative w-full h-full">

            {/* Base Layer */}
            <Motion.div style={{ scale: scaleImage1 }} className="absolute inset-0 rounded-sm overflow-hidden shadow-xl origin-bottom">
              <img
                src={images[0].src}
                className="w-full h-full object-cover md:object-contain"
                loading="lazy"
                alt="Layer 1"
              />
              <Motion.div style={{ opacity: overlay1 }} className="absolute inset-0 bg-stone-900" />
            </Motion.div>

            {/* Layer 2 */}
            <Motion.div style={{ y: y2Image, scale: scaleImage2 }} className="absolute inset-0 z-10 origin-bottom">
              <div className="w-full h-full rounded-sm overflow-hidden shadow-2xl border-t border-white/20">
                <Motion.img
                  style={{ scale: innerScale2 }}
                  src={images[1].src}
                  className="w-full h-full object-cover md:object-contain origin-bottom"
                  loading="lazy"
                  alt="Layer 2"
                />
                <Motion.div style={{ opacity: overlay2 }} className="absolute inset-0 bg-stone-900" />
              </div>
            </Motion.div>

            {/* Layer 3 */}
            <Motion.div style={{ y: y3Image }} className="absolute inset-0 z-20">
              <div className="w-full h-full rounded-sm overflow-hidden shadow-2xl border-t border-white/20">
                <Motion.img
                  style={{ scale: innerScale3 }}
                  src={images[2].src}
                  className="w-full h-full object-cover md:object-contain origin-bottom"
                  loading="lazy"
                  alt="Layer 3"
                />
              </div>
            </Motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default StorySection;