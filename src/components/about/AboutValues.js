"use client";

import { motion } from "framer-motion";
import { HandHeart, Lightbulb, Users, ShieldCheck } from "lucide-react";
import { useInView } from "react-intersection-observer";

export default function AboutValues() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const values = [
    {
      icon: <HandHeart size={24} />,
      title: "Compassionate and Gentle Care Always",
      desc: "We treat every patient with kindness, empathy, and respect"
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Excellence Through Innovation Always",
      desc: "We invest in modern tools and advanced technology"
    },
    {
      icon: <Users size={24} />,
      title: "Personalized Dedicated Attention Always",
      desc: "That's why we create custom treatment plans"
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Our Honesty, Trust, and Integrity Always",
      desc: "Transparency is the foundation of our practice"
    }
  ];

  return (
    <section className="py-10 md:py-10 bg-white dark:bg-[var(--color-bg-main)]">
      <div className="section-container" ref={ref}>
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl font-semibold text-[#0B1220] dark:text-white leading-[1.2] mb-6"
          >
            The Guiding Principles Behind Every Smile We Create
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed"
          >
            Everything we do is guided by principles that reflect our commitment to quality care, trust, and patient well-being.
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full h-[500px] lg:h-[700px] rounded-[2rem] overflow-hidden bg-gray-200"
          >
            <img 
              src="/images/about/values-doc.jpg" 
              alt="Dentist holding dentures" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right: Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {values.map((val, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                whileHover={{ y: -12, transition: { type: "spring", stiffness: 400, damping: 10 } }}
                transition={{ duration: 0.6, delay: 0.4 + (idx * 0.15) }}
                className="bg-white dark:bg-[var(--color-bg-card)] rounded-2xl p-8 border border-[var(--color-primary)]/30 dark:border-[var(--color-primary)]/40 shadow-sm hover:shadow-xl hover:border-[var(--color-primary)] dark:hover:border-[var(--color-primary)] transition-colors duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#F0F7FF] dark:bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center mb-6">
                  {val.icon}
                </div>
                <h4 className="font-serif text-xl font-bold text-[#0B1220] dark:text-white mb-3 leading-snug">
                  {val.title}
                </h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
