import { memo } from 'react';
import type { JSX } from 'react';

import { resolveIcon } from '../core/index';
import { useIconRegistry } from './useIconRegistry';
import type { IconProps } from './types';

function IconComponent({
  name,
  icons,
  size,
  strokeWidth,
  className,
  title,
  role,
  ...rest
}: IconProps): JSX.Element | null {
  const registry = icons ?? useIconRegistry();

  if (!registry) {
    return null;
  }

  const resolved = resolveIcon(registry, name, {
    size,
    strokeWidth,
    className,
    title,
    'aria-label': rest['aria-label'],
  });

  if (!resolved) {
    return null;
  }

  if (resolved.kind === 'component') {
    const Component = resolved.component;

    return (
      <Component
        {...rest}
        aria-hidden={resolved.isDecorative ? true : undefined}
        aria-label={resolved.props['aria-label']}
        className={resolved.props.className}
        role={resolved.isDecorative ? undefined : role ?? 'img'}
        size={resolved.props.size}
        strokeWidth={resolved.props.strokeWidth}
        title={resolved.props.title}
      />
    );
  }

  const svgProps = {
    ...rest,
    className: resolved.props.className,
    height: resolved.props.size,
    role: resolved.isDecorative ? undefined : role ?? 'img',
    viewBox: resolved.icon.viewBox,
    width: resolved.props.size,
    xmlns: 'http://www.w3.org/2000/svg',
  };

  if (resolved.icon.strokeBased) {
    return (
      <svg
        {...svgProps}
        aria-hidden={resolved.isDecorative ? true : undefined}
        aria-label={resolved.props['aria-label']}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={resolved.props.strokeWidth}
      >
        {resolved.props.title ? <title>{resolved.props.title}</title> : null}
        {typeof resolved.icon.paths === 'string' ? (
          <path d={resolved.icon.paths} />
        ) : (
          resolved.icon.paths.map((pathData: string) => (
            <path key={pathData} d={pathData} />
          ))
        )}
      </svg>
    );
  }

  return (
    <svg
      {...svgProps}
      aria-hidden={resolved.isDecorative ? true : undefined}
      aria-label={resolved.props['aria-label']}
      fill="currentColor"
    >
      {resolved.props.title ? <title>{resolved.props.title}</title> : null}
      {typeof resolved.icon.paths === 'string' ? (
        <path d={resolved.icon.paths} />
      ) : (
        resolved.icon.paths.map((pathData: string) => (
          <path key={pathData} d={pathData} />
        ))
      )}
    </svg>
  );
}

export const Icon = memo(IconComponent);
