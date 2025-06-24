"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  delay?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  decimals?: number;
}

export const AnimatedCounter = ({
  end,
  duration = 2,
  delay = 0,
  prefix = "",
  suffix = "",
  className,
  decimals = 0,
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      // Start animation after delay
      const timer = setTimeout(() => {
        let startTime: number;
        const step = (timestamp: number) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
          setCount(Math.floor(progress * end));

          if (progress < 1) {
            window.requestAnimationFrame(step);
          } else {
            setCount(end);
          }
        };

        window.requestAnimationFrame(step);
      }, delay * 1000);

      return () => clearTimeout(timer);
    }
  }, [inView, end, duration, delay]);

  return (
    <div ref={ref} className={cn("flex items-center justify-center", className)}>
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
      >
        {prefix}
        {count.toLocaleString(undefined, {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        })}
        {suffix}
      </motion.span>
    </div>
  );
};

export default AnimatedCounter;
