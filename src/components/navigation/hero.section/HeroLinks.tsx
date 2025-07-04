import { mediaLinks } from "@/data";
import { MotionA, MotionDiv } from "@/lib";
import { ArrowUpRight } from "lucide-react";
import React from "react";

export const HeroLinks = () => {
  return (
    <MotionDiv
      className="flex flex-wrap gap-6 text-sm md:text-base"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
    >
      {mediaLinks.map((item, index) => (
        <MotionA
          key={index}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group text-gray-600 hover:text-gray-900 transition-colors duration-300 underline decoration-1 underline-offset-4 flex items-center gap-1"
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
        >
          {item.name}{" "}
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </MotionA>
      ))}
    </MotionDiv>
  );
};
