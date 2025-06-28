'use client';

import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Progress } from '@/components/ui/progress';
import AnimatedSection from '@/components/animations/AnimatedSection';
import AnimatedText from '@/components/animations/AnimatedText';
import { portfolioData } from '@/data/portfolio-data';

export const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const progressRefs = useRef<(HTMLDivElement | null)[]>([]);
  const controls = useAnimation();

  // Group skills by category
  const technicalSkills = portfolioData.skills.slice(0, 6);
  const frameworkSkills = portfolioData.skills.slice(6, 12);

  // GSAP animation for progress bars
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!sectionRef.current) return;

    const progressElements = progressRefs.current.filter(Boolean);

    progressElements.forEach((element, index) => {
      if (!element) return;

      // Create staggered animations for each progress bar
      gsap.fromTo(
        element,
        { width: 0 },
        {
          width: `${portfolioData.skills[index].level}%`,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none reset'
          }
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
      id="skills"
      className="py-20 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <AnimatedText
            text="My Skills"
            className="text-3xl md:text-4xl font-bold mb-4"
            animationType="character"
          />
          <AnimatedText
            text="Technologies and tools I work with"
            className="text-xl text-muted-foreground max-w-xl mx-auto"
            animationType="word"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <motion.span
                className="inline-block mr-2"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: 'loop',
                  repeatDelay: 5
                }}
              >
                🚀
              </motion.span>
              Technical Skills
            </h3>

            <div className="space-y-8">
              {technicalSkills.map((skill, index) =>
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <motion.span
                      className="font-medium"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {skill.name}
                    </motion.span>
                    <motion.span
                      className="text-sm text-muted-foreground"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                      viewport={{ once: true }}
                    >
                      {skill.level}%
                    </motion.span>
                  </div>

                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <motion.div
                      ref={el => {
                        progressRefs.current[index] = el;
                      }}
                      className="h-full bg-primary rounded-full"
                      style={{ width: 0 }}
                    />
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Framework Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <motion.span
                className="inline-block mr-2"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: 'loop',
                  repeatDelay: 5
                }}
              >
                ⚡
              </motion.span>
              Frameworks & Tools
            </h3>

            <div className="space-y-8">
              {frameworkSkills.map((skill, index) =>
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <motion.span
                      className="font-medium"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {skill.name}
                    </motion.span>
                    <motion.span
                      className="text-sm text-muted-foreground"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                      viewport={{ once: true }}
                    >
                      {skill.level}%
                    </motion.span>
                  </div>

                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <motion.div
                      ref={el => {(progressRefs.current[index + 6] = el)}}
                      className="h-full bg-gradient-to-r from-primary to-blue-500 rounded-full"
                      style={{ width: 0 }}
                    />
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Animated Skill Pills */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Other Technologies
          </h3>

          <motion.div
            className="flex flex-wrap justify-center gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.07
                }
              }
            }}
          >
            {[
              'HTML5',
              'CSS3',
              'SASS',
              'REST APIs',
              'GraphQL',
              'Webpack',
              'Git',
              'Docker',
              'AWS',
              'Vercel',
              'Firebase',
              'Figma',
              'Adobe XD'
            ].map((tech, index) =>
              <motion.div
                key={tech}
                className="px-4 py-2 bg-muted rounded-full text-sm font-medium"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: 'spring',
                      stiffness: 100,
                      damping: 10
                    }
                  }
                }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: 'rgba(var(--primary-rgb), 0.15)'
                }}
              >
                {tech}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
