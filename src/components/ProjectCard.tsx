import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Project } from '@/types'; // Using the Project interface from '@/types'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out bg-card border-border animate-fade-in-up">
      <div className="relative h-56 w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
      </div>
      <CardHeader className="p-4">
        <CardTitle className="text-2xl font-bold text-foreground mb-2">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span key={tech} className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full transition-colors duration-200 ease-in-out">
              {tech}
            </span>
          ))}
        </div>
        <Link href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-200 ease-in-out text-sm font-medium">
          View Project
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 ml-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </Link>
      </CardContent>
    </Card>
  );
}
