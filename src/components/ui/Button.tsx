import { ReactNode } from "react";

export default function Button({
  children,
  href,
  variant = "primary",
}: {
  children: ReactNode;
  href: string;
  variant?: "primary" | "ghost";
}) {
  const base =
    "inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition";
  const primary = "bg-yc-yellow text-black hover:brightness-110";
  const ghost = "border border-white/10 text-white hover:border-yc-yellow/30";

  return (
    <a href={href} className={`${base} ${variant === "primary" ? primary : ghost}`}>
      {children}
    </a>
  );
}