# Contributing to Fuse UI

> **Fuse UI documentation:** **[fuse-ui.egoryolkin.ru](https://fuse-ui.egoryolkin.ru)**

Thank you for considering a contribution. By participating, you agree to follow the [Code of Conduct](CODE_OF_CONDUCT.md).

## Before you start

- Search existing issues and pull requests.
- Use the bug or feature-request issue form for non-trivial changes.
- Do not open a public issue for a vulnerability; follow [SECURITY.md](SECURITY.md).
- Keep each pull request focused on one problem.

## Local development

Fuse UI requires Node.js 22.12 or newer for development and uses the npm version declared by `packageManager` in `package.json`.

```bash
git clone https://github.com/EgorYolkin/fuse-ui.git
cd fuse-ui
npm ci
npm run check
```

Useful commands:

- `npm run build` — build JavaScript, CSS, and declarations into `dist/`
- `npm run typecheck` — check TypeScript
- `npm run lint` — run ESLint
- `npm test` — build and run the test suite
- `npm run check` — run every required check
- `npm pack --dry-run` — inspect the publishable package

## Component expectations

Contributions should:

- preserve semantic HTML and keyboard behavior;
- work with light and dark themes;
- respect `prefers-reduced-motion`;
- use existing semantic color tokens and the 4px spacing grid;
- avoid product-specific copy or business logic;
- export public APIs through `src/components/ui/index.ts` and `src/index.ts`;
- include tests for behavior or public API changes;
- update the README and changelog when consumers are affected.

See [`src/components/ui/README.md`](src/components/ui/README.md) for the component organization and design constraints.

## Pull requests

1. Create a branch from `main`.
2. Make the smallest coherent change.
3. Use clear commit messages; Conventional Commits such as `feat:`, `fix:`, and `docs:` are encouraged.
4. Run `npm run check` and `npm pack --dry-run`.
5. Complete the pull request template, including accessibility and visual checks when relevant.

Maintainers may ask for scope changes, tests, or documentation before merging. A contribution may be declined if it does not fit the library's direction or maintenance budget.

## Releases

Releases are performed by maintainers. See [RELEASING.md](RELEASING.md).
