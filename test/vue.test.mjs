import assert from 'node:assert/strict';
import test from 'node:test';

import { createSSRApp, h } from 'vue';
import { renderToString } from 'vue/server-renderer';

import { defineIcons } from '../dist/index.js';
import { plusIcon } from '../dist/icons.js';
import { Icon, IconProvider } from '../dist/vue.js';

const CustomBadge = (props) =>
  h(
    'svg',
    {
      ...props,
      'data-custom-icon': 'true',
      viewBox: '0 0 24 24',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    [
      h('circle', {
        cx: '12',
        cy: '12',
        fill: 'none',
        r: '9',
        stroke: 'currentColor',
      }),
    ],
  );

test('Vue Icon renders metadata icons with provider lookup', async () => {
  const icons = defineIcons({
    plus: plusIcon,
  });
  const app = createSSRApp({
    render() {
      return h(
        IconProvider,
        { icons },
        {
          default: () =>
            h(Icon, {
              name: 'plus',
              'aria-label': 'Plus',
              size: 24,
            }),
        },
      );
    },
  });
  const markup = await renderToString(app);

  assert.match(markup, /<svg /);
  assert.match(markup, /aria-label="Plus"/);
  assert.match(markup, /role="img"/);
  assert.match(markup, /width="24"/);
});

test('Vue Icon renders custom component icons without extra wrappers', async () => {
  const icons = defineIcons({
    custom: CustomBadge,
  });
  const app = createSSRApp({
    render() {
      return h(Icon, {
        icons,
        name: 'custom',
        'aria-label': 'Custom badge',
        size: 28,
      });
    },
  });
  const markup = await renderToString(app);

  assert.match(markup, /^<svg /);
  assert.match(markup, /data-custom-icon="true"/);
  assert.match(markup, /aria-label="Custom badge"/);
  assert.match(markup, /role="img"/);
  assert.match(markup, /size="28"/);
});

test('Vue Icon forwards decorative accessibility semantics to custom component icons', async () => {
  const icons = defineIcons({
    custom: CustomBadge,
  });
  const app = createSSRApp({
    render() {
      return h(Icon, {
        icons,
        name: 'custom',
        size: 20,
      });
    },
  });
  const markup = await renderToString(app);

  assert.match(markup, /^<svg /);
  assert.match(markup, /aria-hidden="true"/);
  assert.doesNotMatch(markup, /role="img"/);
});
