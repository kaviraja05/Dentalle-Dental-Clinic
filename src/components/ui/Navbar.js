"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, ArrowUpRight } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/clinic" },
  { name: "Contact us", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  const toggleTheme = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none transition-all duration-300"
    >
      <div className={`pointer-events-auto w-full max-w-7xl backdrop-blur-xl border border-gray-200/50 dark:border-gray-800/50 rounded-full px-4 sm:px-6 py-2 md:py-3 flex items-center justify-between shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 ${scrolled ? 'bg-white/95 dark:bg-black/95 shadow-lg' : 'bg-white/80 dark:bg-black/80'}`}>
        
        {/* Left: Logo */}
        <div className="flex-shrink-0 lg:flex-1 flex justify-start">
          <Link href="/" className="flex items-center space-x-2 md:space-x-3 z-50">
            <div className={`relative w-7 h-7 md:w-9 md:h-9 transition-all duration-300`}>
              <Image
                src="/images/logo/logo.png"
                alt="Dentelle Logo"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            <span className="font-serif text-lg md:text-xl font-semibold tracking-wider text-[#111827] dark:text-white">
              DENTELLE
            </span>
          </Link>
        </div>

        {/* Center: Desktop Nav Links */}
        <nav className="hidden lg:flex flex-1 justify-center items-center space-x-1 lg:space-x-4">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 text-[15px] font-medium transition-colors rounded-full whitespace-nowrap hover:text-[var(--color-primary)] ${
                  isActive 
                    ? "text-[var(--color-primary)] bg-[var(--color-primary)]/10" 
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right: Actions */}
        <div className="hidden lg:flex lg:flex-1 justify-end items-center space-x-4">
          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors shadow-sm"
              aria-label="Toggle Dark Mode"
            >
              {currentTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}

          {/* CTA Button */}
          <Link 
            href="/contact" 
            className="group flex items-center bg-[#111827] dark:bg-white text-white dark:text-[#111827] rounded-full pl-6 pr-2 py-2 transition-transform hover:scale-105"
          >
            <span className="text-sm font-semibold mr-3">Get Started</span>
            <div className="w-8 h-8 rounded-full bg-white/20 dark:bg-black/10 flex items-center justify-center group-hover:bg-white/30 dark:group-hover:bg-black/20 transition-colors overflow-hidden">
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center space-x-2">
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200"
            >
              {currentTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 rounded-full text-gray-700 dark:text-gray-200 focus:outline-none bg-gray-100 dark:bg-gray-800"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Slide-in Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="absolute top-20 left-4 right-4 bg-white/95 dark:bg-[#1A1A1A]/95 backdrop-blur-xl border border-gray-200/50 dark:border-gray-800/50 rounded-3xl shadow-2xl z-40 flex flex-col p-6 pointer-events-auto lg:hidden"
          >
            <nav className="flex flex-col space-y-2">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium px-4 py-3 rounded-2xl transition-colors ${
                    pathname === link.href
                      ? "bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-gray-100 dark:border-gray-800">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center w-full bg-[#111827] dark:bg-white text-white dark:text-[#111827] rounded-full py-4 shadow-md active:scale-95 transition-transform group"
                >
                  <span className="font-semibold mr-2">Get Started</span>
                  <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

