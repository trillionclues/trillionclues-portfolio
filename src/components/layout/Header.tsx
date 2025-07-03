"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Section } from "@/types/nav_items";
import { MotionB, MotionDiv, MotionHeader, MotionSpan } from "@/lib/framer";
import { NavItems } from "@/data/nav_items";

function Header() {
  const pathname = usePathname();
  const activeSection = pathname.split("/")[1] || ("home" as Section);

  return (
    <MotionHeader
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm max-w-4xl mx-auto px-6 lg:px-8 rounded-lg md:rounded-xl"
    >
      <div className="flex justify-between items-center h-16 max-w-4xl mx-auto">
        <Link href="/" passHref>
          <MotionDiv
            whileHover={{ scale: 1.05 }}
            className="w-6 h-6 rounded-full bg-black flex items-center justify-center cursor-pointer"
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className="text-white font-normal text-md italic">T.</span>
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
      </div>
    </MotionHeader>
  );
}

export default Header;
