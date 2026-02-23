import Container from "../components/layout/Container";
import SectionHeader from "../components/layout/SectionHeader";
import { projects } from "../data/projects";
import ProjectCard from "../components/ui/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-t border-white/5">
      <Container>
        <SectionHeader
          title="Projects"
          subtitle="A few examples of our past work across web, software, mechatronics and 3D printing."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </Container>
    </section>
  );
}