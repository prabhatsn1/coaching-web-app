"use client";

import Link from "next/link";
import StaggerContainer, {
  staggerItemVariants,
} from "@/components/animations/StaggerContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";
import content from "@/data/content-mock.json";

// This is a Server Component — no "use client" needed.
// StaggerContainer and motion elements handle their own client-side logic.
export default function CoursesPreviewSection() {
  const preview = content.courses.slice(0, 4);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Programs"
          heading="Our Flagship Courses"
          subheading="Choose from a wide range of expertly designed programs tailored to every student's goal."
        />

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {preview.map((course) => (
            <motion.article
              key={course.id}
              variants={staggerItemVariants}
              className="group relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-indigo-200 transition-all duration-300"
            >
              {course.badge && (
                <span className="absolute top-4 right-4 px-2 py-0.5 text-xs font-bold bg-indigo-100 text-indigo-700 rounded-full">
                  {course.badge}
                </span>
              )}
              <div className="text-3xl mb-4">{course.icon}</div>
              <h3 className="text-base font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                {course.title}
              </h3>
              <p className="text-xs text-gray-400 mt-0.5">{course.subtitle}</p>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {course.description}
              </p>
              <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
                <span>{course.duration}</span>
                <span className="font-semibold text-indigo-600">
                  {course.fee}
                </span>
              </div>
            </motion.article>
          ))}
        </StaggerContainer>

        <div className="text-center mt-10">
          <Link
            href="/courses"
            className="inline-block px-6 py-3 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-xl hover:bg-indigo-600 hover:text-white transition-all"
          >
            View All Courses →
          </Link>
        </div>
      </div>
    </section>
  );
}
