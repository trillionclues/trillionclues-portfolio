"use client";

import { projects } from "@/data/portfolio";
import { MotionDiv, MotionH2, MotionH3, MotionP, MotionA } from "@/lib/framer";
import { ExternalLink, Code, ArrowLeft } from "lucide-react";
import { useRef, useState } from "react";
import { useTransform, useScroll, motion } from "framer-motion";
import Link from "next/link";

const categories = [
  "All",
  "Machine Learning / AI",
  "Networking & Cloud",
  "Algorithms",
  "Backend Systems",
  "Database Systems",
  "Data Analytics",
  "Hardware Engineering",
  "Frontend & UI",
  "Full Stack",
  "Libraries & Frameworks",
];

const ProjectSection = () => {
  const containerRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState(4);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const leftSkew = useTransform(scrollYProgress, [0, 1], [0, -2]);
  const rightSkew = useTransform(scrollYProgress, [0, 1], [0, 2]);

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" ||
      project.tags.some((tag) => tag.includes(selectedCategory.split(" ")[0]));
    return matchesSearch && matchesCategory;
  });

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => prev + 4);
  };

  return (
    <div ref={containerRef} className="flex-1 pt-8 pb-8">
      <div className="max-w-4xl w-full mx-auto px-6 lg:px-8 py-12">
        <MotionDiv
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <MotionH2 className="text-3xl lg:text-4xl font-light mb-4">
            Selected Projects
          </MotionH2>
          <MotionP className="text-gray-600 max-w-2xl">
            A collection of work showcasing my expertise across multiple
            domains.
          </MotionP>
        </MotionDiv>

        {/* Search and Filter Section */}
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
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            {categories.map((category) => (
              <motion.button
                key={category}
                className={`px-3 py-1 text-sm rounded-full ${
                  selectedCategory === category
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </MotionDiv>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.slice(0, visibleProjects).map((project, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -5,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 },
              }}
              style={{
                transformPerspective: 1000,
                skewY: index % 2 === 0 ? leftSkew : rightSkew,
              }}
              className="group cursor-pointer border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all"
            >
              <div className="aspect-video bg-gradient-to-br from-blue-50 to-gray-100 rounded-lg mb-4 flex items-center justify-center group-hover:bg-gray-50 transition-colors overflow-hidden">
                <Code className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform" />
              </div>
              <MotionH3
                className="font-medium mb-2 group-hover:text-blue-600 transition-colors"
                whileHover={{ x: 3 }}
              >
                {project.title}
              </MotionH3>
              <MotionP className="text-gray-600 text-sm mb-3 leading-relaxed">
                {project.description}
              </MotionP>
              <div className="flex gap-2 flex-wrap mb-3">
                {project.tags.map((tag, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    className="text-xs bg-gray-100 px-2 py-1 rounded"
                    whileHover={{ scale: 1.05 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
              {project.liveLink && (
                <MotionA
                  href={project.liveLink}
                  target="_blank"
                  className="flex items-center gap-1 text-blue-500 hover:text-blue-700 transition-colors text-sm"
                  whileHover={{
                    x: 5,
                    transition: { type: "spring", stiffness: 400 },
                  }}
                >
                  <ExternalLink className="w-4 h-4" /> View Project ➤
                </MotionA>
              )}
            </MotionDiv>
          ))}
        </div>

        {/* "Show More" Button */}
        {visibleProjects < filteredProjects.length && (
          <MotionDiv
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.button
              className="px-6 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={loadMoreProjects}
            >
              Show More Projects
            </motion.button>
          </MotionDiv>
        )}
      </div>
    </div>
  );
};

export default ProjectSection;
