<script lang="ts">
  import { getContext } from 'svelte';
  import type { Component } from 'svelte';
  import type { Readable } from 'svelte/store';

  import type { IconRegistry, IconSize } from '../dist/index.js';
  import { resolveIcon } from '../dist/core.js';
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

  export let name: string;
  export let icons: IconRegistry<SvelteIconComponent> | null | undefined = undefined;
  export let size: IconSize | undefined = undefined;
  export let strokeWidth: number | string | undefined = undefined;
  export let title: string | undefined = undefined;
  export let role: string | undefined = undefined;

  let className: string | undefined = undefined;

  export { className as class };

  const providedRegistryStore =
    getContext<Readable<IconRegistry<SvelteIconComponent> | null> | null>(
      iconRegistryKey,
    ) ?? null;

  $: providedRegistry = providedRegistryStore ? $providedRegistryStore : null;
  $: registry = icons ?? providedRegistry;
  $: ariaLabel =
    typeof $$restProps['aria-label'] === 'string'
      ? $$restProps['aria-label']
      : undefined;
  $: forwardedProps = { ...$$restProps };
  $: delete forwardedProps['aria-label'];
  $: resolved = registry
    ? resolveIcon(registry, name, {
        size,
        strokeWidth,
        className,
        title,
        'aria-label': ariaLabel,
      })
    : null;
  $: pathItems =
    resolved && resolved.kind === 'metadata'
      ? typeof resolved.icon.paths === 'string'
        ? [resolved.icon.paths]
        : [...resolved.icon.paths]
      : [];
</script>

{#if resolved}
  {#if resolved.kind === 'component'}
    <svelte:component
      this={resolved.component}
      {...forwardedProps}
      aria-hidden={resolved.isDecorative ? true : undefined}
      aria-label={resolved.props['aria-label']}
      class={className}
      role={resolved.isDecorative ? undefined : role ?? 'img'}
      size={resolved.props.size}
      strokeWidth={resolved.props.strokeWidth}
      title={resolved.props.title}
    />
  {:else if resolved.icon.strokeBased}
    <svg
      {...forwardedProps}
      aria-hidden={resolved.isDecorative ? true : undefined}
      aria-label={resolved.props['aria-label']}
      class={className}
      fill="none"
      height={resolved.props.size}
      role={resolved.isDecorative ? undefined : role ?? 'img'}
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width={resolved.props.strokeWidth}
      viewBox={resolved.icon.viewBox}
      width={resolved.props.size}
      xmlns="http://www.w3.org/2000/svg"
    >
      {#if resolved.props.title}
        <title>{resolved.props.title}</title>
      {/if}

      {#each pathItems as pathData (pathData)}
        <path d={pathData} />
      {/each}
    </svg>
  {:else}
    <svg
      {...forwardedProps}
      aria-hidden={resolved.isDecorative ? true : undefined}
      aria-label={resolved.props['aria-label']}
      class={className}
      fill="currentColor"
      height={resolved.props.size}
      role={resolved.isDecorative ? undefined : role ?? 'img'}
      viewBox={resolved.icon.viewBox}
      width={resolved.props.size}
      xmlns="http://www.w3.org/2000/svg"
    >
      {#if resolved.props.title}
        <title>{resolved.props.title}</title>
      {/if}

      {#each pathItems as pathData (pathData)}
        <path d={pathData} />
      {/each}
    </svg>
  {/if}
{/if}
