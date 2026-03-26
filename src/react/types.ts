import type { ComponentType, ReactNode, SVGProps } from 'react';

import type { BaseIconRenderProps, IconRegistry } from '../types';

export type ReactIconComponentProps = Omit<
  SVGProps<SVGSVGElement>,
  'children' | 'ref'
> &
  BaseIconRenderProps;

export type ReactIconComponent = ComponentType<ReactIconComponentProps>;

export type ReactIconRegistry = IconRegistry<ReactIconComponent>;

export interface IconProps extends ReactIconComponentProps {
  readonly name: string;
  readonly icons?: ReactIconRegistry;
}

export interface IconProviderProps {
  readonly children: ReactNode;
  readonly icons: ReactIconRegistry;
}
