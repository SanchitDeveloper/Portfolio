"use client";

import { motion } from "framer-motion";
import { textContainer, textLetter } from "./animation-utils";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  charClassName?: string;
  type?: "heading" | "paragraph";
  animationType?: "character" | "word" | "full";
  delay?: number;
}

export const AnimatedText = ({
  text,
  className = "",
  charClassName = "",
  type = "heading",
  animationType = "character",
  delay = 0,
}: AnimatedTextProps) => {
  // Character by character animation
  if (animationType === "character") {
    return (
      <motion.div
        className={cn("flex overflow-hidden", className)}
        variants={textContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={delay}
      >
        {Array.from(text).map((letter, index) => (
          <motion.span
            key={`${letter}-${index}`}
            className={cn(charClassName)}
            variants={textLetter}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  // Word by word animation
  if (animationType === "word") {
    return (
      <motion.div
        className={cn("flex flex-wrap overflow-hidden", className)}
        variants={textContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={delay}
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            className={cn("mr-1", charClassName)}
            variants={textLetter}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  // Full text animation
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      }}
      viewport={{ once: true }}
    >
      {text}
    </motion.div>
  );
};

export default AnimatedText;
