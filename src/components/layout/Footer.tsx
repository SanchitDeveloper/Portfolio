"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolio-data";
import AnimatedText from "@/components/animations/AnimatedText";

const staggerContainer = {
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

const socialLinks = [
  {
    name: "Github",
    icon: Github,
    href: portfolioData.developer.socialLinks.github,
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: portfolioData.developer.socialLinks.linkedin,
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: portfolioData.developer.socialLinks.twitter,
  },
  {
    name: "Email",
    icon: Mail,
    href: `mailto:${portfolioData.developer.email}`,
  },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-muted/30 dark:bg-muted/10 border-t border-border">
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo and info */}
          <motion.div
            className="flex flex-col space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={itemVariants} className="flex items-center">
              <span className="text-2xl font-bold">
                <span className="text-primary">{portfolioData.developer.name.split(" ")[0]}</span>
                {portfolioData.developer.name.split(" ")[1]}
              </span>
            </motion.div>
            <motion.p variants={itemVariants} className="text-muted-foreground">
              {portfolioData.developer.description}
            </motion.p>
            <motion.div variants={itemVariants} className="text-muted-foreground">
              {portfolioData.developer.location}
            </motion.div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            className="flex flex-col space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h3 variants={itemVariants} className="text-lg font-medium">
              Quick Links
            </motion.h3>
            <motion.div variants={itemVariants} className="flex flex-col space-y-2">
              <Link href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
                Skills
              </Link>
              <Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="#experience" className="text-muted-foreground hover:text-primary transition-colors">
                Experience
              </Link>
              <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </motion.div>
          </motion.div>

          {/* Connect */}
          <motion.div
            className="flex flex-col space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h3 variants={itemVariants} className="text-lg font-medium">
              Connect
            </motion.h3>
            <motion.div variants={itemVariants} className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-background hover:bg-primary/10 transition-colors"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.name}
                >
                  <link.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
            <motion.div variants={itemVariants}>
              <Button className="mt-4" asChild>
                <Link href="#contact">Get In Touch</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-16 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <AnimatedText
            text={`© ${new Date().getFullYear()} ${portfolioData.developer.name}. All Rights Reserved.`}
            className="text-sm text-muted-foreground text-center md:text-left"
            animationType="full"
          />
          <motion.button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-2 rounded-full bg-background hover:bg-primary/10 transition-colors"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
