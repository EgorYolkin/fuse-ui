# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- Pointed package and support documentation to [fuse-ui.egoryolkin.ru](https://fuse-ui.egoryolkin.ru).

## [0.3.0] - 2026-07-26

### Added

- Fuse-styled `Badge` and accessible `Tabs` components.
- Inline `Code` and syntax-highlighted `CodeBlock` components with optional line numbers.

### Changed

- Restyled button variants and sizes to match the kit's sharp 4px-grid visual language.

## [0.2.0] - 2026-07-26

### Added

- `ThemeProvider`, `useTheme`, and `ThemeToggle` for persisted light, dark, and system theme modes.

## [0.1.1] - 2026-07-26

### Added

- Complete light and dark semantic token sets.
- `StackedPanelContent`, configurable section-heading levels, and semantic staggered-list markup.
- Regression tests for public component behavior, spacing, theming, and package consumption.
- Contributor documentation, community standards, security policy, and GitHub issue and pull request templates.
- Automated dependency updates, dependency review, and CodeQL analysis.

### Fixed

- Default button hover feedback.
- Marquee gaps for content shorter than its container and duplicate React keys.
- Staggered-list overflow and uneven edge spacing.
- Stacked-panel decorative overflow and inconsistent visual gaps.
- Missing default typography for heading levels three through six.
- Navbar action semantics and interactivity of centered content.
- Reduced-motion behavior across animated components.

### Changed

- Normalized component dimensions and spacing to the 4px grid.
- Made Geist an optional peer and reduced the core stylesheet size substantially.
- Improved npm package metadata, declaration layout, release verification, and publish provenance.
- Restored native page scrollbars instead of globally hiding them.

[Unreleased]: https://github.com/EgorYolkin/fuse-ui/compare/v0.3.0...HEAD
[0.3.0]: https://github.com/EgorYolkin/fuse-ui/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/EgorYolkin/fuse-ui/compare/v0.1.1...v0.2.0
[0.1.1]: https://github.com/EgorYolkin/fuse-ui/compare/f7db47f...v0.1.1
