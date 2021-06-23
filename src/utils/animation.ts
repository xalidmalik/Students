import { Transition, Variants } from "framer-motion";

export const spring: Transition = {
  type: "spring",
  damping: 30,
  stiffness: 200,
  duration: 1.618,
};

export const highContainer: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,

    transition: {
      ...spring,
      staggerChildren: 0.05,
    },
  },
  exit: { opacity: 0 },
};

export const container: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export const item: Variants = {
  initial: { y: 10, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ...spring,
    },
  },
  exit: {
    y: -10,
    opacity: 0,
    transition: {
      ...spring,
    },
  },
};
