"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AboutTeam() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const team = [
    {
      name: "Dr. Savannah Nguyen",
      role: "Lead Orthodontist",
      img: "/images/about/team-1.png"
    },
    {
      name: "Dr. Jerome Bell",
      role: "Cosmetic Dentist",
      img: "/images/about/team-2.png"
    },
    {
      name: "Dr. Kathryn Murphy",
      role: "Pediatric Dentist",
      img: "/images/about/team-3.png"
    },
    {
      name: "Dr. Robert Fox",
      role: "Endodontist",
      img: "/images/about/team-2.png" // using placeholder since new images weren't uploaded
    },
    {
      name: "Dr. Esther Howard",
      role: "Periodontist",
      img: "/images/about/team-3.png"
    },
    {
      name: "Dr. Albert Flores",
      role: "Oral Surgeon",
      img: "/images/about/team-1.png"
    }
  ];

  return (
    <section className="py-10 md:py-10 bg-white dark:bg-[var(--color-bg-main)]">
      <div className="section-container" ref={ref}>
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block bg-[#D3EFFF] text-[var(--color-primary)] px-4 py-1.5 rounded-full text-sm font-medium mb-4 dark:bg-[var(--color-primary)]/20 dark:text-[var(--color-primary)]"
          >
            Our Team
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-semibold text-[#0B1220] dark:text-white"
          >
            Meet Our <span className="text-[var(--color-primary)]">Specialists</span>
          </motion.h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {team.map((member, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + (idx * 0.1) }}
              className="flex flex-col items-center group"
            >
              {/* Image Container with Blue Background Circle */}
              <div className="relative w-full max-w-[250px] aspect-square mx-auto mb-10 flex justify-center items-end mt-12">
                {/* The Blue Background */}
                <div className="absolute bottom-0 left-0 right-0 h-full rounded-full bg-[var(--color-primary)] transition-transform duration-500 group-hover:scale-105 z-0"></div>
                
                {/* The Doctor Image (transparent PNG) */}
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[110%] h-[130%] object-contain object-bottom z-10 transition-transform duration-500 group-hover:-translate-y-4"
                />
              </div>
              
              <h3 className="font-serif text-2xl font-bold text-[#0B1220] dark:text-white mb-2">
                {member.name}
              </h3>
              <p className="text-[var(--color-primary)] font-medium">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
