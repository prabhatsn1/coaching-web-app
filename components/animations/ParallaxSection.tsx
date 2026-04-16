"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  /** Vertical offset range in pixels. Positive = moves down on scroll. */
  yRange?: [number, number];
}

/**
 * Wraps children in a parallax container that shifts vertically as the user scrolls.
 * Keeps the motion subtle (40px default) for a professional feel.
 */
export default function ParallaxSection({
  children,
  className,
  yRange = [-30, 30],
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], yRange);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className ?? ""}`}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}
