# @geniusaisolutions/icons

A lightweight, open-source icon system with **1,103 icons**, a framework-agnostic core, and first-class adapters for React, Vue, Solid, Svelte, and Angular.

**MIT Licensed** &middot; Tree-shakeable &middot; Zero styling runtime &middot; O(1) lookups

---

## Why this library?

Most icon libraries force you to import a massive bundle, lock you into one framework, or add a styling runtime you don't need. This library is different:

- **Tiny core** &mdash; The adapter + core weighs **~2.5 KB gzipped**. You only pay for the icons you use.
- **Framework-agnostic** &mdash; One icon set, six frameworks. Switch between React, Vue, Solid, Svelte, Angular, or vanilla JS without changing your icon data.
- **Constant-time lookups** &mdash; Icons are stored in an object map. Every lookup is O(1), not a linear scan.
- **No runtime styling engine** &mdash; Icons use `currentColor` and accept `size`, `strokeWidth`, and `className`. No CSS-in-JS, no Tailwind dependency.
- **Tree-shakeable** &mdash; ESM-only with `sideEffects: false`. Import one icon or all 1,103. Bundlers remove what you don't use.

---

## Bundle size

Every byte is accounted for. Here's what you ship:

| Entry point | Raw | Gzipped | What's inside |
|---|---|---|---|
| `core` | 3.7 KB | **1.2 KB** | `defineIcons`, `renderSvgString`, `getIconSvgString` |
| `react` | 4.4 KB | **1.3 KB** | `Icon`, `IconProvider`, `useIconRegistry` |
| `vue` | 4.9 KB | **1.5 KB** | `Icon`, `IconProvider`, `useIconRegistry` |
| `solid` | 4.6 KB | **1.3 KB** | `Icon`, `IconProvider` |
| `svelte` | 4.4 KB | **1.5 KB** | `Icon`, `IconProvider` |
| `angular` | 7.7 KB | **1.9 KB** | `IconComponent`, `provideIcons` |
| `icons` (all 1,103) | 251 KB | **53 KB** | Every icon as named exports |
| `registries` (all 24) | 253 KB | **53 KB** | Grouped category registries |

**Typical app payload:** If you import one category registry (~20-60 icons) plus a framework adapter, you ship roughly **3-8 KB gzipped**. Import only the icons you need with direct imports for even less.

---

## Installation

```bash
npm install @geniusaisolutions/icons
```

All framework peer dependencies are optional. Install only what you use:

```bash
# Pick your framework
npm install react            # React 18 or 19
npm install vue              # Vue 3.5+
npm install solid-js         # Solid 1.9+
npm install svelte           # Svelte 5+
npm install @angular/core @angular/common  # Angular 19+
```

---

## Quick start

### React

```tsx
import { defineIcons, Icon, IconProvider } from '@geniusaisolutions/icons/react';
import { actionIcons, statusIcons } from '@geniusaisolutions/icons/registries';

// Register once at the app root
const icons = defineIcons({ ...actionIcons, ...statusIcons });

function App() {
  return (
    <IconProvider icons={icons}>
      <Icon name="check-circle" size={24} aria-label="Success" />
      <Icon name="plus" size={20} />
      <Icon name="trash-2" size={20} className="text-red" />
    </IconProvider>
  );
}
```

The `<Icon>` component is memoized with `React.memo`. It reads the registry from context via `IconProvider`, so you register icons once and use them by name anywhere in the tree.

**Props:** `name`, `size` (default 20), `strokeWidth` (default 2), `className`, `title`, `aria-label`, and any valid SVG attribute.

### Vue

```vue
<script setup>
import { defineIcons, Icon, IconProvider } from '@geniusaisolutions/icons/vue';
import { navigationIcons } from '@geniusaisolutions/icons/registries';

const icons = defineIcons({ ...navigationIcons });
</script>

<template>
  <IconProvider :icons="icons">
    <Icon name="arrow-left" :size="24" aria-label="Go back" />
    <Icon name="menu" :size="20" />
  </IconProvider>
</template>
```

Uses Vue's `provide`/`inject` under the hood. The `Icon` component is a render function (`defineComponent` + `h()`), no template compilation overhead.

### Solid

```tsx
import { defineIcons, Icon, IconProvider } from '@geniusaisolutions/icons/solid';
import { mediaIcons } from '@geniusaisolutions/icons/registries';

const icons = defineIcons({ ...mediaIcons });

function App() {
  return (
    <IconProvider icons={icons}>
      <Icon name="play" size={24} />
      <Icon name="volume-2" size={20} aria-label="Volume" />
    </IconProvider>
  );
}
```

Uses Solid's context API. Fine-grained reactivity means icon re-renders are minimal.

### Svelte

```svelte
<script>
  import { defineIcons, Icon, IconProvider } from '@geniusaisolutions/icons/svelte';
  import { weatherIcons } from '@geniusaisolutions/icons/registries';

  const icons = defineIcons({ ...weatherIcons });
</script>

<IconProvider {icons}>
  <Icon name="sun" size={24} />
  <Icon name="cloud-rain" size={20} aria-label="Rain" />
</IconProvider>
```

Native Svelte 5 components. Uses Svelte's context API (`setContext`/`getContext`).

### Angular

```typescript
// app.config.ts
import { defineIcons, provideIcons } from '@geniusaisolutions/icons/angular';
import { systemIcons } from '@geniusaisolutions/icons/registries';

const icons = defineIcons({ ...systemIcons });

export const appConfig = {
  providers: [provideIcons(icons)],
};
```

```html
<!-- any component template -->
<ga-icon name="settings" [size]="24" aria-label="Settings"></ga-icon>
<ga-icon name="lock" [size]="20"></ga-icon>
```

Standalone component (`IconComponent`) with Angular's dependency injection via `InjectionToken`. Import `IconComponent` in your component's `imports` array. FESM2022 format for optimal Angular CLI tree-shaking.

### Vanilla JS / SSR

No framework? Use the core directly:

```typescript
import { defineIcons, getIconSvgString, renderSvgString } from '@geniusaisolutions/icons';
import { plusIcon } from '@geniusaisolutions/icons/icons';
import { statusIcons } from '@geniusaisolutions/icons/registries';

const icons = defineIcons({ ...statusIcons });

// From registry by name
const svg = getIconSvgString(icons, 'check-circle', {
  size: 24,
  'aria-label': 'Done',
});

// From direct import
const plus = renderSvgString(plusIcon, { size: 20 });

// Insert into DOM
document.getElementById('icon-slot')!.innerHTML = svg!;
```

Returns a plain SVG string. Works in Node.js for server-side rendering, edge functions, email templates, or any environment without a DOM.

---

## Performance

This library is designed for O(1) lookups and minimal runtime work.

| Operation | Time complexity | Space complexity |
|---|---|---|
| Registry creation (`defineIcons`) | O(n) once | O(n) |
| Adding one icon (spread) | O(1) | O(1) |
| Icon lookup by name | **O(1)** | O(1) |
| Rendering one icon | O(p) | O(p) |
| Prop normalization | O(k) | O(k) |

Where `n` = number of icons registered, `p` = number of SVG paths in one icon (typically 1-5), `k` = number of props being merged (typically 3-5).

**What this means in practice:**

- **No linear scans.** Icons are stored in a plain object. `icons["check-circle"]` is a single property access.
- **No parsing at runtime.** Icon path data is stored as pre-built strings. The renderer concatenates them into an SVG; there's no SVG parser, no DOM diffing for icon content, no style calculation.
- **No global side effects.** Registries are plain objects. Creating one doesn't mutate global state or trigger module-level work.
- **Lazy by default.** The root entry point (`@geniusaisolutions/icons`) exports only the core helpers. You don't pay for icons or adapters you don't import.

---

## Icon categories

1,103 icons organized into 24 registries:

| Category | Import | Icons |
|---|---|---|
| Navigation | `navigationIcons` | Arrows, menus, pagination |
| Status | `statusIcons` | Alerts, checks, spinners |
| Actions | `actionIcons` | Edit, copy, delete, save |
| System | `systemIcons` | Settings, devices, network |
| Education | `educationIcons` | Books, learning, graduation |
| Content | `contentIcons` | Text, formatting, rich text |
| Communication | `communicationIcons` | Chat, email, phone |
| Media | `mediaIcons` | Play, pause, volume, music |
| Finance | `financeIcons` | Money, charts, trading |
| Engagement | `engagementIcons` | Awards, likes, trophies |
| Brands | `brandIcons` | Apple, Google, Discord, etc. |
| Alphanumeric | `alphanumericIcons` | Letters, numbers, symbols |
| Commerce | `commerceIcons` | Shopping, payments |
| Files | `fileIcons` | Documents, file types |
| People | `peopleIcons` | Users, contacts, profiles |
| Shapes | `shapeIcons` | Geometric shapes (stroke + fill) |
| Layout | `layoutIcons` | Grid, columns, positioning |
| Design Tools | `designToolIcons` | Pen, layers, palette |
| Transport | `transportIcons` | Vehicles, travel |
| Places | `placeIcons` | Maps, locations |
| Accessibility | `accessibilityIcons` | A11y-specific icons |
| Developer | `developerIcons` | Code, git, terminal |
| Time | `timeIcons` | Clock, calendar, timers |
| Weather | `weatherIcons` | Sun, rain, clouds, wind |

Import all icons at once with `allIcons` from `@geniusaisolutions/icons/registries`, or pick only the categories you need.

---

## Direct icon imports

For the smallest possible bundle, import individual icons by name:

```typescript
import { plusIcon, filterIcon, trash2Icon } from '@geniusaisolutions/icons/icons';
```

Each icon is a plain object (`IconMetadata`) containing only its SVG path data, viewBox, and render mode:

```typescript
interface IconMetadata {
  paths: string | readonly string[];  // SVG path d attributes
  viewBox: string;                    // Always "0 0 24 24"
  strokeBased: boolean;               // true = stroke, false = fill
}
```

Bundlers tree-shake everything else away.

---

## Icon naming

All icon names follow a single canonical convention:

- **Lowercase kebab-case**: `check-circle`, `arrow-left`, `upload-cloud`
- **No aliases**: One name per icon, always
- **Numeric variants**: `loader-2`, `heading-1`, `volume-2`, `share-2`

---

## Accessibility

Icons handle accessibility automatically:

- **Decorative icons** (no `aria-label` or `title`): Rendered with `aria-hidden="true"`
- **Meaningful icons** (with `aria-label` or `title`): Rendered with `role="img"` and the appropriate label
- All values are properly escaped for XSS safety

```tsx
{/* Decorative - hidden from screen readers */}
<Icon name="sparkles" size={16} />

{/* Meaningful - announced by screen readers */}
<Icon name="check-circle" size={20} aria-label="Task complete" />

{/* With tooltip-style title */}
<Icon name="info" size={20} title="More information" />
```

---

## Custom icons

Add your own icons alongside the built-in set:

```typescript
import { defineIcons } from '@geniusaisolutions/icons';
import { actionIcons } from '@geniusaisolutions/icons/registries';

const myCustomIcon = {
  paths: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
  viewBox: '0 0 24 24',
  strokeBased: true,
};

const icons = defineIcons({
  ...actionIcons,
  'my-custom-icon': myCustomIcon,
});
```

Custom icons work identically with all framework adapters. You can also register framework-specific components as icon entries when an icon needs more than static SVG path metadata.

---

## Entry points

| Path | Description |
|---|---|
| `@geniusaisolutions/icons` | Core helpers: `defineIcons`, `renderSvgString`, `getIconSvgString` |
| `@geniusaisolutions/icons/core` | Same core, explicit import |
| `@geniusaisolutions/icons/react` | React adapter: `Icon`, `IconProvider`, `defineIcons` |
| `@geniusaisolutions/icons/vue` | Vue adapter: `Icon`, `IconProvider`, `defineIcons` |
| `@geniusaisolutions/icons/solid` | Solid adapter: `Icon`, `IconProvider`, `defineIcons` |
| `@geniusaisolutions/icons/svelte` | Svelte adapter: `Icon`, `IconProvider`, `defineIcons` |
| `@geniusaisolutions/icons/angular` | Angular adapter: `IconComponent`, `provideIcons`, `defineIcons` |
| `@geniusaisolutions/icons/registries` | All 24 category registries + `allIcons` |
| `@geniusaisolutions/icons/icons` | All 1,103 icons as named exports |

---

## Examples

Every example renders the full 1,103-icon catalog with search and category filtering:

Install the example dependencies once before running them locally:

```bash
npm run install:examples
```

| Example | Run |
|---|---|
| Vanilla JS | `cd examples/vanilla && npm run dev` |
| React (Vite) | `cd examples/vite-react && npm run dev` |
| Vue | `cd examples/vue && npm run dev` |
| Solid | `cd examples/solid && npm run dev` |
| Svelte | `cd examples/svelte && npm run dev` |
| Angular | `cd examples/angular && npm start` |
| Node SSR | `cd examples/node-ssr && npm run build` |

---

## Scripts

```bash
npm run install:examples # Install all example app dependencies
npm run build            # Build library (tsup + Angular)
npm test                 # Build + run all tests
npm run validate:icons   # Validate catalog naming and duplicates
npm run release:verify   # Full pre-release check (types, tests, examples, pack)
```

---

## Contributing

Contributions are welcome! See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.
Please also review [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) and [SECURITY.md](./SECURITY.md) before filing issues or opening pull requests.

This is an open-source project. We welcome bug reports, icon requests, framework adapter improvements, and documentation fixes. Please open an issue or pull request on GitHub.

---

## License

[MIT](LICENSE) &mdash; free for personal and commercial use.

Built and maintained by [Genius AI Solutions](https://github.com/geniusaisolutions).
