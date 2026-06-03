"use client";

import { Star } from "lucide-react";
import ScrollReveal from "../ui/animations/ScrollReveal";
import TextReveal from "../ui/animations/TextReveal";
import Marquee from "../ui/animations/Marquee";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "Patient",
      image: "/images/home/testimonial-1.jpg",
      text: "The most comfortable and professional dental experience I've ever had. Highly recommend Dentelle!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Patient",
      image: "/images/home/testimonial-2.jpg",
      text: "State of the art facility with a team that truly cares about your comfort and smile.",
      rating: 5
    },
    {
      name: "Emma Williams",
      role: "Patient",
      image: "/images/home/testimonial-3.jpg",
      text: "I used to fear the dentist, but this clinic completely changed my perspective. Painless and quick!",
      rating: 5
    },
    {
      name: "David Smith",
      role: "Patient",
      image: "/images/home/testimonial-1.jpg",
      text: "Incredible staff and amazing technology. The entire process was seamless from start to finish.",
      rating: 5
    },
    {
      name: "Olivia Martinez",
      role: "Patient",
      image: "/images/home/testimonial-2.jpg",
      text: "My family has been coming here for years. They always treat us with the utmost care and respect.",
      rating: 5
    },
    {
      name: "James Wilson",
      role: "Patient",
      image: "/images/home/testimonial-3.jpg",
      text: "A truly luxurious dental experience. I never thought I would say this, but I love going to the dentist!",
      rating: 5
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F8FCFF] dark:bg-[var(--color-bg-secondary)] overflow-hidden">
      <div>
        
        {/* Header */}
        <div className="section-container text-center mb-8 md:mb-16">
          <ScrollReveal direction="up" delay={0.1} distance={30}>
            <div className="inline-block bg-[#D3EFFF] text-[var(--color-primary)] px-4 py-1.5 rounded-full text-sm font-medium mb-4 dark:bg-[var(--color-primary)]/20 dark:text-[var(--color-primary)]">
              Client Reviews
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2} distance={30} className="flex justify-center">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#0B1220] dark:text-white">
              What <span className="text-[var(--color-primary)]">Our Patients</span> Say
            </h2>
          </ScrollReveal>
        </div>

        {/* Testimonials Horizontal Scrolling Grid */}
        <div className="relative w-full overflow-hidden py-0">
          <Marquee speed={35} className="gap-2">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="relative w-[200px] md:w-[300px] h-[250px] md:h-[400px] rounded-3xl overflow-hidden group shadow-lg cursor-pointer shrink-0 mx-2 md:mx-3"
              >
                {/* Background Image of the person */}
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-110"
                />
                
                {/* Overlay Gradient for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

                {/* Transparent Gray Box at the bottom */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/20 dark:bg-black/40 backdrop-blur-md border border-white/30 dark:border-white/10 rounded-2xl p-6 transform transition-transform duration-500 md:hover:-translate-y-2">
                  
                  {/* Star Rating */}
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-[#FFB800] text-[#FFB800]" />
                    ))}
                  </div>

                  {/* Text Content */}
                  <p className="text-white text-sm leading-relaxed mb-4 line-clamp-3">
                    &quot;{testimonial.text}&quot;
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center overflow-hidden">
                      <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="text-white font-bold font-serif text-sm">{testimonial.name}</div>
                      <div className="text-white/80 text-xs">{testimonial.role}</div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </Marquee>
        </div>

      </div>
    </section>
  );
}
