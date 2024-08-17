"use client"; // If you're working with Next.js 13

import React, { useEffect, useRef, useState, createContext, useContext } from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image"; // Ensure Next.js Image component is imported

// Context to manage carousel state
const CarouselContext = createContext(null);

// Carousels props
export const Carousel = ({ items, initialScroll = 0 }) => {
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll; // Scroll to initial position
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index) => {
    setCurrentIndex(index);
  };

  return (
    <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll py-10 scroll-smooth"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div className={cn("absolute right-0 z-[1000] w-[5%] overflow-hidden bg-gradient-to-l")} />
          <div className={cn("flex flex-row justify-start gap-4 pl-4")}>
            {items.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 * index }}}
                key={index}
                className="last:pr-[5%] md:last:pr-[33%] rounded-3xl"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex justify-end gap-2 mr-10">
          <button
            className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
          </button>
          <button
            className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

// Card Component
export const Card = ({ card, index }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const { onCardClose } = useContext(CarouselContext);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") handleClose();
    };

    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      <button onClick={handleOpen} className="rounded-3xl">
        <Image src={card.src} alt={card.title} width={600} height={400} className="rounded-3xl" />
        <div>
          <h3>{card.title}</h3>
          <span>{card.category}</span>
        </div>
      </button>

      {/* Modal to show card details */}
      {open && (
        <div className="fixed inset-0 z-50">
          <div className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0" />
          <div
            ref={containerRef}
            className="max-w-5xl mx-auto bg-white dark:bg-neutral-900 h-fit z-[60] my-10 p-4 md:p-10 rounded-3xl font-sans relative"
          >
            <button className="absolute top-4 right-4" onClick={handleClose}>
              <IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
            </button>
            <h3>{card.title}</h3>
            <p>{card.category}</p>
            <div>{card.content}</div>
          </div>
        </div>
      )}
    </>
  );
};
