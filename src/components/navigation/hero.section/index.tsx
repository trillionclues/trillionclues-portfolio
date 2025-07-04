"use client";

import React from "react";
import { FlipText } from "../../ui";
import { MotionDiv, MotionH1 } from "@/lib";
import { HeroSectionText } from "./HeroText";
import { HeroLinks } from "./HeroLinks";

export const HeroSection: React.FC = () => {
  return (
    <section className="flex-1 flex flex-col justify-center  overflow-hidden relative max-w-5xl mx-auto px-6 lg:px-8">
      <div className="max-w-4xl mx-auto px-2 lg:px-8">
        <MotionDiv
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          className="space-y-8"
        >
          <MotionH1
            className="text-2xl xs:text-2.5xl sm:text-3xl md:text-3.5xl lg:text-4xl xl:text-4.5xl font-light text-gray-900 leading-tight my-4 tracking-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          >
            Building digital <FlipText />.
          </MotionH1>
          <HeroSectionText />
          <HeroLinks />
        </MotionDiv>
      </div>
    </section>
  );
};
