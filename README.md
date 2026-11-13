# Photography Portfolio

Editorial photography portfolio built with Next.js, Tailwind CSS, and shadcn (`base-lyra` / `stone`).

## Local Development

```bash
pnpm dev
```

## Replacing Placeholder Content & Images

All photographer details, portfolio plates, pricing tiers, and placeholder image URLs live in a single file:

- `lib/portfolio-data.ts`

To replace the placeholder photographs with your own files:

1. Place your exported JPEG/WebP images in `public/photos/` (for example `public/photos/plate-01.jpg`).
2. Update each `src`, `width`, `height`, `alt`, and caption field in `lib/portfolio-data.ts` (`PHOTOGRAPHER.heroImage` and `PORTFOLIO_PHOTOS`).
3. Update `PHOTOGRAPHER.name`, `PHOTOGRAPHER.email`, `PHOTOGRAPHER.basedIn`, `PHOTOGRAPHER.introParagraphs`, and `PRICING_TIERS` in `lib/portfolio-data.ts`, plus the page description in `app/layout.tsx`.

### Placeholder Image Slots

| Slot | Data Key (`lib/portfolio-data.ts`) | Current Placeholder | Recommended Ratio & Min Size |
| --- | --- | --- | --- |
| Hero lead photograph | `PHOTOGRAPHER.heroImage.src` | `https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&h=1500&q=80` | `4:5` vertical (`1200×1500`) |
| Plate 01 (Portraits) | `PORTFOLIO_PHOTOS[0].src` | `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&h=1250&q=80` | `4:5` vertical (`1000×1250`) |
| Plate 02 (Architecture) | `PORTFOLIO_PHOTOS[1].src` | `https://images.unsplash.com/photo-1759300631898-c07422768bb5?auto=format&fit=crop&w=1440&h=960&q=80` | `3:2` horizontal (`1440×960`) |
| Plate 03 (Places — wide) | `PORTFOLIO_PHOTOS[2].src` | `https://images.unsplash.com/photo-1777255293398-e105f8c4d5fa?auto=format&fit=crop&w=1600&h=1000&q=80` | `16:10` wide (`1600×1000`) |
| Plate 04 (Portraits) | `PORTFOLIO_PHOTOS[3].src` | `https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1000&h=1250&q=80` | `4:5` vertical (`1000×1250`) |
| Plate 05 (Architecture) | `PORTFOLIO_PHOTOS[4].src` | `https://images.unsplash.com/photo-1767854507654-5852c55b8d2f?auto=format&fit=crop&w=1000&h=1250&q=80` | `4:5` vertical (`1000×1250`) |
| Plate 06 (Places) | `PORTFOLIO_PHOTOS[5].src` | `https://images.unsplash.com/photo-1761693011559-81861e97688e?auto=format&fit=crop&w=1440&h=960&q=80` | `3:2` horizontal (`1440×960`) |
| Plate 07 (Places) | `PORTFOLIO_PHOTOS[6].src` | `https://images.unsplash.com/photo-1769317996569-0a23b3f426f7?auto=format&fit=crop&w=1440&h=960&q=80` | `3:2` horizontal (`1440×960`) |
| Plate 08 (Portraits) | `PORTFOLIO_PHOTOS[7].src` | `https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1000&h=1250&q=80` | `4:5` vertical (`1000×1250`) |
| Plate 09 (Places — wide) | `PORTFOLIO_PHOTOS[8].src` | `https://images.unsplash.com/photo-1760872034124-b58857d1ea09?auto=format&fit=crop&w=1600&h=1000&q=80` | `16:10` wide (`1600×1000`) |
