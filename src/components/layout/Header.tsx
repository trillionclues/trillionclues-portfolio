"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Section } from "@/types";
import { MotionB, MotionDiv, MotionHeader, MotionSpan } from "@/lib";
import { NavItems } from "@/data";

export function Header() {
  const pathname = usePathname();
  const activeSection = (
    pathname === "/" ? "home" : pathname.split("/")[1]
  ) as Section;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <MotionHeader
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm max-w-4xl mx-auto px-6 lg:px-8 h-16"
    >
      <div className="flex justify-between items-center py-5 max-w-4xl mx-auto">
        <Link href="/" passHref>
          <MotionDiv
            whileHover={{ scale: 1.05 }}
            className="w-6 h-6 rounded-full bg-black flex items-center justify-center cursor-pointer"
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <MotionSpan className="text-white font-normal text-md italic">
              T.
            </MotionSpan>
          </MotionDiv>
        </Link>

        <nav className="hidden md:flex space-x-4">
          {NavItems.map((item) => (
            <Link key={item.id} href={item.path} passHref>
              <MotionB
                className={`relative py-1 text-xs font-medium cursor-pointer ${
                  activeSection === item.id
                    ? "text-gray-900"
                    : "text-gray-500 hover:text-gray-900"
                }`}
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                {activeSection === item.id && (
                  <MotionSpan
                    layoutId="activeTab"
                    className="absolute inset-x-0 -bottom-px h-px bg-gray-900"
                    initial={false}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </MotionB>
            </Link>
          ))}
        </nav>

        <div className="md:hidden flex items-center" ref={mobileMenuRef}>
          <MotionB
            className="flex items-center gap-1 text-xs font-medium text-gray-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {NavItems.find((item) => item.id === activeSection)?.label ||
              "Menu"}
            {mobileMenuOpen ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </MotionB>

          {mobileMenuOpen && (
            <MotionDiv
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100"
            >
              {NavItems.map((item) => (
                <Link key={item.id} href={item.path} passHref>
                  <MotionB
                    className={`block px-4 py-2 text-sm ${
                      activeSection === item.id
                        ? "bg-gray-100 text-gray-900 font-medium"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                    whileHover={{ x: 2 }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="flex items-center justify-between">
                      {item.label}
                    </div>
                  </MotionB>
                </Link>
              ))}
            </MotionDiv>
          )}
        </div>
      </div>
    </MotionHeader>
  );
}
