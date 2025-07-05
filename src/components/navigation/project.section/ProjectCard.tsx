import { getTechColor } from "@/data";
import { MotionA, MotionDiv, MotionH3, MotionP, MotionSpan } from "@/lib";
import { ProjectCardProps } from "@/types";
import { Code } from "lucide-react";
import React from "react";

export const ProjectCardItem = ({
  leftSkew,
  rightSkew,
  index,
  project,
}: ProjectCardProps) => {
  return (
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
      className="group cursor-pointer border border-gray-200 rounded-lg p-3 hover:shadow-sm transition-all"
    >
      <div className="aspect-video bg-gradient-to-br from-blue-50 to-gray-100 rounded-lg mb-4 flex items-center justify-center group-hover:bg-gray-50 transition-colors overflow-hidden">
        <Code className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform" />
      </div>

      {project.liveLink && (
        <MotionA
          href={project.liveLink}
          whileHover={{
            x: 5,
            transition: { type: "spring", stiffness: 400 },
          }}
        >
          <MotionH3
            className="font-medium mb-2 group-hover:font-medium transition-colors"
            whileHover={{ x: 3 }}
          >
            {project?.title}
          </MotionH3>
          <MotionP className="text-gray-500 text-sm mb-3 leading-relaxed">
            {project?.description}
          </MotionP>
          <div className="flex items-center gap-1 mb-3 flex-wrap">
            {project?.technologies?.map((tech: string, i: number) => {
              const techColor = getTechColor(tech);
              return (
                <React.Fragment key={i}>
                  <MotionDiv
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    className="flex items-center gap-1"
                  >
                    <span
                      className="rounded-full w-1 h-1"
                      style={{ backgroundColor: techColor }}
                    />
                    <span className="text-xs text-gray-600">
                      {tech}
                      {i < project?.technologies.length - 1 && " | "}
                    </span>
                  </MotionDiv>
                </React.Fragment>
              );
            })}
          </div>
        </MotionA>
      )}
    </MotionDiv>
  );
};
