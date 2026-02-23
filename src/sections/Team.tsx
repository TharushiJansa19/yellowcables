import Container from "../components/layout/Container";
import SectionHeader from "../components/layout/SectionHeader";
import TeamCard from "../components/ui/TeamCard";
import { team } from "../data/Team";

export default function Team() {
  return (
    <section id="team" className="py-20 border-t border-white/5">
      <Container>
        <SectionHeader
          title="Meet the Team"
          subtitle="A small team with strong engineering + software capability."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {team.map((m) => (
            <TeamCard key={m.name} {...m} />
          ))}
        </div>
      </Container>
    </section>
  );
}