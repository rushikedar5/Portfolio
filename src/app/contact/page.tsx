import { ArrowUpRight, Mail, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-12 w-full pt-12 px-8 lg:px-12 animate-in fade-in duration-500">
      <h1 className="font-serif text-4xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
        Contact
      </h1>
      
      <div className="flex flex-col gap-6">
        <p className="font-sans text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-xl">
          I'm currently open for new opportunities. Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="flex flex-wrap gap-4 font-mono text-sm mt-4">
          <a href="https://github.com/rushikedar5" target="_blank" className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900 text-neutral-700 dark:text-neutral-300 transition-colors rounded-lg shadow-sm group">
            <FaGithub size={16} /> GitHub <ArrowUpRight size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
          </a>
          <a href="https://linkedin.com/in/rushikedar5" target="_blank" className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900 text-neutral-700 dark:text-neutral-300 transition-colors rounded-lg shadow-sm group">
            <FaLinkedin size={16} /> LinkedIn <ArrowUpRight size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hrushikeshkedar.dev@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900 text-neutral-700 dark:text-neutral-300 transition-colors rounded-lg shadow-sm group">
            <Mail size={16} /> Email <ArrowUpRight size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
          </a>
          <a href="/resume.pdf" target="_blank" className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900 text-neutral-700 dark:text-neutral-300 transition-colors rounded-lg shadow-sm group">
            <FileText size={16} /> Resume <ArrowUpRight size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>
    </div>
  );
}
