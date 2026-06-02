"use client";

import Link from "next/link";
import { Play } from "lucide-react";
import ScrollReveal from "../ui/animations/ScrollReveal";
import { AnimatedButtonArrow } from "../ui/animations/HoverEffects";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative bg-[#F2F9FF] dark:bg-[var(--color-bg-secondary)] overflow-hidden pt-4 pb-4 md:pt-4 md:pb-10">
      <div className="section-container relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {/* Pill */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
            }}
          >
            <div className="inline-block bg-[#D3EFFF] text-[var(--color-primary)] px-4 py-1.5 rounded-full text-sm font-medium mb-6 dark:bg-[var(--color-primary)]/20 dark:text-[var(--color-primary)]">
              We are Here for You
            </div>
          </motion.div>

          <motion.h1
            variants={{
              hidden: { opacity: 0, x: -40 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
            }}
            className="font-serif text-4xl md:text-4xl lg:text-6xl font-semibold text-[#111827] dark:text-white leading-[1.2] mb-4 lg:mb-6"
          >
            Helping People Lead Healthy & Happy Lives
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, x: -40 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
            }}
            className="text-base md:text-base lg:text-lg text-gray-600 dark:text-gray-300 mb-6 lg:mb-8 max-w-lg"
          >
            Nisi molestie fusce quis eget vitae. Aliquam senectus id placerat egestas sed sed venenatis nisl. Tincidunt faucibus facilisi vestibulum et ut congue in eget. Augue purus hendrerit tempus consequat ut sit.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
            }}
          >
            <Link href="/contact" className="inline-block">
              <AnimatedButtonArrow className="px-6 py-3 lg:px-8 lg:py-4 bg-[var(--color-primary)] text-white font-medium rounded-full hover:bg-[var(--color-primary-hover)] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                Make Appointment
              </AnimatedButtonArrow>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Content - Image */}
        <motion.div
          initial={{
            x: 200,
            scale: 0.9,
            rotate: 2,
            filter: "blur(12px)",
            opacity: 0,
          }}
          animate={{
            x: 0,
            scale: 1,
            rotate: 0,
            filter: "blur(0px)",
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative h-[380px] sm:h-[450px] md:h-[450px] lg:h-[620px] w-full flex justify-center items-center mt-8 md:mt-0"
        >
          {/* Blue Circle */}
          <div
            className="
      absolute
      bottom-8
      sm:bottom-10
      md:bottom-6
      lg:bottom-14
      left-1/2
      -translate-x-1/2
      w-[260px]
      h-[260px]
      sm:w-[320px]
      sm:h-[320px]
      md:w-[280px]
      md:h-[280px]
      lg:w-[430px]
      lg:h-[430px]
      rounded-full
      bg-[var(--color-primary)]
      z-0
    "
          />

          {/* Doctor Image */}
          <img
            src="/images/home/hero-doctor.png"
            alt="Doctor smiling"
            className="
      relative
      z-10
      h-[100%]
      object-contain
      object-bottom
      -translate-y-4
      sm:-translate-y-6
      md:-translate-y-4
      lg:-translate-y-14
    "
          />
        </motion.div>
      </div>
    </section>
  );
}
