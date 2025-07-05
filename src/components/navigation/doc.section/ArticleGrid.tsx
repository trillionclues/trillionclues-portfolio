import { MotionA, MotionDiv, MotionH3, MotionP, MotionSpan } from "@/lib";
import { MediumPost } from "@/types";
import { MotionValue } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import React from "react";

const ArticleGrid = ({
  articles,
  leftSkew,
  rightSkew,
}: {
  articles: MediumPost[];
  leftSkew: MotionValue<number>;
  rightSkew: MotionValue<number>;
}) => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {articles?.map((article, index) => (
        <MotionDiv
          key={article.guid}
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
          className="group cursor-pointer border border-gray-200 rounded-lg  p-4 hover:shadow-sm transition-all"
        >
          {article?.thumbnail && (
            <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
              <Image
                src={article?.thumbnail}
                alt={article?.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                loading={"lazy"}
                width={500}
                height={500}
              />
            </div>
          )}
          <MotionH3
            className="font-medium mb-2 group-hover:font-bold-400 transition-colors"
            whileHover={{ x: 3 }}
          >
            {article?.title}
          </MotionH3>
          <MotionP className="text-gray-600 text-sm mb-3 leading-relaxed">
            {article?.description.replace(/<[^>]+>/g, "").substring(0, 160)}
            ...
          </MotionP>
          <div className="flex items-center justify-between mt-4">
            <MotionSpan className="text-xs text-gray-500">
              {new Date(article.pubDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </MotionSpan>
            <MotionA
              href={article?.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-black-300 hover:font-bold-400 transition-colors text-sm"
              whileHover={{
                x: 5,
                transition: { type: "spring", stiffness: 400 },
              }}
            >
              <ExternalLink className="w-4 h-4" /> Read on Medium
            </MotionA>
          </div>
        </MotionDiv>
      ))}
    </div>
  );
};

export default ArticleGrid;
