import { inject } from 'vue';

import { IconRegistryKey } from './context';

export function useIconRegistry() {
  return inject(IconRegistryKey, null);
}
