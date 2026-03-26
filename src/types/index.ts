export type IconPathData = string | readonly string[];

export type IconSize = number | string;

export interface IconMetadata {
  readonly paths: IconPathData;
  readonly viewBox: string;
  readonly strokeBased: boolean;
}

export interface BaseIconRenderProps {
  readonly size?: IconSize | undefined;
  readonly strokeWidth?: number | string | undefined;
  readonly className?: string | undefined;
  readonly title?: string | undefined;
  readonly ['aria-label']?: string | undefined;
}

export type IconDefinition<TComponent = never> = IconMetadata | TComponent;

export type IconRegistry<TComponent = never> = Readonly<
  Record<string, IconDefinition<TComponent>>
>;

export type MetadataIconRegistry = IconRegistry<never>;

export interface NormalizedIconRenderProps {
  readonly size: IconSize;
  readonly strokeWidth: number | string;
  readonly className?: string | undefined;
  readonly title?: string | undefined;
  readonly ['aria-label']?: string | undefined;
}

export interface MetadataIconRenderResult {
  readonly kind: 'metadata';
  readonly icon: IconMetadata;
  readonly props: NormalizedIconRenderProps;
}

export interface ComponentIconRenderResult<TComponent> {
  readonly kind: 'component';
  readonly component: TComponent;
  readonly props: NormalizedIconRenderProps;
}

export type IconRenderResult<TComponent> =
  | MetadataIconRenderResult
  | ComponentIconRenderResult<TComponent>;

export type ResolvedIconRenderResult<TComponent> = IconRenderResult<TComponent> & {
  readonly isDecorative: boolean;
};
