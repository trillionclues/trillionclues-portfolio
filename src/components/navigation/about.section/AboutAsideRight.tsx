import { BackButton } from "@/components/ui";
import { skills } from "@/data";
import { MotionDiv, MotionH3, MotionH4, MotionP } from "@/lib";
import React from "react";

export const AboutAsideRight = () => {
  return (
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
              <MotionH4 className="font-medium text-sm">{skill.title}</MotionH4>
              <MotionP className="text-gray-600 text-xs">{skill.desc}</MotionP>
            </div>
          </MotionDiv>
        ))}
        <BackButton href="/" text="Back to Home" />
      </div>
    </MotionDiv>
  );
};
