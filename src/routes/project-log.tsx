import { createFileRoute } from "@tanstack/react-router";
import { Link as LinkIcon } from "lucide-react";
import { FirstLetterLarge } from "../components/FirstLetterLarge";
import { Section } from "../components/Section";
import { PROJECTS } from "../data/projects";

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
            <Section key={p.slug}>
              <article
                id={p.slug}
                className={`scroll-mt-28 grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
                  flip ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="overflow-hidden rounded-xl border border-lace/40 bg-keystone aspect-video">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-lace mb-4">
                    {p.year} · {p.role}
                  </p>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/title inline-flex items-baseline gap-3"
                  >
                    <FirstLetterLarge
                      as="h2"
                      text={p.title}
                      className="text-creamy text-4xl md:text-5xl transition-colors"
                    />
                    <LinkIcon
                      className="w-5 h-5 text-creamy opacity-50 group-hover/title:text-carnelian group-hover/title:opacity-100 transition-all duration-300"
                      strokeWidth={1.75}
                    />
                  </a>
                  <p className="mt-6 text-creamy/85 leading-relaxed not-italic">
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
