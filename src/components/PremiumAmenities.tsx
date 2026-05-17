'use client';

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const amenities = [
  {
    title: 'Swimming Pool',
    desc: 'Pristine waters for relaxation and fitness. Nagpur\'s most premium aquatic experience.',
    image: '/images/pool.jpg',
    link: '/amenities',
    colSpan: 'lg:col-span-2'
  },
  {
    title: 'Modern Gymnasium',
    desc: 'State-of-the-art equipment and professional training. Your fitness journey starts here.',
    image: '/images/gallery-3.jpg',
    link: '/amenities',
    colSpan: 'lg:col-span-2'
  },
  {
    title: 'Restaurant',
    desc: 'Fine dining culinary experiences with global cuisines crafted to perfection.',
    image: '/images/dining.jpg',
    link: '/restaurant',
    colSpan: 'lg:col-span-2'
  },
  {
    title: 'Banquet Hall',
    desc: 'Elegant spaces for weddings and corporate events. Celebrate life\'s special moments in style.',
    image: '/images/gallery-2.jpg',
    link: '/banquet',
    colSpan: 'lg:col-span-3'
  },
  {
    title: 'Family Recreation',
    desc: 'Dedicated zones for children and family enjoyment. Fun, leisure and memories together.',
    image: '/images/gallery-4.jpg',
    link: '/amenities',
    colSpan: 'lg:col-span-3'
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
};

export default function PremiumAmenities() {
  return (
    <section className="py-16 md:py-24 bg-[#050505] relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C9A14A]/5 rounded-full blur-[150px]"></div>
      </div>

      <div className="container mx-auto max-w-[1400px] px-5 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#C9A14A] tracking-[0.35em] uppercase text-xs font-bold mb-4">Discover More</p>
            <h2 className="text-3xl md:text-5xl font-serif text-white">Premium Amenities</h2>
          </motion.div>
        </div>

        {/* POP Animation Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {amenities.map((amenity, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className={`relative group rounded-[20px] overflow-hidden border border-white/5 hover:border-[#C9A14A]/40 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(201,161,74,0.15)] ${amenity.colSpan} md:col-span-1 h-[400px] md:h-[450px] bg-black`}
            >
              <Link href={amenity.link} className="absolute inset-0 block">
                {/* Background Image */}
                <img
                  src={amenity.image}
                  alt={amenity.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="flex items-end justify-between w-full">
                    <div className="flex-1 pr-6">
                      <h3 className="text-2xl font-bold text-[#C9A14A] mb-3">{amenity.title}</h3>
                      <p className="text-white/70 text-[13px] md:text-sm leading-relaxed font-light">{amenity.desc}</p>
                    </div>

                    {/* Circular Glassmorphism Arrow Button */}
                    <div className="w-12 h-12 flex-shrink-0 rounded-full border border-[#C9A14A] flex items-center justify-center bg-transparent backdrop-blur-sm group-hover:bg-[#C9A14A] transition-all duration-500 shadow-[0_0_15px_rgba(201,161,74,0.1)]">
                      <ArrowRight className="w-5 h-5 text-[#C9A14A] group-hover:text-black group-hover:translate-x-0.5 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
