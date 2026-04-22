import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="relative z-10 flex flex-col gap-12 max-w-4xl mx-auto p-6 md:p-12 lg:p-16 w-full min-h-[70vh]">
      
      {/* System Status Indicator */}
      <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-widest uppercase bg-cyan-950/30 w-max px-3 py-1 border border-cyan-900/50 shadow-[0_0_10px_rgba(6,182,212,0.1)]">
        <Loader2 size={14} className="animate-spin text-cyan-300" />
        <span className="animate-pulse">System.Initialization // FETCHING_DATA...</span>
      </div>

      {/* Header Skeleton */}
      <div className="flex flex-col gap-4 border-l-2 border-cyan-900/50 pl-6 animate-pulse">
        <div className="h-12 md:h-16 w-3/4 max-w-md bg-slate-800/40 border border-cyan-900/30" />
        <div className="h-4 w-full max-w-xl bg-slate-800/30 mt-2" />
        <div className="h-4 w-5/6 max-w-lg bg-slate-800/30" />
      </div>

      {/* Grid Skeleton (Mimics Project/Experience Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {[1, 2, 3, 4].map((i) => (
          <div 
            key={i} 
            className="relative h-64 border border-cyan-900/30 bg-slate-900/30 p-6 flex flex-col gap-4 animate-pulse overflow-hidden"
          >
            {/* Techy Corners (Dimmed for loading state) */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-800/50" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-800/50" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyan-800/50" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-800/50" />

            {/* Scanning line effect for the skeletons */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-cyan-500/20 shadow-[0_0_8px_rgba(6,182,212,0.4)] animate-[scan_2s_ease-in-out_infinite]" />

            {/* Simulated Card Content */}
            <div className="h-6 w-1/2 bg-slate-800/40 border border-cyan-900/30" />
            <div className="flex-grow space-y-3 mt-4">
              <div className="h-2 w-full bg-slate-800/30" />
              <div className="h-2 w-5/6 bg-slate-800/30" />
              <div className="h-2 w-4/6 bg-slate-800/30" />
            </div>
            
            {/* Simulated Tags/Buttons */}
            <div className="flex gap-2 mt-auto pt-4 border-t border-cyan-900/20">
              <div className="h-6 w-20 bg-slate-800/40 border border-cyan-900/30" />
              <div className="h-6 w-24 bg-slate-800/40 border border-cyan-900/30" />
            </div>
          </div>
        ))}
      </div>

      {/* Inline styles for the skeleton scan line */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}} />
    </div>
  );
}