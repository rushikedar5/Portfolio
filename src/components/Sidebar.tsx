"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState("about");

  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      let current = sections[0].id; // Default to first section
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section's top has crossed our threshold line (1/3 down the screen),
          // it becomes the current section. Since we check them in order, the *last*
          // one to cross the line wins, which is exactly what we want.
          if (rect.top <= window.innerHeight / 3) {
            current = section.id;
          }
        }
      }
      setActiveHash(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <div className="hidden lg:block w-[240px] bg-transparent">
      <div className="sticky top-24 flex flex-col pl-10 pr-4 pt-10">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-bold mb-6">INDEX</span>
        
        <ul className="flex flex-col gap-4 font-mono text-[12px]">
          {sections.map(section => {
            const isActive = pathname === "/" ? activeHash === section.id : pathname === `/${section.id}`;
            const href = pathname === "/" ? `#${section.id}` : `/${section.id}`;

            return (
              <li key={section.id} className="relative flex items-center group">
                {/* Dash indicator */}
                <span 
                  className={`absolute -left-[22px] w-[14px] h-[2px] bg-neutral-900 dark:bg-neutral-100 transition-all duration-300 ${isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"}`} 
                />
                
                <Link 
                  href={href}
                  className={`transition-all duration-300 ${isActive ? "text-neutral-900 dark:text-neutral-100 font-semibold" : "text-neutral-400 dark:text-neutral-500 font-medium group-hover:text-neutral-700 dark:group-hover:text-neutral-300"}`}
                >
                  {section.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
