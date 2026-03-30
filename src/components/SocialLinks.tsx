import Link from "next/link";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { socialLinks } from "@/data/links";
import { cn } from "@/lib/utils";

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaXTwitter
};

export default function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      {socialLinks.map((link) => {
        const Icon = iconMap[link.icon as keyof typeof iconMap];
        return (
          <Link
            key={link.label}
            href={link.href}
            target={link.icon === "mail" ? undefined : "_blank"}
            aria-label={link.label}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Icon size={18} />
          </Link>
        );
      })}
    </div>
  );
}