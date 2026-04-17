export const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

export type Project = {
  slug: string;
  title: string;
  year: string;
  role: string;
  body: string;
  href: string;
  img: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "atlas",
    title: "Atlas",
    year: "2024",
    role: "Founding Engineer",
    body: LOREM,
    href: "https://example.com/atlas",
    img: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&q=80&auto=format&fit=crop",
  },
  {
    slug: "lumen",
    title: "Lumen",
    year: "2023",
    role: "Designer & Engineer",
    body: LOREM,
    href: "https://example.com/lumen",
    img: "https://images.unsplash.com/photo-1519682577862-22b62b24e493?w=1200&q=80&auto=format&fit=crop",
  },
  {
    slug: "forge",
    title: "Forge",
    year: "2022",
    role: "Tech Lead",
    body: LOREM,
    href: "https://example.com/forge",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80&auto=format&fit=crop",
  },
  {
    slug: "quill",
    title: "Quill",
    year: "2021",
    role: "Solo Project",
    body: LOREM,
    href: "https://example.com/quill",
    img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&q=80&auto=format&fit=crop",
  },
];
