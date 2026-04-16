"use client";

import { motion } from "framer-motion";

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  /** Delay between each child animation (seconds) */
  staggerDelay?: number;
  /** Initial delay before stagger starts (seconds) */
  initialDelay?: number;
}

const containerVariants = {
  hidden: {},
  visible: (custom: { staggerDelay: number; initialDelay: number }) => ({
    transition: {
      staggerChildren: custom.staggerDelay,
      delayChildren: custom.initialDelay,
    },
  }),
};

export const staggerItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

/**
 * Container that staggers the entrance animation of its direct children.
 * Wrap each child in <motion.div variants={staggerItemVariants}> to use.
 */
export default function StaggerContainer({
  children,
  className,
  staggerDelay = 0.12,
  initialDelay = 0.1,
}: StaggerContainerProps) {
  return (
    <motion.div
      className={className}
      variants={containerVariants}
      custom={{ staggerDelay, initialDelay }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </motion.div>
  );
}
