import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <Container>
        <div className="text-sm text-yc-g3 flex flex-col md:flex-row gap-3 justify-between">
          <p>© {new Date().getFullYear()} YellowCables. All rights reserved.</p>
          <p className="text-yc-g4">Built with React + Tailwind.</p>
        </div>
      </Container>
    </footer>
  );
}