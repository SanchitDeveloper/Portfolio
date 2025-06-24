"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface ParallaxBackgroundProps {
  children?: ReactNode;
  className?: string;
  backgroundImage?: string;
  speed?: number;
  direction?: "up" | "down";
  overlay?: boolean;
  overlayColor?: string;
  overlayOpacity?: number;
}

export const ParallaxBackground = ({
  children,
  className,
  backgroundImage,
  speed = 0.5,
  direction = "up",
  overlay = true,
  overlayColor = "#000",
  overlayOpacity = 0.7,
}: ParallaxBackgroundProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Calculate the transform based on direction and speed
  const yPos = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "up" ? ["0%", `${speed * 50}%`] : [`${speed * 50}%`, "0%"]
  );

  return (
    <div
      ref={ref}
      className={cn("relative overflow-hidden", className)}
    >
      {backgroundImage && (
        <motion.div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat -z-10"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            y: yPos,
            scale: 1.2, // Scale slightly larger to prevent edges from showing
          }}
        />
      )}

      {overlay && backgroundImage && (
        <div
          className="absolute inset-0 w-full h-full -z-10"
          style={{
            backgroundColor: overlayColor,
            opacity: overlayOpacity
          }}
        />
      )}

      {children}
    </div>
  );
};

export default ParallaxBackground;
