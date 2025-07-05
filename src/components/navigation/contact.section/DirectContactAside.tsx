import { mediaLinks } from "@/data";
import { MotionA, MotionDiv, MotionH2, MotionH3 } from "@/lib";
import { MotionValue } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageSquareTextIcon,
} from "lucide-react";
import React from "react";

export const DirectContactAside = ({
  leftSkew,
}: {
  leftSkew: MotionValue<number>;
}) => {
  return (
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
            href="https://cal.com/naijatechguy"
            className="flex items-center gap-3 text-gray-700 hover:font-bold transition-colors"
            whileHover={{ x: 5 }}
          >
            <MessageSquareTextIcon className="w-5 h-5 text-gray-400 flex-shrink-0" />
            <span>Schedule a meet</span>
          </MotionA>

          <MotionDiv
            className="flex items-center gap-3 text-gray-700"
            whileHover={{ x: 5 }}
          >
            <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0" />
            <span>Lagos, Nigeria (Open to EMEA roles)</span>
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
  );
};
