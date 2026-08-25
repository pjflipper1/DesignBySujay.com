import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line/80 bg-paper/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <p className="font-display text-xl font-bold tracking-tight text-ink">
            Sujay Subramanyam
          </p>
          <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
            Design, product, and creative direction—shaped by business, tech,
            and music.
          </p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm font-medium text-ink-soft">
          <Link href="/case-studies" className="nav-link">
            Case Studies
          </Link>
          <Link href="/writing" className="nav-link">
            Writing
          </Link>
          <Link href="/#experience" className="nav-link">
            Experience
          </Link>
        </div>
      </div>
    </footer>
  );
}
