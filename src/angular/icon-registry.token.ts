import { InjectionToken } from '@angular/core';

import type { AngularIconRegistry } from './types';

export const ICON_REGISTRY = new InjectionToken<AngularIconRegistry>(
  'GeniusIconsRegistry',
);
