"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Projects from "@/app/(app)/projects/page";
import About from "@/app/(app)/about/page";
import Contact from "@/app/(app)/docs/page";
import HeroSection from "../navigation/HeroSection";
import { Section } from "@/types/nav.items";
import { useSearchParams } from "next/navigation";
import Docs from "@/app/(app)/docs/page";

const PortfolioApp = () => {
  const searchParams = useSearchParams();
  const activeSection = (searchParams.get("section") as Section) || "home";

  const renderSection = () => {
    const sections = {
      home: <HeroSection />,
      about: <About />,
      projects: <Projects />,
      docs: <Docs />,
      contact: <Contact />,
    };

    return sections[activeSection];
  };

  return (
    <div className="min-h-screen bg-white flex flex-col ">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex-1 flex flex-col"
        >
          {renderSection()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PortfolioApp;
