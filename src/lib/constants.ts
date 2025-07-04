import { ImageOptimizationOptions } from "@/types";

export const formatDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("en-US ", options);
};

export const getOptimizedImageUrl = (
  originalUrl: string,
  options: ImageOptimizationOptions = {}
): string => {
  if (!originalUrl) return "";

  const { width = 400, height = 300, quality = 80, format = "webp" } = options;
  const optimizedUrl = `https://images.weserv.nl/?url=${encodeURIComponent(
    originalUrl
  )}&w=${width}&h=${height}&q=${quality}&output=${format}&fit=cover`;

  return optimizedUrl;
};

export const getCloudinaryOptimizedUrl = (
  originalUrl: string,
  options: ImageOptimizationOptions = {}
): string => {
  if (!originalUrl) return "";

  const { width = 400, height = 300, quality = 80, format = "webp" } = options;
  const cloudName = "your-cloud-name";

  return `https://res.cloudinary.com/${cloudName}/image/fetch/w_${width},h_${height},q_${quality},f_${format},c_fill/${encodeURIComponent(
    originalUrl
  )}`;
};
