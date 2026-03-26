import { createComponent, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { resolveIcon } from '../core/index';
import { useIconRegistry } from './useIconRegistry';
import type { IconProps } from './types';

function getPathItems(paths: string | readonly string[]) {
  return typeof paths === 'string' ? [paths] : paths;
}

export function Icon(props: IconProps) {
  const [local, rest] = splitProps(props, [
    'name',
    'icons',
    'size',
    'strokeWidth',
    'class',
    'classList',
    'title',
    'aria-label',
    'role',
  ]);
  const registry = local.icons ?? useIconRegistry();

  if (!registry) {
    return null;
  }

  const resolved = resolveIcon(registry, local.name, {
    size: local.size,
    strokeWidth: local.strokeWidth,
    className: local.class,
    title: local.title,
    'aria-label': local['aria-label'],
  });

  if (!resolved) {
    return null;
  }

  if (resolved.kind === 'component') {
    const Component = resolved.component;

    return createComponent(Component, {
      ...rest,
      'aria-hidden': resolved.isDecorative ? true : undefined,
      'aria-label': resolved.props['aria-label'],
      class: local.class,
      classList: local.classList,
      role: resolved.isDecorative ? undefined : local.role ?? 'img',
      size: resolved.props.size,
      strokeWidth: resolved.props.strokeWidth,
      title: resolved.props.title,
    });
  }

  const children = [
    resolved.props.title
      ? createComponent(Dynamic, {
          component: 'title',
          children: resolved.props.title,
        })
      : null,
    ...getPathItems(resolved.icon.paths).map((pathData) =>
      createComponent(Dynamic, {
        component: 'path',
        d: pathData,
      }),
    ),
  ];

  if (resolved.icon.strokeBased) {
    return createComponent(Dynamic, {
      ...rest,
      'aria-hidden': resolved.isDecorative ? true : undefined,
      'aria-label': resolved.props['aria-label'],
      class: local.class,
      classList: local.classList,
      component: 'svg',
      fill: 'none',
      height: resolved.props.size,
      role: resolved.isDecorative ? undefined : local.role ?? 'img',
      stroke: 'currentColor',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      'stroke-width': resolved.props.strokeWidth,
      viewBox: resolved.icon.viewBox,
      width: resolved.props.size,
      xmlns: 'http://www.w3.org/2000/svg',
      children,
    });
  }

  return createComponent(Dynamic, {
    ...rest,
    'aria-hidden': resolved.isDecorative ? true : undefined,
    'aria-label': resolved.props['aria-label'],
    class: local.class,
    classList: local.classList,
    component: 'svg',
    fill: 'currentColor',
    height: resolved.props.size,
    role: resolved.isDecorative ? undefined : local.role ?? 'img',
    viewBox: resolved.icon.viewBox,
    width: resolved.props.size,
    xmlns: 'http://www.w3.org/2000/svg',
    children,
  });
}
