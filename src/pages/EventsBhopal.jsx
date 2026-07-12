import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin } from 'lucide-react';
import SubPageHero from '../Components/SubPageHero';

const EventsBhopal = () => {
  return (
    <main className="bg-[#FCFBFA] min-h-screen font-sans text-stone-900 overflow-x-hidden">
      
      {/* Hero Section */}
      <SubPageHero
        bgImageDesktop="https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&q=80&w=2000"
      >
        <Link 
          to="/events"
          className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
        >
          <ArrowLeft size={16} />
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Back to Events</span>
        </Link>
        
        <div className="flex items-center justify-center gap-3 mb-2">
          <MapPin className="text-white" size={20} />
          <h1 className="text-4xl md:text-5xl font-serif italic text-white leading-tight">
            Bhopal
          </h1>
        </div>
        <h2 className="text-xs md:text-sm uppercase tracking-widest text-[#f5d2dd]">
          Wine Tasting Events
        </h2>
      </SubPageHero>

      {/* Main Content */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-32 h-0.5 bg-[#811331] mx-auto mb-8"></div>
            <p className="text-stone-600 text-lg font-light max-w-3xl mx-auto leading-relaxed">
              Set against the city's relaxed charm, our wine tasting events in Bhopal have been thoughtfully curated 
              to celebrate fine wines and meaningful conversations. Each gathering brought together curated selections, 
              warm ambience, and moments worth savouring.
            </p>
          </div>

          {/* Event Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((event) => (
              <div key={event} className="bg-[#F9F8F6] rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-[4/3] bg-stone-200 relative">
                  <img 
                    src={`https://images.unsplash.com/photo-${1535958636474 + event}-b021ee887b13?auto=format&fit=crop&q=80&w=600`}
                    alt={`Wine Tasting Event ${event} in Bhopal`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-stone-700">Bhopal</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-stone-500 text-sm mb-3">
                    <Calendar size={16} />
                    <span className="text-[10px] uppercase tracking-[0.1em]">Past Event</span>
                  </div>
                  <h3 className="text-xl font-serif italic text-stone-900 mb-3">
                    {event === 1 && "Sunset Wine Experience"}
                    {event === 2 && "Lakeside Wine Tasting"}
                    {event === 3 && "Heritage Wine Evening"}
                    {event === 4 && "Art & Wine Fusion"}
                    {event === 5 && "Seasonal Wine Showcase"}
                    {event === 6 && "Jazz & Wine Night"}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">
                    {event === 1 && "A memorable evening of wine appreciation against Bhopal's scenic backdrop, featuring our premium collection."}
                    {event === 2 && "An enchanting lakeside setting where fine wines meet the tranquil waters of Bhopal's famous lakes."}
                    {event === 3 && "Celebrating Bhopal's rich heritage alongside our finest wine selections in a historic venue."}
                    {event === 4 && "Where art meets wine - an exclusive evening featuring local artists and our curated wine collection."}
                    {event === 5 && "Showcasing seasonal wine releases paired with local cuisine that highlights Bhopal's culinary diversity."}
                    {event === 6 && "Live jazz performances complementing our premium wine selection for an unforgettable evening."}
                  </p>
                  <button className="text-[#811331] text-sm uppercase tracking-[0.1em] font-medium hover:underline">
                    View Photos →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-[#F9F8F6]">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h3 className="text-2xl md:text-3xl font-serif italic text-stone-900">
            We look forward to creating many more such experiences in the city.
          </h3>
          <div className="flex items-center justify-center gap-6">
            <div className="h-px w-20 bg-stone-300"></div>
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#811331]">Join Our Journey</span>
            <div className="h-px w-20 bg-stone-300"></div>
          </div>
          <p className="text-stone-600 font-light leading-relaxed">
            Stay connected with us for upcoming wine tasting events, exclusive experiences, and celebrations of fine wine culture in Bhopal.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            {/* <Link 
              to="/book-tour"
              className="px-8 py-4 bg-[#811331] text-white rounded-full hover:bg-[#6a0e28] transition-colors"
            >
              <span className="uppercase tracking-[0.2em] text-sm font-medium">Book a Tasting</span>
            </Link> */}
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

export default EventsBhopal;
