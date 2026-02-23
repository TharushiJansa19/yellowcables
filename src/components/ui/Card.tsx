import { ReactNode } from "react";

export default function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={
        "rounded-2xl bg-yc-dark2/40 border border-white/5 shadow-glow backdrop-blur px-6 py-6 " +
        className
      }
    >
      {children}
    </div>
  );
}