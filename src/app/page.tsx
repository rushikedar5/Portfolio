"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";
import { motion, Variants } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { Terminal, Database, Cpu, User, Activity, Code2, MapPin, GraduationCap, FolderGit2, Mail } from "lucide-react";

import ProjectCard from "@/components/ProjectCard";
import { Project } from "@/types";
import projects from "@/data/project.json";

// --- 3D Blueprint Element ---
function WireframeNetwork() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <mesh ref={meshRef} scale={2}>
      <icosahedronGeometry args={[1.5, 2]} />
      <meshBasicMaterial 
        color="#06b6d4" 
        wireframe={true} 
        transparent 
        opacity={0.15} 
      />
    </mesh>
  );
}

// --- Animation Variants ---
const systemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const nodeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 14 },
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 14 },
  },
};

// --- Data ---
const techStack = [
  "Python", "TypeScript", "JavaScript", "Java", 
  "Next.js", "React", "Tailwind CSS",
  "Node.js", "Express", "SpringBoot", "FastAPI",
  "PostgreSQL", "MySQL", "MongoDB", "Prisma ORM", "Redis",
  "OpenAI API", "LangChain", "RAG", "MCP", "Docker"
];

const experience = [
  {
    area: "Software Engineer @ Devcons",
    detail: "Developed the Kunbi Matrimony and E-Seva Kendra platforms. Led React to Next.js migration. Engineered scalable RESTful APIs with Spring Boot, Node.js, Next.js, and MySQL. Resolved complex Spring Security and JWT issues.",
  },
  {
    area: "Backend Development",
    detail: "Architecting robust systems bridging Java/SpringBoot and TypeScript/Express. Implementing PostgreSQL, Prisma ORM, JWT auth, WebSockets, and containerization with Docker.",
  },
  {
    area: "Generative AI",
    detail: "Advancing through hands-on development—from foundational LLM API integrations (OpenAI, LangChain, FastAPI) to deploying autonomous agents with sophisticated RAG pipelines.",
  },
];

const currently = [
  "Working as a Software Engineer at Devcons Software Pvt. Ltd. focusing on production-scale web applications",
  "Building a production-grade autonomous AI agent as a primary portfolio module",
  "Exploring Next.js through practical, project-based deployment cycles",
  "Investigating MCP servers and advanced tool-use patterns for autonomous agents"
];

export default function Home() {
  
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-300 font-sans overflow-hidden">
      
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#06b6d415_1px,transparent_1px),linear-gradient(to_bottom,#06b6d415_1px,transparent_1px)] bg-size-[32px_32px]" />
      
      {/* 3D Blueprint Canvas */}
      <div className="fixed top-0 right-0 w-full lg:w-2/3 h-screen z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <WireframeNetwork />
        </Canvas>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto p-6 md:p-12 lg:p-16">
        
        {/* --- HERO SECTION --- */}
        <motion.div
          id="home"
          className="flex flex-col gap-12 pt-10 pb-20"
          variants={systemVariants}
          initial="hidden"
          animate="visible"
        >
          {/* System ID Tag */}
          <motion.div variants={nodeVariants} className="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-widest uppercase">
            <Terminal size={14} />
            <span>System.Identity // 0x01</span>
          </motion.div>

          {/* Hero / Identity Module */}
          <motion.section variants={nodeVariants} className="flex flex-col gap-4 border-l-2 border-cyan-500/50 pl-6">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">
              Kedar Hrushikesh
              <span className="block text-3xl md:text-4xl mt-2 text-cyan-400/80 font-mono">
                [ Full-Stack & AI Engineer ]
              </span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl leading-relaxed mt-4 border border-slate-800/50 bg-slate-900/50 p-4 rounded-r-lg backdrop-blur-sm">
              Architecting intelligent systems by bridging robust TypeScript and Java backends with advanced AI capabilities. Specializing in RAG pipelines and autonomous agents.
            </p>

            <div className="flex items-center gap-4 mt-6">
              <Link href="#projects">
                <Button className="bg-cyan-600/20 text-cyan-400 border border-cyan-500/50 hover:bg-cyan-500/20 hover:text-cyan-300 font-mono rounded-none tracking-wide transition-all shadow-[0_0_10px_rgba(6,182,212,0.2)]">
                  &gt; EXECUTE_PROJECTS
                </Button>
              </Link>
              <Link href="/resume.pdf" target="_blank" download>
                <Button size="lg" variant="outline" className="border-slate-700 text-slate-400 hover:text-white hover:bg-slate-800 rounded-none font-mono tracking-wide">
                  [ GET_RESUME ]
                </Button>
              </Link>
            </div>
            
            <div className="mt-4 opacity-80 hover:opacity-100 transition-opacity">
              <SocialLinks />
            </div>
          </motion.section>

          {/* Knowledge Nodes (Skills) */}
          <motion.section variants={nodeVariants} className="flex flex-col gap-6 mt-8">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-widest uppercase">
              <Database size={14} />
              <span>System.Knowledge_Nodes // 0x02</span>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {techStack.map((skill) => (
                <motion.div
                  key={skill}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(6,182,212,0.1)" }}
                  className="relative group"
                >
                  <div 
                    className="flex items-center justify-center bg-slate-900/80 border border-cyan-900/50 text-cyan-100 text-sm py-2 px-6 backdrop-blur-md transition-colors"
                    style={{
                      clipPath: "polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)"
                    }}
                  >
                    <span className="font-mono">{skill}</span>
                  </div>
                  <div 
                    className="absolute inset-0 bg-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity blur-sm"
                    style={{
                      clipPath: "polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)",
                      zIndex: -1
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.section>

        </motion.div>

        {/* --- ABOUT SECTION --- */}
        <motion.div 
          id="about"
          className="flex flex-col gap-12 py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Intro Section */}
          <motion.section variants={itemVariants} className="flex flex-col gap-6 relative">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-widest uppercase bg-cyan-950/30 w-max px-3 py-1 border border-cyan-900/50 backdrop-blur-sm">
              <User size={14} className="text-cyan-300" />
              <span>System.Profile // 0x02_ABOUT</span>
            </div>

            <div className="flex flex-col gap-4 border-l-2 border-cyan-500/50 pl-6">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                About Me
              </h2>
              
              <div className="flex flex-col gap-2 text-xs font-mono text-cyan-400/80 mb-2">
                <div className="flex flex-wrap gap-4">
                  <span className="flex items-center gap-1 border border-cyan-900/50 bg-cyan-950/20 px-2 py-1"><MapPin size={12}/> Pune, Maharashtra, India</span>
                  <span className="flex items-center gap-1 border border-cyan-900/50 bg-cyan-950/20 px-2 py-1"><GraduationCap size={12}/> B.E. Artificial Intelligence and Machine Learning</span>
                </div>
                <span className="w-max flex items-center gap-1 border border-cyan-900/50 bg-cyan-950/20 px-2 py-1 text-slate-400">
                  Savitribai Phule Pune University, Pune (Nov 2022 - June 2026)
                </span>
              </div>

              <p className="text-slate-400 leading-relaxed max-w-2xl font-mono text-sm border border-slate-800/50 bg-slate-900/50 p-5 rounded-br-xl backdrop-blur-sm shadow-lg">
                <span className="text-cyan-500">&gt;</span> I am a full-stack developer with a specialized focus on artificial intelligence and machine learning. 
                I learn by building—every theoretical concept goes through a rigorous, real-world deployment cycle before I consider it understood. Bridging the gap between robust backend architecture and cutting-edge GenAI capabilities.
              </p>
            </div>
          </motion.section>

          {/* Blueprint Separator */}
          <motion.div variants={itemVariants} className="relative w-full h-px bg-cyan-900/50 my-2">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-px bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
          </motion.div>

          {/* Experience Areas */}
          <motion.section variants={itemVariants} className="flex flex-col gap-8">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-widest uppercase">
              <Code2 size={14} />
              <span>System.Competencies // ACTIVE_MODULES</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {experience.map((item, index) => (
                <motion.div 
                  key={item.area} 
                  whileHover={{ y: -5, backgroundColor: "rgba(15, 23, 42, 0.8)" }}
                  className="flex flex-col gap-3 p-5 border border-cyan-900/40 bg-slate-900/40 backdrop-blur-sm transition-all group relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-px bg-cyan-400/50 -translate-y-full group-hover:animate-[scan_2s_ease-in-out_infinite] opacity-0 group-hover:opacity-100 pointer-events-none" />
                  
                  <div className="text-cyan-600 font-mono text-xs opacity-50">[{String(index + 1).padStart(2, '0')}]</div>
                  <p className="font-bold text-white font-mono">{item.area}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Currently Building */}
          <motion.section variants={itemVariants} className="flex flex-col gap-6 bg-slate-900/30 border border-cyan-900/30 p-6 relative overflow-hidden mt-8">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-400/50" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-400/50" />

            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-widest uppercase">
              <Activity size={14} className="animate-pulse" />
              <span>System.Runtime // ONGOING_PROCESSES</span>
            </div>
            
            <ul className="flex flex-col gap-4">
              {currently.map((item, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="flex items-start gap-3 text-sm text-slate-300 font-mono group"
                >
                  <span className="mt-1 flex items-center justify-center w-4 h-4 border border-cyan-700/50 bg-cyan-950/50 text-[8px] text-cyan-400 group-hover:border-cyan-400 transition-colors shrink-0">
                    &gt;
                  </span>
                  <span className="group-hover:text-cyan-100 transition-colors leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.section>
        </motion.div>

        {/* --- PROJECTS SECTION --- */}
        <motion.div 
          id="projects"
          className="flex flex-col gap-12 py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Page Header */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col gap-4 mb-4 border-l-2 border-cyan-500/50 pl-6 relative"
          >
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-widest uppercase bg-cyan-950/30 w-max px-3 py-1 border border-cyan-900/50 backdrop-blur-sm">
              <FolderGit2 size={14} className="text-cyan-300" />
              <span>System.Archive // 0x03_PROJECTS</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">
              Deployed Modules
            </h2>
            
            <p className="text-slate-400 font-mono text-sm max-w-xl flex items-center gap-2">
              <Terminal size={14} className="text-cyan-600" />
              <span>&gt; Executables and systems built during development cycles.</span>
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {(projects as Project[]).map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* --- CONTACT / EDIT DETAILS SECTION --- */}
        <motion.div 
          id="contact"
          className="flex flex-col gap-12 py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.section variants={itemVariants} className="flex flex-col gap-6 relative">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-widest uppercase bg-cyan-950/30 w-max px-3 py-1 border border-cyan-900/50 backdrop-blur-sm">
              <Mail size={14} className="text-cyan-300" />
              <span>System.Comms // 0x04_CONTACT</span>
            </div>

            <div className="flex flex-col gap-4 border-l-2 border-cyan-500/50 pl-6">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                Connect
              </h2>
              <p className="text-slate-400 font-mono text-sm max-w-xl flex items-center gap-2">
                <span>&gt; Initiate a secure handshake protocol to discuss opportunities or collaborations.</span>
              </p>
              
              <div className="flex flex-col md:flex-row gap-4 mt-4">
                <a 
                  href="mailto:hrushikeshkedar.dev@gmail.com" 
                  className="flex items-center gap-3 w-fit text-slate-300 hover:text-cyan-400 border border-slate-800/50 bg-slate-900/50 px-6 py-4 rounded-r-lg backdrop-blur-sm transition-all hover:bg-slate-800"
                >
                  <Mail size={18} />
                  <span className="font-mono text-sm tracking-wide">hrushikeshkedar.dev@gmail.com</span>
                </a>

                <a 
                  href="tel:+919022824355" 
                  className="flex items-center gap-3 w-fit text-slate-300 hover:text-cyan-400 border border-slate-800/50 bg-slate-900/50 px-6 py-4 rounded-r-lg backdrop-blur-sm transition-all hover:bg-slate-800"
                >
                  <Terminal size={18} />
                  <span className="font-mono text-sm tracking-wide">+91 9022824355</span>
                </a>
              </div>
            </div>
          </motion.section>
        </motion.div>
        
      </div>
    </div>
  );
}