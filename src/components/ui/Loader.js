"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g. 2 seconds)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(10px)", scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] bg-[var(--color-bg-main)] flex flex-col items-center justify-center"
        >
          {/* Custom Animated Premium Loader */}
          <div className="relative w-32 h-32 md:w-40 md:h-40 mb-8 flex items-center justify-center">
            {/* Outer Ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-[3px] border-[var(--color-primary)] border-t-transparent opacity-30"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            />
            {/* Middle Ring */}
            <motion.div
              className="absolute inset-3 md:inset-4 rounded-full border-[3px] border-[var(--color-primary)] border-b-transparent border-l-transparent opacity-60"
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />
            {/* Inner Ring */}
            <motion.div
              className="absolute inset-6 md:inset-8 rounded-full border-[3px] border-[var(--color-primary)] border-r-transparent"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
            
            {/* Center Logo / Animated Tooth */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center p-8 md:p-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-20 h-20 md:w-24 md:h-24 drop-shadow-md overflow-visible">
                  {/* Tooth Body */}
                  <path 
                    d="M 25 40 C 25 15, 45 15, 50 25 C 55 15, 75 15, 75 40 C 75 60, 65 75, 65 90 C 65 98, 55 98, 50 80 C 45 98, 35 98, 35 90 C 35 75, 25 60, 25 40 Z" 
                    fill="white" 
                    stroke="var(--color-primary)" 
                    strokeWidth="3.5" 
                    strokeLinejoin="round"
                  />
                  {/* Eyes */}
                  <circle cx="40" cy="45" r="3.5" fill="var(--color-primary)" />
                  <circle cx="60" cy="45" r="3.5" fill="var(--color-primary)" />
                  {/* Smile */}
                  <path d="M 45 55 Q 50 62 55 55" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" />
                  
                  {/* Sparkles */}
                  <motion.g
                    animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <path d="M 15 20 Q 20 20 20 15 Q 20 20 25 20 Q 20 20 20 25 Q 20 20 15 20 Z" fill="var(--color-primary)" />
                  </motion.g>
                  <motion.g
                    animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 1.5, delay: 0.75 }}
                  >
                    <path d="M 75 25 Q 80 25 80 20 Q 80 25 85 25 Q 80 25 80 30 Q 80 25 75 25 Z" fill="var(--color-primary)" />
                  </motion.g>

                  {/* Animated Hand with Toothbrush */}
                  <motion.g
                    initial={{ x: -8, y: 6, rotate: -5 }}
                    animate={{ x: 8, y: -6, rotate: 5 }}
                    transition={{ 
                      repeat: Infinity, 
                      repeatType: "reverse",
                      duration: 0.35, 
                      ease: "easeInOut" 
                    }}
                  >
                    {/* Toothbrush Handle */}
                    <rect x="50" y="45" width="45" height="7" rx="3.5" fill="var(--color-primary)" transform="rotate(-25 50 45)" />
                    {/* Toothbrush Head */}
                    <rect x="33" y="43" width="20" height="11" rx="3.5" fill="var(--color-primary)" transform="rotate(-25 50 45)" />
                    {/* Bristles */}
                    <path d="M 36 54 L 36 62 M 40 54 L 40 62 M 44 54 L 44 62 M 48 54 L 48 62" stroke="white" strokeWidth="3" strokeLinecap="round" transform="rotate(-25 50 45)" />
                    {/* Hand (Cartoon circle) holding brush */}
                    <circle cx="75" cy="35" r="8" fill="white" stroke="var(--color-primary)" strokeWidth="2.5" />
                  </motion.g>
                </svg>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-serif text-[var(--color-text-heading)] flex items-center space-x-1"
          >
            <span>Dentelle</span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              .
            </motion.span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}
            >
              .
            </motion.span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }}
            >
              .
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
