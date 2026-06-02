"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Stethoscope, Users, Award, Headphones } from "lucide-react";

export default function StatisticsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const stats = [
    {
      icon: <Stethoscope size={48} strokeWidth={1.5} />,
      num: 250,
      suffix: "+",
      label: "Qualified Doctors"
    },
    {
      icon: <Users size={48} strokeWidth={1.5} />,
      num: 3020,
      suffix: "+",
      label: "Satisfied Clients",
      separator: ","
    },
    {
      icon: <Award size={48} strokeWidth={1.5} />,
      num: 25,
      suffix: "+",
      label: "Award Winning"
    },
    {
      icon: <Headphones size={48} strokeWidth={1.5} />,
      num: 24,
      suffix: "/7",
      label: "Client Support"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-[#1DA1F2] dark:bg-[var(--color-primary-hover)] relative overflow-hidden" ref={ref}>
      
      {/* Background topographic lines or subtle texture (approximated with CSS radial gradients or SVG) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 divide-x-0 md:divide-x divide-white/20">
          
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="flex flex-col items-center text-center px-4"
            >
              <div className="text-white mb-6">
                {stat.icon}
              </div>
              <div className="font-serif text-5xl md:text-6xl font-bold text-white mb-2 tracking-tight flex items-center justify-center">
                {inView ? (
                  <CountUp 
                    end={stat.num} 
                    duration={2.5} 
                    separator={stat.separator || ""} 
                  />
                ) : "0"}
                <span className="text-3xl md:text-4xl ml-1 font-sans">{stat.suffix}</span>
              </div>
              <div className="text-white text-lg font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
