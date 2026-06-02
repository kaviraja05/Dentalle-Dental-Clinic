"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function Footer() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setMounted(true);
  }, []);
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <footer className="bg-[var(--color-bg-secondary)] border-t border-[var(--color-border-color)] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-8 h-8 md:w-10 md:h-10">
                <Image
                  src="/images/logo/logo.png"
                  alt="Dentelle Logo"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              <span className="font-serif text-xl md:text-2xl font-bold tracking-wider text-[var(--color-text-heading)]">
                DENTELLE
              </span>
            </Link>
            <p className="text-[var(--color-text-body)] text-sm leading-relaxed mt-2">
              Advanced dental care with modern technology and compassionate treatment. Your smile is our priority.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-[var(--color-text-body)] hover:text-[var(--color-primary)] transition-colors">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="text-[var(--color-text-body)] hover:text-[var(--color-primary)] transition-colors">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a>
              <a href="#" className="text-[var(--color-text-body)] hover:text-[var(--color-primary)] transition-colors">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="text-[var(--color-text-body)] hover:text-[var(--color-primary)] transition-colors">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-[var(--color-text-heading)] mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="text-[var(--color-text-body)] hover:text-[var(--color-primary)] transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-[var(--color-text-body)] hover:text-[var(--color-primary)] transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-[var(--color-text-body)] hover:text-[var(--color-primary)] transition-colors">Services</Link></li>
              <li><Link href="/clinic" className="text-[var(--color-text-body)] hover:text-[var(--color-primary)] transition-colors">Our Clinic</Link></li>
              <li><Link href="/contact" className="text-[var(--color-text-body)] hover:text-[var(--color-primary)] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg text-[var(--color-text-heading)] mb-6">Our Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/services" className="text-[var(--color-text-body)] hover:text-[var(--color-primary)] transition-colors">Teeth Whitening</Link></li>
              <li><Link href="/services" className="text-[var(--color-text-body)] hover:text-[var(--color-primary)] transition-colors">Dental Implants</Link></li>
              <li><Link href="/services" className="text-[var(--color-text-body)] hover:text-[var(--color-primary)] transition-colors">Braces & Aligners</Link></li>
              <li><Link href="/services" className="text-[var(--color-text-body)] hover:text-[var(--color-primary)] transition-colors">Cosmetic Dentistry</Link></li>
              <li><Link href="/services" className="text-[var(--color-text-body)] hover:text-[var(--color-primary)] transition-colors">Emergency Care</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg text-[var(--color-text-heading)] mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                <span className="text-[var(--color-text-body)]">123 Smile Avenue, Dental District, NY 10001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-[var(--color-primary)] flex-shrink-0" />
                <span className="text-[var(--color-text-body)]">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-[var(--color-primary)] flex-shrink-0" />
                <span className="text-[var(--color-text-body)]">hello@dentelle.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[var(--color-border-color)] text-center text-sm text-[var(--color-text-body)] flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Dentelle Clinic. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-[var(--color-primary)] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[var(--color-primary)] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
