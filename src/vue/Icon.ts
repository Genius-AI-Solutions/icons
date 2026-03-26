import { defineComponent, h, normalizeClass } from 'vue';
import type { PropType } from 'vue';

import { resolveIcon } from '../core/index';
import { useIconRegistry } from './useIconRegistry';
import type { IconProps, VueIconRegistry } from './types';

function getStringAttr(value: unknown): string | undefined {
  return typeof value === 'string' ? value : undefined;
}

function getClassName(value: unknown): string | undefined {
  const normalized = normalizeClass(value);

  return normalized ? normalized : undefined;
}

function getPathItems(paths: string | readonly string[]) {
  return typeof paths === 'string' ? [paths] : paths;
}

export const Icon = defineComponent({
  name: 'GeniusIcon',
  inheritAttrs: false,
  props: {
    name: {
      required: true,
      type: String,
    },
    icons: {
      required: false,
      type: Object as PropType<VueIconRegistry>,
    },
    size: {
      required: false,
      type: [Number, String] as PropType<IconProps['size']>,
    },
    strokeWidth: {
      required: false,
      type: [Number, String] as PropType<IconProps['strokeWidth']>,
    },
    title: {
      required: false,
      type: String,
    },
  },
  setup(props, { attrs }) {
    const providedRegistry = useIconRegistry();

    return () => {
      const registry = props.icons ?? providedRegistry;

      if (!registry) {
        return null;
      }

      const resolved = resolveIcon(registry, props.name, {
        size: props.size,
        strokeWidth: props.strokeWidth,
        className: getClassName(attrs.class),
        title: props.title,
        'aria-label': getStringAttr(attrs['aria-label']),
      });

      if (!resolved) {
        return null;
      }

      if (resolved.kind === 'component') {
        return h(resolved.component, {
          ...attrs,
          'aria-hidden': resolved.isDecorative ? true : undefined,
          class: attrs.class,
          role: resolved.isDecorative ? undefined : attrs.role ?? 'img',
          size: resolved.props.size,
          strokeWidth: resolved.props.strokeWidth,
          title: resolved.props.title,
          'aria-label': resolved.props['aria-label'],
        });
      }

      const commonAttrs = {
        ...attrs,
        class: attrs.class,
        role: resolved.isDecorative ? undefined : attrs.role ?? 'img',
        'aria-hidden': resolved.isDecorative ? true : undefined,
        'aria-label': resolved.props['aria-label'],
        height: resolved.props.size,
        viewBox: resolved.icon.viewBox,
        width: resolved.props.size,
        xmlns: 'http://www.w3.org/2000/svg',
      };
      const children = [];

      if (resolved.props.title !== undefined) {
        children.push(h('title', resolved.props.title));
      }

      for (const pathData of getPathItems(resolved.icon.paths)) {
        children.push(h('path', { d: pathData, key: pathData }));
      }

      if (resolved.icon.strokeBased) {
        return h(
          'svg',
          {
            ...commonAttrs,
            fill: 'none',
            stroke: 'currentColor',
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round',
            'stroke-width': resolved.props.strokeWidth,
          },
          children,
        );
      }

      return h(
        'svg',
        {
          ...commonAttrs,
          fill: 'currentColor',
        },
        children,
      );
    };
  },
});
