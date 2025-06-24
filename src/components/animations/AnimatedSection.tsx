"use client";

import type { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import useScrollAnimation from "@/hooks/use-scroll-animation";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  variants?: Variants;
  threshold?: number;
  id?: string;
}

export const AnimatedSection = ({
  children,
  className,
  delay = 0,
  direction = "up",
  variants,
  threshold = 0.1,
  id,
}: AnimatedSectionProps) => {
  const { ref, controls } = useScrollAnimation({
    threshold,
    delay,
  });

  // Default animation variants if none provided
  const defaultVariants: Variants = {
    hidden: {
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
      opacity: 0,
    },
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 0.5,
        delay,
      },
    },
  };

  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants || defaultVariants}
      className={cn(className)}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
