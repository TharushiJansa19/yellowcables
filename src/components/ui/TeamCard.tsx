import Tag from "./Tag";
import { Github, Linkedin, Globe } from "lucide-react";

export default function TeamCard({
  name,
  role,
  bio,
  skills,
  image,
  links,
}: {
  name: string;
  role: string;
  bio: string;
  skills: string[];
  image: string;
  links?: { linkedin?: string; github?: string; website?: string };
}) {
  return (
    <div className="rounded-2xl overflow-hidden bg-yc-dark2/40 border border-white/5 hover:border-yc-yellow/25 shadow-glow backdrop-blur transition">
      <div className="p-6 flex gap-4">
        <div className="h-16 w-16 rounded-2xl overflow-hidden border border-white/10 bg-black/30 shrink-0">
          <img src={image} alt={name} className="h-full w-full object-cover" />
        </div>

        <div className="min-w-0">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-lg font-bold leading-tight">{name}</h3>
              <p className="text-sm text-yc-g2">{role}</p>
            </div>

            {links ? (
              <div className="flex items-center gap-2 text-yc-g3">
                {links.linkedin ? (
                  <a
                    className="hover:text-yc-yellow"
                    href={links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    title="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                ) : null}
                {links.github ? (
                  <a
                    className="hover:text-yc-yellow"
                    href={links.github}
                    target="_blank"
                    rel="noreferrer"
                    title="GitHub"
                  >
                    <Github size={18} />
                  </a>
                ) : null}
                {links.website ? (
                  <a
                    className="hover:text-yc-yellow"
                    href={links.website}
                    target="_blank"
                    rel="noreferrer"
                    title="Website"
                  >
                    <Globe size={18} />
                  </a>
                ) : null}
              </div>
            ) : null}
          </div>

          <p className="mt-3 text-sm text-yc-g2">{bio}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((s) => (
              <Tag key={s} label={s} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}