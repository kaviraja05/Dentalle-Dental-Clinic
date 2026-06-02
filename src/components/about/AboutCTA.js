"use client";

import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";
import { useInView } from "react-intersection-observer";

export default function AboutCTA() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="pt-24 pb-12 md:pt-32 bg-white dark:bg-[var(--color-bg-main)]">
      <div className="section-container" ref={ref}>

        {/* Banner Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative w-full rounded-[2.5rem] bg-[var(--color-primary)] mt-32 md:mt-48 pt-12 pb-0 md:py-20 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between shadow-2xl overflow-visible"
        >
          {/* Background Topographic Texture overlay */}
          <div className="absolute inset-0 opacity-[0.05] z-0" style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

          {/* Faint '24/7' watermark text or circle in background */}
          <div className="absolute right-[40%] top-1/2 -translate-y-1/2 opacity-10 z-0">
            <svg width="300" height="300" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="48" stroke="white" strokeWidth="1" />
              <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
              <text x="50" y="55" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">24/7</text>
            </svg>
          </div>

          {/* Left Content */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start md:items-center gap-6 md:gap-8 mb-4 md:mb-0 w-full md:w-1/2 text-center sm:text-left pt-6 md:pt-0">
            {/* Phone Icon Circle */}
            <div className="w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-full bg-white flex items-center justify-center shadow-lg border-4 border-[#D3EFFF]">
              <PhoneCall size={40} className="text-[var(--color-primary)]" strokeWidth={1.5} />
            </div>

            {/* Text */}
            <div>
              <div className="text-white text-lg md:text-xl font-medium mb-1">
                Available 24/7
              </div>
              <a href="tel:2085550112" className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white hover:text-[#D3EFFF] transition-colors whitespace-nowrap">
                (208) 555-0112
              </a>
            </div>
          </div>

          {/* Right Content - Doctors Overlapping Image */}
          <div className="relative md:absolute bottom-0 right-0 md:right-8 w-full md:w-[45%] flex justify-center md:justify-end z-10 pointer-events-none mt-8 md:mt-0">
            {/* This image needs to be a transparent PNG cut out. It overlaps the top edge. */}
            <img
              src="/images/about/cta-doctors.png"
              alt="Doctors ready to help"
              className="w-auto h-[300px] md:h-[500px] object-contain object-bottom"
              style={{ marginBottom: '-1px' }} // ensure it sits flush with the bottom
            />
          </div>

        </motion.div>

      </div>
    </section>
  );
}
