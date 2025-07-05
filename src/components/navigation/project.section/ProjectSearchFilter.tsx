import { portolioCategories } from "@/data";
import { MotionB, MotionDiv } from "@/lib";
import { ProjectSearchFilterProps } from "@/types";
import React from "react";

export const ProjectSearchFilter = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
}: ProjectSearchFilterProps) => {
  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="mb-8"
    >
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search Excel's Projects"
          className="w-full text-xs md:text-base px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <svg
          className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {portolioCategories.map((category) => (
          <MotionB
            key={category}
            className={`cursor-pointer px-3 py-1 text-xs rounded-full ${
              selectedCategory === category
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-700 hover:bg-black hover:text-white"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </MotionB>
        ))}
      </div>
    </MotionDiv>
  );
};
