"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Smile, Coffee, FileText, HeartPulse } from "lucide-react";

export default function ClinicJourney() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      title: "Friendly Staff",
      desc: "Your journey to a beautiful smile begins the moment you walk through our doors. We&apos;ve designed every step of your experience to be comfortable, transparent, and completely centered around your needs.",
      icon: Smile
    },
    {
      title: "Relaxing Environment",
      desc: "Enjoy our soothing lounge with complimentary beverages, noise-canceling headphones, and calming aesthetics.",
      icon: Coffee
    },
    {
      title: "Personalized Plans",
      desc: "We take the time to explain your options and tailor every treatment to your specific goals and comfort levels.",
      icon: FileText
    },
    {
      title: "Gentle Dental Care",
      desc: "Our dentists use specialized techniques and anesthetics to ensure your procedures are virtually pain-free.",
      icon: HeartPulse
    }
  ];

  return (
    <section className="py-10 md:py-10 bg-[#F8FCFF] dark:bg-[var(--color-bg-secondary)] border-t border-[#DFF3FF] dark:border-gray-800">
      <div className="section-container" ref={ref}>
        <div className="text-center mb-16 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl font-semibold text-[#0B1220] dark:text-white mb-6"
          >
            Designed Around Your Comfort
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto"
          >
            We&apos;ve reimagined the traditional dental visit to create a patient journey that feels less like a clinic and more like a luxury spa experience.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * idx }}
                className="bg-white dark:bg-[var(--color-bg-main)] p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-transparent hover:border-[#DFF3FF] dark:border-gray-800 dark:hover:border-gray-700 group text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-[#F0F8FF] dark:bg-[#111827] text-[#4DA6FF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-[#1E2A4A] dark:text-gray-200 text-xl mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-[15px] leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
