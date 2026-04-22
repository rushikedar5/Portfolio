import SocialLinks from "./SocialLinks";
import { Button } from "./ui/button";
import Link from "next/link";
import { Terminal } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-cyan-900/50 mt-24 bg-slate-950 overflow-hidden">
      {/* Glowing top edge */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-cyan-500/40 to-transparent" />
      
      {/* Subtle blueprint grid for the footer background */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#06b6d405_1px,transparent_1px),linear-gradient(to_bottom,#06b6d405_1px,transparent_1px)] bg-size-[16px_16px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* System Status / Copyright */}
        <div className="flex flex-col items-center sm:items-start gap-2">
          <div className="flex items-center gap-2 text-cyan-500 font-mono text-xs tracking-widest uppercase opacity-80">
            <Terminal size={12} className="animate-pulse" />
            <span>System.Status // Online</span>
          </div>
          <p className="text-xs font-mono text-slate-500 tracking-wide">
            © {new Date().getFullYear()} Kedar Hrushikesh. 
            <span className="hidden sm:inline text-cyan-900 mx-2">|</span> 
            <br className="sm:hidden" />
            Built on Next.js Infrastructure.
          </p>
        </div>

        {/* Links & Extraction Protocol (Resume) */}
        <div className="flex items-center gap-6">
          <div className="opacity-70 hover:opacity-100 transition-opacity">
            <SocialLinks />
          </div>
          
          {/* Decorative vertical divider */}
          <div className="hidden sm:block w-px h-8 bg-cyan-900/50" />

          <Link href="/resume.pdf" target="_blank" download>
            <Button 
              size="sm" 
              variant="outline" 
              className="border-cyan-800/60 text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 rounded-none font-mono tracking-widest text-[10px] sm:text-xs uppercase transition-all shadow-[0_0_10px_rgba(6,182,212,0.1)] group"
            >
              <span className="text-cyan-700 mr-2 group-hover:text-cyan-400 transition-colors">&gt;</span>
              [ EXTRACT_RESUME ]
            </Button>
          </Link>
        </div>
      </div>
    </footer>
  );
}