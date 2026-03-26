import assert from 'node:assert/strict';
import test from 'node:test';

import {
  allIcons,
  accessibilityIcons,
  alphanumericIcons,
  brandIcons,
  commerceIcons,
  designToolIcons,
  developerIcons,
  fileIcons,
  layoutIcons,
  peopleIcons,
  placeIcons,
  shapeIcons,
  timeIcons,
  transportIcons,
  weatherIcons,
} from '../dist/registries.js';
import {
  bandageIcon,
  batteryIcon,
  cloudyIcon,
  folderCheckIcon,
  newspaperIcon,
  panelLeftOpenIcon,
} from '../dist/icons.js';

test('expanded registries are exposed and included in allIcons', () => {
  assert.equal(Object.keys(alphanumericIcons).length, 48);
  assert.equal(Object.keys(commerceIcons).length, 36);
  assert.equal(Object.keys(fileIcons).length, 46);
  assert.equal(Object.keys(peopleIcons).length, 24);
  assert.equal(Object.keys(shapeIcons).length, 54);
  assert.equal(Object.keys(layoutIcons).length, 64);
  assert.equal(Object.keys(designToolIcons).length, 64);
  assert.equal(Object.keys(transportIcons).length, 36);
  assert.equal(Object.keys(placeIcons).length, 32);
  assert.equal(Object.keys(accessibilityIcons).length, 36);
  assert.equal(Object.keys(developerIcons).length, 40);
  assert.equal(Object.keys(timeIcons).length, 24);
  assert.equal(Object.keys(weatherIcons).length, 27);
  assert.ok(Object.keys(brandIcons).length >= 50);
  assert.equal(Object.keys(allIcons).length, 1103);
});

test('representative expanded icons are reachable from allIcons', () => {
  assert.ok('letter-a' in allIcons);
  assert.ok('shopping-cart' in allIcons);
  assert.ok('file-upload' in allIcons);
  assert.ok('user-plus' in allIcons);
  assert.ok('triangle-up' in allIcons);
  assert.ok('frame' in allIcons);
  assert.ok('cursor-arrow' in allIcons);
  assert.ok('checkbox' in allIcons);
  assert.ok('duplicate' in allIcons);
  assert.ok('state-focus' in allIcons);
  assert.ok('car' in allIcons);
  assert.ok('building' in allIcons);
  assert.ok('accessibility' in allIcons);
  assert.ok('terminal' in allIcons);
  assert.ok('calendar-plus' in allIcons);
  assert.ok('sunrise' in allIcons);
  assert.ok('battery' in allIcons);
  assert.ok('folder-check' in allIcons);
  assert.ok('panel-left-open' in allIcons);
  assert.ok('newspaper' in allIcons);
  assert.ok('bandage' in allIcons);
  assert.ok('cloudy' in allIcons);
  assert.ok('github' in allIcons);
  assert.ok('cloud-lightning' in allIcons);
});

test('representative expanded icons are exported from the direct icons entry point', () => {
  assert.deepEqual(batteryIcon, allIcons.battery);
  assert.deepEqual(folderCheckIcon, allIcons['folder-check']);
  assert.deepEqual(panelLeftOpenIcon, allIcons['panel-left-open']);
  assert.deepEqual(newspaperIcon, allIcons.newspaper);
  assert.deepEqual(bandageIcon, allIcons.bandage);
  assert.deepEqual(cloudyIcon, allIcons.cloudy);
});
