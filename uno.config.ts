import { defineConfig, presetUno, presetTypography, presetWebFonts, presetIcons } from 'unocss';

export default defineConfig({
  presets: [
    presetUno({
      dark: 'class',
    }),
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
        bg3: '#504945', // Added darker background for hover states
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
    'btn': 'rounded-xl transition-all shadow-sm hover:shadow-md flex items-center justify-center',
    'btn-primary': 'bg-gl-accent dark:bg-gd-accent text-white font-medium',
  },
  safelist: [
    'border-r-2',
    'border-gl-border',
    'dark:border-gd-border',
    'bg-gl-bg2',
    'dark:bg-gd-bg2',
    'shadow-[4px_0_24px_rgba(0,0,0,0.05)]',
    'dark:shadow-[4px_0_24px_rgba(0,0,0,0.2)]'
  ],
});
