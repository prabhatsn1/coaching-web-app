import type { Metadata } from "next";
import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";
import SectionHeader from "@/components/ui/SectionHeader";
import content from "@/data/content-mock.json";

export const metadata: Metadata = {
  title: "Blog & Articles",
  description:
    "Educational articles, exam tips, and study strategies from the expert faculty at Apex Academy.",
};

const categoryColours: Record<string, string> = {
  "JEE Tips": "bg-indigo-100 text-indigo-700",
  "NEET Tips": "bg-purple-100 text-purple-700",
  "Study Tips": "bg-teal-100 text-teal-700",
  Chemistry: "bg-green-100 text-green-700",
  Strategy: "bg-amber-100 text-amber-700",
  "CBSE Tips": "bg-sky-100 text-sky-700",
};

export default function BlogPage() {
  const { blogPosts } = content;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-linear-to-br from-indigo-950 to-indigo-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <span className="inline-block px-3 py-1 rounded-full bg-indigo-800 text-indigo-200 text-xs font-semibold tracking-widest uppercase mb-4">
              Knowledge Hub
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold">Blog & Articles</h1>
            <p className="mt-5 text-indigo-300 text-lg max-w-xl mx-auto">
              Expert insights, exam strategies, and study tips from our faculty — all free.
            </p>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Articles" heading="Latest Posts" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <FadeInWhenVisible key={post.id} delay={i * 0.08}>
                <article className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-indigo-200 overflow-hidden transition-all h-full flex flex-col">
                  {/* Placeholder image */}
                  <div
                    className={`h-44 flex items-center justify-center text-5xl ${
                      [
                        "bg-indigo-50",
                        "bg-purple-50",
                        "bg-teal-50",
                        "bg-amber-50",
                        "bg-sky-50",
                        "bg-green-50",
                      ][i % 6]
                    }`}
                  >
                    📰
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className={`px-2 py-0.5 text-xs font-bold rounded-full ${
                          categoryColours[post.category] ?? "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-400">{post.readTime}</span>
                    </div>

                    <h2 className="text-base font-bold text-gray-900 group-hover:text-indigo-600 transition-colors leading-snug flex-1">
                      {post.title}
                    </h2>

                    <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="mt-5 pt-4 border-t border-gray-50 flex items-center justify-between text-xs text-gray-400">
                      <span className="font-medium text-gray-600">{post.author}</span>
                      <span>{post.date}</span>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 bg-slate-100 text-slate-500 text-xs rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
