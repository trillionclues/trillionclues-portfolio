"use client";

import { projects } from "@/data/portfolio";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code } from "lucide-react";

const Projects = () => {
  return (
    <div className="min-h-screen section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-light mb-4">
            Selected Projects
          </h2>
          <p className="text-gray-600 max-w-2xl">
            A collection of work showcasing my expertise in frontend and mobile
            development, from concept to deployment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center group-hover:bg-gray-200 transition-colors overflow-hidden">
                <Code className="w-8 h-8 text-gray-400 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-medium mb-2 group-hover:text-gray-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                {project.description}
              </p>
              <div className="flex gap-2 flex-wrap mb-3">
                {project.tags.slice(0, 3).map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-100 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="text-xs text-gray-400">
                    +{project.tags.length - 3} more
                  </span>
                )}
              </div>
              <div className="flex items-center gap-3 text-sm">
                <motion.a
                  href={project.liveLink}
                  className="flex items-center gap-1 text-gray-600 hover:text-black transition-colors"
                ></motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
