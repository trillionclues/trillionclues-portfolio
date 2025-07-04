"use client";

import { motion } from "framer-motion";
import React from "react";
import FlipText from "../ui/FlipText";
import { mediaLinks } from "@/data/nav.items";
import { MotionA, MotionDiv, MotionH1, MotionP } from "@/lib/framer";
import { ArrowUpRight } from "lucide-react";

const HeroSection: React.FC = () => {
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

          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="space-y-2 leading-relaxed"
          >
            <MotionP className="text-sm xs:text-base md:text-md lg:text-base text-gray-600 leading-relaxed">
              I'm Excel Nwachukwu, a frontend and mobile engineer based in
              Lagos, Nigeria. As a software developer and design enthusiast, I'm
              passionate about building intuitive, and performant frontend
              facing applications in remittance, e-commerce, and fintech
              industries.
            </MotionP>

            <MotionP className="text-sm xs:text-base md:text-md lg:text-base text-gray-600 leading-relaxed">
              My projects are focused on accessibility, performance, animations
              product architecture. I especially love the thrill of building
              from scratch, but I also enjoy working with existing products.
            </MotionP>
          </MotionDiv>

          <MotionDiv
            className="text-sm xs:text-base md:text-md lg:text-base text-gray-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          >
            <MotionP>
              Currently, I’m building a multitenant cross-border remittance
              platform and exploring centralized and decentralized finance and
              hackathons at XendFinance.
            </MotionP>
          </MotionDiv>

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
        </MotionDiv>
      </div>
    </section>
  );
};

export default HeroSection;
