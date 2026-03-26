import { makeEnvironmentProviders } from '@angular/core';

import { ICON_REGISTRY } from './icon-registry.token';
import type { AngularIconRegistry } from './types';

export function provideIcons(icons: AngularIconRegistry) {
  return makeEnvironmentProviders([
    {
      provide: ICON_REGISTRY,
      useValue: icons,
    },
  ]);
}
