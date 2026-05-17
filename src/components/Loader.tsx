'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    // Simulate loading progress
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 800); // Wait a bit at 100% before fading out
          return 100;
        }
        const diff = Math.random() * 12; // Random jumps in progress
        return Math.min(oldProgress + diff, 100);
      });
    }, 150);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [loading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(10px)', scale: 1.05 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black overflow-hidden"
        >
          {/* Cinematic Vignette & Blur Effects */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.95)_100%)] pointer-events-none z-10"></div>
          
          {/* Subtle Radial Golden Glow Behind Logo */}
          <motion.div 
            animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.35, 0.15] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#C9A14A] rounded-full blur-[140px] pointer-events-none"
          ></motion.div>

          {/* Animated Gold Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  y: '100vh', 
                  x: ((i * 23) % 100) + 'vw',
                  opacity: ((i * 13) % 60) / 100 + 0.1,
                  scale: ((i * 7) % 60) / 100 + 0.4
                }}
                animate={{ 
                  y: '-10vh',
                  x: ((i * 23) % 100) + 'vw',
                }}
                transition={{ 
                  duration: ((i * 11) % 15) + 15,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: (i * 19) % 5
                }}
                className="absolute w-1 h-1 bg-[#C9A14A] rounded-full blur-[1px]"
                style={{
                  boxShadow: '0 0 12px rgba(201,161,74,0.9)'
                }}
              />
            ))}
          </div>

          <div className="relative z-20 flex flex-col items-center">
            {/* Logo with Smooth Fade-in and Slow Scale */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1.8, ease: 'easeOut' }}
              className="relative mb-16 overflow-hidden p-4"
            >
              <img 
                src="/images/logo.png" 
                alt="The Stellar Premium Family Club" 
                className="w-64 md:w-80 lg:w-96 h-auto object-contain drop-shadow-[0_0_35px_rgba(201,161,74,0.5)]"
              />
              
              {/* Shimmer Effect passing through logo */}
              <motion.div
                initial={{ x: '-150%' }}
                animate={{ x: '250%' }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: 'easeInOut' }}
                className="absolute inset-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-30deg]"
              ></motion.div>
            </motion.div>

            {/* Elegant Loading Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="w-56 md:w-80 flex flex-col items-center gap-6"
            >
              <div className="text-[#C9A14A] text-[10px] md:text-xs uppercase tracking-[0.4em] font-medium animate-pulse">
                Loading...
              </div>
              
              <div className="w-full h-[3px] bg-white/10 rounded-full overflow-hidden shadow-[0_0_15px_rgba(201,161,74,0.1)] relative">
                <motion.div 
                  className="h-full bg-gradient-to-r from-[#C9A14A]/40 via-[#C9A14A] to-[#C9A14A] rounded-full shadow-[0_0_15px_rgba(201,161,74,0.8)]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'linear' }}
                />
                {/* Glow on the leading edge */}
                <motion.div 
                  className="absolute top-0 bottom-0 w-6 bg-white/60 blur-[3px]"
                  style={{ left: `calc(${progress}% - 12px)` }}
                />
              </div>

              <div className="text-[#C9A14A]/60 text-[10px] font-mono tracking-widest mt-1">
                {Math.round(progress)}%
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
