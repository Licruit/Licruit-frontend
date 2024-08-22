/// <reference types="vitest" />
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import { VitePluginRadar } from 'vite-plugin-radar';

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return defineConfig({
    plugins: [
      react(),
      svgrPlugin(),
      tsconfigPaths(),
      VitePluginRadar({
        analytics: {
          id: env.VITE_GOOGLE_ANALYTICS_ID,
        },
      }),
    ],
    build: {
      outDir: './dist',
    },
    test: {
      include: ['src/test/*.test.ts?(x)'],
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/test/setup.ts',
      coverage: {
        reporter: ['text', 'json-summary', 'json'],
      },
    },
  });
};
