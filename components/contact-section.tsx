"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { PHOTOGRAPHER } from "@/lib/portfolio-data"

const INQUIRY_PRESETS = [
  {
    label: "Portrait sitting",
    subject: "Portrait Sitting Inquiry",
  },
  {
    label: "Editorial assignment",
    subject: "Editorial Assignment Inquiry",
  },
  {
    label: "Architecture commission",
    subject: "Architecture Commission Inquiry",
  },
] as const

export function ContactSection() {
  const [copied, setCopied] = React.useState(false)

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PHOTOGRAPHER.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2500)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section id="contact" className="border-t border-border py-20 md:py-28">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] lg:gap-14">
        <div className="space-y-3">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            03 / Contact
          </p>
          <h2
            id="contact-heading"
            className="font-heading text-3xl font-normal tracking-tight text-balance md:text-4xl"
          >
            Inquiries &amp; Bookings
          </h2>
          <p className="max-w-[42ch] text-sm text-pretty text-muted-foreground">
            For new commissions, print inquiries, or syndication requests, write
            directly by email with your preferred dates and location.
          </p>
        </div>

        <div className="space-y-10">
          <div className="space-y-4">
            <a
              href={`mailto:${PHOTOGRAPHER.email}?subject=${encodeURIComponent(
                "Photography Commission Inquiry"
              )}`}
              className="inline-block max-w-full font-heading text-2xl font-normal tracking-tight break-words text-foreground underline decoration-border underline-offset-8 transition-colors hover:decoration-foreground sm:text-4xl"
            >
              {PHOTOGRAPHER.email}
            </a>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="min-h-9 px-3.5"
                onClick={handleCopyEmail}
              >
                {copied ? "Copied email" : "Copy email address"}
              </Button>
              <a
                href={`mailto:${PHOTOGRAPHER.email}?subject=${encodeURIComponent(
                  "Photography Commission Inquiry"
                )}`}
                className="inline-flex min-h-9 items-center border border-transparent bg-primary px-3.5 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/85"
              >
                Open mail client
              </a>
              <span
                role="status"
                aria-live="polite"
                className="font-mono text-xs text-muted-foreground"
              >
                {copied ? `${PHOTOGRAPHER.email} copied to clipboard.` : ""}
              </span>
            </div>
          </div>

          <div className="grid gap-6 border-t border-border pt-8 sm:grid-cols-3">
            <div className="space-y-1">
              <p className="font-mono text-[11px] tracking-wider text-muted-foreground uppercase">
                Studios
              </p>
              <p className="text-sm text-foreground">{PHOTOGRAPHER.basedIn}</p>
              <p className="text-xs text-muted-foreground">
                {PHOTOGRAPHER.availability}
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-mono text-[11px] tracking-wider text-muted-foreground uppercase">
                Response
              </p>
              <p className="text-sm text-foreground">
                {PHOTOGRAPHER.responseTime}
              </p>
              <p className="text-xs text-muted-foreground">
                Direct studio correspondence
              </p>
            </div>

            <div className="space-y-2">
              <p className="font-mono text-[11px] tracking-wider text-muted-foreground uppercase">
                Quick Subjects
              </p>
              <ul className="space-y-0.5 text-xs">
                {INQUIRY_PRESETS.map((preset) => (
                  <li key={preset.label}>
                    <a
                      href={`mailto:${PHOTOGRAPHER.email}?subject=${encodeURIComponent(
                        preset.subject
                      )}`}
                      className="inline-flex min-h-7 items-center text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground"
                    >
                      {preset.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
