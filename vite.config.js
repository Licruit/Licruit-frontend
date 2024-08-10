/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import { VitePluginRadar } from 'vite-plugin-radar';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  plugins: [
    react(),
    svgrPlugin(),
    tsconfigPaths(),
    VitePluginRadar({
      analytics: {
        id: process.env.VITE_GOOGLE_ANALYTICS_ID,
      },
    }),
  ],
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
