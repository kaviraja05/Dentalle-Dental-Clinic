"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useInView } from "react-intersection-observer";

export default function AboutMission() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const bullets = [
    {
      title: "Your Comfort is Our Priority:",
      desc: "Our team is dedicated to creating a welcoming and stress-free environment"
    },
    {
      title: "Excellence in Every Detail:",
      desc: "Advanced treatments, we adhere to the highest standards of quality and precision."
    },
    {
      title: "Building a Relationship Based on Trust:",
      desc: "That's why we are committed to transparent communication."
    }
  ];

  return (
    <section className="py-10 md:py-10 bg-[#F2F9FF] dark:bg-[var(--color-bg-secondary)]">
      <div className="section-container" ref={ref}>
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 max-w-4xl"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0B1220] dark:text-white leading-[1.2]">
            Our Promise, Where Compassion <br className="hidden md:block"/> Meets Expertise
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Left: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full h-[400px] lg:h-auto min-h-[500px] rounded-3xl overflow-hidden bg-gray-200"
          >
            <img 
              src="/images/about/mission-doc.jpg" 
              alt="Smiling Doctor" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right: Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white dark:bg-[var(--color-bg-card)] rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 dark:border-gray-800 flex flex-col justify-center"
          >
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#0B1220] dark:text-white mb-4">
              Our Commitment to Care
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
              To provide compassionate, high-quality care that enhances the comfort, dignity, and quality of life for every resident.
            </p>

            <div className="space-y-6 mb-10">
              {bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  {/* Custom Asterisk Icon */}
                  <div className="mt-1 flex-shrink-0 text-[var(--color-primary)]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="3" x2="12" y2="21"></line>
                      <line x1="4.22" y1="7.78" x2="19.78" y2="16.22"></line>
                      <line x1="4.22" y1="16.22" x2="19.78" y2="7.78"></line>
                    </svg>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    <span className="font-semibold text-gray-800 dark:text-gray-200">{bullet.title}</span> {bullet.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Contact Pill Button */}
            <div>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-3 px-2 py-2 pr-6 bg-white dark:bg-transparent border border-gray-200 dark:border-gray-700 rounded-full text-[var(--color-primary)] font-medium hover:border-[var(--color-primary)] transition-colors duration-300 shadow-sm"
              >
                <div className="w-8 h-8 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center">
                  <ArrowRight size={16} />
                </div>
                Contact Us
              </Link>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
