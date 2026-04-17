import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FirstLetterLarge } from "../components/FirstLetterLarge";
import { Section } from "../components/Section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mission Statement — Portfolio" },
      {
        name: "description",
        content:
          "Mission statement, biography and journey of a designer-engineer building considered software.",
      },
      { property: "og:title", content: "Mission Statement — Portfolio" },
      {
        property: "og:description",
        content: "Bio, vertical timeline and three featured project cards.",
      },
    ],
  }),
  component: HomePage,
});

const FAN_CARDS = [
  {
    rotate: -10,
    title: "Atlas",
    tag: "Cartography Engine",
    desc: "Realtime maps for distributed teams.",
  },
  {
    rotate: 0,
    title: "Lumen",
    tag: "Reading Atelier",
    desc: "A quiet space for long-form thought.",
  },
  {
    rotate: 10,
    title: "Forge",
    tag: "Build System",
    desc: "Compiling intent into shipped product.",
  },
];

const TIMELINE = [
  {
    year: "2024",
    title: "Founded a small studio",
    body: "Independent practice focused on tools for thinking.",
  },
  {
    year: "2022",
    title: "Principal Engineer",
    body: "Led platform architecture for a Series B startup.",
  },
  {
    year: "2019",
    title: "Senior Product Engineer",
    body: "Shipped consumer products to millions.",
  },
  {
    year: "2016",
    title: "First commit",
    body: "Started writing software for the public web.",
  },
];

function HomePage() {
  return (
    <div className="px-6 md:px-10">
      {/* HERO */}
      <section className="max-w-6xl mx-auto pt-12 pb-24 text-center">
        <p className="text-[11px] uppercase tracking-[0.4em] text-minimalist mb-8">
          Designer · Engineer · Operator
        </p>
        <FirstLetterLarge
          text="Marcus Vale"
          className="text-creamy text-6xl md:text-8xl lg:text-9xl"
        />
        <p className="mt-10 max-w-xl mx-auto text-minimalist/90 italic">
          Building considered software at the intersection of craft and
          systems thinking.
        </p>
      </section>

      {/* PROJECT FAN */}
      <Section className="max-w-6xl mx-auto pb-32">
        <div className="text-center mb-16">
          <FirstLetterLarge
            as="h2"
            text="The Project Fan"
            className="text-creamy text-3xl md:text-4xl"
          />
        </div>

        <div className="relative h-[420px] md:h-[480px] flex items-center justify-center">
          {FAN_CARDS.map((card, i) => (
            <motion.article
              key={card.title}
              initial={{ rotate: card.rotate, y: 0 }}
              whileHover={{ rotate: 0, scale: 1.1, zIndex: 50, y: -10 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              style={{
                marginLeft: i === 0 ? 0 : "-80px",
                zIndex: 10 + i,
              }}
              className="relative w-56 md:w-64 h-80 md:h-96 rounded-2xl border border-creamy/80 bg-keystone/60 backdrop-blur-sm p-6 flex flex-col justify-between cursor-pointer shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)]"
            >
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-creamy/70">
                  {card.tag}
                </p>
                <h3 className="heading-caps text-creamy text-2xl md:text-3xl mt-4">
                  <span className="word">
                    <span className="first-letter">
                      {card.title.charAt(0)}
                    </span>
                    {card.title.slice(1).toUpperCase()}
                  </span>
                </h3>
              </div>
              <p className="text-sm text-creamy/80 italic">{card.desc}</p>
            </motion.article>
          ))}
        </div>
      </Section>

      {/* BIO */}
      <Section className="max-w-3xl mx-auto pb-24">
        <FirstLetterLarge
          as="h2"
          text="Mission Statement"
          className="text-creamy text-3xl md:text-4xl mb-8 text-center"
        />
        <p className="text-creamy/90 leading-relaxed text-lg italic text-center">
          I build software the way a luthier builds an instrument — with patience,
          tolerance for slow problems, and respect for the people who'll
          eventually pick it up. My work sits between design systems, developer
          tooling and product engineering; my favourite output is a piece of
          software that quietly disappears into someone's daily ritual.
        </p>
      </Section>

      {/* TIMELINE */}
      <Section className="max-w-3xl mx-auto pb-32">
        <FirstLetterLarge
          as="h2"
          text="My Journey"
          className="text-creamy text-3xl md:text-4xl mb-12 text-center"
        />
        <ol className="relative">
          <span
            aria-hidden
            className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-2 bottom-2 w-px bg-minimalist/60"
          />
          {TIMELINE.map((event, i) => (
            <li key={event.year} className="relative pl-12 md:pl-0 mb-12 last:mb-0">
              <span
                aria-hidden
                className="absolute left-[10px] md:left-1/2 md:-translate-x-1/2 top-2 w-2.5 h-2.5 rounded-full bg-carnelian ring-4 ring-sealskin"
              />
              <div
                className={`md:w-1/2 ${
                  i % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
                }`}
              >
                <p className="text-[11px] uppercase tracking-[0.3em] text-minimalist mb-1">
                  {event.year}
                </p>
                <h3 className="text-creamy uppercase tracking-wider text-lg">
                  {event.title}
                </h3>
                <p className="text-creamy/70 italic mt-2 text-sm">
                  {event.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>
    </div>
  );
}
