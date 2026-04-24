import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Check, Star, Shield, Users, Gem, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Membership() {
  const plans = [
    {
      name: 'Blue',
      price: '₹74,999',
      period: '1 Year',
      features: ['Full Family Access', '20% Dining Discount', 'Standard Event Access', 'Gym & Pool Privileges'],
      color: 'border-blue-900/50 hover:border-blue-500/50',
      text: 'text-blue-400'
    },
    {
      name: 'Silver',
      price: '₹1,74,999',
      period: '3 Years',
      features: ['Full Family Access', '25% Dining Discount', 'Priority Event Access', 'Salon 20% Discount'],
      color: 'border-slate-500/50 hover:border-slate-300/50',
      text: 'text-slate-300'
    },
    {
      name: 'Gold',
      price: '₹2,24,999',
      period: '5 Years',
      features: ['Full Family Access', '30% Dining Discount', 'VIP Event Access', 'Stellaar Select Program'],
      color: 'border-[#D4AF37]/50 hover:border-[#D4AF37]',
      text: 'text-[#D4AF37]'
    },
  ];

  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      {/* Hero */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video 
            src="/videos/video-5.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
        </div>
        <div className="relative z-10 text-center px-4 fade-in mt-16">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">Membership</h1>
          <p className="text-[#D4AF37] tracking-[0.2em] uppercase text-xs">Not Just a Club — A Lifestyle</p>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-6 bg-[#050505]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Shield className="w-10 h-10 text-[#D4AF37] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Choose Your Access</h2>
            <p className="text-white/60 max-w-2xl mx-auto leading-relaxed text-sm">
              Membership at The Stellaar is strictly limited to 100 families, ensuring an uncrowded, private, and highly personalized experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <div key={i} className={`glass-card p-8 flex flex-col items-center text-center transition-all duration-500 border ${plan.color} relative overflow-hidden group`}>
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                <h3 className="text-2xl font-serif text-white mb-2">{plan.name}</h3>
                <div className="text-xs text-white/40 uppercase tracking-widest mb-6">{plan.period}</div>
                <div className={`text-2xl lg:text-3xl font-bold mb-8 ${plan.text}`}>{plan.price}</div>
                
                <ul className="space-y-4 mb-10 w-full text-left text-white/70 text-sm flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 border-b border-white/5 pb-3 last:border-0 leading-tight">
                      <Star className={`w-4 h-4 shrink-0 mt-0.5 ${plan.text}`} /> {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="/apply" 
                  className="w-full py-4 border border-white/20 text-white hover:bg-white hover:text-black hover:border-white transition-all uppercase tracking-widest text-xs font-semibold mt-auto"
                >
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privileges */}
      <section className="py-24 px-6 bg-black border-t border-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">The Stellaar Privileges</h2>
            <p className="text-white/60 max-w-2xl mx-auto leading-relaxed text-sm">
              Beyond world-class amenities, a Stellaar membership unlocks a lifestyle of unmatched prestige and convenience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto rounded-full border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#D4AF37] transition-colors bg-white/5">
                <Users className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-serif text-white mb-4">Elite Networking</h3>
              <p className="text-white/50 text-sm leading-relaxed">Connect with Nagpur&apos;s most influential business leaders, professionals, and tastemakers in our exclusive members-only lounges.</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto rounded-full border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#D4AF37] transition-colors bg-white/5">
                <Gem className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-serif text-white mb-4">Curated Experiences</h3>
              <p className="text-white/50 text-sm leading-relaxed">Gain priority access to high-profile cultural events, private wine tastings, and premium entertainment hosted regularly.</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto rounded-full border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#D4AF37] transition-colors bg-white/5">
                <Clock className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-serif text-white mb-4">Seamless Lifestyle</h3>
              <p className="text-white/50 text-sm leading-relaxed">Enjoy dedicated concierge services, valet parking, and priority reservations at all our fine dining establishments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-24 px-6 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto max-w-5xl">
          <div className="glass-card p-12 text-center border border-[#D4AF37]/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-[80px]"></div>
            <h2 className="text-2xl md:text-3xl font-serif text-white mb-12 relative z-10">The Application Process</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              <div className="space-y-4">
                <div className="text-4xl font-serif text-[#D4AF37]/40 mb-2">01</div>
                <h4 className="text-lg text-white font-serif">Apply Online</h4>
                <p className="text-white/50 text-sm">Submit your details and select your desired membership tier through our secure portal.</p>
              </div>
              <div className="space-y-4">
                <div className="text-4xl font-serif text-[#D4AF37]/40 mb-2">02</div>
                <h4 className="text-lg text-white font-serif">Committee Review</h4>
                <p className="text-white/50 text-sm">Our membership committee carefully reviews each application to maintain club exclusivity.</p>
              </div>
              <div className="space-y-4">
                <div className="text-4xl font-serif text-[#D4AF37]/40 mb-2">03</div>
                <h4 className="text-lg text-white font-serif">Welcome Aboard</h4>
                <p className="text-white/50 text-sm">Upon approval, complete your investment and receive your personalized Stellaar access.</p>
              </div>
            </div>

            <div className="mt-16 relative z-10">
              <Link 
                href="/apply" 
                className="inline-flex items-center gap-4 px-10 py-4 bg-[#D4AF37] text-black font-semibold hover:bg-white transition-colors uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(212,175,55,0.2)]"
              >
                Begin Your Application <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
