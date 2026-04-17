import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { FirstLetterLarge } from "../components/FirstLetterLarge";
import { Section } from "../components/Section";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research — Portfolio" },
      {
        name: "description",
        content: "Notion-style gallery of essays, notes and field research.",
      },
      { property: "og:title", content: "Research — Portfolio" },
      {
        property: "og:description",
        content: "A catalogue of writing, references and ongoing experiments.",
      },
    ],
  }),
  component: ResearchPage,
});

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.";

const ENTRIES = [
  {
    tag: "Essay",
    title: "On Slow Software",
    date: "Mar 2024",
    body: LOREM,
  },
  {
    tag: "Note",
    title: "Local-first Primitives",
    date: "Feb 2024",
    body: LOREM,
  },
  {
    tag: "Field log",
    title: "Workshop, week 14",
    date: "Jan 2024",
    body: LOREM,
  },
  {
    tag: "Essay",
    title: "Typography as Interface",
    date: "Dec 2023",
    body: LOREM,
  },
];

function ResearchPage() {
  return (
    <div className="px-6 md:px-10 max-w-6xl mx-auto pb-16">
      <Section className="text-center mb-16">
        <p className="text-[11px] uppercase tracking-[0.4em] text-minimalist mb-6">
          Library · gallery view
        </p>
        <FirstLetterLarge
          text="Research"
          className="text-creamy text-5xl md:text-7xl"
        />
        <p className="mt-8 max-w-xl mx-auto text-creamy/80">
          Essays, working notes and field logs. Updated when there's something
          worth saying — not before.
        </p>
      </Section>

      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ENTRIES.map((e) => (
            <a
              key={e.title}
              href="#"
              className="group rounded-xl border border-creamy/20 bg-keystone p-6 flex flex-col justify-between min-h-[220px] transition-all duration-300 hover:border-carnelian hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-carnelian">
                    {e.tag}
                  </span>
                  <ArrowUpRight
                    className="w-4 h-4 text-minimalist group-hover:text-creamy transition-colors"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-creamy text-xl uppercase tracking-wide leading-tight">
                  {e.title}
                </h3>
                <p className="mt-3 text-sm text-creamy/75">{e.body}</p>
              </div>
              <p className="mt-6 text-[10px] uppercase tracking-[0.3em] text-minimalist">
                {e.date}
              </p>
            </a>
          ))}
        </div>
      </Section>
    </div>
  );
}
