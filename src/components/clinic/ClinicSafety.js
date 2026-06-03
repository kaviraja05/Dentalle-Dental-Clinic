"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ShieldCheck } from "lucide-react";

export default function ClinicSafety() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const safetyStandards = [
    { title: "Sterilized Instruments", desc: "Every instrument is thoroughly cleaned and sterilized in our advanced autoclave system before each use." },
    { title: "Infection Control Protocols", desc: "We strictly adhere to all OSHA and ADA guidelines to prevent cross-contamination and ensure patient safety." },
    { title: "Sanitized Treatment Rooms", desc: "All surfaces are disinfected with medical-grade cleaners between every single patient visit." },
    { title: "Safety-First Procedures", desc: "Our staff utilizes single-use protective barriers and personal protective equipment for every procedure." }
  ];

  return (
    <section className="py-10 md:py-10 bg-white dark:bg-[var(--color-bg-main)]">
      <div className="section-container" ref={ref}>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* Left: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="aspect-[4/5] md:aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img 
                src="/images/clinic/safety.jpg" 
                alt="Dentelle Safety Standards" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-[#4DA6FF] p-6 rounded-2xl shadow-xl flex items-center gap-4 text-white z-10 hidden sm:flex">
              <ShieldCheck size={40} />
              <div>
                <p className="font-bold text-xl">100%</p>
                <p className="text-sm font-medium text-white/90">Sterilization Rated</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#0B1220] dark:text-white leading-[1.2] mb-6">
              Committed to <span className="text-[#4DA6FF]">Hygiene & Safety</span>
            </h2>


            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {safetyStandards.map((item, idx) => (
                <div key={idx} className="bg-[#F8FCFF] dark:bg-[#111827] border border-[#DFF3FF] dark:border-gray-800 p-6 rounded-2xl hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 rounded-full bg-[#4DA6FF] text-white flex items-center justify-center mb-4">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <h4 className="font-bold text-[#1E2A4A] dark:text-gray-200 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
