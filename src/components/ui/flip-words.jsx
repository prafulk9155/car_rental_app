"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const FlipWords = ({ words, duration = 3000, className }) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = useCallback(() => {
    const nextWord = words[(words.indexOf(currentWord) + 1) % words.length];
    setCurrentWord(nextWord);
    setIsAnimating(true); // Set to true to trigger animation
  }, [currentWord, words]);

  useEffect(() => {
    if (!isAnimating) {
      const timer = setTimeout(() => {
        startAnimation();
      }, duration);
      return () => clearTimeout(timer); // Cleanup timeout
    }
  }, [isAnimating, duration, startAnimation]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false); // Reset animation state
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 10, // Start slightly translated down
        }}
        animate={{
          opacity: 1,
          y: 0, // Animate to the original position
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        exit={{
          opacity: 0,
          y: -40,
          x: 40,
          filter: "blur(8px)",
          scale: 2,
          position: "absolute",
        }}
        className={cn(
          "z-10 inline-block relative text-left text-neutral-900 dark:text-neutral-100 px-2",
          className
        )}
        key={currentWord} // Use current word to trigger re-renders
      >
        {currentWord.split("").map((letter, index) => (
          <motion.span
            key={currentWord + index} // Unique key for each letter
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }} // Start properties for letters
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} // Animate properties for letters
            transition={{
              delay: index * 0.08, // Staggered effect for letters
              duration: 0.4,
            }}
            className="inline-block text-white"
          >
            {letter} {/* Render each letter */}
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
