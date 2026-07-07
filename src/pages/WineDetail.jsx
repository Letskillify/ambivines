import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { WINE_LIST, CATEGORY_INFO } from '../data/wines';

const WineDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const wineId = Number(id);
  const wine = WINE_LIST.find((item) => item.id === wineId);

  // Handle active image state for the premium gallery viewer
  const [activeImage, setActiveImage] = useState('');

  useEffect(() => {
    if (wine) {
      setActiveImage(wine.image);
    }
  }, [wine]);

  if (!wine) {
    return (
      <main className="min-h-screen bg-[#FCFBFA] flex items-center justify-center px-6">
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-serif text-stone-900">
            Wine Not Found
          </h1>
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="text-sm uppercase tracking-[0.2em] text-stone-600 hover:text-stone-900 font-sans"
          >
            Return to Collection
          </button>
        </div>
      </main>
    );
  }

  const categoryKey = wine.category;
  const categoryInfo = CATEGORY_INFO[categoryKey];
  
  // Gather all available images dynamically for the preview layout
  const images = [wine.image, wine.img2].filter(Boolean);

  return (
    <main className="bg-[#FCFBFA] min-h-screen text-stone-900 font-sans antialiased">
      {/* Hero / Banner - Restored to Original */}
      <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden bg-stone-900">
        <div className="absolute inset-0">
          <img
            src={wine.image}
            alt={wine.name}
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-[#811331]/20 to-black/40" />
        </div>

        <div className="relative z-10 h-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col justify-end pb-16">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="group inline-flex items-center gap-3 mb-6 text-stone-200 text-xs uppercase tracking-[0.3em]"
          >
            <ArrowLeft
              size={16}
              className="transition-transform group-hover:-translate-x-1"
            />
            <span>Back to Collection</span>
          </button>

          <div className="space-y-4 max-w-3xl">
            <span className="inline-flex items-center px-4 py-1 rounded-full text-[9px] uppercase tracking-[0.3em] bg-black/40 text-[#f3d2dd]">
              {categoryInfo ? categoryInfo.title : wine.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight">
              {wine.name}
            </h1>
            <p className="text-sm md:text-base text-stone-200/90 max-w-xl leading-relaxed">
              {wine.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-28 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Interactive Visual Showcase */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative aspect-[3/4] rounded-[1.5rem] overflow-hidden bg-stone-100 shadow-[0_30px_70px_-30px_rgba(28,25,23,0.3)] border border-stone-200/60">
              <img
                src={activeImage || wine.image}
                alt={wine.name}
                className="w-full h-full object-cover transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Thumbnail Preview Selector */}
            {images.length > 1 && (
              <div className="flex gap-4 justify-start items-center pt-2">
                {images.map((img, index) => {
                  const isActive = activeImage === img;
                  return (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setActiveImage(img)}
                      className={`relative aspect-[3/4] w-20 rounded-xl overflow-hidden bg-stone-100 transition-all duration-300 ${
                        isActive 
                          ? 'ring-2 ring-[#811331] ring-offset-2 scale-95 opacity-100' 
                          : 'opacity-60 hover:opacity-90 hover:scale-98'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${wine.name} preview ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Right Column: Refined Structural Details */}
          <div className="lg:col-span-7 space-y-12 lg:pt-4">
            
            {/* Header & Meta */}
            <div className="space-y-4 border-b border-stone-200/80 pb-8">
              <span
                className="text-[11px] uppercase tracking-[0.45em] font-semibold block"
                style={{ color: '#811331' }}
              >
                {wine.category === 'rose' ? 'Rosé' : wine.category.toUpperCase()}
              </span>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
                <h2 className="text-3xl md:text-4xl font-serif text-stone-900 tracking-wide">
                  {wine.name}
                </h2>
                {wine.price && (
                  <p className="text-xl md:text-2xl font-serif italic text-stone-800">
                    {wine.price}
                  </p>
                )}
              </div>
            </div>

            {/* Tasting Notes Narrative */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xs uppercase tracking-[0.2em] text-stone-400 font-medium">The Narrative</h3>
                <p className="text-stone-600 leading-relaxed font-light text-base md:text-[17px]">
                  Crafted in limited quantities, this cuvée captures the quiet
                  power of our Titari plateau vineyards. Hand-harvested at dawn,
                  gently pressed, and aged with restraint, it reveals layers of
                  fruit, spice, and minerality that unfold slowly in the glass.
                </p>
              </div>
            </div>

            {/* Technical Specifications Grid */}
            <div className="border-t border-b border-stone-200/80 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2 border-l border-stone-200 pl-4 md:first:border-l-0 md:first:pl-0">
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400">Profile</p>
                <p className="text-sm font-light text-stone-800 leading-snug">
                  Structured • Balanced • Long Finish
                </p>
              </div>
              <div className="space-y-2 border-l border-stone-200 pl-4">
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400">Best Served</p>
                <p className="text-sm font-light text-stone-800 leading-snug">
                  14–16°C • Large Bordeaux Stem
                </p>
              </div>
              <div className="space-y-2 border-l border-stone-200 pl-4">
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400">Pairing</p>
                <p className="text-sm font-light text-stone-800 leading-snug">
                  Slow-roasted meats • Aged cheeses
                </p>
              </div>
            </div>

            {/* Premium CTA Actions */}
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-8">
              <button
                type="button"
                onClick={() => navigate('/book-tour')}
                className="group inline-flex items-center gap-4 bg-stone-900 text-white text-[11px] uppercase tracking-[0.25em] px-8 py-4 rounded-full hover:bg-[#811331] transition-all duration-300 shadow-md shadow-stone-900/10 hover:shadow-xl hover:shadow-[#811331]/10"
              >
                <span>Book a cellar tasting</span>
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default WineDetail;