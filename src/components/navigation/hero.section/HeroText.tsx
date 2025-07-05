import { MotionDiv, MotionP } from "@/lib";
import React from "react";

export const HeroSectionText = () => {
  return (
    <>
      <MotionDiv
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        className="space-y-2 leading-relaxed"
      >
        <MotionP className="text-sm xs:text-base md:text-md lg:text-base text-gray-600 leading-relaxed">
          I&rsquo;m Excel Nwachukwu, a{" "}
          <span className="bg-gray-50 text-gray-800 px-1 rounded-md">
            frontend and mobile engineer
          </span>{" "}
          based in Lagos, Nigeria. As a software developer and design
          enthusiast, I&rsquo;m passionate about building intuitive, and
          performant frontend facing applications in remittance, e-commerce, and
          fintech industries.
        </MotionP>

        <MotionP className="text-sm xs:text-base md:text-md lg:text-base text-gray-600 leading-relaxed">
          My projects are focused on accessibility, performance, animations and
          product architecture. I especially love the thrill of building from
          scratch, but I also enjoy working with existing products.
        </MotionP>
      </MotionDiv>

      <MotionDiv
        className="text-sm xs:text-base md:text-md lg:text-base text-gray-500"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, ease: "easeOut" }}
      >
        <MotionP>
          Currently, I&rsquo;m building a multitenant cross-border remittance
          platform and exploring centralized and decentralized finance and
          hackathons at XendFinance.
        </MotionP>
      </MotionDiv>
    </>
  );
};
