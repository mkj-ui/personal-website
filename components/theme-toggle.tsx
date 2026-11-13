"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

const emptySubscribe = () => () => {}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const mounted = React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  )

  const isDark = mounted && resolvedTheme === "dark"

  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      className="min-h-8 font-mono text-xs tracking-wide text-muted-foreground hover:text-foreground"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={
        mounted
          ? `Switch to ${isDark ? "light" : "dark"} appearance`
          : "Toggle appearance"
      }
    >
      <span
        aria-hidden="true"
        className="inline-block size-2 rounded-full border border-current bg-current/25"
      />
      <span>{mounted ? (isDark ? "Light" : "Dark") : "Theme"}</span>
    </Button>
  )
}
