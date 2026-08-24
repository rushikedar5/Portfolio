export default function ExperiencePage() {
  const experience = [
    {
      year: "2023 - Present",
      company: "Company Name",
      role: "Full Stack Engineer",
      description: "Led the development of core features using Next.js and Node.js. Architected scalable database solutions and mentored junior developers.",
      tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"]
    },
    {
      year: "2021 - 2023",
      company: "Previous Tech",
      role: "Frontend Developer",
      description: "Built responsive user interfaces and implemented complex state management for data-heavy dashboards.",
      tags: ["React", "Redux", "Tailwind CSS"]
    }
  ];

  const techStack = {
    Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    Backend: ["Node.js", "Express", "PostgreSQL", "Prisma", "Redis"],
    Tools: ["Git", "Docker", "AWS", "Vercel", "Figma"]
  };

  return (
    <div className="flex flex-col gap-16 w-full pt-12 px-8 lg:px-12 animate-in fade-in duration-500">
      
      {/* EXPERIENCE SECTION */}
      <section className="flex flex-col gap-8">
        <h1 className="font-serif text-4xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
          Experience
        </h1>
        
        <div className="flex flex-col gap-12 mt-4">
          {experience.map((item, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-4 md:gap-8 group">
              <div className="font-mono text-xs text-neutral-500 pt-1">
                {item.year}
              </div>
              <div className="flex flex-col gap-3">
                <div>
                  <h3 className="font-serif text-xl font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-600 dark:group-hover:text-neutral-400 transition-colors">
                    {item.company}
                  </h3>
                  <p className="font-mono text-xs text-neutral-500 mt-1">{item.role}</p>
                </div>
                <p className="font-sans text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="font-mono text-[10px] uppercase tracking-widest px-2 py-1 bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 rounded-sm border border-neutral-200 dark:border-neutral-800">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TECH STACK SECTION */}
      <section className="flex flex-col gap-8 pt-12 border-t border-neutral-200 dark:border-neutral-800">
        <h2 className="font-serif text-3xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
          Tech Stack
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          {Object.entries(techStack).map(([category, skills]) => (
            <div key={category} className="flex flex-col gap-4">
              <h3 className="font-mono text-[11px] uppercase tracking-widest text-neutral-500 font-bold">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span key={skill} className="font-sans text-xs px-2.5 py-1 bg-white dark:bg-neutral-950 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800 rounded-md hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors cursor-default shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      
    </div>
  );
}
