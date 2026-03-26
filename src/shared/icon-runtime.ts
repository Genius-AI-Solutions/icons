import type {
  BaseIconRenderProps,
  ComponentIconRenderResult,
  IconDefinition,
  IconMetadata,
  IconRegistry,
  IconRenderResult,
  MetadataIconRenderResult,
  NormalizedIconRenderProps,
  ResolvedIconRenderResult,
} from '../types';

export type {
  BaseIconRenderProps,
  ComponentIconRenderResult,
  IconDefinition,
  IconMetadata,
  IconPathData,
  IconRegistry,
  IconRenderResult,
  MetadataIconRenderResult,
  NormalizedIconRenderProps,
  ResolvedIconRenderResult,
} from '../types';

const DEFAULT_SIZE = 20;
const DEFAULT_STROKE_WIDTH = 2;

export function defineIcons<TComponent, TRegistry extends IconRegistry<TComponent>>(
  icons: TRegistry,
): TRegistry {
  return icons;
}

export function normalizeIconProps(
  props: BaseIconRenderProps = {},
): NormalizedIconRenderProps {
  const normalized: {
    size: number | string;
    strokeWidth: number | string;
    className?: string;
    title?: string;
    'aria-label'?: string;
  } = {
    size: props.size ?? DEFAULT_SIZE,
    strokeWidth: props.strokeWidth ?? DEFAULT_STROKE_WIDTH,
  };

  if (props.className !== undefined) {
    normalized.className = props.className;
  }

  if (props.title !== undefined) {
    normalized.title = props.title;
  }

  if (props['aria-label'] !== undefined) {
    normalized['aria-label'] = props['aria-label'];
  }

  return normalized;
}

export function isMetadataIcon<TComponent>(
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

export function renderIcon<TComponent>(
  icon: IconDefinition<TComponent>,
  props: BaseIconRenderProps = {},
): IconRenderResult<TComponent> {
  const normalizedProps = normalizeIconProps(props);

  if (isMetadataIcon(icon)) {
    const result: MetadataIconRenderResult = {
      kind: 'metadata',
      icon,
      props: normalizedProps,
    };

    return result;
  }

  const result: ComponentIconRenderResult<TComponent> = {
    kind: 'component',
    component: icon,
    props: normalizedProps,
  };

  return result;
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

  const resolved = renderIcon(icon, props);

  return {
    ...resolved,
    isDecorative:
      resolved.props['aria-label'] === undefined &&
      resolved.props.title === undefined,
  };
}
