import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Check, Star, Shield, Users, Gem, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Membership() {
  const plans = [
    {
      name: 'Individual',
      features: ['Solo Access', '15% Dining Discount', 'Standard Event Access', 'Gym & Pool Privileges'],
      color: 'border-slate-500/50 hover:border-slate-300/50',
      text: 'text-slate-300'
    },
    {
      name: 'Couple',
      features: ['Spouse Access', '20% Dining Discount', 'Standard Event Access', 'Salon 15% Discount'],
      color: 'border-blue-900/50 hover:border-blue-500/50',
      text: 'text-blue-400'
    },
    {
      name: 'Family',
      features: ['Full Family Access', '30% Dining Discount', 'VIP Event Access', 'Stellaar Select Program'],
      color: 'border-[#C9A14A]/50 hover:border-[#C9A14A]',
      text: 'text-[#C9A14A]',
      isPopular: true
    },
    {
      name: 'Corporate',
      features: ['Executive Access', 'Premium Dining Discount', 'Priority Event Access', 'Corporate Passes'],
      color: 'border-white/10 hover:border-white/30',
      text: 'text-white/80'
    }
  ];

  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative w-full min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden">
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
          <p className="text-[#C9A14A] tracking-[0.2em] uppercase text-xs">Not Just a Club — A Lifestyle</p>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-24 px-4 md:px-8 lg:px-12 bg-[#0A0A0A]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Shield className="w-10 h-10 text-[#C9A14A] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Choose Your Access</h2>
            <p className="text-white/60 max-w-2xl mx-auto leading-relaxed text-sm">
              Membership at The Stellaar is strictly limited to 100 families, ensuring an uncrowded, private, and highly personalized experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, i) => (
              <div key={i} className={`glass-card p-8 flex flex-col items-center text-center transition-all duration-500 border ${plan.color} relative overflow-hidden group ${plan.isPopular ? 'bg-black/60 shadow-[0_0_30px_rgba(212,175,55,0.1)]' : ''}`}>
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                {plan.isPopular && (
                  <div className="absolute top-0 inset-x-0 mx-auto w-max px-4 py-1 bg-[#C9A14A] text-black text-[10px] font-bold uppercase tracking-widest rounded-b-md">
                    Most Popular
                  </div>
                )}
                <h3 className={`text-2xl font-serif mt-4 mb-8 ${plan.isPopular ? 'text-[#C9A14A]' : 'text-white'}`}>{plan.name}</h3>
                
                <ul className="space-y-4 mb-10 w-full text-left text-white/70 text-sm flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 border-b border-white/5 pb-3 last:border-0 leading-tight">
                      <Star className={`w-4 h-4 shrink-0 mt-0.5 ${plan.text}`} /> {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="/apply" 
                  className={`w-full py-4 transition-all uppercase tracking-widest text-xs font-semibold mt-auto flex justify-center items-center gap-2 group ${plan.isPopular ? 'bg-[#C9A14A] text-black hover:bg-white' : 'border border-white/20 text-white hover:border-white'}`}
                >
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Membership CTA */}
      <section className="py-20 md:py-32 px-4 md:px-8 lg:px-12 bg-[#0A0A0A] border-t border-white/5 relative overflow-hidden">
        {/* Decorative Background Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C9A14A]/5 rounded-full blur-[150px] pointer-events-none"></div>
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="bg-black/60 backdrop-blur-xl p-10 md:p-16 lg:p-20 rounded-3xl border border-[#C9A14A]/30 shadow-[0_0_40px_rgba(201,161,74,0.2)] text-center transition-all duration-700 hover:border-[#C9A14A] hover:shadow-[0_0_60px_rgba(201,161,74,0.3)] hover:scale-[1.02] group">
            
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#C9A14A]/50"></div>
              <p className="text-[#C9A14A] uppercase tracking-[0.3em] text-[10px] md:text-xs font-semibold">LIMITED MEMBERSHIP ACCESS</p>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#C9A14A]/50"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight tracking-wide">
              Apply for <span className="text-[#C9A14A] font-cormorant italic normal-case">Membership</span>
            </h2>
            
            <p className="text-white/70 mb-12 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light">
              Join an exclusive circle designed for families who value luxury experiences, elite networking, premium hospitality, and unforgettable social moments.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                href="/apply" 
                className="w-full sm:w-auto px-10 py-4 bg-[#C9A14A] text-black font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white transition-all duration-500 shadow-[0_0_20px_rgba(201,161,74,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
              >
                APPLY NOW
              </Link>
              
              <Link 
                href="#privileges" 
                className="w-full sm:w-auto px-10 py-4 border border-[#C9A14A] text-[#C9A14A] font-bold uppercase tracking-widest text-xs rounded-full hover:bg-[#C9A14A] hover:text-black transition-all duration-500"
              >
                VIEW MEMBERSHIP BENEFITS
              </Link>
            </div>
            
          </div>
        </div>
      </section>

      {/* Privileges */}
      <section id="privileges" className="py-14 md:py-24 px-4 md:px-8 bg-black border-t border-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">The Stellaar Privileges</h2>
            <p className="text-white/60 max-w-2xl mx-auto leading-relaxed text-sm">
              Beyond world-class amenities, a Stellaar membership unlocks a lifestyle of unmatched prestige and convenience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto rounded-full border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#C9A14A] transition-colors bg-white/5">
                <Users className="w-8 h-8 text-[#C9A14A]" />
              </div>
              <h3 className="text-xl font-serif text-white mb-4">Elite Networking</h3>
              <p className="text-white/50 text-sm leading-relaxed">Connect with Nagpur&apos;s most influential business leaders, professionals, and tastemakers in our exclusive members-only lounges.</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto rounded-full border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#C9A14A] transition-colors bg-white/5">
                <Gem className="w-8 h-8 text-[#C9A14A]" />
              </div>
              <h3 className="text-xl font-serif text-white mb-4">Curated Experiences</h3>
              <p className="text-white/50 text-sm leading-relaxed">Gain priority access to high-profile cultural events, private wine tastings, and premium entertainment hosted regularly.</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto rounded-full border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#C9A14A] transition-colors bg-white/5">
                <Clock className="w-8 h-8 text-[#C9A14A]" />
              </div>
              <h3 className="text-xl font-serif text-white mb-4">Seamless Lifestyle</h3>
              <p className="text-white/50 text-sm leading-relaxed">Enjoy dedicated concierge services, valet parking, and priority reservations at all our fine dining establishments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-14 md:py-24 px-4 md:px-8 bg-[#0A0A0A] border-t border-white/5">
        <div className="container mx-auto max-w-5xl">
          <div className="glass-card p-12 text-center border border-[#C9A14A]/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9A14A]/5 rounded-full blur-[80px]"></div>
            <h2 className="text-2xl md:text-3xl font-serif text-white mb-12 relative z-10">The Application Process</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              <div className="space-y-4">
                <div className="text-4xl font-serif text-[#C9A14A]/40 mb-2">01</div>
                <h4 className="text-lg text-white font-serif">Apply Online</h4>
                <p className="text-white/50 text-sm">Submit your details and select your desired membership tier through our secure portal.</p>
              </div>
              <div className="space-y-4">
                <div className="text-4xl font-serif text-[#C9A14A]/40 mb-2">02</div>
                <h4 className="text-lg text-white font-serif">Committee Review</h4>
                <p className="text-white/50 text-sm">Our membership committee carefully reviews each application to maintain club exclusivity.</p>
              </div>
              <div className="space-y-4">
                <div className="text-4xl font-serif text-[#C9A14A]/40 mb-2">03</div>
                <h4 className="text-lg text-white font-serif">Welcome Aboard</h4>
                <p className="text-white/50 text-sm">Upon approval, complete your investment and receive your personalized Stellaar access.</p>
              </div>
            </div>

            <div className="mt-16 relative z-10">
              <Link 
                href="/apply" 
                className="inline-flex items-center gap-4 px-10 py-4 bg-[#C9A14A] text-black font-semibold hover:bg-white transition-colors uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(212,175,55,0.2)]"
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
