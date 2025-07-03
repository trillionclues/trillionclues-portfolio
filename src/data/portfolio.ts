// lib/medium.ts
export interface MediumArticle {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  content: string;
  guid: string;
  categories: string[];
}

export async function fetchMediumArticles(): Promise<MediumArticle[]> {
  try {
    // Using RSS2JSON service to convert RSS to JSON (free service)
    const RSS_URL =
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@trillionclues";

    const response = await fetch(RSS_URL, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!response.ok) {
      throw new Error("Failed to fetch articles");
    }

    const data = await response.json();

    if (data.status !== "ok") {
      throw new Error("RSS feed error");
    }

    return data.items.map((item: any) => ({
      title: item.title,
      link: item.link,
      pubDate: new Date(item.pubDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
      description: stripHtml(item.description).substring(0, 200) + "...",
      content: item.content,
      guid: item.guid,
      categories: item.categories || [],
    }));
  } catch (error) {
    console.error("Error fetching Medium articles:", error);
    return [];
  }
}

// Alternative method using RSS directly (requires server-side parsing)
export async function fetchMediumRSSDirect(): Promise<MediumArticle[]> {
  try {
    const response = await fetch("https://medium.com/feed/@trillionclues", {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch RSS feed");
    }

    const xmlText = await response.text();

    // You would need to install 'xml2js' package for this
    // const xml2js = require('xml2js');
    // const parser = new xml2js.Parser();
    // const result = await parser.parseStringPromise(xmlText);

    // For now, returning empty array - implement XML parsing if needed
    return [];
  } catch (error) {
    console.error("Error fetching RSS directly:", error);
    return [];
  }
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").replace(/&[^;]+;/g, " ");
}

// Client-side hook for fetching articles
export function useMediumArticles() {
  //   const [articles, setArticles] = useState<MediumArticle[]>([]);
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState<string | null>(null);
  //   useEffect(() => {
  //     async function loadArticles() {
  //       try {
  //         setLoading(true);
  //         const fetchedArticles = await fetchMediumArticles();
  //         setArticles(fetchedArticles);
  //       } catch (err) {
  //         setError("Failed to load articles");
  //         console.error(err);
  //       } finally {
  //         setLoading(false);
  //       }
  //     }
  //     loadArticles();
  //   }, []);
  //   return { articles, loading, error };
}

export const projects = [
  {
    title: "E-Commerce Mobile App",
    description:
      "React Native app with Redux, payment integration, and real-time notifications. Features include user authentication, product catalog, shopping cart, and order tracking.",
    tags: ["React Native", "Redux", "Firebase", "Stripe", "Push Notifications"],
    liveLink: "#",
    codeLink: "#",
    featured: true,
  },
  {
    title: "Task Management Dashboard",
    description:
      "Next.js web application with team collaboration features. Includes real-time updates, file sharing, and project analytics.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Socket.io"],
    liveLink: "#",
    codeLink: "#",
    featured: true,
  },
  {
    title: "AI-Powered Chat Interface",
    description:
      "Real-time chat application with AI integration for smart responses and conversation analysis.",
    tags: ["React", "Socket.io", "OpenAI API", "Node.js", "MongoDB"],
    liveLink: "#",
    codeLink: "#",
    featured: false,
  },
  {
    title: "Weather Forecast App",
    description:
      "Mobile weather application with location-based forecasts and interactive maps.",
    tags: ["React Native", "Weather API", "Maps", "Geolocation"],
    liveLink: "#",
    codeLink: "#",
    featured: false,
  },
  {
    title: "Portfolio CMS",
    description:
      "Content management system for creative professionals with drag-and-drop portfolio builder.",
    tags: ["Next.js", "Headless CMS", "GraphQL", "Tailwind CSS"],
    liveLink: "#",
    codeLink: "#",
    featured: false,
  },
  {
    title: "Crypto Tracker",
    description:
      "Real-time cryptocurrency tracking app with price alerts and portfolio management.",
    tags: ["React Native", "CoinGecko API", "Chart.js", "AsyncStorage"],
    liveLink: "#",
    codeLink: "#",
    featured: false,
  },
];
