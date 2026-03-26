import type { InjectionKey } from 'vue';

import type { VueIconRegistry } from './types';

export const IconRegistryKey = Symbol('IconRegistry') as InjectionKey<
  VueIconRegistry | null
>;
