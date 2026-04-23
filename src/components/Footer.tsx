export function Footer() {
  return (
    <footer className="mt-24 border-t border-creamy/10 bg-carnelian">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 flex items-center justify-center">
        <ul className="flex items-center gap-8">
          {[
            { href: "mailto:hello@example.com", label: "Email" },
            { href: "https://linkedin.com", label: "LinkedIn" },
            { href: "https://github.com", label: "GitHub" },
          ].map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
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
