"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const texts = ["experiences", "solutions", "systems", "products"];

export const FlipText: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.span
      className="italic font-normal inline-block origin-[50%_70%]"
      initial={{ rotateX: -90, opacity: 0 }}
      animate={{ rotateX: 0, opacity: 1 }}
      exit={{ rotateX: 90, opacity: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      key={currentIndex}
    >
      {texts[currentIndex]}
    </motion.span>
  );
};
