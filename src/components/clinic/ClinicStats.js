"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function ClinicStats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { value: 5000, suffix: "+", label: "Happy Patients" },
    { value: 12, suffix: "+", label: "Years Experience" },
    { value: 98, suffix: "%", label: "Satisfaction Rate" },
    { value: 10000, suffix: "+", label: "Treatments Completed" }
  ];

  return (
    <section className="py-10 md:py-10 bg-white dark:bg-[var(--color-bg-main)]">
      <div className="section-container" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * idx }}
              className="bg-[#DFF3FF]/50 dark:bg-[#4DA6FF]/10 rounded-3xl p-8 text-center flex flex-col justify-center border border-[#DFF3FF] dark:border-[#4DA6FF]/20"
            >
              <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-[#4DA6FF] mb-2">
                {inView ? (
                  <CountUp end={stat.value} duration={2.5} separator="," />
                ) : (
                  "0"
                )}
                <span className="text-[#3391F0]">{stat.suffix}</span>
              </h3>
              <p className="text-[#1E2A4A] dark:text-gray-200 font-medium md:text-lg">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
