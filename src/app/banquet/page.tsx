import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Award, CheckCircle, ArrowRight, Users, Car, Music, Camera } from 'lucide-react';
import Link from 'next/link';

export default function Banquet() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src="/images/gallery-5.jpg"
            alt="The Stellaar Banquet"
            className="w-full h-full object-cover scale-105 opacity-80"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black"></div>
        </div>

        <div className="relative z-10 text-center px-4 fade-in mt-12 max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <Award className="w-12 h-12 text-[#D4AF37]" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight drop-shadow-xl">
            Grand Celebrations <br className="hidden md:block"/> at <span className="text-[#D4AF37]">Stellaar</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-10">
            Nagpur's premier event destination for luxurious weddings, corporate galas, and intimate family gatherings.
          </p>
          <Link
            href="#quote"
            className="group inline-flex items-center gap-3 bg-[#D4AF37] text-black px-10 py-4 rounded-sm font-semibold uppercase tracking-widest text-sm hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-300"
          >
            Get Event Quote
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-24 px-6 bg-[#050505]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-[#D4AF37] tracking-[0.2em] uppercase text-xs font-bold mb-4">Curated Experiences</p>
            <h2 className="text-3xl md:text-5xl font-serif text-white">Events Tailored to Perfection</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Weddings', img: '/images/gallery-5.jpg', desc: 'Fairy-tale weddings with opulent decor and seamless execution.' },
              { title: 'Corporate Events', img: '/images/reception.jpg', desc: 'Impress your clients and team with our premium corporate setups.' },
              { title: 'Engagements', img: '/images/gallery-4.jpg', desc: 'Intimate and luxurious settings for your special day.' },
              { title: 'Birthdays', img: '/images/gallery-2.jpg', desc: 'Joyous celebrations tailored for all ages.' }
            ].map((event, i) => (
              <div key={i} className="group relative h-[400px] overflow-hidden rounded-lg border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-500">
                <img src={event.img} alt={event.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-8 text-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-serif text-white mb-2">{event.title}</h3>
                  <p className="text-white/70 text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-24 px-6 bg-black relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
            {[
              { icon: <Users className="w-8 h-8 text-[#D4AF37] mb-4 mx-auto" />, title: 'Capacity', desc: 'Up to 500 Guests' },
              { icon: <Car className="w-8 h-8 text-[#D4AF37] mb-4 mx-auto" />, title: 'Parking', desc: 'Valet Service' },
              { icon: <Camera className="w-8 h-8 text-[#D4AF37] mb-4 mx-auto" />, title: 'Decor', desc: 'In-house Support' },
              { icon: <Music className="w-8 h-8 text-[#D4AF37] mb-4 mx-auto" />, title: 'Catering', desc: 'Premium Menus' }
            ].map((item, i) => (
              <div key={i} className="glass-card p-8 border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-300">
                {item.icon}
                <h3 className="text-xl font-serif text-white mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm uppercase tracking-widest">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote" className="py-24 px-6 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-card p-10 md:p-14 border border-[#D4AF37]/20 relative overflow-hidden text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-[80px]"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-[80px]"></div>
            
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4 relative z-10">Get an Event Quote</h2>
            <p className="text-white/60 mb-10 text-sm max-w-xl mx-auto relative z-10">
              Tell us about your upcoming event, and our dedicated event manager will craft a bespoke proposal for you.
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
                <label className="text-white/70 text-xs uppercase tracking-widest font-semibold ml-1">Event Type</label>
                <select defaultValue="" className="w-full bg-black/50 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37]/50 transition-colors appearance-none">
                  <option value="" disabled>Select Event Type</option>
                  <option value="wedding">Wedding</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="birthday">Birthday Party</option>
                  <option value="other">Other Event</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-white/70 text-xs uppercase tracking-widest font-semibold ml-1">Expected Guests</label>
                <input type="number" placeholder="Number of guests" className="w-full bg-black/50 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37]/50 transition-colors" />
              </div>
              <div className="md:col-span-2 mt-4 text-center">
                <button type="submit" className="inline-flex items-center gap-3 px-10 py-4 bg-[#D4AF37] text-black font-semibold hover:bg-white transition-colors uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                  Request Quote <ArrowRight className="w-5 h-5" />
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
