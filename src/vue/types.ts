import type { Component } from 'vue';

import type { IconRegistry, IconSize } from '../types';

export type VueIconComponent = Component;

export type VueIconRegistry = IconRegistry<VueIconComponent>;

export interface IconProps {
  readonly name: string;
  readonly icons?: VueIconRegistry | undefined;
  readonly size?: IconSize | undefined;
  readonly strokeWidth?: number | string | undefined;
  readonly title?: string | undefined;
  readonly class?: unknown;
  readonly role?: string | undefined;
  readonly ['aria-label']?: string | undefined;
  readonly [key: string]: unknown;
}

export interface IconProviderProps {
  readonly icons: VueIconRegistry;
}
