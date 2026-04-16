"use client";

import AnimatedCounter from "@/components/animations/AnimatedCounter";
import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";
import content from "@/data/content-mock.json";

export default function StatsSection() {
  const { counters } = content.results;

  return (
    <section className="py-20 bg-indigo-600">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInWhenVisible>
          <p className="text-center text-indigo-200 text-sm font-semibold uppercase tracking-widest mb-10">
            Our track record speaks for itself
          </p>
        </FadeInWhenVisible>

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
  );
}
