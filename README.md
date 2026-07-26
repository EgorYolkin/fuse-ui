# Fuse UI

A reusable React UI kit with a technical, editorial visual language: sharp controls, fine borders, registration corners, layered panels, monospace metadata, and restrained motion.

## Installation

```bash
npm install @egoryolkin/fuse-ui
```

Import the shared styles once in the application entry point:

```tsx
import "@egoryolkin/fuse-ui/styles.css"
```

Then import components where needed:

```tsx
import {
  BracketButton,
  CornerBox,
  Heading,
  Marquee,
  Text,
} from "@egoryolkin/fuse-ui"

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

## Components

### Layout

- `Container`
- `Stack`
- `Cluster`
- `Grid`
- `Navbar`
- `Footer`

### Typography

- `Heading`
- `Text`
- `Kicker`
- `Highlight`
- `HighlightHeading`
- `SectionHeading`

### Actions and inputs

- `Button`
- `BracketButton`
- `Select`
- `LocaleSwitcher`

### Surfaces and data display

- `CornerBox`
- `PatternStrip`
- `IconTile`
- `IconList`
- `StackedPanel`
- `StaggeredList`

### Motion

- `Marquee`
- `ScrollCrown`

## Development

Requires Node.js 22.12 or newer.

```bash
npm install
npm run check
npm run build
```

The production package is generated in `dist/`.

## Publishing

1. Authenticate with npm:

   ```bash
   npm login
   ```

2. Choose a version:

   ```bash
   npm version patch
   ```

3. Push the commit and tag, then create a GitHub Release. The release workflow publishes the package automatically when the `NPM_TOKEN` repository secret is configured.

Consumers can update centrally with:

```bash
npm install @egoryolkin/fuse-ui@latest
```

## License

MIT © Egor Yolkin
