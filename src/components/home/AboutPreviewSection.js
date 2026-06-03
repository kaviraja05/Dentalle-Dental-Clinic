"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Trophy } from "lucide-react";
import ScrollReveal from "../ui/animations/ScrollReveal";
import TextReveal from "../ui/animations/TextReveal";

export default function AboutPreviewSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-[var(--color-bg-main)] overflow-hidden">
      <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Left Side: Images & Widget */}
        <div className="relative">

          {/* Main Image Mask */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative z-10 w-full aspect-square max-w-[500px] mx-auto overflow-hidden rounded-full transition-transform duration-700 hover:scale-[1.02]">
              <img
                src="/images/home/about-img.jpg"
                alt="Doctor smiling at patient"
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>

          {/* Floating Widget: 25+ Years Experience (Diamond Box) */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.8, rotate: 45 }}
            animate={inView ? { opacity: 1, scale: 1, rotate: 45 } : {}}
            whileHover={{ scale: 1.05, rotate: 45 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="absolute -bottom-12 md:-bottom-8 left-1/2 -translate-x-1/2 md:-translate-x-0 md:left-auto md:right-0 bg-white dark:bg-[var(--color-bg-card)] shadow-[0_15px_40px_rgba(0,0,0,0.1)] w-40 h-40 md:w-48 md:h-48 border-[6px] border-[#F2F9FF] dark:border-gray-800 z-30 flex items-center justify-center rounded-3xl"
          >
            {/* Content needs to be rotated back -45deg to stand upright */}
            <div className="-rotate-45 flex flex-col items-center justify-center text-center">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[var(--color-primary)] flex items-center justify-center bg-[#EBF6FF] dark:bg-[var(--color-primary)]/10 text-[var(--color-primary)] mb-1 md:mb-2">
                <Trophy className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="text-2xl md:text-3xl font-bold font-serif text-[#111827] dark:text-white mb-0.5">
                {inView ? <CountUp end={25} duration={2.5} /> : "0"}+
              </div>
              <div className="text-gray-500 dark:text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-wider">Years Of<br />Experience</div>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Content */}
        <div className="pt-20 sm:pt-24 lg:pt-0">
          <ScrollReveal direction="up" delay={0.1} distance={30}>
            <div className="inline-block bg-[#D3EFFF] text-[var(--color-primary)] px-4 py-1.5 rounded-full text-sm font-medium mb-6 dark:bg-[var(--color-primary)]/20 dark:text-[var(--color-primary)]">
              About Dentelle
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2} distance={30}>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0B1220] dark:text-white leading-[1.15] mb-6">
              Your Smile & Happiness <span className="text-[var(--color-primary)]">Is Our Mission</span>
            </h2>
          </ScrollReveal>

          <TextReveal
            as="p"
            text="Our health and hospital policy encompasses the strategies, guidelines, and practices that technology companies use to achieve their goals and objectives. The policies may vary depending on the company's size, market position, and competitive landscape. Commodo erat amet vitae consectetur consectetur feugiat."
            className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed"
            delay={0.4}
          />

          <TextReveal
            as="p"
            text="Tellus viverra eu risus ut ipsum magna sed odio elit. Sed sem purus tincidunt condimentum amet condimentum massa. Nunc vel nascetur id cras."
            className="text-gray-600 dark:text-gray-400 mb-10 leading-relaxed"
            delay={0.5}
          />

          <ScrollReveal direction="up" delay={0.8} distance={20} className="flex items-center gap-6 md:gap-12 pt-6 border-t border-gray-200 dark:border-gray-800">
            <div>
              <h4 className="font-serif text-2xl font-bold text-[#0B1220] dark:text-white mb-1">Savannah Nguyen</h4>
              <p className="text-gray-500 dark:text-gray-400 text-sm">CEO & Founder of Dentelle</p>
            </div>
            <div className="hidden sm:block h-12 w-auto opacity-70 dark:invert">
              {/* Signature Image */}
              <img src="/images/home/signature.png" alt="Signature" className="h-full object-contain" />
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
