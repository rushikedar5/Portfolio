"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

const quotes = [
  { text: "The biggest risk is not taking any risk.", author: "Mark Zuckerberg" },
  { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
  { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
  { text: "If you don't take risks, you can't create a future.", author: "Monkey D. Luffy" },
  { text: "I don't want to conquer anything. It's just that the person with the most freedom on the sea is the Pirate King.", author: "Monkey D. Luffy" }
];

export default function Footer() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [time, setTime] = useState("");

  useEffect(() => {
    // Quote rotation
    const quoteInterval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);

    // Live clock
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime(); // initial call
    const timeInterval = setInterval(updateTime, 1000);

    return () => {
      clearInterval(quoteInterval);
      clearInterval(timeInterval);
    };
  }, []);

  const currentQuote = quotes[quoteIndex];

  return (
    <div className="flex flex-col w-full mt-12">
      {/* Scrolled Too Far */}
      <div className="relative w-full h-16 border-y border-neutral-200 dark:border-neutral-800 flex items-center px-8 lg:px-12">
        <div className="absolute inset-0 bg-hatch opacity-50" />
        <h2 className="relative font-serif text-2xl text-neutral-900 dark:text-neutral-100 z-10">Scrolled Too Far</h2>
      </div>
      <div className="flex flex-col items-center justify-center gap-6 py-16 px-8 text-center">
        <p className="font-sans text-[13px] text-neutral-600 dark:text-neutral-400 max-w-sm">
          If you've read this far, you might be interested in collaborating or building something great.
        </p>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hrushikeshkedar.dev@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-2.5 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-black rounded-lg font-sans text-sm font-bold shadow hover:bg-neutral-800 dark:hover:bg-white transition-colors">
          Let's Talk <ArrowUpRight size={16} />
        </a>
      </div>

      {/* Quote */}
      <div className="relative w-full h-4 border-t border-neutral-200 dark:border-neutral-800 flex items-center px-8 lg:px-12">
        <div className="absolute inset-0 bg-hatch opacity-50" />
      </div>
      <div className="flex flex-col items-center justify-center gap-4 py-16 px-8 text-center border-t border-neutral-200 dark:border-neutral-800 min-h-[250px]">
        <span className="font-serif text-3xl text-neutral-300 dark:text-neutral-700">“</span>
        <p className="font-serif italic text-2xl text-neutral-800 dark:text-neutral-200 tracking-tight animate-in fade-in duration-500" key={currentQuote.text}>
          {currentQuote.text}
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400 mt-2 animate-in fade-in duration-500" key={currentQuote.author}>
          - {currentQuote.author}
        </p>
      </div>

      {/* Copyright */}
      <div className="relative w-full h-4 border-t border-neutral-200 dark:border-neutral-800 flex items-center px-8 lg:px-12">
        <div className="absolute inset-0 bg-hatch opacity-50" />
      </div>
      <div className="flex flex-col items-center justify-center gap-3 py-16 px-8 text-center border-t border-neutral-200 dark:border-neutral-800">
        <p className="font-sans text-[13px] text-neutral-600 dark:text-neutral-400">
          Designed & Developed by <strong className="text-neutral-900 dark:text-neutral-100 font-bold">Hrushikesh Kedar</strong>
        </p>
        <p className="font-mono text-[11px] text-neutral-400">
          © {new Date().getFullYear()} All rights reserved.
        </p>
        <div className="flex items-center justify-center gap-2 font-mono text-[11px] text-neutral-400 mt-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> 
          Pune, India {time && `- ${time}`}
        </div>
      </div>
    </div>
  );
}