"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";
import AnimatedSection from "@/components/animations/AnimatedSection";
import AnimatedText from "@/components/animations/AnimatedText";
import { portfolioData } from "@/data/portfolio-data";

export const ExperienceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const experienceRefs = useRef<(HTMLDivElement | null)[]>([]);

  // GSAP animation for timeline
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!sectionRef.current || !timelineRef.current) return;

    // Animate the timeline line drawing
    const line = timelineRef.current.querySelector(".timeline-line");

    if (line) {
      gsap.fromTo(
        line,
        { height: 0 },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 0.5,
          },
        }
      );
    }

    // Animate each experience card
    experienceRefs.current.forEach((card, index) => {
      if (!card) return;

      const direction = index % 2 === 0 ? 1 : -1;

      gsap.fromTo(
        card,
        {
          x: 50 * direction,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reset",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="py-20 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <AnimatedText
            text="Work Experience"
            className="text-3xl md:text-4xl font-bold mb-4"
            animationType="character"
          />
          <AnimatedText
            text="My professional journey"
            className="text-xl text-muted-foreground max-w-xl mx-auto"
            animationType="word"
          />
        </AnimatedSection>

        {/* Timeline */}
        <div
          ref={timelineRef}
          className="relative mt-20"
        >
          {/* Timeline line */}
          <div className="absolute top-0 left-1/2 w-0.5 h-full -translate-x-1/2 bg-border overflow-hidden">
            <div className="timeline-line absolute top-0 left-0 w-full bg-primary" />
          </div>

          {/* Experience items */}
          <div className="relative">
            {portfolioData.experience.map((exp, index) => (
              <div
                key={exp.company}
                ref={(el) => {
  experienceRefs.current[index] = el;
}}
                className={`flex mb-16 last:mb-0 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                } items-center`}
              >
                {/* Content */}
                <div className="w-5/12">
                  <Card className="overflow-hidden">
                    <CardContent className="p-6">
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <h3 className="text-xl font-bold mb-1">{exp.position}</h3>
                        <div className="text-sm text-muted-foreground mb-4">
                          <span className="font-medium text-primary">{exp.company}</span>
                          <span className="mx-2">•</span>
                          <span>{exp.period}</span>
                        </div>
                        <p className="text-muted-foreground">{exp.description}</p>
                      </motion.div>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline bullet */}
                <div className="w-2/12 flex justify-center relative">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-primary/10 border-4 border-background flex items-center justify-center z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 10,
                      delay: 0.2
                    }}
                  >
                    <Briefcase className="h-5 w-5 text-primary" />
                  </motion.div>

                  {/* Connecting line */}
                  <motion.div
                    className={`absolute top-1/2 -mt-px h-0.5 bg-border ${
                      index % 2 === 0 ? "right-0 left-1/2" : "left-0 right-1/2"
                    }`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  />
                </div>

                {/* Empty space for alignment */}
                <div className="w-5/12" />
              </div>
            ))}
          </div>
        </div>

        {/* Additional animated element */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-muted-foreground italic">
            "Every project has been a stepping stone in my development journey."
          </p>
          <div className="mt-4 font-medium">— {portfolioData.developer.name}</div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
