import { useState, useEffect, RefObject } from "react";
import { useInView } from "framer-motion";

/**
 * Custom hook that creates a key to reset animations when an element scrolls into view
 * @param ref Reference to the element being watched for visibility
 * @returns A key value that changes whenever the element comes into view
 */
export const useResetAnimation = (ref: RefObject<HTMLElement>) => {
  const [key, setKey] = useState(0);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [prevInView, setPrevInView] = useState(false);

  useEffect(() => {
    if (isInView && !prevInView) {
      // Element just came into view - reset the animation
      setKey(prev => prev + 1);
    }
    setPrevInView(isInView);
  }, [isInView, prevInView]);

  return key;
};