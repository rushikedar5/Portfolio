import TechStack from "@/components/TechStack";

export default function ExperiencePage() {
  const experience = [
    {
      year: "June 2025 - Present",
      company: "Devcons Software Pvt. Ltd.",
      role: "Software Engineer Intern",
      description: [
        "Developed and maintained Kunbi Matrimony as a full-stack application using Node.js, Express.js, Next.js, and MySQL, implementing authentication, matchmaking workflows, profile management, and responsive UIs.",
        "Developed an AI-powered assessment platform using Python, FastAPI, LangChain, and LLM APIs, enabling automated test generation, intelligent question answering, and contextual chatbot support for students and instructors.",
        "Led full frontend migration from React.js to Next.js, improving routing, SEO, performance, and maintainability with seamless production deployment.",
        "Enhanced E-Seva Kendra using Spring Boot, Spring Security, JWT, and MySQL with role-based authorization, RESTful APIs, and admin modules; resolved critical CORS and security filter issues."
      ],
      tags: ["Node.js", "Next.js", "MySQL", "Python", "FastAPI", "LangChain", "Spring Boot", "Spring Security"]
    }
  ];

  return (
    <div className="flex flex-col gap-16 w-full pt-12 px-8 lg:px-12 animate-in fade-in duration-500 pb-20">
      
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
                <ul className="font-sans text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed list-none space-y-2">
                  {Array.isArray(item.description) ? (
                    item.description.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-neutral-300 dark:text-neutral-700 mt-1.5">•</span>
                        <span>{point}</span>
                      </li>
                    ))
                  ) : (
                    <li className="flex items-start gap-3">
                      <span className="text-neutral-300 dark:text-neutral-700 mt-1.5">•</span>
                      <span>{item.description}</span>
                    </li>
                  )}
                </ul>
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
        
        <div className="mt-4">
          <TechStack />
        </div>
      </section>
      
    </div>
  );
}
