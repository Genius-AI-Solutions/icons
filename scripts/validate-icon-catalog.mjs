import * as iconDefinitions from '../dist/icons.js';
import {
  actionIcons,
  allIcons,
  brandIcons,
  communicationIcons,
  contentIcons,
  educationIcons,
  engagementIcons,
  financeIcons,
  mediaIcons,
  navigationIcons,
  statusIcons,
  systemIcons,
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
} from '../dist/registries.js';

const registries = {
  actionIcons,
  brandIcons,
  communicationIcons,
  contentIcons,
  educationIcons,
  engagementIcons,
  financeIcons,
  mediaIcons,
  navigationIcons,
  statusIcons,
  systemIcons,
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
};

const canonicalNamePattern = /^[a-z]+(?:-(?:[a-z]+|[0-9]+))*$/;
const bannedNamePattern = /^(?:tt|widget)(?:-|$)|(?:^|-)tutor(?:-|$)|tutortech/i;

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

const seen = new Set();

for (const [label, registry] of Object.entries(registries)) {
  const keys = Object.keys(registry);

  for (const key of keys) {
    assert(
      canonicalNamePattern.test(key),
      `Icon name "${key}" in ${label} is not canonical kebab-case.`,
    );
    assert(
      !bannedNamePattern.test(key),
      `Icon name "${key}" in ${label} uses a banned prefix or term.`,
    );
    assert(!seen.has(key), `Duplicate icon name found across registries: ${key}`);
    seen.add(key);
  }
}

const allIconKeys = Object.keys(allIcons);

assert(
  allIconKeys.length === seen.size,
  `Expected ${seen.size} icons in allIcons, found ${allIconKeys.length}.`,
);

for (const key of seen) {
  assert(key in allIcons, `allIcons is missing registry key: ${key}`);
}

for (const key of allIconKeys) {
  assert(seen.has(key), `allIcons contains a key not present in grouped registries: ${key}`);
}

for (const [key, value] of Object.entries(iconDefinitions)) {
  assert(
    typeof value !== 'function',
    `icons entry point must only export metadata definitions. Found component export: ${key}`,
  );
}

console.log(
  `Validated icon catalog: ${allIconKeys.length} canonical icons across ${Object.keys(registries).length} registries.`,
);
