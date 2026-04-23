import { motion } from "framer-motion";
import { FirstLetterLarge } from "../components/FirstLetterLarge";
import { Section } from "../components/Section";

const FAN_CARDS = [
  {
    rotate: -10,
    title: "Atlas",
    tag: "Cartography Engine",
    slug: "atlas",
    img: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=900&q=80&auto=format&fit=crop",
  },
  {
    rotate: 0,
    title: "Lumen",
    tag: "Reading Atelier",
    slug: "lumen",
    img: "https://images.unsplash.com/photo-1519682577862-22b62b24e493?w=900&q=80&auto=format&fit=crop",
  },
  {
    rotate: 10,
    title: "Forge",
    tag: "Build System",
    slug: "forge",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&q=80&auto=format&fit=crop",
  },
];

const TIMELINE = [
  { year: "2016", title: "Started CS Degree", body: "Began formal study of computer science and design fundamentals." },
  { year: "2018", title: "First Internship", body: "Joined a small product team and shipped my first feature to production." },
  { year: "2020", title: "Senior Product Engineer", body: "Led front-end architecture on a consumer app reaching millions." },
  { year: "2022", title: "Principal Engineer", body: "Owned platform direction at a Series B startup." },
  { year: "2024", title: "Founded a Studio", body: "Independent practice focused on tools for thinking." },
];

export default function HomePage() {
  return (
    <div className="px-6 md:px-10">
      <section className="max-w-6xl mx-auto pt-12 pb-20 text-center">
        <p className="text-[11px] uppercase tracking-[0.4em] text-minimalist mb-8">
          Designer · Engineer · Operator
        </p>
        <FirstLetterLarge text="Marcus Maheshwari" className="text-creamy text-6xl md:text-8xl lg:text-9xl" />
        <p className="mt-10 max-w-xl mx-auto text-creamy/80">
          Building considered software at the intersection of craft and systems thinking.
        </p>
      </section>

      <Section className="max-w-6xl mx-auto pb-32">
        <div className="relative flex flex-wrap md:flex-nowrap items-center justify-center gap-6 md:gap-0 py-12">
          {FAN_CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ rotate: card.rotate, y: 0 }}
              whileHover={{ rotate: 0, scale: 1.1, zIndex: 99, y: -10 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              style={{ zIndex: i + 1 }}
              className="relative w-full sm:w-72 md:w-80 aspect-video md:-ml-10 first:md:ml-0"
            >
              <a
                href={`/project-log#${card.slug}`}
                className="block relative w-full h-full rounded-xl border border-lace bg-keystone overflow-hidden cursor-pointer shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)]"
              >
                <img src={card.img} alt={card.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-60" />
                <div className="absolute inset-0 bg-sealskin/40" />
                <div className="relative h-full flex flex-col justify-between p-5">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-creamy/80">{card.tag}</p>
                  <h3 className="heading-caps text-creamy text-2xl md:text-3xl">
                    <span className="word">
                      <span className="first-letter">{card.title.charAt(0)}</span>
                      {card.title.slice(1).toUpperCase()}
                    </span>
                  </h3>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="max-w-3xl mx-auto pb-24">
        <FirstLetterLarge as="h2" text="Mission Statement" className="text-creamy text-3xl md:text-4xl mb-8 text-center" />
        <p className="text-creamy/90 leading-relaxed text-lg text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. I build software the way a luthier builds an instrument — with patience, tolerance for slow problems, and respect for the people who'll eventually pick it up. My favourite output is a piece of software that quietly disappears into someone's daily ritual.
        </p>
      </Section>

      <Section className="max-w-3xl mx-auto pb-32">
        <FirstLetterLarge as="h2" text="My Journey" className="text-creamy text-3xl md:text-4xl mb-12 text-center" />
        <ol className="relative">
          <span aria-hidden className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-2 bottom-2 w-px bg-minimalist/60" />
          {TIMELINE.map((event, i) => (
            <li key={event.year} className="relative pl-12 md:pl-0 mb-12 last:mb-0">
              <span aria-hidden className="absolute left-[10px] md:left-1/2 md:-translate-x-1/2 top-2 w-2.5 h-2.5 rounded-full bg-carnelian ring-4 ring-sealskin" />
              <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"}`}>
                <p className="text-[11px] uppercase tracking-[0.3em] text-minimalist mb-1">{event.year}</p>
                <h3 className="text-creamy uppercase tracking-wider text-lg">{event.title}</h3>
                <p className="text-creamy/70 mt-2 text-sm">{event.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>
    </div>
  );
}
