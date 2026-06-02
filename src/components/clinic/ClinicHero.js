"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export default function ClinicHero() {
  return (
    <section className="relative w-full pt-8 md:pt-16 pb-20 overflow-hidden bg-gradient-to-br from-[#F0F8FF] to-[#DFF3FF] dark:from-[#0B1220] dark:to-[#111827]">

      {/* Floating Blur Circles */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#4DA6FF] opacity-10 blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#A8D8FF] opacity-10 blur-[120px] pointer-events-none z-0"></div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-white/5 border border-white/40 dark:border-white/10 backdrop-blur-md w-max mb-6">
              <span className="w-2 h-2 rounded-full bg-[#4DA6FF] animate-pulse"></span>
              <span className="text-sm font-medium text-[#1E2A4A] dark:text-gray-300">Premium Dental Facility</span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-[#0B1220] dark:text-white leading-[1.1] mb-6">
              Modern Dentistry in a <span className="text-[#4DA6FF]">Comfortable</span> Environment
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-lg leading-relaxed">
              Experience the perfect blend of advanced dental technology, experienced professionals, and patient-centered care designed entirely around your comfort.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 bg-[#4DA6FF] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#3391F0] hover:shadow-lg transition-all duration-300"
              >
                <Calendar size={18} />
                Book Appointment
              </Link>
              <Link
                href="/services"
                className="flex items-center justify-center gap-2 bg-white/60 dark:bg-white/5 text-[#0B1220] dark:text-white px-8 py-4 rounded-full font-semibold border border-gray-200 dark:border-gray-800 hover:bg-white dark:hover:bg-white/10 hover:shadow-md transition-all duration-300"
              >
                Explore Services
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>

      {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative w-full aspect-[5/4] lg:aspect-[5/4] rounded-[2rem] overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-black/10 z-10"></div>
            <img
              src="/images/clinic/hero.jpg"
              alt="Dentelle Modern Clinic Interior"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Glassmorphism Badge */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/20 dark:bg-black/40 backdrop-blur-md border border-white/30 dark:border-white/10 rounded-2xl p-6 z-20 flex items-center justify-between">
              <div>
                <p className="text-white/80 text-sm font-medium mb-1">Clinic Status</p>
                <p className="text-white font-bold text-lg">Accepting New Patients</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-[#4DA6FF] flex items-center justify-center text-white shadow-lg">
                <ArrowRight size={20} className="-rotate-45" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
