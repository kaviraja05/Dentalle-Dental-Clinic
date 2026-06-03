"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ScrollReveal from "../ui/animations/ScrollReveal";
import TextReveal from "../ui/animations/TextReveal";

export default function ProcessSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const steps = [
    {
      num: "01",
      title: "Make Appointment",
      desc: "Amet usem turpis vestm hendrerit vestibulum molestie quis. Egestas ultricies at placerat.",
      img: "/images/home/process-1.jpg"
    },
    {
      num: "02",
      title: "Get Consultant",
      desc: "Amet usem turpis vestm hendrerit vestibulum molestie quis. Egestas ultricies at placerat.",
      img: "/images/home/process-2.jpg"
    },
    {
      num: "03",
      title: "Take Treatment",
      desc: "Amet usem turpis vestm hendrerit vestibulum molestie quis. Egestas ultricies at placerat.",
      img: "/images/home/process-3.jpg"
    },
    {
      num: "04",
      title: "Get Relief",
      desc: "Amet usem turpis vestm hendrerit vestibulum molestie quis. Egestas ultricies at placerat.",
      img: "/images/home/process-4.jpg"
    }
  ];

  return (
    <section className="py-10 md:py-10 bg-white dark:bg-[var(--color-bg-main)] overflow-hidden relative">
      <div className="section-container" ref={ref}>
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <ScrollReveal direction="up" delay={0.1} distance={30}>
            <div className="inline-block bg-[#D3EFFF] text-[var(--color-primary)] px-4 py-1.5 rounded-full text-sm font-medium mb-4 dark:bg-[var(--color-primary)]/20 dark:text-[var(--color-primary)]">
              Our Working Process
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2} distance={30} className="flex justify-center">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#0B1220] dark:text-white">
              How We <span className="text-[var(--color-primary)]">Work</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Process Steps */}
        <div className="relative">
          
          {/* Animated SVG Dotted Flow Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-[100px] left-0 w-full h-[150px] z-0 pointer-events-none overflow-visible">
            <svg width="100%" height="100%" viewBox="0 0 1200 150" fill="none" preserveAspectRatio="none">
              <motion.path
                d="M 150 110 C 250 110, 300 20, 450 20 C 600 20, 650 110, 750 110 C 850 110, 950 20, 1050 20"
                stroke="#9CA3AF"
                strokeWidth="3"
                strokeDasharray="10 10"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={inView ? { pathLength: 1, opacity: 0.5 } : {}}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />
              <motion.path
                d="M 1030 10 L 1050 20 L 1030 30"
                stroke="#9CA3AF"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 0.5 } : {}}
                transition={{ delay: 2.5, duration: 0.5 }}
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, idx) => (
              <ScrollReveal 
                key={step.num}
                direction="up"
                delay={idx * 0.2}
                distance={40}
                className="flex flex-col items-center text-center"
              >
                {/* Image & Number Badge */}
                <div className="relative mb-8 w-48 h-48 md:w-56 md:h-56">
                  {/* Circular Image Container */}
                  <div className="w-full h-full rounded-full overflow-hidden bg-gray-200 shadow-lg border-4 border-white dark:border-[var(--color-bg-card)] relative z-10 transition-transform duration-500 hover:scale-105">
                    <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
                  </div>
                  {/* Number Badge overlapping top right */}
                  <div className="absolute top-0 right-0 w-12 h-12 md:w-14 md:h-14 bg-[var(--color-primary)] rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl border-4 border-white dark:border-[var(--color-bg-main)] z-20 shadow-md">
                    {step.num}
                  </div>
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-[#0B1220] dark:text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-[280px]">
                  {step.desc}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
