# Contributing

## Local workflow

Install dependencies:

```bash
npm ci
npm run install:examples
```

Run the full release verification flow:

```bash
npm run release:verify
```

## Community guidelines

- follow [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) in issues, pull requests, and reviews
- report security vulnerabilities privately using [SECURITY.md](./SECURITY.md) instead of opening a public issue
- keep pull requests focused; separate icon catalog changes from adapter/runtime changes when practical

## Package principles

- keep the core framework-agnostic
- keep all framework adapters thin
- prefer metadata icons over component icons
- use object-map registries for `O(1)` lookup
- avoid new runtime dependencies
- keep all public naming canonical and predictable

## Adding or updating icons

- prefer metadata entries when the icon can be expressed with `paths`, `viewBox`, and `strokeBased`
- use lowercase kebab-case registry names only
- numeric variants must use hyphen-separated suffixes, such as `loader-2`
- keep icon geometry consistent with neighboring icons in the same group
- only use component icons when the SVG requires structure the metadata model cannot represent cleanly

## Before opening a change

- run `npm run typecheck`
- run `npm test`
- run `npm run validate:icons`
- build the examples you touched
- confirm `npm pack --dry-run` still looks correct when changing publish-facing files
