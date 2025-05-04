import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';

export default defineConfig({
  integrations: [UnoCSS()],
  site: 'https://amirmtaati.github.io', // Replace with your GitHub Pages URL
  base: '/', // Replace with your repository name, e.g., '/my-blog'
  output: 'static', // Ensure static site generation
});