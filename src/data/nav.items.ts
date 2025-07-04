import { Section } from "@/types/nav.items";

export const NavItems = [
  { id: "work" as Section, label: "Work", path: "/work" },
  { id: "docs" as Section, label: "Docs", path: "/docs" },
  { id: "about" as Section, label: "About", path: "/about" },
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
    name: "Github",
    url: "https://www.github.com/in/trillionclues/",
    icon: "/github.svg",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/trillionclues",
    icon: "/twitter.svg",
  },
];

export const contactFormTexts = [
  {
    id: "name",
    label: "Name",
    placeholder: "How should I address you?",
    type: "text",
  },
  {
    id: "email",
    label: "Email",
    placeholder: "Enter your best contact email",
    type: "email",
  },
  {
    id: "message",
    label: "Project Details",
    placeholder: "Tell me about the role, and technologies involved...",
    type: "textarea",
  },
];
