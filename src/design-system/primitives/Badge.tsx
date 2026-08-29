import React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  icon?: React.ComponentType<{ className?: string }>;
  className?: string;
}

export function Badge({ children, icon: Icon, className = "", ...props }: BadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] text-xs sm:text-sm font-semibold text-[var(--text)] ${className}`}
      {...props}
    >
      {Icon && <Icon className="w-4 h-4 text-[var(--primary)] shrink-0" />}
      <span>{children}</span>
    </div>
  );
}
