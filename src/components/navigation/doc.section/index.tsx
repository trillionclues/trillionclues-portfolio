"use client";

import { useRef } from "react";
import { useMediumArticles } from "@/components/hooks";
import { useTransform, useScroll } from "framer-motion";
import { MotionDiv, MotionH2, MotionP } from "@/lib";
import LoadingRoutes from "@/components/ui/LoadingRoutes";
import { Book } from "lucide-react";
import ArticleError from "./ArticleError";
import ArticleGrid from "./ArticleGrid";
import { BackButton, CustomButton } from "@/components/ui";

interface DocSectionProps {
  username?: string;
}

export const DocSection: React.FC<DocSectionProps> = ({
  username = "trillionclues",
}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const leftSkew = useTransform(scrollYProgress, [0, 1], [0, -2]);
  const rightSkew = useTransform(scrollYProgress, [0, 1], [0, 2]);

  const { articles, loading, error, refetch } = useMediumArticles(username);

  if (loading) {
    return <LoadingRoutes />;
  }

  if (error) {
    return <ArticleError refetch={refetch} error={error} />;
  }

  return (
    <div ref={containerRef} className="flex-1 pt-8 pb-8">
      <div className="max-w-4xl w-full mx-auto px-6 lg:px-8 py-12">
        <BackButton href="/" text="Back to Home" />
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <MotionH2 className="text-2xl xs:text-2.5xl sm:text-3xl md:text-3.5xl lg:text-4xl xl:text-4.5xl font-light mb-4">
            Latest Docs.
          </MotionH2>
          <MotionP className="text-gray-600 max-w-2xl">
            Based soliloquies, technical discoveries, and career introspections
            (to understand self) while sharing lessons and heartbreaks served
            along the way 🫡
          </MotionP>
        </MotionDiv>
        <ArticleGrid
          articles={articles}
          leftSkew={leftSkew}
          rightSkew={rightSkew}
        />
        <CustomButton
          type="button"
          variant="default"
          size="md"
          fullWidth
          icon={<Book className="w-5 h-5" />}
          iconPosition="left"
          whileHover={{ scale: 1.02 }}
          onClick={() =>
            window.open("https://medium.com/@trillionclues", "_blank")
          }
          className="mt-8"
        >
          Read More
        </CustomButton>
      </div>
    </div>
  );
};
