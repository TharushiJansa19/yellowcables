export type Project = {
  title: string;
  desc: string;
  tags: string[];
  image: string; // path in /public or imported asset
  link?: string; // optional case study / external link
};

export const projects: Project[] = [
  {
    title: "HORÀŌ Smart Parking Bay Sensor",
    desc: "Occupancy detection without cameras, live status display + web dashboard.",
    tags: ["ESP32", "ESP-NOW", "IoT", "Web UI", "3D Printed"],
    image: "/projects/parking.jpg",
  },
  {
    title: "Company Website Build",
    desc: "Modern React site with SEO, performance, and clean technical branding.",
    tags: ["React", "Tailwind", "SEO", "UI/UX"],
    image: "/projects/web.jpg",
  },
  {
    title: "3D Printing Design & Production",
    desc: "CAD modeling and print-ready parts designed for strength and fit.",
    tags: ["CAD", "Fusion 360", "Prototyping", "3D Printing"],
    image: "/projects/3dprint.jpg",
  },
];