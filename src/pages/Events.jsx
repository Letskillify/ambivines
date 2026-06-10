import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Instagram } from 'lucide-react';

const Events = () => {
  return (
    <main className="bg-[#FCFBFA] min-h-screen font-sans text-stone-900 overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-6 text-center bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1510892472924-6444e2a75c12?auto=format&fit=crop&q=80&w=2000')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-stone-900/60"></div>

        {/* Content */}
        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif mb-6 italic text-white">
            Events
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-white/90 mb-8">
            Curated Wine Experiences Across Madhya Pradesh
          </h2>
          <p className="text-stone-200 font-light leading-relaxed max-w-2xl mx-auto text-lg">
            Ambi Vineyards regularly hosts wine tasting events, creating thoughtfully curated experiences for wine enthusiasts. 
            Our events have been widely appreciated for their ambience, quality wines, and engaging concepts.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 text-center bg-white">
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-stone-600 text-lg font-light">
            To stay updated on our upcoming events, follow us on Instagram.
          </p>
          <a 
            href="https://instagram.com/ambivineyards" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#811331] text-white rounded-full hover:bg-[#6a0e28] transition-colors"
          >
            <Instagram size={20} />
            <span className="uppercase tracking-[0.2em] text-sm font-medium">Follow on Instagram</span>
          </a>
        </div>
      </section>

      {/* Section Divider */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-serif italic text-stone-900 mb-6">
            For more details on our past events, explore below.
          </h3>
          <div className="w-24 h-0.5 bg-[#811331] mx-auto"></div>
        </div>
      </section>

      {/* City Cards Section */}
      <section className="py-20 px-6 bg-[#F9F8F6]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Indore Card */}
            <Link 
              to="/events/indore"
              className="group relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2"
            >
              <img 
                src="https://images.unsplash.com/photo-1558346489-19413928158b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdpbmV8ZW58MHx8MHx8fDA%3D"
                alt="Wine Tasting Events in Indore"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              
              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin size={20} className="text-[#811331]" />
                  <span className="text-sm uppercase tracking-[0.2em] font-bold bg-[#811331] px-3 py-1 rounded-full">
                    Indore
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-serif italic mb-3">
                  Wine Tasting Events
                </h3>
                <p className="text-white/90 text-sm leading-relaxed max-w-sm">
                  From intimate tastings to lively wine evenings, discover our memorable experiences in Indore
                </p>
              </div>
            </Link>

            {/* Bhopal Card */}
            <Link 
              to="/events/bhopal"
              className="group relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2"
            >
              <img 
                src="https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&q=80&w=800"
                alt="Wine Tasting Events in Bhopal"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              
              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin size={20} className="text-[#811331]" />
                  <span className="text-sm uppercase tracking-[0.2em] font-bold bg-[#811331] px-3 py-1 rounded-full">
                    Bhopal
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-serif italic mb-3">
                  Wine Tasting Events
                </h3>
                <p className="text-white/90 text-sm leading-relaxed max-w-sm">
                  Set against the city's relaxed charm, experience our curated wine gatherings in Bhopal
                </p>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-20 px-6 text-center bg-white">
        <div className="max-w-3xl mx-auto space-y-8">
          <h3 className="text-2xl md:text-3xl font-serif italic text-stone-900">
            We look forward to creating many more such experiences in the city.
          </h3>
          <div className="flex items-center justify-center gap-6">
            <div className="h-px w-20 bg-stone-300"></div>
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#811331]">Join Our Journey</span>
            <div className="h-px w-20 bg-stone-300"></div>
          </div>
          <p className="text-stone-600 font-light leading-relaxed">
            Stay connected with us for upcoming wine tasting events, exclusive experiences, and celebrations of fine wine culture across Madhya Pradesh.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Link 
              to="/book-tour"
              className="px-8 py-4 bg-[#811331] text-white rounded-full hover:bg-[#6a0e28] transition-colors"
            >
              <span className="uppercase tracking-[0.2em] text-sm font-medium">Book a Tasting</span>
            </Link>
            <a 
              href="https://instagram.com/ambivineyards" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 border border-stone-300 text-stone-700 rounded-full hover:bg-stone-100 transition-colors"
            >
              <span className="uppercase tracking-[0.2em] text-sm font-medium">Follow Updates</span>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Events;
