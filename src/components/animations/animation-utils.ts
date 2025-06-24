import type { Variants } from "framer-motion";

// Fade in animation variants
export const fadeIn = (
  direction: "up" | "down" | "left" | "right" | "none" = "up",
  duration = 0.5,
  delay = 0
): Variants => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
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
        duration: duration,
        delay: delay,
      },
    },
  };
};

// Stagger children animations
export const staggerContainer = (
  staggerChildren = 0.1,
  delayChildren = 0
): Variants => {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };
};

// Text animation for revealing text character by character
export const textVariant = (delay = 0): Variants => {
  return {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay,
      },
    },
  };
};

// Text character animation for revealing text character by character
export const textContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
  }),
};

// Individual letter animation
export const textLetter: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 10,
    },
  },
};

// Zoom in animation
export const zoomIn = (delay = 0, duration = 0.5): Variants => {
  return {
    hidden: {
      scale: 0.5,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        ease: "easeOut",
        duration,
        delay,
      },
    },
  };
};

// Slide in animation
export const slideIn = (
  direction: "up" | "down" | "left" | "right",
  type: "tween" | "spring",
  delay = 0,
  duration = 0.5
): Variants => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
    },
    visible: {
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut",
      },
    },
  };
};

// Rotate animation
export const rotate: Variants = {
  hidden: {
    rotate: -180,
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    rotate: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100,
    },
  },
};

// Pulse animation
export const pulse: Variants = {
  hidden: { scale: 1 },
  visible: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse",
    },
  },
};

// Bounce animation
export const bounce: Variants = {
  hidden: { y: 0 },
  visible: {
    y: [0, -15, 0],
    transition: {
      duration: 1.5,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "loop",
    },
  },
};

// Path drawing animation for SVGs
export const drawPath = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};
