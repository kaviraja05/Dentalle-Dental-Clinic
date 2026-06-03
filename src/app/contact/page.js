"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Phone, MessageCircle, Mail, Clock, MapPin, ArrowUpRight } from "lucide-react";

const TypingMessage = () => {
  const [text, setText] = useState("");
  const fullText = "Committed to Your Care, 24 Hours a Day";
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    if (isDeleting) {
      if (text === "") {
        setIsDeleting(false);
        timer = setTimeout(() => {}, 500);
      } else {
        timer = setTimeout(() => setText(fullText.substring(0, text.length - 1)), 50);
      }
    } else {
      if (text === fullText) {
        timer = setTimeout(() => setIsDeleting(true), 2500);
      } else {
        timer = setTimeout(() => setText(fullText.substring(0, text.length + 1)), 60);
      }
    }
    return () => clearTimeout(timer);
  }, [text, isDeleting, fullText]);

  return (
    <div className="relative bg-[#F8FCFF] dark:bg-[#111827] text-gray-900 dark:text-white px-4 py-3 rounded-2xl rounded-tl-sm text-[15px] font-medium border border-gray-200 dark:border-gray-800 shadow-sm w-fit max-w-full">
      <span className="italic">{text}</span>
      <span className="animate-pulse ml-0.5 inline-block w-[2px] h-[15px] bg-[var(--color-primary)] dark:bg-white align-middle"></span>
    </div>
  );
};

export default function ContactPage() {
  const formSectionRef = useRef(null);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const scrollToForm = () => {
    formSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult("Sending message...");

    const formData = new FormData(event.target);
    formData.append("access_key", "6ef2494d-f2e3-49ec-b4ef-fd621bbd1d31");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const data = await response.json();

      if (data.success) {
        setResult("✅ Message sent successfully!");
        event.target.reset();
      } else {
        setResult(data.message || "❌ Failed to send message.");
      }
    } catch (error) {
      setResult("❌ Something went wrong.");
    }
    setLoading(false);
  };

  return (
    <div className="bg-[var(--color-bg-main)] min-h-screen">
      
      {/* 1. Top Section / Hero */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden bg-white dark:bg-[var(--color-bg-main)]">
        {/* Background Image Container covering 3/4 of the right side */}
        <div className="absolute top-0 right-0 bottom-0 w-full md:w-full z-0">
          <img 
            src="/images/clinic/tech-bg.jpg" 
            alt="Clinic Background" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        {/* Gradient Overlay for Left Content */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-white via-white/75 to-transparent dark:from-[var(--color-bg-main)] dark:via-[var(--color-bg-main)]/95 dark:to-transparent w-full md:w-[70%]"></div>
        <div className="absolute inset-0 z-10 bg-white/60 dark:bg-black/60 md:hidden"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-20">
          <div className="max-w-2xl">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={textVariants} className="text-[var(--color-primary)] font-bold tracking-widest text-sm md:text-base uppercase mb-4 flex items-center gap-2">
                CONTACT US
              </motion.div>
              <motion.h1
                variants={textVariants}
                className="font-serif text-4xl md:text-5xl lg:text-[48px] font-semibold text-[#0B1220] dark:text-white leading-[1.15] mb-6"
              >
                We Provide Professional Dental Care, <span className="text-[var(--color-primary)]">Surgery and Aesthetics</span> for Modern Families.
              </motion.h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Contact Cards & Form Layout */}
      <section ref={formSectionRef} className="py-16 md:py-24 bg-[#F8FCFF] dark:bg-[var(--color-bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Info Cards & Map */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              
              {/* 4 Info Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                
                {/* Call Us */}
                <div className="bg-white dark:bg-[var(--color-bg-card)] p-6 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm flex items-center gap-5 hover:shadow-md transition-shadow group">
                  <div className="w-12 h-12 rounded-full bg-[#F0F7FF] dark:bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-base">Call Us</h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-0.5">+91 95744 68870</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="bg-white dark:bg-[var(--color-bg-card)] p-6 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm flex items-center gap-5 hover:shadow-md transition-shadow group">
                  <div className="w-12 h-12 rounded-full bg-[#E8F8EE] dark:bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-base">WhatsApp</h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-0.5">+91 95744 68870</p>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-white dark:bg-[var(--color-bg-card)] p-6 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm flex items-center gap-5 hover:shadow-md transition-shadow group">
                  <div className="w-12 h-12 rounded-full bg-[#FFF4ED] dark:bg-[#FF8A4C]/10 text-[#FF8A4C] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-base">Email</h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-0.5">hello@dentelle.com</p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-white dark:bg-[var(--color-bg-card)] p-6 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm flex items-center gap-5 hover:shadow-md transition-shadow group">
                  <div className="w-12 h-12 rounded-full bg-[#F4F0FF] dark:bg-[#9D71FD]/10 text-[#9D71FD] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Clock size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-base">Business Hours</h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-0.5">09:00 AM - 07:00 PM</p>
                  </div>
                </div>

              </div>

              {/* Map Card */}
              <div className="relative w-full h-[350px] md:h-[450px] rounded-3xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 bg-gray-200">
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-md text-[var(--color-primary)] font-semibold flex items-center gap-2 hover:bg-white transition-colors text-sm"
                >
                  Open in Maps <ArrowUpRight size={16} />
                </a>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.03608971407!2d-74.30933232776687!3d40.697539959864436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1714571987556!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </div>

            {/* Right Column: Contact Form Card */}
            <div className="lg:col-span-6 bg-white dark:bg-[var(--color-bg-card)] rounded-[2.5rem] p-8 md:p-10 shadow-lg border border-gray-100 dark:border-gray-800 h-full">
              <h3 className="font-serif text-2xl font-semibold text-[var(--color-text-heading)] mb-2">Let&apos;s Talk With Us</h3>
              
              <form className="space-y-6" onSubmit={onSubmit}>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      placeholder="John Doe" 
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#F8FCFF] dark:bg-[#111827] border border-gray-200 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all text-sm text-gray-900 dark:text-white placeholder-gray-400" 
                    />
                  </div>
                  
                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      placeholder="john@example.com" 
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#F8FCFF] dark:bg-[#111827] border border-gray-200 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all text-sm text-gray-900 dark:text-white placeholder-gray-400" 
                    />
                  </div>
                </div>

                {/* Interested Service */}
                <div className="space-y-2">
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Interested Service</label>
                  <input 
                    type="text" 
                    id="service" 
                    name="service" 
                    placeholder="e.g., Cosmetic Dentistry, Implants" 
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#F8FCFF] dark:bg-[#111827] border border-gray-200 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all text-sm text-gray-900 dark:text-white placeholder-gray-400" 
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Your Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="4" 
                    required 
                    placeholder="Tell us about your dental needs..." 
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#F8FCFF] dark:bg-[#111827] border border-gray-200 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all resize-none text-sm text-gray-900 dark:text-white placeholder-gray-400"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={loading} 
                  className="w-full py-4 bg-[var(--color-primary)] text-white rounded-full font-semibold hover:bg-[var(--color-primary-hover)] transition-all flex items-center justify-center gap-2 group shadow-lg hover:shadow-[var(--color-primary)]/30 mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send Message"}
                  {!loading && <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />}
                </button>
                
                {result && (
                  <p className="text-center text-sm font-medium text-[var(--color-primary)] mt-4">
                    {result}
                  </p>
                )}
              </form>

              {/* Support Status Widget */}
              <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-wrap sm:flex-nowrap items-end justify-between gap-4">
                
                {/* Left: Typing Message */}
                <div className="flex-1">
                  <h4 className="text-[11px] font-bold text-[var(--color-primary)] dark:text-[var(--color-primary)] tracking-[0.15em] uppercase mb-2 ml-1">Clinic Support</h4>
                  <TypingMessage />
                </div>
                
                {/* Right: Available Badge */}
                <div className="shrink-0 self-end">
                  <div className="flex items-center justify-center gap-2 px-3.5 py-1.5 bg-white dark:bg-[#111827] border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]"></div>
                    <span className="text-[11px] font-bold text-gray-900 dark:text-white tracking-widest">AVAILABLE</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
