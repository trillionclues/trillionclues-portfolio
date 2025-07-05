"use client";

import { MediumPost, UseMediumArticlesResult } from "@/types";
import { useState, useEffect } from "react";

export const useMediumArticles = (
  username: string
): UseMediumArticlesResult => {
  const [articles, setArticles] = useState<MediumPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMediumArticles = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.status === "ok") {
        const processedArticles = data.items.map((article: MediumPost) => {
          const imgRegex = /<img[^>]+src="([^">]+)"/;
          const match = article.content.match(imgRegex);
          const thumbnail = match ? match[1] : "";

          return {
            ...article,
            thumbnail: article.thumbnail || thumbnail,
            description:
              article.description
                .replace(/<[^>]+>/g, "")
                .substring(0, 100)
                .trim() + "...",
          };
        });

        setArticles(processedArticles);
      } else {
        throw new Error(data.message || "Failed to fetch articles");
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Error fetching Medium articles";
      setError(errorMessage);
      console.error("Error fetching Medium articles:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMediumArticles();
  }, [username]);

  const refetch = () => {
    fetchMediumArticles();
  };

  return { articles, loading, error, refetch };
};
