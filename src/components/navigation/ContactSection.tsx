"use client";

import {
  MotionDiv,
  MotionH1,
  MotionH2,
  MotionH3,
  MotionP,
  MotionA,
  MotionB,
} from "@/lib/framer";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  MapPin,
  RocketIcon,
} from "lucide-react";
import { useRef } from "react";
import { useTransform, useScroll, motion } from "framer-motion";
import BackButton from "../ui/BackButton";
import { contactFormTexts, mediaLinks } from "@/data/nav.items";
import CustomButton from "../ui/CustomButton";

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
        <BackButton href="/" text="Back to Home" />
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <MotionH1 className="text-2xl xs:text-2.5xl sm:text-3xl md:text-3.5xl lg:text-4xl xl:text-4.5xl font-light mb-4">
            Let's work together
          </MotionH1>
          <MotionP className="text-gray-600 max-w-2xl leading-relaxed text-sm xs:text-base md:text-md lg:text-base">
            I'm open to full-time roles, contract work, and freelance projects.
            Whether you have an immediate need or want to discuss future
            opportunities, I'd love to hear about your project.
          </MotionP>
        </MotionDiv>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <MotionDiv
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={{ transformPerspective: 1000, skewY: leftSkew }}
            className="space-y-8"
          >
            <div>
              <MotionH2 className="text-md xs:text-base md:text-md lg:text-base font-medium mb-2">
                Direct Contact
              </MotionH2>
              <div className="space-y-2">
                <MotionA
                  href="mailto:trillionclues@gmail.com"
                  className="flex items-center gap-3 text-gray-700 hover:font-bold transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <span>trillionclues@gmail.com</span>
                </MotionA>

                <MotionDiv
                  className="flex items-center gap-3 text-gray-700"
                  whileHover={{ x: 5 }}
                >
                  <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <span>Lagos, Nigeria (Open to remote worldwide)</span>
                </MotionDiv>
              </div>
            </div>

            <div>
              <MotionH3 className="text-md xs:text-base md:text-md lg:text-base font-medium mb-2">
                Professional Profiles
              </MotionH3>
              <div className="space-y-3">
                {mediaLinks.map((link, index) => (
                  <MotionA
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:font-bold transition-colors group"
                    whileHover={{ x: 5 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {link.name}
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </MotionA>
                ))}
              </div>
            </div>
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ transformPerspective: 1000, skewY: rightSkew }}
            className="space-y-4"
          >
            <form className="space-y-4">
              {contactFormTexts.map((field, index) => (
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
                  {field.type === "textarea" ? (
                    <textarea
                      id={field.id}
                      name={field.id}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 resize-none focus:ring-gray-300"
                      placeholder={field.placeholder}
                    />
                  ) : (
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent focus:ring-gray-300 transition-all duration-200"
                      placeholder={field.placeholder}
                    />
                  )}
                </MotionDiv>
              ))}
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <CustomButton
                  type="submit"
                  variant="default"
                  size="md"
                  fullWidth
                  icon={<RocketIcon className="w-5 h-5" />}
                  iconPosition="left"
                  onClick={(e) => console.log(e)}
                >
                  Send Message
                </CustomButton>
              </MotionDiv>
            </form>
          </MotionDiv>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
