import type { Metadata } from "next";
import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";
import SectionHeader from "@/components/ui/SectionHeader";
import TiltCard from "@/components/animations/TiltCard";
import content from "@/data/content-mock.json";

export const metadata: Metadata = {
  title: "Our Faculty",
  description:
    "Meet the expert faculty at Apex Academy — IIT and AIIMS alumni with decades of coaching experience.",
};

export default function FacultyPage() {
  const { faculty } = content;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-linear-to-br from-indigo-950 to-purple-950 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <span className="inline-block px-3 py-1 rounded-full bg-indigo-800 text-indigo-200 text-xs font-semibold tracking-widest uppercase mb-4">
              The Team
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold">Meet Our Mentors</h1>
            <p className="mt-5 text-indigo-300 text-lg max-w-xl mx-auto">
              World-class educators who are deeply invested in every student&apos;s success.
            </p>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Faculty"
            heading="Expert Educators"
            subheading="Each member of our faculty has been handpicked for their subject mastery and teaching excellence."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {faculty.map((member, i) => (
              <FadeInWhenVisible key={member.id} delay={i * 0.09}>
                <TiltCard className="h-full" maxTilt={5}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-full flex flex-col">
                    {/* Avatar area */}
                    <div className="bg-linear-to-br from-indigo-100 to-purple-100 h-40 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-indigo-600 flex items-center justify-center text-white text-2xl font-extrabold ring-4 ring-white shadow-lg">
                        {member.initials}
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <h2 className="text-lg font-bold text-gray-900">{member.name}</h2>
                      <span className="inline-block mt-1 px-2 py-0.5 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full w-fit">
                        {member.subject}
                      </span>

                      <p className="mt-3 text-sm text-gray-500 leading-relaxed flex-1">
                        {member.bio}
                      </p>

                      <div className="mt-4 pt-4 border-t border-gray-100 grid grid-cols-2 gap-3 text-xs">
                        <div>
                          <p className="text-gray-400 mb-0.5">Qualification</p>
                          <p className="font-semibold text-gray-700">{member.qualification}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 mb-0.5">Experience</p>
                          <p className="font-semibold text-gray-700">{member.experience}</p>
                        </div>
                      </div>

                      <div className="mt-3 bg-amber-50 rounded-lg px-3 py-2 text-xs text-amber-700 font-medium">
                        🏆 {member.achievements}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
