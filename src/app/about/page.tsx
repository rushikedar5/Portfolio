"use client";

import { motion } from "framer-motion";
import { User, Activity, Terminal, Code2, MapPin, GraduationCap } from "lucide-react";

/* NOTE: Move this metadata to app/about/layout.tsx 
  export const metadata = {
    title: "About | Rushi",
  };
*/

const experience = [
  {
    area: "Backend Development",
    detail: "Architecting robust systems bridging Java/SpringBoot and TypeScript/Express. Implementing PostgreSQL, Prisma ORM, JWT auth, and containerization with Docker.",
  },
  {
    area: "Generative AI",
    detail: "Advancing through hands-on development—from foundational LLM API integrations to deploying autonomous agents with sophisticated RAG pipelines.",
  },
  {
    area: "AI Tooling & Infrastructure",
    detail: "Utilizing Groq inference, ChromaDB vector stores, Tavily web search, and running local embeddings via Xenova/transformers.",
  },
];

const currently = [
  "Building a production-grade autonomous AI agent as a primary portfolio module",
  "Exploring Next.js through practical, project-based deployment cycles",
  "Investigating MCP servers and advanced tool-use patterns for autonomous agents",
  "Actively seeking internship and full-time roles (Pune or Remote) to apply full-stack and GenAI skills in production"
];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
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

export default function AboutPage() {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative z-10 flex flex-col gap-12 max-w-4xl mx-auto p-6 md:p-12 lg:p-16"
    >

      {/* Intro Section */}
      <motion.section variants={itemVariants} className="flex flex-col gap-6 relative">
        <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-widest uppercase bg-cyan-950/30 w-max px-3 py-1 border border-cyan-900/50 backdrop-blur-sm">
          <User size={14} className="text-cyan-300" />
          <span>System.Profile // 0x02_ABOUT</span>
        </div>

        <div className="flex flex-col gap-4 border-l-2 border-cyan-500/50 pl-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">
            About Me
          </h1>
          
          <div className="flex flex-wrap gap-4 text-xs font-mono text-cyan-400/80 mb-2">
            <span className="flex items-center gap-1 border border-cyan-900/50 bg-cyan-950/20 px-2 py-1"><MapPin size={12}/> Pune, MH</span>
            <span className="flex items-center gap-1 border border-cyan-900/50 bg-cyan-950/20 px-2 py-1"><GraduationCap size={12}/> B.E. AIML (Class of 2026)</span>
          </div>

          <p className="text-slate-400 leading-relaxed max-w-2xl font-mono text-sm border border-slate-800/50 bg-slate-900/50 p-5 rounded-br-xl backdrop-blur-sm shadow-lg">
            <span className="text-cyan-500">&gt;</span> I am a full-stack developer with a specialized focus on artificial intelligence and machine learning. 
            I learn by building—every theoretical concept goes through a rigorous, real-world deployment cycle before I consider it understood. Bridging the gap between robust backend architecture and cutting-edge GenAI capabilities.
          </p>
        </div>
      </motion.section>

      {/* Blueprint Separator */}
      <motion.div variants={itemVariants} className="relative w-full h-[1px] bg-cyan-900/50 my-2">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-[1px] bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
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
              {/* Hover scanning effect */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-cyan-400/50 -translate-y-full group-hover:animate-[scan_2s_ease-in-out_infinite] opacity-0 group-hover:opacity-100 pointer-events-none" />
              
              <div className="text-cyan-600 font-mono text-xs opacity-50">[{String(index + 1).padStart(2, '0')}]</div>
              <p className="font-bold text-white font-mono">{item.area}</p>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Blueprint Separator */}
      <motion.div variants={itemVariants} className="relative w-full h-[1px] bg-cyan-900/50 my-2">
         <div className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-[1px] bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
      </motion.div>

      {/* Currently Building */}
      <motion.section variants={itemVariants} className="flex flex-col gap-6 bg-slate-900/30 border border-cyan-900/30 p-6 relative overflow-hidden">
        {/* Techy Corners */}
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
  );
}