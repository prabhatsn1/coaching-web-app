import type { Metadata } from "next";
import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedCounter from "@/components/animations/AnimatedCounter";
import content from "@/data/content-mock.json";

export const metadata: Metadata = {
  title: "Results & Achievements",
  description:
    "See Apex Academy's outstanding results — 2800+ IIT selections, 3500+ NEET qualifiers, and 98% overall success rate.",
};

export default function ResultsPage() {
  const { counters, toppers, yearlyStats } = content.results;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-linear-to-br from-indigo-950 to-indigo-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <span className="inline-block px-3 py-1 rounded-full bg-indigo-800 text-indigo-200 text-xs font-semibold tracking-widest uppercase mb-4">
              Track Record
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold">
              Results & Achievements
            </h1>
            <p className="mt-5 text-indigo-300 text-lg max-w-xl mx-auto">
              Numbers don&apos;t lie. Our success rate is a testament to the
              hard work of our students and faculty.
            </p>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Counters */}
      <section className="py-16 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {counters.map((counter, i) => (
              <FadeInWhenVisible key={counter.label} delay={i * 0.12}>
                <div>
                  <p className="text-4xl sm:text-5xl font-extrabold text-white">
                    <AnimatedCounter
                      value={counter.value}
                      suffix={counter.suffix}
                    />
                  </p>
                  <p className="mt-2 text-indigo-200 text-sm font-medium">
                    {counter.label}
                  </p>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Toppers */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Hall of Fame"
            heading="Our Star Performers"
            subheading="These students represent the pinnacle of what dedication and the right guidance can achieve."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {toppers.map((topper, i) => (
              <FadeInWhenVisible key={topper.name} delay={i * 0.09}>
                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-linear-to-br from-indigo-500 to-purple-500 text-white font-bold flex items-center justify-center ring-2 ring-indigo-100">
                      {topper.initials}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{topper.name}</p>
                      <p className="text-xs text-gray-400">{topper.year}</p>
                    </div>
                  </div>

                  <div className="mb-3">
                    <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wide">
                      {topper.exam}
                    </span>
                    <p className="text-2xl font-extrabold text-gray-900 mt-0.5">
                      {topper.rank}
                    </p>
                    <p className="text-sm text-gray-500">{topper.branch}</p>
                  </div>

                  <p className="text-sm text-gray-600 italic leading-relaxed border-l-2 border-indigo-200 pl-3">
                    &ldquo;{topper.quote}&rdquo;
                  </p>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Year-wise stats */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Yearly Stats"
            heading="Year-Over-Year Performance"
            subheading="Consistent improvement across all exam categories."
          />

          <div className="space-y-4">
            {yearlyStats.map((stat, i) => (
              <FadeInWhenVisible key={stat.year} delay={i * 0.1}>
                <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-bold text-gray-900">{stat.year}</span>
                    <span className="text-xs text-gray-400">
                      Total: {stat.jee + stat.neet + stat.others} selections
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div>
                      <p className="text-xl font-extrabold text-indigo-600">
                        {stat.jee}
                      </p>
                      <p className="text-xs text-gray-400">JEE</p>
                    </div>
                    <div>
                      <p className="text-xl font-extrabold text-purple-600">
                        {stat.neet}
                      </p>
                      <p className="text-xs text-gray-400">NEET</p>
                    </div>
                    <div>
                      <p className="text-xl font-extrabold text-teal-600">
                        {stat.others}
                      </p>
                      <p className="text-xs text-gray-400">Others</p>
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
