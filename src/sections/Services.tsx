import Container from "../components/layout/Container";
import SectionHeader from "../components/layout/SectionHeader";
import { services } from "../data/services";
import { ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-20 border-t border-white/5">
      <Container>
        <SectionHeader
          kicker="What we do"
          title="Services"
          subtitle="Choose a service or combine multiple — we can deliver end-to-end solutions."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl bg-yc-dark2/40 border border-white/5 hover:border-yc-yellow/25 shadow-glow backdrop-blur px-6 py-6 transition"
            >
              <h3 className="text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-yc-g2">{s.desc}</p>
              <a
                href="#book"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-yc-yellow hover:brightness-110"
              >
                Book this service <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}