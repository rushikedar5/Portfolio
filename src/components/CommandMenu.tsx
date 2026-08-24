"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
  Home,
  Briefcase,
  FolderDot,
  Mail,
  Moon,
  Sun
} from "lucide-react";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

export function CommandMenu() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const { setTheme } = useTheme();

  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    
    const openMenu = () => setOpen(true);

    document.addEventListener("keydown", down);
    document.addEventListener("open-command-menu", openMenu);
    
    return () => {
      document.removeEventListener("keydown", down);
      document.removeEventListener("open-command-menu", openMenu);
    };
  }, []);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  if (!mounted) return null;

  return (
    <>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Navigation">
              <CommandItem onSelect={() => runCommand(() => router.push("/"))}>
                <Home className="mr-2 h-4 w-4" />
                <span>Home</span>
              </CommandItem>
              <CommandItem onSelect={() => runCommand(() => router.push("/projects"))}>
                <FolderDot className="mr-2 h-4 w-4" />
                <span>Projects</span>
              </CommandItem>
              <CommandItem onSelect={() => runCommand(() => router.push("/experience"))}>
                <Briefcase className="mr-2 h-4 w-4" />
                <span>Experience</span>
              </CommandItem>
              <CommandItem onSelect={() => runCommand(() => router.push("/contact"))}>
                <Mail className="mr-2 h-4 w-4" />
                <span>Contact</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Theme">
              <CommandItem onSelect={() => runCommand(() => setTheme("light"))}>
                <Sun className="mr-2 h-4 w-4" />
                <span>Light</span>
              </CommandItem>
              <CommandItem onSelect={() => runCommand(() => setTheme("dark"))}>
                <Moon className="mr-2 h-4 w-4" />
                <span>Dark</span>
              </CommandItem>
              <CommandItem onSelect={() => runCommand(() => setTheme("system"))}>
                <Settings className="mr-2 h-4 w-4" />
                <span>System</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  );
}
