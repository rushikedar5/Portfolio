"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Start offscreen
    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let animationFrameId: number;
    
    const updateMouse = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX}px`;
        dotRef.current.style.top = `${mouseY}px`;
      }
    };

    const renderRing = () => {
      // Lerp for smooth trailing effect
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      
      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`;
        ringRef.current.style.top = `${ringY}px`;
      }
      
      animationFrameId = requestAnimationFrame(renderRing);
    };
    
    // Start animation loop
    animationFrameId = requestAnimationFrame(renderRing);

    // Event listeners
    window.addEventListener("mousemove", updateMouse);
    
    // Hide native cursor on body when this component mounts (only on desktop)
    if (window.matchMedia("(min-width: 768px)").matches) {
      document.body.style.cursor = "none";
    }

    return () => {
      window.removeEventListener("mousemove", updateMouse);
      cancelAnimationFrame(animationFrameId);
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block overflow-hidden">
      {/* The trailing ring (Halo) */}
      <div 
        ref={ringRef}
        className="absolute w-8 h-8 rounded-full border border-neutral-500/70 dark:border-neutral-400/70 -translate-x-1/2 -translate-y-1/2 will-change-[left,top]"
        style={{ left: -100, top: -100 }}
      />
      {/* The immediate dot */}
      <div 
        ref={dotRef}
        className="absolute w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-neutral-100 -translate-x-1/2 -translate-y-1/2 will-change-[left,top] shadow-[0_0_8px_rgba(0,0,0,0.2)] dark:shadow-[0_0_8px_rgba(255,255,255,0.4)]"
        style={{ left: -100, top: -100 }}
      />
    </div>
  );
}
