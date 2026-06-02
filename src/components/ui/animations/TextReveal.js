"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export default function TextReveal({
  text,
  as: Component = "p",
  className = "",
  delay = 0,
  duration = 0.8,
  staggerDelay = 0.05,
  once = true,
}) {
  // Simple word split, wrapping each word in an inline-block for line-by-line flowing effect
  // A true line-by-line requires splitting by exact DOM lines which is complex in React without external libs like SplitType
  // Word splitting with `overflow-hidden` on parents usually achieves the requested cinematic effect.
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: staggerDelay, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      filter: "blur(0px)",
      transition: {
        type: "tween",
        ease,
        duration,
      },
    },
    hidden: {
      opacity: 0,
      y: 20, // Move down slightly
      rotate: 2, // Slight rotate as per core requirements aesthetic
      filter: "blur(8px)", // Blur as per core requirements
    },
  };

  return (
    <Component className={className}>
      <motion.span
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: "-10%" }}
        className="flex flex-wrap"
      >
        {words.map((word, index) => (
          <span
            key={index}
            className="overflow-hidden pb-[0.2em] mr-[0.25em] inline-flex"
            style={{ display: "inline-flex" }}
          >
            <motion.span variants={child}>
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Component>
  );
}
