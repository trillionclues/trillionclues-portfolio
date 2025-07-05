import { MotionP } from "@/lib/framer";
import { Monitor, Smartphone, Server, Gauge, Palette } from "lucide-react";

export const skills = [
  {
    icon: <Monitor className="w-6 h-6" />,
    title: "Frontend Engineering",
    desc: "React, Next.js, TypeScript, Redux/Zustand, TanStack Query, Tailwind CSS, MUI, GSAP",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Mobile Development",
    desc: "Flutter, Dart, React Native, Cross-platform, Payment Gateways",
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Design Systems",
    desc: "Component libraries, Design tokens, WCAG 2.1, Responsive design, Framer Motion",
  },
  {
    icon: <Gauge className="w-6 h-6" />,
    title: "Performance Optimization",
    desc: "Lighthouse, Code splitting, Lazy loading, Bundle optimization",
  },

  {
    icon: <Server className="w-6 h-6" />,
    title: "DevOps & Deployment",
    desc: "Docker, AWS, Firebase, CI/CD, Git/GitHub, Vercel",
  },
];

export const FirstAboutParagraph = () => {
  return (
    <MotionP className="text-sm xs:text-base md:text-md lg:text-base">
      I&rsquo;m a passionate frontend and mobile developer specializing in
      client-side web development, and I&rsquo;ve since expanded into mobile
      development with plans to specialize further in Android development.
    </MotionP>
  );
};

export const SecondAboutParagraph = () => {
  return (
    <MotionP className="text-sm xs:text-base md:text-md lg:text-base">
      I believe in writing clean, maintainable code and creating digital
      experiences that not only look great but perform exceptionally well. Every
      project is an opportunity to learn something new and push the boundaries
      of what&rsquo;s possible.
    </MotionP>
  );
};

export const ThirdAboutParagraph = () => {
  return (
    <MotionP className="text-sm xs:text-base md:text-md lg:text-base">
      When I&rsquo;m not coding, you can find me exploring new technologies,
      contributing to open source projects, or sharing insights through my
      writing on Medium.
    </MotionP>
  );
};
