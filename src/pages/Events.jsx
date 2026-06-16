import React from 'react';
import { Instagram, Play } from 'lucide-react';

const Events = () => {
  // Array of reels with clean IDs and editorial titles
  const reels = [
    { id: "DKcWc1EzBmI", title: "Wine Tasting Highlights", thumbnail: "https://res.cloudinary.com/duzwys877/image/upload/v1781605430/t1_phgj2j.jpg" },
    { id: "DClZrAstYmg", title: "Exclusive Vintage Evening", thumbnail: "https://res.cloudinary.com/duzwys877/image/upload/v1781605431/t2_gz8l9o.jpg" },
    { id: "DW8alvKjfln", title: "Central India Wine Culture", thumbnail: "https://res.cloudinary.com/duzwys877/image/upload/v1781605431/t3_lxzu4s.jpg" },
    { id: "DUDAVquDWie", title: "Ambi Vineyards Experience", thumbnail: "https://res.cloudinary.com/duzwys877/image/upload/v1781605431/t4_vwykov.jpg" },
    { id: "DTMxbLoiAqF", title: "Harvest Celebration", thumbnail: "https://res.cloudinary.com/duzwys877/image/upload/v1781605432/t5_u4l0sa.jpg" },
    { id: "DSJ1yh9jaKd", title: "Gourmet Pairings", thumbnail: "https://res.cloudinary.com/duzwys877/image/upload/v1781605432/t6_wc4udc.jpg" },
    { id: "DQ3doe5DTHF", title: "The Grape Revolution", thumbnail: "https://res.cloudinary.com/duzwys877/image/upload/v1781605432/t7_svru2u.jpg" },
    { id: "DOVwU-9CFWS", title: "Indore Wine Showcase", thumbnail: "https://res.cloudinary.com/duzwys877/image/upload/v1781605433/t8_qq8nlf.jpg" },
    { id: "DI3vX-ZtfFu", title: "Bhopal Chapter Tasting", thumbnail: "https://res.cloudinary.com/duzwys877/image/upload/v1781605433/t9_epjgqg.jpg" },
    { id: "DD68f-jzNnZ", title: "Weekend Vineyard Tour", thumbnail: "https://res.cloudinary.com/duzwys877/image/upload/v1781605431/t10_lzebgg.jpg" },
    { id: "DDCO1yhTtLr", title: "Curated Masterclass", thumbnail: "https://res.cloudinary.com/duzwys877/image/upload/v1781605430/t11_kidbip.jpg" }
  ];

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

      {/* Section Title */}
      <section className="pt-16 pb-12 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-serif italic text-stone-900 mb-6">
            For more details on our past events, explore below.
          </h3>
          <div className="w-24 h-0.5 bg-[#811331] mx-auto"></div>
        </div>
      </section>

      {/* Responsive Thumbnail Cards Grid Section */}
      <section className="pb-24 px-6 bg-[#FCFBFA]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reels.map((reel, index) => (
              <div 
                key={index} 
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5"
              >
                {/* Event Thumbnail Image */}
                <img 
                  src={reel.thumbnail}
                  alt={reel.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  onError={(e) => e.target.src = `https://www.instagram.com/p/${reel.id}/media/?size=l`}
                />
                
                {/* Visual Gradient Shading */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10"></div>
                
                {/* Floating Top Badge Accent */}
                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md p-2 rounded-full text-white/90">
                  <Instagram size={18} />
                </div>

                {/* Editorial Details & Action Elements */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#f3d2dd] font-bold mb-1">
                    Ambi Gatherings
                  </span>
                  <h4 className="text-xl font-serif italic text-white mb-5 leading-snug">
                    {reel.title}
                  </h4>
                  
                  <a 
                    href={`https://www.instagram.com/reel/${reel.id}/`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 bg-white text-stone-900 font-sans text-xs uppercase tracking-widest font-semibold rounded-xl hover:bg-[#811331] hover:text-white transition-all duration-300 shadow-md"
                  >
                    <Play size={13} fill="currentColor" />
                    Watch Reel
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
};

export default Events;