// useLoadAnimation.ts
import { useMemo } from "react";

const useLoadAnimation = () => {
  const itemVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },   
  }), []);
  const transition = useMemo(() => ({
    duration: 0.6,
    ease: "easeOut",
  }), []);

  return { itemVariants, transition };
};

export default useLoadAnimation;
