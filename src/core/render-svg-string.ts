import type { BaseIconRenderProps, IconMetadata, IconRegistry } from '../types';
import { getIcon } from './get-icon';
import { isMetadataIcon } from './is-metadata-icon';
import { normalizeIconProps } from './normalize-icon-props';

function escapeSvgValue(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function buildAttribute(name: string, value: number | string | undefined): string {
  if (value === undefined) {
    return '';
  }

  return ` ${name}="${escapeSvgValue(String(value))}"`;
}

function renderPaths(paths: IconMetadata['paths']): string {
  if (typeof paths === 'string') {
    return `<path d="${paths}"/>`;
  }

  return paths.map((pathData) => `<path d="${pathData}"/>`).join('');
}

export function renderSvgString(
  icon: IconMetadata,
  props: BaseIconRenderProps = {},
): string {
  const normalized = normalizeIconProps(props);
  const isDecorative =
    normalized['aria-label'] === undefined && normalized.title === undefined;
  const sharedAttributes = [
    buildAttribute('xmlns', 'http://www.w3.org/2000/svg'),
    buildAttribute('width', normalized.size),
    buildAttribute('height', normalized.size),
    buildAttribute('viewBox', icon.viewBox),
    buildAttribute('class', normalized.className),
    isDecorative ? buildAttribute('aria-hidden', 'true') : '',
    normalized['aria-label'] !== undefined
      ? buildAttribute('aria-label', normalized['aria-label'])
      : '',
    !isDecorative ? buildAttribute('role', 'img') : '',
  ].join('');
  const titleMarkup =
    normalized.title !== undefined
      ? `<title>${escapeSvgValue(normalized.title)}</title>`
      : '';
  const bodyMarkup = `${titleMarkup}${renderPaths(icon.paths)}`;

  if (icon.strokeBased) {
    return `<svg${sharedAttributes}${buildAttribute('fill', 'none')}${buildAttribute(
      'stroke',
      'currentColor',
    )}${buildAttribute('stroke-linecap', 'round')}${buildAttribute(
      'stroke-linejoin',
      'round',
    )}${buildAttribute('stroke-width', normalized.strokeWidth)}>${bodyMarkup}</svg>`;
  }

  return `<svg${sharedAttributes}${buildAttribute('fill', 'currentColor')}>${bodyMarkup}</svg>`;
}

export function getIconSvgString<TComponent>(
  icons: IconRegistry<TComponent>,
  name: string,
  props: BaseIconRenderProps = {},
): string | null {
  const icon = getIcon(icons, name);

  if (!icon || !isMetadataIcon(icon)) {
    return null;
  }

  return renderSvgString(icon, props);
}
