import type { Component } from 'svelte';

import type { BaseIconRenderProps, IconRegistry, IconSize } from '../dist/index';

export { defineIcons } from '../dist/core';

export interface SvelteIconComponentProps
  extends Omit<BaseIconRenderProps, 'className'> {
  readonly class?: string | undefined;
  readonly role?: string | undefined;
  readonly ['aria-hidden']?: boolean | 'true' | 'false' | undefined;
  readonly ['aria-label']?: string | undefined;
}

export type SvelteIconComponent = Component<SvelteIconComponentProps>;

export type SvelteIconRegistry = IconRegistry<SvelteIconComponent>;

export declare const Icon: Component<{
  name: string;
  icons?: SvelteIconRegistry | undefined;
  size?: IconSize | undefined;
  strokeWidth?: number | string | undefined;
  title?: string | undefined;
  class?: string | undefined;
  role?: string | undefined;
  'aria-hidden'?: boolean | 'true' | 'false' | undefined;
  'aria-label'?: string | undefined;
}>;

export declare const IconProvider: Component<{
  icons: SvelteIconRegistry;
}>;
