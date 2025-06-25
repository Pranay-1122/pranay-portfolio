import { defineConfig } from 'vite';
import { createServer } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: '../dist/server',
  },
  plugins: [],
});