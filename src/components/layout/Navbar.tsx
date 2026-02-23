import Container from "./Container";
import Button from "../ui/Button";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-yc-dark/70 backdrop-blur">
      <Container>
        <div className="py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-yc-yellow text-black flex items-center justify-center font-black">
              YC
            </div>
            <div>
              <p className="font-bold leading-none">YellowCables</p>
              <p className="text-xs text-yc-g3">Web • Software • Mechatronics</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-yc-g2">
            <a className="hover:text-white" href="#services">Services</a>
            <a className="hover:text-white" href="#projects">Projects</a>
            <a className="hover:text-white" href="#team">Team</a>
            <a className="hover:text-white" href="#book">Book</a>
          </nav>

          <Button href="#book" variant="primary">
            Book Appointment <ArrowRight size={18} />
          </Button>
        </div>
      </Container>
    </header>
  );
}