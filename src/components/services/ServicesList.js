"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

export default function ServicesList() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
    rootMargin: "-50px"
  });

  const services = [
    {
      title: "General Dentistry",
      desc: "Our general dentistry services focus on maintaining optimal oral health through preventive care, early diagnosis, and effective treatments to keep your teeth and gums healthy for life.",
      bullets: [
        "Dental Checkups & Exams",
        "Professional Teeth Cleaning",
        "Digital X-Rays & Diagnostics",
        "Cavity Fillings",
        "Gum Care & Treatment"
      ],
      img: "/images/services/service-1.jpg",
      borderColor: "border-[#DFF3FF]", // Soft Accent Light Blue
      btnBg: "bg-[#DFF3FF]"
    },
    {
      title: "Cosmetic Dentistry",
      desc: "Enhance the beauty of your smile with our advanced cosmetic treatments designed to improve color, shape, alignment, and overall aesthetics.",
      bullets: [
        "Teeth Whitening",
        "Dental Veneers",
        "Smile Makeover",
        "Tooth Contouring & Reshaping",
        "Bonding & Cosmetic Fillings"
      ],
      img: "/images/services/service-2.jpg",
      borderColor: "border-[#4DA6FF]/40", // Primary Blue with opacity
      btnBg: "bg-[#4DA6FF]/10 text-[var(--color-primary)]"
    },
    {
      title: "Restorative Dentistry",
      desc: "Restore function, comfort, and confidence with durable solutions that repair damaged or missing teeth using modern restorative techniques.",
      bullets: [
        "Dental Implants",
        "Crowns & Bridges",
        "Dentures (Full & Partial)",
        "Inlays & Onlays",
        "Tooth Reconstruction"
      ],
      img: "/images/services/service-3.jpg",
      borderColor: "border-[#DFF3FF]",
      btnBg: "bg-[#DFF3FF]"
    },
    {
      title: "Orthodontic Treatment",
      desc: "Straighten your teeth and correct bite issues with personalized orthodontic solutions designed for comfort, effectiveness, and lasting results.",
      bullets: [
        "Metal & Ceramic Braces",
        "Clear Aligners",
        "Retainers",
        "Bite Correction",
        "Early Orthodontic Care"
      ],
      img: "/images/services/service-4.jpg",
      borderColor: "border-[#4DA6FF]/40",
      btnBg: "bg-[#4DA6FF]/10 text-[var(--color-primary)]"
    }
  ];

  // Custom Sunburst/Asterisk Icon for bullets
  const BulletIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700 dark:text-gray-300 mt-0.5 shrink-0">
      <path d="M12 2v20M17 5l-10 14M22 12H2M19 19L5 5" />
    </svg>
  );

  return (
    <section className="py-12 md:py-10 bg-white dark:bg-[var(--color-bg-main)]">
      <div className="section-container" ref={ref}>
        
        {/* Header (Optional if hero covers it, but keeping it for flow if needed, though reference image has it at the top. Let's put it at the very top of the list) */}
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-16 hidden">
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-[#0B1220] dark:text-white leading-[1.3]">
            We use modern techniques, high-quality materials, and personalized treatment plans to deliver long-lasting results
          </h2>
        </div>

        <div className="space-y-6 md:space-y-8">
          {services.map((service, idx) => {
            const isEven = idx % 2 === 0;
            
            const containerVariants = {
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.2,
                }
              }
            };
            
            const wordVariants = {
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 }
            };
            
            return (
              <motion.div 
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                whileHover="hover"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    transition: { duration: 0.8, ease: "easeOut" }
                  },
                  hover: {
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }
                }}
                className="relative group w-full rounded-[2rem] p-[4px] shadow-sm transition-transform duration-300"
              >
                
                {/* Glitter Flowing Border Background */}
                <div className="absolute inset-0 rounded-[2rem] overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <motion.div 
                     className="absolute -inset-[50%] bg-[conic-gradient(from_0deg,transparent_0%,rgba(77,166,255,0.8)_20%,transparent_50%)]"
                     animate={{ rotate: 360 }}
                     transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                   />
                </div>

                {/* Card Inner Content Container */}
                <div className={`relative z-10 w-full h-full rounded-[1.8rem] bg-white/90 dark:bg-[var(--color-bg-secondary)]/90 backdrop-blur-xl p-3 md:p-4 lg:p-6 flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 lg:gap-8 items-stretch border-[2px] ${service.borderColor} group-hover:border-transparent transition-colors duration-300`}>
                  
                  {/* Image Side */}
                  <div className="w-full lg:w-1/2 rounded-[1rem] overflow-hidden min-h-[200px] lg:min-h-[250px] relative shrink-0">
                    <img 
                      src={service.img} 
                      alt={service.title} 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>

                  {/* Content Side */}
                  <motion.div 
                    className="w-full lg:w-1/2 flex flex-col justify-center py-2 lg:py-4 lg:px-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#0B1220] dark:text-white mb-4">
                      {service.title.split(" ").map((word, i) => (
                        <motion.span key={i} variants={wordVariants} className="inline-block mr-[0.25em]">{word}</motion.span>
                      ))}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed text-[15px] md:text-base">
                      {service.desc.split(" ").map((word, i) => (
                        <motion.span key={i} variants={wordVariants} className="inline-block mr-[0.25em]">{word}</motion.span>
                      ))}
                    </p>
                    
                    <div className="space-y-4 mb-10">
                      {service.bullets.map((bullet, bIdx) => (
                        <motion.div key={bIdx} variants={wordVariants} className="flex items-start gap-3">
                          <BulletIcon />
                          <span className="text-gray-700 dark:text-gray-300 font-medium text-[15px]">{bullet}</span>
                        </motion.div>
                      ))}
                    </div>

                    <motion.div variants={wordVariants} className="mt-auto pt-4">
                      <Link 
                        href="/contact" 
                        className="inline-block px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 active:scale-95 bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] shadow-md hover:shadow-lg"
                      >
                        Book A Call
                      </Link>
                    </motion.div>
                  </motion.div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
