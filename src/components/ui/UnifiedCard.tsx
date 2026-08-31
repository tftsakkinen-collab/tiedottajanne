import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface UnifiedCardProps {
  badge?: string;
  badgeType?: "accent" | "neutral" | "growth";
  icon?: React.ReactNode;
  title: string;
  subtitle?: string;
  priceTag?: string;
  priceNote?: string;
  description?: string;
  children?: React.ReactNode;
  ctaText?: string;
  ctaHref?: string;
  ctaAction?: () => void;
  ctaVariant?: "primary" | "secondary" | "outline";
  isFeatured?: boolean;
  className?: string;
}

export default function UnifiedCard({
  badge,
  badgeType = "neutral",
  icon,
  title,
  subtitle,
  priceTag,
  priceNote,
  description,
  children,
  ctaText,
  ctaHref,
  ctaAction,
  ctaVariant = "secondary",
  isFeatured = false,
  className = "",
}: UnifiedCardProps) {
  const badgeClasses = {
    accent: "bg-[#00d2ff]/15 border-[#00d2ff]/30 text-[#00d2ff]",
    neutral: "bg-white/[0.04] border-white/15 text-slate-300",
    growth: "bg-emerald-500/10 border-emerald-400/30 text-emerald-400",
  }[badgeType];

  const ctaClasses = {
    primary: "bg-white text-black hover:bg-[#00d2ff] hover:text-black shadow-[0_0_25px_rgba(255,255,255,0.2)]",
    secondary: "bg-white/[0.04] border border-white/15 text-white hover:bg-white hover:text-black",
    outline: "border border-white/20 text-white hover:border-[#00d2ff] hover:text-[#00d2ff]",
  }[ctaVariant];

  return (
    <div
      className={`rounded-3xl p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between backdrop-blur-md shadow-lg ${
        isFeatured
          ? "bg-[#0c121c]/90 border border-[#00d2ff]/50 shadow-[0_0_35px_rgba(0,210,255,0.12)]"
          : "bg-[#0c121c]/75 border border-white/10 hover:border-[#00d2ff]/40"
      } ${className}`}
    >
      <div className="space-y-6">
        {/* Top Bar with Badge or Icon */}
        {(badge || icon) && (
          <div className="flex items-center justify-between gap-3">
            {badge && (
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold tracking-wider ${badgeClasses}`}>
                {badge}
              </span>
            )}
            {icon && (
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 text-[#00d2ff] flex items-center justify-center shrink-0">
                {icon}
              </div>
            )}
          </div>
        )}

        {/* Title & Pricing */}
        <div className="space-y-2">
          {subtitle && (
            <span className="text-xs font-semibold text-[#00d2ff] uppercase tracking-wider block">
              {subtitle}
            </span>
          )}
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug font-display">
            {title}
          </h3>
          {priceTag && (
            <div className="mt-2 text-2xl sm:text-3xl font-bold font-display text-[#00d2ff] bg-white/[0.03] py-2 px-3.5 rounded-2xl border border-white/10 inline-block">
              {priceTag} {priceNote && <span className="text-xs sm:text-sm font-sans font-normal text-slate-300">{priceNote}</span>}
            </div>
          )}
        </div>

        {/* Description */}
        {description && (
          <p className="text-sm text-slate-200 leading-relaxed font-normal">
            {description}
          </p>
        )}

        {/* Custom Body / Content */}
        {children && <div className="pt-2">{children}</div>}
      </div>

      {/* CTA at Bottom */}
      {ctaText && (
        <div className="pt-6 border-t border-white/10 mt-6">
          {ctaHref ? (
            <Link
              href={ctaHref}
              className={`w-full py-3.5 px-6 rounded-2xl font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 group/btn text-center min-h-[48px] ${ctaClasses}`}
            >
              <span>{ctaText}</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          ) : (
            <button
              onClick={ctaAction}
              className={`w-full py-3.5 px-6 rounded-2xl font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 group/btn text-center min-h-[48px] cursor-pointer ${ctaClasses}`}
            >
              <span>{ctaText}</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
