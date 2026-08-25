import Image from "next/image";
import Link from "next/link";
import { experience, tools } from "./data/projects";

export default function Home() {
  return (
    <>
      {/* Hero — one composition: brand, headline, support, CTAs, full-bleed image */}
      <section className="relative min-h-[calc(100vh-4.25rem)] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/profile-pic/1724480379833.jpg"
            alt=""
            fill
            priority
            className="animate-drift object-cover object-[center_20%] opacity-90"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/88 via-ink/70 to-ink/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-ink/20" />
        </div>

        <div className="relative mx-auto flex min-h-[calc(100vh-4.25rem)] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 md:justify-center md:px-8 md:pb-24 md:pt-20">
          <p className="animate-fade-up font-display text-5xl font-bold leading-[0.95] tracking-tight text-white md:text-7xl lg:text-8xl">
            Sujay
            <br />
            Subramanyam
          </p>
          <h1 className="animate-fade-up delay-1 mt-6 max-w-xl font-display text-2xl font-semibold leading-snug tracking-tight text-white/95 md:text-3xl">
            Design, product, and creative direction.
          </h1>
          <p className="animate-fade-up delay-2 mt-4 max-w-lg text-base leading-relaxed text-white/75 md:text-lg">
            A 23-year-old builder focused on thoughtful interfaces, business
            systems, and the stories that connect them.
          </p>
          <div className="animate-fade-up delay-3 mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/case-studies"
              className="inline-flex items-center bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-deep"
            >
              View case studies
            </Link>
            <Link
              href="/#about"
              className="inline-flex items-center border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              About me
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 md:px-8 md:py-28"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          About
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
          Curious across design, business, tech, and music.
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          Hi, my name is Sujay. I work at the intersection of product design and
          software—shaping experiences that feel clear, considered, and ready
          for real people.
        </p>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="font-display text-lg font-bold text-ink">
              Education
            </h3>
            <p className="mt-3 text-base leading-relaxed text-ink-soft">
              B.S. Business Administration — UC Riverside
            </p>
            <p className="mt-1 text-sm text-muted">
              Concentration: Information Systems and Marketing
            </p>
            <p className="mt-1 text-sm text-muted">Graduated December 2025</p>
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-ink">Tools</h3>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {tools.map(({ file, alt }) => (
                <div
                  key={file}
                  title={alt}
                  className="relative size-11 overflow-hidden bg-white/70 ring-1 ring-line/80"
                >
                  <Image
                    src={`/icon-pics/${encodeURIComponent(file)}`}
                    alt={alt}
                    fill
                    className="object-contain p-1.5"
                    sizes="44px"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="border-y border-line/70 bg-white/40 scroll-mt-24"
      >
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Experience
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Where I’ve been building.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
            Internships and programs spanning web design, front-end development,
            product research, and marketing.
          </p>

          <ol className="mt-14 space-y-0">
            {experience.map((job) => (
              <li
                key={`${job.org}-${job.role}`}
                className="grid gap-4 border-t border-line py-10 md:grid-cols-[minmax(0,14rem)_1fr] md:gap-10"
              >
                <div>
                  <p className="font-display text-lg font-bold text-ink">
                    {job.org}
                  </p>
                  <p className="mt-1 text-sm text-muted">{job.location}</p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-ink">
                    {job.role}
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                    {job.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                          aria-hidden
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA band */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <div className="relative overflow-hidden bg-ink px-8 py-14 text-white md:px-14">
          <div
            className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-accent/40 blur-3xl"
            aria-hidden
          />
          <h2 className="relative max-w-lg font-display text-3xl font-bold tracking-tight md:text-4xl">
            Explore the case studies.
          </h2>
          <p className="relative mt-4 max-w-md text-base leading-relaxed text-white/70">
            Design and software development projects—from mobile redesigns to
            live product sites.
          </p>
          <Link
            href="/case-studies"
            className="relative mt-8 inline-flex bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-deep"
          >
            Go to Case Studies
          </Link>
        </div>
      </section>
    </>
  );
}
