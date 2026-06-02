"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Our Clinic", href: "/clinic" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isAboutPage = pathname === "/about";
  const isServicesPage = pathname === "/services";
  const isTransparentOnDark = (isAboutPage || isServicesPage) && !scrolled;

  const toggleTheme = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
        ? "bg-white/70 dark:bg-black/70 backdrop-blur-xl border-b border-white/20 dark:border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] py-2"
        : "bg-transparent py-4"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Left: Logo */}
        <div className="flex-shrink-0 lg:flex-1 flex justify-start">
          <Link href="/" className="flex items-center space-x-3 z-50">
            <div className={`relative w-8 h-8 md:w-10 md:h-10 transition-all duration-300 ${isTransparentOnDark ? 'brightness-0 invert' : ''}`}>
              <Image
                src="/images/logo/logo.png"
                alt="Dentelle Logo"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            <span className={`font-serif text-xl md:text-2xl font-semibold tracking-wider transition-colors duration-300 ${isTransparentOnDark ? 'text-white' : 'text-[var(--color-text-heading)]'}`}>
              DENTELLE
            </span>
          </Link>
        </div>

        {/* Center: Desktop Nav Links */}
        <nav className="hidden lg:flex flex-1 justify-center items-center space-x-8">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-sm font-medium transition-colors hover:text-[var(--color-primary)] ${isActive ? "text-[var(--color-primary)]" : isTransparentOnDark ? "text-white/90 hover:text-white" : "text-[var(--color-text-heading)]"
                  }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--color-primary)]"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right: Actions */}
        <div className="hidden lg:flex lg:flex-1 justify-end items-center space-x-4">
          {/* Explicit Dark Mode Toggle */}
          {mounted && (
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${isTransparentOnDark ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-[var(--color-bg-secondary)] text-[var(--color-text-heading)] hover:bg-[var(--color-border-color)]'}`}
              aria-label="Toggle Dark Mode"
            >
              {currentTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}

          <Link href="/contact" className="btn-primary text-sm px-6 py-2.5">
            Book Appointment
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center space-x-4 z-50">
          {mounted && (
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${isTransparentOnDark ? 'bg-white/10 text-white' : 'bg-[var(--color-bg-secondary)] text-[var(--color-text-heading)]'}`}
            >
              {currentTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`focus:outline-none ${isTransparentOnDark && !isOpen ? 'text-white' : 'text-[var(--color-text-heading)]'}`}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Slide-in Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-y-0 right-0 w-64 bg-[var(--color-bg-card)] shadow-2xl z-40 flex flex-col pt-24 px-6 lg:hidden"
          >
            <nav className="flex flex-col space-y-6">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium ${pathname === link.href
                    ? "text-[var(--color-primary)]"
                    : "text-[var(--color-text-heading)]"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-[var(--color-border-color)]">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary block text-center w-full"
                >
                  Book Appointment
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
