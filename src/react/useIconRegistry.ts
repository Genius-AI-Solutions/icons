import { useContext } from 'react';

import { IconRegistryContext } from './context';

export function useIconRegistry() {
  return useContext(IconRegistryContext);
}
