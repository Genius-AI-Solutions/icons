import assert from 'node:assert/strict';
import test from 'node:test';

import { createComponent } from 'solid-js';
import { Dynamic, renderToString } from 'solid-js/web';

import { defineIcons } from '../dist/index.js';
import { plusIcon } from '../dist/icons.js';
import { Icon, IconProvider } from '../dist/solid.js';

function CustomBadge(props) {
  return createComponent(Dynamic, {
    ...props,
    'data-custom-icon': 'true',
    component: 'svg',
    viewBox: '0 0 24 24',
    xmlns: 'http://www.w3.org/2000/svg',
    children: [
      createComponent(Dynamic, {
        component: 'circle',
        cx: '12',
        cy: '12',
        fill: 'none',
        r: '9',
        stroke: 'currentColor',
      }),
    ],
  });
}

test('Solid Icon renders metadata icons with provider lookup', () => {
  const icons = defineIcons({
    plus: plusIcon,
  });
  const markup = renderToString(() =>
    createComponent(IconProvider, {
      icons,
      get children() {
        return createComponent(Icon, {
          name: 'plus',
          'aria-label': 'Plus',
          size: 24,
        });
      },
    }),
  );

  assert.match(markup, /^<svg /);
  assert.match(markup, /aria-label="Plus"/);
  assert.match(markup, /role="img"/);
  assert.match(markup, /width="24"/);
});

test('Solid Icon renders custom component icons without extra wrappers', () => {
  const icons = defineIcons({
    custom: CustomBadge,
  });
  const markup = renderToString(() =>
    createComponent(Icon, {
      icons,
      name: 'custom',
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

test('Solid Icon forwards decorative accessibility semantics to custom component icons', () => {
  const icons = defineIcons({
    custom: CustomBadge,
  });
  const markup = renderToString(() =>
    createComponent(Icon, {
      icons,
      name: 'custom',
      size: 20,
    }),
  );

  assert.match(markup, /^<svg /);
  assert.match(markup, /aria-hidden="true"/);
  assert.doesNotMatch(markup, /role="img"/);
});
