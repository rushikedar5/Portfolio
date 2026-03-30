import ProjectCard from "@/components/ProjectCard";
import { Project } from "@/types";
import projects from "@/data/project.json";

export const metadata = {
  title: "Projects | Rushi",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-10 m-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
        <p className="text-muted-foreground">
          Things I've built while learning and shipping.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {(projects as Project[]).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}