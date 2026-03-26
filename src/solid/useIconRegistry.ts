import { useContext } from 'solid-js';

import { IconRegistryContext } from './context';

export function useIconRegistry() {
  return useContext(IconRegistryContext);
}
