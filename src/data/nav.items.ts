import { Section } from "@/types/nav_items";

export const NavItems = [
  { id: "about" as Section, label: "About", path: "/about" },
  { id: "projects" as Section, label: "Projects", path: "/projects" },
  { id: "contact" as Section, label: "Contact", path: "/contact" },
];

export const mediaLinks = [
  {
    name: "Github",
    url: "https://github.com/trillionclues",
    icon: "/github.svg",
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
