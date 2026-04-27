import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  MapPin, Phone, Mail, MessageCircle, User, Briefcase,
  Building, Map, Lock, ChevronDown, Pencil, ArrowRight,
  Clock, ShieldCheck
} from 'lucide-react';

export default function Contact() {
  return (
    <main className="min-h-screen bg-black relative overflow-hidden font-sans">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#C9A14A]/10 to-transparent blur-3xl"></div>
        <div className="absolute top-1/4 left-[-10%] w-[40%] h-[600px] bg-[#C9A14A]/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-[-10%] w-[40%] h-[600px] bg-[#C9A14A]/5 blur-[120px] rounded-full"></div>
      </div>

      <Navbar />

      <section className="pt-40 pb-24 px-6 relative z-10">
        <div className="container mx-auto max-w-7xl">
          {/* Header Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-serif text-white tracking-[0.1em] mb-6">
              CONTACT US
            </h1>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C9A14A]"></div>
              <div className="w-2 h-2 rotate-45 border border-[#C9A14A]"></div>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#C9A14A]"></div>
            </div>
            <p className="text-[#C9A14A] tracking-[0.3em] uppercase text-sm font-medium">
              We are at your service
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* LEFT SECTION (Get in Touch) */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-serif text-white mb-4 tracking-wide">GET IN TOUCH</h2>
                <p className="text-white/60 leading-relaxed text-base font-light">
                  For membership inquiries, event bookings, or general questions,
                  please reach out to our dedicated concierge team.
                </p>
              </div>

              <div className="space-y-8">
                {/* Location */}
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-full border border-[#C9A14A]/30 flex items-center justify-center shrink-0 group-hover:border-[#C9A14A] group-hover:shadow-[0_0_15px_rgba(201,161,74,0.3)] transition-all duration-500 bg-black/50 backdrop-blur-sm">
                    <MapPin className="w-6 h-6 text-[#C9A14A]" />
                  </div>
                  <div>
                    <h4 className="text-[#C9A14A] text-sm uppercase tracking-widest mb-2 font-medium">Our Location</h4>
                    <p className="text-white/80 text-base leading-relaxed font-light">
                      The Stellaar – Premium Family Club,<br />
                      439G+439, Prashant Nagar,<br />
                      Samarth Nagar East, Nagpur,<br />
                      Maharashtra 440015
                    </p>
                  </div>
                </div>

                <div className="w-full h-px bg-gradient-to-r from-white/10 to-transparent"></div>

                {/* Phone */}
                <div className="flex items-start gap-6 group cursor-pointer">
                  <div className="w-14 h-14 rounded-full border border-[#C9A14A]/30 flex items-center justify-center shrink-0 group-hover:border-[#C9A14A] group-hover:shadow-[0_0_15px_rgba(201,161,74,0.3)] transition-all duration-500 bg-black/50 backdrop-blur-sm">
                    <Phone className="w-6 h-6 text-[#C9A14A]" />
                  </div>
                  <div>
                    <h4 className="text-[#C9A14A] text-sm uppercase tracking-widest mb-2 font-medium">Phone</h4>
                    <div className="text-white/80 text-base font-light space-y-1">
                      <p className="hover:text-white hover:underline decoration-[#C9A14A]/50 underline-offset-4 transition-all duration-300">+91 7888005995</p>
                      <p className="hover:text-white hover:underline decoration-[#C9A14A]/50 underline-offset-4 transition-all duration-300">+91 8668647116</p>
                    </div>
                  </div>
                </div>

                <div className="w-full h-px bg-gradient-to-r from-white/10 to-transparent"></div>

                {/* Email */}
                <div className="flex items-start gap-6 group cursor-pointer">
                  <div className="w-14 h-14 rounded-full border border-[#C9A14A]/30 flex items-center justify-center shrink-0 group-hover:border-[#C9A14A] group-hover:shadow-[0_0_15px_rgba(201,161,74,0.3)] transition-all duration-500 bg-black/50 backdrop-blur-sm">
                    <Mail className="w-6 h-6 text-[#C9A14A]" />
                  </div>
                  <div>
                    <h4 className="text-[#C9A14A] text-sm uppercase tracking-widest mb-2 font-medium">Email</h4>
                    <div className="text-white/80 text-base font-light space-y-1">
                      <p className="hover:text-white hover:underline decoration-[#C9A14A]/50 underline-offset-4 transition-all duration-300">membership@thestellaar.com</p>
                      <p className="hover:text-white hover:underline decoration-[#C9A14A]/50 underline-offset-4 transition-all duration-300">info@thestellaar.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <div className="pt-6">
                <a
                  href="https://wa.me/917888005995"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white font-medium rounded-full hover:bg-[#20bd5a] hover:scale-105 hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all duration-300"
                >
                  <MessageCircle className="w-6 h-6 fill-transparent" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* RIGHT SECTION (Form Card) */}
            <div className="bg-[#0a0a0a]/80 backdrop-blur-md border border-[#C9A14A]/10 rounded-xl p-8 md:p-12 shadow-[0_0_40px_rgba(0,0,0,0.5)] relative group/card">
              {/* Subtle card glow on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#C9A14A]/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

              <h3 className="text-3xl font-serif text-white mb-10 tracking-wide text-center">SEND AN INQUIRY</h3>

              <form className="space-y-6 relative z-10">
                {/* Name Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs text-[#C9A14A] uppercase tracking-widest font-medium">First Name *</label>
                    <div className="relative group/input">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-white/30 group-focus-within/input:text-[#C9A14A] transition-colors duration-300" />
                      </div>
                      <input
                        type="text"
                        placeholder="Enter first name"
                        className="w-full bg-black/40 border border-white/10 rounded-lg pl-12 pr-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-[#C9A14A] focus:shadow-[0_0_10px_rgba(201,161,74,0.2)] transition-all duration-300 font-light"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-[#C9A14A] uppercase tracking-widest font-medium">Last Name *</label>
                    <div className="relative group/input">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-white/30 group-focus-within/input:text-[#C9A14A] transition-colors duration-300" />
                      </div>
                      <input
                        type="text"
                        placeholder="Enter last name"
                        className="w-full bg-black/40 border border-white/10 rounded-lg pl-12 pr-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-[#C9A14A] focus:shadow-[0_0_10px_rgba(201,161,74,0.2)] transition-all duration-300 font-light"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Job & Phone Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs text-white/70 uppercase tracking-widest font-medium">Job Title</label>
                    <div className="relative group/input">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Briefcase className="h-5 w-5 text-white/30 group-focus-within/input:text-[#C9A14A] transition-colors duration-300" />
                      </div>
                      <input
                        type="text"
                        placeholder="Enter your job title"
                        className="w-full bg-black/40 border border-white/10 rounded-lg pl-12 pr-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-[#C9A14A] focus:shadow-[0_0_10px_rgba(201,161,74,0.2)] transition-all duration-300 font-light"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-[#C9A14A] uppercase tracking-widest font-medium">Phone Number *</label>
                    <div className="relative group/input">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-white/30 group-focus-within/input:text-[#C9A14A] transition-colors duration-300" />
                      </div>
                      <input
                        type="tel"
                        placeholder="Enter phone number"
                        className="w-full bg-black/40 border border-white/10 rounded-lg pl-12 pr-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-[#C9A14A] focus:shadow-[0_0_10px_rgba(201,161,74,0.2)] transition-all duration-300 font-light"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-xs text-[#C9A14A] uppercase tracking-widest font-medium">Email Address *</label>
                  <div className="relative group/input">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-white/30 group-focus-within/input:text-[#C9A14A] transition-colors duration-300" />
                    </div>
                    <input
                      type="email"
                      placeholder="Enter email address"
                      className="w-full bg-black/40 border border-white/10 rounded-lg pl-12 pr-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-[#C9A14A] focus:shadow-[0_0_10px_rgba(201,161,74,0.2)] transition-all duration-300 font-light"
                      required
                    />
                  </div>
                </div>

                {/* Address Section */}
                <div className="space-y-4">
                  <label className="text-xs text-[#C9A14A] uppercase tracking-widest font-medium block">Address *</label>

                  {/* Street */}
                  <div className="relative group/input">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <MapPin className="h-5 w-5 text-white/30 group-focus-within/input:text-[#C9A14A] transition-colors duration-300" />
                    </div>
                    <input
                      type="text"
                      placeholder="Street address"
                      className="w-full bg-black/40 border border-white/10 rounded-lg pl-12 pr-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-[#C9A14A] focus:shadow-[0_0_10px_rgba(201,161,74,0.2)] transition-all duration-300 font-light"
                      required
                    />
                  </div>

                  {/* City, State, ZIP */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="relative group/input">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Building className="h-5 w-5 text-white/30 group-focus-within/input:text-[#C9A14A] transition-colors duration-300" />
                      </div>
                      <input
                        type="text"
                        placeholder="City"
                        className="w-full bg-black/40 border border-white/10 rounded-lg pl-12 pr-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-[#C9A14A] focus:shadow-[0_0_10px_rgba(201,161,74,0.2)] transition-all duration-300 font-light"
                        required
                      />
                    </div>
                    <div className="relative group/input">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Map className="h-5 w-5 text-white/30 group-focus-within/input:text-[#C9A14A] transition-colors duration-300" />
                      </div>
                      <input
                        type="text"
                        placeholder="State / Province"
                        className="w-full bg-black/40 border border-white/10 rounded-lg pl-12 pr-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-[#C9A14A] focus:shadow-[0_0_10px_rgba(201,161,74,0.2)] transition-all duration-300 font-light"
                        required
                      />
                    </div>
                    <div className="relative group/input">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-white/30 group-focus-within/input:text-[#C9A14A] transition-colors duration-300" />
                      </div>
                      <input
                        type="text"
                        placeholder="ZIP / Postal code"
                        className="w-full bg-black/40 border border-white/10 rounded-lg pl-12 pr-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-[#C9A14A] focus:shadow-[0_0_10px_rgba(201,161,74,0.2)] transition-all duration-300 font-light"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Inquiry Type */}
                <div className="space-y-2">
                  <label className="text-xs text-[#C9A14A] uppercase tracking-widest font-medium">Inquiry Type *</label>
                  <div className="relative group/input">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <MessageCircle className="h-5 w-5 text-white/30 group-focus-within/input:text-[#C9A14A] transition-colors duration-300" />
                    </div>
                    <select
                      className="w-full bg-black/40 border border-white/10 rounded-lg pl-12 pr-10 py-3.5 text-white focus:outline-none focus:border-[#C9A14A] focus:shadow-[0_0_10px_rgba(201,161,74,0.2)] transition-all duration-300 font-light appearance-none cursor-pointer"
                      required
                      defaultValue=""
                    >
                      <option value="" disabled className="text-white/20">Select an inquiry type</option>
                      <option value="membership" className="bg-[#111] text-white">Membership Info</option>
                      <option value="events" className="bg-[#111] text-white">Event Booking</option>
                      <option value="dining" className="bg-[#111] text-white">Dining Reservation</option>
                      <option value="other" className="bg-[#111] text-white">Other</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                      <ChevronDown className="h-5 w-5 text-white/50" />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-xs text-[#C9A14A] uppercase tracking-widest font-medium">Message *</label>
                  <div className="relative group/input">
                    <div className="absolute top-4 left-4 pointer-events-none">
                      <Pencil className="h-5 w-5 text-white/30 group-focus-within/input:text-[#C9A14A] transition-colors duration-300" />
                    </div>
                    <textarea
                      rows={4}
                      placeholder="How can we help you?"
                      className="w-full bg-black/40 border border-white/10 rounded-lg pl-12 pr-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-[#C9A14A] focus:shadow-[0_0_10px_rgba(201,161,74,0.2)] transition-all duration-300 font-light resize-none"
                      required
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#C9A14A] via-[#E8C87A] to-[#C9A14A] bg-[length:200%_auto] text-black font-semibold uppercase tracking-widest rounded-lg hover:bg-right hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(201,161,74,0.3)] transition-all duration-500 flex items-center justify-center gap-3 mt-8"
                >
                  SEND INQUIRY
                  <ArrowRight className="w-5 h-5" />
                </button>

                {/* Trust Footer */}
                <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-white/5 mt-8 gap-4 sm:gap-0">
                  <div className="flex items-center gap-2 text-white/40 text-xs">
                    <Clock className="w-4 h-4" />
                    <span>We respond within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/40 text-xs">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Your information is secure and confidential</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
