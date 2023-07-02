import { defineConfig } from 'vite';
import glob from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig({
  root: 'src',
  build: {
    rollupOptions: {
      input: {
        main: glob.sync('./src/*.html'),
        shopping: './src/shopping.html',
      },
    },
    outDir: '../dist',
  },
  plugins: [injectHTML(), FullReload(['./src/**/**.html'])],
});

//  input: glob.sync('./src/*.html'),
//       // main: glob.sync('./src/*.html'),
//       shopping: './src/shopping.html',
