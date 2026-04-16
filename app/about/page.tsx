import type { Metadata } from "next";
import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";
import StaggerContainer from "@/components/animations/StaggerContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import content from "@/data/content-mock.json";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Apex Academy's story, mission, vision, and the values that have driven 15,000+ students to success.",
};

export default function AboutPage() {
  const {
    mission,
    vision,
    values,
    timeline,
    totalStudents,
    established,
    branches,
  } = content.instituteInfo;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-linear-to-br from-indigo-950 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInWhenVisible>
            <span className="inline-block px-3 py-1 rounded-full bg-indigo-800 text-indigo-200 text-xs font-semibold tracking-widest uppercase mb-4">
              Est. {established}
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold">
              About Apex Academy
            </h1>
            <p className="mt-6 text-indigo-300 text-lg max-w-2xl mx-auto leading-relaxed">
              {content.instituteInfo.description}
            </p>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.2}>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-sm mx-auto">
              {[
                { label: "Students", value: totalStudents },
                { label: "Branches", value: branches },
                { label: "Since", value: established },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-3xl font-extrabold text-white">
                    {s.value}
                  </p>
                  <p className="text-indigo-300 text-xs mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <FadeInWhenVisible direction="left">
              <div className="bg-indigo-50 rounded-2xl p-8 h-full">
                <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center text-white text-xl mb-5">
                  🎯
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h2>
                <p className="text-gray-600 leading-relaxed">{mission}</p>
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible direction="right">
              <div className="bg-purple-50 rounded-2xl p-8 h-full">
                <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center text-white text-xl mb-5">
                  🔭
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Vision
                </h2>
                <p className="text-gray-600 leading-relaxed">{vision}</p>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Core Values"
            heading="What We Stand For"
            subheading="Every decision at Apex Academy is guided by four fundamental values."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <FadeInWhenVisible key={value.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md hover:border-indigo-200 transition-all">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 font-bold text-lg flex items-center justify-center mx-auto mb-4">
                    {i + 1}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-500">{value.description}</p>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Journey"
            heading="Two Decades of Excellence"
            subheading="Key milestones that shaped Apex Academy into what it is today."
          />
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-indigo-100" />

            <div className="space-y-10 pl-12">
              {timeline.map((item, i) => (
                <FadeInWhenVisible
                  key={item.year}
                  delay={i * 0.1}
                  direction="left"
                >
                  <div className="relative">
                    {/* Dot */}
                    <div className="absolute -left-12 top-1 w-8 h-8 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center ring-4 ring-indigo-50">
                      {(i + 1).toString().padStart(2, "0")}
                    </div>
                    <div className="bg-slate-50 rounded-xl p-5 border border-gray-100">
                      <span className="inline-block px-2 py-0.5 bg-indigo-100 text-indigo-700 text-xs font-bold rounded mb-2">
                        {item.year}
                      </span>
                      <p className="text-gray-700">{item.event}</p>
                    </div>
                  </div>
                </FadeInWhenVisible>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
