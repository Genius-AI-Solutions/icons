import assert from 'node:assert/strict';
import test from 'node:test';

import {
  defineIcons,
  getIconSvgString,
  renderSvgString,
} from '../dist/index.js';
import { getIcon, isMetadataIcon, renderIcon, resolveIcon } from '../dist/core.js';
import { appleIcon, plusIcon } from '../dist/icons.js';

test('renderSvgString renders stroke icons with shared defaults', () => {
  const markup = renderSvgString(plusIcon);

  assert.match(markup, /^<svg /);
  assert.match(markup, /width="20"/);
  assert.match(markup, /height="20"/);
  assert.match(markup, /fill="none"/);
  assert.match(markup, /stroke="currentColor"/);
  assert.match(markup, /stroke-width="2"/);
  assert.match(markup, /aria-hidden="true"/);
});

test('renderSvgString renders fill icons and escapes dynamic values', () => {
  const markup = renderSvgString(appleIcon, {
    className: 'tone"accent',
    title: '<Bell & Alert>',
    'aria-label': 'bell "alert"',
  });

  assert.match(markup, /fill="currentColor"/);
  assert.doesNotMatch(markup, /stroke="currentColor"/);
  assert.match(markup, /class="tone&quot;accent"/);
  assert.match(markup, /aria-label="bell &quot;alert&quot;"/);
  assert.match(markup, /role="img"/);
  assert.match(markup, /<title>&lt;Bell &amp; Alert&gt;<\/title>/);
  assert.doesNotMatch(markup, /aria-hidden="true"/);
});

test('getIconSvgString returns null for missing icons and component entries', () => {
  const icons = defineIcons({
    plus: plusIcon,
    custom: () => null,
  });

  assert.equal(typeof getIconSvgString(icons, 'plus'), 'string');
  assert.equal(getIconSvgString(icons, 'missing'), null);
  assert.equal(getIconSvgString(icons, 'custom'), null);
});

test('core helpers keep lookup and normalization behavior stable', () => {
  const icons = defineIcons({
    plus: plusIcon,
  });
  const icon = getIcon(icons, 'plus');

  assert.ok(icon);
  assert.equal(isMetadataIcon(icon), true);

  const rendered = renderIcon(icon, { size: 32, strokeWidth: 3 });

  assert.equal(rendered.kind, 'metadata');
  assert.equal(rendered.props.size, 32);
  assert.equal(rendered.props.strokeWidth, 3);
});

test('resolveIcon marks component icons decorative only when unlabeled', () => {
  const icons = defineIcons({
    custom: () => null,
  });

  const decorative = resolveIcon(icons, 'custom');
  const labelled = resolveIcon(icons, 'custom', { 'aria-label': 'Custom' });

  assert.equal(decorative?.kind, 'component');
  assert.equal(decorative?.isDecorative, true);
  assert.equal(labelled?.kind, 'component');
  assert.equal(labelled?.isDecorative, false);
});
