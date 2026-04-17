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

const PROJECTS = [
  {
    title: "Atlas",
    year: "2024",
    role: "Founding Engineer",
    body: "A realtime cartography engine designed for distributed product teams. Atlas renders shared spatial canvases at 60fps with offline-first sync, custom tiling and a bespoke layer compositor written in Rust + WebGL.",
    href: "#",
    img: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=900&q=80&auto=format&fit=crop",
  },
  {
    title: "Lumen",
    year: "2023",
    role: "Designer & Engineer",
    body: "An opinionated reading environment for long-form essays. Custom typesetting engine, ambient palette shifts that follow time-of-day, and a friction-free annotation layer that exports to plain markdown.",
    href: "#",
    img: "https://images.unsplash.com/photo-1519682577862-22b62b24e493?w=900&q=80&auto=format&fit=crop",
  },
  {
    title: "Forge",
    year: "2022",
    role: "Tech Lead",
    body: "An incremental build system for monorepos. Forge cut median CI time from 14 minutes to 90 seconds across a 400-package workspace and now powers internal tooling for several mid-size engineering teams.",
    href: "#",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&q=80&auto=format&fit=crop",
  },
  {
    title: "Quill",
    year: "2021",
    role: "Solo Project",
    body: "A correspondence client for people who write long letters. Threaded composition, scheduled delivery and a slow-mode that intentionally throttles the inbox to one batch per day.",
    href: "#",
    img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=900&q=80&auto=format&fit=crop",
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
                <div className="overflow-hidden rounded-2xl border border-creamy/20 bg-keystone/40">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-72 md:h-96 object-cover hover:scale-105 transition-transform duration-700"
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
                  <p className="mt-6 text-creamy/85 leading-relaxed italic">
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
