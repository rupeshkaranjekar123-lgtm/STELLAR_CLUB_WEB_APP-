'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/amenities', label: 'Amenities' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/membership', label: 'Membership' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/images/logo.png" 
              alt="The Stellaar Logo" 
              width={140} 
              height={50} 
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`text-[10px] tracking-[0.3em] uppercase transition-all duration-300 hover:text-[#C9A14A] font-primary ${pathname === link.href ? 'text-[#C9A14A] font-bold' : 'text-white/70'}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Link 
            href="/contact" 
            className="hidden md:flex items-center gap-2 px-7 py-2.5 border border-[#C9A14A]/60 text-[#C9A14A] hover:bg-[#C9A14A] hover:text-black transition-all duration-500 tracking-[0.2em] text-[10px] uppercase font-bold rounded-sm shadow-[0_0_15px_rgba(201,161,74,0.15)] hover:shadow-[0_0_25px_rgba(201,161,74,0.4)]"
          >
            Book a Visit
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white z-[70] relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={32} className="text-[#C9A14A]" /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 w-full h-screen bg-black z-[60] flex flex-col justify-center items-center md:hidden"
          >
            {/* Background Texture/Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-[#1a1a1a] pointer-events-none"></div>
            
            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#C9A14A]/5 blur-[120px] rounded-full"></div>

            <nav className="relative z-10 flex flex-col items-center gap-8 px-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <Link 
                    href={link.href}
                    className={`text-2xl font-primary tracking-[0.3em] uppercase transition-all duration-500 hover:text-[#C9A14A] ${pathname === link.href ? 'text-[#C9A14A] font-medium' : 'text-white/60'}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <Link 
                  href="/membership" 
                  className="px-10 py-4 border border-[#C9A14A]/40 text-[#C9A14A] text-center transition-all duration-500 tracking-[0.25em] text-sm uppercase rounded-sm hover:bg-[#C9A14A] hover:text-black hover:border-[#C9A14A]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Join the Club
                </Link>
              </motion.div>
            </nav>

            {/* Bottom Info */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-12 left-0 w-full text-center px-6"
            >
              <p className="text-white/30 text-[10px] tracking-[0.5em] uppercase">The Stellaar &copy; 2026</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
