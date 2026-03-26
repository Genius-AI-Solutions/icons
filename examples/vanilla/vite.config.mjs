import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig } from 'vite';

const examplesDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

export default defineConfig({
  server: {
    fs: {
      allow: [examplesDir],
    },
  },
});
