export default function SectionHeader({
  kicker = "YellowCables",
  title,
  subtitle,
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-10">
      <p className="text-yc-yellow font-semibold tracking-wide">{kicker}</p>
      <h2 className="mt-2 text-3xl md:text-4xl font-bold">{title}</h2>
      {subtitle ? <p className="mt-3 text-yc-g2 max-w-2xl">{subtitle}</p> : null}
    </div>
  );
}