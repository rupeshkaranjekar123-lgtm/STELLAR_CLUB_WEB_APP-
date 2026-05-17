import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight, Droplets, Dumbbell, Utensils, Award, Users } from 'lucide-react';

const amenities = [
  {
    title: 'Swimming Pool',
    subtitle: 'Aquatic Luxury',
    description:
      'Temperature-controlled Olympic-sized swimming pool with private cabanas, poolside butler service, and an exclusive members-only aquatic lounge designed for ultimate relaxation.',
    image: '/images/pool.jpg',
    link: '/gallery',
    cta: 'View Gallery',
    icon: Droplets,
    features: ['Temperature controlled', 'Private cabanas', 'Poolside service', 'Members only'],
  },
  {
    title: 'Luxury Gym',
    subtitle: 'Peak Performance',
    description:
      'State-of-the-art fitness centre with Technogym premium equipment, dedicated personal trainers, specialised training zones, and an architectural aesthetic designed to inspire peak performance.',
    image: '/images/gallery-3.jpg',
    link: '/contact',
    cta: 'Book a Session',
    icon: Dumbbell,
    features: ['Technogym equipment', 'Personal training', 'Dedicated zones', 'Modern aesthetics'],
  },
  {
    title: 'Fine Dining Restaurant',
    subtitle: 'Culinary Excellence',
    description:
      'A gastronomic journey curated by master chefs. Enjoy exclusive member discounts and priority reservations at our premium restaurant featuring global cuisine and impeccable service.',
    image: '/images/dining.jpg',
    link: '/restaurant',
    cta: 'Reserve a Table',
    icon: Utensils,
    features: ['Master chefs', 'Global cuisine', 'Member discounts', 'Priority seating'],
  },
  {
    title: 'Grand Banquet Hall',
    subtitle: 'Grand Events',
    description:
      'Host your most prestigious events — corporate galas, family milestones, and wedding celebrations — in our magnificently decorated premium banquet spaces with full catering.',
    image: '/images/gallery-5.jpg',
    link: '/banquet',
    cta: 'Get Event Quote',
    icon: Award,
    features: ['Premium décor', 'Corporate events', 'Wedding ceremonies', 'Full catering'],
  },
  {
    title: 'Kids & Family Recreation',
    subtitle: 'Family Bonding',
    description:
      'Dedicated, safe, and enriching activity zones designed to ensure every family member, young or old, finds their perfect sanctuary and creates lasting memories within our walls.',
    image: '/images/gallery-4.jpg',
    link: '/contact',
    cta: 'Inquire Now',
    icon: Users,
    features: ['Safe play zones', 'Kids activities', 'Family programs', 'All ages welcome'],
  },
];

export default function Amenities() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative w-full min-h-[60vh] md:min-h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/sports.jpg"
            alt="The Stellaar Amenities"
            className="w-full h-full object-cover opacity-50 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,161,74,0.08)_0%,transparent_70%)]" />
        </div>

        <div className="relative z-10 text-center px-5 pt-28 pb-16 max-w-4xl mx-auto">
          {/* Crown icon */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-10 md:w-14 h-px bg-gradient-to-r from-transparent to-[#C9A14A]/60" />
            <svg width="32" height="28" viewBox="0 0 42 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_10px_rgba(201,161,74,0.8)]">
              <path d="M21 2L26 14L38 8L30 22H12L4 8L16 14L21 2Z" fill="#C9A14A" stroke="#C9A14A" strokeWidth="1" />
              <rect x="10" y="24" width="22" height="5" rx="2" fill="#C9A14A" />
            </svg>
            <div className="w-10 md:w-14 h-px bg-gradient-to-l from-transparent to-[#C9A14A]/60" />
          </div>

          <p className="text-[#C9A14A] tracking-[0.4em] uppercase text-[10px] sm:text-xs font-bold mb-4 fade-in">
            World-Class Amenities
          </p>
          <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-wider mb-5 leading-tight fade-in">
            EXPERIENCE THE{' '}
            <span className="text-shimmer block sm:inline">EXTRAORDINARY</span>
          </h1>
          <p className="text-white/60 text-sm md:text-base font-light max-w-xl mx-auto leading-relaxed">
            Every amenity at The Stellaar delivers a 5-star experience exclusively for our
            distinguished members and their families.
          </p>
        </div>
      </section>

      {/* ── Gold Stats Strip ── */}
      <div className="bg-[#C9A14A] text-black py-4 px-4 md:px-8 overflow-hidden">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-wrap justify-center gap-6 md:gap-14 text-center">
            {[
              { value: '20+', label: 'Premium Amenities' },
              { value: '5★', label: 'Service Standard' },
              { value: '100', label: 'Exclusive Members' },
              { value: '170+', label: 'Club Affiliations' },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center min-w-[70px]">
                <span className="font-cinzel text-lg md:text-2xl font-bold">{s.value}</span>
                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-semibold opacity-80 mt-0.5">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Alternating Amenity Sections ── */}
      <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8 lg:px-12 bg-black">
        <div className="container mx-auto max-w-7xl space-y-20 md:space-y-28 lg:space-y-36">
          {amenities.map((amenity, idx) => {
            const isReversed = idx % 2 === 1;
            const Icon = amenity.icon;
            return (
              <div
                key={idx}
                className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 md:gap-14 lg:gap-20`}
              >
                {/* Image block */}
                <div className="w-full lg:w-1/2 relative group">
                  <div className="relative h-[240px] sm:h-[340px] md:h-[420px] overflow-hidden rounded-sm">
                    <img
                      src={amenity.image}
                      alt={amenity.title}
                      className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    {/* Corner hover accents */}
                    <div className="absolute top-4 left-4 w-9 h-9 border-l-2 border-t-2 border-[#C9A14A]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-4 right-4 w-9 h-9 border-r-2 border-b-2 border-[#C9A14A]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    {/* Subtitle overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                      <p className="text-[#C9A14A] text-[9px] md:text-[10px] uppercase tracking-[0.35em] font-bold">
                        {amenity.subtitle}
                      </p>
                    </div>
                  </div>
                  {/* Gold offset shadow box */}
                  <div
                    className={`absolute -z-10 inset-0 border border-[#C9A14A]/15 rounded-sm ${
                      isReversed ? '-translate-x-2 translate-y-2 md:-translate-x-3 md:translate-y-3' : 'translate-x-2 translate-y-2 md:translate-x-3 md:translate-y-3'
                    }`}
                  />
                </div>

                {/* Content block */}
                <div className="w-full lg:w-1/2 space-y-5 md:space-y-6">
                  {/* Eyebrow */}
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#C9A14A]/10 border border-[#C9A14A]/30 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 md:w-5 md:h-5 text-[#C9A14A]" />
                    </div>
                    <div className="w-8 h-px bg-[#C9A14A]/50" />
                    <span className="text-[#C9A14A] text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold">
                      {amenity.subtitle}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl text-white tracking-wide leading-tight">
                    {amenity.title}
                  </h2>

                  {/* Gold rule */}
                  <div className="w-12 h-[2px] bg-gradient-to-r from-[#C9A14A] to-[#B8924F]" />

                  {/* Description */}
                  <p className="text-white/60 leading-relaxed text-sm md:text-base font-light">
                    {amenity.description}
                  </p>

                  {/* Feature pills */}
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {amenity.features.map((f, fi) => (
                      <span
                        key={fi}
                        className="px-3 py-1.5 bg-white/5 border border-white/10 hover:border-[#C9A14A]/30 text-white/55 text-[9px] md:text-[10px] uppercase tracking-widest rounded-sm transition-colors duration-300"
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href={amenity.link}
                    className="inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-3.5 border border-[#C9A14A] text-[#C9A14A] hover:bg-[#C9A14A] hover:text-black transition-all duration-500 uppercase tracking-widest text-[10px] md:text-xs font-semibold group/btn mt-2 rounded-sm"
                  >
                    {amenity.cta}
                    <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-[#0A0A0A] border-t border-[#C9A14A]/10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[700px] h-[300px] md:h-[450px] bg-[#C9A14A]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto max-w-4xl px-5 text-center relative z-10">
          <p className="text-[#C9A14A] tracking-[0.4em] uppercase text-[10px] sm:text-xs font-bold mb-5">
            Join The Club
          </p>
          <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-5 tracking-wide leading-tight">
            UNLOCK ALL AMENITIES{' '}
            <span className="text-shimmer block sm:inline mt-1 sm:mt-0">AS A MEMBER</span>
          </h2>
          <p className="text-white/55 text-sm md:text-base font-light max-w-xl mx-auto mb-10 leading-relaxed">
            Become part of Nagpur's most exclusive family club and enjoy unlimited access to
            every world-class facility — reserved for just 100 distinguished families.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/membership"
              className="group px-8 md:px-10 py-4 bg-gradient-to-r from-[#C9A14A] via-[#D4B06A] to-[#B8924F] text-black font-bold uppercase tracking-[0.2em] text-[10px] sm:text-xs rounded-sm shadow-[0_0_30px_rgba(201,161,74,0.25)] hover:shadow-[0_0_50px_rgba(201,161,74,0.45)] hover:scale-105 transition-all duration-500 flex items-center justify-center gap-2 pulse-glow"
            >
              Apply for Membership
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="px-8 md:px-10 py-4 border border-[#C9A14A]/40 text-[#C9A14A] hover:border-[#C9A14A] hover:bg-[#C9A14A]/5 transition-all duration-500 uppercase tracking-[0.2em] text-[10px] sm:text-xs font-bold rounded-sm flex items-center justify-center"
            >
              Schedule a Visit
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
