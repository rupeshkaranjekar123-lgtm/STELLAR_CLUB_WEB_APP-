import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Star, Shield, Users, ArrowRight, ChevronDown, Check, Award } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/dining.jpg" 
            alt="The Stellaar Dining" 
            className="w-full h-full object-cover opacity-70 scale-105 animate-[kenburns_15s_ease-in-out_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl fade-in mt-10">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight drop-shadow-2xl">
            Exclusive Premium <br/> Family Club
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto font-light tracking-wide leading-relaxed">
            Where luxury meets lifestyle. Experience unparalleled amenities, elite networking, and 5-star hospitality in the heart of Nagpur.
          </p>
          <div className="inline-flex items-center gap-3 border border-[#D4AF37]/50 px-6 py-2 mb-10 rounded-full bg-black/40 backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping"></span>
            <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-semibold">Limited to Only 100 Members</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              href="/membership" 
              className="group relative px-10 py-4 bg-gradient-to-r from-[#D4AF37] to-[#B5952F] text-black transition-all duration-500 uppercase tracking-widest text-sm font-semibold w-full sm:w-auto text-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
              <span className="relative z-10 group-hover:text-black">Join Membership</span>
            </Link>
            <Link 
              href="/about" 
              className="px-10 py-4 border border-white/30 text-white hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-500 uppercase tracking-widest text-sm w-full sm:w-auto text-center backdrop-blur-sm"
            >
              Explore More
            </Link>
          </div>
          <div className="mt-8 text-[#D4AF37] text-xs tracking-[0.2em] uppercase flex flex-col items-center gap-2">
            <span className="animate-pulse opacity-80">Only Few Slots Left</span>
            <ChevronDown className="w-5 h-5 mt-8 animate-bounce opacity-50" />
          </div>
        </div>
      </section>

      {/* Marquee Banner */}
      <div className="w-full bg-[#D4AF37] text-black py-3 overflow-hidden flex whitespace-nowrap">
        <div className="animate-marquee flex items-center gap-8 font-semibold uppercase tracking-widest text-xs min-w-max pr-8">
          <span>NAGPUR'S FIRST PREMIUM VERTICAL FAMILY CLUB</span>
          <span>•</span>
          <span>FITNESS, FUN & LIFESTYLE UNDER ONE ROOF</span>
          <span>•</span>
          <span>AFFILIATION WITH 170+ ELITE CLUBS WORLDWIDE</span>
          <span>•</span>
          <span>NAGPUR'S FIRST PREMIUM VERTICAL FAMILY CLUB</span>
          <span>•</span>
          <span>FITNESS, FUN & LIFESTYLE UNDER ONE ROOF</span>
          <span>•</span>
          <span>AFFILIATION WITH 170+ ELITE CLUBS WORLDWIDE</span>
          <span>•</span>
        </div>
      </div>

      {/* Editorial About Preview */}
      <section className="py-32 px-6 relative bg-gradient-to-b from-black to-[#050505]">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-8 relative z-10">
              <h4 className="flex items-center gap-4 text-[#D4AF37] tracking-[0.2em] uppercase text-xs font-bold">
                <span className="w-8 h-[1px] bg-[#D4AF37]"></span> The Vision
              </h4>
              <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
                A Legacy of <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#FFF3B0]">Luxury</span>
              </h2>
              <p className="text-white/60 leading-relaxed font-light text-lg">
                The Stellaar is not just a club; it is a statement. Designed for the elite few, we offer a sanctuary where families can bond, professionals can network, and individuals can rejuvenate in absolute luxury.
              </p>
              
              <div className="pt-6 space-y-5">
                {[
                  { icon: Shield, text: "Strictly curated member community" },
                  { icon: Star, text: "5-star hotel grade hospitality" },
                  { icon: Users, text: "Family-focused wellness programs" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-white/80 bg-white/5 p-4 rounded-sm border border-white/5 hover:border-[#D4AF37]/30 transition-colors">
                    <item.icon className="w-5 h-5 text-[#D4AF37]" />
                    <span className="font-light">{item.text}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-8">
                <Link href="/about" className="group inline-flex items-center gap-3 text-[#D4AF37] transition-all uppercase tracking-widest text-sm font-semibold">
                  <span className="border-b border-transparent group-hover:border-[#D4AF37] pb-1 transition-all">Discover Our Story</span>
                  <div className="w-8 h-8 rounded-full border border-[#D4AF37]/50 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </div>
            </div>
            
            <div className="lg:col-span-7 relative h-[700px] w-full mt-10 lg:mt-0">
              <div className="absolute inset-0 bg-[#D4AF37]/5 translate-x-4 translate-y-4 border border-[#D4AF37]/20 z-0"></div>
              <img 
                src="/images/pool.jpg" 
                alt="Luxury Lifestyle" 
                className="relative z-10 w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-1000 shadow-2xl"
              />
              {/* Floating Stat Card */}
              <div className="absolute -bottom-8 -left-8 md:bottom-12 md:-left-12 bg-black/80 backdrop-blur-md border border-[#D4AF37]/30 p-8 shadow-2xl z-20 max-w-[250px] fade-in">
                <Award className="w-8 h-8 text-[#D4AF37] mb-4" />
                <h4 className="text-3xl font-serif text-white mb-2">100+</h4>
                <p className="text-white/60 text-xs uppercase tracking-widest leading-relaxed">Elite Families Already Onboard</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gym Highlight - Cinematic Section */}
      <section className="py-32 relative overflow-hidden flex items-center justify-center min-h-[80vh]">
        <div className="absolute inset-0">
          <img 
            src="/images/gym.jpg" 
            alt="Modern Black & Gold Gym" 
            className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-[20s]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40 backdrop-blur-[2px]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <div className="w-16 h-1 bg-[#D4AF37] mb-8"></div>
            <h2 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">Stronger <br/><span className="text-[#D4AF37]">Together</span></h2>
            <p className="text-xl text-white/90 font-light mb-8 tracking-wide">Exclusive Gym Privileges for Your Entire Family</p>
            <p className="text-white/60 mb-12 leading-relaxed text-lg font-light border-l border-white/20 pl-6">
              State-of-the-art equipment, personalized training, and a motivating environment designed with our signature black and gold aesthetic. Elevate your fitness journey.
            </p>
            <Link 
              href="/amenities" 
              className="px-10 py-4 border border-[#D4AF37] text-white hover:bg-[#D4AF37] hover:text-black transition-all duration-300 uppercase tracking-widest text-sm font-semibold inline-flex items-center gap-3 group"
            >
              Explore All Amenities
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Premium Membership Cards */}
      <section className="py-32 px-6 bg-[#050505] relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-20 flex flex-col items-center">
            <Shield className="w-12 h-12 text-[#D4AF37] mb-6 opacity-80" />
            <h4 className="text-[#D4AF37] tracking-[0.2em] uppercase text-xs font-bold mb-4">Membership Tiers</h4>
            <h2 className="text-4xl md:text-6xl font-serif text-white">Choose Your Access</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {[
              { name: 'Blue', price: '₹74,999', period: '1 Year', features: ['Full Family Access', '20% Dining Discount', 'Standard Event Access'], color: 'border-blue-900/40 hover:border-blue-500/60', gradient: 'from-blue-900/10' },
              { name: 'Gold', price: '₹2,24,999', period: '5 Years', features: ['Full Family Access', '30% Dining Discount', 'VIP Event Access', 'Unlimited Guest Passes', 'Valet Parking'], color: 'border-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.15)] transform scale-105 z-10', gradient: 'from-[#D4AF37]/10', isPopular: true },
              { name: 'Silver', price: '₹1,74,999', period: '3 Years', features: ['Full Family Access', '25% Dining Discount', 'Priority Event Access', '3 Guest Passes/mo'], color: 'border-slate-500/40 hover:border-slate-300/60', gradient: 'from-slate-500/10' }
            ].map((plan, i) => (
              <div key={i} className={`relative bg-gradient-to-b ${plan.gradient} to-transparent backdrop-blur-xl p-10 flex flex-col items-center text-center transition-all duration-500 border ${plan.color} ${plan.isPopular ? 'py-14 bg-black/60' : 'bg-black/40'}`}>
                {plan.isPopular && (
                  <div className="absolute top-0 inset-x-0 mx-auto w-max px-4 py-1 bg-[#D4AF37] text-black text-[10px] font-bold uppercase tracking-widest rounded-b-md">
                    Most Popular
                  </div>
                )}
                <h3 className={`text-3xl font-serif text-white mb-2 ${plan.isPopular ? 'text-[#D4AF37]' : ''}`}>{plan.name} Plan</h3>
                <div className="text-xs text-white/50 uppercase tracking-[0.2em] mb-8">{plan.period}</div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-10 tracking-tight">{plan.price}</div>
                <ul className="space-y-4 mb-12 w-full text-left text-white/70 text-sm">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-4 border-b border-white/5 pb-4">
                      <div className={`p-1 rounded-full ${plan.isPopular ? 'bg-[#D4AF37]/20 text-[#D4AF37]' : 'bg-white/5 text-white/50'}`}>
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/membership" 
                  className={`w-full py-4 transition-all uppercase tracking-widest text-xs font-semibold mt-auto flex justify-center items-center gap-2 group ${plan.isPopular ? 'bg-[#D4AF37] text-black hover:bg-white' : 'border border-white/20 text-white hover:border-white'}`}
                >
                  View Details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Partners / Association Marquee */}
      <section className="py-20 border-t border-b border-white/10 bg-black overflow-hidden">
        <div className="text-center mb-10">
          <p className="text-white/40 uppercase tracking-widest text-xs">Proudly Affiliated With</p>
        </div>
        <div className="flex justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="text-2xl font-serif tracking-widest">REFORMS CLUB</div>
          <div className="w-1 h-1 rounded-full bg-white/50"></div>
          <div className="text-2xl font-serif tracking-widest">AMRAVATI</div>
          <div className="w-1 h-1 rounded-full bg-white/50"></div>
          <div className="text-2xl font-serif tracking-widest">EST. 1902</div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
