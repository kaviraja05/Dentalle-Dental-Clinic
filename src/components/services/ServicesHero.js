"use client";

import { motion } from "framer-motion";

export default function ServicesHero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/services/hero-bg.jpg')" }}
      >
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold !text-white leading-tight mb-6 drop-shadow-lg"
        >
          Exceptional Care for <br className="hidden md:block" /> <span className="text-[var(--color-primary)]">Every Smile</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl !text-white/95 leading-relaxed max-w-3xl mx-auto drop-shadow-md font-medium"
        >
          We use modern techniques, high-quality materials, and personalized treatment plans to deliver long-lasting results.
        </motion.p>
      </div>
    </section>
  );
}
