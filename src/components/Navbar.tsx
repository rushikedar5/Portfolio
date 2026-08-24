"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Search, Moon, Code2 } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[#fafafa]/90 dark:bg-neutral-950/90 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
      <div className="w-full max-w-7xl mx-auto flex h-16">
        
        {/* Left Spacer (matches page grid) */}
        <div className="hidden lg:block w-[240px] border-r border-transparent lg:border-neutral-200 dark:lg:border-neutral-800" />
        
        {/* Main Content Width (Matches Page Grid) */}
        <div className="flex-1 w-full max-w-3xl mx-auto flex items-center justify-between px-8 lg:px-12 border-r border-transparent lg:border-neutral-200 dark:lg:border-neutral-800">
          
          {/* Logo Area */}
          <div className="flex items-center">
            <Link 
              href="/" 
              className="font-serif text-[22px] text-neutral-800 dark:text-neutral-200"
            >
              Hrushikesh
            </Link>
          </div>

          {/* Right Area: Nav Links + Utilities */}
          <div className="flex items-center gap-8">
            {/* Nav Links */}
            <ul className="hidden md:flex items-center gap-6">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href} className="relative">
                    <Link
                      href={link.href}
                      className={cn(
                        "relative text-[13px] font-sans pb-1 transition-colors",
                        "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-neutral-900 dark:after:bg-neutral-100",
                        "after:transition-transform after:duration-300 after:ease-out after:origin-left",
                        isActive
                          ? "text-neutral-900 dark:text-neutral-100 font-bold after:scale-x-100"
                          : "text-neutral-600 hover:text-neutral-900 dark:hover:text-neutral-300 after:scale-x-0 hover:after:scale-x-100"
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Utility Buttons */}
            <div className="flex items-center gap-3 ml-2">
              <button className="flex items-center justify-center w-[34px] h-[34px] rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-600 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors bg-white dark:bg-neutral-900 shadow-sm">
                <Search size={14} strokeWidth={1.5} />
              </button>
              <button className="flex items-center justify-center w-[34px] h-[34px] rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-600 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors bg-white dark:bg-neutral-900 shadow-sm">
                <Moon size={14} strokeWidth={1.5} />
              </button>
            </div>
          </div>

        </div>

        {/* Right Index Area (Empty in header, just matching border) */}
        <div className="hidden lg:block w-[240px]" />

      </div>
    </header>
  );
}