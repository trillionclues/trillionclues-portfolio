export const projects = [
  {
    title: "E-Commerce Mobile App",
    description:
      "React Native app with Redux, payment integration, and real-time notifications. Features include user authentication, product catalog, shopping cart, and order tracking.",
    technologies: ["React Native", "Redux", "Firebase", "Stripe"],
    liveLink: "#",
    featured: true,
  },
  {
    title: "Task Management Dashboard",
    description:
      "Next.js web application with team collaboration features. Includes real-time updates, file sharing, and project analytics.",
    technologies: ["Next.js", "TypeScript", "Prisma", "MongoDB", "Socket.io"],
    liveLink: "#",
    featured: true,
  },
  {
    title: "AI-Powered Chat Interface",
    description:
      "Real-time chat application with AI integration for smart responses and conversation analysis.",
    technologies: ["React", "Socket.io", "OpenAI API", "Node.js", "MongoDB"],
    liveLink: "#",
    featured: false,
  },
  {
    title: "Weather Forecast App",
    description:
      "Mobile weather application with location-based forecasts and interactive maps.",
    technologies: ["React Native", "Weather API", "Maps", "Geolocation"],
    liveLink: "#",
    featured: false,
  },
  {
    title: "Portfolio CMS",
    description:
      "Content management system for creative professionals with drag-and-drop portfolio builder.",
    technologies: ["Next.js", "Headless CMS", "GraphQL", "Tailwind CSS"],
    liveLink: "#",
    featured: false,
  },
  {
    title: "Crypto Tracker",
    description:
      "Real-time cryptocurrency tracking app with price alerts and portfolio management.",
    technologies: ["React Native", "CoinGecko API", "Chart.js", "AsyncStorage"],
    liveLink: "#",
    featured: false,
  },
];

export const portolioCategories = [
  "All",
  "Frontend & UI",
  "Mobile Development",
  "Networking & Cloud",
  "Design Systems",
  "Tools & Utilities",
  "Blockchain",
  "Libraries & Frameworks",
  "Coding Challenges",
  "Hackathons & Competitions",
];

export function getTechColor(tech: string) {
  const techColors: Record<string, string> = {
    Redux: "#764ABC",
    "React Native": "#61DAFB",
    "Next.js": "#000000",
    TypeScript: "#3178C6",
    Prisma: "#2D3748",
    "Socket.io": "#010101",
    "OpenAI API": "#412991",
    "Node.js": "#339933",
    MongoDB: "#47A248",
    React: "#61DAFB",
    Tailwind: "#06B6D4",
    "Headless CMS": "#3178C6",
  };

  return techColors[tech] || "#9CA3AF";
}
