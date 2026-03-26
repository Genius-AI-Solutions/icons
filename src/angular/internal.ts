export type IconPathData = string | readonly string[];

export interface IconMetadata {
  readonly paths: IconPathData;
  readonly viewBox: string;
  readonly strokeBased: boolean;
}

export interface BaseIconRenderProps {
  readonly size?: number | string | undefined;
  readonly strokeWidth?: number | string | undefined;
  readonly className?: string | undefined;
  readonly title?: string | undefined;
  readonly ['aria-label']?: string | undefined;
}

export interface NormalizedIconRenderProps {
  readonly size: number | string;
  readonly strokeWidth: number | string;
  readonly className?: string | undefined;
  readonly title?: string | undefined;
  readonly ['aria-label']?: string | undefined;
}

export type IconDefinition<TComponent> = IconMetadata | TComponent;

export type IconRegistry<TComponent> = Readonly<
  Record<string, IconDefinition<TComponent>>
>;

export interface MetadataIconRenderResult {
  readonly kind: 'metadata';
  readonly icon: IconMetadata;
  readonly props: NormalizedIconRenderProps;
  readonly isDecorative: boolean;
}

export interface ComponentIconRenderResult<TComponent> {
  readonly kind: 'component';
  readonly component: TComponent;
  readonly props: NormalizedIconRenderProps;
  readonly isDecorative: boolean;
}

export type ResolvedIconRenderResult<TComponent> =
  | MetadataIconRenderResult
  | ComponentIconRenderResult<TComponent>;

const DEFAULT_SIZE = 20;
const DEFAULT_STROKE_WIDTH = 2;

export function defineIcons<
  TComponent,
  TRegistry extends IconRegistry<TComponent>,
>(icons: TRegistry): TRegistry {
  return icons;
}

export function resolveIcon<TComponent>(
  icons: IconRegistry<TComponent>,
  name: string,
  props: BaseIconRenderProps = {},
): ResolvedIconRenderResult<TComponent> | null {
  const icon = icons[name];

  if (!icon) {
    return null;
  }

  const normalizedProps: NormalizedIconRenderProps = {
    size: props.size ?? DEFAULT_SIZE,
    strokeWidth: props.strokeWidth ?? DEFAULT_STROKE_WIDTH,
    className: props.className,
    title: props.title,
    'aria-label': props['aria-label'],
  };
  const isDecorative =
    normalizedProps['aria-label'] === undefined &&
    normalizedProps.title === undefined;

  if (isMetadataIcon(icon)) {
    return {
      kind: 'metadata',
      icon,
      isDecorative,
      props: normalizedProps,
    };
  }

  return {
    kind: 'component',
    component: icon,
    isDecorative,
    props: normalizedProps,
  };
}

function isMetadataIcon<TComponent>(
  icon: IconDefinition<TComponent>,
): icon is IconMetadata {
  return (
    typeof icon === 'object' &&
    icon !== null &&
    'paths' in icon &&
    'viewBox' in icon &&
    'strokeBased' in icon
  );
}
