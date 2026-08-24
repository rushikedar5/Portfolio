"use client";

import Image from "next/image";
import { MapPin, Search, ArrowUpRight, Mail, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import ProjectCard from "@/components/ProjectCard";
import ProjectsSection from "@/components/ProjectsSection";
import TechStack from "@/components/TechStack";
import projects from "@/data/project.json";

// --- Data ---

const experience = [
  {
    year: "June 2025 — Present",
    company: "Devcons Software Pvt. Ltd.",
    role: "Software Engineer Intern",
    description: [
      "Developed and maintained Kunbi Matrimony as a full-stack application using Node.js, Express.js, Next.js, and MySQL, implementing authentication, matchmaking workflows, profile management, and responsive UIs.",
      "Developed an AI-powered assessment platform using Python, FastAPI, LangChain, and LLM APIs, enabling automated test generation, intelligent question answering, and contextual chatbot support for students and instructors.",
      "Led full frontend migration from React.js to Next.js, improving routing, SEO, performance, and maintainability with seamless production deployment.",
      "Enhanced E-Seva Kendra using Spring Boot, Spring Security, JWT, and MySQL with role-based authorization, RESTful APIs, and admin modules; resolved critical CORS and security filter issues."
    ],
    tags: ["Node.js", "Next.js", "MySQL", "Python", "FastAPI", "LangChain", "Spring Boot", "Spring Security"]
  }
];

export default function Home() {
  const filteredProjects = projects;

  return (
    <div className="flex flex-col animate-in fade-in duration-500">
      
      {/* HERO SECTION */}
      <section id="home" className="flex flex-col gap-6 pt-6 px-8 lg:px-12 pb-12 scroll-mt-24">
        {/* Banner Image Placeholder */}
        <div className="w-full h-32 md:h-48 rounded-xl bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 overflow-hidden relative shadow-sm">
           <Image src="/banner.png" alt="Banner" fill className="object-cover dark:invert transition-all duration-100" />
        </div>
        
        <div className="flex items-start justify-between mt-2">
          <div className="flex gap-6 items-center">
            {/* Square Avatar */}
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shrink-0 overflow-hidden relative shadow-sm">
              <Image src="/profile.jpg" alt="Hrushikesh Kedar" fill className="object-cover" />
            </div>
            
            <div className="flex flex-col justify-center">
              <h1 
                className="font-serif text-3xl md:text-[34px] font-bold tracking-tight text-neutral-800 dark:text-neutral-200" 
                style={{ 
                  textShadow: "1.5px 1.5px 0px rgba(59,130,246,0.8), -1.5px -1.5px 0px rgba(249,115,22,0.8)" 
                }}
              >
                Hrushikesh Kedar
              </h1>
              <p className="font-mono text-[13px] text-neutral-500 dark:text-neutral-400 mt-1.5 font-medium tracking-wide">
                Software Engineer
              </p>
              <p className="font-mono text-[11px] text-neutral-400 dark:text-neutral-500 flex items-center gap-1.5 mt-1 tracking-wider uppercase">
                <MapPin size={12} strokeWidth={2} /> Pune, India
              </p>
            </div>
          </div>

          {/* Command Button */}
          <button 
            onClick={() => document.dispatchEvent(new CustomEvent("open-command-menu"))}
            className="hidden md:flex items-center gap-2 px-3 py-1.5 border border-neutral-200 dark:border-neutral-800 rounded-md bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors text-neutral-500 font-mono text-[11px] font-medium shadow-sm h-8 self-center"
          >
            <Search size={12} /> ⌘K
          </button>
        </div>
      </section>

      {/* Full-width hatched separator */}
      <div className="relative w-full h-16 border-y border-neutral-200 dark:border-neutral-800 flex items-center px-8 lg:px-12">
        <div className="absolute inset-0 bg-hatch opacity-50" />
        <h2 className="relative font-serif text-2xl text-neutral-900 dark:text-neutral-100 font-bold z-10">About</h2>
      </div>

      {/* ABOUT SECTION */}
      <section id="about" className="flex flex-col gap-8 px-8 lg:px-12 py-8 scroll-mt-24">
        <div className="flex flex-col gap-6 font-sans text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
          <p className="flex items-start gap-3">
            <span className="text-neutral-300 dark:text-neutral-700 mt-1">•</span> 
            <span>Hey, I'm Hrushikesh, a full stack developer who loves building clean, modern websites and applications where design, functionality, and even the smallest details matter.</span>
          </p>
          <p className="flex items-start gap-3">
            <span className="text-neutral-300 dark:text-neutral-700 mt-1">•</span> 
            <span>I spend most of my time in the terminal or architecting backend systems. I lean backend, not because I don't like frontend, but because I enjoy making complex, intelligent things actually hold up.</span>
          </p>
          <p className="flex items-start gap-3">
            <span className="text-neutral-300 dark:text-neutral-700 mt-1">•</span> 
            <span>I don't ship junk. Maintainability isn't optional. And I build best when I'm curious.</span>
          </p>
        </div>
        
        <div className="border border-neutral-200 dark:border-neutral-800 p-6 rounded-xl flex flex-col gap-6 mt-4">
          <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-900 dark:text-neutral-100 font-bold">Developer Snapshot</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-[11px] text-neutral-600 dark:text-neutral-400">
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Building products.</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Shipping consistently.</li>
            </ul>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Learning technologies.</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Obsessed with clean code.</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="relative w-full h-16 border-y border-neutral-200 dark:border-neutral-800 flex items-center px-8 lg:px-12 mt-12">
        <div className="absolute inset-0 bg-hatch opacity-50" />
        <h2 className="relative font-serif text-2xl text-neutral-900 dark:text-neutral-100 font-bold z-10">Contact</h2>
      </div>

      {/* CONTACT SECTION */}
      <section id="contact" className="flex flex-col gap-8 px-8 lg:px-12 py-8 scroll-mt-24">
        <div className="flex flex-wrap gap-4 font-mono text-xs">
          <a href="https://github.com/rushikedar5" target="_blank" className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900 text-neutral-700 dark:text-neutral-300 transition-colors rounded-md shadow-sm group">
            <FaGithub size={14} /> GitHub <ArrowUpRight size={12} className="opacity-50 group-hover:opacity-100 transition-opacity" />
          </a>
          <a href="https://linkedin.com/in/rushikedar5" target="_blank" className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900 text-neutral-700 dark:text-neutral-300 transition-colors rounded-md shadow-sm group">
            <FaLinkedin size={14} /> LinkedIn <ArrowUpRight size={12} className="opacity-50 group-hover:opacity-100 transition-opacity" />
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hrushikeshkedar.dev@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900 text-neutral-700 dark:text-neutral-300 transition-colors rounded-md shadow-sm group">
            <Mail size={14} /> Email <ArrowUpRight size={12} className="opacity-50 group-hover:opacity-100 transition-opacity" />
          </a>
          <a href="/resume.pdf" target="_blank" className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900 text-neutral-700 dark:text-neutral-300 transition-colors rounded-md shadow-sm group">
            <FileText size={14} /> Resume <ArrowUpRight size={12} className="opacity-50 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="flex flex-col w-full scroll-mt-24">
        <ProjectsSection projects={projects as any} limit={4} />
      </section>

      <div className="relative w-full h-16 border-y border-neutral-200 dark:border-neutral-800 flex items-center px-8 lg:px-12 mt-12">
        <div className="absolute inset-0 bg-hatch opacity-50" />
        <h2 className="relative font-serif text-2xl text-neutral-900 dark:text-neutral-100 font-bold z-10">Experience</h2>
      </div>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="flex flex-col gap-12 px-8 lg:px-12 py-8 scroll-mt-24">
        <div className="flex flex-col gap-12">
          {experience.map((item, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-4 md:gap-8 group">
              <div className="font-mono text-xs text-neutral-500 pt-1">
                {item.year}
              </div>
              <div className="flex flex-col gap-3">
                <div>
                  <h3 className="font-serif text-xl font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-600 dark:group-hover:text-neutral-400 transition-colors">
                    {item.company}
                  </h3>
                  <p className="font-mono text-xs text-neutral-500 mt-1">{item.role}</p>
                </div>
                <ul className="font-sans text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed list-none space-y-2">
                  {Array.isArray(item.description) ? (
                    item.description.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-neutral-300 dark:text-neutral-700 mt-1.5">•</span>
                        <span>{point}</span>
                      </li>
                    ))
                  ) : (
                    <li className="flex items-start gap-3">
                      <span className="text-neutral-300 dark:text-neutral-700 mt-1.5">•</span>
                      <span>{item.description}</span>
                    </li>
                  )}
                </ul>
                <div className="flex flex-wrap gap-2 mt-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="font-mono text-[10px] uppercase tracking-widest px-2 py-1 bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 rounded-sm border border-neutral-200 dark:border-neutral-800">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="relative w-full h-16 border-y border-neutral-200 dark:border-neutral-800 flex items-center justify-between px-8 lg:px-12 mt-12">
        <div className="absolute inset-0 bg-hatch opacity-50" />
        <h2 className="relative font-serif text-2xl text-neutral-900 dark:text-neutral-100 font-bold z-10">Tech Stack</h2>
        <span className="relative z-10 hidden md:block font-mono text-[11px] text-neutral-400">( select tab to filter )</span>
      </div>

      {/* SKILLS SECTION */}
      <section id="skills" className="flex flex-col gap-8 px-8 lg:px-12 py-8 scroll-mt-24">
        <TechStack />
      </section>

    </div>
  );
}