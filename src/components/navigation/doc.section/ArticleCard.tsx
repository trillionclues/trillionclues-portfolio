import Link from "next/link";
import { getOptimizedImageUrl } from "@/lib/constants";
import { MediumPost } from "@/types";
import Image from "next/image";
import { MotionDiv, MotionH3, MotionP, MotionSpan } from "@/lib";

interface ArticleCardProps {
  article: MediumPost;
  priority?: boolean;
}

export const ArticleCard = ({
  article,
  priority = false,
}: ArticleCardProps) => {
  const articleId = article.guid.split("/").pop();
  const optimizedImage = article.thumbnail
    ? getOptimizedImageUrl(article.thumbnail, { width: 400, height: 225 })
    : null;

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
      className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-all"
    >
      <Link className="block h-full" href={`/docs/${articleId}`} passHref>
        {optimizedImage && (
          <Image
            src={optimizedImage}
            alt={article.title}
            className="w-full h-48 object-cover"
            loading={priority ? "eager" : "lazy"}
          />
        )}
        <div className="p-6">
          <MotionH3 className="text-xl font-medium mb-2">
            {article?.title}
          </MotionH3>
          <MotionP className="text-gray-600 mb-4 line-clamp-2">
            {article?.description}
          </MotionP>
          <div className="flex justify-between items-center">
            <MotionSpan className="text-sm text-gray-500">
              {new Date(article?.pubDate).toLocaleDateString()}
            </MotionSpan>
            <MotionSpan className="flex items-center text-sm text-blue-600">
              Read more
            </MotionSpan>
          </div>
        </div>
      </Link>
    </MotionDiv>
  );
};
