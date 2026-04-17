import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-sealskin px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-creamy">404</h1>
        <h2 className="mt-4 text-xl uppercase tracking-[0.25em] text-minimalist">
          Signal lost
        </h2>
        <p className="mt-2 text-sm text-minimalist/80">
          The page you're looking for has drifted out of orbit.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md border border-creamy/40 px-5 py-2 text-xs uppercase tracking-[0.25em] text-creamy hover:bg-carnelian hover:border-carnelian transition-colors"
          >
            Return to base
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Portfolio — Mission Statement" },
      {
        name: "description",
        content:
          "A personal portfolio: mission statement, project log, mission progress and research.",
      },
      { property: "og:title", content: "Portfolio — Mission Statement" },
      {
        property: "og:description",
        content: "Selected works, ongoing missions and field research.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="min-h-screen bg-sealskin text-creamy flex flex-col">
      <Header />
      <main className="flex-1 pt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
