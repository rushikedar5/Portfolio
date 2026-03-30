import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "About | Rushi",
};

const experience = [
  {
    area: "Backend Development",
    detail: "Building REST APIs with Express + TypeScript, PostgreSQL, Prisma ORM, JWT auth, and Docker.",
  },
  {
    area: "Generative AI",
    detail: "Working through a 6-stage hands-on roadmap — from LLM API basics to autonomous agents with RAG pipelines.",
  },
  {
    area: "AI Tooling",
    detail: "Groq inference, ChromaDB vector store, Tavily web search, local embeddings with Xenova/transformers.",
  },
];

const currently = [
  "Building a production-grade autonomous AI agent as a GitHub portfolio project",
  "Learning Next.js through project-based practice",
  "Exploring MCP servers and tool-use patterns",
];

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-12 m-6">

      {/* Intro */}
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold tracking-tight">About Me</h1>
        <p className="text-muted-foreground leading-relaxed max-w-2xl">
          I'm a TypeScript backend developer with a deep interest in generative AI.
          I learn by building — every concept goes through a real project before
          I consider it understood.
        </p>
      </div>

      <Separator />

      {/* Experience areas */}
      <div className="flex flex-col gap-6">
        <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
          What I Work With
        </h2>
        <div className="flex flex-col gap-6">
          {experience.map((item) => (
            <div key={item.area} className="flex flex-col gap-1">
              <p className="font-medium">{item.area}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Currently */}
      <div className="flex flex-col gap-6">
        <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
          Currently
        </h2>
        <ul className="flex flex-col gap-3">
          {currently.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-foreground shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}