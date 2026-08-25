import Link from "next/link";
import { caseStudies } from "../data/projects";

export const metadata = {
  title: "Case Studies",
  description:
    "Design and software development projects by Sujay Subramanyam—including PacSun mobile redesign, Catania Silk, and Guess That City.",
};

export default function CaseStudiesPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <header className="max-w-2xl">
        <p className="animate-fade-up text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          Design &amp; software
        </p>
        <h1 className="animate-fade-up delay-1 mt-3 font-display text-4xl font-bold tracking-tight text-ink md:text-6xl">
          Case Studies
        </h1>
        <p className="animate-fade-up delay-2 mt-5 text-lg leading-relaxed text-muted">
          Selected design and software development projects—product redesigns,
          shipped websites, and experiments in code.
        </p>
      </header>

      <ul className="mt-14 divide-y divide-line border-y border-line">
        {caseStudies.map((project, index) => {
          const Tag = project.external ? "a" : Link;
          const extraProps = project.external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {};

          return (
            <li key={project.slug}>
              <Tag
                href={project.href}
                className="project-row group flex flex-col gap-3 px-2 py-8 md:flex-row md:items-start md:justify-between md:gap-10 md:px-4"
                {...extraProps}
              >
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="font-mono text-xs text-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="font-display text-2xl font-bold tracking-tight text-ink transition-colors group-hover:text-accent md:text-3xl">
                      {project.title}
                    </h2>
                  </div>
                  <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
                    {project.summary}
                  </p>
                </div>
                <div className="flex shrink-0 flex-col items-start gap-1 text-sm text-muted md:items-end md:pt-1">
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                  <span className="mt-2 font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
                    {project.external ? "Open ↗" : "View study →"}
                  </span>
                </div>
              </Tag>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
