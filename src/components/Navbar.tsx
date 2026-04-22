"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const links = [
  { href: "/", label: "Home", id: "01" },
  { href: "/projects", label: "Projects", id: "02" },
  { href: "/about", label: "About", id: "03" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-cyan-900/50">
      {/* Glowing bottom edge */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-cyan-500/30 to-transparent" />
      
      <nav className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* System Identity / Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-2 text-cyan-400 font-mono tracking-tight group"
        >
          <Terminal size={18} className="group-hover:text-cyan-300 transition-colors" />
          <span className="font-bold text-lg drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]">
            rushi.dev
          </span>
          <span className="text-cyan-600 animate-pulse">_</span>
        </Link>

        {/* Navigation Links */}
        <ul className="flex items-center gap-2 md:gap-6">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.href} className="relative h-16 flex items-center">
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-2 px-2 py-1 font-mono text-xs uppercase tracking-widest transition-colors",
                    isActive
                      ? "text-cyan-300 font-bold drop-shadow-[0_0_5px_rgba(6,182,212,0.5)]"
                      : "text-slate-500 hover:text-cyan-400"
                  )}
                >
                  <span className="text-cyan-700/50 hidden md:inline-block">
                    {link.id}.
                  </span>
                  {link.label}
                </Link>

                {/* Animated Active Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="active-nav-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)]"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}
              </li>
            );
          })}
        </ul>
        
      </nav>
    </header>
  );
}