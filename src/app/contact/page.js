"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const formSectionRef = useRef(null);

  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);


  const scrollToForm = () => {
    formSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Text animation variant
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 } // Faster for better word-by-word effect
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const titleText = "We’re Here to Help You Smile".split(" ");
  const bodyText = "Your smile is more than just a feature—it’s a reflection of your confidence, comfort, and well-being. We’re committed to making every visit a positive step toward a brighter smile.".split(" ");

  const onSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setResult("Sending message...");

    const formData = new FormData(event.target);

    formData.append(
      "access_key",
      "6ef2494d-f2e3-49ec-b4ef-fd621bbd1d31"
    );

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
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-[var(--color-bg-secondary)]">

        <div className="absolute inset-0 max-w-7xl mx-auto w-full pointer-events-none">
          {/* Left Side Image Container */}
          <motion.div
            animate={{ y: [-10, 10, -10], rotate: [-6, -10, -6] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="hidden md:block absolute -left-4 md:left-0 lg:left-8 xl:left-12 top-1/2 -translate-y-1/2 w-32 h-48 md:w-36 md:h-52 lg:w-56 lg:h-72 rounded-2xl overflow-hidden opacity-30 md:opacity-30 lg:opacity-80 shadow-xl pointer-events-none lg:pointer-events-auto"
          >
            {/* using standard img to prevent next/image 404 console errors if not uploaded yet */}
            <img
              src="/images/contact/hero-left.jpg"
              alt="Left decoration"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right Side Image Container */}
          <motion.div
            animate={{ y: [10, -10, 10], rotate: [6, 10, 6] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="hidden md:block absolute -right-4 md:right-0 lg:right-8 xl:right-12 top-1/2 -translate-y-1/2 w-32 h-48 md:w-36 md:h-52 lg:w-56 lg:h-72 rounded-2xl overflow-hidden opacity-30 md:opacity-30 lg:opacity-80 shadow-xl pointer-events-none lg:pointer-events-auto"
          >
            <img
              src="/images/contact/hero-right.jpg"
              alt="Right decoration"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <div className="relative z-10 text-center max-w-2xl px-6">
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="heading-primary font-semibold mb-6"
          >
            {titleText.map((word, index) => (
              <motion.span key={index} variants={textVariants} className="inline-block mr-2">
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-sub mx-auto mb-10"
          >
            {bodyText.map((word, index) => (
              <motion.span key={index} variants={textVariants} className="inline-block mr-1">
                {word}
              </motion.span>
            ))}
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            onClick={scrollToForm}
            className="btn-primary"
          >
            Book a call
          </motion.button>
        </div>
      </section>

      {/* 2. Contact Cards & Form Layout */}
      <section ref={formSectionRef} className="py-12 bg-[var(--color-bg-secondary)]">
        <div className="section-container max-w-5xl mx-auto">

          {/* Top 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
            <div className="bg-white dark:bg-[var(--color-bg-card)] p-8 rounded-3xl border border-[var(--color-border-color)] shadow-sm">
              <h3 className="font-serif text-2xl text-[var(--color-text-heading)] font-semibold mb-2">Email</h3>
              <p className="text-[var(--color-text-body)]">uiuxocean@gmail.com</p>
            </div>
            <div className="bg-white dark:bg-[var(--color-bg-card)] p-8 rounded-3xl border border-[var(--color-border-color)] shadow-sm">
              <h3 className="font-serif text-2xl text-[var(--color-text-heading)] font-semibold mb-2">Phone</h3>
              <p className="text-[var(--color-text-body)]">+91 95744 68870</p>
            </div>
            <div className="bg-white dark:bg-[var(--color-bg-card)] p-8 rounded-3xl border border-[var(--color-border-color)] shadow-sm">
              <h3 className="font-serif text-2xl text-[var(--color-text-heading)] font-semibold mb-2">Address</h3>
              <p className="text-[var(--color-text-body)]">Ahmedabad, India</p>
            </div>
          </div>

          {/* Two-Sided Section with blue border and single screen alignment */}
          <div className="grid grid-cols-1 lg:grid-cols-2 bg-white dark:bg-[var(--color-bg-card)] rounded-[2rem] border-2 border-blue-200 dark:border-[var(--color-primary)]/30 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] max-w-5xl mx-auto">

            {/* Left: Business Hours */}
            <div className="p-6 md:p-8 lg:p-10 lg:pr-12 border-b lg:border-b-0 lg:border-r border-[var(--color-border-color)]">
              <h3 className="font-serif text-2xl font-semibold text-[var(--color-text-heading)] mb-2">Business Hours</h3>
              <p className="text-[var(--color-text-body)] text-sm mb-6">Book your Appointment Today</p>

              <div className="space-y-4">
                {/* Mon */}
                <div className="flex justify-between items-center border-b border-[var(--color-border-color)] pb-2">
                  <span className="font-medium text-[var(--color-text-heading)] text-sm">Monday</span>
                  <span className="text-[var(--color-text-body)] text-sm">10:00 AM - 07:00 PM</span>
                </div>
                {/* Tue */}
                <div className="flex justify-between items-center border-b border-[var(--color-border-color)] pb-2">
                  <span className="font-medium text-[var(--color-text-heading)] text-sm">Tuesday</span>
                  <span className="text-[var(--color-text-body)] text-sm">10:00 AM - 07:00 PM</span>
                </div>
                {/* Wed */}
                <div className="flex justify-between items-center border-b border-[var(--color-border-color)] pb-2">
                  <span className="font-medium text-[var(--color-text-heading)] text-sm">Wednesday</span>
                  <span className="text-[var(--color-text-body)] text-sm">10:00 AM - 07:00 PM</span>
                </div>
                {/* Thu */}
                <div className="flex justify-between items-center border-b border-[var(--color-border-color)] pb-2">
                  <span className="font-medium text-[var(--color-text-heading)] text-sm">Thursday</span>
                  <span className="text-[var(--color-text-body)] text-sm">10:00 AM - 07:00 PM</span>
                </div>
                {/* Fri */}
                <div className="flex justify-between items-center border-b border-[var(--color-border-color)] pb-2">
                  <span className="font-medium text-[var(--color-text-heading)] text-sm">Friday</span>
                  <span className="text-[var(--color-text-body)] text-sm">10:00 AM - 07:00 PM</span>
                </div>
                {/* Sat */}
                <div className="flex justify-between items-center border-b border-[var(--color-border-color)] pb-2">
                  <span className="font-medium text-[var(--color-text-heading)] text-sm">Saturday</span>
                  <span className="text-[var(--color-text-body)] text-sm">Closed</span>
                </div>
                {/* Sun */}
                <div className="flex justify-between items-center">
                  <span className="font-medium text-[var(--color-text-heading)] text-sm">Sunday</span>
                  <span className="text-[var(--color-text-body)] text-sm">Closed</span>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="p-6 md:p-8 lg:p-10 lg:pl-12 flex flex-col justify-center">
              <h3 className="font-serif text-2xl font-semibold text-[var(--color-text-heading)] mb-2">Let's Talk With Us</h3>
              <p className="text-[var(--color-text-body)] text-sm mb-6">Fill out the form — we'll get back to you shortly.</p>

              <form className="space-y-4" onSubmit={onSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[var(--color-text-heading)] mb-1">Name</label>
                  <input type="text" id="name" name="name" required placeholder="Enter Your Name" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[var(--color-bg-main)] border border-gray-200 dark:border-[var(--color-border-color)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-all text-sm" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text-heading)] mb-1">Email</label>
                  <input type="email" id="email" name="email" required placeholder="Enter Your Email" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[var(--color-bg-main)] border border-gray-200 dark:border-[var(--color-border-color)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-all text-sm" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--color-text-heading)] mb-1">Message</label>
                  <textarea id="message" name="message" rows="3" required placeholder="Enter a description.." className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[var(--color-bg-main)] border border-gray-200 dark:border-[var(--color-border-color)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-all resize-none text-sm"></textarea>
                </div>
                <button type="submit" disabled={loading} className="px-6 py-3 bg-[#1E293B] text-white rounded-full font-medium hover:bg-black transition-colors w-max shadow-md hover:shadow-lg text-sm mt-2">
                  {loading ? "Sending..." : "Send Message"}
                </button>
                {result && (
                  <p className="mt-4 text-sm font-medium text-[var(--color-primary)]">
                    {result}
                  </p>
                )}
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Google Maps */}
      <section className="h-[450px] w-full relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.03608971407!2d-74.30933232776687!3d40.697539959864436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1714571987556!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale dark:opacity-70 dark:invert contrast-125"
        ></iframe>
      </section>

    </div>
  );
}
