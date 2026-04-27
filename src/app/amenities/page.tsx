import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const amenities = [
  {
    title: "Swimming Pool",
    description: "Temperature-controlled swimming pool with private cabanas and poolside service for ultimate relaxation.",
    image: "/images/pool.jpg",
    link: "/gallery",
    cta: "View Pool Gallery"
  },
  {
    title: "Luxury Gym",
    description: "State-of-the-art fitness center featuring premium equipment, personal training, and modern aesthetics designed to inspire your best performance.",
    image: "/images/gym.jpg",
    link: "/contact",
    cta: "Book a Session"
  },
  {
    title: "Fine Dining Restaurant",
    description: "A culinary journey curated by master chefs. Enjoy exclusive discounts and priority reservations at our premium restaurant featuring global cuisine.",
    image: "/images/dining.jpg",
    link: "/restaurant",
    cta: "Reserve a Table"
  },
  {
    title: "Grand Banquet Hall",
    description: "Host your exclusive events, corporate meetings, and family celebrations in our magnificent and fully decorated banquet space.",
    image: "/images/gallery-5.jpg",
    link: "/banquet",
    cta: "Get Event Quote"
  },
  {
    title: "Kids & Family Recreation",
    description: "Dedicated safe spaces and engaging activities ensuring your children and family have the best times building lasting memories.",
    image: "/images/family.jpg",
    link: "/contact",
    cta: "Inquire Now"
  }
];

export default function Amenities() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/sports.jpg" 
            alt="The Stellaar Amenities" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black"></div>
        </div>
        <div className="relative z-10 text-center px-4 fade-in mt-16">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">World-Class Amenities</h1>
          <p className="text-[#D4AF37] tracking-[0.2em] uppercase text-xs">Experience The Extraordinary</p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl space-y-32">
          {amenities.map((amenity, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24`}>
              <div className="w-full md:w-1/2 relative h-[400px] group overflow-hidden">
                <img 
                  src={amenity.image} 
                  alt={amenity.title} 
                  className="w-full h-full object-cover rounded-sm transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 border border-[#D4AF37]/30 scale-95 transition-all duration-500 group-hover:scale-100 opacity-0 group-hover:opacity-100"></div>
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <h2 className="text-2xl md:text-3xl font-serif text-white">{amenity.title}</h2>
                <div className="w-12 h-1 bg-[#D4AF37]"></div>
                <p className="text-white/70 leading-relaxed text-base mb-8">
                  {amenity.description}
                </p>
                <a 
                  href={amenity.link}
                  className="inline-flex items-center gap-3 px-8 py-3 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-colors uppercase tracking-widest text-xs font-semibold"
                >
                  {amenity.cta}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
