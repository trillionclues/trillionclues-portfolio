import { MotionValue } from "framer-motion";

export interface ProjectCardProps {
  leftSkew?: MotionValue<number>;
  rightSkew?: MotionValue<number>;
  index: number;
  project: {
    title: string;
    description: string;
    liveLink: string;
    technologies: string[];
    featured: boolean;
  };
}
