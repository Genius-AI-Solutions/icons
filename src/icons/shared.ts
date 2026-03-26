import type { IconMetadata, IconPathData } from '../types';

const DEFAULT_VIEWBOX = '0 0 24 24';

export function strokeIcon(
  paths: IconPathData,
  viewBox = DEFAULT_VIEWBOX,
): IconMetadata {
  return {
    paths,
    strokeBased: true,
    viewBox,
  };
}

export function fillIcon(
  paths: IconPathData,
  viewBox = DEFAULT_VIEWBOX,
): IconMetadata {
  return {
    paths,
    strokeBased: false,
    viewBox,
  };
}
