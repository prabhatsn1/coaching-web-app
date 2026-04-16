import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/sections/HeroSection";
import CoursesPreviewSection from "@/components/sections/CoursesPreviewSection";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialsPreviewSection from "@/components/sections/TestimonialsPreviewSection";
import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — full-screen animated entrance */}
      <HeroSection />

      {/* 2. Why Choose Us — quick value propositions */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-14">
              Why Apex Academy?
            </h2>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Targeted Preparation",
                desc: "Curriculum built around exam patterns, not just textbooks. Every class has a purpose.",
              },
              {
                icon: "🧑‍🏫",
                title: "Expert Faculty",
                desc: "Learn from IIT/AIIMS alumni with decades of coaching experience and a track record of top rankers.",
              },
              {
                icon: "📊",
                title: "Data-Driven Progress",
                desc: "Regular tests and performance analytics help students identify and fix weak areas fast.",
              },
              {
                icon: "🏡",
                title: "Hybrid Learning",
                desc: "Attend physically or online — our hybrid model ensures no student is left behind.",
              },
              {
                icon: "💬",
                title: "Daily Doubt Sessions",
                desc: "No question goes unanswered. Daily dedicated doubt-clearing sessions at every branch.",
              },
              {
                icon: "🎖️",
                title: "Scholarship Program",
                desc: "Top Diagnostic Test performers earn fee waivers of up to 100%. Merit should never be limited by budget.",
              },
            ].map((item, i) => (
              <FadeInWhenVisible
                key={item.title}
                delay={i * 0.08}
                direction="up"
              >
                <div className="flex gap-4 p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-md hover:border-indigo-200 transition-all duration-300">
                  <span className="text-3xl shrink-0">{item.icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Courses Preview */}
      <CoursesPreviewSection />

      {/* 4. Stats Counter */}
      <StatsSection />

      {/* 5. Testimonials Preview */}
      <TestimonialsPreviewSection />

      {/* 6. CTA Banner */}
      <section className="py-20 bg-white">
        <FadeInWhenVisible>
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Ready to Begin Your Journey?
            </h2>
            <p className="mt-4 text-gray-500 text-lg">
              Take the free Apex Diagnostic Test and get a personalised study
              plan — no obligations.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/apply"
                className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
              >
                Apply Now — It&apos;s Free
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-gray-200 text-gray-700 font-bold rounded-xl hover:border-indigo-300 hover:text-indigo-600 transition-all"
              >
                Talk to a Counsellor
              </Link>
            </div>
          </div>
        </FadeInWhenVisible>
      </section>
    </>
  );
}
