export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  skills: string[];
  image: string; // put images in /public/team
  links?: {
    linkedin?: string;
    github?: string;
    website?: string;
  };
};

export const team: TeamMember[] = [
  {
    name: "Shenal Perera",
    role: "Mechatronics Engineer • Full-Stack Developer",
    bio: "Web + embedded systems + prototyping. Focused on building modern, reliable solutions from idea to deployment.",
    skills: ["ESP32", "IoT", "3D Printing"],
    image: "/team/shen.jpg",
    links: {
      linkedin: "https://linkedin.com/",
      github: "https://github.com/",
    },
  },
  {
    name: "Tharu Jansa",
    role: "Software Engineer • UI/UX",
    bio: "Creates modern interfaces with clean UX and fast performance across web and mobile.",
    skills: ["React", "React Native", "UI/UX", "Figma", "Tailwind"],
    image: "/team/tharu.jpg",
    links: {
      linkedin: "https://linkedin.com/",
      github: "https://github.com/",
    },
  },
];