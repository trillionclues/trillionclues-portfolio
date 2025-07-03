import { motion } from "framer-motion";

export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: "easeOut" },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1 },
};

export const slideInFromTop = {
  initial: { y: -100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.5 },
};

// flip animation preset
export const flipText = {
  initial: { rotateX: 0 },
  animate: { rotateX: 360 },
  transition: { duration: 1.5, ease: "backOut" },
};

export const MotionDiv = motion.div;
export const MotionH1 = motion.h1;
export const MotionHeader = motion.header;
export const MotionP = motion.p;
export const MotionB = motion.button;
export const MotionA = motion.a;
export const MotionSpan = motion.span;
