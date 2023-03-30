export interface ProjectCardItem {
  image: string;
  name: string;
  desc: string;
  link: string;
  tech: string;
}
export const projects: ProjectCardItem[] = [
  {
    image: "/projects/greenpantry.png",
    name: "green pantry",
    desc: "Directory for food product ratings with the aim of increasing transparency.",
    tech: "Next.js + React + Tailwind",
    link: "https://github.com/lap-top/folio/tree/main/src/projects/localsimple.mdx",
  },
  {
    image: "/projects/localsimple.png",
    name: "localsimple",
    desc: "A local food co-op website connecting people to farmers.",
    tech: "Next.js + React + Tailwind + Shopify Api",
    link: "#",
  },
];
