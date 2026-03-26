<script lang="ts">
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import type { Component } from 'svelte';

  import type { IconRegistry } from '../dist/index.js';
  import { iconRegistryKey } from './context.js';

  type SvelteIconComponent = Component<{
    size?: number | string;
    strokeWidth?: number | string;
    class?: string;
    title?: string;
    role?: string;
    'aria-hidden'?: boolean | 'true' | 'false';
    'aria-label'?: string;
  }>;

  export let icons: IconRegistry<SvelteIconComponent>;

  const registryStore = writable(icons);

  setContext(iconRegistryKey, registryStore);

  $: registryStore.set(icons);
</script>

<slot />
