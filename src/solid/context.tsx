import { createContext } from 'solid-js';

import type { SolidIconRegistry } from './types';

export const IconRegistryContext = createContext<SolidIconRegistry | null>(null);
