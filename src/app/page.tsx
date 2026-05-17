import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LocationSection from '@/components/LocationSection';
import { Star, Shield, Users, ArrowRight, ChevronDown, Check, Award, Camera, Dumbbell, Heart, MapPin, Quote, Music, Coffee, Droplets, Building2, ChefHat, Wine, Leaf, Headphones, ConciergeBell } from 'lucide-react';
import PremiumAmenities from '@/components/PremiumAmenities';
export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-32">
        {/* Cinematic background with vignette */}
        <div className="absolute inset-0 z-0 bg-black">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-90 scale-105"
          >
            <source src="https://discoverylandco.com/images/homepage/hero-home.mp4" type="video/mp4" />
          </video>
          {/* Overlays for depth and cinematic lighting */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/10 to-black/70"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,161,74,0.08)_0%,transparent_70%)]"></div>
        </div>

        {/* Ambient Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#C9A14A]/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#C9A14A]/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 container mx-auto px-5 md:px-12 max-w-7xl flex flex-col items-center text-center">

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
          <h1 className="relative mb-8 leading-[1.2] flex flex-col items-center fade-in delay-100 text-center">
            <span className="font-cormorant italic text-white/90 text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-light tracking-[0.1em] drop-shadow-2xl">
              Nagpur&apos;s Most Exclusive
            </span>
            <span className="font-cinzel-decorative text-shimmer text-3xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-bold my-3 drop-shadow-[0_0_40px_rgba(201,161,74,0.5)] leading-tight">
              Family Club
            </span>
            <span className="font-cinzel text-white/80 text-base sm:text-xl md:text-2xl lg:text-3xl font-normal tracking-[0.5em] drop-shadow-2xl uppercase mt-1">
              Experience
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="font-cormorant italic text-white/80 text-base sm:text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light tracking-[0.12em] leading-relaxed px-4 fade-in delay-200">
            Where luxury, lifestyle, networking, and unforgettable family moments come together.
          </p>

          {/* Buttons Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto px-4 fade-in delay-300">
            <Link
              href="/membership"
              className="group relative px-8 py-4 bg-gradient-to-r from-[#C9A14A] via-[#D4B06A] to-[#B8924F] text-[#0A0A0A] transition-all duration-500 uppercase tracking-[0.2em] text-[10px] sm:text-xs font-bold w-full sm:w-auto text-center rounded-sm shadow-[0_0_30px_rgba(201,161,74,0.25)] hover:shadow-[0_0_50px_rgba(201,161,74,0.4)] hover:scale-105 flex items-center justify-center gap-2 pulse-glow"
            >
              Apply for Membership <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://wa.me/917888005995"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 border border-[#25D366]/40 text-[#25D366] hover:border-[#25D366] hover:bg-[#25D366]/5 transition-all duration-500 uppercase tracking-[0.2em] text-[10px] sm:text-xs font-bold w-full sm:w-auto text-center backdrop-blur-sm rounded-sm hover:scale-105 flex items-center justify-center gap-2"
            >
              WhatsApp Now
            </a>
          </div>


        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/25 select-none">
          <span className="text-[9px] tracking-[0.55em] uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
        </div>
      </section>

      {/* Marquee Banner */}
      <div className="w-full bg-[#C9A14A] text-black py-3 overflow-hidden flex whitespace-nowrap">
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

      {/* ── Trust Bar ── */}
      <section className="py-14 bg-[#161616] border-y border-[#C9A14A]/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06)_0%,transparent_70%)] pointer-events-none" />
        <div className="container mx-auto max-w-6xl px-5 md:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
            {[
              { label: 'Trusted by 100+ Families', icon: Users },
              { label: 'Prime Ajni Location', icon: MapPin },
              { label: 'Premium Amenities', icon: Star },
            ].map((stat, i) => (
              <div key={i} className="group relative flex flex-col items-center text-center py-8 px-4 cursor-default">
                {i < 2 && <div className="hidden md:block absolute right-0 top-1/4 h-1/2 w-px bg-[#C9A14A]/15" />}
                <stat.icon className="w-8 h-8 text-[#C9A14A] mb-4 opacity-80 group-hover:scale-110 transition-transform duration-500" />
                <div className="text-white/80 text-sm md:text-base uppercase tracking-[0.2em] leading-snug">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial About Preview */}
      <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8 lg:px-12 relative bg-gradient-to-b from-black to-[#0A0A0A]">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-8 relative z-10">
              <h4 className="flex items-center gap-4 text-[#C9A14A] tracking-[0.2em] uppercase text-xs font-bold">
                <span className="w-8 h-[1px] bg-[#C9A14A]"></span> The Vision
              </h4>
              <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight">
                A Legacy of <br /><span className="text-shimmer">Luxury</span>
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
                  <div key={i} className="flex items-center gap-4 text-white/80 bg-white/5 p-4 rounded-sm border border-white/5 hover:border-[#C9A14A]/30 transition-colors">
                    <item.icon className="w-5 h-5 text-[#C9A14A]" />
                    <span className="font-light">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="pt-8">
                <Link href="/about" className="group inline-flex items-center gap-3 text-[#C9A14A] transition-all uppercase tracking-widest text-sm font-semibold">
                  <span className="border-b border-transparent group-hover:border-[#C9A14A] pb-1 transition-all">Discover Our Story</span>
                  <div className="w-8 h-8 rounded-full border border-[#C9A14A]/50 flex items-center justify-center group-hover:bg-[#C9A14A] group-hover:text-black transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 relative h-[360px] sm:h-[500px] md:h-[600px] lg:h-[700px] w-full mt-10 lg:mt-0">
              <div className="absolute inset-0 bg-[#C9A14A]/5 translate-x-3 translate-y-3 border border-[#C9A14A]/20 z-0"></div>
              <img
                src="/images/exterior.jpg"
                alt="Luxury Lifestyle"
                className="relative z-10 w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-1000 shadow-2xl"
              />
              {/* Floating Stat Card — Bottom Left (desktop only to avoid mobile overflow) */}
              <div className="hidden sm:block absolute bottom-6 -left-4 md:-left-10 bg-black/80 backdrop-blur-md border border-[#C9A14A]/30 p-5 md:p-8 shadow-2xl z-20 max-w-[200px] md:max-w-[250px] fade-in">
                <Award className="w-6 h-6 md:w-8 md:h-8 text-[#C9A14A] mb-3 md:mb-4" />
                <h4 className="text-2xl md:text-3xl font-serif text-white mb-1 md:mb-2">100+</h4>
                <p className="text-white/60 text-[10px] md:text-xs uppercase tracking-widest leading-relaxed">Join the inner circle of distinguished families.</p>
              </div>
              {/* Floating Est. Card — Top Right */}
              <div className="absolute top-3 right-3 md:top-8 md:-right-8 bg-black/90 backdrop-blur-md border border-[#C9A14A]/20 p-4 md:p-5 shadow-2xl z-20 fade-in float-slow">
                <p className="text-[#C9A14A] text-[9px] uppercase tracking-[0.4em] mb-1">Established</p>
                <div className="text-2xl md:text-3xl font-serif text-white leading-none"></div>
                <p className="text-white/30 text-[9px] uppercase tracking-widest mt-1">Nagpur, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Auto Scrolling Image Gallery Section */}
      <section className="py-16 md:py-20 bg-[#0A0A0A] overflow-hidden">
        <div className="text-center mb-16">
          <Shield className="w-8 h-8 text-[#C9A14A] mx-auto mb-4 opacity-80" />
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-3">Life at Stellaar</h2>
          <p className="text-[#C9A14A] tracking-[0.2em] uppercase text-xs font-bold">A Glimpse of the Extraordinary</p>
        </div>

        {/* Scrolling wrapper */}
        <div className="w-full overflow-hidden flex">
          <div className="animate-marquee flex gap-6 pr-6 w-max [animation-duration:80s] hover:[animation-play-state:paused]">
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
                <div className="absolute inset-0 bg-transparent group-hover/img:bg-black/50 transition-colors duration-500 flex items-center justify-center">
                  <div className="opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 flex flex-col items-center">
                    <Camera className="w-8 h-8 text-[#C9A14A] mb-2" />
                    <span className="text-white text-[10px] tracking-[0.3em] uppercase font-bold">View Gallery</span>
                  </div>
                </div>
                <div className="absolute inset-0 border border-[#C9A14A]/0 group-hover/img:border-[#C9A14A]/30 transition-colors duration-500 m-4"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Highlight - Cinematic Section */}
      <section className="py-16 md:py-24 relative overflow-hidden flex items-center justify-center min-h-[70vh] md:min-h-[80vh]">
        <div className="absolute inset-0">
          <img
            src="/images/amenities-bg.png"
            alt="Luxury Club Amenities"
            className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-[20s]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40 backdrop-blur-[2px]"></div>
        </div>
        <div className="container mx-auto px-5 md:px-12 relative z-10">
          <div className="max-w-2xl">
            <div className="w-16 h-1 bg-[#C9A14A] mb-8"></div>
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">World Class <br /><span className="text-shimmer">Amenities</span></h2>
            <p className="text-xl text-white/90 font-light mb-8 tracking-wide">A Curated Experience for Your Entire Family</p>
            <p className="text-white/60 mb-12 leading-relaxed text-lg font-light border-l border-white/20 pl-6">
              Designed for a premium lifestyle and elevated social experience, the club offers an elite networking environment for HNI members, family-friendly access covering spouse and children, exclusive events and curated gatherings, and a refined luxury ambience all within a limited membership that ensures true exclusivity.
            </p>
            <Link
              href="/amenities"
              className="px-10 py-4 border border-[#C9A14A] text-white hover:bg-[#C9A14A] hover:text-black transition-all duration-300 uppercase tracking-widest text-sm font-semibold inline-flex items-center gap-3 group"
            >
              Explore All Amenities
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
      {/* Premium Membership Cards */}
      <section className="py-16 md:py-24 lg:py-28 px-4 md:px-8 lg:px-12 bg-[#0A0A0A] relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9A14A]/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-20 flex flex-col items-center">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-10 h-px bg-[#C9A14A]/40" />
              <h4 className="text-[#C9A14A] tracking-[0.2em] uppercase text-xs font-bold">Membership Tiers</h4>
              <div className="w-10 h-px bg-[#C9A14A]/40" />
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-white">Choose Your Access</h2>
            <p className="text-white/35 text-xs uppercase tracking-[0.3em] mt-4">Limited to 100 distinguished families</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
            {[
              { name: 'Individual', features: ['Solo Access', '15% Dining Discount', 'Standard Event Access'], color: 'border-white/10 hover:border-white/30', gradient: 'from-white/5' },
              { name: 'Couple', features: ['Spouse Access', '20% Dining Discount', 'Standard Event Access'], color: 'border-white/10 hover:border-white/30', gradient: 'from-white/5' },
              { name: 'Family', features: ['Full Family Access', '30% Dining Discount', 'VIP Event Access', 'Valet Parking'], color: 'border-[#C9A14A] shadow-[0_0_30px_rgba(212,175,55,0.15)] transform scale-105 z-10', gradient: 'from-[#C9A14A]/10', isPopular: true },
            ].map((plan, i) => (
              <div key={i} className={`relative bg-gradient-to-b ${plan.gradient} to-transparent backdrop-blur-xl p-10 flex flex-col items-center text-center transition-all duration-500 border hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(212,175,55,0.1)] ${plan.color} ${plan.isPopular ? 'py-14 bg-black/60' : 'bg-black/40'}`}>
                {plan.isPopular && (
                  <div className="absolute top-0 inset-x-0 mx-auto w-max px-4 py-1 bg-[#C9A14A] text-black text-[10px] font-bold uppercase tracking-widest rounded-b-md">
                    Most Popular
                  </div>
                )}
                <h3 className={`text-3xl font-serif text-white mt-4 mb-2 ${plan.isPopular ? 'text-[#C9A14A]' : ''}`}>{plan.name}</h3>

                <ul className="space-y-4 mt-6 mb-12 w-full text-left text-white/70 text-sm">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-4 border-b border-white/5 pb-4">
                      <div className={`p-1 rounded-full ${plan.isPopular ? 'bg-[#C9A14A]/20 text-[#C9A14A]' : 'bg-white/5 text-white/50'}`}>
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/membership"
                  className={`w-full py-4 transition-all uppercase tracking-widest text-xs font-semibold mt-auto flex justify-center items-center gap-2 group ${plan.isPopular ? 'bg-[#C9A14A] text-black hover:bg-white' : 'border border-white/20 text-white hover:border-white'}`}
                >
                  Request Consultation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
                icon: <Shield className="w-6 h-6 text-[#C9A14A]" />
              },
              {
                title: "Family First",
                desc: "Privileges extend to your spouse, children, and parents under a single membership.",
                icon: <Star className="w-6 h-6 text-[#C9A14A]" />
              },
              {
                title: "Bespoke Hospitality",
                desc: "Experience personalized service with a dedicated concierge for every member.",
                icon: <Shield className="w-6 h-6 text-[#C9A14A]" />
              },
              {
                title: "Global Access",
                desc: "Reciprocal privileges at over 170+ premium private clubs across the globe.",
                icon: <Star className="w-6 h-6 text-[#C9A14A]" />
              }
            ].map((benefit, i) => (
              <div key={i} className="group hover:-translate-y-1 transition-transform duration-500">
                <div className="mb-6 p-3 w-max rounded-lg bg-[#C9A14A]/5 group-hover:bg-[#C9A14A]/10 transition-colors">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-serif text-white mb-4 group-hover:text-[#C9A14A] transition-colors">{benefit.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed font-light">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Stellaar Circle CTA ─── */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-black">
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
        <div className="relative z-10 container mx-auto max-w-5xl px-5 md:px-12">
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
                      <stop stopColor="#D4B06A" />
                      <stop offset="1" stopColor="#B8924F" />
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
              <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight mb-4">
                Become Part of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A14A] via-[#D4B06A] to-[#B8924F]">
                  The Stellaar Circle
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
                  className="group relative px-10 py-4 bg-gradient-to-r from-[#C9A14A] via-[#D4B06A] to-[#B8924F] text-black font-bold uppercase tracking-widest text-sm inline-flex items-center gap-3 rounded-lg overflow-hidden shadow-[0_0_28px_rgba(201,161,74,0.45)] hover:shadow-[0_0_50px_rgba(201,161,74,0.7)] hover:scale-[1.04] transition-all duration-400 pulse-glow"
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

      {/* ─── Premium Amenities Preview ─── */}
      <PremiumAmenities />

      {/* ─── Banquet & Restaurant Promotions ─── */}
      <section className="py-24 relative bg-[#050505] overflow-hidden border-y border-[#C9A14A]/10">
        {/* Background Ambient Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#C9A14A]/5 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="container mx-auto px-5 md:px-12 max-w-[1400px] relative z-10">

          {/* Header */}
          <div className="text-center mb-16 flex flex-col items-center">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#C9A14A]/50"></div>
              <p className="text-[#C9A14A] uppercase tracking-[0.3em] text-[10px] font-semibold">EXCLUSIVE EXPERIENCES</p>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#C9A14A]/50"></div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-serif text-white mb-6 leading-tight">
              Extraordinary Moments. <span className="text-[#C9A14A]">Perfectly Crafted.</span>
            </h2>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto font-cormorant italic tracking-wide">
              From grand celebrations to intimate dinners, we create unforgettable experiences.
            </p>
          </div>

          {/* Split Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

            {/* Left Card: Banquet */}
            <div className="group relative h-[650px] md:h-[700px] rounded-3xl overflow-hidden border border-[#C9A14A]/30 bg-black/70 transition-all duration-700 hover:border-[#C9A14A] hover:shadow-[0_0_40px_rgba(201,161,74,0.15)] hover:scale-[1.02]">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img src="/images/gallery-5.jpg" alt="Grand Events" className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-black/90"></div>
                <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] transition-all duration-700 group-hover:backdrop-blur-0"></div>
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-6 md:p-10 z-10">
                {/* Top Content */}
                <div className="flex flex-col items-center text-center mt-6 md:mt-10">
                  <div className="w-16 h-16 rounded-full border border-[#C9A14A]/50 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(201,161,74,0.2)] group-hover:shadow-[0_0_30px_rgba(201,161,74,0.4)] transition-all duration-500">
                    <Award className="w-8 h-8 text-[#C9A14A]" />
                  </div>
                  <h3 className="font-cormorant italic normal-case text-[#C9A14A] text-2xl md:text-3xl mb-4 tracking-wide">Unforgettable Celebrations</h3>
                  <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl text-white tracking-widest leading-snug mb-6">HOST GRAND<br />EVENTS</h2>
                  <p className="text-white/70 font-light max-w-sm mx-auto leading-relaxed text-sm md:text-base">
                    Celebrate life's special moments in our premium banquet halls, designed for memorable experiences.
                  </p>

                  <Link href="/banquet" className="mt-8 px-8 py-3.5 border border-[#C9A14A] text-[#C9A14A] bg-black/40 uppercase tracking-[0.2em] text-[10px] font-semibold hover:bg-[#C9A14A] hover:text-black transition-all duration-500 flex items-center gap-2 group/btn rounded-sm">
                    GET EVENT QUOTE <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Bottom Strip */}
                <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 bg-black/60 border border-white/10 rounded-2xl p-4 md:p-5 mt-auto w-full backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <Building2 className="w-4 h-4 text-[#C9A14A]" />
                    <span className="text-[10px] text-white/80 uppercase tracking-widest">Spacious Venues</span>
                  </div>
                  <div className="hidden sm:block w-px h-6 bg-white/10"></div>
                  <div className="flex items-center gap-3">
                    <Camera className="w-4 h-4 text-[#C9A14A]" />
                    <span className="text-[10px] text-white/80 uppercase tracking-widest">Custom Décor</span>
                  </div>
                  <div className="hidden sm:block w-px h-6 bg-white/10"></div>
                  <div className="flex items-center gap-3">
                    <Headphones className="w-4 h-4 text-[#C9A14A]" />
                    <span className="text-[10px] text-white/80 uppercase tracking-widest">Full Event Support</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card: Restaurant */}
            <div className="group relative h-[650px] md:h-[700px] rounded-3xl overflow-hidden border border-[#C9A14A]/30 bg-black/70 transition-all duration-700 hover:border-[#C9A14A] hover:shadow-[0_0_40px_rgba(201,161,74,0.15)] hover:scale-[1.02]">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img src="/images/dining.jpg" alt="Fine Dining" className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-black/90"></div>
                <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] transition-all duration-700 group-hover:backdrop-blur-0"></div>
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-6 md:p-10 z-10">
                {/* Top Content */}
                <div className="flex flex-col items-center text-center mt-6 md:mt-10">
                  <div className="w-16 h-16 rounded-full border border-[#C9A14A]/50 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(201,161,74,0.2)] group-hover:shadow-[0_0_30px_rgba(201,161,74,0.4)] transition-all duration-500">
                    <ConciergeBell className="w-8 h-8 text-[#C9A14A]" />
                  </div>
                  <h3 className="font-cormorant italic normal-case text-[#C9A14A] text-2xl md:text-3xl mb-4 tracking-wide">Culinary Excellence</h3>
                  <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl text-white tracking-widest leading-snug mb-6">FINE DINING</h2>
                  <p className="text-white/70 font-light max-w-sm mx-auto leading-relaxed text-sm md:text-base">
                    Indulge in exquisite culinary experiences curated by world-class chefs in the perfect ambiance.
                  </p>

                  <Link href="/restaurant" className="mt-8 px-8 py-3.5 border border-[#C9A14A] text-[#C9A14A] bg-black/40 uppercase tracking-[0.2em] text-[10px] font-semibold hover:bg-[#C9A14A] hover:text-black transition-all duration-500 flex items-center gap-2 group/btn rounded-sm">
                    RESERVE TABLE <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Bottom Strip */}
                <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 bg-black/60 border border-white/10 rounded-2xl p-4 md:p-5 mt-auto w-full backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <ChefHat className="w-4 h-4 text-[#C9A14A]" />
                    <span className="text-[10px] text-white/80 uppercase tracking-widest">World-Class Chefs</span>
                  </div>
                  <div className="hidden sm:block w-px h-6 bg-white/10"></div>
                  <div className="flex items-center gap-3">
                    <Wine className="w-4 h-4 text-[#C9A14A]" />
                    <span className="text-[10px] text-white/80 uppercase tracking-widest">Premium Beverages</span>
                  </div>
                  <div className="hidden sm:block w-px h-6 bg-white/10"></div>
                  <div className="flex items-center gap-3">
                    <Leaf className="w-4 h-4 text-[#C9A14A]" />
                    <span className="text-[10px] text-white/80 uppercase tracking-widest">Finest Ingredients</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section className="py-16 md:py-24 bg-[#0A0A0A] relative overflow-hidden">
        <div className="container mx-auto max-w-6xl px-5 md:px-12 relative z-10">
          <div className="text-center mb-16">
            <Quote className="w-10 h-10 text-[#C9A14A]/30 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-3">Member Experiences</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "The perfect place for our family weekends. The amenities are world-class and the staff is incredibly hospitable.", name: "Rajesh K.", type: "Family Member" },
              { text: "We hosted our corporate event at the banquet hall. Everything from catering to decor was managed flawlessly.", name: "Priya S.", type: "Corporate Member" },
              { text: "A true sanctuary in Nagpur. The gym and pool facilities rival any 5-star resort I have visited globally.", name: "Amit D.", type: "Individual Member" },
            ].map((t, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-[#C9A14A]/40 hover:-translate-y-2 transition-all duration-500 glass-card">
                <div className="flex text-[#C9A14A] mb-6 gap-1">
                  {[...Array(5)].map((_, idx) => <Star key={idx} className="w-4 h-4 fill-[#C9A14A]" />)}
                </div>
                <p className="text-white/70 italic mb-8 font-light leading-relaxed">&quot;{t.text}&quot;</p>
                <div>
                  <h4 className="text-white font-serif">{t.name}</h4>
                  <p className="text-[#C9A14A] text-xs uppercase tracking-widest mt-1">{t.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Premium CTA Banner ─── */}
      <section className="relative py-16 md:py-24 bg-[#111111] overflow-hidden">
        {/* Ambient background */}
        <div className="absolute inset-0">
          <img src="/images/dining.png" alt="Stellaar Lifestyle" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/80"></div>
        </div>
        <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-[#C9A14A]/7 rounded-full blur-[110px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#C9A14A]/5 rounded-full blur-[110px] pointer-events-none"></div>

        <div className="container mx-auto max-w-7xl px-5 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: Text */}
            <div>
              <p className="text-[#C9A14A] tracking-[0.35em] uppercase text-xs font-bold mb-6">The Stellaar Experience</p>
              <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight mb-6">
                Experience <br />
                <span className="text-shimmer">Luxury Living Today</span>
              </h2>
              <p className="text-white/55 text-lg font-light mb-12">Take the first step towards a premium lifestyle for your entire family.</p>


              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link
                  href="/membership"
                  className="group px-9 py-4 bg-gradient-to-r from-[#C9A14A] to-[#B8924F] text-black font-semibold uppercase tracking-widest text-xs inline-flex items-center gap-3 rounded-sm shadow-[0_0_22px_rgba(201,161,74,0.35)] hover:shadow-[0_0_40px_rgba(201,161,74,0.55)] hover:from-[#D4B06A] hover:to-[#C9A14A] transition-all duration-500 pulse-glow"
                >
                  Join Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="px-9 py-4 border border-[#C9A14A]/60 text-[#C9A14A] font-semibold uppercase tracking-widest text-xs inline-flex items-center gap-3 rounded-sm hover:bg-[#C9A14A]/10 hover:border-[#C9A14A] transition-all duration-500"
                >
                  Book Visit
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

          {/* Affiliation Banner — Full Width */}
          <div className="mt-16 w-full flex justify-center px-4 sm:px-6 md:px-10 lg:px-16 fade-in delay-500">
            <Link
              href="https://www.reformsclub.com/"
              target="_blank"
              className="
                            group relative overflow-hidden
                            w-full max-w-4xl
                            rounded-[28px]
                            border border-[#C9A14A]/20
                            bg-gradient-to-br from-black/80 via-black/70 to-[#1a1205]/80
                            backdrop-blur-2xl 
                            transition-all duration-700
                            hover:border-[#C9A14A]/60
                            hover:shadow-[0_0_60px_rgba(201,161,74,0.25)]
                            hover:-translate-y-1
                          "
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_top,rgba(201,161,74,0.15),transparent_60%)]" />

              {/* Gold Border Shine */}
              <div className="absolute inset-0 rounded-[28px] border border-transparent group-hover:border-[#C9A14A]/40 transition-all duration-700" />

              <div className="relative z-10 flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-8 px-6 sm:px-8 md:px-10 py-7 md:py-8">

                {/* Left Section */}
                <div className="flex items-center gap-5 w-full md:w-auto">

                  {/* Logo */}
                  <div
                    className="
                            relative shrink-0
                            w-16 h-16 sm:w-20 sm:h-20
                            rounded-full
                            bg-white
                            p-2
                            border border-[#C9A14A]/40
                            shadow-[0_0_30px_rgba(255,255,255,0.08)]
                            group-hover:scale-105
                            transition-transform duration-500
                          "
                  >
                    <div className="absolute inset-0 rounded-full bg-[#C9A14A]/10 blur-xl opacity-60" />

                    <img
                      src="/images/reforms-club-logo.png"
                      alt="Reforms Club Logo"
                      className="relative z-10 w-full h-full object-contain"
                    />
                  </div>

                  {/* Text */}
                  <div className="min-w-0">
                    <p
                      className="
                                text-[#C9A14A]
                                uppercase
                                tracking-[0.35em]
                                text-[10px] sm:text-xs
                                font-semibold
                                mb-2
                              "
                    >
                      Affiliated With
                    </p>

                    <h3
                      className="
                                  text-white
                                  font-cinzel
                                  text-lg sm:text-xl md:text-2xl
                                  tracking-[0.12em]
                                  leading-tight
                                  group-hover:text-[#C9A14A]
                                  transition-colors duration-500
                                "
                    >
                      Reforms Club Amravati
                    </h3>

                    <p className="text-white/50 text-xs sm:text-sm mt-2 max-w-md leading-relaxed">
                      Partnered with one of Maharashtra’s prestigious lifestyle and social clubs.
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="hidden md:block w-px self-stretch bg-gradient-to-b from-transparent via-[#C9A14A]/40 to-transparent" />

                {/* Right CTA */}
                <div className="w-full md:w-auto flex justify-end">
                  <div
                    className="
                                  flex items-center gap-4
                                  px-5 sm:px-6 py-3
                                  rounded-full
                                  border border-[#C9A14A]/30
                                  bg-[#C9A14A]/5
                                  group-hover:bg-[#C9A14A]
                                  transition-all duration-500
                                "
                  >
                    <span
                      className="
                              text-[#C9A14A]
                              text-sm sm:text-base
                              font-medium
                              tracking-wide
                              group-hover:text-black
                              transition-colors duration-500
                            "
                    >
                      Explore Club
                    </span>

                    <div
                      className="
              w-9 h-9 rounded-full
              flex items-center justify-center
              bg-[#C9A14A]
              text-black
              group-hover:bg-black
              group-hover:text-[#C9A14A]
              transition-all duration-500
            "
                    >
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>


        </div>
      </section>

      <Footer />
    </main>
  );
}
