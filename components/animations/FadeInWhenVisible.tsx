"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface FadeInWhenVisibleProps {
  children: React.ReactNode;
  /** Delay in seconds before animation starts */
  delay?: number;
  /** Direction the element slides in from */
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}

/**
 * Wraps children in a Framer Motion div that fades (and optionally slides)
 * into view once the element enters the viewport.
 */
export default function FadeInWhenVisible({
  children,
  delay = 0,
  direction = "up",
  className,
}: FadeInWhenVisibleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const directionOffsets = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 },
  };

  const { x, y } = directionOffsets[direction];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x, y }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
