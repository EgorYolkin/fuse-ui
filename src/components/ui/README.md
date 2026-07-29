# UI kit

> **Fuse UI documentation:** **[fuse-ui.egoryolkin.ru](https://fuse-ui.egoryolkin.ru)**

This directory contains reusable design primitives. It must not contain pages or product-specific sections.

## Layout

- `layout.tsx` — `Container`, `Stack`, `Cluster`, `Grid`
- `navbar.tsx` — navigation shell with brand, center, and action slots
- `scroll-crown.tsx` — horizontal or vertical scroll-progress indicator
- `marquee.tsx` — seamless, infinitely looping content ticker
- `locale-switcher.tsx` — compact accessible generic `Switcher` (`LocaleSwitcher` remains a deprecated alias)
- `footer.tsx` — reusable footer shell with brand, navigation, and bottom slots
- `theme-provider.tsx` — persisted light, dark, and system theme state
- `theme-toggle.tsx` — accessible theme-mode control

## Typography

- `typography.tsx` — `Heading`, `Text`, `Kicker`, `Highlight`, `HighlightHeading`
- `section-heading.tsx` — generic kicker/title/description composition
- `code-block.tsx` — inline code and syntax-highlighted code blocks

## Surfaces and decoration

- `alert.tsx` — semantic status blocks with optional icons and actions
- `avatar.tsx` — user images, fallbacks, sizes, shapes, and groups
- `corner-box.tsx` — bordered surface with corner marks
- `pattern-strip.tsx` — hatched content strip
- `stacked-panel.tsx` — layered panel with semantic content and link surfaces in default and compact sizes
- `staggered-list.tsx` — simple vertical list of bordered blocks
- `icon-tile.tsx` — framed icon container
- `badge.tsx` — compact status and metadata labels

## Content and actions

- `accordion.tsx` — accessible collapsible content panels
- `carousel.tsx` — Embla-powered horizontal or vertical slide navigation
- `checkbox.tsx` — checked, unchecked, indeterminate, and disabled states
- `switch.tsx` — accessible binary setting control
- `combobox.tsx` — filterable selection input and popup composition
- `bracket-button.tsx` — project-style link button
- `icon-list.tsx` — generic icon-led text list
- `icons.tsx` — custom brand icons
- `button.tsx` — Fuse-styled Base UI button
- `tabs.tsx` — accessible default and line-style tab compositions

Use exports from `@/components/ui`. Pages compose these primitives themselves; page sections and content stay outside the UI kit.

## Consistency

- Use the 4px spacing grid: 8, 12, 16, 20, 24, and 32px.
- Use semantic color tokens so light and dark themes stay aligned.
- Respect `prefers-reduced-motion` for every non-essential transition.
