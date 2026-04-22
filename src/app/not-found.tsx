"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { AlertTriangle, Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative z-10 flex flex-col justify-center max-w-4xl mx-auto p-6 md:p-12 lg:p-16 min-h-[65vh]">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 14 }}
        className="flex flex-col gap-6 items-start border-l-2 border-cyan-500/50 pl-6 relative"
      >
        {/* System Error Tag */}
        <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-widest uppercase bg-cyan-950/30 w-max px-3 py-1 border border-cyan-900/50 backdrop-blur-sm shadow-[0_0_10px_rgba(6,182,212,0.1)]">
          <AlertTriangle size={14} className="animate-pulse text-cyan-300" />
          <span>System.Error // 404_NOT_FOUND</span>
        </div>

        {/* Error Message */}
        <div className="flex flex-col gap-3">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">
            FATAL_EXCEPTION
          </h1>
          
          <div className="text-slate-400 font-mono text-sm max-w-xl flex items-start gap-2 border border-slate-800/50 bg-slate-900/50 p-4 rounded-br-xl backdrop-blur-sm">
            <Terminal size={14} className="text-cyan-600 mt-0.5 shrink-0" />
            <div className="flex flex-col gap-1">
              <span className="text-cyan-500">&gt; Module Missing or Offline.</span>
              <span>The requested directory path does not exist in the current system state. It may have been relocated, deleted, or never existed.</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <Link href="/" className="mt-2">
          <Button 
            className="bg-cyan-600/20 text-cyan-400 border border-cyan-500/50 hover:bg-cyan-500/20 hover:text-cyan-300 font-mono rounded-none tracking-widest uppercase transition-all shadow-[0_0_10px_rgba(6,182,212,0.1)] group"
          >
            <span className="text-cyan-600 mr-2 group-hover:-translate-x-1 transition-transform">&lt;</span>
            [ RETURN_TO_ROOT ]
          </Button>
        </Link>
        
      </motion.div>
      
    </div>
  );
}