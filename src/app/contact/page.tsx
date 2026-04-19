import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      <section className="pt-40 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">Contact Us</h1>
            <p className="text-[#D4AF37] tracking-[0.2em] uppercase text-sm">We are at your service</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h3 className="text-3xl font-serif text-white">Get In Touch</h3>
                <p className="text-white/60 leading-relaxed">
                  For membership inquiries, event bookings, or general questions, please reach out to our dedicated concierge team.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full border border-[#D4AF37]/50 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="text-white text-lg font-serif mb-1">Our Location</h4>
                    <p className="text-white/60 text-sm">Central Nagpur,<br/>Maharashtra, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full border border-[#D4AF37]/50 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="text-white text-lg font-serif mb-1">Phone</h4>
                    <p className="text-white/60 text-sm">+91 98765 43210<br/>+91 98765 43211</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full border border-[#D4AF37]/50 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="text-white text-lg font-serif mb-1">Email</h4>
                    <p className="text-white/60 text-sm">membership@thestellaar.com<br/>info@thestellaar.com</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <div className="pt-8 border-t border-white/10">
                <a 
                  href="https://wa.me/919876543210" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white font-semibold rounded-sm hover:bg-[#1EBE5D] transition-colors"
                >
                  <MessageCircle className="w-6 h-6" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card p-10">
              <h3 className="text-2xl font-serif text-white mb-8">Send an Inquiry</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-white/70 uppercase tracking-wider">First Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-black/50 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-white/70 uppercase tracking-wider">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-black/50 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-white/70 uppercase tracking-wider">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-black/50 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-white/70 uppercase tracking-wider">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full bg-black/50 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-white/70 uppercase tracking-wider">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-black/50 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full py-4 bg-[#D4AF37] text-black font-semibold uppercase tracking-widest hover:bg-white transition-colors"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
