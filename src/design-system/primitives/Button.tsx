import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 active:scale-[0.98]";

  const variantStyles = {
    primary:
      "bg-[var(--primary)] text-[var(--primary-ink)] hover:opacity-90 shadow-md hover:shadow-lg",
    secondary:
      "bg-[var(--surface)] text-[var(--text)] border border-[var(--border)] hover:bg-[var(--border)]",
    outline:
      "border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--primary-ink)]",
    ghost:
      "text-[var(--text)] hover:bg-[var(--surface)]",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-6 py-3 text-sm sm:text-base gap-2",
    lg: "px-8 py-4 text-base font-bold gap-2.5",
  };

  const combinedClass = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClass}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClass} {...props}>
      {children}
    </button>
  );
}
