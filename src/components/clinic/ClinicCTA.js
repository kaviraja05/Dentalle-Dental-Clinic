"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { Calendar } from "lucide-react";

export default function ClinicCTA() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 md:py-32 bg-white dark:bg-[var(--color-bg-main)]">
      <div className="section-container" ref={ref}>
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative w-full rounded-[3rem] bg-gradient-to-br from-[#4DA6FF] to-[#1E2A4A] overflow-hidden py-10 md:py-10 px-8 text-center shadow-2xl bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/clinic/cta-bg.jpg')" }}
          >
          {/* Overlay to ensure text readability against the image */}
          <div className="absolute inset-0 bg-black/40 z-0"></div>
          {/* Floating Decorative Shapes */}
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 left-10 w-32 h-32 rounded-full border-2 border-white/20 z-0"
          ></motion.div>
          <motion.div 
            animate={{ 
              y: [0, 30, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[-20%] right-[10%] w-64 h-64 rounded-full bg-white/5 blur-3xl z-0"
          ></motion.div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
              Experience Comfortable Modern Dental Care
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-12 font-medium max-w-2xl mx-auto">
              Book your appointment and discover the Dentelle difference. Our advanced clinic and expert team are ready to welcome you.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 bg-white text-[#1E2A4A] px-10 py-5 rounded-full font-bold text-lg hover:bg-[#DFF3FF] hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Calendar size={22} />
              Book Appointment
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
