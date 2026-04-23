import { Link, useLocation } from "react-router-dom";

const NAV = [
  { to: "/", label: "Mission Statement" },
  { to: "/project-log", label: "Project Log" },
  { to: "/mission-progress", label: "Skillset" },
  { to: "/research", label: "Research" },
] as const;

export function Header() {
  const { pathname } = useLocation();

  return (
    <header className="fixed top-0 inset-x-0 z-[100] bg-sealskin border-b border-lace/15">
      <nav className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        <Link
          to="/"
          className="text-creamy text-sm tracking-[0.3em] uppercase hover:text-lace transition-colors"
        >
          Portfolio
        </Link>
        <ul className="flex items-center gap-4 md:gap-9">
          {NAV.map((item) => {
            const active =
              item.to === "/"
                ? pathname === "/"
                : pathname === item.to || pathname.startsWith(item.to + "/");
            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={[
                    "text-[10px] md:text-xs uppercase tracking-[0.25em] transition-colors duration-300",
                    active ? "text-carnelian" : "text-creamy hover:text-lace",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
