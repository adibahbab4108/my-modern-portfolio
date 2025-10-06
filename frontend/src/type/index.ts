import { Url } from "url";

export type AboutType = {
  id: number;
  title: string;
  description: string;
  image: string;
  sparseImage?: string;
  imageClassName?: string;
  titleClassName?: string;
  className?: string;
};

export type SkillType = {
  id: number;
  name: string;
  image: string;
  // category: string;
  level: string;
  imageClass?: string;
    category: "Frontend" | "Backend" | "Database" | "Fullstack" | "DevOps" | "Tool";
  //   level: "Beginner" | "Intermediate" | "Advanced";
};

export type ProjectType = {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  live?: string;
  frontend?: string;
  backend?: string;
  className?: string;
};

