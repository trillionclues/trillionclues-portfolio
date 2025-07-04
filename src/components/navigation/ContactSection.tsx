"use client";

import {
  MotionDiv,
  MotionH1,
  MotionH2,
  MotionH3,
  MotionP,
  MotionA,
} from "@/lib/framer";
import { ArrowLeft, ArrowUpRight, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { useTransform, useScroll, motion } from "framer-motion";

const ContactSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const leftSkew = useTransform(scrollYProgress, [0, 1], [0, -2]);
  const rightSkew = useTransform(scrollYProgress, [0, 1], [0, 2]);

  return (
    <div ref={containerRef} className="flex-1 pt-8 pb-8">
      <div className="max-w-4xl w-full mx-auto px-6 lg:px-8 py-12">
        {/* Back Button */}
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

        {/* Main Content */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <MotionH1 className="text-3xl lg:text-4xl font-light mb-6">
            Let's work together
          </MotionH1>
          <MotionP className="text-gray-600 max-w-2xl leading-relaxed">
            I'm always interested in new opportunities and collaborations.
            Whether you have a project in mind or just want to chat about
            technology, feel free to reach out.
          </MotionP>
        </MotionDiv>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Info */}
          <MotionDiv
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={{ transformPerspective: 1000, skewY: leftSkew }}
            className="space-y-8"
          >
            <div>
              <MotionH2 className="text-xl font-medium mb-6">
                Get in touch
              </MotionH2>

              <div className="space-y-4">
                <MotionA
                  href="mailto:your.email@example.com"
                  className="flex items-center gap-3 text-gray-700 hover:text-black transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <span>your.email@example.com</span>
                </MotionA>

                <MotionDiv
                  className="flex items-center gap-3 text-gray-700"
                  whileHover={{ x: 5 }}
                >
                  <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <span>Lagos, Nigeria</span>
                </MotionDiv>
              </div>
            </div>

            <div>
              <MotionH3 className="text-lg font-medium mb-4">
                Find me online
              </MotionH3>
              <div className="space-y-3">
                {[
                  { name: "GitHub", url: "https://github.com/yourusername" },
                  {
                    name: "LinkedIn",
                    url: "https://linkedin.com/in/yourusername",
                  },
                  { name: "Twitter", url: "https://twitter.com/yourusername" },
                  { name: "Resume", url: "/resume.pdf" },
                ].map((item, index) => (
                  <MotionA
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors group"
                    whileHover={{ x: 5 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.name}
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </MotionA>
                ))}
              </div>
            </div>
          </MotionDiv>

          {/* Right Column - Contact Form */}
          <MotionDiv
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ transformPerspective: 1000, skewY: rightSkew }}
            className="space-y-6"
          >
            <MotionH2 className="text-xl font-medium mb-6">
              Send a message
            </MotionH2>

            <form className="space-y-6">
              {[
                { id: "name", label: "Name", placeholder: "Your name" },
                {
                  id: "email",
                  label: "Email",
                  placeholder: "your.email@example.com",
                },
                {
                  id: "subject",
                  label: "Subject",
                  placeholder: "What's this about?",
                },
              ].map((field, index) => (
                <MotionDiv
                  key={field.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <label
                    htmlFor={field.id}
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.id === "email" ? "email" : "text"}
                    id={field.id}
                    name={field.id}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                    placeholder={field.placeholder}
                  />
                </MotionDiv>
              ))}

              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-colors resize-none"
                  placeholder="Tell me about your project or idea..."
                />
              </MotionDiv>

              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <motion.button
                  type="submit"
                  className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Send Message
                </motion.button>
              </MotionDiv>
            </form>
          </MotionDiv>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
