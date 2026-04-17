import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { FirstLetterLarge } from "../components/FirstLetterLarge";
import { Section } from "../components/Section";

export const Route = createFileRoute("/mission-progress")({
  head: () => ({
    meta: [
      { title: "Mission Progress — Portfolio" },
      {
        name: "description",
        content: "Skill progress bars and a public roadmap of what's next.",
      },
      { property: "og:title", content: "Mission Progress — Portfolio" },
      {
        property: "og:description",
        content: "Game-style progress bars and a current/future to-do list.",
      },
    ],
  }),
  component: MissionProgressPage,
});

const SKILLS = [
  { label: "React", value: 92 },
  { label: "TypeScript", value: 88 },
  { label: "Python", value: 76 },
  { label: "Rust", value: 54 },
  { label: "System Design", value: 70 },
];

const CURRENT = [
  { text: "Ship Atlas v2 layer compositor", done: true },
  { text: "Refactor Forge cache invalidation", done: true },
  { text: "Publish field notes on local-first sync", done: false },
  { text: "Open-source the Lumen typesetter", done: false },
];

const FUTURE = [
  { text: "Write a small book on tools for thought", done: false },
  { text: "Spin up a residency programme", done: false },
  { text: "Learn lutherie — physical, not digital", done: false },
  { text: "Build a hardware companion to Lumen", done: false },
];

function ProgressBar({ value, color }: { value: number; color: "blue" | "cream" }) {
  const segments = 20;
  const filled = Math.round((value / 100) * segments);
  const fill =
    color === "blue" ? "var(--color-carnelian)" : "var(--color-creamy)";
  return (
    <div className="flex gap-[3px] h-5">
      {Array.from({ length: segments }).map((_, i) => (
        <div
          key={i}
          className="flex-1 border border-creamy/30"
          style={{
            backgroundColor: i < filled ? fill : "transparent",
          }}
        />
      ))}
    </div>
  );
}

function Checklist({ items }: { items: { text: string; done: boolean }[] }) {
  return (
    <ul className="space-y-3">
      {items.map((it) => (
        <li key={it.text} className="flex items-start gap-3">
          <span
            className={`mt-1 w-5 h-5 shrink-0 border flex items-center justify-center transition-colors ${
              it.done
                ? "bg-carnelian border-carnelian"
                : "border-creamy/40 bg-transparent"
            }`}
          >
            {it.done && <Check className="w-3.5 h-3.5 text-creamy" strokeWidth={3} />}
          </span>
          <span
            className={`text-sm md:text-base ${
              it.done ? "text-creamy/60" : "text-creamy"
            }`}
          >
            {it.text}
          </span>
        </li>
      ))}
    </ul>
  );
}

function MissionProgressPage() {
  return (
    <div className="px-6 md:px-10 max-w-5xl mx-auto pb-16">
      <Section className="text-center mb-16">
        <p className="text-[11px] uppercase tracking-[0.4em] text-minimalist mb-6">
          Telemetry · current sprint
        </p>
        <FirstLetterLarge
          text="Mission Progress"
          className="text-creamy text-5xl md:text-7xl"
        />
        <p className="mt-8 max-w-xl mx-auto text-creamy/80">
          A live readout of where I'm strong, where I'm growing, and what I've
          publicly committed to doing next. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>
      </Section>

      {/* SKILL BARS */}
      <Section className="mb-24">
        <FirstLetterLarge
          as="h2"
          text="System Stats"
          className="text-creamy text-2xl md:text-3xl mb-10"
        />
        <div className="space-y-6">
          {SKILLS.map((s, i) => (
            <div key={s.label}>
              <div className="flex justify-between items-baseline mb-2">
                <span className="text-xs uppercase tracking-[0.25em] text-creamy">
                  {s.label}
                </span>
                <span className="text-xs text-minimalist tabular-nums">
                  {s.value} / 100
                </span>
              </div>
              <ProgressBar value={s.value} color={i % 2 === 0 ? "blue" : "cream"} />
            </div>
          ))}
        </div>
      </Section>

      {/* TODO */}
      <Section>
        <FirstLetterLarge
          as="h2"
          text="Quest Log"
          className="text-creamy text-2xl md:text-3xl mb-10"
        />
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <div className="rounded-xl border border-creamy/20 p-6 md:p-8 bg-keystone/60">
            <h3 className="text-[11px] uppercase tracking-[0.3em] text-carnelian mb-6">
              Current Projects
            </h3>
            <Checklist items={CURRENT} />
          </div>
          <div className="rounded-xl border border-creamy/20 p-6 md:p-8 bg-keystone/60">
            <h3 className="text-[11px] uppercase tracking-[0.3em] text-minimalist mb-6">
              Future Projects
            </h3>
            <Checklist items={FUTURE} />
          </div>
        </div>
      </Section>
    </div>
  );
}
