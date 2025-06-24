"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import useScrollAnimation from "@/hooks/use-scroll-animation";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hoverEffect?: "lift" | "scale" | "tilt" | "glow" | "none";
  index?: number;
}

export const AnimatedCard = ({
  children,
  className,
  delay = 0,
  hoverEffect = "lift",
  index = 0,
}: AnimatedCardProps) => {
  const { ref, controls } = useScrollAnimation({
    delay: delay + index * 0.1,
  });

  // Base animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay: delay + index * 0.1,
      },
    },
  };

  // Hover effects based on selected effect
  const getHoverEffects = () => {
    switch (hoverEffect) {
      case "lift":
        return {
          whileHover: { y: -10, transition: { duration: 0.2 } },
        };
      case "scale":
        return {
          whileHover: { scale: 1.05, transition: { duration: 0.2 } },
        };
      case "tilt":
        return {
          whileHover: { rotateY: 10, rotateX: -10, transition: { duration: 0.2 } },
        };
      case "glow":
        return {
          whileHover: {
            boxShadow: "0 0 15px rgba(255, 255, 255, 0.5)",
            transition: { duration: 0.2 }
          },
        };
      default:
        return {};
    }
  };

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
      {...getHoverEffects()}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
