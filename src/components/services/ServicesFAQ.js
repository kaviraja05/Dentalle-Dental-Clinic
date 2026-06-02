"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useInView } from "react-intersection-observer";

export default function ServicesFAQ() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [openIndex, setOpenIndex] = useState(0); // First one open by default

  const faqs = [
    {
      q: "How often should I visit the dentist for a checkup?",
      a: "For most people, we recommend visiting the dentist twice a year (every six months) for a professional cleaning and routine exam. However, if you have specific oral health issues like gum disease, we may suggest more frequent visits."
    },
    {
      q: "Do you accept dental insurance?",
      a: "Yes! We work with most major dental insurance providers. Our front desk team will happily help you verify your benefits, explain your coverage, and file claims on your behalf to maximize your benefits."
    },
    {
      q: "Is teeth whitening safe for my enamel?",
      a: "Absolutely. Professional teeth whitening administered by our dentists is completely safe. We use carefully formulated whitening agents that lift stains without damaging or eroding your natural tooth enamel."
    },
    {
      q: "What should I do in a dental emergency?",
      a: "If you experience a knocked-out tooth, severe pain, or bleeding, please contact our clinic immediately. We keep time available in our daily schedule to handle emergencies and get you out of pain as quickly as possible."
    },
    {
      q: "Do you offer options for anxious patients?",
      a: "We specialize in treating patients with dental anxiety. Beyond our calming luxury environment, we offer various sedation options (including nitrous oxide and oral conscious sedation) to ensure your visit is completely stress-free."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-10 md:py-10 bg-[#F8FCFF] dark:bg-[var(--color-bg-secondary)]">
      <div className="section-container" ref={ref}>
        
        {/* Center Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-[#D3EFFF] text-[var(--color-primary)] px-4 py-1.5 rounded-full text-sm font-medium mb-4 dark:bg-[var(--color-primary)]/20 dark:text-[var(--color-primary)]">
              Support
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#0B1220] dark:text-white leading-[1.2] mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Have questions about our services or treatments? Find your answers here or reach out to our team directly!
            </p>
          </motion.div>
        </div>

        {/* Center Questions Stack */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto w-full"
        >
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div 
                  key={idx} 
                  className={`border ${isOpen ? 'border-[var(--color-primary)] bg-white dark:bg-[var(--color-bg-card)] shadow-md' : 'border-gray-200 dark:border-gray-800 bg-white dark:bg-[var(--color-bg-main)]'} rounded-2xl overflow-hidden transition-all duration-300`}
                >
                  <button 
                    onClick={() => toggleFAQ(idx)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <span className={`font-semibold text-lg md:text-xl pr-8 ${isOpen ? 'text-[var(--color-primary)]' : 'text-[#0B1220] dark:text-gray-200'}`}>
                      {faq.q}
                    </span>
                    <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-[var(--color-primary)] text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-500'}`}>
                      {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-gray-800/50 mt-2">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
