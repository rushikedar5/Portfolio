"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Project } from "@/types";
import Link from "next/link";
import { Terminal } from "lucide-react";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="relative group flex flex-col justify-between border-cyan-900/50 bg-slate-900/40 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-cyan-400/60 hover:bg-slate-900/80 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] rounded-none">
      
      {/* Techy Corner Accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Holographic scanning line on hover */}
      <div className="absolute top-0 left-0 w-full h-px bg-cyan-400/50 -translate-y-full group-hover:animate-[scan_2s_ease-in-out_infinite] opacity-0 group-hover:opacity-100 pointer-events-none shadow-[0_0_10px_rgba(6,182,212,0.8)] z-50" />

      <CardHeader className="pb-3 relative z-10">
        <div className="flex items-center gap-2 mb-2">
            <Terminal size={12} className="text-cyan-500" />
            <span className="text-[10px] font-mono text-cyan-600 uppercase tracking-widest">Sys.Module</span>
        </div>
        <CardTitle className="text-xl font-mono text-white group-hover:text-cyan-300 transition-colors">
          {project.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-4 relative z-10 grow">
        <p className="text-slate-400 text-sm leading-relaxed font-mono">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags?.map((tag) => (
            <Badge 
              key={tag} 
              variant="outline" 
              className="text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 bg-cyan-950/40 text-cyan-200 border-cyan-900/50 rounded-none hover:bg-cyan-900/60"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex gap-3 pt-4 border-t border-cyan-900/30 relative z-10">
        <Link href={project.githubUrl} target="_blank" className="flex-1">
          <Button 
            size="sm" 
            variant="outline" 
            className="w-full border-cyan-800/60 text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 rounded-none font-mono tracking-widest text-xs uppercase transition-all"
          >
            [ Source_Code ]
          </Button>
        </Link>
        {project.liveUrl && (
          <Link href={project.liveUrl} target="_blank" className="flex-1">
            <Button 
              size="sm" 
              className="w-full bg-cyan-600/20 text-cyan-400 border border-cyan-500/50 hover:bg-cyan-500/20 hover:text-cyan-300 font-mono rounded-none tracking-widest text-xs uppercase transition-all shadow-[0_0_10px_rgba(6,182,212,0.1)] group"
            >
              <span className="mr-2 group-hover:translate-x-1 transition-transform">&gt;</span> Deploy
            </Button>
          </Link>
        )}
      </CardFooter>

      {/* Inline styles for scan line animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}} />
    </Card>
  );
}