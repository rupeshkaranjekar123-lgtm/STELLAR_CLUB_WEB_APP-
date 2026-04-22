import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LocationSection from '@/components/LocationSection';
import { Star, Shield, Users, ArrowRight, ChevronDown, Check, Award, Camera, Dumbbell, Heart } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-12">
        {/* Cinematic background with vignette */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/amenities-bg.png"
            alt="The Stellaar Luxury Lounge"
            className="w-full h-full object-cover opacity-60 scale-110 animate-[kenburns_30s_ease-in-out_infinite_alternate]"
          />
          {/* Overlays for depth and cinematic lighting */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/30 to-black"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,161,74,0.15)_0%,transparent_70%)]"></div>
        </div>

        {/* Ambient Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#C9A14A]/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#C9A14A]/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 container mx-auto px-6 max-w-7xl flex flex-col items-center text-center">

          {/* Brand Icon / Crown */}
          <div className="mb-8 flex flex-col items-center gap-4 fade-in">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#C9A14A]/50"></div>
              <svg width="34" height="30" viewBox="0 0 42 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_12px_rgba(201,161,74,0.8)]">
                <path d="M21 2L26 14L38 8L30 22H12L4 8L16 14L21 2Z" fill="#C9A14A" stroke="#C9A14A" strokeWidth="1" />
                <rect x="10" y="24" width="22" height="5" rx="2" fill="#C9A14A" />
              </svg>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#C9A14A]/50"></div>
            </div>
            <p className="text-[#C9A14A] tracking-[0.45em] uppercase text-[10px] sm:text-xs font-bold opacity-90">
              Join Nagpur&apos;s Most Elite Circle
            </p>
          </div>

          {/* Headline */}
          <h1 className="relative font-serif text-white mb-8 leading-[1.1] flex flex-col items-center fade-in delay-100">
            <span className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-light tracking-tight drop-shadow-2xl">
              Exclusive
            </span>
            <span className="text-[#C9A14A] text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-serif my-1 drop-shadow-[0_0_20px_rgba(201,161,74,0.25)]">
              Premium
            </span>
            <span className="text-3xl sm:text-5xl md:text-6xl lg:text-[5rem] font-light tracking-wider drop-shadow-2xl uppercase">
              Family Club
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-white/60 text-base sm:text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light tracking-wide leading-relaxed px-4 fade-in delay-200">
            Where luxury meets lifestyle. <br className="hidden sm:block" /> Experience a community like no other.
          </p>

          {/* Buttons Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto px-4 fade-in delay-300">
            <Link
              href="/contact"
              className="group relative px-12 py-4 bg-gradient-to-r from-[#C9A14A] via-[#D4B55A] to-[#A8832C] text-black transition-all duration-500 uppercase tracking-[0.2em] text-xs font-bold w-full sm:w-auto text-center rounded-sm shadow-[0_0_30px_rgba(201,161,74,0.4)] hover:shadow-[0_0_50px_rgba(201,161,74,0.6)] hover:scale-105 flex items-center justify-center gap-2"
            >
              Book a Visit <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/membership"
              className="group px-12 py-4 border border-[#C9A14A]/40 text-[#C9A14A] hover:border-[#C9A14A] hover:bg-[#C9A14A]/5 transition-all duration-500 uppercase tracking-[0.2em] text-xs font-bold w-full sm:w-auto text-center backdrop-blur-sm rounded-sm hover:scale-105"
            >
              Become a Member
            </Link>
          </div>

          {/* Stats & Affiliation Section */}
          <div className="mt-16 w-full max-w-5xl px-6 fade-in delay-500 flex flex-col items-center gap-10">

            {/* Affiliation Pill */}
            <Link
              href="https://www.reformsclub.com/"
              target="_blank"
              className="group relative flex items-center gap-6 px-10 py-4 rounded-full border border-[#C9A14A]/30 bg-black/60 backdrop-blur-md hover:border-[#C9A14A] hover:bg-black transition-all duration-700 shadow-[0_0_30px_rgba(0,0,0,0.4)] hover:shadow-[0_0_40px_rgba(201,161,74,0.2)]"
            >
              {/* Crest Logo */}
              <div className="w-12 h-12 rounded-full border border-[#C9A14A]/40 p-0.5 flex items-center justify-center bg-white shadow-[0_0_15px_rgba(255,255,255,0.2)] overflow-hidden">
                <img
                  src="/images/reforms-club-logo.png"
                  alt="Reforms Club Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex items-center gap-3">
                <span className="text-white/50 text-[11px] uppercase tracking-[0.3em] font-medium">Affiliated with</span>
                <span className="text-[#C9A14A] text-lg sm:text-xl font-serif tracking-wide group-hover:drop-shadow-[0_0_10px_rgba(201,161,74,0.5)] transition-all">Reforms Club Amravati</span>
                <ArrowRight className="w-5 h-5 text-[#C9A14A] group-hover:translate-x-2 transition-transform duration-500" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Marquee Banner */}
      <div className="w-full bg-[#D4AF37] text-black py-3 overflow-hidden flex whitespace-nowrap">
        <div className="animate-marquee flex items-center gap-8 font-semibold uppercase tracking-widest text-xs min-w-max pr-8">
          <span>NAGPUR&apos;S FIRST PREMIUM VERTICAL FAMILY CLUB</span>
          <span>•</span>
          <span>FITNESS, FUN & LIFESTYLE UNDER ONE ROOF</span>
          <span>•</span>
          <span>AFFILIATION WITH 170+ ELITE CLUBS WORLDWIDE</span>
          <span>•</span>
          <span>NAGPUR&apos;S FIRST PREMIUM VERTICAL FAMILY CLUB</span>
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
                A Legacy of <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#FFF3B0]">Luxury</span>
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
                src="/images/exterior.jpg"
                alt="Luxury Lifestyle"
                className="relative z-10 w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-1000 shadow-2xl"
              />
              {/* Floating Stat Card */}
              <div className="absolute -bottom-8 -left-8 md:bottom-12 md:-left-12 bg-black/80 backdrop-blur-md border border-[#D4AF37]/30 p-8 shadow-2xl z-20 max-w-[250px] fade-in">
                <Award className="w-8 h-8 text-[#D4AF37] mb-4" />
                <h4 className="text-3xl font-serif text-white mb-2">100+</h4>
                <p className="text-white/60 text-xs uppercase tracking-widest leading-relaxed">Join the inner circle of distinguished families.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Auto Scrolling Image Gallery Section */}
      <section className="py-24 bg-[#050505] overflow-hidden">
        <div className="text-center mb-16">
          <Shield className="w-8 h-8 text-[#D4AF37] mx-auto mb-4 opacity-80" />
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Life at Stellaar</h2>
          <p className="text-[#D4AF37] tracking-[0.2em] uppercase text-xs font-bold">A Glimpse of the Extraordinary</p>
        </div>

        {/* Scrolling wrapper */}
        <div className="w-full overflow-hidden flex">
          <div className="animate-marquee flex gap-6 pr-6 w-max [animation-duration:40s] hover:[animation-play-state:paused]">
            {[
              '/images/gallery-1.jpg',
              '/images/gallery-2.jpg',
              '/images/gallery-3.jpg',
              '/images/gallery-4.jpg',
              '/images/gallery-5.jpg',
              '/images/pool.jpg',
              '/images/dining.jpg',
              '/images/exterior.jpg',
              // DUPLICATE for seamless loop
              '/images/gallery-1.jpg',
              '/images/gallery-2.jpg',
              '/images/gallery-3.jpg',
              '/images/gallery-4.jpg',
              '/images/gallery-5.jpg',
              '/images/pool.jpg',
              '/images/dining.jpg',
              '/images/exterior.jpg',
            ].map((img, i) => (
              <Link
                href="/gallery"
                key={i}
                className="min-w-[280px] h-[350px] md:min-w-[400px] md:h-[500px] flex-shrink-0 relative overflow-hidden group/img cursor-pointer block"
              >
                <img
                  src={img}
                  alt={`Stellaar Life ${i}`}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover/img:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover/img:bg-black/10 transition-colors duration-500 flex items-center justify-center">
                  <div className="opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 flex flex-col items-center">
                    <Camera className="w-8 h-8 text-[#D4AF37] mb-2" />
                    <span className="text-white text-[10px] tracking-[0.3em] uppercase font-bold">View Gallery</span>
                  </div>
                </div>
                <div className="absolute inset-0 border border-[#D4AF37]/0 group-hover/img:border-[#D4AF37]/30 transition-colors duration-500 m-4"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* Amenities Highlight - Cinematic Section */}
      <section className="py-32 relative overflow-hidden flex items-center justify-center min-h-[80vh]">
        <div className="absolute inset-0">
          <img
            src="/images/amenities-bg.png"
            alt="Luxury Club Amenities"
            className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-[20s]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40 backdrop-blur-[2px]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <div className="w-16 h-1 bg-[#D4AF37] mb-8"></div>
            <h2 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">World-Class <br /><span className="text-[#D4AF37]">Amenities</span></h2>
            <p className="text-xl text-white/90 font-light mb-8 tracking-wide">A Curated Experience for Your Entire Family</p>
            <p className="text-white/60 mb-12 leading-relaxed text-lg font-light border-l border-white/20 pl-6">
              Designed for a premium lifestyle and elevated social experience, the club offers an elite networking environment for HNI members, family-friendly access covering spouse and children, exclusive events and curated gatherings, and a refined luxury ambience — all within a limited membership that ensures true exclusivity.
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

          {/* Membership Benefits Highlights */}
          <div className="mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
            {[
              {
                title: "Private Community",
                desc: "Strictly limited to 100 elite families to ensure an uncrowded and private atmosphere.",
                icon: <Shield className="w-6 h-6 text-[#D4AF37]" />
              },
              {
                title: "Family First",
                desc: "Privileges extend to your spouse, children, and parents under a single membership.",
                icon: <Star className="w-6 h-6 text-[#D4AF37]" />
              },
              {
                title: "Bespoke Hospitality",
                desc: "Experience personalized service with a dedicated concierge for every member.",
                icon: <Shield className="w-6 h-6 text-[#D4AF37]" />
              },
              {
                title: "Global Access",
                desc: "Reciprocal privileges at over 170+ premium private clubs across the globe.",
                icon: <Star className="w-6 h-6 text-[#D4AF37]" />
              }
            ].map((benefit, i) => (
              <div key={i} className="group">
                <div className="mb-6 p-3 w-max rounded-lg bg-[#D4AF37]/5 group-hover:bg-[#D4AF37]/10 transition-colors">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-serif text-white mb-4 group-hover:text-[#D4AF37] transition-colors">{benefit.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed font-light">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Stellar Circle CTA ─── */}
      <section className="relative py-32 overflow-hidden bg-black">
        {/* Cinematic background */}
        <div className="absolute inset-0">
          <img
            src="/images/amenities-bg.png"
            alt="Luxury Club Interior"
            className="w-full h-full object-cover opacity-40 scale-105"
          />
          {/* Vignette layers */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
        </div>

        {/* Warm gold ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#C9A14A]/10 rounded-full blur-[140px] pointer-events-none" />

        {/* Outer rounded card frame */}
        <div className="relative z-10 container mx-auto max-w-5xl px-6">
          <div className="relative rounded-[22px] border border-[#C9A14A]/25 shadow-[0_0_80px_rgba(201,161,74,0.12),inset_0_0_60px_rgba(0,0,0,0.4)] overflow-hidden">
            {/* Inner subtle glass */}
            <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />

            <div className="relative z-10 flex flex-col items-center text-center px-8 py-20">

              {/* Crown / Brand Icon */}
              <div className="mb-8 flex flex-col items-center gap-3">
                {/* SVG Crown */}
                <svg width="42" height="38" viewBox="0 0 42 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_10px_rgba(201,161,74,0.8)]">
                  <path d="M21 2L26 14L38 8L30 22H12L4 8L16 14L21 2Z" fill="url(#crownGrad)" stroke="#C9A14A" strokeWidth="1" />
                  <rect x="10" y="24" width="22" height="5" rx="2" fill="url(#crownGrad)" />
                  <defs>
                    <linearGradient id="crownGrad" x1="4" y1="2" x2="38" y2="30" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#F0D080" />
                      <stop offset="1" stopColor="#A8832C" />
                    </linearGradient>
                  </defs>
                </svg>
                {/* Thin gold rule */}
                <div className="flex items-center gap-3">
                  <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#C9A14A]/60" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C9A14A]" />
                  <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#C9A14A]/60" />
                </div>
              </div>

              {/* Eyebrow */}
              <p className="text-[#C9A14A] tracking-[0.4em] uppercase text-[11px] font-bold mb-6">
                Join Nagpur&apos;s Most Elite Circle
              </p>

              {/* Headline */}
              <h2 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-4">
                Become Part of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A14A] via-[#F0D080] to-[#A8832C]">
                  The Stellar Circle
                </span>
              </h2>

              {/* Gold divider */}
              <div className="flex items-center gap-3 my-8">
                <div className="w-24 h-px bg-gradient-to-r from-transparent to-[#C9A14A]/50" />
                <Star className="w-4 h-4 text-[#C9A14A] fill-[#C9A14A] drop-shadow-[0_0_6px_rgba(201,161,74,0.8)]" />
                <div className="w-24 h-px bg-gradient-to-l from-transparent to-[#C9A14A]/50" />
              </div>

              {/* Supporting text */}
              <p className="text-white/55 text-lg font-light mb-12 max-w-md leading-relaxed">
                Where luxury meets lifestyle.<br />Limited memberships available.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16">
                <Link
                  href="/apply"
                  className="group relative px-10 py-4 bg-gradient-to-r from-[#C9A14A] via-[#D4B55A] to-[#A8832C] text-black font-bold uppercase tracking-widest text-sm inline-flex items-center gap-3 rounded-lg overflow-hidden shadow-[0_0_28px_rgba(201,161,74,0.45)] hover:shadow-[0_0_50px_rgba(201,161,74,0.7)] hover:scale-[1.04] transition-all duration-400"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  href="/contact"
                  className="group px-10 py-4 border border-[#C9A14A]/70 text-[#C9A14A] font-bold uppercase tracking-widest text-sm inline-flex items-center gap-3 rounded-lg hover:bg-[#C9A14A]/10 hover:border-[#C9A14A] hover:shadow-[0_0_30px_rgba(201,161,74,0.25)] hover:scale-[1.04] transition-all duration-400"
                >
                  <span>Book a Visit</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Location Section */}
      <LocationSection />

      {/* ─── Premium Feature Cards ─── */}
      <section className="py-28 bg-black relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#C9A14A]/5 rounded-full blur-[140px]"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <p className="text-[#C9A14A] tracking-[0.35em] uppercase text-xs font-bold mb-4">Discover More</p>
            <h2 className="text-4xl md:text-5xl font-serif text-white">Explore Our World</h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {[
              { title: 'About Us', desc: 'A club. A community. A lifestyle built for the distinguished few.', image: '/images/reception.jpg', link: '/about', Icon: Users, btn: 'Discover More' },
              { title: 'Amenities', desc: 'World-class amenities designed for you and your family.', image: '/images/pool.jpg', link: '/amenities', Icon: Dumbbell, btn: 'Explore More' },
              { title: 'Gallery', desc: 'A glimpse into the extraordinary Stellaar experience.', image: '/images/gallery-1.jpg', link: '/gallery', Icon: Camera, btn: 'View Gallery' },
            ].map(({ title, desc, image, link, Icon, btn }, i) => (
              <Link
                href={link} key={i}
                className="group relative block rounded-[20px] overflow-hidden border border-white/10 hover:border-[#C9A14A]/50 transition-all duration-700 shadow-[0_8px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_8px_60px_rgba(201,161,74,0.18)]"
              >
                {/* Background */}
                <div className="absolute inset-0">
                  <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30 group-hover:from-black/90 transition-all duration-700"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-end min-h-[440px] p-9 text-center">
                  {/* Glowing circular icon */}
                  <div className="mb-6 w-[68px] h-[68px] rounded-full bg-black/50 backdrop-blur-md border border-[#C9A14A]/40 flex items-center justify-center shadow-[0_0_22px_rgba(201,161,74,0.35)] group-hover:shadow-[0_0_40px_rgba(201,161,74,0.6)] group-hover:border-[#C9A14A]/70 group-hover:scale-110 transition-all duration-500">
                    <Icon className="w-7 h-7 text-[#C9A14A] drop-shadow-[0_0_6px_rgba(201,161,74,0.7)]" />
                  </div>

                  <h3 className="text-3xl font-serif text-white mb-3 group-hover:text-[#C9A14A] transition-colors duration-500">{title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed mb-7 font-light">{desc}</p>

                  {/* Gold outlined button */}
                  <span className="inline-flex items-center gap-2 px-6 py-2.5 border border-[#C9A14A] text-[#C9A14A] text-[11px] uppercase tracking-widest rounded-full font-semibold group-hover:bg-[#C9A14A] group-hover:text-black transition-all duration-500 shadow-[0_0_12px_rgba(201,161,74,0.2)] group-hover:shadow-[0_0_24px_rgba(201,161,74,0.45)]">
                    {btn}
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Premium CTA Banner ─── */}
      <section className="relative py-28 bg-[#060606] overflow-hidden">
        {/* Ambient background */}
        <div className="absolute inset-0">
          <img src="/images/dining.png" alt="Stellaar Lifestyle" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/80"></div>
        </div>
        <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-[#C9A14A]/7 rounded-full blur-[110px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#C9A14A]/5 rounded-full blur-[110px] pointer-events-none"></div>

        <div className="container mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: Text */}
            <div>
              <p className="text-[#C9A14A] tracking-[0.35em] uppercase text-xs font-bold mb-6">The Stellaar Experience</p>
              <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight mb-6">
                Experience The <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A14A] to-[#F0D080]">Stellar Lifestyle</span>
              </h2>
              <p className="text-white/55 text-lg font-light mb-12">Luxury. Comfort. Community — all in one place.</p>

              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link
                  href="/contact"
                  className="group px-9 py-4 bg-gradient-to-r from-[#C9A14A] to-[#A8832C] text-black font-semibold uppercase tracking-widest text-xs inline-flex items-center gap-3 rounded-sm shadow-[0_0_22px_rgba(201,161,74,0.35)] hover:shadow-[0_0_40px_rgba(201,161,74,0.55)] hover:from-[#D4B55A] hover:to-[#C9A14A] transition-all duration-500"
                >
                  Book a Visit
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/membership"
                  className="px-9 py-4 border border-[#C9A14A]/60 text-[#C9A14A] font-semibold uppercase tracking-widest text-xs inline-flex items-center gap-3 rounded-sm hover:bg-[#C9A14A]/10 hover:border-[#C9A14A] transition-all duration-500"
                >
                  Become a Member
                </Link>
              </div>
            </div>

            {/* Right: Decorative ring */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative">
                <div className="w-72 h-72 rounded-full border border-[#C9A14A]/15 flex items-center justify-center">
                  <div className="w-52 h-52 rounded-full border border-[#C9A14A]/25 flex items-center justify-center">
                    <div className="w-36 h-36 rounded-full bg-gradient-to-br from-[#C9A14A]/20 to-black/80 backdrop-blur-md border border-[#C9A14A]/50 flex items-center justify-center shadow-[0_0_40px_rgba(201,161,74,0.3)]">
                      <Heart className="w-14 h-14 fill-[#C9A14A] text-[#C9A14A] drop-shadow-[0_0_14px_rgba(201,161,74,1)]" />
                    </div>
                  </div>
                </div>
                <div className="absolute -top-5 -right-10 glass-card rounded-xl px-5 py-3 text-center">
                  <div className="text-[#C9A14A] font-serif text-xl font-bold">100+</div>
                  <div className="text-white/45 text-[10px] uppercase tracking-wider">Elite Slots</div>
                </div>
                <div className="absolute -bottom-5 -left-10 glass-card rounded-xl px-5 py-3 text-center">
                  <div className="text-[#C9A14A] font-serif text-xl font-bold">5★</div>
                  <div className="text-white/45 text-[10px] uppercase tracking-wider">Experience</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
