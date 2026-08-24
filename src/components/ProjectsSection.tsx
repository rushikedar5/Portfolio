"use client";

import { useState } from "react";
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import { Project } from "@/types";

interface ProjectsSectionProps {
  projects: Project[];
  limit?: number;
}

export default function ProjectsSection({ projects, limit }: ProjectsSectionProps) {
  const [projectFilter, setProjectFilter] = useState("All");

  const filteredProjects = projects.filter((project) => {
    if (projectFilter === "All") return true;
    
    const tags = project.tags.map(t => t.toLowerCase());
    
    if (projectFilter === "Frontend") {
      return tags.some(t => ["react", "next.js", "tailwind", "frontend", "ui"].includes(t));
    }
    
    if (projectFilter === "Backend") {
      return tags.some(t => ["node.js", "express", "postgresql", "redis", "bullmq", "chromadb", "backend"].includes(t));
    }
    
    if (projectFilter === "Fullstack") {
      // Basic heuristic: has both frontend and backend tags, or specific fullstack tags
      const hasFrontend = tags.some(t => ["react", "next.js", "tailwind"].includes(t));
      const hasBackend = tags.some(t => ["node.js", "postgresql", "redis", "prisma"].includes(t));
      return hasFrontend && hasBackend;
    }
    
    return true;
  });

  const displayedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;
  const showSeeAll = limit && filteredProjects.length > limit;

  return (
    <div className="flex flex-col w-full animate-in fade-in duration-500">
      <div className="relative w-full h-16 border-y border-neutral-200 dark:border-neutral-800 flex items-center justify-between px-8 lg:px-12 mt-12">
        <div className="absolute inset-0 bg-hatch opacity-50" />
        <h2 className="relative font-serif text-2xl text-neutral-900 dark:text-neutral-100 font-bold z-10">Projects</h2>
        
        {/* Filter Buttons */}
        <div className="relative z-10 hidden md:flex items-center gap-1 p-1 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-md font-mono text-[11px]">
          {["All", "Frontend", "Backend", "Fullstack"].map((filter) => {
            const isActive = projectFilter === filter;
            return (
              <button 
                key={filter}
                onClick={() => setProjectFilter(filter)}
                className={`px-3 py-1 rounded shadow-sm font-bold transition-colors ${
                  isActive 
                    ? "bg-neutral-900 dark:bg-neutral-100 text-white dark:text-black" 
                    : "bg-transparent text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 shadow-none font-normal"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>

      <div className="px-8 lg:px-12 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayedProjects.length > 0 ? (
            displayedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <div className="col-span-1 md:col-span-2 py-12 text-center text-neutral-500 font-mono text-sm">
              No projects found for this category.
            </div>
          )}
        </div>
        
        {showSeeAll && (
          <div className="mt-12 flex justify-center">
            <Link 
              href="/projects" 
              className="flex items-center gap-2 px-6 py-2 border border-neutral-200 dark:border-neutral-800 rounded-md bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors text-neutral-700 dark:text-neutral-300 font-sans text-sm font-medium shadow-sm"
            >
              See All <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
