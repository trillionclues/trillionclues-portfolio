"use client";

import { useRef } from "react";
import { useTransform, useScroll } from "framer-motion";
import { BackButton } from "../../ui";
import { DirectContactAside } from "./DirectContactAside";
import { FormContactAside } from "./FormContactAside";
import { ContactHeader } from "./ContactHeader";

export const ContactSection = () => {
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
        <ContactHeader />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <DirectContactAside leftSkew={leftSkew} />
          <FormContactAside rightSkew={rightSkew} />
        </div>
      </div>
    </div>
  );
};
