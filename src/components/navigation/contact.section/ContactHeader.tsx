import { MotionDiv, MotionH1, MotionP } from "@/lib";
import React from "react";

export const ContactHeader = () => {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-8"
    >
      <MotionH1 className="text-2xl xs:text-2.5xl sm:text-3xl md:text-3.5xl lg:text-4xl xl:text-4.5xl font-light mb-4">
        Let&rsquo;s work together
      </MotionH1>
      <MotionP className="text-gray-600 max-w-2xl leading-relaxed text-sm xs:text-base md:text-md lg:text-base">
        I&rsquo;m open to full-time roles, contract work, and freelance
        projects. Whether you have an immediate need or want to discuss future
        opportunities, I&rsquo;d love to hear about your project.
      </MotionP>
    </MotionDiv>
  );
};
