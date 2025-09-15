"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import AnimatedText from "@/components/animations/AnimatedText";
import { portfolioData } from "@/data/portfolio-data";

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

export const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const backgroundBlobRef = useRef<HTMLDivElement>(null);

  // GSAP animation for background elements
  useEffect(() => {
    if (!backgroundBlobRef.current) return;

    // Animate background blobs
    const tl = gsap.timeline({ repeat: -1 });

    tl.to(backgroundBlobRef.current, {
      duration: 20,
      rotate: 360,
      ease: "linear",
    });

    // Mouse parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current || !backgroundBlobRef.current) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const xPos = (clientX / innerWidth - 0.5) * 20;
      const yPos = (clientY / innerHeight - 0.5) * 20;

      gsap.to(backgroundBlobRef.current, {
        x: xPos,
        y: yPos,
        duration: 1,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden"
    >
      {/* Background Elements */}
      <div ref={backgroundBlobRef} className="absolute w-full h-full pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl opacity-50 dark:opacity-30" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl opacity-50 dark:opacity-20" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl opacity-40 dark:opacity-20" />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          className="flex flex-col items-center text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Greeting */}
          <motion.div
            className="mb-2 px-4 py-1 border border-border rounded-full bg-background/50 backdrop-blur-sm"
            variants={itemVariants}
          >
            <span className="text-sm font-medium">👋 Hello, I'm {portfolioData.developer.name.split(" ")[0]}</span>
          </motion.div>

          {/* Title */}
          <motion.div className="mt-6 mb-4" variants={itemVariants}>
            <AnimatedText
              text={portfolioData.developer.title}
              className="text-4xl md:text-6xl lg:text-7xl font-bold"
              animationType="character"
              charClassName="inline-block"
            />
          </motion.div>

          {/* Description */}
          <motion.div
            className="max-w-2xl mx-auto text-xl text-muted-foreground text-center mb-8"
            variants={itemVariants}
          >
            <AnimatedText
              text={portfolioData.developer.description}
              animationType="word"
              className="leading-relaxed"
            />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-8"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" asChild>
                <Link href="#projects">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" variant="outline" asChild>
                <Link href="#contact">Contact Me</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center space-x-4 mt-12"
            variants={itemVariants}
          >
            <motion.a
              href={portfolioData.developer.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-border bg-background hover:bg-primary/10 transition-colors"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </motion.a>
            <motion.a
              href={portfolioData.developer.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-border bg-background hover:bg-primary/10 transition-colors"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
            <motion.a
              href={portfolioData.developer.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-border bg-background hover:bg-primary/10 transition-colors"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
          >
            <div className="w-6 h-10 rounded-full border-2 border-muted-foreground flex justify-center pt-2">
              <motion.div
                className="w-1 h-2 bg-primary rounded-full"
                animate={{
                  y: [0, 4, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
