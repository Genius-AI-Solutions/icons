import { defineIcons } from '@geniusaisolutions/icons/react';
import {
  allIcons,
  navigationIcons,
  statusIcons,
  actionIcons,
  systemIcons,
  educationIcons,
  contentIcons,
  communicationIcons,
  mediaIcons,
  financeIcons,
  engagementIcons,
  brandIcons,
  alphanumericIcons,
  commerceIcons,
  fileIcons,
  peopleIcons,
  shapeIcons,
  layoutIcons,
  designToolIcons,
  transportIcons,
  placeIcons,
  accessibilityIcons,
  developerIcons,
  timeIcons,
  weatherIcons,
} from '@geniusaisolutions/icons/registries';

function sortIconNames(registry: Readonly<Record<string, unknown>>) {
  return Object.keys(registry).sort((left, right) => left.localeCompare(right));
}

export const icons = defineIcons(allIcons);
export const iconNames = sortIconNames(allIcons);
export const totalIcons = iconNames.length;

export interface Category {
  label: string;
  names: readonly string[];
}

export const categories: Category[] = [
  { label: 'Navigation', names: sortIconNames(navigationIcons) },
  { label: 'Status', names: sortIconNames(statusIcons) },
  { label: 'Actions', names: sortIconNames(actionIcons) },
  { label: 'System', names: sortIconNames(systemIcons) },
  { label: 'Education', names: sortIconNames(educationIcons) },
  { label: 'Content', names: sortIconNames(contentIcons) },
  { label: 'Communication', names: sortIconNames(communicationIcons) },
  { label: 'Media', names: sortIconNames(mediaIcons) },
  { label: 'Finance', names: sortIconNames(financeIcons) },
  { label: 'Engagement', names: sortIconNames(engagementIcons) },
  { label: 'Brands', names: sortIconNames(brandIcons) },
  { label: 'Alphanumeric', names: sortIconNames(alphanumericIcons) },
  { label: 'Commerce', names: sortIconNames(commerceIcons) },
  { label: 'Files', names: sortIconNames(fileIcons) },
  { label: 'People', names: sortIconNames(peopleIcons) },
  { label: 'Shapes', names: sortIconNames(shapeIcons) },
  { label: 'Layout', names: sortIconNames(layoutIcons) },
  { label: 'Design Tools', names: sortIconNames(designToolIcons) },
  { label: 'Transport', names: sortIconNames(transportIcons) },
  { label: 'Places', names: sortIconNames(placeIcons) },
  { label: 'Accessibility', names: sortIconNames(accessibilityIcons) },
  { label: 'Developer', names: sortIconNames(developerIcons) },
  { label: 'Time', names: sortIconNames(timeIcons) },
  { label: 'Weather', names: sortIconNames(weatherIcons) },
];
