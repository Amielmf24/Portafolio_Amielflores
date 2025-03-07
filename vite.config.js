import { defineConfig } from 'vite';
import less from 'rollup-plugin-less';
import PurgeCSS from '@fullhuman/postcss-purgecss';

export default defineConfig({
  plugins: [
    less(),
  ],
  css: {
    postcss: {
      plugins: [
        PurgeCSS({
          content: ['./index.html', './src/**/*.js'],
          safelist: [],
        })
      ]
    }
  },
  build: {
    minify: true,
    outDir: 'dist',
  }
});

c