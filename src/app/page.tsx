"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { Network, Terminal, Database, Cpu } from "lucide-react";

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
        color="#06b6d4" // Cyan-500
        wireframe={true} 
        transparent 
        opacity={0.15} 
      />
    </mesh>
  );
}

// --- Animation Variants ---
const systemVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const nodeVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 14 },
  },
};

// --- Data ---
const techStack = [
  "Java", "TypeScript", "Next.js", "React", 
  "Node.js", "Express", "SpringBoot", "PostgreSQL", 
  "MongoDB", "Prisma", "Groq", "RAG", "Docker"
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-300 font-sans overflow-hidden">
      
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#06b6d415_1px,transparent_1px),linear-gradient(to_bottom,#06b6d415_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      {/* 3D Blueprint Canvas */}
      <div className="absolute top-0 right-0 w-full lg:w-2/3 h-full z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <WireframeNetwork />
        </Canvas>
      </div>

      {/* Main Content Overlay */}
      <motion.div
        className="relative z-10 flex flex-col gap-12 max-w-4xl p-6 md:p-12 lg:p-16"
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
            <Link href="/projects">
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
                {/* Hexagon Shape via Clip Path */}
                <div 
                  className="flex items-center justify-center bg-slate-900/80 border border-cyan-900/50 text-cyan-100 text-sm py-2 px-6 backdrop-blur-md transition-colors"
                  style={{
                    clipPath: "polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)"
                  }}
                >
                  <span className="font-mono">{skill}</span>
                </div>
                {/* Glowing border effect on hover */}
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

        {/* Active Processes (Currently Building) */}
        <motion.section 
          variants={nodeVariants}
          className="relative border border-cyan-800/60 bg-slate-900/40 backdrop-blur-md p-6 md:p-8 mt-8"
        >
          {/* Techy Corner Accents */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyan-400" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-cyan-400" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-cyan-400" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-cyan-400" />

          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-widest uppercase mb-4">
            <Cpu size={14} className="animate-pulse" />
            <span>System.Active_Process // RUNNING</span>
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-2 font-mono">
            Agentic AI-Based Organizer Assistant
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed font-mono">
            <span className="text-cyan-600">&gt; Architecture:</span> Full-stack system (Express, React, PostgreSQL).
            <br />
            <span className="text-cyan-600">&gt; Intelligence Module:</span> ChromaDB and Tavily integration.
            <br />
            <span className="text-cyan-600">&gt; Status:</span> Operating as an autonomous agent to streamline and manage complex event organization logistics.
          </p>
        </motion.section>
      </motion.div>
    </div>
  );
}