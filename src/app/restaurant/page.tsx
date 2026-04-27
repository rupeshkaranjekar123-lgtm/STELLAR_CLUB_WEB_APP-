import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Coffee, ArrowRight, Star, Utensils, Clock, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Restaurant() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src="/images/dining.jpg"
            alt="The Stellaar Fine Dining"
            className="w-full h-full object-cover scale-105 opacity-80"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black"></div>
        </div>

        <div className="relative z-10 text-center px-4 fade-in mt-12 max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <Coffee className="w-12 h-12 text-[#D4AF37]" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight drop-shadow-xl">
            A Culinary <br className="hidden md:block"/> <span className="text-[#D4AF37]">Masterpiece</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-10">
            Experience standalone premium dining with exquisite flavors, impeccable service, and a sophisticated family vibe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#reservation"
              className="group inline-flex items-center gap-3 bg-[#D4AF37] text-black px-10 py-4 rounded-sm font-semibold uppercase tracking-widest text-sm hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-300"
            >
              Reserve Table
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="py-24 px-6 bg-[#050505]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="group">
              <Utensils className="w-10 h-10 text-[#D4AF37] mx-auto mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-serif text-white mb-4">Signature Dishes</h3>
              <p className="text-white/60 font-light text-sm leading-relaxed">
                A globally inspired menu crafted by masterful chefs, featuring rare ingredients and bold flavors.
              </p>
            </div>
            <div className="group">
              <Star className="w-10 h-10 text-[#D4AF37] mx-auto mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-serif text-white mb-4">Family Dining Vibe</h3>
              <p className="text-white/60 font-light text-sm leading-relaxed">
                An elegant yet welcoming atmosphere perfect for romantic evenings or memorable family dinners.
              </p>
            </div>
            <div className="group">
              <MapPin className="w-10 h-10 text-[#D4AF37] mx-auto mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-serif text-white mb-4">Luxurious Interior</h3>
              <p className="text-white/60 font-light text-sm leading-relaxed">
                Dine in an exquisitely designed space that blends contemporary aesthetic with timeless luxury.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Food Gallery */}
      <section className="py-0 bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-auto md:h-[400px]">
          {[
            { img: '/images/dining.jpg', title: 'Gourmet Cuisine' },
            { img: '/images/gallery-3.jpg', title: 'Elegant Ambience' },
            { img: '/images/gallery-4.jpg', title: 'Family Gatherings' },
            { img: '/images/pool.jpg', title: 'Poolside Drinks' }
          ].map((item, i) => (
            <div key={i} className="relative overflow-hidden group h-[300px] md:h-full">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-colors duration-700 flex items-center justify-center">
                <h3 className="text-white font-serif text-2xl tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reservation Form */}
      <section id="reservation" className="py-24 px-6 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-card p-10 md:p-14 border border-[#D4AF37]/20 relative overflow-hidden text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-[80px]"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-[80px]"></div>
            
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4 relative z-10">Reserve Your Table</h2>
            <p className="text-white/60 mb-10 text-sm max-w-xl mx-auto relative z-10">
              Ensure a seamless dining experience by booking your table in advance. For parties larger than 8, please contact us directly.
            </p>

            <form className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="space-y-2">
                <label className="text-white/70 text-xs uppercase tracking-widest font-semibold ml-1">Full Name</label>
                <input type="text" placeholder="Enter your full name" className="w-full bg-black/50 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37]/50 transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-white/70 text-xs uppercase tracking-widest font-semibold ml-1">Mobile Number</label>
                <input type="tel" placeholder="Enter your mobile number" className="w-full bg-black/50 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37]/50 transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-white/70 text-xs uppercase tracking-widest font-semibold ml-1">Date</label>
                <input type="date" className="w-full bg-black/50 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37]/50 transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-white/70 text-xs uppercase tracking-widest font-semibold ml-1">Guests</label>
                <select defaultValue="" className="w-full bg-black/50 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37]/50 transition-colors appearance-none">
                  <option value="" disabled>Number of Guests</option>
                  <option value="2">2 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="6">6 Guests</option>
                  <option value="8">8 Guests</option>
                </select>
              </div>
              <div className="md:col-span-2 mt-4 text-center">
                <button type="submit" className="inline-flex items-center gap-3 px-10 py-4 bg-[#D4AF37] text-black font-semibold hover:bg-white transition-colors uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                  Confirm Reservation <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
