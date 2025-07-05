import { MotionValue } from "framer-motion";

export interface ProjectCardProps {
  leftSkew?: MotionValue<number>;
  rightSkew?: MotionValue<number>;
  index: number;
  project: any;
}
