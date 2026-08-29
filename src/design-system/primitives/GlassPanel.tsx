import React from "react";

interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export function GlassPanel({ children, className = "", glow = false, ...props }: GlassPanelProps) {
  return (
    <div
      className={`relative glass p-6 sm:p-8 transition-all duration-200 ${
        glow ? "shadow-[0_0_25px_rgba(0,210,255,0.15)]" : ""
      } ${className}`}
      {...props}
    >
      {glow && (
        <div className="pointer-events-none absolute inset-0 rounded-[var(--radius)] bg-[radial-gradient(ellipse_at_top_right,var(--primary)_0%,transparent_60%)] opacity-10" />
      )}
      {children}
    </div>
  );
}
