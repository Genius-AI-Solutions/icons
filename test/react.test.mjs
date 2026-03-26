import assert from 'node:assert/strict';
import test from 'node:test';

import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import { defineIcons } from '../dist/index.js';
import { plusIcon } from '../dist/icons.js';
import { Icon, IconProvider } from '../dist/react.js';

function CustomBadge(props) {
  return React.createElement(
    'svg',
    {
      ...props,
      'data-custom-icon': 'true',
      viewBox: '0 0 24 24',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    React.createElement('circle', {
      cx: '12',
      cy: '12',
      r: '9',
      fill: 'none',
      stroke: 'currentColor',
    }),
  );
}

test('Icon renders metadata icons with provider lookup', () => {
  const icons = defineIcons({
    plus: plusIcon,
  });
  const markup = renderToStaticMarkup(
    React.createElement(
      IconProvider,
      { icons },
      React.createElement(Icon, {
        name: 'plus',
        'aria-label': 'Plus',
        size: 24,
      }),
    ),
  );

  assert.match(markup, /^<svg /);
  assert.match(markup, /aria-label="Plus"/);
  assert.match(markup, /role="img"/);
  assert.match(markup, /width="24"/);
});

test('Icon renders custom component icons without extra wrappers', () => {
  const icons = defineIcons({
    custom: CustomBadge,
  });
  const markup = renderToStaticMarkup(
    React.createElement(Icon, {
      name: 'custom',
      icons,
      'aria-label': 'Custom badge',
      size: 28,
    }),
  );

  assert.match(markup, /^<svg /);
  assert.match(markup, /data-custom-icon="true"/);
  assert.match(markup, /aria-label="Custom badge"/);
  assert.match(markup, /role="img"/);
  assert.match(markup, /size="28"/);
});

test('Icon forwards decorative accessibility semantics to custom component icons', () => {
  const icons = defineIcons({
    custom: CustomBadge,
  });
  const markup = renderToStaticMarkup(
    React.createElement(Icon, {
      name: 'custom',
      icons,
      size: 20,
    }),
  );

  assert.match(markup, /^<svg /);
  assert.match(markup, /aria-hidden="true"/);
  assert.doesNotMatch(markup, /role="img"/);
});
