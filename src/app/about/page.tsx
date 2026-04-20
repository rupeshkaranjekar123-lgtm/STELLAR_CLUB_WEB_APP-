import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield, Eye, Award, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative w-full h-[80vh] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/exterior.jpg" 
            alt="The Stellaar Building Exterior" 
            className="w-full h-full object-cover opacity-60 scale-105"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center px-4 fade-in mt-16 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight">
            Creating your<br/>perfect world
          </h1>
        </div>
      </section>

      {/* Intro Description */}
      <section className="py-16 px-6 bg-[#050505]">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-xl md:text-2xl font-light text-white/90 leading-relaxed font-sans">
            The Stellaar is Central India's premier luxury developer and operator of private residential communities and elite family clubs with a portfolio of world-renowned hospitality and wellness offerings.
          </h2>
        </div>
      </section>

      {/* Our Intention */}
      <section className="py-24 px-6 bg-black">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-[#D4AF37] tracking-[0.2em] uppercase text-xs font-semibold mb-6">Our Intention</p>
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-10 leading-tight">
            We create unique, members-only settings where families can create intergenerational memories and enrich their lives amongst unparalleled luxury.
          </h2>
          <p className="text-white/60 leading-relaxed text-lg mb-8 font-light">
            Everything we do is driven by our desire to create one-of-a-kind spaces where families can be together. We are a curated community of visionaries, leaders, and families who appreciate the finer things in life.
          </p>
          <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mt-12"></div>
        </div>
      </section>

      {/* The Stellaar Difference */}
      <section className="py-24 px-6 bg-[#050505] relative overflow-hidden">
        {/* Gold accent top line */}
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
              { title: "Fun for the Whole Family", desc: "Environments where children can play in safe, enriching spaces, and couples can enjoy romantic evenings—all within our secure walls." },
              { title: "Experiences Beyond Compare", desc: "From world-class fitness centers and temperature-controlled pools to fine dining experiences that rival the best global restaurants." },
              { title: "Inspired By Elegance", desc: "Our properties are wonderfully in-tune with luxury aesthetics—a harmonious blend of the architecturally impressive with the meticulously curated." },
              { title: "Sustainable Future", desc: "Committed to sustainable luxury, ensuring that our development leaves a positive impact on both the community and the environment." },
              { title: "Luxury Bespoke Amenities", desc: "Every expectation will be met with our meticulous eye for detail matching outstanding levels of craftsmanship and master building." },
              { title: "Strict Exclusivity", desc: "By capping our membership to just 100 families, we ensure zero crowding, maximum privacy, and instantly available amenities." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col border-t border-[#D4AF37]/20 pt-6 group hover:border-[#D4AF37]/60 transition-colors duration-300">
                <h3 className="text-xl font-serif text-white mb-4 group-hover:text-[#D4AF37] transition-colors">{item.title}</h3>
                <p className="text-white/50 font-light leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Stellaar Story */}
      <section className="py-32 px-6 bg-[#050505] relative overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6 relative h-[600px]">
              <img 
                src="/images/gallery-2.jpg" 
                alt="The Stellaar Story" 
                className="w-full h-full object-cover grayscale-[20%]"
              />
            </div>
            <div className="lg:col-span-6 space-y-8">
              <h2 className="text-4xl md:text-5xl font-serif text-white">The Stellaar Story</h2>
              <div className="space-y-6 text-white/70 font-light text-lg leading-relaxed">
                <p>
                  The Stellaar was conceived with a singular vision: to create an oasis of unparalleled luxury for Nagpur's elite. We have built a community that encourages both our development teams and members to dream up and create the most fun experiences imaginable.
                </p>
                <p>
                  Our first development sets the standard for a premium family club, complete with state-of-the-art wellness centers, luxurious residential-style offerings, five-star service, and more. 
                </p>
                <p>
                  Every Stellaar property is a testament to our commitment to excellence, delivering an elite standard of service that is unmatched in Central India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA / Builders */}
      <section className="py-24 px-6 bg-black border-t border-white/10 text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Explore Our Worlds</h2>
          <p className="text-white/60 mb-10 max-w-2xl mx-auto font-light">
            Discover our portfolio of premium amenities and exclusive spaces designed for the elite.
          </p>
          <Link href="/amenities" className="inline-flex items-center gap-3 text-[#D4AF37] hover:text-white transition-all uppercase tracking-widest text-sm font-semibold border border-[#D4AF37] px-8 py-4 hover:bg-[#D4AF37] hover:text-black">
            <span>Explore Amenities</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
