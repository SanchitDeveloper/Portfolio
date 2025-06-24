import { useInView } from "react-intersection-observer";
import { useAnimation, type AnimationControls } from "framer-motion";
import { useEffect } from "react";

interface UseScrollAnimationProps {
  threshold?: number;
  triggerOnce?: boolean;
  delay?: number;
}

interface UseScrollAnimationReturn {
  ref: (node?: Element | null) => void;
  controls: AnimationControls;
  inView: boolean;
}

export const useScrollAnimation = ({
  threshold = 0.1,
  triggerOnce = true,
  delay = 0,
}: UseScrollAnimationProps = {}): UseScrollAnimationReturn => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        controls.start("visible");
      }, delay);
    } else {
      controls.start("hidden");
    }
  }, [controls, inView, delay]);

  return { ref, controls, inView };
};

export default useScrollAnimation;
