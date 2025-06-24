"use client";

import { useRef, useEffect, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

interface GsapRevealProps {
  children: ReactNode;
  className?: string;
  direction?: "left" | "right" | "up" | "down";
  duration?: number;
  delay?: number;
  distance?: number;
  stagger?: number;
  scrub?: boolean;
  markers?: boolean;
  trigger?: string;
  start?: string;
  end?: string;
  childrenClassName?: string;
}

export const GsapReveal = ({
  children,
  className,
  direction = "up",
  duration = 1,
  delay = 0,
  distance = 100,
  stagger = 0.1,
  scrub = false,
  markers = false,
  trigger,
  start = "top 80%",
  end = "bottom 20%",
  childrenClassName,
}: GsapRevealProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Calculate the correct transform based on direction
    const xPos = direction === "left" ? -distance : direction === "right" ? distance : 0;
    const yPos = direction === "up" ? distance : direction === "down" ? -distance : 0;

    // Get the elements to animate
    const elements = itemsRef.current?.children;

    if (!elements || elements.length === 0) return;

    // Create a GSAP timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger ? trigger : containerRef.current,
        start: start,
        end: scrub ? end : "",
        scrub: scrub,
        markers: markers,
        toggleActions: !scrub ? "play none none reset" : undefined,
      },
    });

    // Animate the elements
    tl.fromTo(
      elements,
      {
        x: xPos,
        y: yPos,
        opacity: 0
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: duration,
        stagger: stagger,
        delay: delay,
        ease: "power3.out",
      }
    );

    // Cleanup function
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [
    direction,
    duration,
    delay,
    distance,
    stagger,
    scrub,
    markers,
    trigger,
    start,
    end
  ]);

  return (
    <div ref={containerRef} className={className}>
      <div ref={itemsRef} className={cn("", childrenClassName)}>
        {children}
      </div>
    </div>
  );
};

export default GsapReveal;
