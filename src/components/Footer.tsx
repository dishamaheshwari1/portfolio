export function Footer() {
  return (
    <footer className="mt-24 border-t border-creamy/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-[10px] uppercase tracking-[0.3em] text-minimalist/70">
          © {new Date().getFullYear()} — Crafted in solitude
        </p>
        <ul className="flex items-center gap-6">
          {[
            { href: "mailto:hello@example.com", label: "Email" },
            { href: "https://linkedin.com", label: "LinkedIn" },
            { href: "https://github.com", label: "GitHub" },
          ].map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-[10px] uppercase tracking-[0.3em] text-minimalist/70 hover:text-creamy transition-colors"
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
