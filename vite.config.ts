/// <reference types="vitest" />
import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/utils/setupTest.ts'],
    coverage: {
      provider: 'v8',
      extension: ['.tsx'],
      exclude: [
        '**/src/components/ui/*',
        '**/src/components/icons/*',
        '**/src/components/Layout.tsx',
        '**/src/components/LoadingIndicator.tsx',
        '**/src/App.tsx',
        '**/src/main.tsx',
        '**/src/context/*',
        '**/src/lib/providers/*',
        '**/src/routes/*',
        '**/src/pages/PodcastLayout.tsx',
      ],
    },
  },
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
