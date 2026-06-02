"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
  className = "",
  distance = 200,
  once = true,
}) {
  const getInitial = () => {
    switch (direction) {
      case "up":
        return { y: distance, x: 0, scale: 0.9, rotate: 2, filter: "blur(12px)", opacity: 0 };
      case "down":
        return { y: -distance, x: 0, scale: 0.9, rotate: -2, filter: "blur(12px)", opacity: 0 };
      case "left":
        return { x: distance, y: 0, scale: 0.9, rotate: 2, filter: "blur(12px)", opacity: 0 };
      case "right":
        return { x: -distance, y: 0, scale: 0.9, rotate: -2, filter: "blur(12px)", opacity: 0 };
      case "none":
        return { x: 0, y: 0, scale: 0.9, rotate: 0, filter: "blur(12px)", opacity: 0 };
      default:
        return { y: distance, x: 0, scale: 0.9, rotate: 2, filter: "blur(12px)", opacity: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={{
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
        filter: "blur(0px)",
        opacity: 1,
      }}
      viewport={{ once, margin: "-10%" }}
      transition={{
        duration,
        delay,
        ease,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
