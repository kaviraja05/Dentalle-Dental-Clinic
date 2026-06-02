"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AboutCareRoutine() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const steps = [
    {
      num: 1,
      title: "Outer Surfaces",
      desc: "Place your brush at a 45-degree angle to the gums. Gently move the brush back and forth in short strokes.",
      img: "/images/about/step-1.jpg"
    },
    {
      num: 2,
      title: "Inner Surfaces",
      desc: "Brush the inner surfaces of your teeth, focusing on the gum line where plaque accumulates.",
      img: "/images/about/step-2.jpg"
    },
    {
      num: 3,
      title: "Chewing Surfaces",
      desc: "Brush the chewing surfaces of your teeth with a firm, back-and-forth motion.",
      img: "/images/about/step-3.jpg"
    },
    {
      num: 4,
      title: "Behind Front Teeth",
      desc: "Tilt the brush vertically and make several up-and-down strokes to clean the inside of your front teeth.",
      img: "/images/about/step-4.jpg"
    },
    {
      num: 5,
      title: "Clean The Tongue",
      desc: "Gently brush your tongue to remove bacteria and keep your breath fresh.",
      img: "/images/about/step-5.jpg"
    }
  ];

  return (
    <section className="py-10 md:py-10 bg-[#F8FCFF] dark:bg-[var(--color-bg-secondary)] overflow-hidden">
      <div className="section-container" ref={ref}>
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <div className="inline-block bg-[#D3EFFF] text-[var(--color-primary)] px-4 py-1.5 rounded-full text-sm font-medium mb-4 dark:bg-[var(--color-primary)]/20 dark:text-[var(--color-primary)]">
            Dental Education
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#0B1220] dark:text-white leading-[1.2]">
            Proper Brushing Technique
          </h2>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full h-[400px] lg:h-[550px] relative flex justify-center items-center"
          >
            <motion.img 
              src="/images/about/step-1.jpg.jpg" 
              alt="Proper Brushing Technique" 
              className="w-[300px] lg:w-[350px] h-[400px] lg:h-[550px] object-cover rounded-3xl border-4 border-[var(--color-primary)] shadow-2xl"
              animate={isDesktop ? { y: [-10, 10, -10] } : {}}
              transition={isDesktop ? { repeat: Infinity, duration: 4, ease: "easeInOut" } : {}}
            />
          </motion.div>

          {/* Right Side: Automatically Scrolling Steps on Desktop, Manual on Mobile */}
          <div className="relative h-[400px] lg:h-[550px] overflow-hidden rounded-2xl mask-image-vertical">
            <motion.div
              animate={isDesktop ? { y: [0, -1000] } : { y: 0 }}
              transition={isDesktop ? {
                repeat: Infinity,
                ease: "linear",
                duration: 20,
              } : {}}
              className={`flex flex-col gap-6 pb-6 h-full ${!isDesktop ? "overflow-y-auto pr-2" : ""}`}
            >
              {(isDesktop ? [...steps, ...steps] : steps).map((step, idx) => (
                <div 
                  key={idx} 
                  className="bg-white dark:bg-[var(--color-bg-card)] border border-gray-200 dark:border-gray-800 rounded-2xl p-6 flex items-start gap-6 shadow-sm hover:shadow-md transition-shadow shrink-0"
                >
                  <div className="w-14 h-14 rounded-full bg-[#EBF6FF] dark:bg-[#4DA6FF]/10 text-[var(--color-primary)] flex flex-shrink-0 items-center justify-center font-serif text-xl font-bold border border-[#DFF3FF] dark:border-[#4DA6FF]/20">
                    0{step.num}
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#0B1220] dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
