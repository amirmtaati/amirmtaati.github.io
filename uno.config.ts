import { defineConfig, presetUno, presetTypography, presetWebFonts, presetIcons } from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'Source Sans 3:300,400,500,600',
        serif: 'Cormorant Garamond:400,500,600,700',
      },
      provider: 'google',
    }),
    presetIcons({
      scale: 1.2,
      cdn: 'https://esm.sh/',
      collections: {
        carbon: () => import('@iconify-json/carbon/icons.json').then(i => i.default),
      }
    }),
  ],
  theme: {
    colors: {
      // Gruvbox Light
      gl: {
        bg: '#fbf1c7',
        bg2: '#ebdbb2',
        fg: '#3c3836',
        fg2: '#504945',
        accent: '#98971a',
        border: '#d5c4a1',
        tag: '#d5c4a1',
      },
      // Gruvbox Dark
      gd: {
        bg: '#282828',
        bg2: '#3c3836',
        fg: '#ebdbb2',
        fg2: '#d5c4a1',
        accent: '#b8bb26',
        border: '#504945',
        tag: '#504945',
      },
    },
  },
  shortcuts: {
    'container': 'max-w-6xl mx-auto px-4',
    'card': 'rounded-2xl border transition-all duration-300',
    'card-light': 'border-gl-border bg-gl-bg shadow-gl-border/10 shadow-md',
    'card-dark': 'border-gd-border bg-gd-bg shadow-gd-border/10 shadow-md',
    'heading': 'font-serif font-semibold',
  },
});