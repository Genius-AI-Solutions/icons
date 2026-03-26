import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

const examplesDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

export default defineConfig({
  plugins: [svelte()],
  server: {
    fs: {
      allow: [examplesDir],
    },
  },
});
