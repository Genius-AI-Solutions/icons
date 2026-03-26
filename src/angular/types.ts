import type { Type } from '@angular/core';

import type { IconRegistry } from './internal';

export interface AngularIconComponentProps {
  readonly ariaHidden?: boolean | undefined;
  readonly ariaLabel?: string | undefined;
  readonly className?: string | undefined;
  readonly role?: string | undefined;
  readonly size?: number | string | undefined;
  readonly strokeWidth?: number | string | undefined;
  readonly title?: string | undefined;
}

export type AngularIconComponent = Type<AngularIconComponentProps>;

export type AngularIconRegistry = IconRegistry<AngularIconComponent>;
