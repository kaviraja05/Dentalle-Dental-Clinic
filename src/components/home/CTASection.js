"use client";

import Link from "next/link";
import ScrollReveal from "../ui/animations/ScrollReveal";
import TextReveal from "../ui/animations/TextReveal";
import { AnimatedButtonArrow } from "../ui/animations/HoverEffects";

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-bg-main)]">
      <div className="section-container w-full max-w-7xl mx-auto px-4 md:px-8">
        <ScrollReveal
          direction="none" // Scale + opacity handled by default if we tweak it, or just use direction="up"
          delay={0.1}
          className="relative overflow-hidden rounded-[2rem] md:rounded-[3rem] shadow-2xl"
        >
          {/* Background Image in the box */}
          <div className="absolute inset-0 bg-[url('/images/home/cta-bg.jpg')] bg-cover bg-center transition-transform duration-1000 hover:scale-105" />
          
          {/* Gradient Overlay (Darker on left, clear on right) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1220]/95 via-[#0B1220]/80 to-transparent" />

          {/* Content */}
          <div className="relative z-10 p-10 md:p-20 w-full md:w-3/5 text-left">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
             <span className="text-white">Ready for Your Best Smile?</span>
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-10 max-w-xl font-medium">
              Book your consultation today and take the first step towards a healthier, more confident you with our expert team.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <ScrollReveal direction="up" delay={0.4} distance={20}>
                <Link href="/contact" className="inline-block">
                  <AnimatedButtonArrow className="bg-[#4DA6FF] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#3391F0] shadow-xl w-fit">
                    Book Consultation
                  </AnimatedButtonArrow>
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
