"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
        >
          {/* Note: User must upload the video to public/videos/about-hero.mp4 */}
          <source src="/videos/about-hero.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl md:text-5xl lg:text-7xl font-medium !text-white leading-tight mb-6"
        >
          Where Your Smile is <br className="hidden md:block" /> Our <span className="text-[var(--color-primary)]">Masterpiece</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl !text-white/90 leading-relaxed max-w-3xl mx-auto"
        >
          Sets the emotional tone for the entire page. To transform dental care through compassion, innovation, and education.
        </motion.p>
      </div>
    </section>
  );
}
