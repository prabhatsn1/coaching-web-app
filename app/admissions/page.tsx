import type { Metadata } from "next";
import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";
import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";
import content from "@/data/content-mock.json";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Learn how to apply to Apex Academy. Step-by-step admission process, important dates, eligibility criteria, and scholarship details.",
};

export default function AdmissionsPage() {
  const { processSteps, importantDates, eligibility, scholarships } =
    content.admissions;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-linear-to-br from-indigo-950 to-indigo-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <span className="inline-block px-3 py-1 rounded-full bg-indigo-800 text-indigo-200 text-xs font-semibold tracking-widest uppercase mb-4">
              Admissions 2026
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold">
              How to Join Apex Academy
            </h1>
            <p className="mt-5 text-indigo-300 text-lg max-w-xl mx-auto">
              A simple, transparent six-step process to get you started on your
              journey to success.
            </p>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Process"
            heading="Step-by-Step Admission"
            subheading="Follow these six steps to secure your seat at Apex Academy."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, i) => (
              <FadeInWhenVisible key={step.step} delay={i * 0.1}>
                <div className="relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{step.icon}</span>
                    <span className="w-7 h-7 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16 bg-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Dates"
            heading="Important Dates"
            subheading="Mark your calendar — don't miss these key admission milestones."
          />
          <div className="space-y-3">
            {importantDates.map((item, i) => (
              <FadeInWhenVisible key={item.event} delay={i * 0.07}>
                <div className="flex items-center justify-between bg-white rounded-xl px-5 py-4 border border-gray-100 shadow-sm">
                  <span className="text-gray-700 font-medium text-sm">
                    {item.event}
                  </span>
                  <span className="text-indigo-600 font-bold text-sm">
                    {item.date}
                  </span>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Eligibility"
            heading="Who Can Apply?"
            subheading="Ensure you meet these requirements before submitting your application."
          />
          <ul className="space-y-3">
            {eligibility.map((criterion, i) => (
              <FadeInWhenVisible key={criterion} delay={i * 0.08}>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    ✓
                  </span>
                  {criterion}
                </li>
              </FadeInWhenVisible>
            ))}
          </ul>
        </div>
      </section>

      {/* Scholarships */}
      <section className="py-16 bg-linear-to-br from-amber-50 to-orange-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Scholarships"
            heading="Merit-Based Scholarships"
            subheading="Book your seat in our Diagnostic Test — top performers earn significant fee waivers."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {scholarships.map((s, i) => (
              <FadeInWhenVisible key={s.rank} delay={i * 0.1}>
                <div className="bg-white rounded-xl p-5 border border-amber-100 shadow-sm flex items-center justify-between">
                  <span className="text-gray-700 font-medium text-sm">
                    {s.rank}
                  </span>
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full">
                    {s.discount}
                  </span>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>

          <FadeInWhenVisible delay={0.4}>
            <div className="mt-10 text-center">
              <Link
                href="/apply"
                className="inline-block px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
              >
                Register for Diagnostic Test
              </Link>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>
    </>
  );
}
