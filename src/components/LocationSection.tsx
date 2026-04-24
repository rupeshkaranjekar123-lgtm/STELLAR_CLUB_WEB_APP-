'use client';

import React, { useEffect, useState } from 'react';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';

export default function LocationSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simple fade-in animation trigger on mount
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-24 bg-[#0A0A0A] relative overflow-hidden border-t border-white/5">
      <div className={`container mx-auto px-6 max-w-7xl transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        <div className="text-center mb-16">
          <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-6 border border-[#D4AF37]/20 shadow-[0_0_30px_rgba(212,175,55,0.15)]">
            <MapPin className="w-8 h-8 text-[#D4AF37]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Find Us Easily</h2>
          <p className="text-[#D4AF37] tracking-[0.2em] uppercase text-xs font-bold">Visit our premium location in Nagpur</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Info Card */}
          <div className="lg:col-span-1 p-10 bg-black/60 border border-white/10 rounded-2xl shadow-2xl relative z-10 flex flex-col justify-between hover:border-[#D4AF37]/30 transition-colors duration-500 group">
            <div className="space-y-10">
              
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-white/5 group-hover:bg-[#D4AF37]/10 transition-colors flex items-center justify-center shrink-0 border border-white/10 group-hover:border-[#D4AF37]/30">
                  <MapPin className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="text-white font-serif text-xl mb-2">Location</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    The Stellar Premium Family Club,<br/>
                    439G+439, Prashant Nagar,<br/>
                    Samarth Nagar East, Nagpur, Maharashtra 440015
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-white/5 group-hover:bg-[#D4AF37]/10 transition-colors flex items-center justify-center shrink-0 border border-white/10 group-hover:border-[#D4AF37]/30">
                  <Phone className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="text-white font-serif text-xl mb-2">Contact</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    +91 7888005995<br/>
                    +91 8668647116
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-white/5 group-hover:bg-[#D4AF37]/10 transition-colors flex items-center justify-center shrink-0 border border-white/10 group-hover:border-[#D4AF37]/30">
                  <Clock className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="text-white font-serif text-xl mb-2">Hours</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Mon - Sun: 6:00 AM - 11:00 PM<br/>
                    Open all year round
                  </p>
                </div>
              </div>

            </div>

            <div className="pt-8 mt-8 border-t border-white/10">
              <a 
                href="https://maps.google.com/?q=The+Stellaar+-+Premium+Family+Club,+439G%2B439,+Prashant+Nagar,+Samarth+Nagar+East,+Nagpur,+Maharashtra+440015" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-[#D4AF37] text-black font-semibold rounded-lg hover:bg-white hover:-translate-y-1 transition-all duration-300 shadow-[0_10px_20px_-10px_rgba(212,175,55,0.4)]"
              >
                Get Directions
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Map Container */}
          <a 
            href="https://maps.google.com/?q=The+Stellaar+-+Premium+Family+Club,+439G%2B439,+Prashant+Nagar,+Samarth+Nagar+East,+Nagpur,+Maharashtra+440015"
            target="_blank"
            rel="noopener noreferrer"
            className="lg:col-span-2 h-[400px] lg:h-auto min-h-[400px] rounded-2xl overflow-hidden border border-white/10 relative group block cursor-pointer"
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
            <img 
              src="/images/static-map.png" 
              alt="Stellaar Location Static Map" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </a>
          
        </div>
      </div>
    </section>
  );
}
