"use client";

import StaggerContainer, {
  staggerItemVariants,
} from "@/components/animations/StaggerContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";
import content from "@/data/content-mock.json";

export default function TestimonialsPreviewSection() {
  const preview = content.testimonials.slice(0, 3);

  return (
    <section className="py-20 bg-linear-to-br from-slate-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Testimonials"
          heading="What Our Students Say"
          subheading="Real stories from students and parents who chose Apex Academy."
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {preview.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={staggerItemVariants}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-amber-400 text-sm">
                    ★
                  </span>
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed flex-1">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-2 border-t border-gray-50">
                <div className="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xs">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-gray-400">
                    {testimonial.relation}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
