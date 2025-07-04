export interface MediumPost {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  description: string;
  content: string;
  thumbnail: string;
  categories: string[];
}

export interface UseMediumArticlesResult {
  articles: MediumPost[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}
