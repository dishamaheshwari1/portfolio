import { Link as LinkIcon } from "lucide-react";
import { FirstLetterLarge } from "../components/FirstLetterLarge";
import { Section } from "../components/Section";
import { PROJECTS } from "../data/projects";

export default function ProjectLogPage() {
  return (
    <div>
      <div className="px-6 md:px-10 max-w-6xl mx-auto">
        <Section className="text-center mb-20">
          <p className="text-[11px] uppercase tracking-[0.4em] text-minimalist mb-6">
            Field reports · 2021—2024
          </p>
          <FirstLetterLarge text="Project Log" className="text-creamy text-5xl md:text-7xl" />
        </Section>
      </div>

      <div className="pb-16">
        {PROJECTS.map((p, i) => {
          const flip = i % 2 === 1;
          const blue = i % 2 === 1;
          return (
            <section
              key={p.slug}
              className={`w-full py-20 ${blue ? "bg-carnelian" : "bg-sealskin"}`}
            >
              <div className="px-6 md:px-10 max-w-6xl mx-auto">
                <article
                  id={p.slug}
                  className={`scroll-mt-28 grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
                    flip ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="overflow-hidden rounded-xl border border-creamy/40 bg-keystone aspect-video">
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.3em] text-creamy/80 mb-4">
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
                        className={`w-5 h-5 text-creamy opacity-50 group-hover/title:opacity-100 transition-all duration-300 ${blue ? "" : "group-hover/title:text-carnelian"}`}
                        strokeWidth={1.75}
                      />
                    </a>
                    <p className="mt-6 text-creamy/95 leading-relaxed not-italic">{p.body}</p>
                  </div>
                </article>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
