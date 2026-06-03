"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line
    setMounted(true);
  }, []);
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <footer className="bg-[#F4F9FD] dark:bg-[#0B1220] pt-20 pb-8 relative border-t border-[#E5E7EB] dark:border-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand - Span 4 */}
          <div className="md:col-span-12 lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="relative w-8 h-8">
                <Image
                  src="/images/logo/logo.png"
                  alt="Dentelle Logo"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              <span className="font-serif text-[22px] font-bold tracking-widest text-[#0B1220] dark:text-white">
                DENTELLE
              </span>
            </Link>
            <p className="text-[#6B7280] dark:text-gray-400 text-[13px] leading-[1.8] max-w-[280px]">
              Advanced dental care with modern technology and compassionate treatment. Your smile is our priority.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-[#6B7280] dark:text-gray-400 hover:text-[var(--color-primary)] transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="text-[#6B7280] dark:text-gray-400 hover:text-[var(--color-primary)] transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="text-[#6B7280] dark:text-gray-400 hover:text-[var(--color-primary)] transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="text-[#6B7280] dark:text-gray-400 hover:text-[var(--color-primary)] transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="font-serif text-[17px] text-[#0B1220] dark:text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-[#6B7280] dark:text-gray-400 hover:text-[var(--color-primary)] text-[13px]">Home</Link></li>
              <li><Link href="/about" className="text-[#6B7280] dark:text-gray-400 hover:text-[var(--color-primary)] text-[13px]">About Us</Link></li>
              <li><Link href="/services" className="text-[#6B7280] dark:text-gray-400 hover:text-[var(--color-primary)] text-[13px]">Services</Link></li>
              <li><Link href="/clinic" className="text-[#6B7280] dark:text-gray-400 hover:text-[var(--color-primary)] text-[13px]">Gallery</Link></li>
              <li><Link href="/contact" className="text-[#6B7280] dark:text-gray-400 hover:text-[var(--color-primary)] text-[13px]">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="font-serif text-[17px] text-[#0B1220] dark:text-white mb-6">Our Services</h4>
            <ul className="space-y-4">
              <li><Link href="/services" className="text-[#6B7280] dark:text-gray-400 hover:text-[var(--color-primary)] text-[13px]">Teeth Whitening</Link></li>
              <li><Link href="/services" className="text-[#6B7280] dark:text-gray-400 hover:text-[var(--color-primary)] text-[13px]">Dental Implants</Link></li>
              <li><Link href="/services" className="text-[#6B7280] dark:text-gray-400 hover:text-[var(--color-primary)] text-[13px]">Braces &amp; Aligners</Link></li>
              <li><Link href="/services" className="text-[#6B7280] dark:text-gray-400 hover:text-[var(--color-primary)] text-[13px]">Cosmetic Dentistry</Link></li>
              <li><Link href="/services" className="text-[#6B7280] dark:text-gray-400 hover:text-[var(--color-primary)] text-[13px]">Emergency Care</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="font-serif text-[17px] text-[#0B1220] dark:text-white mb-6">Contact Us</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin size={16} strokeWidth={1.5} className="text-[#4FA8F6] shrink-0 mt-0.5" />
                <span className="text-[#6B7280] dark:text-gray-400 text-[13px] leading-relaxed">
                  Dentelle Towers, Chennai, Tamil Nadu,<br /> 631 500
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} strokeWidth={1.5} className="text-[#4FA8F6] shrink-0" />
                <span className="text-[#6B7280] dark:text-gray-400 text-[13px]">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} strokeWidth={1.5} className="text-[#4FA8F6] shrink-0" />
                <span className="text-[#6B7280] dark:text-gray-400 text-[13px]">hello@dentelle.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#E5E7EB] dark:border-gray-800 flex flex-col md:flex-row justify-center items-center gap-2 relative">
          <div className="text-[12px] font-medium text-gray-500 dark:text-gray-400 flex flex-wrap justify-center items-center gap-1.5 z-10 bg-[#F4F9FD] dark:bg-[#0B1220] px-4">
            <span>All website content and copyright are the property and responsibility of</span>
            <span className="bg-[var(--color-primary)] text-white px-1.5 py-0.5 rounded-[4px] flex items-center mx-1">
              <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"></path></svg>
            </span>
            <span className="font-black text-gray-900 dark:text-white mr-2">Dentelle</span>
          </div>
        </div>
      </div>
      
      {/* Big Background text watermark matching NEXTGEN */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[140px] md:text-[200px] lg:text-[280px] font-black text-[#0B1220]/[0.03] dark:text-white/[0.02] whitespace-nowrap z-0 select-none pointer-events-none tracking-tighter w-full text-center overflow-hidden h-full flex items-center justify-center">
        DENTELLE
      </div>
    </footer>
  );
}
