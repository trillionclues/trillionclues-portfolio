"use client";

import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AboutAsideLeft } from "./AboutAsideLeft";
import { AboutAsideRight } from "./AboutAsideRight";

export const AboutSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const textSkew = useTransform(scrollYProgress, [0, 1], [0, -3]);
  const textTranslateX = useTransform(scrollYProgress, [0, 1], [0, -10]);

  return (
    <div ref={containerRef} className="flex-1 pt-8 pb-8">
      <div className="max-w-4xl w-full mx-auto px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AboutAsideLeft textSkew={textSkew} textTranslateX={textTranslateX} />
          <AboutAsideRight />
        </div>
      </div>
    </div>
  );
};
