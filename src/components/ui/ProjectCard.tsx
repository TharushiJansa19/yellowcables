import Tag from "./Tag";
import { ExternalLink } from "lucide-react";

export default function ProjectCard({
  title,
  desc,
  tags,
  image,
  link,
}: {
  title: string;
  desc: string;
  tags: string[];
  image: string;
  link?: string;
}) {
  return (
    <div className="rounded-2xl overflow-hidden bg-yc-dark2/40 border border-white/5 hover:border-yc-yellow/25 shadow-glow backdrop-blur transition">
      <div className="h-44 w-full bg-black/30">
        <img src={image} alt={title} className="h-full w-full object-cover opacity-90" />
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold">{title}</h3>
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="text-yc-yellow hover:brightness-110"
              title="Open"
            >
              <ExternalLink size={18} />
            </a>
          ) : null}
        </div>

        <p className="mt-2 text-sm text-yc-g2">{desc}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <Tag key={t} label={t} />
          ))}
        </div>
      </div>
    </div>
  );
}