import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import projectsData from "../../../data/projects.json";
import { Project } from "@/types";

export const metadata: Metadata = {
  title: "Ankit Mishra | Projects",
  description: "Explore Ankit Mishra's portfolio of personal and professional projects.",
};

const projects: Project[] = projectsData;

export default function ProjectsPage() {
  return (
    <div className="container mx-auto p-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 animate-fade-in-down">My Projects</h1>
      <p className="text-base sm:text-lg text-muted-foreground text-center max-w-xl mx-auto mb-10 sm:mb-12 animate-fade-in-up px-4">
        A selection of cool stuff I've worked on, showcasing my skills in data science and web development.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 px-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
