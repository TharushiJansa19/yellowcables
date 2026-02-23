import type { InputHTMLAttributes } from "react";

export default function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={
        "w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-sm text-white " +
        "placeholder:text-yc-g5 focus:outline-none focus:border-yc-yellow/40"
      }
    />
  );
}