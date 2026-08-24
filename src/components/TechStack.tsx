"use client";

import { useState } from "react";
import { 
  Layers, 
  Code, 
  AppWindow, 
  Server, 
  Database, 
  Terminal,
  Cpu,
  Fingerprint
} from "lucide-react";
import { 
  SiTypescript, 
  SiJavascript, 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiExpress, 
  SiTailwindcss, 
  SiPostgresql, 
  SiMongodb, 
  SiPrisma, 
  SiSupabase, 
  SiFirebase, 
  SiGit, 
  SiGithub, 
  SiPostman, 
  SiVercel, 
  SiFigma, 
  SiCplusplus, 
  SiPython,
  SiJsonwebtokens
} from "react-icons/si";
import { TbSlash } from "react-icons/tb";

const categories = [
  { id: "All", label: "All", icon: Layers },
  { id: "Languages", label: "Languages", icon: Code },
  { id: "Frontend", label: "Frontend", icon: AppWindow },
  { id: "Backend", label: "Backend", icon: Server },
  { id: "Databases", label: "Databases", icon: Database },
  { id: "DevOps & Tools", label: "DevOps & Tools", icon: Terminal }
];

const skillsData = [
  { name: "TypeScript", category: "Languages", icon: SiTypescript, color: "text-blue-500" },
  { name: "JavaScript", category: "Languages", icon: SiJavascript, color: "text-yellow-400" },
  { name: "React", category: "Frontend", icon: SiReact, color: "text-sky-400" },
  { name: "Next.js", category: "Frontend", icon: SiNextdotjs, color: "text-black dark:text-white" },
  { name: "Node.js", category: "Backend", icon: SiNodedotjs, color: "text-green-500" },
  { name: "Express.js", category: "Backend", icon: SiExpress, color: "text-gray-500" },
  { name: "Tailwind CSS", category: "Frontend", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "Shadcn UI", category: "Frontend", icon: TbSlash, color: "text-black dark:text-white" },
  { name: "PostgreSQL", category: "Databases", icon: SiPostgresql, color: "text-blue-400" },
  { name: "MongoDB", category: "Databases", icon: SiMongodb, color: "text-green-500" },
  { name: "Prisma", category: "Databases", icon: SiPrisma, color: "text-gray-800 dark:text-gray-200" },
  { name: "Supabase", category: "Databases", icon: SiSupabase, color: "text-emerald-500" },
  { name: "Firebase", category: "Databases", icon: SiFirebase, color: "text-amber-500" },
  { name: "REST APIs", category: "Backend", icon: Cpu, color: "text-gray-500" },
  { name: "JWT", category: "Backend", icon: SiJsonwebtokens, color: "text-pink-500" },
  { name: "Git", category: "DevOps & Tools", icon: SiGit, color: "text-orange-500" },
  { name: "GitHub", category: "DevOps & Tools", icon: SiGithub, color: "text-black dark:text-white" },
  { name: "Postman", category: "DevOps & Tools", icon: SiPostman, color: "text-orange-500" },
  { name: "Vercel", category: "DevOps & Tools", icon: SiVercel, color: "text-black dark:text-white" },
  { name: "Figma", category: "DevOps & Tools", icon: SiFigma, color: "text-purple-500" },
  { name: "C++", category: "Languages", icon: SiCplusplus, color: "text-blue-600" },
  { name: "Python", category: "Languages", icon: SiPython, color: "text-blue-500" }
];

export default function TechStack() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredSkills = activeTab === "All" 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeTab);

  return (
    <div className="w-full">
      {/* Filters */}
      <div className="flex flex-wrap items-center gap-1 p-1 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-md font-mono text-[11px] mb-8 w-fit">
        {categories.map((cat) => {
          const isActive = activeTab === cat.id;
          const Icon = cat.icon;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded transition-all ${
                isActive
                  ? "bg-neutral-900 dark:bg-neutral-100 text-white dark:text-black font-bold shadow-sm"
                  : "bg-transparent text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100"
              }`}
            >
              <Icon size={12} strokeWidth={isActive ? 2.5 : 2} />
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="flex flex-wrap gap-3">
        {filteredSkills.map((skill) => {
          const Icon = skill.icon;
          return (
            <div
              key={skill.name}
              className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded shadow-sm hover:shadow transition-shadow"
            >
              <span className={skill.color}>
                <Icon size={14} />
              </span>
              <span className="font-mono text-[11px] text-neutral-700 dark:text-neutral-300 font-medium">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
