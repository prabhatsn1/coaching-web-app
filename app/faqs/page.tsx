"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";
import SectionHeader from "@/components/ui/SectionHeader";
import content from "@/data/content-mock.json";

export default function FAQsPage() {
  const { faqs } = content;
  const [openId, setOpenId] = useState<string | null>(null);

  function toggle(id: string) {
    setOpenId((prev) => (prev === id ? null : id));
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-linear-to-br from-indigo-950 to-indigo-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <span className="inline-block px-3 py-1 rounded-full bg-indigo-800 text-indigo-200 text-xs font-semibold tracking-widest uppercase mb-4">
              FAQs
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold">Frequently Asked Questions</h1>
            <p className="mt-5 text-indigo-300 text-lg max-w-xl mx-auto">
              Everything you need to know before joining Apex Academy.
            </p>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Accordion */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Questions" heading="We Have Answers" />

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FadeInWhenVisible key={faq.id} delay={i * 0.05}>
                <div
                  className={`border rounded-xl overflow-hidden transition-colors duration-200 ${
                    openId === faq.id
                      ? "border-indigo-300 shadow-sm shadow-indigo-100"
                      : "border-gray-100 hover:border-indigo-200"
                  }`}
                >
                  {/* Question trigger */}
                  <button
                    onClick={() => toggle(faq.id)}
                    aria-expanded={openId === faq.id}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-white hover:bg-indigo-50/40 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 text-sm leading-snug">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: openId === faq.id ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-indigo-500 text-xl font-light shrink-0"
                    >
                      +
                    </motion.span>
                  </button>

                  {/* Answer panel */}
                  <AnimatePresence initial={false}>
                    {openId === faq.id && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-indigo-100 pt-4">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>

          <FadeInWhenVisible delay={0.3}>
            <p className="mt-10 text-center text-gray-500 text-sm">
              Still have questions?{" "}
              <a href="/contact" className="text-indigo-600 font-semibold hover:underline">
                Contact us
              </a>{" "}
              — we&apos;re happy to help.
            </p>
          </FadeInWhenVisible>
        </div>
      </section>
    </>
  );
}
