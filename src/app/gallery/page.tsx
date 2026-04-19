'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { Play, X, Maximize2 } from 'lucide-react';

type MediaItem = {
  type: 'image' | 'video';
  src: string;
  title: string;
  category: string;
  description: string;
};

const mediaItems: MediaItem[] = [
  { type: 'image', src: '/images/dining.jpg', title: 'Fine Dining Experience', category: 'Culinary', description: 'Experience world-class gastronomy with up to 30% off on premium dining.' },
  { type: 'image', src: '/images/gym.jpg', title: 'Luxury Fitness Center', category: 'Wellness', description: 'Train in style with our state-of-the-art equipment and personal training.' },
  { type: 'image', src: '/images/pool.jpg', title: 'Temperature Controlled Pool', category: 'Wellness', description: 'Dive into elegance with our pristine indoor swimming facilities.' },
  { type: 'video', src: '/videos/video-1.mp4', title: 'The Stellaar Experience', category: 'Lifestyle', description: 'A cinematic look into the lifestyle of our elite members.' },
  { type: 'image', src: '/images/exterior.jpg', title: 'The Stellaar Facade', category: 'Architecture', description: 'Nagpur\'s first premium vertical family club, shining in the night sky.' },
  { type: 'image', src: '/images/membership.jpg', title: 'Exclusive Community', category: 'Lifestyle', description: 'Connect with a curated community of 100 high-net-worth families.' },
  { type: 'image', src: '/images/family.jpg', title: 'Family Bonding', category: 'Community', description: 'Safe, luxurious spaces designed for families to connect and celebrate.' },
  { type: 'image', src: '/images/sports.jpg', title: 'Sports & Recreation', category: 'Facilities', description: 'Premium billiards, tennis, and recreational lounges for our patrons.' },
  { type: 'video', src: '/videos/video-6.mp4', title: 'Evening Ambiance', category: 'Entertainment', description: 'Enjoy exclusive events and VIP nightlife right within the club.' },
  { type: 'image', src: '/images/fitness-steam.jpg', title: 'Fitness & Steam', category: 'Wellness', description: 'Rejuvenate your senses in our world-class steam and sauna rooms.' },
  { type: 'image', src: '/images/reception.jpg', title: '5-Star Concierge', category: 'Hospitality', description: 'Our dedicated staff ensures every visit is absolutely flawless.' },
  { type: 'image', src: '/images/gallery-1.jpg', title: 'The Grand Lounge', category: 'Spaces', description: 'Perfect for casual meetings or relaxing with a curated cocktail.' },
  { type: 'image', src: '/images/gallery-2.jpg', title: 'Gourmet Selection', category: 'Culinary', description: 'Dishes crafted by internationally renowned executive chefs.' },
  { type: 'image', src: '/images/gallery-3.jpg', title: 'Private Boardroom', category: 'Business', description: 'High-end networking and private business meeting facilities.' },
  { type: 'image', src: '/images/gallery-4.jpg', title: 'Architectural Details', category: 'Architecture', description: 'Every corner of The Stellaar is meticulously designed for luxury.' },
  { type: 'image', src: '/images/gallery-5.jpg', title: 'Rooftop Vibes', category: 'Lifestyle', description: 'Unwind under the stars at our exclusive rooftop venues.' },
];

export default function Gallery() {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      <section className="pt-40 pb-10 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">Gallery</h1>
        <p className="text-[#D4AF37] tracking-[0.2em] uppercase text-sm mb-12">A Glimpse of The Extraordinary</p>

        {/* Informative Intro Section */}
        <div className="container mx-auto max-w-4xl text-center mb-16">
          <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mb-8"></div>
          <h2 className="text-2xl md:text-3xl font-serif text-white mb-6 leading-relaxed">
            "Step into a world where every detail is curated for perfection."
          </h2>
          <p className="text-white/60 font-light text-lg leading-relaxed mb-6">
            Welcome to the visual tour of The Stellaar. As Nagpur's first premium vertical family club, our 
            facilities span across multiple floors of uncompromised luxury. From our state-of-the-art wellness 
            centers and temperature-controlled swimming pools to our exclusive fine-dining restaurants and 
            private boardrooms, every space is designed to cater to the highest standards of our 100 member families.
          </p>
          <p className="text-white/40 font-light text-sm leading-relaxed max-w-2xl mx-auto">
            Browse through our gallery below to explore the architecture, the amenities, and the vibrant 
            community lifestyle that defines The Stellaar experience.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="container mx-auto max-w-7xl columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {mediaItems.map((item, i) => (
            <div 
              key={i} 
              className="relative break-inside-avoid overflow-hidden rounded-sm group cursor-pointer border border-white/5 bg-gray-900"
              onClick={() => setSelectedMedia(item)}
            >
              {item.type === 'image' ? (
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              ) : (
                <div className="relative w-full h-auto aspect-[4/5]">
                  <video src={item.src} className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-16 h-16 rounded-full bg-black/50 border border-[#D4AF37]/50 flex items-center justify-center backdrop-blur-sm group-hover:bg-[#D4AF37]/20 transition-all">
                      <Play className="w-6 h-6 text-[#D4AF37]" />
                    </div>
                  </div>
                </div>
              )}
              
              {/* Info Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <span className="text-[#D4AF37] uppercase tracking-[0.2em] text-[10px] font-bold mb-2">
                  {item.category}
                </span>
                <h3 className="text-white font-serif text-xl leading-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {item.title}
                </h3>
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <Maximize2 className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal with Info */}
      {selectedMedia && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 fade-in">
          <button 
            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-3 bg-white/5 rounded-full hover:bg-white/10 z-50"
            onClick={() => setSelectedMedia(null)}
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="max-w-7xl w-full h-full flex flex-col md:flex-row items-center justify-center relative gap-8 py-20 px-4 md:px-12">
            {/* Media Container */}
            <div className="w-full md:w-2/3 max-h-[80vh] flex items-center justify-center">
              {selectedMedia.type === 'image' ? (
                <img 
                  src={selectedMedia.src} 
                  alt={selectedMedia.title} 
                  className="max-w-full max-h-[80vh] object-contain shadow-2xl"
                />
              ) : (
                <video 
                  src={selectedMedia.src} 
                  controls 
                  autoPlay 
                  className="max-w-full max-h-[80vh] shadow-2xl"
                />
              )}
            </div>

            {/* Information Container */}
            <div className="w-full md:w-1/3 text-left">
              <div className="border border-white/10 p-8 bg-[#050505]/80 backdrop-blur-md rounded-sm">
                <span className="inline-block border border-[#D4AF37] text-[#D4AF37] px-4 py-1 uppercase tracking-widest text-[10px] font-bold mb-6">
                  {selectedMedia.category}
                </span>
                <h2 className="text-3xl md:text-4xl font-serif text-white mb-6 leading-tight">
                  {selectedMedia.title}
                </h2>
                <div className="w-12 h-[1px] bg-white/20 mb-6"></div>
                <p className="text-white/60 font-light leading-relaxed mb-8">
                  {selectedMedia.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
