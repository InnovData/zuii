import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

export default defineConfig({
  plugins: [
    react(),
	libInjectCss(),
    dts({
      insertTypesEntry: true,
      include: ['src'],
      exclude: ['src/playground.tsx', '**/playground/**'],
    })
  ],
  resolve: {
    alias: {
      '@core': resolve(__dirname, 'src/core/styles'),
    },
  },
  css: {
    devSourcemap: true,
  },
  build: {
	cssCodeSplit: true,
    lib: {
      name: 'zuii',
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
      },
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
        exports: 'named',
        entryFileNames: ({ name }) => `${name}.js`,
        assetFileNames: (assetInfo) => {
          // Garde la structure des dossiers pour le CSS/SCSS
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
             return '[name][extname]';
          }
          return 'assets/[name][extname]';
        },
      },
    },
    emptyOutDir: true,
  },
});
