import { MotionP } from "@/lib/framer";
import { Monitor, Smartphone, Code } from "lucide-react";

export const skills = [
  {
    icon: <Monitor className="w-6 h-6" />,
    title: "Frontend Development",
    desc: "React, Next.js, TypeScript, Tailwind CSS",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Mobile Development",
    desc: "Flutter, React Native, Native Android",
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Performance & Integration",
    desc: "REST/GraphQL, WebSocket, Lighthouse optimization",
  },
];

export const FirstAboutParagraph = () => {
  return (
    <MotionP>
      I'm a passionate frontend and mobile developer specializing in client-side
      web development, and I've since expanded into mobile development with
      plans to specialize further in Android development.
    </MotionP>
  );
};

export const SecondAboutParagraph = () => {
  return (
    <MotionP>
      I believe in writing clean, maintainable code and creating digital
      experiences that not only look great but perform exceptionally well. Every
      project is an opportunity to learn something new and push the boundaries
      of what's possible.
    </MotionP>
  );
};

export const ThirdAboutParagraph = () => {
  return (
    <MotionP>
      When I'm not coding, you can find me exploring new technologies,
      contributing to open source projects, or sharing insights through my
      writing on Medium.
    </MotionP>
  );
};
