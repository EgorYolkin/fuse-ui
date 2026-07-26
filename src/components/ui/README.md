# UI kit

This directory contains reusable design primitives. It must not contain pages or product-specific sections.

## Layout

- `layout.tsx` — `Container`, `Stack`, `Cluster`, `Grid`
- `navbar.tsx` — navigation shell with brand, center, and action slots
- `scroll-crown.tsx` — horizontal or vertical scroll-progress indicator
- `marquee.tsx` — seamless, infinitely looping content ticker
- `locale-switcher.tsx` — compact accessible custom locale selector
- `footer.tsx` — reusable footer shell with brand, navigation, and bottom slots

## Typography

- `typography.tsx` — `Heading`, `Text`, `Kicker`, `Highlight`, `HighlightHeading`
- `section-heading.tsx` — generic kicker/title/description composition

## Surfaces and decoration

- `corner-box.tsx` — bordered surface with corner marks
- `pattern-strip.tsx` — hatched content strip
- `stacked-panel.tsx` — layered panel and link surface with default and compact sizes
- `staggered-list.tsx` — vertical or horizontal list with optional cascading offset
- `icon-tile.tsx` — framed icon container

## Content and actions

- `bracket-button.tsx` — project-style link button
- `icon-list.tsx` — generic icon-led text list
- `icons.tsx` — custom brand icons
- `button.tsx` — base shadcn button

Use exports from `@/components/ui`. Pages compose these primitives themselves; page sections and content stay outside the UI kit.
