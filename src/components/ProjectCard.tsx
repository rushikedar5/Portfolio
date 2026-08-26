"use client";

import { Project } from "@/types";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex flex-col border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md p-4">
      
      {/* Screenshot / Image Area */}
      <div className="relative w-full aspect-[1.6/1] bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden mb-4">
        {project.image ? (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500" />
        ) : (
          <div className="w-full h-full flex items-center justify-center font-mono text-xs text-neutral-400 group-hover:scale-[1.02] transition-transform duration-500 bg-neutral-800 text-white">
            SCREENSHOT: {project.title}
          </div>
        )}
        
        {/* Status Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {project.liveUrl && (
            <span className="flex items-center gap-1.5 px-2 py-0.5 bg-emerald-100/90 dark:bg-emerald-950/90 backdrop-blur-sm border border-emerald-200 dark:border-emerald-800/50 rounded font-mono text-[9px] uppercase tracking-widest text-emerald-600 dark:text-emerald-400 shadow-sm font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> LIVE
            </span>
          )}
        </div>
        <div className="absolute top-3 right-3 flex gap-2">
            <span className="flex items-center gap-1.5 px-2 py-0.5 bg-orange-100/90 dark:bg-orange-950/90 backdrop-blur-sm border border-orange-200 dark:border-orange-800/50 rounded font-mono text-[9px] uppercase tracking-widest text-orange-500 dark:text-orange-400 shadow-sm font-bold">
              FEATURED
            </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-col flex-grow gap-3">
        
        {/* Header */}
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-sans text-[17px] font-bold text-neutral-900 dark:text-neutral-100 transition-colors">
            {project.title}
          </h3>
          <span className="font-mono text-[11px] text-neutral-400 shrink-0">2026</span>
        </div>

        {/* Description */}
        <p className="font-sans text-[13px] text-neutral-500 dark:text-neutral-400 leading-relaxed flex-grow">
          {project.description}
        </p>

        {/* Details Dropdown */}
        <p className="text-[11px] font-mono text-neutral-400 hover:text-neutral-600 transition-colors cursor-pointer mt-1 mb-1">
          Show engineering details v
        </p>

        <hr className="border-neutral-100 dark:border-neutral-800/50 my-1" />

        {/* Links & Tags */}
        <div className="flex items-end justify-between mt-2">
          <div className="flex flex-wrap gap-2">
            {project.tags?.map((tag) => (
              <span 
                key={tag} 
                className="font-mono text-[10px] text-neutral-500 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center gap-3 text-neutral-400">
            {project.liveUrl && (
              <Link href={project.liveUrl} target="_blank" className="hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">
                <ArrowUpRight size={14} />
              </Link>
            )}
            {project.githubUrl && (
              <Link href={project.githubUrl} target="_blank" className="hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">
                <FaGithub size={14} />
              </Link>
            )}
          </div>
        </div>
        
      </div>
    </div>
  );
}