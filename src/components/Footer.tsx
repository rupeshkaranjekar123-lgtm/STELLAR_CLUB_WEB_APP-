import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#D4AF37]/20 pt-20 pb-10 text-white/80">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="inline-block mb-4">
              <img 
                src="/images/logo.png" 
                alt="The Stellaar Logo" 
                className="w-40 object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed text-white/60">
              Nagpur's most exclusive premium family club. Limited to 100 members. Experience luxury, wellness, and elite networking.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]/60 hover:text-[#D4AF37] hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all">
                <InstagramIcon />
              </a>
              <a href="#" aria-label="YouTube" className="w-10 h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]/60 hover:text-[#D4AF37] hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all">
                <YoutubeIcon />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-serif text-xl mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-[#D4AF37] transition-colors text-sm uppercase tracking-wider">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#D4AF37] transition-colors text-sm uppercase tracking-wider">About Us</Link></li>
              <li><Link href="/amenities" className="hover:text-[#D4AF37] transition-colors text-sm uppercase tracking-wider">Amenities</Link></li>
              <li><Link href="/gallery" className="hover:text-[#D4AF37] transition-colors text-sm uppercase tracking-wider">Gallery</Link></li>
              <li><Link href="/membership" className="hover:text-[#D4AF37] transition-colors text-sm uppercase tracking-wider">Membership</Link></li>
              <li><Link href="/contact" className="hover:text-[#D4AF37] transition-colors text-sm uppercase tracking-wider">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-serif text-xl mb-6">Amenities</h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li>Luxury Gym & Fitness</li>
              <li>Temperature Controlled Pool</li>
              <li>Steam & Sauna</li>
              <li>Fine Dining Restaurant</li>
              <li>Premium Lounge</li>
              <li>Banquet Hall</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-serif text-xl mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <span>Central Nagpur, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Phone className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Mail className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <span>membership@thestellaar.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} The Stellaar Premium Family Club. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#D4AF37] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
