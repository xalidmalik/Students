import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { IntersectionOptions, useInView } from "react-intersection-observer";

type useViewType = {
  title?: string;
  exit?: boolean;
  inViewOption?: IntersectionOptions;
};

export const useView = ({ title, exit = false, inViewOption }: useViewType) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ ...inViewOption });

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
    if (exit && !inView) {
      controls.start("exit");
    }
  }, [controls, exit, inView]);

  return { ref, controls, inView };
};
