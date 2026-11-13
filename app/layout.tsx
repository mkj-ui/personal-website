import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono, Newsreader } from "next/font/google"

import { ThemeProvider } from "@/components/theme-provider"
import { PHOTOGRAPHER } from "@/lib/portfolio-data"
import { cn } from "@/lib/utils"

import "./globals.css"

const fontHeading = Newsreader({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-heading",
})

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: `${PHOTOGRAPHER.name} — Photography Portfolio`,
  description:
    "Portrait, architecture, and quiet documentary photography by Linnea Holm across Kyoto and Copenhagen. Selected plates, commission rates, and studio contact.",
}

export const viewport: Viewport = {
  colorScheme: "light dark",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontSans.variable,
        fontHeading.variable,
        fontMono.variable
      )}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
