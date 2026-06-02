"use client";

import { motion } from "framer-motion";
import React from "react";

export default function Marquee({ children, speed = 20, className = "" }) {
  return (
    <div className="relative flex overflow-hidden whitespace-nowrap mask-image-horizontal">
      <motion.div
        className={`flex w-max min-w-full ${className}`}
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        {/* Render children twice to ensure seamless looping. */}
        <div className={`flex shrink-0 items-center ${className}`}>
            {children}
        </div>
        <div className={`flex shrink-0 items-center ${className}`}>
            {children}
        </div>
      </motion.div>
    </div>
  );
}
