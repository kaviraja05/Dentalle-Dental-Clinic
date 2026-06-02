"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(true); // Default true, then check

  useEffect(() => {
    // Check if device is touch capable or small screen
    const checkMobile = () => {
      const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
      const isSmallScreen = window.innerWidth < 768;
      setIsMobile(isTouch || isSmallScreen);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      // Check if hovering over interactive elements
      const target = e.target;
      const isInteractive = target.closest('a') || target.closest('button') || target.closest('.hover-target');
      setIsHovering(!!isInteractive);
    };

    if (!isMobile) {
      window.addEventListener("mousemove", updateMousePosition);
      window.addEventListener("mouseover", handleMouseOver);
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isMobile]);

  // Don't render anything on mobile/touch devices
  if (isMobile) return null;

  return (
    <>
      {/* Small dot that exactly follows cursor */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-[var(--color-primary)] rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 0 : 1, // Disappear when hovering interactive elements
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />

      {/* Larger circle that trails slightly */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-[var(--color-primary)] rounded-full pointer-events-none z-50 mix-blend-difference flex items-center justify-center"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? "rgba(77, 166, 255, 0.2)" : "rgba(77, 166, 255, 0)",
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      />
    </>
  );
}
