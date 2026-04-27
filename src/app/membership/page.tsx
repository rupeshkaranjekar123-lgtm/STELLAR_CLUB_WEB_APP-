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
      color: 'border-[#D4AF37]/50 hover:border-[#D4AF37]',
      text: 'text-[#D4AF37]',
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, i) => (
              <div key={i} className={`glass-card p-8 flex flex-col items-center text-center transition-all duration-500 border ${plan.color} relative overflow-hidden group ${plan.isPopular ? 'bg-black/60 shadow-[0_0_30px_rgba(212,175,55,0.1)]' : ''}`}>
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                {plan.isPopular && (
                  <div className="absolute top-0 inset-x-0 mx-auto w-max px-4 py-1 bg-[#D4AF37] text-black text-[10px] font-bold uppercase tracking-widest rounded-b-md">
                    Most Popular
                  </div>
                )}
                <h3 className={`text-2xl font-serif mt-4 mb-8 ${plan.isPopular ? 'text-[#D4AF37]' : 'text-white'}`}>{plan.name}</h3>
                
                <ul className="space-y-4 mb-10 w-full text-left text-white/70 text-sm flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 border-b border-white/5 pb-3 last:border-0 leading-tight">
                      <Star className={`w-4 h-4 shrink-0 mt-0.5 ${plan.text}`} /> {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="#consultation" 
                  className={`w-full py-4 transition-all uppercase tracking-widest text-xs font-semibold mt-auto flex justify-center items-center gap-2 group ${plan.isPopular ? 'bg-[#D4AF37] text-black hover:bg-white' : 'border border-white/20 text-white hover:border-white'}`}
                >
                  Request Consultation
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section id="consultation" className="py-24 px-6 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-card p-10 md:p-14 border border-[#D4AF37]/20 relative overflow-hidden text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-[80px]"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-[80px]"></div>
            
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4 relative z-10">Request Membership Consultation</h2>
            <p className="text-white/60 mb-10 text-sm max-w-xl mx-auto relative z-10">
              Please provide your details below and our membership team will contact you shortly to discuss your requirements.
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
              <div className="space-y-2 md:col-span-2">
                <label className="text-white/70 text-xs uppercase tracking-widest font-semibold ml-1">Membership Interest</label>
                <select defaultValue="" className="w-full bg-black/50 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37]/50 transition-colors appearance-none">
                  <option value="" disabled>Select Membership Tier</option>
                  <option value="individual">Individual</option>
                  <option value="couple">Couple</option>
                  <option value="family">Family</option>
                  <option value="corporate">Corporate</option>
                </select>
              </div>
              <div className="md:col-span-2 mt-4 text-center">
                <button type="submit" className="inline-flex items-center gap-3 px-10 py-4 bg-[#D4AF37] text-black font-semibold hover:bg-white transition-colors uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                  Submit Enquiry <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </form>
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
