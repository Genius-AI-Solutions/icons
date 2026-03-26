import type { JSX, ParentProps, Component } from 'solid-js';

import type { BaseIconRenderProps, IconRegistry } from '../types';

export type SolidIconComponentProps = Omit<
  JSX.SvgSVGAttributes<SVGSVGElement>,
  'children' | 'ref'
> &
  BaseIconRenderProps;

export type SolidIconComponent = Component<SolidIconComponentProps>;

export type SolidIconRegistry = IconRegistry<SolidIconComponent>;

export interface IconProps extends SolidIconComponentProps {
  readonly name: string;
  readonly icons?: SolidIconRegistry | undefined;
}

export interface IconProviderProps extends ParentProps {
  readonly icons: SolidIconRegistry;
}
