import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  integrations: [
    UnoCSS({
      injectReset: true, // Add CSS reset
      mode: 'global', // Use global mode for now
    }), 
    mdx()
  ],
  site: 'https://amirmtaati.github.io',
  base: '/',
  output: 'static',
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [[rehypeKatex, { output: 'html' }]],
    shikiConfig: {
      theme: 'gruvbox-dark-soft',
      langs: ['javascript', 'typescript', 'python', 'html', 'css', 'bash', 'c', 'go'],
      wrap: true,
    },
  },
});