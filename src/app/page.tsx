import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";

const skills = [
  "TypeScript",
  "Next.js",
  "Node.js",
  "Express",
  "SpringBoot",
  "PostgreSQL",
  "Prisma",
  "Groq",
  "RAG",
  "Docker",
  
];

export default function Home() {
  return (
    <div className="flex flex-col gap-16 m-6">
      {/* Hero */}
      <section className="flex flex-col gap-6 pt-8">
        <div className="flex flex-col gap-3">
          <p className="text-muted-foreground text-sm font-medium tracking-widest uppercase">
            Hello, I'm
          </p>
          <h2 className="text-5xl font-bold tracking-tight">Hrushikesh Kedar</h2>
          <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
            TypeScript backend developer building AI-powered applications — from
            RAG pipelines to autonomous agents.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/projects">
            <Button>View Projects</Button>
          </Link>
          <Link href="/resume.pdf" target="_blank" download>
            <Button size="lg" variant="outline">
              Resume
            </Button>
          </Link>
        </div>
        <SocialLinks className="mt-2" />
      </section>

      {/* Skill */}
      <section className="flex flex-col gap-4">
        <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge
              key={skill}
              variant="secondary"
              className="text-sm py-1 px-3"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      {/* Currently building */}
      <section className="border border-border rounded-xl p-6 flex flex-col gap-2 bg-muted/30">
        <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
          Currently Building
        </p>
        <p className="text-lg font-medium">
          Production-grade autonomous AI agent
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Full-stack system with Express, React, PostgreSQL, ChromaDB, and
          Tavily — the final stage of a structured 6-stage generative AI
          roadmap.
        </p>
      </section>
    </div>
  );
}
