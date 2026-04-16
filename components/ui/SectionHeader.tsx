import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";

interface SectionHeaderProps {
  /** Small uppercase label above the heading */
  eyebrow?: string;
  heading: string;
  subheading?: string;
  /** Alignment, defaults to center */
  align?: "left" | "center";
}

/**
 * Reusable section header with optional eyebrow label.
 * Includes scroll-triggered fade-in animation.
 */
export default function SectionHeader({
  eyebrow,
  heading,
  subheading,
  align = "center",
}: SectionHeaderProps) {
  const alignClass = align === "left" ? "text-left" : "text-center";

  return (
    <FadeInWhenVisible className={`mb-12 ${alignClass}`}>
      {eyebrow && (
        <span className="inline-block px-3 py-1 text-xs font-bold tracking-widest uppercase text-indigo-600 bg-indigo-50 rounded-full mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
        {heading}
      </h2>
      {subheading && (
        <p className="mt-3 max-w-2xl text-base sm:text-lg text-gray-500 leading-relaxed mx-auto">
          {subheading}
        </p>
      )}
    </FadeInWhenVisible>
  );
}
