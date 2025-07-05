"use client";

import { useRef, useState } from "react";
import { useTransform, useScroll } from "framer-motion";
import { BackButton, CustomButton } from "../../ui";
import { MotionDiv, MotionH2, MotionP } from "@/lib";
import { projects } from "@/data";
import { ProjectCardItem } from "./ProjectCard";
import { ChevronDown } from "lucide-react";
import { ProjectSearchFilter } from "./ProjectSearchFilter";

export const ProjectSection = () => {
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
      project.technologies.some((tag) =>
        tag.includes(selectedCategory.split(" ")[0])
      );
    return matchesSearch && matchesCategory;
  });

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => prev + 4);
  };

  return (
    <div ref={containerRef} className="flex-1 pt-8 pb-8">
      <div className="max-w-4xl w-full mx-auto px-6 lg:px-8 py-12">
        <BackButton href="/" text="Back to Home" />
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <MotionH2 className="text-2xl xs:text-2.5xl sm:text-3xl md:text-3.5xl lg:text-4xl xl:text-4.5xl font-light mb-4">
            Selected Projects
          </MotionH2>
          <MotionP className="text-gray-600 max-w-2xl">
            A collection of work showcasing my expertise across multiple
            domains.
          </MotionP>
        </MotionDiv>

        <ProjectSearchFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.slice(0, visibleProjects).map((project, index) => (
            <ProjectCardItem
              key={project.title}
              leftSkew={leftSkew}
              rightSkew={rightSkew}
              index={index}
              project={project}
            />
          ))}
        </div>

        {visibleProjects < filteredProjects.length && (
          <MotionDiv
            className="mt-5 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <CustomButton
              type="button"
              variant="default"
              size="md"
              fullWidth
              icon={<ChevronDown className="w-5 h-5" />}
              iconPosition="left"
              whileHover={{ scale: 1.02 }}
              onClick={loadMoreProjects}
              className="mt-5"
            >
              Show More Projects
            </CustomButton>
          </MotionDiv>
        )}
      </div>
    </div>
  );
};
