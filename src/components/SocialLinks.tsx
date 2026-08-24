"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from "react-icons/fa6";
import { socialLinks } from "@/data/links";
import { cn } from "@/lib/utils";

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaXTwitter,
  mail: FaEnvelope,
};

export default function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      {socialLinks.map((link) => {
        const Icon = iconMap[link.icon as keyof typeof iconMap];
        
        if (!Icon) return null; 

        return (
          <Link
            key={link.label}
            href={link.href}
            target={link.icon === "mail" ? undefined : "_blank"}
            aria-label={link.label}
            className="text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            <Icon size={18} />
          </Link>
        );
      })}
    </div>
  );
}