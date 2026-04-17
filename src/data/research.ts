const LOREM_SHORT =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.";

const LOREM_LONG =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

export type ResearchEntry = {
  slug: string;
  tag: string;
  title: string;
  date: string;
  body: string;
  content: string[];
};

export const RESEARCH: ResearchEntry[] = [
  {
    slug: "on-slow-software",
    tag: "Essay",
    title: "On Slow Software",
    date: "Mar 2024",
    body: LOREM_SHORT,
    content: [LOREM_LONG, LOREM_LONG, LOREM_LONG],
  },
  {
    slug: "local-first-primitives",
    tag: "Note",
    title: "Local-first Primitives",
    date: "Feb 2024",
    body: LOREM_SHORT,
    content: [LOREM_LONG, LOREM_LONG],
  },
  {
    slug: "workshop-week-14",
    tag: "Field log",
    title: "Workshop, week 14",
    date: "Jan 2024",
    body: LOREM_SHORT,
    content: [LOREM_LONG, LOREM_LONG],
  },
  {
    slug: "typography-as-interface",
    tag: "Essay",
    title: "Typography as Interface",
    date: "Dec 2023",
    body: LOREM_SHORT,
    content: [LOREM_LONG, LOREM_LONG, LOREM_LONG],
  },
];
