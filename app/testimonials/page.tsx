"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";
import SectionHeader from "@/components/ui/SectionHeader";
import content from "@/data/content-mock.json";

// This page uses client-side carousel state
export default function TestimonialsPage() {
  const { testimonials } = content;
  const [activeIndex, setActiveIndex] = useState(0);

  const active = testimonials[activeIndex];

  function prev() {
    setActiveIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  }

  function next() {
    setActiveIndex((i) => (i + 1) % testimonials.length);
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-linear-to-br from-indigo-950 to-purple-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <span className="inline-block px-3 py-1 rounded-full bg-indigo-800 text-indigo-200 text-xs font-semibold tracking-widest uppercase mb-4">
              Testimonials
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold">
              What Our Community Says
            </h1>
            <p className="mt-5 text-indigo-300 text-lg max-w-xl mx-auto">
              Real words from students and parents who experienced the Apex
              difference.
            </p>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Featured Carousel */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Featured" heading="In Their Own Words" />

          <div className="relative min-h-65">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="bg-linear-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: active.rating }).map((_, i) => (
                    <span key={i} className="text-amber-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>

                <p className="text-gray-700 text-lg leading-relaxed italic mb-6">
                  &ldquo;{active.quote}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
                    {active.initials}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{active.name}</p>
                    <p className="text-sm text-gray-500">
                      {active.role} — {active.relation}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border-2 border-indigo-200 text-indigo-600 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all flex items-center justify-center font-bold"
            >
              ‹
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === activeIndex ? "bg-indigo-600 w-6" : "bg-indigo-200"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border-2 border-indigo-200 text-indigo-600 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all flex items-center justify-center font-bold"
            >
              ›
            </button>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="All Reviews" heading="Every Story Matters" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <FadeInWhenVisible key={t.id} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full flex flex-col">
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <span key={s} className="text-amber-400 text-sm">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 mt-4 pt-3 border-t border-gray-50">
                    <div className="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xs">
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        {t.name}
                      </p>
                      <p className="text-xs text-gray-400">{t.relation}</p>
                    </div>
                  </div>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
