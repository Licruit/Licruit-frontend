/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), svgrPlugin(), tsconfigPaths()],
  build: {
    outDir: './dist',
  },
  test: {
    include: ['src/test/*.test.ts?(x)'],
    coverage: {
      reporter: ['text', 'json-summary', 'json'],
    },
  },
});
