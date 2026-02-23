export default function Tag({ label }: { label: string }) {
  return (
    <span className="text-xs px-2 py-1 rounded-lg border border-white/10 text-yc-g2 bg-black/20">
      {label}
    </span>
  );
}