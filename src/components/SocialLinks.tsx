 "use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from "react-icons/fa6";
import { socialLinks } from "@/data/links";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaXTwitter,
  mail: FaEnvelope, // Added to support your 'mail' target check
};

export default function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {socialLinks.map((link) => {
        const Icon = iconMap[link.icon as keyof typeof iconMap];
        
        // Fallback in case an icon isn't found in the map
        if (!Icon) return null; 

        return (
          <motion.div
            key={link.label}
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link
              href={link.href}
              target={link.icon === "mail" ? undefined : "_blank"}
              aria-label={link.label}
              className="group relative flex items-center justify-center w-10 h-10 border border-cyan-900/60 bg-slate-900/40 backdrop-blur-md transition-all hover:border-cyan-400/80 hover:bg-cyan-950/60 hover:shadow-[0_0_12px_rgba(6,182,212,0.4)]"
            >
              {/* Decorative Tech Corners (Visible on Hover) */}
              <div className="absolute top-0 left-0 w-0.75 h-0.75 border-t border-l border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-0 right-0 w-0.75 h-0.75 border-t border-r border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 w-0.75 h-0.75 border-b border-l border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 right-0 w-0.75 h-0.75 border-b border-r border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Icon with glowing transition */}
              <Icon 
                size={16} 
                className="text-cyan-700/80 group-hover:text-cyan-300 transition-colors drop-shadow-none group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" 
              />
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}