"use client";

import {
  FirstAboutParagraph,
  SecondAboutParagraph,
  ThirdAboutParagraph,
  skills,
} from "@/data/about.skill";
import { MotionDiv, MotionH2, MotionH3, MotionH4, MotionP } from "@/lib/framer";
import { useScroll, useTransform } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import BackButton from "../ui/BackButton";

const AboutSection = () => {
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

          <MotionDiv
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <MotionH3 className="text-lg font-medium text-gray-400">
              Skills & Expertise
            </MotionH3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <MotionDiv
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                    {skill.icon}
                  </div>
                  <div>
                    <MotionH4 className="font-medium text-sm">
                      {skill.title}
                    </MotionH4>
                    <MotionP className="text-gray-600 text-xs">
                      {skill.desc}
                    </MotionP>
                  </div>
                </MotionDiv>
              ))}
              <BackButton href="/" text="Back to Home" />
            </div>
          </MotionDiv>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
