"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import React from "react";

// Component for Hover Glow Effect
export const GlowCard = ({ children, className = "" }) => {
  return (
    <div className={`relative group ${className}`}>
      {/* Glow background */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-[inherit] blur-md opacity-0 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
      
      {/* Content */}
      <div className="relative h-full w-full rounded-[inherit] bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-black/5 dark:border-white/5">
        {children}
      </div>
    </div>
  );
};

// Component for Animated Border Tracing Effect
export const AnimatedBorder = ({ children, className = "" }) => {
  return (
    <div className={`relative overflow-hidden group ${className}`}>
      {/* Top and Bottom animated borders */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent -translate-x-full group-hover:animate-border-x"></div>
      <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-l from-transparent via-[var(--color-primary)] to-transparent translate-x-full group-hover:animate-border-x-reverse"></div>
      
      {/* Left and Right animated borders */}
      <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[var(--color-primary)] to-transparent -translate-y-full group-hover:animate-border-y"></div>
      <div className="absolute bottom-0 left-0 w-[1px] h-full bg-gradient-to-t from-transparent via-[var(--color-primary)] to-transparent translate-y-full group-hover:animate-border-y-reverse"></div>

      <div className="relative h-full w-full">
        {children}
      </div>
    </div>
  );
};

// Component for Icon Hover
export const AnimatedArrow = ({ className = "", size = 20 }) => {
  return (
    <motion.div
      className={`inline-flex items-center justify-center overflow-hidden w-8 h-8 rounded-full border border-black/10 dark:border-white/10 ${className}`}
      whileHover="hover"
      initial="initial"
    >
      <motion.div
        variants={{
          initial: { x: 0, y: 0, scale: 1, rotate: 0 },
          hover: { x: 4, y: -4, scale: 1.1, rotate: 10, transition: { type: "spring", stiffness: 300 } },
        }}
        className="flex items-center justify-center"
      >
        <ArrowUpRight size={size} />
      </motion.div>
    </motion.div>
  );
};

export const AnimatedButtonArrow = ({ children, className = "" }) => {
  return (
    <motion.button
      className={`group flex items-center gap-2 ${className}`}
      whileHover="hover"
    >
      {children}
      <motion.span
        variants={{
          hover: { x: 4, y: -4, scale: 1.1, rotate: 10 },
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <ArrowUpRight size={20} />
      </motion.span>
    </motion.button>
  );
};
