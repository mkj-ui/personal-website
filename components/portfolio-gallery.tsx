"use client"

import Image from "next/image"
import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_PHOTOS,
  type PhotoCategory,
  type PortfolioPhoto,
} from "@/lib/portfolio-data"
import { cn } from "@/lib/utils"

function getSpanClasses(span: PortfolioPhoto["span"]): string {
  switch (span) {
    case "wide":
      return "md:col-span-2"
    case "landscape":
      return "md:col-span-1"
    case "portrait":
    default:
      return "md:col-span-1"
  }
}

function getAspectRatioStyle(photo: PortfolioPhoto): string {
  return `${photo.width} / ${photo.height}`
}

export function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = React.useState<
    "all" | PhotoCategory
  >("all")
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null)
  const dialogRef = React.useRef<HTMLDialogElement>(null)
  const triggerRef = React.useRef<HTMLButtonElement | null>(null)

  const filteredPhotos = React.useMemo(() => {
    if (activeCategory === "all") {
      return PORTFOLIO_PHOTOS
    }
    return PORTFOLIO_PHOTOS.filter((item) => item.category === activeCategory)
  }, [activeCategory])

  const selectedPhoto =
    selectedIndex !== null ? (filteredPhotos[selectedIndex] ?? null) : null

  const categoryCounts = React.useMemo(() => {
    const counts: Record<"all" | PhotoCategory, number> = {
      all: PORTFOLIO_PHOTOS.length,
      portraits: 0,
      architecture: 0,
      places: 0,
    }
    for (const photo of PORTFOLIO_PHOTOS) {
      counts[photo.category] += 1
    }
    return counts
  }, [])

  const openLightbox = (index: number, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger
    setSelectedIndex(index)
  }

  const closeLightbox = React.useCallback(() => {
    const dialog = dialogRef.current
    if (dialog?.open) {
      dialog.close()
    } else {
      setSelectedIndex(null)
    }
  }, [])

  const stepPhoto = React.useCallback(
    (delta: number) => {
      setSelectedIndex((current) => {
        if (current === null || filteredPhotos.length === 0) {
          return current
        }
        return (current + delta + filteredPhotos.length) % filteredPhotos.length
      })
    },
    [filteredPhotos.length]
  )

  React.useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog || selectedIndex === null) {
      return
    }

    if (!dialog.open) {
      dialog.showModal()
    }
  }, [selectedIndex])

  React.useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) {
      return
    }

    const handleClose = () => {
      setSelectedIndex(null)
      const trigger = triggerRef.current
      if (trigger && trigger.isConnected) {
        trigger.focus()
      }
    }

    dialog.addEventListener("close", handleClose)

    // Mandatory fallback for browsers without native <dialog closedby="any"> support (e.g. Safari)
    const handleFallbackBackdropClick = (event: MouseEvent) => {
      if ("closedBy" in HTMLDialogElement.prototype) {
        return
      }
      if (event.target !== dialog) {
        return
      }
      const rect = dialog.getBoundingClientRect()
      const isInsideContent =
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width

      if (!isInsideContent) {
        dialog.close()
      }
    }

    dialog.addEventListener("click", handleFallbackBackdropClick)

    return () => {
      dialog.removeEventListener("close", handleClose)
      dialog.removeEventListener("click", handleFallbackBackdropClick)
    }
  }, [])

  React.useEffect(() => {
    if (selectedIndex === null) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        event.preventDefault()
        stepPhoto(1)
      } else if (event.key === "ArrowLeft") {
        event.preventDefault()
        stepPhoto(-1)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedIndex, stepPhoto])

  return (
    <section id="work" className="border-t border-border py-20 md:py-28">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="space-y-3">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            01 / Selected Work
          </p>
          <h2
            id="work-heading"
            className="font-heading text-3xl font-normal tracking-tight text-balance md:text-4xl"
          >
            Plates &amp; Commissions
          </h2>
          <p className="max-w-[58ch] text-sm text-pretty text-muted-foreground md:text-base">
            A quiet index of recent portraits, architectural studies, and
            coastal observations. Select any frame to inspect full plate notes.
          </p>
        </div>

        <div
          role="group"
          aria-label="Filter plates by category"
          className="flex flex-wrap gap-2"
        >
          {PORTFOLIO_CATEGORIES.map((category) => {
            const isSelected = activeCategory === category.value
            return (
              <Button
                key={category.value}
                type="button"
                variant={isSelected ? "default" : "outline"}
                size="sm"
                aria-pressed={isSelected}
                onClick={() => {
                  setActiveCategory(category.value)
                  setSelectedIndex(null)
                }}
                className="min-h-9 px-3 text-xs tracking-wide"
              >
                <span>{category.label}</span>
                <span
                  className={cn(
                    "font-mono text-[11px] tabular-nums",
                    isSelected
                      ? "text-primary-foreground/80"
                      : "text-muted-foreground"
                  )}
                >
                  {categoryCounts[category.value]}
                </span>
              </Button>
            )
          })}
        </div>
      </div>

      <ul className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:items-start lg:gap-x-12 lg:gap-y-16">
        {filteredPhotos.map((photo, index) => (
          <li key={photo.id} className={getSpanClasses(photo.span)}>
            <figure className="group space-y-3">
              <button
                type="button"
                onClick={(event) => openLightbox(index, event.currentTarget)}
                aria-label={`Open plate ${photo.plate}: ${photo.title}`}
                className="block w-full overflow-hidden border border-border/80 bg-muted text-start transition-colors hover:border-foreground/40"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  loading="lazy"
                  decoding="async"
                  unoptimized
                  style={{ aspectRatio: getAspectRatioStyle(photo) }}
                  className="block h-auto w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.015] motion-reduce:transition-none"
                />
              </button>

              <figcaption className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 pt-1">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-muted-foreground tabular-nums">
                    {photo.plate}
                  </span>
                  <span className="font-heading text-lg font-normal text-foreground">
                    {photo.title}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] text-muted-foreground">
                  <span>{photo.series}</span>
                  <span aria-hidden="true">·</span>
                  <span>{photo.location}</span>
                  <span aria-hidden="true">·</span>
                  <span className="tabular-nums">{photo.year}</span>
                </div>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        aria-labelledby="lightbox-title"
        className="lightbox-dialog"
        {...({ closedby: "any" } as Record<string, string>)}
      >
        {selectedPhoto ? (
          <div className="flex max-h-[92dvh] flex-col">
            <div className="flex items-center justify-between gap-4 border-b border-border px-4 py-3 md:px-6">
              <div className="min-w-0">
                <p className="font-mono text-[11px] tracking-wider text-muted-foreground uppercase tabular-nums">
                  Plate {selectedPhoto.plate} · {selectedPhoto.categoryLabel}
                </p>
                <h1
                  id="lightbox-title"
                  className="truncate font-heading text-xl font-normal text-foreground"
                >
                  {selectedPhoto.title}
                </h1>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="min-h-9 px-3"
                  onClick={() => stepPhoto(-1)}
                  aria-label="Previous plate"
                >
                  Prev
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="min-h-9 px-3"
                  onClick={() => stepPhoto(1)}
                  aria-label="Next plate"
                >
                  Next
                </Button>
                <Button
                  type="button"
                  variant="default"
                  size="sm"
                  className="min-h-9 px-3"
                  onClick={closeLightbox}
                  aria-label="Close plate viewer"
                >
                  Close
                </Button>
              </div>
            </div>

            <div className="flex min-h-0 flex-1 items-center justify-center overflow-auto bg-muted/40 p-4 md:p-8">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                width={selectedPhoto.width}
                height={selectedPhoto.height}
                fetchPriority="low"
                unoptimized
                style={{ aspectRatio: getAspectRatioStyle(selectedPhoto) }}
                className="block max-h-[68dvh] w-auto max-w-full border border-border/60 object-contain"
              />
            </div>

            <div className="flex flex-col gap-1 border-t border-border px-4 py-3 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between md:px-6">
              <span>
                {selectedPhoto.series} — {selectedPhoto.location} (
                {selectedPhoto.year})
              </span>
              <span className="font-mono text-[11px]">
                {selectedPhoto.camera}
              </span>
            </div>
          </div>
        ) : null}
      </dialog>
    </section>
  )
}
