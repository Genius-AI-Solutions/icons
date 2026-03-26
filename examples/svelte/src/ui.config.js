import { defineIcons } from '@geniusaisolutions/icons/svelte';
import { allIcons } from '@geniusaisolutions/icons/registries';

export const icons = defineIcons(allIcons);
export const iconNames = Object.keys(icons).sort((left, right) =>
  left.localeCompare(right),
);
export const totalIcons = iconNames.length;

export function getVisibleIconNames(query) {
  const normalized = query.trim().toLowerCase();

  if (!normalized) {
    return iconNames;
  }

  return iconNames.filter((name) => name.includes(normalized));
}
