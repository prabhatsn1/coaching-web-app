import type { Metadata } from "next";
import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";
import SectionHeader from "@/components/ui/SectionHeader";
import content from "@/data/content-mock.json";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Apex Academy. Find our branch addresses, phone numbers, and email contacts.",
};

export default function ContactPage() {
  const { headOffice, branches } = content.contactDetails;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-linear-to-br from-indigo-950 to-indigo-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <span className="inline-block px-3 py-1 rounded-full bg-indigo-800 text-indigo-200 text-xs font-semibold tracking-widest uppercase mb-4">
              Get in Touch
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold">Contact Us</h1>
            <p className="mt-5 text-indigo-300 text-lg max-w-xl mx-auto">
              We&apos;re here to answer all your questions. Reach out to us at any branch.
            </p>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Contact Info + Map Placeholder */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: details */}
            <div>
              <FadeInWhenVisible direction="left">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Head Office</h2>
              </FadeInWhenVisible>

              <div className="space-y-5">
                {[
                  { icon: "📍", label: "Address", value: headOffice.address },
                  { icon: "📞", label: "Phone", value: headOffice.phone, href: `tel:${headOffice.phone}` },
                  { icon: "✉️", label: "Email", value: headOffice.email, href: `mailto:${headOffice.email}` },
                  { icon: "🕐", label: "Hours", value: headOffice.hours },
                ].map((item, i) => (
                  <FadeInWhenVisible key={item.label} delay={i * 0.1} direction="left">
                    <div className="flex gap-4 p-4 bg-slate-50 rounded-xl">
                      <span className="text-2xl shrink-0">{item.icon}</span>
                      <div>
                        <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-indigo-600 font-semibold hover:underline text-sm"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-gray-800 text-sm">{item.value}</p>
                        )}
                      </div>
                    </div>
                  </FadeInWhenVisible>
                ))}
              </div>
            </div>

            {/* Right: Map placeholder */}
            <FadeInWhenVisible direction="right">
              <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-80 lg:h-full min-h-64 bg-linear-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-5xl mb-3">🗺️</p>
                  <p className="text-indigo-800 font-bold">Map Placeholder</p>
                  <p className="text-indigo-600 text-sm mt-1">
                    Wisdom Tower, FC Road, Pune
                  </p>
                </div>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* Branch Locations */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Branches"
            heading="Find Us Near You"
            subheading="Apex Academy operates across four cities in Western India."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {branches.map((branch, i) => (
              <FadeInWhenVisible key={branch.city} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all">
                  <p className="font-bold text-indigo-700 mb-2">{branch.city}</p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">
                    {branch.address}
                  </p>
                  <a
                    href={`tel:${branch.phone}`}
                    className="text-sm font-semibold text-gray-700 hover:text-indigo-600 transition-colors"
                  >
                    {branch.phone}
                  </a>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
