"use client";

import React, { useEffect, useRef } from "react";
import { initScrollReveal } from "../motion/observer";

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
}

export function Reveal({ children, className = "", delayMs = 0, ...props }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cleanup = initScrollReveal();
    return () => cleanup();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal
      className={`transition-all duration-300 ${className}`}
      style={{ transitionDelay: delayMs ? `${delayMs}ms` : undefined }}
      {...props}
    >
      {children}
    </div>
  );
}
