import Image from "next/image"

import { ContactSection } from "@/components/contact-section"
import { PortfolioGallery } from "@/components/portfolio-gallery"
import { PricingTable } from "@/components/pricing-table"
import { ThemeToggle } from "@/components/theme-toggle"
import { PHOTOGRAPHER } from "@/lib/portfolio-data"

const NAV_ITEMS = [
  { href: "#introduction", label: "Introduction" },
  { href: "#work", label: "Work" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
] as const

export default function Page() {
  const { heroImage } = PHOTOGRAPHER

  return (
    <div id="top" className="min-h-dvh bg-background text-foreground">
      <header className="sticky top-0 z-30 border-b border-border/80 bg-background/90 backdrop-blur-sm">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>

        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-3.5 md:px-10">
          <a
            href="#top"
            className="font-heading text-lg font-normal tracking-tight text-foreground"
          >
            {PHOTOGRAPHER.wordmark}
          </a>

          <div className="flex flex-wrap items-center gap-3 md:gap-6">
            <nav aria-label="Primary">
              <ul className="flex flex-wrap items-center gap-1 md:gap-4">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="inline-flex min-h-8 items-center px-2 text-xs tracking-wide text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <span
              aria-hidden="true"
              className="hidden h-3.5 w-px bg-border sm:inline-block"
            />

            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 md:px-10">
        <section
          id="introduction"
          className="grid gap-12 py-16 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:items-center md:gap-14 md:py-24"
        >
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                {PHOTOGRAPHER.basedIn} · {PHOTOGRAPHER.availability}
              </p>

              <h1
                id="main-content"
                tabIndex={-1}
                style={{ fontSize: "clamp(2.25rem, 1.5rem + 3vw, 4rem)" }}
                className="font-heading leading-[1.08] font-normal tracking-tight text-balance text-foreground outline-none"
              >
                {PHOTOGRAPHER.heroHeadline}
              </h1>
            </div>

            <div className="max-w-[60ch] space-y-4 text-base leading-relaxed text-pretty text-muted-foreground">
              {PHOTOGRAPHER.introParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2">
              <a
                href={`mailto:${PHOTOGRAPHER.email}?subject=${encodeURIComponent(
                  "Photography Commission Inquiry"
                )}`}
                className="inline-flex min-h-9 items-center border border-transparent bg-primary px-4 py-2 text-xs font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/85"
              >
                {PHOTOGRAPHER.email}
              </a>

              <a
                href="#work"
                className="inline-flex min-h-9 items-center gap-2 border-b border-border pb-0.5 text-xs font-medium tracking-wide text-foreground transition-colors hover:border-foreground"
              >
                <span>Browse selected plates</span>
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <figure className="space-y-3">
            <div className="overflow-hidden border border-border/80 bg-muted">
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                width={heroImage.width}
                height={heroImage.height}
                loading="eager"
                fetchPriority="high"
                unoptimized
                style={{
                  aspectRatio: `${heroImage.width} / ${heroImage.height}`,
                }}
                className="block h-auto w-full object-cover"
              />
            </div>
            <figcaption className="flex flex-wrap items-baseline justify-between gap-2 font-mono text-[11px] text-muted-foreground">
              <span>
                Plate {heroImage.plate} · {heroImage.title}
              </span>
              <span>{heroImage.caption}</span>
            </figcaption>
          </figure>
        </section>

        <PortfolioGallery />

        <PricingTable />

        <ContactSection />
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between md:px-10">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="font-heading text-sm text-foreground">
              {PHOTOGRAPHER.name}
            </span>
            <span aria-hidden="true">·</span>
            <span>{PHOTOGRAPHER.tagline}</span>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[11px]">
            <span>
              Press <kbd className="border border-border px-1 py-0.5">D</kbd>{" "}
              for theme
            </span>
            <a
              href={`mailto:${PHOTOGRAPHER.email}`}
              className="inline-flex min-h-7 items-center underline decoration-border underline-offset-4 hover:text-foreground"
            >
              {PHOTOGRAPHER.email}
            </a>
            <a
              href="#top"
              className="inline-flex min-h-7 items-center underline decoration-border underline-offset-4 hover:text-foreground"
            >
              Top ↑
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
