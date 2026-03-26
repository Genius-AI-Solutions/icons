import type { IconDefinition, IconRegistry } from '../types';

export function getIcon<TComponent>(
  icons: IconRegistry<TComponent>,
  name: string,
): IconDefinition<TComponent> | undefined {
  return icons[name];
}
