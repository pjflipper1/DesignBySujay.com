import Link from "next/link";
import { essays } from "../data/projects";

export const metadata = {
  title: "Writing",
  description:
    "Essays and class projects by Sujay Subramanyam on brand analysis, ethics, and platform strategy.",
};

export default function WritingPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <header className="max-w-2xl">
        <p className="animate-fade-up text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          Essays &amp; class projects
        </p>
        <h1 className="animate-fade-up delay-1 mt-3 font-display text-4xl font-bold tracking-tight text-ink md:text-6xl">
          Writing
        </h1>
        <p className="animate-fade-up delay-2 mt-5 text-lg leading-relaxed text-muted">
          Academic and analytical writing on brands, law, and platform
          strategy.
        </p>
      </header>

      <ul className="mt-14 divide-y divide-line border-y border-line">
        {essays.map((essay, index) => (
          <li key={essay.href}>
            <a
              href={essay.href}
              target="_blank"
              rel="noopener noreferrer"
              className="project-row group flex flex-col gap-3 px-2 py-8 md:flex-row md:items-start md:justify-between md:gap-10 md:px-4"
            >
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="font-mono text-xs text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-display text-2xl font-bold tracking-tight text-ink transition-colors group-hover:text-accent md:text-3xl">
                    {essay.title}
                  </h2>
                </div>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
                  {essay.summary}
                </p>
              </div>
              <span className="shrink-0 pt-1 text-sm font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
                Read ↗
              </span>
            </a>
          </li>
        ))}
      </ul>

      <p className="mt-10 text-sm text-muted">
        Looking for product work?{" "}
        <Link href="/case-studies" className="font-medium text-accent underline-offset-4 hover:underline">
          Browse case studies
        </Link>
        .
      </p>
    </div>
  );
}
