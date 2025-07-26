/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'gruvbox': {
					'bg0-hard': '#1d2021',
					'bg0': '#282828',
					'bg1': '#3c3836',
					'bg2': '#504945',
					'bg3': '#665c54',
					'bg4': '#7c6f64',
					'fg0': '#fbf1c7',
					'fg1': '#ebdbb2',
					'fg2': '#d5c4a1',
					'fg3': '#bdae93',
					'fg4': '#a89984',
					'red': '#cc241d',
					'green': '#98971a',
					'yellow': '#d79921',
					'blue': '#458588',
					'purple': '#b16286',
					'aqua': '#689d6a',
					'orange': '#d65d0e',
					'gray': '#928374',
					'red-bright': '#fb4934',
					'green-bright': '#b8bb26',
					'yellow-bright': '#fabd2f',
					'blue-bright': '#83a598',
					'purple-bright': '#d3869b',
					'aqua-bright': '#8ec07c',
					'orange-bright': '#fe8019',
					'gray-bright': '#a89984',
				}
			},
			fontFamily: {
				'mono': ['JetBrains Mono', 'monospace'],
				'sans': ['Inter', 'system-ui', 'sans-serif'],
			},
		},
	},
	plugins: [],
}