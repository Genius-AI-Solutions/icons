import { createComponent } from 'solid-js';

import { IconRegistryContext } from './context';
import type { IconProviderProps } from './types';

export function IconProvider(props: IconProviderProps) {
  return createComponent(IconRegistryContext.Provider, {
    value: props.icons,
    get children() {
      return props.children;
    },
  });
}
