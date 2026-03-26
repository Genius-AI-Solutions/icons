import { createContext } from 'react';

import type { ReactIconRegistry } from './types';

export const IconRegistryContext = createContext<ReactIconRegistry | null>(null);
