"use client";

import ProjectsSection from "@/components/ProjectsSection";
import projects from "@/data/project.json";

export default function ProjectsPage() {
  return (
    <div className="pb-12">
      <ProjectsSection projects={projects as any} />
    </div>
  );
}
