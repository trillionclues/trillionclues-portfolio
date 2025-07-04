"use client";

import React from "react";
import { AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";
import Docs from "@/app/(app)/docs/page";
import { MotionDiv } from "@/lib";
import { AboutSection, HeroSection, ProjectSection } from "../navigation";
import { Section } from "@/types";
import { Contact } from "lucide-react";

const PortfolioApp = () => {
  const searchParams = useSearchParams();
  const activeSection = (searchParams.get("section") as Section) || "home";

  const renderSection = () => {
    const sections = {
      home: <HeroSection />,
      about: <AboutSection />,
      projects: <ProjectSection />,
      docs: <Docs />,
      contact: <Contact />,
    };

    return sections[activeSection];
  };

  return (
    <div className="min-h-screen bg-white flex flex-col ">
      <AnimatePresence mode="wait">
        <MotionDiv
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex-1 flex flex-col"
        >
          {renderSection()}
        </MotionDiv>
      </AnimatePresence>
    </div>
  );
};

export default PortfolioApp;
