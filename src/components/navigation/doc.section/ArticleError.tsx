import { MotionB, MotionH3, MotionP } from "@/lib";
import React from "react";

const ArticleError = ({
  refetch,
  error,
}: {
  refetch: () => void;
  error: string;
}) => {
  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
      <div className="text-center">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <MotionH3 className="text-lg font-semibold text-red-800 mb-2">
            Error Loading Articles
          </MotionH3>
          <MotionP className="text-red-600 mb-4">{error}</MotionP>
          <MotionB
            onClick={refetch}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Try Again
          </MotionB>
        </div>
      </div>
    </div>
  );
};

export default ArticleError;
