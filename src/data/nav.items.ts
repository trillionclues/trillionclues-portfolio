import { Section } from "@/types/nav_items";

export const NavItems = [
  { id: "about" as Section, label: "About", path: "/about" },
  { id: "projects" as Section, label: "Projects", path: "/projects" },
  { id: "docs" as Section, label: "Docs", path: "/docs" },
  { id: "contact" as Section, label: "Contact", path: "/contact" },
];

export const mediaLinks = [
  {
    name: "Resume",
    url: "https://drive.google.com/file/d/1Nx0lYjSKCFbVgoFbotrGtJiCoX4zx3nU/view",
    icon: "/resume.svg",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/trillionclues-excel/",
    icon: "/linkedin.svg",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/trillionclues",
    icon: "/twitter.svg",
  },
  {
    name: "Medium",
    url: "http://trillionclues.medium.com/",
    icon: "/medium.svg",
  },
];
