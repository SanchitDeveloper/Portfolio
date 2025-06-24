"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Briefcase, Award } from "lucide-react";
import AnimatedSection from "@/components/animations/AnimatedSection";
import AnimatedText from "@/components/animations/AnimatedText";
import AnimatedCounter from "@/components/animations/AnimatedCounter";
import GsapReveal from "@/components/animations/GsapReveal";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio-data";

export const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  // GSAP animations
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!imageRef.current || !sectionRef.current || !statsRef.current) return;

    // Parallax effect for the image
    gsap.fromTo(
      imageRef.current,
      {
        y: 0,
      },
      {
        y: 50,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Stats data
  const stats = [
    {
      value: portfolioData.about.yearsOfExperience,
      label: "Years of Experience",
      icon: Code,
    },
    {
      value: portfolioData.about.companiesWorked,
      label: "Companies",
      icon: Briefcase,
    },
    {
      value: portfolioData.about.projectsCompleted,
      label: "Projects Completed",
      icon: Award,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 bg-muted/30 dark:bg-muted/10 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16" delay={0.1}>
          <AnimatedText
            text="About Me"
            className="text-3xl md:text-4xl font-bold mb-4"
            animationType="character"
          />
          <AnimatedText
            text="My background and experience"
            className="text-xl text-muted-foreground max-w-xl mx-auto"
            animationType="word"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image container with animations */}
          <div className="flex justify-center">
            <motion.div
              ref={imageRef}
              className="relative w-full max-w-md"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="w-full aspect-square relative rounded-2xl overflow-hidden bg-muted">
                {/* Placeholder for profile image - would use Image component with real image */}
                <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-muted-foreground">
                  {portfolioData.developer.name.charAt(0)}
                </div>

                {/* Floating elements animation */}
                <motion.div
                  className="absolute top-10 right-10 w-16 h-16 bg-primary/20 rounded-full backdrop-blur-md"
                  animate={{
                    y: [0, 15, 0],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />
                <motion.div
                  className="absolute bottom-10 left-10 w-12 h-12 bg-blue-500/20 rounded-full backdrop-blur-md"
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    delay: 1,
                  }}
                />

                {/* Border animation */}
                <motion.div
                  className="absolute inset-0 border-2 border-primary/50 rounded-2xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>

              {/* Experience badge */}
              <motion.div
                className="absolute -bottom-6 -right-6 bg-background shadow-lg rounded-xl px-4 py-2 border border-border"
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="font-bold text-lg">{portfolioData.about.yearsOfExperience}+ Years</div>
                <div className="text-sm text-muted-foreground">of experience</div>
              </motion.div>
            </motion.div>
          </div>

          {/* Content */}
          <GsapReveal
            direction="right"
            distance={50}
            stagger={0.1}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">
              Full Stack Developer with a passion for creating exceptional digital experiences
            </h3>

            <div className="text-muted-foreground space-y-4">
              <p>
                {portfolioData.about.summary}
              </p>
              <p>
                I specialize in building modern, responsive web applications using cutting-edge technologies.
                My approach combines technical expertise with creative problem-solving to deliver
                exceptional user experiences.
              </p>
            </div>

            <Button className="mt-6" asChild>
              <Link href="#skills">
                View My Skills
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </GsapReveal>
        </div>

        {/* Stats Cards */}
        <div
          ref={statsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20"
        >
          {stats.map((stat, index) => (
            <Card key={stat.label} className="overflow-hidden">
              <CardContent className="p-6">
                <motion.div
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="p-3 bg-primary/10 rounded-full mb-4">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>

                  <AnimatedCounter
                    end={stat.value}
                    duration={2}
                    delay={0.5 + index * 0.2}
                    className="text-4xl font-bold"
                  />

                  <span className="text-muted-foreground mt-2">{stat.label}</span>
                </motion.div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
