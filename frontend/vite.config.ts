import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default defineConfig({
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  server: {
    open: true,
    watch: {
      usePolling: true,
    },
  },
  plugins: [reactRefresh(), vanillaExtractPlugin()],
});
