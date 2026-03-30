import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const skills = [
  "TypeScript",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Prisma",
  "Groq",
  "RAG",
  "Docker",
  "SpringBoot"
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
          <h1 className="text-5xl font-bold tracking-tight">Hrushikesh Kedar</h1>
          <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
            TypeScript backend developer building AI-powered applications — from
            RAG pipelines to autonomous agents.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Button asChild>
            <Link href="/projects">View Projects</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
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
