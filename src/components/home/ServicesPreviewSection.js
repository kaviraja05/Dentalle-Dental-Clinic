"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import ScrollReveal from "../ui/animations/ScrollReveal";
import TextReveal from "../ui/animations/TextReveal";
import ParallaxScroll from "../ui/animations/ParallaxScroll";
import { GlowCard } from "../ui/animations/HoverEffects";

export default function ServicesPreviewSection() {
  const bullets = [
    "Painless, stress-free treatments",
    "State-of-the-art diagnostic technology",
    "Personalized care plans for every smile",
    "Uncompromising sterilization standards"
  ];

  return (
    <section className="py-10 md:py-10 bg-[#F8FCFF] dark:bg-[var(--color-bg-secondary)] overflow-hidden">
      <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Overlapping Images */}
        <div className="relative h-[500px] md:h-[600px] w-full">
          {/* Main Large Image (Back) */}
          <ScrollReveal direction="left" delay={0.2} className="absolute top-0 left-0 w-[75%] h-[75%] rounded-3xl overflow-hidden shadow-2xl bg-gray-200">
            <img src="/images/home/preview-1.jpg" alt="Modern clinic interior" className="w-full h-full object-cover" />
          </ScrollReveal>

          {/* Medium Overlapping Image (Bottom Right) */}
          <ParallaxScroll offset={40} className="absolute bottom-0 right-[5%] w-[55%] h-[60%] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-8 border-[#F8FCFF] dark:border-[var(--color-bg-secondary)] bg-gray-200 z-10">
            <img src="/images/home/preview-2.jpg" alt="Doctor with patient" className="w-full h-full object-cover" />
          </ParallaxScroll>

          {/* Floating Widget: 98% Satisfaction */}
          <ScrollReveal direction="down" delay={0.6} className="absolute top-[10%] right-[10%] md:right-[5%] z-20">
            <GlowCard className="rounded-2xl">
              <div className="p-4 md:p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-500">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <div className="text-xl font-bold text-[#111827] dark:text-white leading-none mb-1">98%</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">Patient Satisfaction</div>
                </div>
              </div>
            </GlowCard>
          </ScrollReveal>
        </div>

        {/* Right Side: Content */}
        <div>
          <ScrollReveal direction="up" delay={0.1} distance={30}>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#0B1220] dark:text-white leading-[1.2] mb-6">
              Redefining the <span className="text-[var(--color-primary)]">Dental Experience</span>
            </h2>
          </ScrollReveal>
          
          <TextReveal 
            as="p" 
            text="At Dentelle, we believe a visit to the dentist should be something you look forward to. We've combined clinical excellence with a spa-like atmosphere to completely transform how you experience dental care."
            className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed"
            delay={0.2}
          />

          <div className="space-y-4 mb-10">
            {bullets.map((bullet, idx) => (
              <ScrollReveal 
                key={idx}
                direction="left"
                delay={0.4 + (idx * 0.1)}
                distance={20}
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full border border-[var(--color-primary)] flex items-center justify-center text-[var(--color-primary)]">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">{bullet}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" delay={0.8} distance={20}>
            <Link href="/about" className="btn-primary inline-block">
              Our Story & Team
            </Link>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
