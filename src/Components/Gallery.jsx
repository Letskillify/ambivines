import React from 'react';
import { Play } from 'lucide-react';

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      type: 'image',
      title: 'Golden Hour Harvest',
      aspect: 'aspect-[3/4]',
      url: 'https://res.cloudinary.com/dcgcuvk02/image/upload/v1769948052/pwg95ic0l0deyoqbl50e.jpg',
    },
    {
      id: 2,
      type: 'video',
      title: 'The Art of Pouring',
      aspect: 'aspect-square',
      url: 'https://res.cloudinary.com/dcgcuvk02/image/upload/v1769948049/xgnrloubnzz9uwawykhl.jpg',
    },
    {
      id: 3,
      type: 'image',
      title: 'Cellar Traditions',
      aspect: 'aspect-[9/16]',
      url: 'https://res.cloudinary.com/dcgcuvk02/image/upload/v1769947638/uyuxuqhebtgvsldub9bt.jpg',
    },
    {
      id: 4,
      type: 'image',
      title: 'Spring Bloom',
      aspect: 'aspect-[4/3]',
      url: 'https://res.cloudinary.com/dcgcuvk02/image/upload/v1769948049/uvemhywd65s77jbe5xco.jpg',
    },
    {
      id: 5,
      type: 'image',
      title: 'Estate Morning',
      aspect: 'aspect-square',
      url: 'https://res.cloudinary.com/dcgcuvk02/image/upload/v1769948050/wrcudpyqlli6z5wfwgfq.jpg',
    },
    {
      id: 6,
      type: 'video',
      title: 'Oak Maturation',
      aspect: 'aspect-[3/4]',
      url: 'https://res.cloudinary.com/dcgcuvk02/image/upload/v1769948051/ovz3sjcqfwxvvpdmvfnu.jpg',
    },
    {
      id: 7,
      type: 'image',
      title: 'The Collection',
      aspect: 'aspect-[2/3]',
      url: 'https://res.cloudinary.com/dcgcuvk02/image/upload/v1769948051/drup5uczczaqzjadigwd.jpg',
    },
  ];

  return (
    <main className="bg-[#faf9f7] min-h-screen px-6 md:px-14 lg:px-20 pb-32">

      <div className="max-w-7xl mx-auto text-center pt-24 md:pt-32 mb-20 md:mb-28">
        <span className="block text-[10px] tracking-[0.6em] uppercase mb-6" style={{ color: '#811331' }}>
          Visual Journal
        </span>
        <h1 className="font-serif italic text-stone-900 text-5xl md:text-6xl lg:text-7xl">
          Life At AMBI VINES
        </h1>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-10 space-y-10">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative break-inside-avoid overflow-hidden rounded-[2.5rem] bg-white shadow-[0_30px_80px_-40px_rgba(0,0,0,0.35)] transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_50px_120px_-40px_rgba(0,0,0,0.5)]"
            >

              <div className={`${item.aspect} overflow-hidden`}>
                <img
                  src={item.url}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute inset-x-6 bottom-6 rounded-2xl bg-white/80 backdrop-blur-xl p-6 shadow-lg">

                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-serif text-stone-900 text-lg md:text-xl leading-tight">
                      {item.title}
                    </h3>

                    {item.type === 'video' && (
                      <div className="w-11 h-11 rounded-full bg-stone-900 flex items-center justify-center shadow-md">
                        <Play size={16} fill="white" className="text-white ml-[2px]" />
                      </div>
                    )}
                  </div>

                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-24">
        <button
          type="button"
          className="group relative inline-flex items-center justify-center px-10 md:px-12 py-4 border border-[#811331] text-[#811331] overflow-hidden transition-all duration-300 ease-out hover:text-white"
        >
          <span className="relative z-10 text-[11px] tracking-[0.45em] uppercase font-semibold font-sans">
            Explore More Moments
          </span>
          <div
            className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.25,1)]"
            style={{ backgroundColor: '#811331' }}
          />
        </button>
      </div>

    </main>
  );
};

export default Gallery;
