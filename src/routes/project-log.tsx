import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { FirstLetterLarge } from "../components/FirstLetterLarge";
import { Section } from "../components/Section";

export const Route = createFileRoute("/project-log")({
  head: () => ({
    meta: [
      { title: "Project Log — Portfolio" },
      {
        name: "description",
        content: "Selected projects in a Z-pattern editorial layout.",
      },
      { property: "og:title", content: "Project Log — Portfolio" },
      {
        property: "og:description",
        content: "Detailed write-ups of shipped work.",
      },
    ],
  }),
  component: ProjectLogPage,
});

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const PROJECTS = [
  {
    title: "Atlas",
    year: "2024",
    role: "Founding Engineer",
    body: LOREM,
    href: "#",
    img: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&q=80&auto=format&fit=crop",
  },
  {
    title: "Lumen",
    year: "2023",
    role: "Designer & Engineer",
    body: LOREM,
    href: "#",
    img: "https://images.unsplash.com/photo-1519682577862-22b62b24e493?w=1200&q=80&auto=format&fit=crop",
  },
  {
    title: "Forge",
    year: "2022",
    role: "Tech Lead",
    body: LOREM,
    href: "#",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80&auto=format&fit=crop",
  },
  {
    title: "Quill",
    year: "2021",
    role: "Solo Project",
    body: LOREM,
    href: "#",
    img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&q=80&auto=format&fit=crop",
  },
];

function ProjectLogPage() {
  return (
    <div className="px-6 md:px-10 max-w-6xl mx-auto">
      <Section className="text-center mb-20">
        <p className="text-[11px] uppercase tracking-[0.4em] text-minimalist mb-6">
          Field reports · 2021—2024
        </p>
        <FirstLetterLarge
          text="Project Log"
          className="text-creamy text-5xl md:text-7xl"
        />
      </Section>

      <div className="space-y-28 pb-16">
        {PROJECTS.map((p, i) => {
          const flip = i % 2 === 1;
          return (
            <Section key={p.title}>
              <article
                className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
                  flip ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="overflow-hidden rounded-xl border border-creamy/30 bg-keystone aspect-video">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-minimalist mb-4">
                    {p.year} · {p.role}
                  </p>
                  <a
                    href={p.href}
                    className="group inline-flex items-baseline gap-3 hover:text-carnelian transition-colors"
                  >
                    <FirstLetterLarge
                      as="h2"
                      text={p.title}
                      className="text-creamy text-4xl md:text-5xl group-hover:text-carnelian transition-colors"
                    />
                    <ExternalLink
                      className="w-5 h-5 text-minimalist group-hover:text-carnelian transition-colors"
                      strokeWidth={1.5}
                    />
                  </a>
                  <p className="mt-6 text-creamy/85 leading-relaxed">
                    {p.body}
                  </p>
                </div>
              </article>
            </Section>
          );
        })}
      </div>
    </div>
  );
}
