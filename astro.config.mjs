import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math'; // Add this import
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  integrations: [UnoCSS(), mdx()],
  site: 'https://amirmtaati.github.io', // Replace with your GitHub Pages URL
  base: '/', // Replace with your repository name, e.g., '/my-blog'
  output: 'static', // Ensure static site generation,
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [[rehypeKatex, { output: 'html' }]], // 'html' ensures compatibility
    shikiConfig: {
      theme: 'gruvbox-dark-soft', // Use Gruvbox dark theme
      langs: ['javascript', 'typescript', 'python', 'html', 'css', 'bash', 'c', 'go'], // Specify languages
      wrap: true, // Wrap long lines
    },
  },
});