"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle2 } from "lucide-react";

export default function ClinicIntro() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    "Modern Infrastructure",
    "Comfortable Waiting Lounge",
    "Advanced Treatment Rooms",
    "Private Consultation Areas"
  ];

  return (
    <section className="py-10 md:py-10 bg-white dark:bg-[var(--color-bg-main)]">
      <div className="section-container" ref={ref}>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 items-center">
          
          {/* Left: Large Image */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-3/5 lg:pr-12 relative"
          >
            <div className="aspect-[4/5] md:aspect-[16/10] lg:aspect-[4/3] rounded-[2rem] overflow-hidden">
              <img 
                src="/images/clinic/facility.jpg" 
                alt="Dentelle Clinic Environment" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right: Content Card */}
          <motion.div 
            initial={{ opacity: 0, x: 40, y: 20 }}
            animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-2/5"
          >
            <div className="bg-white dark:bg-[var(--color-bg-secondary)] rounded-[2rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-gray-100 dark:border-gray-800 lg:-ml-24 relative z-10">
              
              <div className="inline-block bg-[#DFF3FF] text-[#4DA6FF] px-4 py-1.5 rounded-full text-sm font-medium mb-6 dark:bg-[#4DA6FF]/10">
                The Environment
              </div>
              
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#0B1220] dark:text-white leading-[1.2] mb-6">
                Our <span className="text-[#4DA6FF]">Facility</span>
              </h2>
              
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed text-lg">
                We believe that a calming environment is the first step to exceptional dental care. Every inch of Dentelle has been thoughtfully designed to reduce clinical anxiety and maximize your comfort.
              </p>

              <div className="space-y-4">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-[#F0F8FF] dark:bg-gray-800 flex items-center justify-center shrink-0 transition-colors group-hover:bg-[#4DA6FF]">
                      <CheckCircle2 size={20} className="text-[#4DA6FF] group-hover:text-white transition-colors" />
                    </div>
                    <span className="font-medium text-[#1E2A4A] dark:text-gray-200 text-lg">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
