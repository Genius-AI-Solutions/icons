import { defineConfig } from 'tsup';

export default defineConfig({
  clean: true,
  dts: true,
  entry: {
    index: 'src/index.ts',
    core: 'src/core.ts',
    react: 'src/react.ts',
    vue: 'src/vue.ts',
    solid: 'src/solid.ts',
    registries: 'src/registries.ts',
    icons: 'src/icons/index.ts',
    'shared/icon-runtime': 'src/shared/icon-runtime.ts',
  },
  external: [
    'react',
    'react/jsx-runtime',
    'solid-js',
    'solid-js/web',
    'vue',
  ],
  format: ['esm'],
  sourcemap: true,
  splitting: false,
  target: 'es2020',
  treeshake: true,
});
