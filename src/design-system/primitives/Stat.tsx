import React from "react";

interface StatProps {
  label: string;
  sublabel?: string;
  icon?: React.ComponentType<{ className?: string }>;
  className?: string;
}

export function Stat({ label, sublabel, icon: Icon, className = "" }: StatProps) {
  return (
    <div className={`flex items-center gap-3.5 p-2 min-w-0 ${className}`}>
      {Icon && (
        <div className="w-10 h-10 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-[var(--primary)] flex items-center justify-center shrink-0">
          <Icon className="w-5 h-5" />
        </div>
      )}
      <div className="min-w-0 flex-1">
        <div className="text-base sm:text-lg md:text-xl font-bold font-mono text-[var(--text)] leading-tight break-words">
          {label}
        </div>
        {sublabel && (
          <div className="text-xs text-[var(--muted)] leading-tight mt-0.5 font-sans">
            {sublabel}
          </div>
        )}
      </div>
    </div>
  );
}
