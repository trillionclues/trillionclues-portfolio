import {
  FirstAboutParagraph,
  SecondAboutParagraph,
  ThirdAboutParagraph,
} from "@/data";
import { MotionDiv, MotionH2 } from "@/lib";
import { MotionValue } from "framer-motion";
import React from "react";

export const AboutAsideLeft = ({
  textSkew,
  textTranslateX,
}: {
  textSkew?: MotionValue<number>;
  textTranslateX?: MotionValue<number>;
}) => {
  return (
    <MotionDiv
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
      style={{
        transformPerspective: 1000,
        skewY: textSkew,
        x: textTranslateX,
      }}
    >
      <MotionH2 className="text-2xl xs:text-2.5xl sm:text-3xl md:text-3.5xl lg:text-4xl xl:text-4.5xl font-light">
        About Me
      </MotionH2>
      <div className="space-y-4 text-gray-600 leading-relaxed">
        <FirstAboutParagraph />
        <SecondAboutParagraph />
        <ThirdAboutParagraph />
      </div>
    </MotionDiv>
  );
};
