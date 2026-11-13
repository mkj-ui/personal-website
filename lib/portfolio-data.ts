export type PhotoCategory = "portraits" | "architecture" | "places"

export interface PortfolioPhoto {
  id: string
  plate: string
  title: string
  series: string
  category: PhotoCategory
  categoryLabel: string
  location: string
  year: string
  camera: string
  /**
   * REPLACE: Swap `src` with your local asset path under `/photos/...`
   * (e.g. `/photos/plate-01.jpg`) or your hosted image URL.
   */
  src: string
  alt: string
  width: number
  height: number
  /** Controls the editorial rhythm on desktop grids */
  span?: "portrait" | "landscape" | "wide"
  /** Human-readable slot description for the replacement checklist */
  replacementSlot: string
}

export interface PricingTier {
  id: string
  commission: string
  scope: string
  deliverables: string
  turnaround: string
  rate: string
}

export const PHOTOGRAPHER = {
  name: "Linnea Holm",
  wordmark: "Linnea Holm",
  tagline: "Portrait, architecture, and quiet documentary photography.",
  basedIn: "Kyoto & Copenhagen",
  availability: "Available for commissions worldwide",
  email: "hello@linneaholm.photo", // REPLACE: Your real contact email
  responseTime: "Replies within 1–2 business days",
  heroHeadline:
    "Quiet light, unhurried portraits, and studies of lived spaces.",
  introParagraphs: [
    "I am an independent photographer working across Kyoto and Copenhagen. Over the past nine years, my practice has centered on natural-light portraiture, architectural monographs, and slow documentary essays for publications, design studios, and cultural institutions.",
    "Whether photographing a craftsperson in their workshop or documenting timber and concrete at dawn, I work with minimal equipment—primarily medium-format film and natural window light—to let the subject and atmosphere set the pace.",
  ],
  heroImage: {
    id: "hero-lead",
    plate: "00",
    title: "Morning study, Studio",
    caption: "Copenhagen · Hasselblad 500C/M, Kodak Portra 400",
    // REPLACE: Hero lead photograph (recommended 4:5 vertical, >= 1200x1500px)
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&h=1500&q=80",
    alt: "Soft natural light across a calm portrait study",
    width: 1200,
    height: 1500,
    replacementSlot: "Hero lead photograph (Introduction, right column)",
  },
} as const

export const PORTFOLIO_CATEGORIES: ReadonlyArray<{
  value: "all" | PhotoCategory
  label: string
}> = [
  { value: "all", label: "All Plates" },
  { value: "portraits", label: "Portraits" },
  { value: "architecture", label: "Architecture" },
  { value: "places", label: "Places" },
]

export const PORTFOLIO_PHOTOS: readonly PortfolioPhoto[] = [
  {
    id: "plate-01",
    plate: "01",
    title: "Study in Window Light",
    series: "Makers",
    category: "portraits",
    categoryLabel: "Portraits",
    location: "Copenhagen, Denmark",
    year: "2025",
    camera: "Pentax 67 · 105mm f/2.4 · Tri-X 400",
    // REPLACE: Portrait plate 01 (recommended 4:5 vertical, >= 1000x1250px)
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&h=1250&q=80",
    alt: "Close natural-light portrait with calm neutral framing",
    width: 1000,
    height: 1250,
    span: "portrait",
    replacementSlot: "Selected Work — Plate 01 (Portraits, 4:5 vertical)",
  },
  {
    id: "plate-02",
    plate: "02",
    title: "Courtyard Shadow IV",
    series: "Concrete & Cedar",
    category: "architecture",
    categoryLabel: "Architecture",
    location: "Naoshima, Japan",
    year: "2025",
    camera: "Arca-Swiss 4x5 · 90mm · Portra 160",
    // REPLACE: Architecture plate 02 (recommended 3:2 horizontal, >= 1440x960px)
    src: "https://images.unsplash.com/photo-1759300631898-c07422768bb5?auto=format&fit=crop&w=1440&h=960&q=80",
    alt: "Minimalist architectural surface shaped by afternoon sunlight",
    width: 1440,
    height: 960,
    span: "landscape",
    replacementSlot: "Selected Work — Plate 02 (Architecture, 3:2 horizontal)",
  },
  {
    id: "plate-03",
    plate: "03",
    title: "Tidewater Rocks at Dawn",
    series: "North Sea Crossing",
    category: "places",
    categoryLabel: "Places",
    location: "Hirtshals, Denmark",
    year: "2024",
    camera: "Mamiya 7II · 80mm · Portra 400",
    // REPLACE: Places plate 03 (recommended 16:10 wide, >= 1600x1000px)
    src: "https://images.unsplash.com/photo-1777255293398-e105f8c4d5fa?auto=format&fit=crop&w=1600&h=1000&q=80",
    alt: "Misty ocean rocks resting in calm smoothed water",
    width: 1600,
    height: 1000,
    span: "wide",
    replacementSlot: "Selected Work — Plate 03 (Places, 16:10 wide)",
  },
  {
    id: "plate-04",
    plate: "04",
    title: "Astrid, Winter Afternoon",
    series: "Studio Notes",
    category: "portraits",
    categoryLabel: "Portraits",
    location: "Frederiksberg, Denmark",
    year: "2025",
    camera: "Hasselblad 500C/M · 80mm · Ilford HP5",
    // REPLACE: Portrait plate 04 (recommended 4:5 vertical, >= 1000x1250px)
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1000&h=1250&q=80",
    alt: "Quiet editorial portrait in soft diffused daylight",
    width: 1000,
    height: 1250,
    span: "portrait",
    replacementSlot: "Selected Work — Plate 04 (Portraits, 4:5 vertical)",
  },
  {
    id: "plate-05",
    plate: "05",
    title: "Concrete Facade Study",
    series: "Concrete & Cedar",
    category: "architecture",
    categoryLabel: "Architecture",
    location: "Takayama, Japan",
    year: "2024",
    camera: "Leica SL2-S · 35mm APO · Digital",
    // REPLACE: Architecture plate 05 (recommended 4:5 vertical, >= 1000x1250px)
    src: "https://images.unsplash.com/photo-1767854507654-5852c55b8d2f?auto=format&fit=crop&w=1000&h=1250&q=80",
    alt: "Minimalist architectural geometry in even overcast light",
    width: 1000,
    height: 1250,
    span: "portrait",
    replacementSlot: "Selected Work — Plate 05 (Architecture, 4:5 vertical)",
  },
  {
    id: "plate-06",
    plate: "06",
    title: "Coastal Outcrops in Fog",
    series: "Littoral",
    category: "places",
    categoryLabel: "Places",
    location: "Skagen, Denmark",
    year: "2024",
    camera: "Mamiya 7II · 65mm · Portra 400",
    // REPLACE: Places plate 06 (recommended 3:2 horizontal, >= 1440x960px)
    src: "https://images.unsplash.com/photo-1761693011559-81861e97688e?auto=format&fit=crop&w=1440&h=960&q=80",
    alt: "Misty coastal hills and quiet rock formations along the water",
    width: 1440,
    height: 960,
    span: "landscape",
    replacementSlot: "Selected Work — Plate 06 (Places, 3:2 horizontal)",
  },
  {
    id: "plate-07",
    plate: "07",
    title: "Low Tide, Pacific Mist",
    series: "Littoral",
    category: "places",
    categoryLabel: "Places",
    location: "Teshima, Japan",
    year: "2024",
    camera: "Hasselblad 500C/M · 150mm · Ektar 100",
    // REPLACE: Places plate 07 (recommended 3:2 horizontal, >= 1440x960px)
    src: "https://images.unsplash.com/photo-1769317996569-0a23b3f426f7?auto=format&fit=crop&w=1440&h=960&q=80",
    alt: "Monochromatic rocky coastline veiled in low coastal fog",
    width: 1440,
    height: 960,
    span: "landscape",
    replacementSlot: "Selected Work — Plate 07 (Places, 3:2 horizontal)",
  },
  {
    id: "plate-08",
    plate: "08",
    title: "Sora, Studio Session",
    series: "Makers",
    category: "portraits",
    categoryLabel: "Portraits",
    location: "Kyoto, Japan",
    year: "2025",
    camera: "Leica M6 · 50mm Summilux · Double-X",
    // REPLACE: Portrait plate 08 (recommended 4:5 vertical, >= 1000x1250px)
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1000&h=1250&q=80",
    alt: "Calm portrait captured during a quiet studio sitting",
    width: 1000,
    height: 1250,
    span: "portrait",
    replacementSlot: "Selected Work — Plate 08 (Portraits, 4:5 vertical)",
  },
  {
    id: "plate-09",
    plate: "09",
    title: "Overcast Shore, Early Light",
    series: "Littoral",
    category: "places",
    categoryLabel: "Places",
    location: "North Jutland, Denmark",
    year: "2023",
    camera: "Pentax 67 · 55mm · Portra 160",
    // REPLACE: Places plate 09 (recommended 16:10 wide, >= 1600x1000px)
    src: "https://images.unsplash.com/photo-1760872034124-b58857d1ea09?auto=format&fit=crop&w=1600&h=1000&q=80",
    alt: "Serene misty shoreline with calm waves and sea stack",
    width: 1600,
    height: 1000,
    span: "wide",
    replacementSlot: "Selected Work — Plate 09 (Places, 16:10 wide)",
  },
]

export const PRICING_TIERS: readonly PricingTier[] = [
  {
    id: "portrait-sitting",
    commission: "Portrait Sitting",
    scope: "90 minutes · Natural light · Single location or studio",
    deliverables: "25 color & monochrome files + private contact sheet",
    turnaround: "7 business days",
    rate: "$650",
  },
  {
    id: "editorial-story",
    commission: "Editorial & Feature",
    scope: "Half day (up to 4 hours) · On location",
    deliverables: "55 sequenced frames · Print & web master files",
    turnaround: "10 business days",
    rate: "$1,450",
  },
  {
    id: "architecture-space",
    commission: "Architecture & Space",
    scope: "Full day · Timed to sun path & ambient dusk",
    deliverables: "40 perspective-corrected plates · Archival TIFFs",
    turnaround: "14 business days",
    rate: "$2,200",
  },
  {
    id: "medium-format-film",
    commission: "120 Film Add-On",
    scope: "3 rolls Kodak Portra / Ilford HP5 · Lab processing",
    deliverables: "High-resolution drum/Frontier scans + negatives",
    turnaround: "+3 business days",
    rate: "+$280",
  },
]

export const PRICING_NOTES: readonly string[] = [
  "All commissions include personal and editorial usage rights; commercial or multi-year campaign licensing is quoted based on distribution.",
  "Travel outside Kyoto or Copenhagen is billed at cost with advance approval.",
  "Archival pigment prints on cotton rag paper (8×10 in to 20×24 in) are available upon request.",
]
