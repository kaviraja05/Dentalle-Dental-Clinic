"use client";

import { motion } from "framer-motion";
import { UserCheck, Stethoscope, HeartHandshake, PhoneCall } from "lucide-react";

const features = [
  {
    icon: UserCheck,
    title: "Experienced Doctors",
    description: "Our team of specialists has over a decade of experience in advanced dental treatments.",
  },
  {
    icon: Stethoscope,
    title: "Modern Equipment",
    description: "We utilize the latest technology for precise diagnostics and comfortable procedures.",
  },
  {
    icon: HeartHandshake,
    title: "Comfortable Environment",
    description: "A calming, luxurious clinic designed to make your dental visit anxiety-free.",
  },
  {
    icon: PhoneCall,
    title: "Emergency Support",
    description: "24/7 priority support for urgent dental care and immediate assistance.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function WhyChooseUsSection() {
  return (
    <section className="bg-[var(--color-bg-secondary)]">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-secondary">Why Choose Dentelle</h2>
          <p className="text-sub mx-auto">
            Experience world-class dental care with a focus on your comfort and long-term oral health.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card-container text-center flex flex-col items-center group"
              >
                <div className="w-16 h-16 rounded-full bg-[var(--color-bg-main)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={28} className="text-[var(--color-primary)]" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[var(--color-text-heading)] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[var(--color-text-body)] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
