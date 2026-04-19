import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Check, Star, Shield } from 'lucide-react';
import Link from 'next/link';

export default function Membership() {
  const plans = [
    {
      name: 'Blue',
      price: '₹74,999',
      period: '1 Year',
      features: ['Full Family Access', '20% Dining Discount', 'Standard Event Access', 'Gym & Pool Privileges'],
      color: 'border-blue-900/50 hover:border-blue-500/50'
    },
    {
      name: 'Silver',
      price: '₹1,74,999',
      period: '3 Years',
      features: ['Full Family Access', '25% Dining Discount', 'Priority Event Access', '3 Guest Passes/mo'],
      color: 'border-slate-500/50 hover:border-slate-300/50'
    },
    {
      name: 'Gold',
      price: '₹2,24,999',
      period: '5 Years',
      features: ['Full Family Access', '30% Dining Discount', 'VIP Event Access', 'Unlimited Guest Passes', 'Valet Parking'],
      color: 'border-[#D4AF37]/50 hover:border-[#D4AF37]'
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
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-4">Membership</h1>
          <p className="text-[#D4AF37] tracking-[0.2em] uppercase text-sm">Join The Elite 100</p>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-6 bg-[#050505]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Shield className="w-10 h-10 text-[#D4AF37] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Choose Your Access</h2>
            <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">
              Membership at The Stellaar is strictly limited to 100 families, ensuring an uncrowded, private, and highly personalized experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <div key={i} className={`glass-card p-10 flex flex-col items-center text-center transition-all duration-500 border ${plan.color}`}>
                <h3 className="text-2xl font-serif text-white mb-2">{plan.name} Plan</h3>
                <div className="text-sm text-white/50 uppercase tracking-widest mb-6">{plan.period}</div>
                <div className="text-4xl font-bold text-[#D4AF37] mb-10">{plan.price}</div>
                
                <ul className="space-y-4 mb-10 w-full text-left text-white/70 text-sm">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 border-b border-white/5 pb-3 last:border-0">
                      <Star className="w-4 h-4 text-[#D4AF37]" /> {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="/contact" 
                  className="w-full py-4 border border-[#D4AF37]/50 text-white hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] transition-all uppercase tracking-widest text-xs font-semibold mt-auto"
                >
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
