import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { FirstLetterLarge } from "../components/FirstLetterLarge";
import { Section } from "../components/Section";
import { PROJECTS } from "../data/projects";

export const Route = createFileRoute("/project-log/$slug")({
  loader: ({ params }) => {
    const project = PROJECTS.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.title} — Project Log` },
          { name: "description", content: loaderData.project.body },
          {
            property: "og:title",
            content: `${loaderData.project.title} — Project Log`,
          },
          { property: "og:description", content: loaderData.project.body },
          { property: "og:image", content: loaderData.project.img },
          { name: "twitter:image", content: loaderData.project.img },
        ]
      : [{ title: "Project — Portfolio" }],
  }),
  notFoundComponent: () => (
    <div className="px-6 md:px-10 max-w-3xl mx-auto py-24 text-center">
      <h1 className="text-creamy text-3xl uppercase tracking-wider mb-6">
        Project not found
      </h1>
      <Link
        to="/project-log"
        className="text-carnelian uppercase tracking-[0.25em] text-xs"
      >
        ← Back to Project Log
      </Link>
    </div>
  ),
  component: ProjectDetailPage,
});

function ProjectDetailPage() {
  const { project } = Route.useLoaderData();
  return (
    <div className="px-6 md:px-10 max-w-4xl mx-auto pb-24">
      <Section className="mb-10">
        <Link
          to="/project-log"
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-minimalist hover:text-creamy transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Project Log
        </Link>
      </Section>

      <Section className="mb-12">
        <p className="text-[11px] uppercase tracking-[0.4em] text-minimalist mb-6">
          {project.year} · {project.role}
        </p>
        <FirstLetterLarge
          text={project.title}
          className="text-creamy text-5xl md:text-7xl"
        />
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-carnelian uppercase tracking-[0.25em] text-xs hover:opacity-80 transition-opacity"
        >
          Visit project <ExternalLink className="w-3.5 h-3.5" strokeWidth={2} />
        </a>
      </Section>

      <Section className="mb-12">
        <div className="overflow-hidden rounded-xl border border-creamy/30 bg-keystone aspect-video">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      </Section>

      <Section>
        <p className="text-creamy/85 leading-relaxed text-lg">
          {project.body}
        </p>
        <p className="text-creamy/75 leading-relaxed mt-6">{project.body}</p>
      </Section>
    </div>
  );
}
