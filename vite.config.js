import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        page2: resolve(__dirname, 'cgv.html'),
        page3: resolve(__dirname, 'legal-notices.html'),
      },
    },
  },
});
