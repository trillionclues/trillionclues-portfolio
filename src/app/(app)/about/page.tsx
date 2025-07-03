"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  FileText,
  Monitor,
  Smartphone,
  Code,
} from "lucide-react";

const skills = [
  {
    icon: <Monitor className="w-6 h-6" />,
    title: "Frontend Development",
    desc: "React, Next.js, Vue.js, TypeScript",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Mobile Development",
    desc: "React Native, Flutter, Native Android",
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Backend Integration",
    desc: "REST APIs, GraphQL, Firebase, Node.js",
  },
];

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center section-padding">
      <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl lg:text-4xl font-light">About Me</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              I'm a passionate frontend and mobile developer with a keen eye for
              detail and user experience. My journey began with web development,
              and I've since expanded into mobile development with plans to
              specialize further in Android development.
            </p>
            <p>
              I believe in writing clean, maintainable code and creating digital
              experiences that not only look great but perform exceptionally
              well. Every project is an opportunity to learn something new and
              push the boundaries of what's possible.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open source projects, or sharing insights through
              my writing on Medium.
            </p>
          </div>

          <div className="flex gap-4">
            {[
              {
                href: "https://github.com/trillionclues",
                icon: <Github className="w-4 h-4" />,
                label: "GitHub",
              },
              {
                href: "https://www.linkedin.com/in/trillionclues-excel/",
                icon: <Linkedin className="w-4 h-4" />,
                label: "LinkedIn",
              },
              {
                href: "http://trillionclues.medium.com/",
                icon: <FileText className="w-4 h-4" />,
                label: "Medium",
              },
            ].map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
                whileHover={{ scale: 1.05, y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                {link.icon} {link.label}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <h3 className="text-lg font-medium text-gray-400">
            Skills & Expertise
          </h3>
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="flex gap-4 items-start"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  {skill.icon}
                </div>
                <div>
                  <h4 className="font-medium">{skill.title}</h4>
                  <p className="text-gray-600 text-sm">{skill.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
