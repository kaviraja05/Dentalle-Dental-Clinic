"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Microscope, Scan, ShieldCheck, Search, Lightbulb, Activity } from "lucide-react";

export default function ClinicTech() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const techFeatures = [
    {
      title: "Digital X-Ray",
      desc: "Low-radiation, high-resolution imaging for instant, precise diagnostics and safer patient care.",
      icon: Activity
    },
    {
      title: "Intraoral Scanner",
      desc: "Goodbye messy impressions. We use 3D digital scanners for comfortable, highly accurate dental molds.",
      icon: Scan
    },
    {
      title: "Modern Dental Chairs",
      desc: "Ergonomically designed luxury seating with built-in massage features to keep you relaxed during procedures.",
      icon: ShieldCheck // Using a generic icon, standard lucide doesn't have a chair
    },
    {
      title: "Sterilization Systems",
      desc: "Hospital-grade autoclaves and multi-step purification ensuring 100% sterile instruments for every patient.",
      icon: ShieldCheck
    },
    {
      title: "Precision Diagnostic Tools",
      desc: "Advanced cavity detection technology allowing us to catch and treat issues before they become painful.",
      icon: Search
    },
    {
      title: "Advanced Treatment Equipment",
      desc: "Quiet electric handpieces and laser dentistry tools for faster, quieter, and minimally invasive treatments.",
      icon: Microscope
    }
  ];

  return (
    <section className="py-10 md:py-10 relative bg-[url('/images/clinic/tech-bg.jpg')] bg-cover bg-fixed bg-center">
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-[#0B1220]/80 backdrop-blur-[2px] z-0"></div>

      <div className="section-container relative z-10" ref={ref}>
        <div className="text-center mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl font-semibold !text-white mb-6"
          >
            Advanced Technology & Equipment
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-300 text-lg max-w-2xl mx-auto"
          >
            We continually invest in the latest dental technology to make your treatments faster, safer, and completely painless.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {techFeatures.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * idx }}
                className="group p-8 rounded-3xl bg-[#0F172A]/80 backdrop-blur-xl border border-white/10 hover:border-[#4DA6FF]/40 hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(77,166,255,0.2)] hover:bg-[#15203B]/95"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#4DA6FF]/20 text-[#4DA6FF] flex items-center justify-center mb-6 group-hover:bg-[#4DA6FF] group-hover:text-white transition-colors duration-500">
                  <Icon size={28} />
                </div>
                <h3 className="font-serif text-2xl font-bold !text-white transition-colors duration-300 mb-3">
                  {tech.title}
                </h3>
                <p className="transition-colors duration-300 leading-relaxed text-[15px]" style={{ color: 'white' }}>
                  {tech.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
