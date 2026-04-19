import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const amenities = [
  {
    title: "Luxury Gym",
    description: "State-of-the-art fitness center featuring premium equipment, personal training, and a specialized black and gold aesthetic designed to inspire your best performance.",
    image: "/images/gym.jpg"
  },
  {
    title: "Fine Dining",
    description: "A culinary journey curated by master chefs. Enjoy exclusive discounts and priority reservations at our premium restaurant featuring global cuisine.",
    image: "/images/dining.jpg"
  },
  {
    title: "Swimming Pool & Lounge",
    description: "Temperature-controlled swimming pool with private cabanas and poolside service for ultimate relaxation.",
    image: "/images/family.jpg"
  },
  {
    title: "Steam & Sauna",
    description: "Rejuvenate your body and mind in our dedicated wellness area, featuring luxurious steam baths and dry saunas.",
    image: "/images/fitness-steam.jpg"
  },
  {
    title: "Banquet Hall",
    description: "Host your exclusive events, corporate meetings, and family celebrations in our magnificent banquet space.",
    image: "/images/reception.jpg"
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
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-4">World-Class Amenities</h1>
          <p className="text-[#D4AF37] tracking-[0.2em] uppercase text-sm">Experience The Extraordinary</p>
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
                <h2 className="text-3xl md:text-4xl font-serif text-white">{amenity.title}</h2>
                <div className="w-12 h-1 bg-[#D4AF37]"></div>
                <p className="text-white/70 leading-relaxed text-lg">
                  {amenity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
