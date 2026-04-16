import type { Metadata } from "next";
import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";
import SectionHeader from "@/components/ui/SectionHeader";
import TiltCard from "@/components/animations/TiltCard";
import Link from "next/link";
import content from "@/data/content-mock.json";

export const metadata: Metadata = {
  title: "Courses & Programs",
  description:
    "Explore JEE, NEET, CBSE Board, Olympiad, and SAT courses at Apex Academy. Structured programs for every academic goal.",
};

export default function CoursesPage() {
  const { courses } = content;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-linear-to-br from-indigo-950 to-purple-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <span className="inline-block px-3 py-1 rounded-full bg-indigo-800 text-indigo-200 text-xs font-semibold tracking-widest uppercase mb-4">
              Programs
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold">Our Courses</h1>
            <p className="mt-5 text-indigo-300 text-lg">
              From JEE and NEET to Olympiads and SAT — we have a course for every ambitious student.
            </p>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Course Cards Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="All Programs"
            heading="Choose Your Path"
            subheading="Each program is designed by expert faculty and aligned with the latest exam patterns."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, i) => (
              <FadeInWhenVisible key={course.id} delay={i * 0.09}>
                {/* TiltCard adds 3D hover effect */}
                <TiltCard className="h-full">
                  <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-4xl">{course.icon}</span>
                      {course.badge && (
                        <span className="px-2 py-0.5 text-xs font-bold bg-indigo-100 text-indigo-700 rounded-full">
                          {course.badge}
                        </span>
                      )}
                    </div>

                    <h2 className="text-xl font-bold text-gray-900">{course.title}</h2>
                    <p className="text-indigo-600 text-sm font-medium mt-0.5">
                      {course.subtitle}
                    </p>

                    <p className="mt-3 text-gray-500 text-sm leading-relaxed flex-1">
                      {course.description}
                    </p>

                    {/* Highlights */}
                    <ul className="mt-5 space-y-2">
                      {course.highlights.map((hl) => (
                        <li key={hl} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="text-green-500 mt-0.5 shrink-0">✓</span>
                          {hl}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                      <div>
                        <p className="text-xs text-gray-400">Duration</p>
                        <p className="text-sm font-semibold text-gray-700">{course.duration}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-400">Fee</p>
                        <p className="text-sm font-bold text-indigo-600">{course.fee}</p>
                      </div>
                    </div>

                    <Link
                      href="/apply"
                      className="mt-5 block w-full text-center py-2.5 bg-indigo-50 text-indigo-700 font-semibold text-sm rounded-lg hover:bg-indigo-600 hover:text-white transition-all"
                    >
                      Enrol Now
                    </Link>
                  </div>
                </TiltCard>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility note */}
      <section className="py-14 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <FadeInWhenVisible>
            <p className="text-gray-500 text-base">
              Not sure which course suits you best?{" "}
              <Link href="/contact" className="text-indigo-600 font-semibold hover:underline">
                Talk to a counsellor
              </Link>{" "}
              or take the{" "}
              <Link href="/apply" className="text-indigo-600 font-semibold hover:underline">
                free Diagnostic Test
              </Link>{" "}
              to get a personalised recommendation.
            </p>
          </FadeInWhenVisible>
        </div>
      </section>
    </>
  );
}
