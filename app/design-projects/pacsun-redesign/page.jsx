import Image from "next/image";
import Link from "next/link";

/** Images live in public/images for case study — change filenames here only. */
function img(filename) {
  return `/images for case study/${encodeURIComponent(filename)}`;
}

export const metadata = {
  title: "PacSun Mobile App Redesign",
  description:
    "A mobile app redesign concept for PacSun—improving home, search, catalog, and product flows for Gen Z streetwear shoppers.",
};

function SectionHeading({ id, children }) {
  return (
    <h2
      id={id}
      className="scroll-mt-28 border-b border-line pb-2 font-display text-xl font-bold tracking-tight text-ink"
    >
      {children}
    </h2>
  );
}

function WideFigure({ src, alt, title, children }) {
  return (
    <figure className="space-y-4 overflow-hidden border border-line bg-white/50">
      <div className="relative aspect-[16/10] w-full">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 768px"
        />
      </div>
      <figcaption className="space-y-2 border-t border-line px-4 py-4">
        {title ? (
          <p className="text-sm font-semibold text-ink">{title}</p>
        ) : null}
        {children ? (
          <p className="text-sm leading-relaxed text-muted">{children}</p>
        ) : null}
      </figcaption>
    </figure>
  );
}

function PhoneFigure({ src, alt, title, children }) {
  return (
    <figure className="space-y-4 overflow-hidden border border-line bg-white/50">
      <div className="relative mx-auto aspect-[9/19] w-full max-w-[280px] py-6">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 70vw, 280px"
        />
      </div>
      <figcaption className="space-y-2 border-t border-line px-4 py-4">
        {title ? (
          <p className="text-sm font-semibold text-ink">{title}</p>
        ) : null}
        {children ? (
          <p className="text-sm leading-relaxed text-muted">{children}</p>
        ) : null}
      </figcaption>
    </figure>
  );
}

function Mockup({ src, alt, caption }) {
  return (
    <figure className="flex flex-col items-center gap-3">
      <div className="relative aspect-[9/19] w-full max-w-[280px]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 70vw, 280px"
        />
      </div>
      {caption ? (
        <figcaption className="max-w-xs text-center text-sm text-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export default function PacSunRedesignPage() {
  return (
    <article className="min-h-screen text-ink">
      <header className="border-b border-line/80 bg-white/40">
        <div className="mx-auto flex max-w-3xl flex-col gap-4 px-6 py-10 md:py-14">
          <Link
            href="/case-studies"
            className="text-sm font-medium text-accent underline-offset-4 hover:underline"
          >
            ← Back to Case Studies
          </Link>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
            Mobile App Redesign Concept
          </p>
          <h1 className="font-display text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            PacSun Mobile App Redesign
          </h1>
          <p className="text-sm text-muted">Product Design · UX/UI · 2026</p>
          <nav
            aria-label="Case study sections"
            className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted"
          >
            <a href="#overview" className="hover:text-ink hover:underline">
              Overview
            </a>
            <a href="#customer" className="hover:text-ink hover:underline">
              Customer
            </a>
            <a href="#inspiration" className="hover:text-ink hover:underline">
              Inspiration
            </a>
            <a href="#process" className="hover:text-ink hover:underline">
              Process
            </a>
            <a href="#home" className="hover:text-ink hover:underline">
              Home
            </a>
            <a href="#search" className="hover:text-ink hover:underline">
              Search
            </a>
            <a href="#catalog" className="hover:text-ink hover:underline">
              Catalog
            </a>
            <a href="#product" className="hover:text-ink hover:underline">
              Product
            </a>
            <a href="#next-steps" className="hover:text-ink hover:underline">
              Next steps
            </a>
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-3xl space-y-14 px-6 py-10 md:py-14">
        <section id="overview" className="space-y-4">
          <SectionHeading>Project overview</SectionHeading>
          <p className="leading-relaxed text-ink-soft">
            PacSun is a streetwear retailer based out of California, selling
            items from clothing brands that target southern California youth
            subculture related to surfing, skating, and music. The retailer
            sells through a mix of traditional commerce with over 300 stores
            nationwide and e-commerce via their website and mobile app—something
            I downloaded as a PacSun shopper and felt the immediate need for
            redesign.
          </p>
          <p className="leading-relaxed text-ink-soft">
            As an avid user of PacSun, opening the mobile app led me to not feel
            the way I should when I open an e-commerce application. The screen
            real estate on the home page was not doing what e-commerce home pages
            should do: enticing me with offers at the start in a visually
            beautiful way. On top of this, the app has poor navigation—it felt
            very unintuitive, with buttons in the middle of promo images, where
            the entire promo image should be a single tappable component. This
            project is a concept for how the application could be redesigned.
          </p>
        </section>

        <section id="customer" className="space-y-4">
          <SectionHeading>Customer profile</SectionHeading>
          <p className="leading-relaxed text-ink-soft">
            The majority of PacSun users are typically between 16 and 24 years
            old—in high school, college, or just starting their careers as young
            adults. As part of Gen Z, millennials, and Gen Alpha, they are
            regularly on their phones and generally prefer elegant interfaces
            that navigate with the smoothness they expect from apps like
            Instagram and Snapchat. When they shop on the PacSun app, they want
            a mobile experience that feels as snappy and minimal as the social
            media apps they use daily.
          </p>
          <p className="leading-relaxed text-ink-soft">
            During my design process, I took inspiration from the aesthetic of
            hypebeast and sneakerhead influencers. PacSun’s market skews more
            toward skaters and surfers than hypebeasts, but the design language
            still fits a California-based streetwear brand and informed this
            concept.
          </p>
        </section>

        <section id="inspiration" className="space-y-10">
          <SectionHeading>Design inspiration</SectionHeading>
          <p className="leading-relaxed text-ink-soft">
            Before high-fidelity screens, I collected references from products
            whose layout, hierarchy, and interaction patterns fit the PacSun
            shopper. Each influenced a different layer of the redesign—from how
            content is organized to how promotions and navigation feel on
            mobile.
          </p>

          <WideFigure
            src={img(
              "screencapture-us-supreme-collections-all-2026-05-24-01_10_23.png",
            )}
            alt="Supreme online shop layout"
            title="Supreme"
          >
            Supreme’s web shop keeps the focus on product photography with a
            restrained grid, generous margins, and almost no visual noise. That
            minimal, editorial feel informed how I framed category and catalog
            screens—letting imagery lead while typography stays quiet and
            confident.
          </WideFigure>

          <WideFigure
            src={img(
              "screencapture-notion-so-5-Week-Linked-In-Post-Plan-297d556f980c80b8b6d9e5fb08c87ec9-2026-05-24-01_09_15.png",
            )}
            alt="Notion workspace with a structured content table"
            title="Notion"
          >
            Notion’s interface is built on clarity and structure: light borders,
            consistent spacing, and information grouped into scannable blocks. I
            borrowed that mindset for organizing dense retail content—search
            results, filters, and list views that stay readable without feeling
            cluttered.
          </WideFigure>

          <PhoneFigure
            src={img("IMG_4977.PNG")}
            alt="Amazon mobile app home screen"
            title="Amazon Mobile"
          >
            The Amazon app is a strong reference for mobile commerce patterns: a
            prominent rounded search bar, horizontal filter chips, card-based
            hero promos with clear swipe affordance, and a persistent bottom tab
            bar. Those patterns shaped PacSun’s home and discovery flows.
          </PhoneFigure>
        </section>

        <section id="process" className="space-y-6">
          <SectionHeading>Design process</SectionHeading>
          <p className="leading-relaxed text-ink-soft">
            I started with low-fidelity mockups to quickly sketch and think
            through layouts—a skeleton of the UI I could refine later. Moving to
            high-fidelity mockups, I referenced product imagery from the PacSun
            website and adjusted component dimensions to better fit real assets.
            The goal of the high-fidelity workflow was to continue tweaking the
            low-fidelity designs while adding what a finalized experience
            requires.
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            <figure className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-wide text-muted">
                Low fidelity
              </p>
              <div className="relative aspect-[4/3] w-full overflow-hidden border border-line">
                <Image
                  src={img("Screenshot 2026-05-22 010814.png")}
                  alt="Low-fidelity wireframes"
                  fill
                  className="object-cover object-left-top"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
            </figure>
            <figure className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-wide text-muted">
                High fidelity
              </p>
              <div className="relative aspect-[4/3] w-full overflow-hidden border border-line">
                <Image
                  src={img("Screenshot 2026-05-22 010620.png")}
                  alt="High-fidelity mockups"
                  fill
                  className="object-cover object-left-top"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
            </figure>
          </div>
        </section>

        <section id="home" className="space-y-8">
          <SectionHeading>Home</SectionHeading>
          <div className="grid gap-10 sm:grid-cols-2">
            <Mockup
              src={img("Component 66 - Copy.png")}
              alt="Redesigned PacSun home feed"
              caption="Home feed with category navigation and featured collections"
            />
            <Mockup
              src={img("Component 44.png")}
              alt="Home screen with category tiles"
              caption="Category discovery with full-bleed imagery"
            />
          </div>
        </section>

        <section id="search" className="space-y-8">
          <SectionHeading>Search</SectionHeading>
          <div className="grid gap-10 sm:grid-cols-2">
            <Mockup
              src={img("Component 77.png")}
              alt="Search with live suggestions"
              caption="Search with live suggestions"
            />
            <Mockup
              src={img("Component 17 - Copy.png")}
              alt="Search results grid"
              caption="Search results in a two-column product grid"
            />
          </div>
        </section>

        <section id="catalog" className="space-y-8">
          <SectionHeading>Catalog</SectionHeading>
          <div className="grid gap-10 sm:grid-cols-2">
            <Mockup
              src={img("Component 55 - Copy.png")}
              alt="Essentials Fear of God catalog"
              caption="Brand catalog — Essentials Fear of God"
            />
            <Mockup
              src={img("Group 17 - Copy.png")}
              alt="Hoodies category catalog"
              caption="Category catalog — Hoodies"
            />
          </div>
        </section>

        <section id="product" className="space-y-8">
          <SectionHeading>Product</SectionHeading>
          <div className="grid place-items-center gap-10">
            <Mockup
              src={img("Component 3.png")}
              alt="Product detail page"
              caption="Product detail with buy actions and recommendations"
            />
          </div>
        </section>

        <section id="next-steps" className="space-y-4">
          <SectionHeading>Next steps</SectionHeading>
          <ul className="list-inside list-disc space-y-2 text-ink-soft">
            <li className="leading-relaxed">
              Validate flows with PacSun shoppers through moderated usability
              tests.
            </li>
            <li className="leading-relaxed">
              Define motion and micro-interactions for search, cart, and
              checkout.
            </li>
            <li className="leading-relaxed">
              Partner with engineering on a phased rollout starting with home
              and search.
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
