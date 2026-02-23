import Container from "../components/layout/Container";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { Code2, Cpu, Layers, Wrench } from "lucide-react";

export default function Hero() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-yc-yellow font-semibold tracking-wide">
              Engineering + Digital Solutions
            </p>
            <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight">
              Modern websites, software, and mechatronic design — built to perform.
            </h1>
            <p className="mt-5 text-yc-g2 max-w-xl">
              YellowCables delivers professional, technical solutions: web development, software systems,
              mechatronics design, and 3D printing — from idea to deployment.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#services" variant="ghost">Explore Services</Button>
              <Button href="#book" variant="primary">Book a Consultation</Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-4 text-xs text-yc-g3">
              <span className="inline-flex items-center gap-2"><Code2 size={16} /> Web & Mobile</span>
              <span className="inline-flex items-center gap-2"><Cpu size={16} /> Mechatronics</span>
              <span className="inline-flex items-center gap-2"><Layers size={16} /> 3D Design/Print</span>
              <span className="inline-flex items-center gap-2"><Wrench size={16} /> Updates & Support</span>
            </div>
          </div>

          <div className="grid gap-4">
            <Card>
              <p className="text-sm text-yc-g2">Fast delivery • Clean design • Technical accuracy</p>
              <p className="mt-2 text-2xl font-bold">
                Built with a modern stack and an engineering mindset.
              </p>
              <p className="mt-3 text-sm text-yc-g3">
                Perfect for businesses that need a strong online presence + real-world technical solutions.
              </p>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card>
                <p className="text-yc-yellow font-bold text-lg">Performance</p>
                <p className="text-sm text-yc-g3 mt-2">Optimized UI, SEO, and speed.</p>
              </Card>
              <Card>
                <p className="text-yc-yellow font-bold text-lg">Precision</p>
                <p className="text-sm text-yc-g3 mt-2">Engineering-grade solutions.</p>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}