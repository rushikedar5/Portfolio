"use client";

import ProjectCard from "@/components/ProjectCard";
import { Project } from "@/types";
import projects from "@/data/project.json";
import { motion } from "framer-motion";
import { FolderGit2, Terminal } from "lucide-react";

/* NOTE: Move this metadata to app/projects/layout.tsx 
  export const metadata = {
    title: "Projects | Rushi",
  };
*/

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 14 },
  },
};

export default function ProjectsPage() {
  return (
    <div className="relative z-10 flex flex-col max-w-4xl mx-auto p-6 md:p-12 lg:p-16">
      
      {/* Page Header */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex flex-col gap-4 mb-12 border-l-2 border-cyan-500/50 pl-6 relative"
      >
        <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-widest uppercase bg-cyan-950/30 w-max px-3 py-1 border border-cyan-900/50 backdrop-blur-sm">
          <FolderGit2 size={14} className="text-cyan-300" />
          <span>System.Archive // 0x03_PROJECTS</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">
          Deployed Modules
        </h1>
        
        <p className="text-slate-400 font-mono text-sm max-w-xl flex items-center gap-2">
          <Terminal size={14} className="text-cyan-600" />
          <span>&gt; Executables and systems built during development cycles.</span>
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {(projects as Project[]).map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
      
    </div>
  );
}