# Releasing Fuse UI

This document is for maintainers.

## Prerequisites

- npm two-factor authentication is enabled.
- The package has an npm Trusted Publisher for `EgorYolkin/fuse-ui` and `.github/workflows/release.yml`.
- If a protected GitHub Environment is added later, the same environment name is configured in both the workflow job and npm Trusted Publisher.
- `main` is green and the working tree is clean.

## Release checklist

1. Move relevant entries from `Unreleased` in `CHANGELOG.md` to a versioned section.
2. Choose the version according to Semantic Versioning.
3. Run:

   ```bash
   npm ci
   npm run check
   npm pack --dry-run
   ```

4. Update and commit the version:

   ```bash
   npm version patch # or minor / major
   git push --follow-tags
   ```

5. Create a GitHub Release for the matching `v<version>` tag.
6. Confirm the Publish package workflow succeeds.
7. Verify the package, provenance, README, and install command on npm.

The workflow checks out `refs/tags/v<package version>`, verifies the package in an isolated consumer, and publishes with npm Trusted Publishing (OIDC). No long-lived npm token is stored in GitHub. Publishing is idempotent for an already-published version.

## First release only

The initial package may need to be created interactively before Trusted Publishing can be configured:

```bash
npm login
npm publish --access public --otp=<one-time-code>
```
