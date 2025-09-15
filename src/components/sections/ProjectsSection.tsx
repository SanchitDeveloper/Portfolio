'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Github, ExternalLink, Sparkles } from 'lucide-react';
import AnimatedSection from '@/components/animations/AnimatedSection';
import AnimatedCard from '@/components/animations/AnimatedCard';
import AnimatedText from '@/components/animations/AnimatedText';
import { portfolioData } from '@/data/portfolio-data';

export const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const sectionRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  // Extract unique technologies for filter tabs
  const allTechnologies = portfolioData.projects.reduce((acc, project) => {
    project.technologies.forEach((tech) => {
      if (!acc.includes(tech)) {
        acc.push(tech);
      }
    });
    return acc;
  }, [] as string[]);

  // Top 5 most used technologies for filter
  const topTechnologies = allTechnologies
    .slice(0, 5)
    .sort((a, b) => a.localeCompare(b));

  // Filter projects based on active filter
  const filteredProjects = portfolioData.projects.filter((project) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'featured') return project.featured;
    return project.technologies.includes(activeFilter);
  });

  // GSAP animation for staggered cards
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!sectionRef.current || !cardsContainerRef.current) return;

    // Create a timeline for the cards
    const cards = cardsContainerRef.current.children;

    ScrollTrigger.batch(cards, {
      onEnter: (batch) => {
        gsap.to(batch, {
          autoAlpha: 1,
          y: 0,
          stagger: 0.15,
          overwrite: true
        });
      },
      onLeave: (batch) => {
        gsap.set(batch, { autoAlpha: 0, y: 50, overwrite: true });
      },
      onEnterBack: (batch) => {
        gsap.to(batch, {
          autoAlpha: 1,
          y: 0,
          stagger: 0.15,
          overwrite: true
        });
      },
      onLeaveBack: (batch) => {
        gsap.set(batch, { autoAlpha: 0, y: 50, overwrite: true });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 bg-muted/30 dark:bg-muted/10 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <AnimatedSection className="text-center mb-16">
          <AnimatedText
            text="My Projects"
            className="text-3xl md:text-4xl font-bold mb-4"
            animationType="character"
          />
          <AnimatedText
            text="Check out some of my recent work"
            className="text-xl text-muted-foreground max-w-xl mx-auto"
            animationType="word"
          />
        </AnimatedSection>

        {/* Project Filters */}
        <Tabs
          defaultValue="all"
          className="mb-12"
          onValueChange={setActiveFilter}
        >
          <div className="flex justify-center">
            <TabsList className="grid grid-cols-2 md:grid-cols-7 gap-2">
              <TabsTrigger value="all" className="px-4">
                All
              </TabsTrigger>
              <TabsTrigger value="featured" className="px-4 flex items-center">
                <Sparkles className="mr-1 h-3 w-3" /> Featured
              </TabsTrigger>
              {topTechnologies.map((tech) => (
                <TabsTrigger key={tech} value={tech} className="px-4">
                  {tech}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </Tabs>

        {/* Projects Grid */}
        <div
          ref={cardsContainerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <AnimatedCard
                key={project.id}
                delay={index * 0.1}
                hoverEffect="lift"
                index={index}
                className="h-full"
              >
                <Card className="overflow-hidden h-full flex flex-col bg-card border border-border">
                  {/* Project Image with overlay */}
                  <div className="relative h-52 overflow-hidden">
                    <div className="absolute inset-0 bg-muted flex items-center justify-center text-4xl font-bold text-muted-foreground">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full rounded-xl shadow-md transition-transform duration-200 hover:scale-105"
                        />
                      ) : (
                        <div
                          className="flex items-center justify-center w-full h-full rounded-xl border-2 border-gray-300 bg-gray-100 text-3xl font-bold text-gray-600 shadow-md"
                          aria-label={project.title}
                        >
                          {project.title.charAt(0)}
                        </div>
                      )}
                    </div>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end"
                      whileHover={{ opacity: 1 }}
                    >
                      <div className="p-4">
                        <h4 className="text-white font-bold">
                          {project.title}
                        </h4>
                      </div>
                    </motion.div>
                  </div>

                  <CardContent className="flex-grow p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      {project.featured && (
                        <div className="bg-primary/10 px-2 py-1 rounded-full text-xs font-medium text-primary flex items-center">
                          <Sparkles className="mr-1 h-3 w-3" /> Featured
                        </div>
                      )}
                    </div>

                    <p className="text-muted-foreground mb-6">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.technologies.map((tech) => (
                        <span
                          key={`${project.id}-${tech}`}
                          className="px-2 py-1 bg-muted rounded-md text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="border-t border-border p-6 flex justify-between">
                    <Button size="sm" variant="outline" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" /> Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" /> Demo
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedCard>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state if no projects match filter */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground">
              No projects found with this filter.
            </p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => setActiveFilter('all')}
            >
              View All Projects
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
