# Fuse UI

[![CI](https://github.com/EgorYolkin/fuse-ui/actions/workflows/ci.yml/badge.svg)](https://github.com/EgorYolkin/fuse-ui/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/%40egoryolkin%2Ffuse-ui)](https://www.npmjs.com/package/@egoryolkin/fuse-ui)
[![license](https://img.shields.io/npm/l/%40egoryolkin%2Ffuse-ui)](LICENSE)

A reusable React UI kit with a technical, editorial visual language: sharp controls, fine borders, registration corners, layered panels, monospace metadata, and restrained motion.

## Features

- Typed React components published as ESM
- One opt-in stylesheet with light and dark semantic tokens
- Accessible primitives built on Base UI
- Reduced-motion support for non-essential animation
- Tree-shakeable JavaScript and explicit package exports
- npm Trusted Publishing with provenance

## Installation

```bash
npm install @egoryolkin/fuse-ui
```

Fuse UI supports React and React DOM 19.x. Import the shared stylesheet once in your application entry point:

```tsx
import "@egoryolkin/fuse-ui/styles.css"
```

Geist is an optional peer dependency. Install and import it if you want the intended typography:

```bash
npm install @fontsource-variable/geist
```

```tsx
import "@fontsource-variable/geist"
```

## Quick start

```tsx
import {
  BracketButton,
  CornerBox,
  Heading,
  Text,
} from "@egoryolkin/fuse-ui"
import "@egoryolkin/fuse-ui/styles.css"

export function Hero() {
  return (
    <CornerBox full className="border border-border bg-surface p-8">
      <Heading>Build useful things.</Heading>
      <Text className="mt-3">A reusable Fuse UI surface.</Text>
      <BracketButton className="mt-6" href="/docs" variant="primary">
        Open docs
      </BracketButton>
    </CornerBox>
  )
}
```

Add `className="dark"` (or `class="dark"` outside React) to an application root to enable the dark theme manually.

### Theme provider

Use `ThemeProvider` for persisted light, dark, and system modes. It updates the root `<html>` class, follows changes to `prefers-color-scheme`, and injects a small SSR-safe initialization script to avoid a theme flash:

```tsx
import { ThemeProvider, ThemeToggle } from "@egoryolkin/fuse-ui"

export function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="app-theme">
      <ThemeToggle showLabel />
      {/* application */}
    </ThemeProvider>
  )
}
```

`useTheme()` returns `{ theme, resolvedTheme, setTheme }` for custom controls. The included `ThemeToggle` cycles through light, dark, and system modes. Pass `nonce` to `ThemeProvider` when your Content Security Policy requires one.

## Components

| Area | Exports |
| --- | --- |
| Layout | `Container`, `Stack`, `Cluster`, `Grid`, `Navbar`, `Footer` |
| Typography | `Heading`, `Text`, `Kicker`, `Highlight`, `HighlightHeading`, `SectionHeading` |
| Actions and inputs | `Button`, `BracketButton`, `Select`, `LocaleSwitcher`, `ThemeToggle` |
| Surfaces and data | `CornerBox`, `PatternStrip`, `IconTile`, `IconList`, `StackedPanel`, `StaggeredList` |
| Motion | `Marquee`, `ScrollCrown` |
| Theme | `ThemeProvider`, `ThemeToggle`, `useTheme` |

The Select export also includes `SelectTrigger`, `SelectValue`, `SelectContent`, `SelectGroup`, `SelectLabel`, `SelectItem`, `SelectSeparator`, and scroll buttons. Stacked panels and staggered lists expose their corresponding content/item helpers.

All component props are exported through the generated TypeScript declarations and extend the relevant native or Base UI props where appropriate.

## Styling and theming

Fuse UI ships compiled Tailwind CSS, so consumers do not need to configure Tailwind or scan this package. The stylesheet defines semantic tokens such as `--background`, `--foreground`, `--surface`, `--border`, `--primary`, and `--muted-foreground` for both default and `.dark` themes.

Load the stylesheet before application overrides. Override semantic custom properties at your application root rather than targeting component internals:

```css
:root {
  --primary: oklch(0.55 0.18 250);
}
```

The exact token set is available in [`src/styles.css`](src/styles.css). CSS is marked as a package side effect so bundlers retain explicit stylesheet imports.

## Accessibility

Components use semantic elements and accessible Base UI primitives where applicable. Motion responds to `prefers-reduced-motion`. Consumers remain responsible for meaningful labels, focus order, color contrast after token overrides, and testing complete application flows with a keyboard and assistive technology.

Interactive components use React client APIs. In React Server Component frameworks, render them behind the framework's client boundary.

## Development

Development requires Node.js 22.12 or newer and the npm version declared in `package.json`.

```bash
npm ci
npm run check
npm run test:package
```

The production package is generated in `dist/`. See [CONTRIBUTING.md](CONTRIBUTING.md) before submitting a change.

## Releases and support

- Changes follow [Semantic Versioning](https://semver.org/) and are recorded in [CHANGELOG.md](CHANGELOG.md).
- Maintainer release steps are documented in [RELEASING.md](RELEASING.md).
- For usage help and bugs, see [SUPPORT.md](SUPPORT.md).
- Report vulnerabilities privately according to [SECURITY.md](SECURITY.md).
- Community participation is governed by the [Code of Conduct](CODE_OF_CONDUCT.md).

## License

[MIT](LICENSE) © Egor Yolkin
