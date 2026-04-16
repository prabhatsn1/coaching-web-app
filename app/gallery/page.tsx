import type { Metadata } from "next";
import Image from "next/image";
import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";
import ParallaxSection from "@/components/animations/ParallaxSection";
import SectionHeader from "@/components/ui/SectionHeader";
import content from "@/data/content-mock.json";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore photos from Apex Academy — events, classrooms, results celebrations, and campus life.",
};

// Category badge colours
const categoryColours: Record<string, string> = {
  Events: "bg-indigo-100 text-indigo-700",
  Academics: "bg-green-100 text-green-700",
  Admissions: "bg-sky-100 text-sky-700",
  Results: "bg-amber-100 text-amber-700",
};

// Map aspect-ratio labels to placeholder dimensions and grid size
const aspectConfig: Record<string, { cols: string; rows: string; height: string }> = {
  landscape: { cols: "col-span-2", rows: "row-span-1", height: "h-48" },
  portrait: { cols: "col-span-1", rows: "row-span-2", height: "h-80" },
  square: { cols: "col-span-1", rows: "row-span-1", height: "h-48" },
};

export default function GalleryPage() {
  const { gallery } = content;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-linear-to-br from-indigo-950 to-purple-950 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <span className="inline-block px-3 py-1 rounded-full bg-indigo-800 text-indigo-200 text-xs font-semibold tracking-widest uppercase mb-4">
              Gallery
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold">Life at Apex Academy</h1>
            <p className="mt-5 text-indigo-300 text-lg max-w-xl mx-auto">
              A glimpse of the vibrant academic community, celebrations, and campus life.
            </p>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Gallery Grid with parallax individual cards */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Photos"
            heading="Memories & Milestones"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {gallery.map((item, i) => {
              const cfg = aspectConfig[item.aspectRatio] ?? aspectConfig.square;
              return (
                <FadeInWhenVisible key={item.id} delay={i * 0.07}>
                  <ParallaxSection yRange={[-12, 12]} className="rounded-2xl overflow-hidden">
                    <div
                      className={`relative ${cfg.height} rounded-2xl group cursor-pointer overflow-hidden bg-slate-200`}
                    >
                      {/* Gallery photo — unoptimized so the browser follows picsum's redirect */}
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        fill
                        unoptimized
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex flex-col justify-end p-5">
                        <span
                          className={`inline-block px-2 py-0.5 text-xs font-bold rounded-full mb-2 w-fit ${
                            categoryColours[item.category] ?? "bg-white/20 text-white"
                          }`}
                        >
                          {item.category}
                        </span>
                        <p className="text-white font-bold text-sm">{item.title}</p>
                        <p className="text-white/70 text-xs mt-1">{item.description}</p>
                      </div>
                    </div>
                  </ParallaxSection>
                </FadeInWhenVisible>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
