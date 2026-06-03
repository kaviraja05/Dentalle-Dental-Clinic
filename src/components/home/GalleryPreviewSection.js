"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Maximize2 } from "lucide-react";

const galleryImages = [
  { src: "/images/gallery/clinic-1.jpg", alt: "Modern Reception", colSpan: "col-span-1 md:col-span-2", rowSpan: "row-span-2" },
  { src: "/images/gallery/equipment.jpg", alt: "Advanced Equipment", colSpan: "col-span-1", rowSpan: "row-span-1" },
  { src: "/images/gallery/patient-smile.jpg", alt: "Happy Patient", colSpan: "col-span-1", rowSpan: "row-span-1" },
  { src: "/images/gallery/treatment-room.jpg", alt: "Treatment Room", colSpan: "col-span-1 md:col-span-2", rowSpan: "row-span-1" },
];

export default function GalleryPreviewSection() {
  return (
    <section className="bg-[var(--color-bg-main)]">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="heading-secondary">Experience <span className="text-[var(--color-primary)]">Dentelle</span></h2>
            <p className="text-[var(--color-text-body)] text-lg">
              Take a tour of our luxurious, state-of-the-art dental clinic.
            </p>
          </div>
          <Link href="/gallery" className="btn-secondary whitespace-nowrap hidden md:inline-flex">
            View Full Gallery
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer bg-gray-200 ${img.colSpan} ${img.rowSpan}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white flex flex-col items-center translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <Maximize2 size={32} className="mb-2 opacity-80" />
                  <span className="font-medium tracking-wider text-sm uppercase">{img.alt}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Link href="/gallery" className="btn-secondary w-full max-w-xs mx-auto">
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
