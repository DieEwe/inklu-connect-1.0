// src/components/home/PuzzleSquare.tsx
import React, { useRef } from "react";
import { motion, Variants } from "framer-motion";
import { useResetAnimation } from "@/hooks/useResetAnimation";

// Define the initial "hidden" positions for all pieces
const initialVariants = {
  hiddenTL: { x: -60, y: -60, rotate: -25, opacity: 0 },
  hiddenTR: { x:  60, y: -60, rotate:  25, opacity: 0 },
  hiddenBL: { x: -60, y:  60, rotate:  25, opacity: 0 },
  hiddenBR: { x:  60, y:  60, rotate: -25, opacity: 0 },
};

// Create custom variants for each piece to fine-tune final positions
const topLeftVariants: Variants = {
  ...initialVariants,
  visible: { x: 32, y: 16, rotate: 0, opacity: 1 } // Slight adjustments
};

const topRightVariants: Variants = {
  ...initialVariants,
  visible: { x: -14, y: 34, rotate: 0, opacity: 1 } // Slight adjustments
};

const bottomLeftVariants: Variants = {
  ...initialVariants,
  visible: { x: 14, y: -30, rotate: 0, opacity: 1 } // Slight adjustments
};

const bottomRightVariants: Variants = {
  ...initialVariants,
  visible: { x: -32, y: -12, rotate: 0, opacity: 1 } // More significant y-adjustment
};

const transition = { duration: 1.5, ease: "easeOut" };

export const PuzzleSquare: React.FC<{}> = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const animationKey = useResetAnimation(sectionRef);
  
  return (
    <section 
      className="relative w-full h-full flex items-center justify-center overflow-visible"
      ref={sectionRef}
    >
      {/* Container with 45° rotation */}
      <div 
        className="relative w-[250px] h-[250px] overflow-visible" 
        style={{ transform: "rotate(-45deg)" }}
        key={animationKey} // Key prop forces remount when changed
      >
        {/* top-left */}
        <motion.div className="absolute top-0 left-0 w-1/2 h-1/2 overflow-visible">
          <motion.img
            src="/images/piece-top-left.svg"
            alt="Puzzle top left"
            className="absolute top-0 left-0 w-full h-full object-contain"
            initial="hiddenTL"
            animate="visible" // Changed from whileInView to animate
            variants={topLeftVariants}
            transition={{ ...transition, delay: 0 }}
          />
        </motion.div>

        {/* top-right */}
        <motion.div className="absolute top-0 left-1/2 w-1/2 h-1/2 overflow-visible">
          <motion.img
            src="/images/piece-top-right.svg"
            alt="Puzzle top right"
            className="absolute top-0 left-0 w-full h-full object-contain"
            initial="hiddenTR"
            animate="visible"
            variants={topRightVariants}
            transition={{ ...transition, delay: 0.1 }}
          />
        </motion.div>

        {/* bottom-left */}
        <motion.div className="absolute top-1/2 left-0 w-1/2 h-1/2 overflow-visible">
          <motion.img
            src="/images/piece-bottom-left.svg"
            alt="Puzzle bottom left"
            className="absolute top-0 left-0 w-full h-full object-contain"
            initial="hiddenBL"
            animate="visible"
            variants={bottomLeftVariants}
            transition={{ ...transition, delay: 0.2 }}
          />
        </motion.div>

        {/* bottom-right */}
        <motion.div className="absolute top-1/2 left-1/2 w-1/2 h-1/2 overflow-visible">
          <motion.img
            src="/images/piece-bottom-right.svg"
            alt="Puzzle bottom right"
            className="absolute top-0 left-0 w-full h-full object-contain"
            initial="hiddenBR"
            animate="visible"
            variants={bottomRightVariants}
            transition={{ ...transition, delay: 0.3 }}
          />
        </motion.div>
      </div>
    </section>
  );
};
