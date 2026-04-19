import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield, Eye, Award, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      {/* Hero */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/exterior.jpg" 
            alt="The Stellaar Building Exterior" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
        </div>
        <div className="relative z-10 text-center px-4 fade-in mt-16">
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-4">Our Story</h1>
          <p className="text-[#D4AF37] tracking-[0.2em] uppercase text-sm">A Legacy of Excellence</p>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-24 px-6 bg-[#050505]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-10 leading-tight">
            "The Stellaar was conceived with a singular vision: to create an oasis of unparalleled luxury for Nagpur's elite."
          </h2>
          <p className="text-white/70 leading-relaxed text-lg mb-8 font-light">
            We are more than just a club; we are a curated community of visionaries, leaders, and families who appreciate the finer things in life. Our facilities are designed to cater to every aspect of a premium lifestyle—from world-class fitness centers and temperature-controlled pools to fine dining experiences that rival the best global restaurants.
          </p>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-12 mb-12"></div>
        </div>
      </section>

      {/* Rich Content Sections */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl space-y-32">
          
          {/* Section 1: The Building & Exclusivity */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <div className="w-full md:w-1/2 relative h-[500px] group">
              <img 
                src="/images/gallery-4.jpg" 
                alt="Luxury Environment" 
                className="w-full h-full object-cover rounded-sm border border-white/5 grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-6 -right-6 w-full h-full border border-[#D4AF37]/30 z-[-1] transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <p className="text-[#D4AF37] tracking-[0.2em] uppercase text-xs font-semibold">Exclusivity</p>
              <h2 className="text-3xl md:text-4xl font-serif text-white leading-tight">Limited Strictly to <br/> 100 Members</h2>
              <p className="text-white/70 leading-relaxed font-light">
                Exclusivity is not just a promise; it is the foundation of The Stellaar experience. By capping our membership, we ensure that every interaction is personalized, our spaces remain delightfully uncrowded, and your privacy is fiercely protected.
              </p>
              <ul className="space-y-3 pt-4 text-sm text-white/80">
                <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-[#D4AF37]" /> Invite-only access and rigorous selection</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-[#D4AF37]" /> Maximum privacy for high-net-worth individuals</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-[#D4AF37]" /> Zero crowding, ensuring instant availability of amenities</li>
              </ul>
            </div>
          </div>

          {/* Section 2: Family & Hospitality */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
            <div className="w-full md:w-1/2 relative h-[500px] group">
              <img 
                src="/images/family.jpg" 
                alt="Family Bonding" 
                className="w-full h-full object-cover rounded-sm border border-white/5 grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -top-6 -left-6 w-full h-full border border-[#D4AF37]/30 z-[-1] transition-transform duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2"></div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <p className="text-[#D4AF37] tracking-[0.2em] uppercase text-xs font-semibold">Community</p>
              <h2 className="text-3xl md:text-4xl font-serif text-white leading-tight">A Sanctuary for <br/> Your Family</h2>
              <p className="text-white/70 leading-relaxed font-light">
                The Stellaar is designed to be a second home for you and your loved ones. We cultivate an environment where families can bond, children can play in safe, enriching spaces, and couples can enjoy romantic evenings—all within our secure, luxurious walls.
              </p>
              <Link href="/membership" className="inline-block mt-4 text-[#D4AF37] hover:text-white transition-colors border-b border-[#D4AF37] pb-1 uppercase tracking-widest text-sm">
                Explore Membership Plans
              </Link>
            </div>
          </div>

          {/* Section 3: Hospitality */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <div className="w-full md:w-1/2 relative h-[500px] group">
              <img 
                src="/images/reception.jpg" 
                alt="5-Star Hospitality" 
                className="w-full h-full object-cover rounded-sm border border-white/5 grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-6 -left-6 w-full h-full border border-[#D4AF37]/30 z-[-1] transition-transform duration-500 group-hover:-translate-x-2 group-hover:translate-y-2"></div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <p className="text-[#D4AF37] tracking-[0.2em] uppercase text-xs font-semibold">Service</p>
              <h2 className="text-3xl md:text-4xl font-serif text-white leading-tight">5-Star Hotel Grade <br/> Hospitality</h2>
              <p className="text-white/70 leading-relaxed font-light">
                From the moment you step into our stunning reception, our dedicated concierge and staff are committed to anticipating your every need. Partnering with premium brands, we deliver an elite standard of service that is unmatched in Central India.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-6 bg-gradient-to-t from-[#050505] to-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-white mb-4">Our Core Pillars</h2>
            <p className="text-white/50 uppercase tracking-widest text-sm">What Defines The Stellaar</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="glass-card p-10 flex flex-col items-center text-center hover-zoom border border-[#D4AF37]/10">
              <Eye className="w-12 h-12 text-[#D4AF37] mb-6" />
              <h3 className="text-xl font-serif text-white mb-4">The Vision</h3>
              <p className="text-white/60 text-sm leading-relaxed">To be the ultimate sanctuary for luxury, wellness, and high-net-worth networking in Central India.</p>
            </div>
            <div className="glass-card p-10 flex flex-col items-center text-center hover-zoom border border-[#D4AF37]/10">
              <Shield className="w-12 h-12 text-[#D4AF37] mb-6" />
              <h3 className="text-xl font-serif text-white mb-4">Exclusivity</h3>
              <p className="text-white/60 text-sm leading-relaxed">A strictly capped membership ensures our patrons experience uncompromised privacy and personalized service.</p>
            </div>
            <div className="glass-card p-10 flex flex-col items-center text-center hover-zoom border border-[#D4AF37]/10">
              <Award className="w-12 h-12 text-[#D4AF37] mb-6" />
              <h3 className="text-xl font-serif text-white mb-4">Excellence</h3>
              <p className="text-white/60 text-sm leading-relaxed">Partnering with premium brands to deliver 5-star hospitality, fine dining, and elite wellness programs.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
