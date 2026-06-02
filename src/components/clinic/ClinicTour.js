"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Play, X } from "lucide-react";

export default function ClinicTour() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoRef = useRef(null);

  const handlePlayClick = () => {
    setIsVideoOpen(true);
    if (videoRef.current) {
      videoRef.current.play();
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }
    }
  };

  return (
    <>
      <section className="py-10 md:py-10 bg-white dark:bg-[var(--color-bg-main)]">
        <div className="section-container" ref={ref}>
          <div className="text-center mb-12 md:mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="font-serif text-4xl md:text-5xl font-semibold text-[#0B1220] dark:text-white"
            >
              Take a Tour of Dentelle
            </motion.h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-video md:aspect-[21/9] rounded-[2.5rem] overflow-hidden shadow-2xl group cursor-pointer"
            onClick={handlePlayClick}
          >
            {/* Background Video */}
            <video 
              src="/videos/tour-bg.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            
            {/* Dark Overlay on hover */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white border border-white/50 group-hover:scale-110 group-hover:bg-[#4DA6FF] group-hover:border-[#4DA6FF] transition-all duration-500 shadow-xl">
                <Play size={40} className="ml-2" fill="currentColor" />
              </div>
            </div>
            
            {/* Placeholder Text */}
            <div className="absolute bottom-8 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
              <p className="text-white font-medium text-lg tracking-wide drop-shadow-md">Watch Full Video Tour</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Full Screen Video Modal (Always in DOM for synchronous fullscreen request) */}
      <div 
        className={`fixed inset-0 z-[99999] bg-black/95 flex items-center justify-center p-4 md:p-8 transition-opacity duration-300 ${isVideoOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <button 
          onClick={() => {
            setIsVideoOpen(false);
            if (videoRef.current) {
              videoRef.current.pause();
              if (document.fullscreenElement) {
                document.exitFullscreen().catch(err => console.log(err));
              }
            }
          }}
          className="absolute top-6 right-6 md:top-10 md:right-10 text-white/70 hover:text-white transition-colors z-50 p-2"
        >
          <X size={40} />
        </button>
        <div 
          className="w-full max-w-6xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl relative transition-transform duration-300"
          style={{ transform: isVideoOpen ? 'scale(1)' : 'scale(0.9)' }}
        >
          <video 
            ref={videoRef}
            src="/videos/tour-bg.mp4" 
            controls 
            className="w-full h-full outline-none"
          />
        </div>
      </div>
    </>
  );
}
