import { MotionDiv } from "@/lib";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

export const BackButton = ({ href, text }: { href: string; text: string }) => {
  return (
    <MotionDiv
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-5"
    >
      <Link
        href={href}
        className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        {text}
      </Link>
    </MotionDiv>
  );
};
