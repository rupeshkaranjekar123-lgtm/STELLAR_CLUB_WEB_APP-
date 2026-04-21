import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield, Eye, Award, CheckCircle, ArrowRight, Users, Star, Gem, Heart } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative w-full h-[90vh] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/exterior.jpg"
            alt="The Stellaar Building Exterior"
            className="w-full h-full object-cover opacity-60 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black"></div>
        </div>
        <div className="relative z-10 text-center px-4 fade-in mt-16 max-w-5xl mx-auto">
          <p className="text-[#D4AF37] tracking-[0.3em] uppercase text-xs font-bold mb-6">Est. 2024 — Nagpur, India</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight">
            Creating your<br/><span className="text-[#D4AF37]">perfect world</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Where exclusivity meets elegance — a sanctuary crafted for the few who demand only the finest.
          </p>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
          <span className="text-xs tracking-widest uppercase">Discover More</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/30 to-transparent animate-pulse"></div>
        </div>
      </section>

      {/* Intro Quote */}
      <section className="py-24 px-6 bg-[#050505]">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mb-10"></div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white/90 leading-relaxed font-serif">
            The Stellaar is Central India&apos;s premier luxury developer and operator of private residential communities and elite family clubs — with a portfolio of world-renowned hospitality and wellness offerings.
          </h2>
          <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mt-10"></div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="py-16 px-6 bg-black border-y border-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '100', label: 'Exclusive Members', suffix: '' },
              { value: '20+', label: 'Premium Amenities', suffix: '' },
              { value: '170+', label: 'Club Affiliations', suffix: '' },
              { value: '5★', label: 'Luxury Standard', suffix: '' },
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="text-4xl md:text-5xl font-serif text-[#D4AF37]">{stat.value}</div>
                <div className="text-white/50 text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story - Image + Text */}
      <section className="py-32 px-6 bg-[#050505]">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[550px] overflow-hidden">
              <img
                src="/images/reception.jpg"
                alt="The Stellaar Reception"
                className="w-full h-full object-cover"
              />
              {/* Gold accent frame */}
              <div className="absolute top-4 left-4 w-24 h-24 border-l-2 border-t-2 border-[#D4AF37]/60"></div>
              <div className="absolute bottom-4 right-4 w-24 h-24 border-r-2 border-b-2 border-[#D4AF37]/60"></div>
            </div>
            <div className="space-y-8">
              <p className="text-[#D4AF37] tracking-[0.3em] uppercase text-xs font-bold">Our Story</p>
              <h2 className="text-4xl md:text-5xl font-serif text-white leading-snug">The Vision Behind <span className="text-[#D4AF37]">The Stellaar</span></h2>
              <div className="space-y-5 text-white/60 font-light text-lg leading-relaxed">
                <p>
                  The Stellaar was conceived with a singular vision: to create an oasis of unparalleled luxury for Nagpur&apos;s elite. We have built a community that encourages both our development teams and members to dream up and create the most extraordinary experiences imaginable.
                </p>
                <p>
                  Our inaugural development sets the gold standard for a premium family club — complete with state-of-the-art wellness centers, luxurious five-star amenities, curated fine dining, and a team dedicated to delivering perfection with every interaction.
                </p>
                <p>
                  Every Stellaar property is a testament to our commitment to excellence — delivering an elite standard of service that is truly unmatched in Central India.
                </p>
              </div>
              <Link href="/amenities" className="inline-flex items-center gap-3 text-[#D4AF37] hover:text-white transition-all uppercase tracking-widest text-sm font-semibold group">
                <span>Explore Amenities</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Intention */}
      <section className="py-24 px-6 bg-black">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-[#D4AF37] tracking-[0.2em] uppercase text-xs font-semibold mb-6">Our Intention</p>
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-10 leading-tight">
            We create unique, members-only settings where families can create intergenerational memories amongst unparalleled luxury.
          </h2>
          <p className="text-white/60 leading-relaxed text-lg mb-8 font-light">
            Everything we do is driven by our desire to create one-of-a-kind spaces where families can truly be together. We are a curated community of visionaries, leaders, and families who appreciate the finer things in life.
          </p>
          <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mt-12"></div>
        </div>
      </section>

      {/* 3-image mosaic */}
      <section className="py-0 bg-black">
        <div className="grid grid-cols-1 md:grid-cols-3 h-[500px]">
          <div className="relative overflow-hidden group">
            <img src="/images/pool.jpg" alt="Luxury Pool" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-700 flex items-end p-8">
              <div>
                <div className="text-[#D4AF37] text-xs uppercase tracking-widest mb-2">Wellness</div>
                <h3 className="text-white font-serif text-2xl">Premium Pool</h3>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden group">
            <img src="/images/dining.jpg" alt="Fine Dining" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-700 flex items-end p-8">
              <div>
                <div className="text-[#D4AF37] text-xs uppercase tracking-widest mb-2">Culinary</div>
                <h3 className="text-white font-serif text-2xl">Fine Dining</h3>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden group">
            <img src="/images/gym.jpg" alt="Fitness Center" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-700 flex items-end p-8">
              <div>
                <div className="text-[#D4AF37] text-xs uppercase tracking-widest mb-2">Fitness</div>
                <h3 className="text-white font-serif text-2xl">Luxury Gym</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Stellaar Difference */}
      <section className="py-24 px-6 bg-[#050505] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent"></div>
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h4 className="flex items-center justify-center gap-4 text-[#D4AF37] tracking-[0.2em] uppercase text-xs font-bold mb-6">
              <span className="w-8 h-[1px] bg-[#D4AF37]"></span> Our Pillars <span className="w-8 h-[1px] bg-[#D4AF37]"></span>
            </h4>
            <h2 className="text-4xl md:text-6xl font-serif text-white">The Stellaar Difference</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {[
              { icon: <Heart className="w-6 h-6 text-[#D4AF37]" />, title: "Fun for the Whole Family", desc: "Environments where children can play in safe, enriching spaces, and couples can enjoy romantic evenings — all within our secure, premium walls." },
              { icon: <Gem className="w-6 h-6 text-[#D4AF37]" />, title: "Experiences Beyond Compare", desc: "From world-class fitness centers and temperature-controlled pools to fine dining experiences that rival the best global restaurants." },
              { icon: <Eye className="w-6 h-6 text-[#D4AF37]" />, title: "Inspired By Elegance", desc: "Our properties are wonderfully in-tune with luxury aesthetics — a harmonious blend of the architecturally impressive with the meticulously curated." },
              { icon: <Award className="w-6 h-6 text-[#D4AF37]" />, title: "Sustainable Future", desc: "Committed to sustainable luxury, ensuring that our development leaves a positive impact on both the community and the environment." },
              { icon: <Star className="w-6 h-6 text-[#D4AF37]" />, title: "Luxury Bespoke Amenities", desc: "Every expectation will be met with our meticulous eye for detail, matching outstanding levels of craftsmanship and master building." },
              { icon: <Shield className="w-6 h-6 text-[#D4AF37]" />, title: "Strict Exclusivity", desc: "By capping our membership to just 100 families, we ensure zero crowding, maximum privacy, and instantly available amenities — always." },
            ].map((item, i) => (
              <div key={i} className="flex flex-col border-t border-[#D4AF37]/20 pt-6 group hover:border-[#D4AF37]/60 transition-colors duration-300">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-serif text-white mb-4 group-hover:text-[#D4AF37] transition-colors">{item.title}</h3>
                <p className="text-white/50 font-light leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Family & Community - Image + Text */}
      <section className="py-32 px-6 bg-black">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 order-2 lg:order-1">
              <p className="text-[#D4AF37] tracking-[0.3em] uppercase text-xs font-bold">Community</p>
              <h2 className="text-4xl md:text-5xl font-serif text-white leading-snug">A Home Away <span className="text-[#D4AF37]">From Home</span></h2>
              <div className="space-y-5 text-white/60 font-light text-lg leading-relaxed">
                <p>
                  The Stellaar is more than a club — it&apos;s a living, breathing community of like-minded individuals and families. Our curated social calendar ensures there is always something to look forward to — from private wine evenings to family sporting events and cultural galas.
                </p>
                <p>
                  With spouse and children included in every membership, The Stellaar is engineered around the concept of family togetherness, ensuring that every member of your household finds their own sanctuary within our walls.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span className="text-white/70 text-sm">Spouse & children included</span>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span className="text-white/70 text-sm">HNI network access</span>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span className="text-white/70 text-sm">Curated events calendar</span>
                </div>
              </div>
            </div>
            <div className="relative h-[550px] overflow-hidden order-1 lg:order-2">
              <img
                src="/images/family.jpg"
                alt="Family at The Stellaar"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 w-24 h-24 border-r-2 border-t-2 border-[#D4AF37]/60"></div>
              <div className="absolute bottom-4 left-4 w-24 h-24 border-l-2 border-b-2 border-[#D4AF37]/60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliation Banner */}
      <section className="py-20 px-6 bg-[#050505] border-t border-b border-white/5">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16">
            <div className="text-center">
              <div className="text-4xl font-serif text-[#D4AF37] mb-2">170+</div>
              <div className="text-white/50 text-sm uppercase tracking-widest">Elite Club Affiliations</div>
            </div>
            <div className="hidden md:block w-[1px] h-16 bg-white/10"></div>
            <p className="text-white/70 text-lg font-light max-w-xl leading-relaxed">
              As a Stellaar member, you gain access to a global network of over 170 elite clubs across India and worldwide through our exclusive reciprocal affiliation program.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-32 px-6 bg-black text-center relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/membership.jpg" alt="Membership" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <p className="text-[#D4AF37] tracking-[0.3em] uppercase text-xs font-bold mb-6">Join the Circle</p>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">Ready to Experience <span className="text-[#D4AF37]">The Stellaar?</span></h2>
          <p className="text-white/60 mb-12 max-w-xl mx-auto font-light text-lg leading-relaxed">
            Limited to only 100 exclusive families. Apply today and become part of Nagpur&apos;s most prestigious private club.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply" className="inline-flex items-center gap-3 px-10 py-4 bg-[#D4AF37] text-black font-semibold hover:bg-white transition-colors uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(212,175,55,0.2)]">
              Apply for Membership <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/amenities" className="inline-flex items-center gap-3 px-10 py-4 border border-white/20 text-white hover:bg-white/5 transition-colors uppercase tracking-widest text-sm">
              Explore Amenities
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
