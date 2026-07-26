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

The first package version must be published locally with npm 2FA:

```bash
npm login
npm publish --access public --otp=<one-time-code>
```

After the package exists, configure an npm Trusted Publisher with:

```text
Provider: GitHub Actions
Owner: EgorYolkin
Repository: fuse-ui
Workflow: release.yml
Environment: leave empty
```

No npm token is stored in GitHub. Subsequent versions are published through OIDC when a GitHub Release is created:

```bash
npm version patch
git push --follow-tags
```

Then create a release for the new tag on GitHub. The workflow checks that the version is not already present and publishes it with npm provenance.

Consumers can update centrally with:

```bash
npm install @egoryolkin/fuse-ui@latest
```

## License

MIT © Egor Yolkin
