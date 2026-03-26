import type { JSX } from 'react';

import { IconRegistryContext } from './context';
import type { IconProviderProps } from './types';

export function IconProvider({
  children,
  icons,
}: IconProviderProps): JSX.Element {
  return (
    <IconRegistryContext.Provider value={icons}>
      {children}
    </IconRegistryContext.Provider>
  );
}
