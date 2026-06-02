"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { X, ZoomIn } from "lucide-react";

export default function ClinicGallery() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: "/images/clinic/gallery-1.jpg", category: "Reception Area", style: "md:col-span-1 md:row-span-1 aspect-[4/3]" },
    { src: "/images/clinic/gallery-2.jpg", category: "Waiting Lounge", style: "md:col-span-1 md:row-span-1 aspect-[4/3]" },
    { src: "/images/clinic/gallery-3.jpg", category: "Consultation Room", style: "md:col-span-1 md:row-span-1 aspect-[4/3]" },
    { src: "/images/clinic/gallery-4.jpg", category: "Treatment Room", style: "md:col-span-1 md:row-span-1 aspect-[4/3]" },
    { src: "/images/clinic/gallery-6.jpg", category: "Treatment Room", style: "md:col-span-1 md:row-span-1 aspect-[4/3]" },
    { src: "/images/clinic/gallery-5.jpg", category: "Dental Equipment", style: "md:col-span-1 md:row-span-1 aspect-[4/3]" },
  ];

  return (
    <section className="py-10 md:py-10 bg-[#F8FCFF] dark:bg-[var(--color-bg-secondary)]">
      <div className="section-container" ref={ref}>

        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl font-semibold text-[#0B1220] dark:text-white mb-4"
          >
            Inside Dentelle
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Explore our modern dental environment.
          </motion.p>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-18 auto-rows-[250px]">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{ willChange: "opacity, transform" }}
              className={`relative rounded-3xl overflow-hidden group cursor-pointer ${img.style}`}
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img.src}
                alt={img.category}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500 flex flex-col items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 text-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white mx-auto mb-3">
                    <ZoomIn size={24} />
                  </div>
                  <p className="text-white font-medium tracking-wider uppercase text-sm">
                    {img.category}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Preview */}
      {typeof document !== "undefined" && createPortal(
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-12"
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X size={40} />
              </button>

              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="relative w-full max-w-6xl max-h-full flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.category}
                  className="w-full max-h-[85vh] object-contain rounded-lg"
                />
                <div className="text-center mt-6">
                  <p className="text-white text-xl font-medium font-serif">{selectedImage.category}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
