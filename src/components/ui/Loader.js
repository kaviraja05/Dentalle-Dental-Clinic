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
            
            {/* Center Logo */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center p-8 md:p-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img 
                src="/images/logo/logo.png" 
                alt="Dentelle Loader" 
                className="w-full h-full object-contain drop-shadow-md" 
              />
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
