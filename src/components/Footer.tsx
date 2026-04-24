export function Footer() {
  const links = [
    {
      href: "mailto:dishamaheshwari@outlook.com",
      label: "Email",
      external: false,
    },
    {
      href: "https://www.linkedin.com/in/maheshwaridisha",
      label: "LinkedIn",
      external: true,
    },
    {
      href: "https://github.com/dishamaheshwari1",
      label: "GitHub",
      external: true,
    },
  ];

  return (
    <footer className="mt-24 border-t border-creamy/10 bg-carnelian">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 flex items-center justify-center">
        <ul className="flex items-center gap-8">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                {...(l.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="text-[10px] uppercase tracking-[0.3em] text-creamy hover:text-creamy/70 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
