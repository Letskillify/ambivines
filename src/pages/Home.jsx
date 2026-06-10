import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '../Components/Hero';
import CinematicStory from '../Components/Story';
import StorySection from '../Components/About';
import OurWines from '../Components/Wines';
import Gallery from '../Components/Gallery';

const Home = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState(false);
  const [hasChecked, setHasChecked] = useState(false);

  useEffect(() => {
    const verified = sessionStorage.getItem('ageVerified');
    if (verified === 'true') {
      setIsVerified(true);
    }
    setHasChecked(true);
  }, []);

  useEffect(() => {
    if (!isVerified && hasChecked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isVerified, hasChecked]);

  if (!hasChecked) return null;

  return (
    <>
      <AnimatePresence>
        {!isVerified && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-xl"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#0a0a0a] border border-white/10 p-10 md:p-16 shadow-2xl max-w-xl w-[calc(100%-2rem)] mx-auto text-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-[1px] bg-gradient-to-r from-transparent via-[#b38b4d] to-transparent opacity-70"></div>
              
              <h2 className="text-3xl md:text-5xl font-serif text-white/95 mb-6 tracking-wide">
                Ambi Vineyards
              </h2>
              
              {error ? (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }}
                  className="mb-2 mt-8"
                >
                  <p className="text-[#db8383] text-lg font-light mb-10 font-serif italic">
                    We're sorry. You must be of legal drinking age to enter this site.
                  </p>
                  <button 
                    onClick={() => setError(false)}
                    className="text-white/50 hover:text-white/90 transition-colors duration-300 text-sm uppercase tracking-[0.15em] border-b border-white/20 pb-1"
                  >
                    Go back
                  </button>
                </motion.div>
              ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <p className="text-white/70 text-lg md:text-xl font-light mb-12 font-serif">
                    Are you legal age to drink alcohol?
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button 
                      onClick={() => {
                        sessionStorage.setItem('ageVerified', 'true');
                        setIsVerified(true);
                      }}
                      className="px-10 py-3.5 bg-[#b38b4d] hover:bg-[#c49b5d] text-white text-xs md:text-sm font-medium tracking-[0.2em] uppercase transition-all duration-500 shadow-[0_0_20px_rgba(179,139,77,0.15)] hover:shadow-[0_0_30px_rgba(179,139,77,0.3)]"
                    >
                      Yes, I am
                    </button>
                    <button 
                      onClick={() => setError(true)}
                      className="px-10 py-3.5 bg-transparent border border-white/15 hover:bg-white/5 text-white/70 hover:text-white text-xs md:text-sm font-medium tracking-[0.2em] uppercase transition-all duration-500"
                    >
                      No, I am not
                    </button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`${!isVerified ? 'pointer-events-none' : ''}`}>
        <Hero />
        <StorySection />
        <CinematicStory />
        <OurWines />
        <Gallery />
      </div>
    </>
  );
};

export default Home;

