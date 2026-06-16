import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import Button from './Button';
import WineCard from './WineCard';
import { WINE_LIST, CATEGORY_INFO } from '../data/wines';

const WinesByCategory = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 13;

  const normalizedCategory = category?.toLowerCase() === 'rosé' ? 'rose' : category?.toLowerCase();
  const categoryInfo = CATEGORY_INFO[normalizedCategory];
  
  const filteredWines = WINE_LIST.filter(
    wine => wine.category === normalizedCategory
  );

  // Pagination Logic
  const indexOfLastWine = currentPage * cardsPerPage;
  const indexOfFirstWine = indexOfLastWine - cardsPerPage;
  const currentWines = filteredWines.slice(indexOfFirstWine, indexOfLastWine);
  const totalPages = Math.ceil(filteredWines.length / cardsPerPage);

  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 100);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return () => clearTimeout(t);
  }, [currentPage]);

  if (!categoryInfo || filteredWines.length === 0) {
    return <div className="min-h-screen bg-[#FDFBF9] flex items-center justify-center">Category Not Found</div>;
  }

  return (
    <div className="min-h-screen bg-[#FDFBF9] relative font-sans">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.12] pointer-events-none z-0" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

      {/* Cinematic Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-stone-900">
        <div className={`absolute inset-0 transition-transform duration-[3000ms] ${isLoaded ? 'scale-105' : 'scale-110'}`}>
          <img src={categoryInfo.heroImage} alt="" className="w-full h-full object-cover opacity-60" />
        </div>
        <div className="relative z-10 text-center px-6">
          <span className="text-[10px] uppercase tracking-[0.8em] text-stone-300 mb-4 block font-medium">
            {categoryInfo.subtitle}
          </span>
          <h1 className="text-6xl md:text-8xl font-serif text-white mb-6 font-light tracking-tight">
            {categoryInfo.title}
          </h1>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-20 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-stone-200 pb-8">
          <div className="max-w-2xl">
            <Button 
              variant="link" 
              onClick={() => navigate('/')} 
              className="group flex items-center gap-2 mb-6 text-stone-400 hover:text-stone-900 p-0"
            >
              <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
              <span className="text-[10px] uppercase tracking-[0.2em]">The Collection</span>
            </Button>
            <p className="text-stone-600 text-lg font-light leading-relaxed">
              {categoryInfo.description}
            </p>
          </div>
          
          <div className="hidden md:block text-[10px] tracking-[0.3em] text-stone-400 uppercase">
            Showing {indexOfFirstWine + 1}-{Math.min(indexOfLastWine, filteredWines.length)} of {filteredWines.length}
          </div>
        </div>

        {/* 4-Column Premium Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-20">
          {currentWines.map((wine, index) => (
            <div key={wine.id} className="group cursor-pointer">
              {/* Premium Wrapper for WineCard */}
              <div className="relative overflow-hidden bg-white/50 border border-stone-100 p-4 transition-all duration-700 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:border-stone-300">
                <WineCard wine={wine} index={index} />
              </div>
            </div>
          ))}
        </div>

        {/* Premium Pagination */}
        {totalPages > 1 && (
          <div className="mt-24 flex flex-col items-center gap-8">
            <div className="h-[1px] w-24 bg-stone-200" />
            <div className="flex items-center gap-12">
              <button 
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(p => p - 1)}
                className="text-stone-400 hover:text-stone-900 disabled:opacity-20 transition-colors"
              >
                <ChevronLeft size={24} strokeWidth={1} />
              </button>

              <div className="flex gap-6 items-center">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`text-xs tracking-widest transition-all duration-300 ${
                      currentPage === i + 1 
                      ? 'text-stone-900 font-bold scale-125' 
                      : 'text-stone-300 hover:text-stone-500'
                    }`}
                  >
                    0{i + 1}
                  </button>
                ))}
              </div>

              <button 
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(p => p + 1)}
                className="text-stone-400 hover:text-stone-900 disabled:opacity-20 transition-colors"
              >
                <ChevronRight size={24} strokeWidth={1} />
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default WinesByCategory;