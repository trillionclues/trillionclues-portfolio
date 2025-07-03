"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "../home/HomePage";

interface NavigationProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}

export const Navigation = ({
  activeSection,
  setActiveSection,
}: NavigationProps) => {
  const navItems: { label: string; value: Section }[] = [
    { label: "About", value: "about" },
    { label: "Projects", value: "projects" },
    { label: "Contact", value: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200"
    >
      <div className="container-max section-padding !py-4">
        <div className="flex justify-between items-center">
          <motion.button
            onClick={() => setActiveSection("home")}
            className="text-lg font-medium hover:text-gray-600 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Trillionclues
          </motion.button>

          <div className="flex gap-8 text-sm">
            {navItems.map((item) => (
              <motion.button
                key={item.value}
                onClick={() => setActiveSection(item.value)}
                className={`transition-colors relative ${
                  activeSection === item.value
                    ? "text-black"
                    : "text-gray-600 hover:text-black"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                {activeSection === item.value && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black"
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
